const Validator = require('validatorjs');
const GenericResponseEntity = require('../../shared/entities/GenericResponseEntity');
const paginate = require("../../shared/helpers/paginate");
const { Product } = require('../../../models');
const { Op } = require('sequelize');

class ProductUseCase {
    constructor() {

    };

    async addProduct(body) {
        const response = new GenericResponseEntity();
        try {
            const rules = {
                name: 'required|string',
                qty: 'required|integer',
                picture: 'required|string',
                expiredAt: 'required|date',
            };
    
            const validator = new Validator(body, rules);
    
            if (validator.check() === false) {
                response.message = 'MALFORMED REQUEST';
                response.data = validator.errors.all();
                return response;
            }

            const newProduct = await Product.create({...body,  "isActive": true});

            response.success = true;
            response.message = 'Success Post New Product';
            response.statusCode = 200;
            response.data = newProduct;
            console.log('ini respon lagi', response)
            return response;

        } catch (error) {
            response.message = error.message;
            return response;
        };
    };

    async listProduct(query) {
        const response = new GenericResponseEntity();

        try {
            let { page, per_page, search } = query;
            page = parseInt(page ?? 1)
            per_page = parseInt(per_page ?? 10)
            query.offset = (page * per_page) - per_page
            
            const products = await Product.findAndCountAll({
                where: {
                    isActive: true,
                    [Op.and]: [
                        search
                            ? {
                                  name: {
                                      [Op.like]: `%${search}%`,
                                  },
                              }
                            : null,
                    ],
                },
                offset: query.offset,
                limit: per_page,
                order : [['id', 'DESC']]
            });

            const data = await paginate(products, page, per_page);

            response.success = true;
            response.message = 'Success Get List Product';
            response.data = data;
            return response;

        } catch (error) {
            response.message = error.message;
            return response;
        };
    };

    async getDetailProduct(params) {
        const response = new GenericResponseEntity();

        try {
            const { id } = params;
            const rules = {
                id: 'required|integer',
            };
    
            const validator = new Validator(params, rules);
    
            if (validator.check() === false) {
                response.message = 'Invalid ID';
                response.data = validator.errors.all();
                return response;
            }

            const productDetail = await Product.findByPk(id);

            if(!productDetail) {
                response.message = 'Product not found';
                return response;
            };

            response.success = true;
            response.message = 'Success Get Detail Product';
            response.data = productDetail;
            return response;

        } catch (error) {
            response.message = error.message;
            return response;
        };
    };

    async deleteProduct(params) {
        const response = new GenericResponseEntity();

        try {
            const { id } = params;
            const rules = {
                id: 'required|integer',
            };
    
            const validator = new Validator(params, rules);
    
            if (validator.check() === false) {
                response.message = 'Invalid ID';
                response.data = validator.errors.all();
                return response;
            }

            const productDetail = await Product.findByPk(id);

            if(!productDetail) {
                response.message = 'Product not found';
                return response;
            };

            productDetail.isActive = false;
            await productDetail.save();

            response.success = true;
            response.message = 'Success Delete Product';
            response.data = productDetail;
            return response;

        } catch (error) {
            console.log(error)
            response.message = error.message;
            return response;
        };
    };

    async updateProduct(params, body) {
        const response = new GenericResponseEntity();

        try {
            const { id } = params;

            const rules = {
                name: 'required|string',
                qty: 'required|integer',
                picture: 'required|string',
                expiredAt: 'required|date',
            };
    
            const validator = new Validator(body, rules);
    
            if (validator.check() === false) {
                response.message = 'Invalid Form';
                response.data = validator.errors.all();
                return response;
            }

            const productDetail = await Product.findByPk(id);

            if(!productDetail.isActive) {
                response.message = `Product inactive, forvidden to update product`;
                return response
            };
        
            if(productDetail) await productDetail.update(body);

            response.success = true;
            response.message = 'Success Update Product';
            response.data = productDetail;
            return response;

        } catch (error) {
            response.message = error.message;
            return response;
        };
    };
}

module.exports = ProductUseCase;