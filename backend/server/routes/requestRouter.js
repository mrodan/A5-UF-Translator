const express = require('express');
const requestController = require('../controllers/requestController.js');

const requestRouter = express.Router();

requestRouter.get('/all', requestController.getAllRequests);
requestRouter.get('/:id', requestController.getRequestById);
requestRouter.post('/newrequest', requestController.newRequest);
requestRouter.post('/newresponse/:id', requestController.newResponse);

module.exports.requestRouter = requestRouter;
