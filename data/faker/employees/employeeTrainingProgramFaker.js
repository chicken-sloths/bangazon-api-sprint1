"use strict";

const faker = require("faker");
const randomInt = require("../randomInt");

module.exports.generateEmployeeTrainingProgramRelationships = (employeeCount, trainingProgramCount) => {
  let employeeTrainingProgramRelationships = [];
  for (let i=0; i<employeeCount; i++) {
    let employee_id = randomInt(employeeCount);
    let training_program_id = randomInt(trainingProgramCount);
    employeeTrainingProgramRelationships.push({
      employee_id,
      training_program_id
    });
  }
  return employeeTrainingProgramRelationships;
};