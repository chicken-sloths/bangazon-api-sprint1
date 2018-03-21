const { generateProductData } = require("./faker/products/index");
const { generateEmployeeData } = require("./faker/employees/index");
const {
  createWriteStream,
  existsSync,
  mkdirSync
} = require('fs');
const path = require("path");

let jsonDir = __dirname+"/json";
if (existsSync(path.dirname(jsonDir))) {
  mkdirSync(jsonDir);
}

// customer half
let {
  customers,
  productTypes,
  products,
  paymentOptions,
  orders,
  productOrders
} = generateProductData();

let customerStream = createWriteStream(jsonDir+"/customers.json");
customerStream.write(JSON.stringify(customers));

let optionStream = createWriteStream(jsonDir+"/products.json");
optionStream.write(JSON.stringify(products));

let productTypeStream = createWriteStream(jsonDir+"/productTypes.json");
productTypeStream.write(JSON.stringify(productTypes));

let paymentOptionStream = createWriteStream(jsonDir+"/paymentOptions.json");
paymentOptionStream.write(JSON.stringify(paymentOptions));

let orderStream = createWriteStream(jsonDir+"/orders.json");
orderStream.write(JSON.stringify(orders));

let productOrderStream = createWriteStream(jsonDir+"/productOrders.json");
productOrderStream.write(JSON.stringify(productOrders));

// employee half
let {
  departments,
  employees,
  computers,
  employeeComputerRelationships,
  trainingPrograms,
  employeeTrainingProgramRelationships
} = generateEmployeeData();