"use strict";

const { Router } = require('express');
const employeesRouter = Router();

const {
  getAllEmployees,
  getSingleEmployee,
  updateEmployee
} = require('../../controllers/employees/employeesCtrl');

employeesRouter.get('/', getAllEmployees);
employeesRouter.get('/:id', getSingleEmployee);
employeesRouter.post('/', updateEmployee);
employeesRouter.put('/:id', updateEmployee)
module.exports = employeesRouter;
