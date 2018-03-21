'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/index.js'); 

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})