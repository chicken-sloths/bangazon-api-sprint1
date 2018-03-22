"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productOrdersRouter = Router();

const controller = require(appRoot + '/controllers/products/productOrdersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
productOrdersRouter.get('/', controller);

module.exports = productOrdersRouter;
