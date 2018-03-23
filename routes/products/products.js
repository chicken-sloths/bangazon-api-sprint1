"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productsRouter = Router();

const { getSingleProduct, getAllProducts, postProduct, putProduct } = require(appRoot + '/controllers/products/productsCtrl');

productsRouter.get('/products/:id', getSingleProduct);
productsRouter.get('/products/', getAllProducts);
productsRouter.post('/products/', postProduct);
productsRouter.put('/products/:id', putProduct);

module.exports = productsRouter;
