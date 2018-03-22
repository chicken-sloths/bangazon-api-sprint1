"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const departmentsRouter = Router();

const { getAllDepartments, getSingleDepartment } = require(appRoot + '/controllers/employees/departmentsCtrl');

departmentsRouter.get('/departments', getAllDepartments);
departmentsRouter.get('/departments/:id', getSingleDepartment);

module.exports = departmentsRouter;


