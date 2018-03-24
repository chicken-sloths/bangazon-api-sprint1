"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/api-sprint.sqlite');

module.exports.getSinglePaymentOption = id => {
  
};

module.exports.getAllPaymentOptions = () => {
  
};

module.exports.createPaymentOption = ({type, account_number, customer_id}) => {
  
};

module.exports.updatePaymentOption = (id, {type, account_number, customer_id}) => {
};

module.exports.deletePaymentOption = id => {

};