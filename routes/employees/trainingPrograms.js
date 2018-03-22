"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const trainingProgramsRouter = Router();

const controller = require(appRoot + '/controllers/employees/trainingProgramsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
trainingProgramsRouter.get('/', controller);

module.exports = trainingProgramsRouter;
