const express = require('express');
const translateController = require('../controllers/translateController.js');

const translateRouter = express.Router();

//translateRouter.get('/all', translateController.getAlltranslates);

module.exports.translateRouter = translateRouter;
