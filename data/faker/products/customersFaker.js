'use strict';
const faker = require('faker');

const generateCustomers = (amount = 25) => {
  const customers = [];

  for (let i = 0; i < amount; i++) {
    const customer = {
      customer_id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      account_creation_date: faker.date.recent(),
      street_address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      postal_code: faker.address.zipCode(),
      phone_number: faker.phone.phoneNumber()
    };

    customers.push(customer);
  }

  return customers;
};

module.exports = {
  generateCustomers
};