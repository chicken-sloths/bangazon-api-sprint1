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

// GET /computers
computersRouter.get('/', getAllComputers);
// GET /computers/1
computersRouter.get('/:id', getComputerById);
// POST /computers
computersRouter.post("/", createNewComputer);
computersRouter.delete("/:id", deleteComputer);
computersRouter.put("/:id", updateComputer);

module.exports = computersRouter;
