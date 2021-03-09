import express from 'express';
import * as requestController from '../controllers/requestController.js';

const requestRouter = express.Router();

requestRouter.get('/all', requestController.getAllRequests);
requestRouter.get('/:id', requestController.getRequestById);
requestRouter.post('/newrequest', requestController.newRequest);
requestRouter.post('/newresponse/:id', requestController.newResponse);

export default requestRouter;