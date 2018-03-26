"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAll = () =>{
  return new Promise((resolve, reject)=>{
    db.all(
      `SELECT Customers.* FROM Customers`,
      (error, customers)=>{
        if (error) return reject(error);
        resolve(customers);
      }
    );
  });
};

module.exports.getOne = id =>{
  return new Promise((resolve, reject)=>{
    db.get(
      `SELECT Customers.* FROM Customers
      WHERE Customers.customer_id = ${id}`,
      (error, customer)=>{
        if (error) return reject(error);
        resolve(customer);
      }
    );
  });
};

// This function looks for all customers that do not have any PAST orders
module.exports.getFrugalCustomers = () =>{
  return new Promise((resolve, reject)=>{
    db.all(`
    SELECT Customers.*
    FROM Customers
    LEFT JOIN Orders
    ON Customers.customer_id = Orders.customer_id
    WHERE Orders.customer_id IS NULL
    `,
    (error, customers)=>{
      if (error) return reject(error);
        resolve(customers);
    });
  });
};

module.exports.updateOne = (id, {first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number}) => {
  return new Promise((resolve, reject) => {
    db.run(`REPLACE INTO Customers
            (customer_id, first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number)
            VALUES (
            ${id == undefined ? null : id},
            "${first_name}",
            "${last_name}",
            "${account_creation_date}",
            "${street_address}",
            "${city}",
            "${state}",
            "${postal_code}",
            "${phone_number}"
            )`,
      function(err) {
        if (err) return reject(err);
        resolve(this.lastID);
      });
  });
};

