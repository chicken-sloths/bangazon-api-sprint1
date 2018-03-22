"use strict";

const faker = require("faker");
const _ = require("lodash");

// ASSUMPTION: limit is equal to the number of computers AND the number of employees
module.exports.generateEmployeeComputerRelationships = (employees, computers) => {
  let employeeComputerRelationships = [];
  // makes sure every computer has a unique employee and every employee has a computer
  let shuffledEmployees = _.shuffle(employees);
  for (let i=0; i<computers.length; i++) {
    let computer_id = computers[i].computer_id;
    let employee_id = shuffledEmployees[i].employee_id;
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