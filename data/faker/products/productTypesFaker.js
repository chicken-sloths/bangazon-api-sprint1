'use strict';
const faker = require('faker');

const generateProductTypes = (amount = 25) => {
  const types = [];

  for (let i = 0; i < amount; i++) {
    const type = {
      product_type_id: i,
      title: faker.commerce.department()
    };

    types.push(type);
  }

  return types;
};

module.exports = {
  generateProductTypes
};