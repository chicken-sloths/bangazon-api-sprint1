"use strict";

const { generateEmployees } = require("./employeeFaker");
const { generateDepartments } = require("./departmentFaker");
const { generateEmployeeComputerRelationships } = require("./employeeComputerFaker");
const { generateEmployeeTrainingProgramRelationships } = require("./employeeTrainingProgramFaker");
const { generateEmployees } = require("./employeeFaker");
const { generateTrainingPrograms } = require("./trainingProgramFaker")

module.exports = {
  generateComputers,
  generateDepartments,
  generateEmployeeComputerRelationships,
  generateEmployeeTrainingProgramRelationships,
  generateEmployees,
  generateTrainingPrograms
};