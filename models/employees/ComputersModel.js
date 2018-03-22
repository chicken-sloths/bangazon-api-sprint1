"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

const getSingleComputer = id => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT *
      FROM Computers c
      WHERE c.computer_id = ${id}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
    });
  });
};

const getAllComputers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT *
      FROM Computers c`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
    });
  });
};

module.exports = {
  getSingleComputer,
  getAllComputers
};