"use strict";

const { Router } = require('express');
const computersRouter = Router();

const {
  getAllComputers,
  getComputerById,
  createNewComputer
} = require('../../controllers/employees/computersCtrl');

computersRouter.get('/', getAllComputers);
computersRouter.get('/:id', getComputerById);
computersRouter.post("/", createNewComputer);

module.exports = computersRouter;
