"use strict";

const { Router } = require('express');
const employeeTrainingProgramsRouter = Router();

const controller = require('../controllers/employees/employeeTrainingProgramsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
employeeTrainingProgramsRouter.get('/', controller);

module.exports = employeeTrainingProgramsRouter;
