'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { generateSqlTable } = require("../sqlRunTemplate");
const trainingPrograms = require("../../data/json/trainingPrograms.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `training_programs`,
      columns: 
        `training_program_id INTEGER PRIMARY KEY,
        max_capacity INTEGER,
        start_date TEXT,
        end_date TEXT,
        name TEXT`,
      dataToIterateOver: trainingPrograms,
      valuesToInsert: [
        null,
        `max_capacity`,
        `start_date`,
        `end_date`, 
        `name`
      ]
    }
  )
}