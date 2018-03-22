"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

const getAll = () =>{
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

const getOne = id =>{
  return new Promise((resolve, reject)=>{
    db.all(
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
const getFrugalCustomers = () =>{
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

module.exports = { 
  getAll,
  getOne,
  getFrugalCustomers
};
