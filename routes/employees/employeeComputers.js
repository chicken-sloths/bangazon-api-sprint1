"use strict";

const { Router } = require('express');
const employeeComputersRouter = Router();

const controller = require('../controllers/employees/employeeComputersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
employeeComputersRouter.get('/', controller);

module.exports = employeeComputersRouter;
