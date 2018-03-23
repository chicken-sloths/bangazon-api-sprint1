"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

const getSingleTrainingProgram = id => {
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

const getAllTrainingPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT *
            FROM Training_Programs t`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      })
  });
};

const createNewTrainingProgram = ({ start_date, end_date, max_capacity, name }) => {
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
    )`, function(err) {
      if (err) return reject(err);
      resolve(this.lastID);
    })
  });
};

module.exports = {
  getSingleTrainingProgram,
  getAllTrainingPrograms,
  createNewTrainingProgram
};