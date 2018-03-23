"use strict";

const { Router } = require('express');
const computersRouter = Router();

const {
  getAllComputers,
  getComputerById,
  createNewComputer,
  deleteComputer
} = require('../../controllers/employees/computersCtrl');

// GET /computers
computersRouter.get('/', getAllComputers);
// GET /computers/1
computersRouter.get('/:id', getComputerById);
// POST /computers
computersRouter.post("/", createNewComputer);
computersRouter.delete("/:id", deleteComputer);
// TODO: PUT /computers/1

module.exports = computersRouter;
