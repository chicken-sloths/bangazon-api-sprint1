'use strict';
const { generateCustomers } = require('./customersFaker');
const { generateOrders } = require('./ordersFaker');
const { generatePaymentOptions } = require('./paymentOptionsFaker');
const { generateProductOrders } = require('./productOrdersFaker');
const { generateProducts } = require('./productsFaker');
const { generateProductTypes } = require('./productTypesFaker');

module.exports = {
  generateCustomers,
  generateOrders,
  generatePaymentOptions,
  generateProductOrders,
  generateProducts,
  generateProductTypes
};