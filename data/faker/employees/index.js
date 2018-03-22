"use strict";

const { generateComputers } = require("./computerFaker");
const { generateDepartments } = require("./departmentFaker");
const { generateEmployeeComputerRelationships } = require("./employeeComputerFaker");
const { generateEmployees } = require("./employeeFaker");
const { generateEmployeeTrainingProgramRelationships } = require("./employeeTrainingProgramFaker");
const { generateTrainingPrograms } = require("./trainingProgramFaker")

module.exports.generateEmployeeData = () => {
  const specs = {
    departments: 10,
    employees: 25,
    computers: 25,
    trainingPrograms: 10
  };

  const employees = generateEmployees(25, 10);
  const departments = generateDepartments(10, 25);
  const computers = generateComputers(25);
  const employeeComputerRelationships = generateEmployeeComputerRelationships(25);
  const trainingPrograms = generateTrainingPrograms(10);
  const employeeTrainingProgramRelationships = generateEmployeeTrainingProgramRelationships(25,10);

  return {
    departments,
    employees,
    computers,
    employeeComputerRelationships,
    trainingPrograms,
    employeeTrainingProgramRelationships
  };
};