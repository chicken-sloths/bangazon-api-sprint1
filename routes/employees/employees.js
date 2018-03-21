"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const employeesRouter = Router();

const controller = require(appRoot + '/controllers/employees/employeesCtrl');

//TODO: routes & their corresponding controllers are enumerated here
employeesRouter.get('/', controller);

module.exports = employeesRouter;
