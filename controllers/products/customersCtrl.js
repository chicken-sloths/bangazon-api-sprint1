"use strict";

const appRoot = process.cwd();
const { getAll, getOne, getFrugalCustomers } = require(appRoot + "/models/products/CustomersModel");

const getAllCustomers = (req, res, next) =>{
  // This checks for the exact query url that was listed 
  // in the wiki page for customers in our repo
  if(req.query.active === "false"){
    getFrugalCustomers()
  .then((customers)=>{
    res.status(200).json(customers);
  })
  .catch(error=>{
    next(error);
  });
  }else{
    getAll()
    .then((customers)=>{
      res.status(200).json(customers);
    })
    .catch(error=>{
      next(error);
    });
  }
};

const getOneCustomer = (req, res, next) =>{
  getOne(req.params.id)
  .then((customer)=>{
    res.status(200).json(customer);
  })
  .catch(error=>{
    next(error);
  });
};


module.exports = { 
  getAllCustomers,
  getOneCustomer
 };
