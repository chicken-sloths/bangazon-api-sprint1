"use strict";

const appRoot = process.cwd();
const { getAllOrders, getSingleOrder, createOrder, updateOrder, deleteOrder } = require(appRoot + "/models/products/OrdersModel");

// gets all orders
module.exports.getAllOrders = (req, res, next) => {
  getAllOrders()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(error => {
      next(error);
    })
};

// gets a single order by id
module.exports.getSingleOrder = (req, res, next) => {
  getSingleOrder(req.params.id)
    .then(order => {
      res.status(200).json(order);
    })
    .catch(error => {
      next(error);
    })
};

// creates a new order
module.exports.createOrder = (req, res, next) => {
  createOrder(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => next(error));
};

// updates a new order by id
module.exports.updateOrder = (req, res, next) => {
  updateOrder(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => next(error));
};

// deletes an order by id
module.exports.deleteOrder = (req, res, next) => {
  deleteOrder(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      next(error);
    })
};
