"use strict";

const { Router } = require('express');
const employeesIndexRouter = Router();

employeesIndexRouter.use(require('./departments'));
employeesIndexRouter.use(require('./employees'));
employeesIndexRouter.use(require('./employeeComputers'));
employeesIndexRouter.use("/computers", require('./computers'));
employeesIndexRouter.use(require('./trainingPrograms'));
employeesIndexRouter.use(require('./employeeTrainingPrograms'));

module.exports = employeesIndexRouter;
