"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// get single computer by id
module.exports.getSingleComputer = id =>
  new Promise((resolve, reject) =>
    db.get(
      `SELECT * FROM Computers c WHERE c.computer_id = ${id}`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );

// return all computers
module.exports.getAllComputers = () =>
  new Promise((resolve, reject) =>
    db.all(
      `SELECT * FROM Computers c`,
      (err, data) => err ? reject(err) : resolve(data)
      )
  );

// delete one computer by id
module.exports.deleteComputer = id =>
  new Promise((resolve, reject) =>
    db.run(
      `DELETE FROM Computers WHERE computer_id = ${id}`,
      function(err) {
        err ? reject(err) : resolve(this.changes);
      }
    )
  );

// update one computer by id
module.exports.updateComputer = (id, {mac_address, purchase_date, decommission_date}) =>
  new Promise((resolve, reject) =>
    db.run(`REPLACE INTO Computers
            (
              computer_id,
              mac_address,
              purchase_date,
              decommission_date
            ) VALUES (
              ${id == undefined ? null : id},
              "${mac_address}",
              "${purchase_date}",
              "${decommission_date == undefined ? null : decommission_date}"
            )`,
      function(err) {
        err ? reject(err) : resolve(this.lastID)
      }
    )
  );
