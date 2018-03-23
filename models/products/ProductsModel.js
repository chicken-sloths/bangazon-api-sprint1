'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

const getSingleProduct = id => new Promise((resolve, reject) =>
  db.get(
    `SELECT *
    FROM Products
    WHERE product_id = ${id}`,
    (err, product) => err ? reject(err) : resolve(product)
  ));

const getAllProducts = () => new Promise((resolve, reject) =>
  db.all(
    `SELECT *
    FROM Products`,
    (err, products) => err ? reject(err) : resolve(products)
  ));

const putProduct = () => { };

const deleteProduct = () => { };

const postProduct = ({ price, title, description, product_type_id, creator_id }) =>
  new Promise((resolve, reject) => {
    db.run(`INSERT INTO Products (
      price,
      title,
      description,
      product_type_id,
      creator_id
    ) VALUES (
      '${price}',
      '${title}',
      '${description}',
      '${product_type_id}',
      '${creator_id}'
    )`, err => err ? reject(err) : resolve(this.lastID));
  });

module.exports = {
  getSingleProduct,
  getAllProducts,
  putProduct,
  deleteProduct,
  postProduct
};
