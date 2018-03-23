"use strict";

const appRoot = process.cwd();
const { getAllDepartments, getSingleDepartment, createDepartment, updateDepartment } = require(appRoot + "/models/employees/DepartmentsModel");

module.exports.getAllDepartments= (req, res, next) => {
  getAllDepartments()
    .then(departments => {
      res.status(200).json(departments);
    })
    .catch(error => {
      next(error);
    })
}

module.exports.getSingleDepartment = (req, res, next) => {
  getSingleDepartment(req.params.id)
    .then(department => {
      res.status(200).json(department);
    })
    .catch(error => {
      next(error);
    })
}

module.exports.updateDepartment = (req, res, next) => {
  let { supervisor_id, expense_budget, name } = req.body;
  if(supervisor_id && expense_budget && name){
    updateDepartment(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => next(error));
  } else {
    let error = new Error ("Please supply a supervisor_id, expense_budget, and name");
    next(error);
  }
}

module.exports.createNewDepartment = (req, res, next) => {
  let { supervisor_id, expense_budget, name } = req.body;
  if (supervisor_id && expense_budget && name) {
    createDepartment(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => next(error));
  } else {
    let error = new Error("Please supply a supervisor_id, expense_budget, and name");
    next(error);
  }
}
