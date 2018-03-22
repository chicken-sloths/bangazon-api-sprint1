'use strict';

const { generateSqlTable } = require("../sqlRunTemplate");
const computers = require("../../data/json/computers.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `Computers`,
      columns: 
        `computer_id INTEGER PRIMARY KEY,
        mac_address TEXT,
        purchase_date TEXT,
        decommission_date TEXT`,
      dataToIterateOver: computers,
      valuesToInsert: [
        `computer_id`,
        `mac_address`,
        `purchase_date`, 
        `decommission_date`
      ]
    }
  )
}