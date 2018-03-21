'use strict';
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("api-sprint.sqlite");

/*
EXAMPLE FUNCTION CALL

generateSqlTable(
  {
    tableName: `commputers`,
    columns: 
      `computer_id INTEGER PRIMARY KEY,
      purchase_date TEXT,
      decommission_date TEXT,
      a_number INTEGER,
      thirty_seven INTEGER`,
    dataToIterateOver: computers,
    valuesToInsert: [
      null,
      `purchaseDate`, 
      `decommissionDate`, 
      `aNumber`, 
      37]
  }
);
*/

// Drops the table if exists, then creates it and inserts the data from dataToIterateOver.
// Values to Insert is what properties on each peice of data to iterate over that should be extracted
const generateSqlTable = ({ tableName, columns, dataToIterateOver, valuesToInsert }) => {
  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS ${tableName}`);

    db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`);

    dataToIterateOver.forEach(object => {
      let values = "";

      // Iterate over the values to insert and turn them into sql code
      for (let i = 0; i < valuesToInsert.length; i++) {
        const value = valuesToInsert[i];

        // Add a comma to the string if it is not the last value in the column
        const addComma = i < valuesToInsert.length - 1 ? "," : "";

        // If the valueToInsert itself is a number
        if (Number.isInteger(value)) {
          values += `${value}${addComma}`;
        }

        // If the value on the object is an integer, add it.  
        else if (Number.isInteger(object[value])) {
          values += `${object[value]}${addComma}`;
        }

        // If it is a string, add quotes around it.
        else {
          values += `${value === null ? null : "'" + object[value] + "'"}${addComma}`;
        }
      }

      db.run(`INSERT INTO ${tableName} VALUES (${values})`);
    });
  });
};

module.exports = { generateSqlTable };