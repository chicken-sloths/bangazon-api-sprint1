"use strict";

const options = require("../../models/products/PaymentOptionsModel");

// get single payment option by id
module.exports.getSinglePaymentOption = (req, res, next) => {
  options.getSinglePaymentOption(req.params.id)
    .then(data =>
      data ? res.status(200).json(data) : res.status(204).send()
    )
    .catch(err => next(err));
};

// get all payment options
module.exports.getAllPaymentOptions = (req, res, next) => {
  options.getAllPaymentOptions()
    .then(data =>
      data.length >= 1 ? res.status(200).json(data) : res.status(204).send()
    )
    .catch(err => next(err));
};

// update one payment option by id
module.exports.updatePaymentOption = (req, res, next) => {
  const { type, account_number, customer_id } = req.body;
  if (type && account_number && customer_id) {
    options.updatePaymentOption(req.params.id, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: type, account_number, and customer_id."
    );
    err.status = 400;
    next(err);
  }
};

// delete one payment option by id
module.exports.deletePaymentOption = (req, res, next) => {
  if (req.params.id >= 0) {
    options.deletePaymentOption(req.params.id)
      .then(changes =>
        changes >= 1 ? res.status(200).json(changes) : res.status(204).send()
      )
      .catch(err => next(err));
  }
};
