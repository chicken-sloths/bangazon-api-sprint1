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

module.exports.updateProductTypesTable = (id, title) =>
  new Promise((resolve, reject) =>
    db.run(`REPLACE INTO Product_Types (product_type_id, title)
      VALUES(${id}, "${title}")`, function(err) {
        err ? reject(err) : resolve(this.lastID);
      }
    )
  );

module.exports.deleteProductType = id =>
  new Promise((resolve, reject) =>
    db.run(`DELETE FROM Product_Types WHERE product_type_id=${id}`,
      function(err) {
        err ? reject(err) : resolve(this.changes);
      }
    )
  );
