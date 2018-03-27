"use strict";

const { Router } = require('express');
const customersRouter = Router();

const {
  getAllCustomers,
  getOneCustomer,
  updateCustomer } = require('../../controllers/products/customersCtrl');

customersRouter.get('/:id', getOneCustomer);
customersRouter.get('/', getAllCustomers);
customersRouter.post('/', updateCustomer);
customersRouter.put('/:id', updateCustomer);

module.exports = customersRouter;
