"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const computersRouter = Router();

const controller = require(appRoot + '/controllers/employees/computersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
computersRouter.get('/', controller);

module.exports = computersRouter;
