"use strict";

const faker = require("faker");
const _ = require("lodash");

module.exports.generateComputers = (limit, employees) => {
  let computers = [];
  let employee_ids = employees.map(e => e.employee_id);
  // makes sure every computer has a unique employee and every employee has a computer
  employee_ids = _.shuffle(employee_ids);
  for (let i=0; i<limit; i++) {
    let computer_id = i;
    let mac_address = faker.internet.mac();
    let purchase_date = faker.date.past(5, new Date());
    let decommission_date = faker.date.between(purchase_date, new Date());
    // ASSUMPTION: there are as many computers as employees
    let employee_id = employee_ids[i];
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