"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// get single payment option by id
module.exports.getSinglePaymentOption = id =>
  new Promise((resolve, reject) =>
    db.get(
      `SELECT * FROM Payment_Options WHERE payment_option_id = ${id}`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );

// get all payment options
module.exports.getAllPaymentOptions = () =>
  new Promise((resolve, reject) =>
    db.all(
      `SELECT * FROM Payment_Options`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );

// update one payment option by id
module.exports.updatePaymentOption = (id, {type, account_number, customer_id}) =>
  new Promise((resolve, reject) =>
    db.run(
      `REPLACE INTO Payment_Options (
        payment_option_id,
        type,
        account_number,
        customer_id
      ) VALUES (
        ${id == undefined ? null : id},
        "${type}",
        ${account_number},
        ${customer_id}
      )`,
      function(err) {
        err ? reject(err) : resolve(this.lastID)
      }
    )
  );

// delete one payment option by id
module.exports.deletePaymentOption = id =>
  new Promise((resolve, reject) =>
    db.run(
      `DELETE FROM Payment_Options WHERE payment_option_id = ${id}`,
      function(err) {
        err ? reject(err) : resolve(this.changes);
      }
    )
  );
