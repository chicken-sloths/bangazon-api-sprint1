"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// Returns all customers in our database
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

// returns the customer whose number id is in the url
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

const postNew = ({first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number}) =>{
  return new Promise((resolve, reject)=>{
    db.run(`
    INSERT INTO "Customers" 
    ("customer_id", "first_name", "last_name", "account_creation_date", "street_address", "city", "state", "postal_code", "phone_number")
    VALUES (null,
            "${first_name}",
            "${last_name}",
            "${account_creation_date}",
            "${street_address}",
            "${city}",
            "${state}",
            "${postal_code}",
            "${phone_number}"
    );`, function(error){
      if(error) reject(error);
      resolve(this.lastID);
    });
  });
};

module.exports = { 
  getAll,
  getOne,
  getFrugalCustomers,
  postNew
};
