"use strict";

const { generateComputers } = require("./_computersFaker");
const { generateDepartments } = require("./_departmentsFaker");
const { generateEmployeeComputerRelationships } = require("./_employeeComputersFaker");
const { generateEmployees } = require("./_employeesFaker");
const { generateEmployeeTrainingProgramRelationships } = require("./_employeeTrainingProgramsFaker");
const { generateTrainingPrograms } = require("./_trainingProgramsFaker")

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
  const employeeComputerRelationships = generateEmployeeComputerRelationships(employees, computers);
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