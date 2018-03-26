"use strict";

const { Router } = require('express');
const computersRouter = Router();

const {
  getAllComputers,
  getComputerById,
  createNewComputer,
  deleteComputer,
  updateComputer
} = require('../../controllers/employees/computersCtrl');

computersRouter.get('/', getAllComputers);
computersRouter.get('/:id', getComputerById);
computersRouter.post('/', createNewComputer);
computersRouter.put('/:id', updateComputer);
computersRouter.delete('/:id', deleteComputer);

module.exports = computersRouter;
