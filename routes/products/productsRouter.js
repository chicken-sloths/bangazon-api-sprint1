"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productsRouter = Router();

const { getSingleProduct, getAllProducts, postProduct, putProduct, deleteProduct } = require(appRoot + '/controllers/products/productsCtrl');

productsRouter.get('/:id', getSingleProduct);
productsRouter.get('/', getAllProducts);
productsRouter.post('/', postProduct);
productsRouter.put('/:id', putProduct);
productsRouter.delete('/:id', deleteProduct);

module.exports = productsRouter;
