const express = require('express');
const ProductController = require('../modules/product/ProductController');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        await new ProductController().addProduct(req, res, next);
    } catch (e) {
        console.log(e)
        next(e);
    }
});

router.get('/', async (req, res, next) => {
    try {
        await new ProductController().getListProduct(req, res, next);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        await new ProductController().getDetailProduct(req, res, next);
    } catch (e) {
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await new ProductController().deleteProduct(req, res, next);
    } catch (e) {
        next(e);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        await new ProductController().updateProduct(req, res, next);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
