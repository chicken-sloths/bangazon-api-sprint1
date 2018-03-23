"use strict";

const appRoot = process.cwd();

const {
  getAllEmployees,
  getSingleEmployee,
  postEmployee,
  putEmployee
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
  let { first_name, last_name, department_id } = req.body;
  if (first_name && last_name && department_id) {
    postEmployee(first_name, last_name, department_id)
    .then(resp => res.status(201).json(resp))
    .catch(err => next(err));
  } else {
    next(new Error("Please include first_name, last_name, department_id"));
  }
};

module.exports.updateEmployee = (req, res, next) => {
  let { first_name, last_name, department_id } = req.body;
  if (first_name, last_name, department_id) {
    putEmployee(req.params.id, first_name, last_name, department_id)
    .then(resp => res.status(201).json(resp))
    .catch(err => next(err))
  } else {
    next(new Error("Please include first_name, last_name, department_id"))
  }
};
