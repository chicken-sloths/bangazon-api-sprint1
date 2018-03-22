'use strict';

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
        name TEXT,
        FOREIGN KEY (supervisor_id)
        REFERENCES Employees(employee_id)`,
      dataToIterateOver: departments,
      valuesToInsert: [
        null,
        `supervisor_id`,
        `expense_budget`,
        `name`
      ]
    }
  )
}