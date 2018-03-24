"use strict";

const { Router } = require('express');
const productsIndexRouter = Router();

productsIndexRouter.use(require('./productTypes'));
productsIndexRouter.use(require('./products'));
productsIndexRouter.use(require('./productOrders'));
productsIndexRouter.use(require('./orders'));
productsIndexRouter.use(require('./customers'));
productsIndexRouter.use("/payment-options", require('./paymentOptions'));

module.exports = productsIndexRouter;
