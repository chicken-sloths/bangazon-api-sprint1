"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// get single training program by id
module.exports.getSingleTrainingProgram = id => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT *
      FROM Training_Programs t
      WHERE t.training_program_id = ${id}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
  });
};

// get all training programs
module.exports.getAllTrainingPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT *
            FROM Training_Programs t`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      })
  });
};

// add a new training program
module.exports.createNewTrainingProgram = ({ start_date, end_date, max_capacity, name }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Training_Programs (
      start_date,
      end_date,
      max_capacity,
      name
    ) VALUES (
      "${start_date}",
      "${end_date}",
      "${max_capacity}",
      "${name}"
    )`, function (err) {
        if (err) return reject(err);
        resolve(this.lastID);
      })
  });
};

// replace existing training program with provided data or create new training program
module.exports.updateTrainingProgram = (id, { start_date, end_date, name, max_capacity }) => {
  return new Promise((resolve, reject) => {
    db.run(`REPLACE INTO Training_Programs (
      training_program_id,
      start_date,
      end_date,
      name,
      max_capacity
    ) VALUES (
      ${id},
      "${start_date}",
      "${end_date}",
      "${name}",
      ${max_capacity}
    )`, err => {
      if (err) return reject(err);
      resolve(id);
    })
  });
};

// delete one training program by id
module.exports.deleteTrainingProgram = id => {
  return new Promise((resolve, reject) => {
    module.exports.getSingleTrainingProgram(id)
      .then(data => {
        if (data.length >= 1) {
          db.run(`DELETE FROM Training_Programs WHERE training_program_id = ${id}`, err => {
            if (err) return reject(err);
            resolve(id);
          });
        } else {
          let err = new Error(`There is no Training Program with that ID.`);
          reject(err);
        }
      })
  });
};