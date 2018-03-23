"use strict";
const appRoot = process.cwd();
const { getSingleProduct, getAllProducts, postProduct } = require(appRoot + "/models/products/ProductsModel");

module.exports.getAllProducts = (req, res, next) => {
  getAllProducts()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => next(err));
};

module.exports.getSingleProduct = (req, res, next) => {
  getSingleProduct(req.params.id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => next(err));
};

module.exports.postProduct = (req, res, next) => {
  postProduct(req.body)
    .then(productId => {
      res.status(200).json(productId);
    })
    .catch(err => next(err));
};