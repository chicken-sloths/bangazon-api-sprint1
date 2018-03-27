"use strict";

const { Router } = require('express');
const productsRouter = Router();

const {
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct } = require('../../controllers/products/productsCtrl');

productsRouter.get('/:id', getSingleProduct);
productsRouter.get('/', getAllProducts);
productsRouter.post('/', updateProduct);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

module.exports = productsRouter;
