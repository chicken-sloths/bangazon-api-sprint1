"use strict";

const faker = require("faker");
const randomInt = require('../randomInt');

module.exports.generateDepartments = (limit, employeeCount) => {
  let depts = [];
  for (let i=0; i<limit; i++) {
    let department_id = i;
    let supervisor_id = randomInt(employeeCount);
    let expense_budget = faker.random.number({min:5, max:10})*1000;
    let name = faker.commerce.department();
    depts.push({
      department_id,
      supervisor_id,
      expense_budget,
      name
    });
  }
  return depts;
};