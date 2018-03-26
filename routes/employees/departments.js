"use strict";

const appRoot = process.cwd();

const { Router } = require(`express`);
const departmentsRouter = Router();

const { getAllDepartments, getSingleDepartment, updateDepartment, createNewDepartment } = require(appRoot + `/controllers/employees/departmentsCtrl`);

departmentsRouter.get(`/`, getAllDepartments);
departmentsRouter.get(`/:id`, getSingleDepartment);
departmentsRouter.post(`/`, createNewDepartment);
departmentsRouter.put(`/:id`, updateDepartment);

module.exports = departmentsRouter;


