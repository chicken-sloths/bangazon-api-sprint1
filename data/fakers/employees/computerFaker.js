"use strict";

const faker = require("faker");

module.exports.generateComputers = (limit) => {
  let computers = [];
  for (let i=0; i<limit; i++) {
    let mac_address = faker.internet.mac();
    let purchase_date = faker.date.past(5, new Date());
    // TODO: decommission date
    // ASSUMPTION: there are as many computers as employees
    let employee_id = Math.floor(Math.random() * limit) + 1;
    computers.push({
      mac_address,
      employee_id,
      purchase_date
      // TODO: decommission date
    });
  }
  return computers;
};