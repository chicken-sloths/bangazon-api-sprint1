"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productsRouter = Router();

const { getSingleProduct, getAllProducts } = require(appRoot + '/controllers/products/productsCtrl');

productsRouter.get('/products/:id', getSingleProduct);
productsRouter.get('/products/', getAllProducts);

module.exports = productsRouter;
