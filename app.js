'use strict';

const express = require('express');
const app = express();

require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

// Middleware stack
app.use(bodyParser.json());

app.use('/api/v1', routes);

// End middleware stack

// Error handler

app.use((err, req, res, next ) => {
  err = err || new Error("Internal Server Error");
  res.status( err.status || 500);
  res.json({ error: err.message });
});

// End error handling

// Init server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
