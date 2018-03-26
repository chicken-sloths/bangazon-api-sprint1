"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const employeesRouter = Router();

const {
  getAllEmployees,
  getSingleEmployee,
  updateEmployee
} = require(appRoot + '/controllers/employees/employeesCtrl');

employeesRouter.get('/', getAllEmployees);
employeesRouter.post('/', updateEmployee);
employeesRouter.get('/:id', getSingleEmployee);
employeesRouter.put('/:id', updateEmployee)
module.exports = employeesRouter;
