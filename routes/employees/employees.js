"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const employeesRouter = Router();

const {
  getAllEmployees,
  getSingleEmployee,
  postEmployee,
  updateEmployee
} = require(appRoot + '/controllers/employees/employeesCtrl');

employeesRouter.get('/', getAllEmployees);
employeesRouter.post('/', postEmployee);
employeesRouter.get('/:id', getSingleEmployee);
employeesRouter.put('/:id', updateEmployee)
module.exports = employeesRouter;
