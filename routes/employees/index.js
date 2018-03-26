"use strict";

const { Router } = require('express');
const employeesIndexRouter = Router();

employeesIndexRouter.use('/departments', require('./departmentsRouter'));
employeesIndexRouter.use('/employees', require('./employeesRouter'));
employeesIndexRouter.use('/computers', require('./computersRouter'));
employeesIndexRouter.use('/training-programs', require('./trainingProgramsRouter'));

module.exports = employeesIndexRouter;
