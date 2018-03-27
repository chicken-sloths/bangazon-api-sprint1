'use strict';
// All functions for building Employee Data
const { 
  makeComputersTable,
  makeDepartmentsTable,
  makeEmployeeComputersTable,
  makeEmployeesTable,
  makeEmployeeTrainingProgramsTable,
  makeTrainingProgramsTable
} = require('./employees/index');

// All functions for building Product Data
const { 
  makeCustomersTable,
  makeOrdersTable,
  makePaymentOptionsTable,
  makeProductOrdersTable,
  makeProductsTable,
  makeProductTypesTable
} = require('./products/index');

makeComputersTable();
makeDepartmentsTable();
makeEmployeesTable();
makeTrainingProgramsTable();
makeEmployeeComputersTable();
makeEmployeeTrainingProgramsTable();

makeCustomersTable();
makeOrdersTable();
makePaymentOptionsTable();
makeProductTypesTable();
makeProductsTable();
makeProductOrdersTable();