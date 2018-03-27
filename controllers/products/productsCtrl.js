"use strict";

const {
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct } = require("../../models/products/ProductsModel");

module.exports.getAllProducts = (req, res, next) => {
  getAllProducts()
    .then(products =>
      products.length >= 1 ? res.status(200).json(products) : res.status(204).send()
    )
    .catch(err => next(err));
};

module.exports.getSingleProduct = (req, res, next) => {
  getSingleProduct(req.params.id)
    .then(product =>
      product ? res.status(200).json(product) : res.status(204).send()
    )
    .catch(err => next(err));
};

module.exports.updateProduct = (req, res, next) => {
  const { price, title, description, product_type_id, creator_id } = req.body;
  if (price && title && description && product_type_id && creator_id) {
    updateProduct(req.params.id, req.body)
      .then(productId => {
        res.status(200).json(productId);
      })
      .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: price, title, description, product_type_id and creator_id"
    );
    err.status = 400;
    return err;
  }
};

module.exports.deleteProduct = (req, res, next) => {
  deleteProduct(req.params.id)
    .then(changes =>
      changes >= 1 ? res.status(200).json(changes) : res.status(204).send()
    )
    .catch(err => next(err));
};
