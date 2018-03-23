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

module.exports.postEmployee = (req, res, next) => {
  let { first_name = false, last_name = , department_id } = req.body;
  postEmployee(req.body)
  .then(() => res.status(201))
  .catch(err => next(err))
};
