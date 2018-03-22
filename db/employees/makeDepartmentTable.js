'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { generateSqlTable } = require("../sqlRunTemplate");
const departments = require("../../data/json/departments.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `departments`,
      columns: 
        `name TEXT`,
      dataToIterateOver: departments,
      valuesToInsert: [
        `name`
      ]
    }
  )
}