"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const customersRouter = Router();

const {
  getAllCustomers,
  getOneCustomer,
  updateCustomer } = require(appRoot + '/controllers/products/customersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
customersRouter.get('/:id', getOneCustomer);
customersRouter.get('/', getAllCustomers);
customersRouter.post('/', updateCustomer);
customersRouter.put('/:id', updateCustomer);

module.exports = customersRouter;
