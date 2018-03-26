"use strict";

const appRoot = process.cwd();

const { Router } = require(`express`);
const departmentsRouter = Router();

const {
  getAllDepartments,
  getSingleDepartment,
  updateDepartment } = require(appRoot + `/controllers/employees/departmentsCtrl`);

departmentsRouter.get(`/`, getAllDepartments);
departmentsRouter.get(`/:id`, getSingleDepartment);
departmentsRouter.post(`/`, updateDepartment);
departmentsRouter.put(`/:id`, updateDepartment);

module.exports = departmentsRouter;


