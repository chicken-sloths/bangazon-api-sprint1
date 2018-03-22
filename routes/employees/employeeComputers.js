"use strict";

const appRoot = process.cwd()

const { Router } = require('express');
const employeeComputersRouter = Router();

const controller = require(appRoot + '/controllers/employees/employeeComputersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
employeeComputersRouter.get('/', controller);

module.exports = employeeComputersRouter;
