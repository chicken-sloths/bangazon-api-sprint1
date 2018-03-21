"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const ordersRouter = Router();

const controller = require(appRoot + '/controllers/products/ordersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
ordersRouter.get('/', controller);

module.exports = ordersRouter;
