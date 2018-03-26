"use strict";

const { Router } = require('express');
const productsIndexRouter = Router();

productsIndexRouter.use('/product-types', require('./productTypes'));
productsIndexRouter.use(require('./products'));
productsIndexRouter.use(require('./orders'));
productsIndexRouter.use(require('./customers')); // throws no such column error
productsIndexRouter.use("/payment-options", require('./paymentOptions')); // throws no such column error

module.exports = productsIndexRouter;
