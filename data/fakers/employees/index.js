"use strict";

const { generateComputers } = require("./computerFaker");
const { generateDepartments } = require("./departmentFaker");
const { generateEmployeeComputerRelationships } = require("./employeeComputerFaker");
const { generateEmployees } = require("./employeeFaker");
const { generateEmployeeTrainingProgramRelationships } = require("./employeeTrainingProgramFaker");
const { generateTrainingPrograms } = require("./trainingProgramFaker");

module.exports = {
  generateComputers,
  generateDepartments,
  generateEmployeeComputerRelationships,
  generateEmployeeTrainingProgramRelationships,
  generateEmployees,
  generateTrainingPrograms
};