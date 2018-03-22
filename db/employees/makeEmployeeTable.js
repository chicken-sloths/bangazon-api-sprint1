'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { generateSqlTable } = require("../sqlRunTemplate");
const employees = require("../../data/json/employees.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `employees`,
      columns: 
        `employee_id INTEGER PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        department_id INTEGER`,
      dataToIterateOver: employees,
      valuesToInsert: [
        null,
        `first_name`,
        `last_name`, 
        `department_id`
      ]
    }
  )
}

