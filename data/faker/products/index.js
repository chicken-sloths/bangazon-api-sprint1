'use strict';
const { _generateCustomers } = require('./_customersFaker');
const { _generateOrders } = require('./_ordersFaker');
const { _generatePaymentOptions } = require('./_paymentOptionsFaker');
const { _generateProductOrders } = require('./_productOrdersFaker');
const { _generateProducts } = require('./_productsFaker');
const { _generateProductTypes } = require('./_productTypesFaker');

module.exports = {
  _generateCustomers,
  _generateOrders,
  _generatePaymentOptions,
  _generateProductOrders,
  _generateProducts,
  _generateProductTypes
};