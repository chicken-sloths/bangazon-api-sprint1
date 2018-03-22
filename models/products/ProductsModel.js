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

const putProduct = () => {};
const patchProduct = () => {};
const deleteProduct = () => {};
const postProduct = () => {};

module.exports = {
  getSingleProduct,
  getAllProducts,
  putProduct,
  patchProduct,
  deleteProduct,
  postProduct
};
