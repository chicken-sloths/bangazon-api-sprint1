"use strict";

const appRoot = process.cwd();

const { 
  getAllEmployees, 
  getSingleEmployee 
} = require(appRoot + "/models/employees/EmployeesModel");

module.exports.getAllEmployees = (req, res, next) =>
  getAllEmployees()
  .then(emps => res.status(200).json(emps))
  .catch(err => next(err));

module.exports.getSingleEmployee = (req, res, next) =>
  getSingleEmployee(req.params.id)
  .then(emp => res.status(200).json(emp))
  .catch(err => next(err)); 
