"use strict";

const { Router } = require('express');
const paymentOptionsRouter = Router();

const controller = require('../controllers/paymentOptionsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
paymentOptionsRouter.get('/', controller);

module.exports = paymentOptionsRouter;
