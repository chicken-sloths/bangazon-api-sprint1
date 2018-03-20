"use strict";

const faker = require("faker");

module.exports.generateDepartments = (limit) => {
  let depts = [];
  for (let i=0; i<limit; i++) {
    let name = faker.commerce.department();
    depts.push({
      name
    });
  }
  return depts;
};