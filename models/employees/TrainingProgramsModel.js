"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// get single training program by id
module.exports.getSingleTrainingProgram = id =>
  new Promise((resolve, reject) =>
    db.get(`SELECT * FROM Training_Programs t
      WHERE t.training_program_id = ${id}`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );

// get all training programs
module.exports.getAllTrainingPrograms = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT * FROM Training_Programs t`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );

// replace existing training program with provided data or create new training program
module.exports.updateTrainingProgram = (id, { start_date, end_date, name, max_capacity }) =>
  new Promise((resolve, reject) =>
    db.run(`REPLACE INTO Training_Programs (
      training_program_id,
      start_date,
      end_date,
      name,
      max_capacity
    ) VALUES (
      ${id == undefined ? null : id},
      "${start_date}",
      "${end_date}",
      "${name}",
      ${max_capacity}
    )`, function(err) {
      err ? reject(err) : resolve(this.lastID)
    })
  );

// delete one training program by id
module.exports.deleteTrainingProgram = id =>
  new Promise((resolve, reject) =>
    db.run(
      `DELETE FROM Training_Programs WHERE training_program_id = ${id}`,
      function(err) {
        err ? reject(err) : resolve(this.changes);
      }
    )
  );
