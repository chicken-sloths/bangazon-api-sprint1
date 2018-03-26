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
        res.status(200).json(customers);
      })
      .catch(error => {
        next(error);
      });
  } else {
    getAll()
      .then((customers) => {
        res.status(200).json(customers);
      })
      .catch(error => {
        next(error);
      });
  }
};

module.exports.getOneCustomer = (req, res, next) => {
  getOne(req.params.id)
    .then((customer) => {
      res.status(200).json(customer);
    })
    .catch(error => {
      next(error);
    });
};

module.exports.postNewCustomer = (req, res, next) => {
  postNew(req.body)
    .then(newData => {
      res.status(200).json(newData);
    })
    .catch(err => {
      console.log('err in ctrl:', err);
      next(err);
    });
};

module.exports.updateCustomer = (req, res, next) => {
  let { first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number } = req.body;
  if (first_name && last_name && account_creation_date && street_address && city && state && postal_code && phone_number) {
    updateOne(req.params.id, req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  } else {
    let err = new Error("Please make sure the object has a value for each of these properties: first_name, last_name, account_creation_date, street_address, city, state, postal_code, phone_number");
    next(err);
  }
};