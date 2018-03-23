"use strict";
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM departments`, (err, departments) => {
      if (err) {
        reject(err);
      }
      resolve(departments);
    })
  })
}

module.exports.getSingleDepartment = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM departments WHERE department_id=${id}`, (err, department) => {
      if (err) {
        reject(err);
      }
      resolve(department);
    })
  })
}

// POST
// PUT

//creates a new department with data from req.body
module.exports.createDepartment = ({supervisor_id, expense_budget, name}) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Departments (
      supervisor_id,
      expense_budget,
      name
    ) VALUES (
      ${supervisor_id},
      ${expense_budget},
      "${name}"
    )`, error => {
      if(error) return reject(error);
      resolve(this.lastID);
    })
  })
}

// updates an existing department 
module.exports.updateDepartment = (id, {supervisor_id, expense_budget, name}) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE Departments 
    SET
      supervisor_id=${supervisor_id},
      expense_budget=${expense_budget},
      name="${name}"
    WHERE department_id = ${id}`,
    error => {
      if(error) return reject(error);
      resolve(id);
    });
  });
}




