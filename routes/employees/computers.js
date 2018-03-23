"use strict";

const { Router } = require('express');
const computersRouter = Router();

const { getAllComputers, getComputerById } = require('../../controllers/employees/computersCtrl');

computersRouter.get('/', getAllComputers);
computersRouter.get('/:id', getComputerById);

module.exports = computersRouter;
