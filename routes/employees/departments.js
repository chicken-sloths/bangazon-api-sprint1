"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const departmentsRouter = Router();

const controller = require(appRoot + '/controllers/employees/departmentsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
departmentsRouter.get('/', controller);

module.exports = departmentsRouter;
