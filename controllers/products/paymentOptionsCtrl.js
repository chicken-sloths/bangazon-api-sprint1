"use strict";

const options = require("../../models/products/PaymentOptionsModel");

module.exports.getSinglePaymentOption = (req, res, next) => {
  options.getSinglePaymentOption(req.params.id)
    .then(data => {
      if (data.length >= 1) {
        res.status(200).json(data);
      } else {
        let err = new Error("Payment Option not found.");
        next(err);
      }
    })
    .catch(err => next(err));
};

module.exports.getAllPaymentOptions = (req, res, next) => {
  options.getAllPaymentOptions()
    .then(data => {
      if (data.length >= 1) {
        res.status(200).json(data);
      } else {
        let err = new Error("No Payment Options found.");
        next(err);
      }
    })
    .catch(err => next(err));
};

module.exports.createNewPaymentOption = (req, res, next) => {
  let { type, account_number, customer_id } = req.body;
  if (type && account_number && customer_id) {
    options.createPaymentOption(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please include a `type`, `account_number`, and `customer_id`.");
    next(err);
  }
};

module.exports.updatePaymentOption = (req, res, next) => {

};

module.exports.deletePaymentOption = (req, res, next) => {

};