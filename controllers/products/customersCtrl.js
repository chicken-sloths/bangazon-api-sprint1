"use strict";

const appRoot = process.cwd();
const {
  getAll,
  getOne,
  getFrugalCustomers,
  postNew,
  updateOne } = require(appRoot + "/models/products/CustomersModel");

module.exports.getAllCustomers = (req, res, next) => {
  // This checks for the exact query url that was listed 
  // in the wiki page for customers in our repo
  if (req.query.active === "false") {
    getFrugalCustomers()

      .then((customers) => {
    customers.length >= 1 ? res.status(200).json(customers) : res.status(204).send()
      })
      .catch(error => {
        next(error);
      });
  } else {
    getAll()
      .then((customers) => {
     customers.length >= 1 ? res.status(200).json(customers) : res.status(204).send()
      })
      .catch(err => {
        next(err);
      });
  }
};

module.exports.getOneCustomer = (req, res, next) => {
  getOne(req.params.id)
    .then((customer) => {
      customer ? res.status(200).json(customer) : res.status(204).send()
    })
    .catch(err => {
      next(err);
    });
};

module.exports.updateCustomer = (req, res, next) => {
  let { first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number } = req.body;
  if (first_name && last_name && account_creation_date && street_address && city && state && postal_code && phone_number) {
    updateOne(req.params.id, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number"
    );
    err.status = 400;
    next(err);
  }
};
