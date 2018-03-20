"use strict";

const faker = require("faker");

module.exports.generateEmployeeTrainingProgramRelationships = (employeeCount, trainingProgramCount) => {
  let employeeTrainingProgramRelationships = [];
  for (let i=0; i<employeeCount; i++) {
    let employee_id = Math.floor(Math.random()*employeeCount) + 1;
    let training_program_id = Math.floor(Math.random()*trainingProgramCount) + 1;
    employeeTrainingProgramRelationships.push({
      employee_id,
      training_program_id
    });
  }
  return employeeTrainingProgramRelationships;
};