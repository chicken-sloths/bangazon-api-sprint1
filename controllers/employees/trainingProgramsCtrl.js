"use strict";

const programs = require("../../models/employees/TrainingProgramsModel");

// get single training program by id
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

// get all training programs
module.exports.getAllTrainingPrograms = (req, res, next) => {
  programs.getAllTrainingPrograms()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

// add a new training program
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

// replace existing training program with req.body data or create new training program
module.exports.updateTrainingProgram = (req, res, next) => {
  let { name, max_capacity, start_date, end_date } = req.body;
  if (name && max_capacity && start_date && end_date) {
    programs.updateTrainingProgram(req.params.id, req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please provide a `max_capacity`, `end_date`, `start_date`, and `name`.");
    next(err);
  }
};

// delete one training program by id
module.exports.deleteTrainingProgram = (req, res, next) => {
  if (req.params.id >= 0) {
    programs.deleteTrainingProgram(req.params.id)
      .then(id => {
        res.status(200).json(id);
      })
      .catch(err => next(err));
  }
};