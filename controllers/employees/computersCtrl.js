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

module.exports.createNewComputer = (req, res, next) => {
  // ready to catch a SyntaxError (bad JSON)
  try {
    computers.createComputer(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } catch(e) {
    let err = new Error(`${e.name}: ${e.message}.`);
    next(err);
  }
};