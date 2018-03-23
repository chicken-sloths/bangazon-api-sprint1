"use strict";

const appRoot = process.cwd();
const { getAllDepartments, getSingleDepartment } = require(appRoot + "/models/employees/DepartmentsModel");

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

