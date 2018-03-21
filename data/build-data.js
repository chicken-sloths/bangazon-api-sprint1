const { generateProductData } = require("./faker/products/index");
const { generateEmployeeData } = require("./faker/employees/index");

let {
  customers,
  productTypes,
  products,
  paymentOptions,
  orders,
  productOrders
} = generateProductData();

let {
  departments,
  employees,
  computers,
  employeeComputerRelationships,
  trainingPrograms,
  employeeTrainingProgramRelationships
} = generateEmployeeData();