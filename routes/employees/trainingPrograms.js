"use strict";

const { Router } = require('express');
const trainingProgramsRouter = Router();

const controller = require('../../controllers/employees/trainingProgramsCtrl');

trainingProgramsRouter.get('/', controller.getAllTrainingPrograms);
trainingProgramsRouter.get('/:id', controller.getTrainingProgramById);
trainingProgramsRouter.post('/', controller.createNewTrainingProgram);
trainingProgramsRouter.put('/:id', controller.updateTrainingProgram);
trainingProgramsRouter.delete('/:id', controller.deleteTrainingProgram);

module.exports = trainingProgramsRouter;
