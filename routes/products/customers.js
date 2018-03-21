"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const customersRouter = Router();

const controller = require(appRoot + '/controllers/products/customersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
customersRouter.get('/', controller);

module.exports = customersRouter;
