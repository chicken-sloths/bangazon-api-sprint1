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

const createComputer = ({ mac_address, purchase_date, decommission_date }) => {
  return new Promise((resolve, reject) => {
    if (mac_address && purchase_date && decommission_date) {
      db.run(`INSERT INTO Computers (
        mac_address,
        purchase_date,
        decommission_date
      ) VALUES (
        "${mac_address}",
        "${purchase_date}",
        "${decommission_date}"
      )`, function(err) {
        if (err) reject(err);
        resolve(this.lastID);
      });
    } else {
      let err = new Error("Please supply a `mac_address`, `purchase_date`, and `decommission_date`.");
      reject(err);
    }
  });
}

module.exports = {
  getSingleComputer,
  getAllComputers,
  createComputer
};