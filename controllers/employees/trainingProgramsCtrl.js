"use strict";

const programs = require("../../models/employees/TrainingProgramsModel");

module.exports.getTrainingProgramById = (req, res, next) => {
  programs.getSingleTrainingProgram(req.params.id)
    .then(data => {
      if (data.length >= 1) {
        res.status(200).json(data);
      } else {
        let err = new Error("Training program not found.");
        next(err);
      }
    })
    .catch(err => next(err));
};

module.exports.getAllTrainingPrograms = (req, res, next) => {
  programs.getAllTrainingPrograms()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.createNewTrainingProgram = (req, res, next) => {
  let { max_capacity, end_date, start_date, name } = req.body;
  if (max_capacity && end_date && start_date && name) {
    programs.createNewTrainingProgram(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please provide a `max_capacity`, `end_date`, `start_date`, and `name`.");
    next(err);
  }
};