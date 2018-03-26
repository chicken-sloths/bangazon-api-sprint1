"use strict";
const appRoot = process.cwd();
const {
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct } = require(appRoot + "/models/products/ProductsModel");

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

module.exports.updateProduct = (req, res, next) => {
  updateProduct(req.params.id, req.body)
    .then(productId => {
      res.status(200).json(productId);
    })
    .catch(err => next(err));
};

module.exports.deleteProduct = (req, res, next) => {
  deleteProduct(req.params.id)
    .then(successfulDelete => {
      if (successfulDelete) {
        res.status(200).json(successfulDelete);
      } else {
        const err = new Error('The product could not be deleted.  It may not exist.');
        next(err);
      }
    })
    .catch(err => next(err));
};