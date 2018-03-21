"use strict";

const { Router } = require('express');
const computersRouter = Router();

const controller = require('../controllers/employees/computersCtrl');

//TODO: routes & their corresponding controllers are enumerated here
computersRouter.get('/', controller);

module.exports = computersRouter;
