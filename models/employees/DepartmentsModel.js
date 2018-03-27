"use strict";
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAllDepartments = () =>
  new Promise((resolve, reject) =>
    db.all(
      `SELECT * FROM departments`,
      (err, departments) => err ? reject(err) : resolve(departments)
    )
  );

module.exports.getSingleDepartment = (id) =>
  new Promise((resolve, reject) =>
    db.get(
      `SELECT * FROM departments WHERE department_id=${id}`,
      (err, department) => err ? reject(err) : resolve(department)
    )
  );

// updates an existing department
module.exports.updateDepartment = (id, { supervisor_id, expense_budget, name }) =>
  new Promise((resolve, reject) =>
    db.run(
      `REPLACE INTO Departments(
        department_id,
        supervisor_id,
        expense_budget,
        name
      ) VALUES (
        ${id == undefined ? null : id},
        ${supervisor_id},
        ${expense_budget},
        "${name}"
      )`,
      function (err) {
        err ? reject(err) : resolve(this.lastID)
      }
    )
  );
