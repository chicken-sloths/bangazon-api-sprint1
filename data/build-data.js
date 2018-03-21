"use strict";

const { generateProductData } = require("./faker/products/index");
const { generateEmployeeData } = require("./faker/employees/index");
const {
  createWriteStream,
  exists,
  mkdir
} = require('fs');
const path = require("path");

let jsonDir = __dirname+"/json";

// checks if data/json/ folder exists
exists(jsonDir, exists => {
  if (exists) {
    writeJson(jsonDir);
  } else {
    // makes it if it doesn't
    mkdir(jsonDir, err => {
      if (err) {
        console.log("mkdir error:",err);
      } else {
        writeJson(jsonDir);
      }
    });
  }
});

const writeJson = (jsonDir) => {
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
  
  let departmentStream = createWriteStream(jsonDir+"/departments.json");
  departmentStream.write(JSON.stringify(departments));
  
  let employeeStream = createWriteStream(jsonDir+"/employees.json");
  employeeStream.write(JSON.stringify(employees));
  
  let computerStream = createWriteStream(jsonDir+"/computers.json");
  computerStream.write(JSON.stringify(computers));
  
  let employeeComputerStream = createWriteStream(jsonDir+"/employeeComputers.json");
  employeeComputerStream.write(JSON.stringify(employeeComputerRelationships));
  
  let trainingProgramStream = createWriteStream(jsonDir+"/trainingPrograms.json");
  trainingProgramStream.write(JSON.stringify(trainingPrograms));
  
  let employeeTrainingProgramStream = createWriteStream(jsonDir+"/employeeTrainingPrograms.json");
  employeeTrainingProgramStream.write(JSON.stringify(employeeTrainingProgramRelationships));
};