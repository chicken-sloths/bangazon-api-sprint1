"use strict";

const { Router } = require('express');
const employeesRouter = Router();

const controller = require('../controllers/employees/employeesCtrl');

//TODO: routes & their corresponding controllers are enumerated here
employeesRouter.get('/', controller);

module.exports = employeesRouter;
