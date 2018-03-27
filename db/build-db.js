'use strict';
// All functions for building Employee Data
const { 
  makeComputerTable,
  makeDepartmentTable,
  makeEmployeeComputerTable,
  makeEmployeeTable,
  makeEmployeeTrainingTable,
  makeTrainingProgramTable
} = require('./employees/index');

// All functions for building Product Data
const { 
  makeCustomerTable,
  makeOrderTable,
  makePaymentOptionsTable,
  makeProductOrderTable,
  makeProductsTable,
  makeProductTypeTable
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