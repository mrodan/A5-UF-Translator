const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config/config');

// Database connection
mongoose.connect(
  config.db.uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('Successfully connected to DB');
  }
);

// Event triggers when connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Connection to DB is closed');
});

const app = express(); // Init express app
app.use(morgan('dev')); // Request log
app.use(express.json()); // Use body-parser module

//app.use('/where', whatRouter);

// Listen to port
app.listen(config.port, () => {
  console.log(`App now listening on port ${config.port}`);
});
