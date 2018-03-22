"use strict";

const computers = require("../../models/employees/ComputersModel");

module.exports.getComputerById = (req, res, next) => {
  computers.getSingleComputer(req.params.id)
    .then(data => {
      if (data.length >= 1) {
        res.status(200).json(data);
      } else {
        let err = new Error("Computer not found.");
        next(err);
      }
    })
    .catch(err => next(err));
};

module.exports.getAllComputers = (req, res, next) => {
  computers.getAllComputers()
    .then(data => {
      if (data.length >= 1) {
        res.status(200).json(data);
      } else {
        let err = new Error("No computers found.");
        next(err);
      }
    })
    .catch(err => next(err));
}