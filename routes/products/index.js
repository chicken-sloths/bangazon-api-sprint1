"use strict";

const { Router } = require('express');
const productsIndexRouter = Router();

productsIndexRouter.use('/product-type', require('./productTypes'));
productsIndexRouter.use(require('./products'));
productsIndexRouter.use(require('./productOrders'));
productsIndexRouter.use(require('./orders'));
productsIndexRouter.use(require('./customers'));
productsIndexRouter.use(require('./paymentOptions'));

module.exports = productsIndexRouter;
