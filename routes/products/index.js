"use strict";

const { Router } = require('express');
const productsIndexRouter = Router();

productsIndexRouter.use('/products', require('./products'));
productsIndexRouter.use('/product-types', require('./productTypes'));
productsIndexRouter.use('/orders', require('./orders'));
productsIndexRouter.use('/customers', require('./customers'));
productsIndexRouter.use('/payment-options', require('./paymentOptions'));
// productsIndexRouter.use('/productOrders', require('./productOrders'));

module.exports = productsIndexRouter;
