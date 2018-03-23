"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productTypesRouter = Router();

const {
  getAllProductTypes,
  getSingleProductType,
  updateProductTypesTable
} = require(appRoot + '/controllers/products/productTypesCtrl');

productTypesRouter.get('/', getAllProductTypes);
productTypesRouter.post('/', updateProductTypesTable);
productTypesRouter.get('/:id', getSingleProductType);
productTypesRouter.put('/:id', updateProductTypesTable);

module.exports = productTypesRouter;
