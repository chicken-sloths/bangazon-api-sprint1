"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const employeesRouter = Router();

const {
  getAllEmployees,
  getSingleEmployee,
  postEmployee,
} = require(appRoot + '/controllers/employees/employeesCtrl');

employeesRouter.get('/', getAllEmployees);
employeesRouter.post('/', postEmployee);
employeesRouter.get('/:id', getSingleEmployee);

module.exports = employeesRouter;
