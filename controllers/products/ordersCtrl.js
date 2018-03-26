"use strict";

const appRoot = process.cwd();
const { getAllOrders, getSingleOrder, getOrderProducts, createOrder, updateOrder, deleteOrder } = require(appRoot + "/models/products/OrdersModel");

// gets all orders
module.exports.getAllOrders = (req, res, next) =>
  getAllOrders()
    .then(orders =>
      orders.length >= 1 ? res.status(200).json(orders) : res.status(204).send()
    )
    .catch(err => next(err));

// gets a single order by id
module.exports.getSingleOrder = (req, res, next) => {
  let order = null;
  getSingleOrder(req.params.id)
    .then(orderData => {
      order = orderData;
      return getOrderProducts(req.params.id)
    })
    .then(productData => {
      if (order) {
        order.products = productData;
        res.status(200).json(order);
      } else {
        res.status(204).send();
      }
    })
    .catch(err => {
      next(err);
    })
};

// updates a new order by id
module.exports.updateOrder = (req, res, next) => {
  const { customer_id, payment_type_id } = req.body;
  if (customer_id, payment_type_id) {
    updateOrder(req.params.id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => next(err));
  } else {
    const err = new Error(
      "Please include: customer_id and payment_type_id"
    );
    err.status = 400;
    next(err);
  }
};

// deletes an order by id
module.exports.deleteOrder = (req, res, next) => {
  deleteOrder(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      next(err);
    })
};
