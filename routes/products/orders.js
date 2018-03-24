"use strict";

const appRoot = process.cwd();

const { Router } = require('express');
const ordersRouter = Router();

const { getAllOrders, getSingleOrder, createOrder, updateOrder, deleteOrder } = require(appRoot + '/controllers/products/ordersCtrl');

ordersRouter.get('/orders', getAllOrders);
ordersRouter.get('/orders/:id', getSingleOrder);
ordersRouter.post('/orders', createOrder);
ordersRouter.put('/orders/:id', updateOrder);
ordersRouter.delete('/orders/:id', deleteOrder);

module.exports = ordersRouter;
