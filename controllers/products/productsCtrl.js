"use strict";
const appRoot = process.cwd();
const {
  getSingleProduct,
  getAllProducts,
  postProduct,
  putProduct,
  deleteProduct
} = require(appRoot + "/models/products/ProductsModel");

module.exports.getAllProducts = (req, res, next) => {
  getAllProducts()
    .then(products =>
      products >= 1 ? res.status(200).json(products) : res.status(204).send()
    )
    .catch(err => next(err));
};

module.exports.getSingleProduct = (req, res, next) => {
  getSingleProduct(req.params.id)
    .then(product =>
      product >= 1 ? res.status(200).json(product) : res.status(204).send()
    )
    .catch(err => next(err));
};

module.exports.postProduct = (req, res, next) => {
  const { price, title, description, product_type_id, creator_id } = req.body;
  if (price && title && description && product_type_id && creator_id ) {
    postProduct(req.body)
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
    .then(successfulDelete => {
      if(successfulDelete){
        res.status(200).json(successfulDelete);
      } else {
        const err = new Error(
          "The product could not be deleted. It may not exist."
        );
        err.status = 400;
        next(err);
      }
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
    const err = new Error(
      "Please include: price, title, description, product_type_id and creator_id"
    );
    err.status = 400;
    next(err);
  }
};
