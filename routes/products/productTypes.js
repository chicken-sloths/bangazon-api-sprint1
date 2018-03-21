"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productTypesRouter = Router();

const controller = require(appRoot + '/controllers/products/productTypesCtrl');

//TODO: routes & their corresponding controllers are enumerated here
productTypesRouter.get('/', controller);

module.exports = productTypesRouter;
