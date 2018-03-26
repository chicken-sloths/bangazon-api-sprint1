"use strict";

const appRoot = process.cwd();

const {
  deleteProductType,
  getAllProductTypes,
  getSingleProductType,
  updateProductTypesTable
} = require(appRoot + "/models/products/ProductTypesModel");

module.exports.getAllProductTypes = (req, res, next) =>
  getAllProductTypes()
  .then(prodTypes =>
    prodTypes >= 1 ? res.status(200).json(prodTypes) : res.status(204).send()
  )
  .catch(err => next(err));

module.exports.getSingleProductType = (req, res, next) =>
  getSingleProductType(req.params.id)
  .then(prodType =>
    prodType >= 1 ? res.status(200).json(prodType) : res.status(204).send()
  )
  .catch(err => next(err));

module.exports.updateProductTypesTable = (req, res, next) => {
  let { title } = req.body,
      { id = null } = req.params;
  if (title) {
    updateProductTypesTable(id, title)
    .then(id => res.status(200).json(id))
    .catch(err => next(err));
  } else {
    const err = new Error("Please include: title")
    err.status = 400;
    return err;
  }
};

module.exports.deleteProductType = (req, res, next) =>
  deleteProductType(req.params.id)
  .then(changes => res.status(200).json(changes))
  .catch(err => next(err));
