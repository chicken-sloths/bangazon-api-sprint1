"use strict";

const faker = require("faker");

// ASSUMPTION: limit is equal to the number of computers AND the number of employees
module.exports.generateEmployeeComputerRelationships = (limit) => {
  let employeeComputerRelationships = [];
  for (let i=0; i<limit; i++) {
    let computer_id = Math.floor(Math.random()*limit)+1;
    let employee_id = Math.floor(Math.random()*limit)+1;
    let start_date = faker.date.past(5, new Date());
    let end_date = faker.date.between(start_date, new Date());
    employeeComputerRelationships.push({
      computer_id,
      employee_id,
      start_date,
      end_date
    });
  }
  return employeeComputerRelationships;
};