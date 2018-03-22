'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { readFileSync } = require("fs");
const { generateSqlTable } = require('../sqlRunTemplate');

const products = JSON.parse(readFileSync("../data/json/products.json"));

module.exports = () => {
  generateSqlTable(
    {
      tableName: `Products`,
      columns: 
        `product_id INTEGER PRIMARY KEY,
        price TEXT,
        title TEXT,
        description TEXT,
        product_type_id INTEGER,
        creator_id INTEGER,
        FOREIGN KEY (product_type_id) REFERENCES Product_Type(product_type_id),
        FOREIGN KEY (creator_id) REFERENCES Customers(customer_id)`,
      dataToIterateOver: products,
      valuesToInsert: [
        `product_id`,
        `price`, 
        `title`, 
        `description`, 
        `product_type_id`, 
        `creator_id`
      ]
    }
  );
}