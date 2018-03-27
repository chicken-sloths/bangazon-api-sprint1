'use strict';
const { generateSqlTable } = require("../sqlRunTemplate");
const employeeComputers = require("../../data/json/employeeComputers.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `Employee_Computers`,
      columns:
      `computer_id INTEGER,
      employee_id INTEGER,
      start_date TEXT,
      end_date TEXT,
      FOREIGN KEY (computer_id) REFERENCES Computers(computer_id),
      FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)`,
      dataToIterateOver: employeeComputers,
      valuesToInsert: [
        `computer_id`,
        `employee_id`,
        `start_date`,
        `end_date`
      ]
    }
  );
}