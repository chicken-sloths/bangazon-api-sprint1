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