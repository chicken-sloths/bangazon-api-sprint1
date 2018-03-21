"use strict";

const { Router } = require('express');
const router = Router();

// Pulling in all routes for employees/
app.use(require('./employees/departments'));
app.use(require('./employees/employees'));
app.use(require('./employees/employeeComputers'));
app.use(require('./employees/computers'));
app.use(require('./employees/trainingPrograms'));
app.use(require('./employees/employeeTrainingPrograms'));

// Pulling in all routes for products/
app.use(require('./products/productTypes'));
app.use(require('./products/products'));
app.use(require('./products/productOrders'));
app.use(require('./products/orders'));
app.use(require('./products/customers'));
app.use(require('./products/paymentOptions'));

module.exports = router;
