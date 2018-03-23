"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const departmentsRouter = Router();

const { getAllDepartments, getSingleDepartment, updateDepartment, createNewDepartment } = require(appRoot + '/controllers/employees/departmentsCtrl');

departmentsRouter.get('/departments', getAllDepartments);
departmentsRouter.get('/departments/:id', getSingleDepartment);
departmentsRouter.put('/departments/:id', updateDepartment);
departmentsRouter.post('/departments', createNewDepartment);

module.exports = departmentsRouter;


