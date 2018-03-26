"use strict";

const { Router } = require('express');
const employeesIndexRouter = Router();

employeesIndexRouter.use('/departments', require('./departments'));
employeesIndexRouter.use('/employees', require('./employees'));
employeesIndexRouter.use('/computers', require('./computers'));
employeesIndexRouter.use('/training-programs', require('./trainingPrograms'));
// employeesIndexRouter.use('/employeeComputers', require('./employeeComputers'));
// employeesIndexRouter.use('/employeeTrainingPrograms', require('./employeeTrainingPrograms'));

module.exports = employeesIndexRouter;
