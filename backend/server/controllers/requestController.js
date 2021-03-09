import mongoose from 'mongoose'
import Request from '../models/requestModel.js';

// @desc Fetch all requests
// @route GET /request/all
export const getAllRequests = (req, res) => {
    Request.find({})
        .then(requests => {
            res.status(200).json(requests);
        })
        .catch(error => {
            console.log(error);
            res.status(403).json({ message: { messageBody: "Error getting requests from DB", messageError: true } });
        })
}

// @desc Fetch request by ID
// @route GET /request/:id
export const getRequestById = (req, res) => {
    Request.findById(req.params.id)
        .then (request => {
            console.log(request)
            res.status(200).json(request);
        })
        .catch(error => {
            console.log(error);
            res.status(403).json({ message: { messageBody: "Error getting request by ID from DB", messageError: true } });
        })
}

// @desc New request
// @route POST /request/newrequest
export const newRequest = (req, res) => {
    //const newRequestData = req.body;

    if (!req.body.requestedBy || !req.body.requestBody)
            return res.status(422).json({ message: { messageBody: "Please, fill necessary request info", messageError: true } });

    const newRequestDoc = new Request({
        requestedBy: req.body.requestedBy,
        requestBody: req.body.requestBody
    });
    console.log(newRequestDoc)

    newRequestDoc.save()
        .then(request => {
            console.log("SAVED: ", request);
            res.status(201).json({ message: { messageBody: "Request succesfully saved to DB", messageError: false } });
        })
        .catch (error => {
            console.log(error);
            res.status(403).json({ message: { messageBody: "Error saving request to DB", messageError: true } });
        })
}

// @desc New answer
// @route POST /request/newresponse/:id
export const newResponse = (req, res) => {
    if (!req.body.responseBody )
        return res.status(422).json({ message: { messageBody: "Please, fill necessary response body", messageError: true } });

    const response = {
        responseBy: req.body.responseBy ? req.body.responseBy : "Unknown",
        responseBody: req.body.responseBody
    }

    const request = Request.findByIdAndUpdate(req.params.id, { $push: { responses: response } }).exec()
        .then(newRequest => {
            console.log(newRequest);
            res.status(200).json({ message: { messageBody: "Response saved correctly", messageError: false } });
        })
        .catch(error => {
            console.log(error);
            res.status(422).json({ message: { messageBody: "Error saving response to DB", messageError: true } });
        })
}