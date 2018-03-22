"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const employeesRouter = Router();

const { 
  getAllEmployees, 
  getSingleEmployee 
} = require(appRoot + '/controllers/employees/employeesCtrl');

//TODO: routes & their corresponding controllers are enumerated here
employeesRouter.get('/', getAllEmployees);
employeesRouter.get('/:id', getSingleEmployee);

module.exports = employeesRouter;
