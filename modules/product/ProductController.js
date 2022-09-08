const ProductUseCase = require('./useCase/ProductUseCase');
const { httpResponse } = require('../shared/helpers/response');

class ProductController{
    constructor(productUsecase) {
        this.productUsecase = productUsecase || new ProductUseCase();
    }

    async addProduct (req, res, next) {
        console.log('ini product')
        httpResponse(await this.productUsecase.addProduct(req.body), res);
    }

    async getListProduct (req, res, next) {
        httpResponse(await this.productUsecase.listProduct(req.query), res);
    }

    async getDetailProduct (req, res, next) {
        httpResponse(await this.productUsecase.getDetailProduct(req.params), res);
    }

    async deleteProduct (req, res, next) {
        httpResponse(await this.productUsecase.deleteProduct(req.params), res);
    }

    async updateProduct (req, res, next) {
        httpResponse(await this.productUsecase.updateProduct(req.params, req.body), res);
    }

};

module.exports = ProductController;