'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { generateSqlTable } = require("../sqlRunTemplate");
const departments = require("../../data/json/departments.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `Departments`,
      columns: 
        `department_id INTEGER PRIMARY KEY,
        supervisor_id INTEGER,
        expense_budget INTEGER,
        name TEXT
        FOREIGN KEY (supervisor_id)
        REFERENCES Employees(employee_id)`,
      dataToIterateOver: departments,
      valuesToInsert: [
        `name`
      ]
    }
  )
}