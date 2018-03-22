"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const customersRouter = Router();

const { getAllCustomers, getOneCustomer } = require(appRoot + '/controllers/products/customersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
customersRouter.get('/customers/:id', getOneCustomer);
customersRouter.get('/customers', getAllCustomers);


module.exports = customersRouter;
