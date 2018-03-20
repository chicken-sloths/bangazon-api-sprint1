'use strict';
const faker = require('faker');

const generateOrders = (amount = 25) => {
  const orders = [];

  for (let i = 0; i < amount; i++) {
    const order = {
      order_id: i,
      customer_id: i,
      payment_type_id: i
    };

    orders.push(order);
  }

  return orders;
};

module.exports = {
  generateOrders
};