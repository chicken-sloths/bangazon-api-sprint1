"use strict";

const options = require("../../models/products/PaymentOptionsModel");

// get single payment option by id
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

// get all payment options
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

// create new payment option
module.exports.createNewPaymentOption = (req, res, next) => {
  const { type, account_number, customer_id } = req.body;
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

// update one payment option by id
module.exports.updatePaymentOption = (req, res, next) => {
  let { type, account_number, customer_id } = req.body;
  if (type && account_number && customer_id) {
    options.updatePaymentOption(req.params.id, req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please include a `type`, `account_number`, and `customer_id`.");
    next(err);
  }
};

// delete one payment option by id
module.exports.deletePaymentOption = (req, res, next) => {
  if (req.params.id >= 0) {
    options.deletePaymentOption(req.params.id)
      .then(id => {
        res.status(200).json(id);
      })
      .catch(err => next(err));
  }
};