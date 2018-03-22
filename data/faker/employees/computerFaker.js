"use strict";

const faker = require("faker");
const randomInt = require('../randomInt');

module.exports.generateComputers = (limit) => {
  let computers = [];
  for (let i=0; i<limit; i++) {
    let computer_id = i;
    let mac_address = faker.internet.mac();
    let purchase_date = faker.date.past(5, new Date());
    let decommission_date = faker.date.between(purchase_date, new Date());
    // ASSUMPTION: there are as many computers as employees
    let employee_id = randomInt(limit);
    computers.push({
      computer_id,
      mac_address,
      employee_id,
      purchase_date,
      decommission_date
    });
  }
  return computers;
};