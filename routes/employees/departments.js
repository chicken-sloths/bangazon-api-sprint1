"use strict";

const { Router } = require('express');
const departmentsRouter = Router();

const controller = require('../controllers/employees/departmentsCtrl');

//TODO: routes & their corresponding controllers are enumerated here
departmentsRouter.get('/', controller);

module.exports = departmentsRouter;
