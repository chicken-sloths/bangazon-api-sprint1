"use strict";

const { generateComputers } = require("./computerFaker");
const { generateDepartments } = require("./departmentFaker");
const { generateEmployeeComputerRelationships } = require("./employeeComputerFaker");
const { generateEmployees } = require("./employeeFaker");
const { generateEmployeeTrainingProgramRelationships } = require("./employeeTrainingProgramFaker");
const { generateTrainingPrograms } = require("./trainingProgramFaker")

// SAMPLE CALLS

// ASSUMPTION: 
//  10 departments
//  25 employees
//  25 computers
//  10 training programs

// generateDepartments(10);
// generateEmployees(25, 10);
// generateComputers(25);
// generateEmployeeComputerRelationships(25);
// generateTrainingPrograms(10);
// generateEmployeeTrainingProgramRelationships(25,10);

module.exports = {
  generateComputers,
  generateDepartments,
  generateEmployeeComputerRelationships,
  generateEmployeeTrainingProgramRelationships,
  generateEmployees,
  generateTrainingPrograms
};