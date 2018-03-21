'use strict';
const faker = require('faker');
const randomInt = require('../randomInt');

const _generateProductOrders = ({ customerAmount, maxProductsOnOrder, productAmount }, orders) => {
  let productOrders = [];

  // Create a product for each customer
  for (let i = 0; i < customerAmount; i++) {

    // Check if a customer has an order
    const randomCustomerId = randomInt(customerAmount);
    const customerOrder = orders.find(order => order.customer_id === randomCustomerId) || null;

    // If there is an order, add a random amount of products to it.
    if (customerOrder !== null) {
      const randomAmountOfProducts = randomInt(maxProductsOnOrder) + 1;

      for (let j = 0; j < randomAmountOfProducts; j++) {
        const randomProductId = randomInt(productAmount);
        const productOrder = {
          product_order_id: i,
          product_id: randomProductId,
          order_id: customerOrder.order_id
        };

        productOrders.push(productOrder);
      }
    }
  }

  return productOrders;
};

module.exports = {
  _generateProductOrders
};
