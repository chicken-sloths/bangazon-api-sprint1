'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");
const { generateSqlTable } = require("../sqlRunTemplate");
const orders = require("../../data/json/orders.json");

module.exports = () => {
  generateSqlTable(
    {
      tableName: `orders`,
      columns: 
        `order_id INTEGER PRIMARY KEY,
        customer_id INTEGER,
        payment_option_id INTEGER`,
      dataToIterateOver: orders,
      valuesToInsert: [
        null,
        `order_id`,
        `payment_option_id`
      ]
    }
  )
}