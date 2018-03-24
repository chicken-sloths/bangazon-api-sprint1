"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getSinglePaymentOption = id => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Payment_Options
            WHERE payment_option_id = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports.getAllPaymentOptions = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Payment_Options`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports.createPaymentOption = ({type, account_number, customer_id}) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Payment_Options (
      type,
      account_number,
      customer_id
    ) VALUES (
      "${type}",
      ${account_number},
      ${customer_id}
    )`, function(err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
};

module.exports.updatePaymentOption = (id, {type, account_number, customer_id}) => {
  return new Promise((resolve, reject) => {
    db.run(`REPLACE INTO Payment_Options (
      payment_option_id,
      type,
      account_number,
      customer_id
    ) VALUES (
      ${id},
      "${type}",
      ${account_number},
      ${customer_id}
    )`, function(err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
};

module.exports.deletePaymentOption = id => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM Payment_Options WHERE payment_option_id = ${id}`, err => {
      if (err) return reject(err);
      resolve(id);
    });
  });
};