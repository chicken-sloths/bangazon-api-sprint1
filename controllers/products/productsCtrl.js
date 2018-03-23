"use strict";
const appRoot = process.cwd();
const { getSingleProduct, getAllProducts, postProduct, putProduct, deleteProduct } = require(appRoot + "/models/products/ProductsModel");

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

module.exports.deleteProduct = (req, res, next) => {
  deleteProduct(req.params.id)
    .then(successfulDelete => {
      res.status(200).json(successfulDelete);
    })
    .catch(err => next(err));
};

module.exports.putProduct = (req, res, next) => {
  const { price, title, description, product_type_id, creator_id } = req.body;

  if (price && title && description && product_type_id && creator_id) {
    putProduct(req.params.id, req.body)
      .then(productId => {
        res.status(200).json(productId);
      })
      .catch(err => next(err));
  } else {
    let err = new Error('Please supply a `price`, `title`, `description`, `product_type_id`, and `creator_id.');
    next(err);
  }
};