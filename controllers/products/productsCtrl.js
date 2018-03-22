"use strict";

const appRoot = process.cwd();

const { getSingleProduct, getAllProducts } = require(appRoot + "/models/ProductsModel");

module.exports.getAllProducts = (req, res, next) =>
  getAllProducts()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => next(err));

module.exports.getAllProducts = (req, res, next) =>
  getSingleProduct(req.params.id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => next(err));