"use strict";

const { Router } = require('express');
const employeesIndexRouter = Router();

employeesIndexRouter.use(require('./departments'));
employeesIndexRouter.use('/employees', require('./employees'));
employeesIndexRouter.use("/computers", require('./computers'));
employeesIndexRouter.use("/training-programs", require('./trainingPrograms'));


module.exports = employeesIndexRouter;
