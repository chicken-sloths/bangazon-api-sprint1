'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getSingleProduct = id => new Promise((resolve, reject) =>
  db.get(
    `SELECT *
    FROM Products
    WHERE product_id = ${id}`,
    (err, product) => err ? reject(err) : resolve(product)
  ));

module.exports.getAllProducts = () => new Promise((resolve, reject) =>
  db.all(
    `SELECT *
    FROM Products`,
    (err, products) => err ? reject(err) : resolve(products)
  ));

module.exports.updateProduct = (id, { price, title, description, product_type_id, creator_id }) =>
  new Promise((resolve, reject) => {
    db.run(`REPLACE INTO Products (
      product_id,
      price,
      title,
      description,
      product_type_id,
      creator_id
    ) VALUES (
      ${id == undefined ? null : id},
      '${price}',
      '${title}',
      '${description}',
      '${product_type_id}',
      '${creator_id}'
    )`,
      function (err) {
        err ? reject(err) : resolve(this.lastID);
      })
  });

module.exports.deleteProduct = id =>
  new Promise((resolve, reject) => {
    db.run(`DELETE FROM Products
      WHERE product_id = ${id}`,
      function (err) {
        err ? reject(err) : resolve(this.changes);
      })
  });
