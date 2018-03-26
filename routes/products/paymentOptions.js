"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const paymentOptionsRouter = Router();

const controller = require("../../controllers/products/paymentOptionsCtrl");

// GET /payment-options
paymentOptionsRouter.get('/', controller.getAllPaymentOptions);
// GET /payment-options/1
paymentOptionsRouter.get("/:id", controller.getSinglePaymentOption);
// POST /payment-options
paymentOptionsRouter.post("/", controller.createNewPaymentOption);
// PUT /payment-options/:id
paymentOptionsRouter.put("/:id", controller.updatePaymentOption);
// DELETE /payment-options/:id
paymentOptionsRouter.delete("/:id", controller.deletePaymentOption);


module.exports = paymentOptionsRouter;
