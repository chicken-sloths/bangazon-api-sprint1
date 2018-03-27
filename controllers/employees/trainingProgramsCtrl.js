"use strict";

const programs = require("../../models/employees/TrainingProgramsModel");

// get single training program by id
module.exports.getTrainingProgramById = (req, res, next) =>
  programs.getSingleTrainingProgram(req.params.id)
    .then(data =>
      data ? res.status(200).json(data) : res.status(204).send()
    )
    .catch(err => next(err));

// get all training programs
module.exports.getAllTrainingPrograms = (req, res, next) =>
  programs.getAllTrainingPrograms()
    .then(data =>
      data.length >= 1 ? res.status(200).json(data) : res.status(204).send()
    )
    .catch(err => next(err));

// replace existing training program with req.body data or create new training program
module.exports.updateTrainingProgram = (req, res, next) => {
  let { name, max_capacity, start_date, end_date } = req.body;
  if (name && max_capacity && start_date && end_date) {
    programs.updateTrainingProgram(req.params.id, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: max_capacity, end_date, start_date, and name."
    );
    err.status = 400;
    next(err);
  }
};

// delete one training program by id
module.exports.deleteTrainingProgram = (req, res, next) => {
  if (req.params.id >= 0) {
    programs.deleteTrainingProgram(req.params.id)
      .then(changes =>
        changes >= 1 ? res.status(200).json(changes) : res.status(204).send()
      )
      .catch(err => next(err));
  }
};
