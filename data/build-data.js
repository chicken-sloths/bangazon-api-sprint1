"use strict";

const { generateProductData } = require("./faker/products/index");
const { generateEmployeeData } = require("./faker/employees/index");
const fs = require('fs');
const path = require("path");

let jsonDir = __dirname+"/json";

// checks if data/json/ folder exists
fs.exists(jsonDir, folderExists => {
  if (folderExists) {
    writeJson(jsonDir);
  } else {
    // makes it if it doesn't
    fs.mkdir(jsonDir, err => {
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

  let customerStream = fs.createWriteStream(jsonDir+"/customers.json");
  customerStream.write(JSON.stringify(customers));
  
  let productTypeStream = fs.createWriteStream(jsonDir+"/productTypes.json");
  productTypeStream.write(JSON.stringify(productTypes));

  let productStream = fs.createWriteStream(jsonDir+"/products.json");
  productStream.write(JSON.stringify(products));

  let paymentOptionStream = fs.createWriteStream(jsonDir+"/paymentOptions.json");
  paymentOptionStream.write(JSON.stringify(paymentOptions));

  let orderStream = fs.createWriteStream(jsonDir+"/orders.json");
  orderStream.write(JSON.stringify(orders));

  let productOrderStream = fs.createWriteStream(jsonDir+"/productOrders.json");
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
  
  let departmentStream = fs.createWriteStream(jsonDir+"/departments.json");
  departmentStream.write(JSON.stringify(departments));
  
  let employeeStream = fs.createWriteStream(jsonDir+"/employees.json");
  employeeStream.write(JSON.stringify(employees));
  
  let computerStream = fs.createWriteStream(jsonDir+"/computers.json");
  computerStream.write(JSON.stringify(computers));
  
  let employeeComputerStream = fs.createWriteStream(jsonDir+"/employeeComputers.json");
  employeeComputerStream.write(JSON.stringify(employeeComputerRelationships));
  
  let trainingProgramStream = fs.createWriteStream(jsonDir+"/trainingPrograms.json");
  trainingProgramStream.write(JSON.stringify(trainingPrograms));
  
  let employeeTrainingProgramStream = fs.createWriteStream(jsonDir+"/employeeTrainingPrograms.json");
  employeeTrainingProgramStream.write(JSON.stringify(employeeTrainingProgramRelationships));
};