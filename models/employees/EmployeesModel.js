"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAllEmployees = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT * FROM Employees`, (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

module.exports.getSingleEmployee = id =>
  new Promise((resolve, reject) =>
    db.get(`SELECT * FROM Employees WHERE employee_id=${id}`, (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

module.exports.updateEmployee = (id, {first_name, last_name, department_id}) =>
  new Promise((resolve, reject) =>
    db.run(`REPLACE INTO Employees(
        employee_id,
        first_name,
        last_name,
        department_id
      )
      VALUES (
        ${id == undefined ? null : id},
        "${first_name}",
        "${last_name}",
        "${department_id}"
      )`, function(err) {
        return err ? reject(err) : resolve(this.lastID)
      }
    )
  );