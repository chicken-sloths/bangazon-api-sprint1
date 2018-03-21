"use strict";

const { Router } = require('express');
const productsRouter = Router();

const controller = require('../controllers/products/productsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
productsRouter.get('/', controller);

module.exports = productsRouter;
