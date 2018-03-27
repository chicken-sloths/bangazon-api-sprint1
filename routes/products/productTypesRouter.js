"use strict";

const { Router } = require('express');
const productTypesRouter = Router();

const {
  deleteProductType,
  getAllProductTypes,
  getSingleProductType,
  updateProductTypesTable
} = require('../../controllers/products/productTypesCtrl');

productTypesRouter.get('/', getAllProductTypes);
productTypesRouter.get('/:id', getSingleProductType);
productTypesRouter.post('/', updateProductTypesTable);
productTypesRouter.put('/:id', updateProductTypesTable);
productTypesRouter.delete('/:id', deleteProductType);

module.exports = productTypesRouter;
