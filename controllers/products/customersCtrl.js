"use strict";

const appRoot = process.cwd();
const { getAll, getOne, getFrugalCustomers, postNew } = require(appRoot + "/models/products/CustomersModel");

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
    // This will return all of the customers if no query is found
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

const postNewCustomer = (req, res, next) =>{
  console.log('req body',req.body);
  try{
    postNew(req.body)
    .then(newData=>{
      res.status(200).json(newData);
    })
    .catch(err=>{
      console.log('err in ctrl:',err);
      next(err);
    });
  } catch(e) {
    let err = new Error(`${e.name}:, ${e.message}`);
    next(err);
  }
};

module.exports = { 
  getAllCustomers,
  getOneCustomer,
  postNewCustomer
 };
