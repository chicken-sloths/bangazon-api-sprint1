'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { generateSqlTable } = require("../sqlRunTemplate");
const computers = require("../../data/json/computers.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `Computers`,
      columns: 
        `computer_id INTEGER PRIMARY KEY,
        employee_id INTEGER,
        mac_address TEXT,
        purchase_date TEXT,
        decommission_date TEXT`,
      dataToIterateOver: computers,
      valuesToInsert: [
        null,
        `employee_id`,
        `mac_address`,
        `purchase_date`, 
        `decommission_date`
      ]
    }
  )
}