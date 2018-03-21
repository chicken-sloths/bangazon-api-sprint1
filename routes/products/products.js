"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const productsRouter = Router();

const controller = require(appRoot + '/controllers/products/productsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
productsRouter.get('/', controller);

module.exports = productsRouter;
