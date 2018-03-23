"use strict";

const appRoot = process.cwd();

const {
  getAllProductTypes,
  getSingleProductType
} = require(appRoot + "/models/products/ProductTypesModel");

module.exports.getAllProductTypes = (req, res, next) =>
  getAllProductTypes()
  .then(prodTypes => res.status(200).json(prodTypes))
  .catch(err => next(err));

module.exports.getSingleProductType = (req, res, next) =>
  getSingleProductType(req.params.id)
  .then(prodType => res.status(200).json(prodType))
  .catch(err => next(err));
