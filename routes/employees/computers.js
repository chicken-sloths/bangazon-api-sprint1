"use strict";

const { Router } = require('express');
const computersRouter = Router();

const {
  getAllComputers,
  getComputerById,
  deleteComputer,
  updateComputer
} = require('../../controllers/employees/computersCtrl');

// GET /computers
computersRouter.get('/', getAllComputers);
// GET /computers/1
computersRouter.get('/:id', getComputerById);
// POST /computers
computersRouter.post("/", updateComputer);
// DELETE /computers/1
computersRouter.delete("/:id", deleteComputer);
// PUT /computers/1
computersRouter.put("/:id", updateComputer);

module.exports = computersRouter;
