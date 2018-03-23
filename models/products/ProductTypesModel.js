"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getAllProductTypes = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT * FROM Product_Types`, (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

module.exports.getSingleProductType = id =>
  new Promise((resolve, reject) =>
    db.get(`SELECT * FROM Product_Types WHERE product_type_id=${id}`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );
