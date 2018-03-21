'use strict';

const {
  _generateCustomers,
  _generateOrders,
  _generatePaymentOptions,
  _generateProductOrders,
  _generateProducts,
  _generateProductTypes
} = require('./products/index');

const generateFakerJSON = () => {
  const fakerDataAmount = {
    customerAmount: 25,
    orderAmount: 35,
    productAmount: 45,
    productTypesAmount: 10,
    maxProductsOnOrder: 5
  };
 
  const customers = _generateCustomers(fakerDataAmount),
        productTypes = _generateProductTypes(fakerDataAmount),
        products = _generateProducts(fakerDataAmount),
        paymentOptions = _generatePaymentOptions(fakerDataAmount),
        orders = _generateOrders(fakerDataAmount, customers, paymentOptions),
        productOrders = _generateProductOrders(fakerDataAmount, orders);

  return {customers, productTypes, products, paymentOptions, orders, productOrders}
};

module.exports = generateFakerJSON;