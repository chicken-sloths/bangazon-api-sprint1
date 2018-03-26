"use strict";

const appRoot = process.cwd();
const { getAllDepartments, getSingleDepartment, createDepartment, updateDepartment } = require(appRoot + "/models/employees/DepartmentsModel");

// gets all departments
module.exports.getAllDepartments = (req, res, next) =>
  getAllDepartments()
    .then(departments =>
      departments >= 1 ?
      res.status(200).json(departments) : res.status(204).send()
    )
    .catch(err => next(err))

// gets one department
module.exports.getSingleDepartment = (req, res, next) =>
  getSingleDepartment(req.params.id)
    .then(department =>
      department >= 1 ?
      res.status(200).json(department) : res.status(204).send()
    )
    .catch(err => next(err))

// updates an existing department
module.exports.updateDepartment = (req, res, next) => {
  let { supervisor_id, expense_budget, name } = req.body;
  if (supervisor_id && expense_budget && name) {
    updateDepartment(req.params.id, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: supervisor_id, expense_budget, and name"
    );
    err.status = 400;
    next(err);
  }
}

// creates a new department
module.exports.createNewDepartment = (req, res, next) => {
  let { supervisor_id, expense_budget, name } = req.body;
  if (supervisor_id && expense_budget && name) {
    createDepartment(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: supervisor_id, expense_budget, and name"
    );
    err.status = 400;
    next(err);
  }
}
