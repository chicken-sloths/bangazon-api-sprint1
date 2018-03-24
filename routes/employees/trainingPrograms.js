"use strict";

const { Router } = require('express');
const trainingProgramsRouter = Router();

const controller = require('../../controllers/employees/trainingProgramsCtrl');

// GET /training-programs
trainingProgramsRouter.get('/', controller.getAllTrainingPrograms);
// GET /training-programs/1
trainingProgramsRouter.get('/:id', controller.getTrainingProgramById);
// POST /training-programs
trainingProgramsRouter.post("/", controller.createNewTrainingProgram);
// PUT /training-programs/1
trainingProgramsRouter.put("/:id", controller.updateTrainingProgram);

module.exports = trainingProgramsRouter;
