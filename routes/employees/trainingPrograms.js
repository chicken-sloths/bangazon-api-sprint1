"use strict";

const { Router } = require('express');
const trainingProgramsRouter = Router();

const controller = require('../controllers/employees/trainingProgramsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
trainingProgramsRouter.get('/', controller);

module.exports = trainingProgramsRouter;
