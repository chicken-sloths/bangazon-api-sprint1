"use strict";

const { Router } = require('express');
const trainingProgramsRouter = Router();

const controller = require('../../controllers/employees/trainingProgramsCtrl');

trainingProgramsRouter.get('/', controller.getAllTrainingPrograms);
trainingProgramsRouter.get('/:id', controller.getTrainingProgramById);
trainingProgramsRouter.post("/", controller.createNewTrainingProgram);

module.exports = trainingProgramsRouter;
