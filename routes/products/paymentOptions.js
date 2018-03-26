"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const paymentOptionsRouter = Router();

const controller = require('../../controllers/products/paymentOptionsCtrl');

paymentOptionsRouter.get('/', controller.getAllPaymentOptions);
paymentOptionsRouter.get('/:id', controller.getSinglePaymentOption);
paymentOptionsRouter.post('/', controller.updatePaymentOption);
paymentOptionsRouter.put('/:id', controller.updatePaymentOption);
paymentOptionsRouter.delete('/:id', controller.deletePaymentOption);

module.exports = paymentOptionsRouter;
