"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productTypesRouter = Router();

const {
  getAllProductTypes,
  getSingleProductType
} = require(appRoot + '/controllers/products/productTypesCtrl');

//TODO: routes & their corresponding controllers are enumerated here
productTypesRouter.get('/:id', getSingleProductType);
productTypesRouter.get('/', getAllProductTypes);

module.exports = productTypesRouter;
