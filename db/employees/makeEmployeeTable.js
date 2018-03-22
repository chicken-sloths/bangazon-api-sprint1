'use strict';

const { generateSqlTable } = require("../sqlRunTemplate");
const employees = require("../../data/json/employees.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `Employees`,
      columns: 
        `employee_id INTEGER PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        department_id INTEGER,
        FOREIGN KEY (department_id)
        REFERENCES Departments(department_id)`,
      dataToIterateOver: employees,
      valuesToInsert: [
        `employee_id`,
        `first_name`,
        `last_name`, 
        `department_id`
      ]
    }
  )
}

