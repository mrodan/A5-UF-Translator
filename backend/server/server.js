const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config/config.js');
const translate = require('./utils/googleCloudTranslateAPI.js');
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

const detectLanguage = async (text) => {
  try {
    let response = await translate.detect(text);
    return response[0].language;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

detectLanguage('Hola Hola')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const translateText = async (text, targetLanguage) => {
  try {
    let [response] = await translate.translate(text, targetLanguage);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

translateText('hola hola', 'en')
// translateText(
//   {
//     name: 'hola hola',
//     body: 'hola hola hola',
//   },
//   'es'
// );

app.use('/request', requestRouter);
//app.use('/translate', translateRouter);

// Listen to port
app.listen(config.port, () => {
  console.log(`App now listening on port ${config.port}`);
});
