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

// Makes two calles to the database, one to get the order info and another to get an array of the products associated with that order
module.exports.getSingleOrder = id => {
  let order = null;
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      
      //grabs Order data and declares it to the empty order variable 
      db.get(`SELECT * FROM Orders WHERE order_id=${id}`,
        (err, orderData) => {
          if (err) reject(err);
          order = orderData;
        });

        //grabs an array of all products associated with that order, adds it as a property on the order variable
        db.all(`SELECT Products.*
        FROM Orders
        INNER JOIN Product_Orders ON Orders.order_id = Product_Orders.order_id
        INNER JOIN Products ON Product_Orders.product_id = Products.product_id
        WHERE Orders.order_id = ${ id}`,
          (err, productData) => {
            if (err) order.Products = [];
            order.Products = productData
            resolve(order);
          });
    })
  })
}

// Creates a new order
module.exports.createOrder = ({ customer_id, payment_option_id }) => {
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
