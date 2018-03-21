'use strict';

const buildEmployeeData = require('./employees/index');
const buildProductData = require('./products/index');

buildEmployeeData.makeComputerTable();
buildEmployeeData.makeDepartmentTable();
buildEmployeeData.makeEmployeeComputerTable();
buildEmployeeData.makeEmployeeTable();
buildEmployeeData.makeEmployeeTrainingTable();
buildEmployeeData.makeTrainingProgramTable();

buildProductData.makeCustomerTable();
buildProductData.makeOrderTable();
buildProductData.makePaymentOptionsTable();
buildProductData.makeProductOrderTable();
buildProductData.makeProductsTable();
buildProductData.makeProductTypeTable();