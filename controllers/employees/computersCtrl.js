"use strict";

const computers = require("../../models/employees/ComputersModel");

// gets one computer by id; throws error if none
module.exports.getComputerById = (req, res, next) => {
  computers.getSingleComputer(req.params.id)
    .then(data =>
      data.length >= 1 ? res.status(200).json(data) : res.status(204).json()
    )
    .catch(err => next(err));
};

// gets all computers; throws an error if none
module.exports.getAllComputers = (req, res, next) => {
  computers.getAllComputers()
    .then(data =>
      data.length >= 1 ? res.status(200).json(data) : res.status(204).json()
    )
    .catch(err => next(err));
}

// delete computer by id
module.exports.deleteComputer = (req, res, next) => {
  computers.deleteComputer(req.params.id)
    .then(id => res.status(200).json(id))
    .catch(err => next(err));
};

module.exports.updateComputer = (req, res, next) => {
  let { mac_address, purchase_date, decommission_date } = req.body;
  if (mac_address && purchase_date && decommission_date) {
    computers.updateComputer(req.params.id, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: mac_address, purchase_date, and decommission_date."
    );
    err.status = 400;
    next(err);
  }
};
