"use strict";

const { Router } = require('express');
const productsIndexRouter = Router();

productsIndexRouter.use('/products', require('./productsRouter'));
productsIndexRouter.use('/product-types', require('./productTypesRouter'));
productsIndexRouter.use('/orders', require('./ordersRouter'));
productsIndexRouter.use('/customers', require('./customersRouter'));
productsIndexRouter.use('/payment-options', require('./paymentOptionsRouter'));

module.exports = productsIndexRouter;
