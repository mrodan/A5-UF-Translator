const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config/config.js');
const { requestRouter } = require('./routes/requestRouter.js');

// Database connection
mongoose.connect(
  config.db.uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('Successfully connected to DB');
  }
);

const app = express(); // Init express app
app.use(morgan('dev')); // Request log
app.use(express.json()); // Use body-parser module

app.use('/request', requestRouter);

// Listen to port
app.listen(config.port, () => {
  console.log(`App now listening on port ${config.port}`);
});
