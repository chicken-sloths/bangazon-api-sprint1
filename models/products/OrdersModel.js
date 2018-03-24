"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAllOrders = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT  Orders.*, group_concat(Products.title, ", ") AS Products
      FROM Orders
      JOIN Product_Orders ON Orders.order_id = Product_Orders.order_id
      JOIN Products ON Product_Orders.product_id = Products.product_id
      GROUP BY Orders.order_id`, 
      (err, orders) => {
      if (err) {
        reject(err);
      }
      resolve(orders);
    })
  })
}


module.exports.getSingleOrder = id => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT  Orders.*, group_concat(Products.title, ", ")
      FROM Orders
      INNER JOIN Product_Orders ON Orders.order_id = Product_Orders.order_id
      INNER JOIN Products ON Product_Orders.product_id = Products.product_id
      WHERE Order.Order_id = ${id}`,
      (err, order) => {
        if (err) {
          reject(err);
        }
        resolve(order);
      })
  })
}

module.exports.createOrder = ({customer_id, payment_option_id}) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Orders (
      customer_id,
      payment_option_id
    ) VALUES (
      ${customer_id},
      ${payment_option_id}
    )`, function (error) {
        if (error) return reject(error);
        resolve(this.lastID);
      })
  })
}

module.exports.updateOrder = (id, {customer_id, payment_option_id}) => {
  return new Promise((resolve, reject) => {
    db.run(`REPLACE INTO Orders( 
      customer_id,
      payment_option_id
    ) VALUES (
      ${id},
      ${customer_id},
      ${payment_option_id}
    )`,
      function (error) {
        if (error) return reject(error);
        resolve(this.lastID);
      });
  });
}

module.exports.deleteOrder = id => {
  new Promise((resolve, reject) => {
    db.run(`DELETE FROM Orders WHERE order_id = ${id}`,
      function(error){
        if(error) return reject(error);
        resolve(this.lastID);
      }
    )
  })
}
