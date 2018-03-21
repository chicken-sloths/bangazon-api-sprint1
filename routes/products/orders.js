"use strict";

const { Router } = require('express');
const ordersRouter = Router();

const controller = require('../controllers/products/ordersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
ordersRouter.get('/', controller);

module.exports = ordersRouter;
