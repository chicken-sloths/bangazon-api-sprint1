"use strict";

const computers = require("../../models/employees/ComputersModel");

// gets one computer by id; throws error if none
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

// gets all computers; throws an error if none
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

// creates a new computer with info from req.body
module.exports.createNewComputer = (req, res, next) => {
  let { mac_address, purchase_date, decommission_date } = req.body;
  if (mac_address && purchase_date && decommission_date) {
    // ready to catch a SyntaxError (bad JSON)
    computers.createComputer(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please supply a `mac_address`, `purchase_date`, and `decommission_date`.");
    next(err);
  }
};

// delete computer by id
module.exports.deleteComputer = (req, res, next) => {
  computers.deleteComputer(req.params.id)
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => next(err));
};

module.exports.updateComputer = (req, res, next) => {
  let { mac_address, purchase_date, decommission_date } = req.body;
  if (mac_address && purchase_date && decommission_date) {
    computers.updateComputer(req.params.id, req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please supply a `mac_address`, `purchase_date`, and `decommission_date`.");
    next(err);
  }
};