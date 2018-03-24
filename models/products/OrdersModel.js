"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAllOrders = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT  Orders.*, group_concat(Products.title, ", ")
      FROM Orders
      INNER JOIN Product_Orders ON Orders.order_id = Product_Orders.order_id
      INNER JOIN Products ON Product_Orders.product_id = Products.product_id`, 
      (err, orders) => {
      if (err) {
        reject(err);
      }
      resolve(orders);
    })
  })
}

module.exports.getSingleOrder = (id) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT  Orders.*, group_concat(Products.title, ", ")
      FROM Orders
      INNER JOIN Product_Orders ON Orders.order_id = Product_Orders.order_id
      INNER JOIN Products ON Product_Orders.product_id = Products.product_id`,
      (err, orders) => {
        if (err) {
          reject(err);
        }
        resolve(orders);
      })
  })
}

module.exports.createOrder = ({orderObject}) => {

}

module.exports.updateOrder = (id, {orderObject}) => {

}

module.exports.deleteOrder = (id) => {

}
