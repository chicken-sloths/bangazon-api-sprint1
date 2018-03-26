"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

// Gets all order data
module.exports.getAllOrders = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Orders`,
      (err, orders) => {
        if (err) {
          reject(err);
        }
        resolve(orders);
      })
  })
}

// gets single order info
module.exports.getSingleOrder = id => {
  return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Orders WHERE order_id=${id}`,
        (err, order) => {
          if (err) reject(err);
          resolve(order)
      });
  });
}

// gets all products associated with a single order
module.exports.getOrderProducts = id => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT Products.*
          FROM Orders
          INNER JOIN Product_Orders ON Orders.order_id = Product_Orders.order_id
          INNER JOIN Products ON Product_Orders.product_id = Products.product_id
          WHERE Orders.order_id = ${ id}`,
      (err, products) => {
        if (err) reject (err);
        resolve(products)
      });
  });
}


// Creates a new order
module.exports.createOrder = ({ customer_id, payment_option_id }) => {
  // if no payment option id was passed in, declare the payment option id as null.
  if(!payment_option_id) payment_option_id = null; 
  
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Orders(
      customer_id, 
      payment_option_id
    )VALUES(
      ${customer_id}, 
      ${payment_option_id}
    )`,
      function (error) {
        if (error) return reject(error);
        resolve(this.lastID);
      })
  })
}

// Updates information on an order by id
module.exports.updateOrder = (id, { customer_id, payment_option_id }) => {
  return new Promise((resolve, reject) => {
    db.run(`REPLACE INTO Orders( 
      order_id,
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

// Deletes an order
module.exports.deleteOrder = id => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM Orders WHERE order_id = ${id}`,
      function (error) {
        if (error) return reject(error);
        resolve(id);
      }
    )
  })
}
