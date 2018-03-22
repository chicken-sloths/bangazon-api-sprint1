'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

const getAllProducts = () => new Promise((resolve, reject) => 
  db.all(
    `SELECT *
    FROM products`,
    (err, products) => err ? reject(err) : resolve(products)
));

const putProduct = () => {};
const patchProduct = () => {};
const deleteProduct = () => {};
const postProduct = () => {};

module.exports = {
  getAllProducts,
  putProduct,
  patchProduct,
  deleteProduct,
  postProduct
};
