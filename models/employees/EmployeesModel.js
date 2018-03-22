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
