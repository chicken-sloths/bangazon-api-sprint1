"use strict";

const appRoot = process.cwd();

const {
  getAllEmployees,
  getSingleEmployee,
  updateEmployee
} = require(appRoot + "/models/employees/EmployeesModel");

module.exports.getAllEmployees = (req, res, next) =>
  getAllEmployees()
    .then(emps =>
      emps.length >= 1 ? res.status(200).json(emps) : res.status(204).json()
    )
    .catch(err => next(err));

module.exports.getSingleEmployee = (req, res, next) =>
  getSingleEmployee(req.params.id)
    .then(emp =>
      emp ? res.status(200).json(emp) : res.status(204).json()
    )
    .catch(err => next(err));

module.exports.updateEmployee = (req, res, next) => {
  let { first_name, last_name, department_id } = req.body;
  if (first_name && last_name && department_id) {
    updateEmployee(req.params.id, req.body)
      .then(resp => res.status(201).json(resp))
      .catch(err => next(err));
  } else {
    const err = new Error("Please include: first_name, last_name, department_id");
    err.status = 400;
    next(err);
  }
};
