"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const ordersRouter = Router();

const {
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder } = require(appRoot + '/controllers/products/ordersCtrl');

ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getSingleOrder);
ordersRouter.post('/', updateOrder);
ordersRouter.put('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);

module.exports = ordersRouter;
