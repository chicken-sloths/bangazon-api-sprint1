"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productTypesRouter = Router();

const {
  deleteProductType,
  getAllProductTypes,
  getSingleProductType,
  updateProductTypesTable
} = require(appRoot + '/controllers/products/productTypesCtrl');

productTypesRouter.get('/', getAllProductTypes);
productTypesRouter.get('/:id', getSingleProductType);
productTypesRouter.post('/', updateProductTypesTable);
productTypesRouter.put('/:id', updateProductTypesTable);
productTypesRouter.delete('/:id', deleteProductType);

module.exports = productTypesRouter;
