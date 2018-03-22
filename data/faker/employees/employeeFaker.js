"use strict";

const faker = require("faker");

module.exports.generateEmployees = (limit, deptCount) => {
  let employees = [];
  for (let i=0; i<limit; i++) {
    let employee_id = i;
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let department_id = Math.floor(Math.random()*deptCount) + 1;
    employees.push({
      employee_id,
      first_name,
      last_name,
      department_id
    });
  }
  return employees;
};