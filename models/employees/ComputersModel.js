"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// get single computer by id
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

// return all computers
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

// creates new computer with auto-incremented id, returns that id
const createComputer = ({ mac_address, purchase_date, decommission_date }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Computers (
      mac_address,
      purchase_date,
      decommission_date
    ) VALUES (
      "${mac_address}",
      "${purchase_date}",
      "${decommission_date}"
    )`, function(err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
}

// delete one computer by id
const deleteComputer = id => {
  return new Promise((resolve, reject) => {
    getSingleComputer(id)
      .then(computer => {
        db.run(`DELETE FROM Computers
                WHERE computer_id = ${id}`,
        function(err) {
          if (err) return reject(err);
          resolve(id);
        });
      })
      .catch(err => reject(err));
  });
};

// update one computer by id
const updateComputer = (id, {mac_address, purchase_date, decommission_date}) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE Computers
            SET
              mac_address="${mac_address}",
              purchase_date="${purchase_date}",
              decommission_date="${decommission_date}"
            WHERE computer_id = ${id}`,
      err => {
        if (err) return reject(err);
        resolve(id);
      });
  });
};

module.exports = {
  getSingleComputer,
  getAllComputers,
  createComputer,
  deleteComputer,
  updateComputer
};