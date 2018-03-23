"use strict";

const { Router } = require('express');
const trainingProgramsRouter = Router();

const controller = require('../../controllers/employees/trainingProgramsCtrl');

trainingProgramsRouter.get('/', controller.getAllTrainingPrograms);
trainingProgramsRouter.get('/:id', controller.getTrainingProgramById);

module.exports = trainingProgramsRouter;
