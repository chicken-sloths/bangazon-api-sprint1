'use strict';
const faker = require('faker');

const generateProducts = (amount = 25) => {
  let products = [];

  for (let i = 0; i < 25; i++) {
    const product = {
      product_id: i,
      price: faker.commerce.price(),
      title: faker.commerce.productName(),
      description: faker.commerce.productAdjective(),
      product_type_id: i,
      creator_id: i
    };

    products.push(product);
  }

  return products;
};

module.exports = {
  generateProducts
};