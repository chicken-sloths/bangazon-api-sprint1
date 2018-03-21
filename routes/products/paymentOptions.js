"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const paymentOptionsRouter = Router();

const controller = require(appRoot + '/controllers/paymentOptionsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
paymentOptionsRouter.get('/', controller);

module.exports = paymentOptionsRouter;
