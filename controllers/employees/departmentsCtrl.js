"use strict";

const appRoot = process.cwd();
const { getAllDepartments, getSingleDepartment } = require(appRoot + "/models/employees/DepartmentsModel");

module.exports.getAllDirectors = (req, res, next) => {
  getAll()
    .then(directors => {
      res.status(200).json(directors);
    })
    .catch(error => {
      next(error);
    })
}

module.exports.getOneDirector = (req, res, next) => {
  getOneDirector(req.params.id)
    .then(director => {
      res.status(200).json(director);
    })
    .catch(error => {
      next(error);
    })
}


module.exports = {  };
