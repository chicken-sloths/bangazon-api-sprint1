"use strict";

const { Router } = require('express');
const productsIndexRouter = Router();

// productsIndexRouter.use(require('./productTypes'));
// productsIndexRouter.use(require('./products'));
// productsIndexRouter.use(require('./productOrders'));
// productsIndexRouter.use(require('./orders'));
productsIndexRouter.use("/customers", require('./customers'));
// productsIndexRouter.use(require('./paymentOptions'));

module.exports = productsIndexRouter;
