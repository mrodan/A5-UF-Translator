const mongoose = require('mongoose');
const Request = require('../models/requestModel.js')

// @desc Fetch all requests
// @route GET /request/all
module.exports = {
    getAllRequests : (req, res) => {
        Request.find({})
            .then(requests => {
                res.status(200).json(requests);
            })
            .catch(error => {
                console.log(error);
                res.status(403).json({ message: { messageBody: "Error getting requests from DB", messageError: true } });
            })
    },

    // @desc Fetch request by ID
    // @route GET /request/:id
    getRequestById : (req, res) => {
        Request.findById(req.params.id)
            .then (request => {
                //console.log(request)
                res.status(200).json(request);
            })
            .catch(error => {
                console.log(error);
                res.status(403).json({ message: { messageBody: "Error getting request by ID from DB", messageError: true } });
            })
    },

    // @desc New request
    // @route POST /request/newrequest
    newRequest : (req, res) => {
        if (!req.body.requestedBy || !req.body.requestBody)
                return res.status(422).json({ message: { messageBody: "Please, fill necessary request info", messageError: true } });

        const newRequestDoc = new Request({
            requestedBy: req.body.requestedBy,
            requestBody: req.body.requestBody
        });

        newRequestDoc.save()
            .then(request => {
                res.status(201).json({ message: { messageBody: "Request succesfully saved to DB", messageError: false } });
            })
            .catch (error => {
                console.log(error);
                res.status(403).json({ message: { messageBody: "Error saving request to DB", messageError: true } });
            })
    },

    // @desc New answer
    // @route POST /request/newresponse/:id
    newResponse : (req, res) => {
        if (!req.body.responseBody )
            res.status(422).json({ message: { messageBody: "Please, fill necessary response body", messageError: true } });

        const response = {
            responseBy: req.body.responseBy ? req.body.responseBy : "Unknown",
            responseBody: req.body.responseBody
        }
        console.log(response)

        const request = Request.findByIdAndUpdate(req.params.id, { $push: { responses: response } }).exec()
            .then(newRequest => {
                //console.log(newRequest);
                res.status(200).json({ message: { messageBody: "Response saved correctly", messageError: false } });
            })
            .catch(error => {
                console.log(error);
                res.status(422).json({ message: { messageBody: "Error saving response to DB", messageError: true } });
            })
    },

    // @desc Update rating
    // @route POST /request/updaterating/:id
    updateRating: (req, res) => {
        if (!req.body.updateRating)
            res.status(422).json({ message: { messageBody: "Please, rate", messageError: true } });
        
        // CHANGE - Only sets last rate
        const updated = Request.findByIdAndUpdate(req.params.id, { rating: req.body.updateRating })
            .then(rate => {
                res.status(200).json({ message: { messageBody: "Rating Updated", messageError: false } });
            })
            .catch(error => {
                console.log(error);
                res.status(422).json({ message: { messageBody: "Error updating rating in DB", messageError: true } });
            })
        

        /*
        const updated = Request.findById(req.params.id)
            .then(request => {
                let temp = (request.ratingCount * request.rating) + req.body.updateRating;
                request.ratingCount += 1;
                request.rating = temp / request.ratingCount

                user.markModified('rartingCount');
                user.markModified('rarting');

                request.save()
                    .then(req => {
                        console.log('Rating updated', req);
                        res.status(200).json({ message: { messageBody: "Rating Updated", messageError: false } });
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(422).json({ message: { messageBody: "Error updating rating in DB", messageError: true } });
                    })
            })
            .catch(error => {
                console.log(error);
                res.status(422).json({ message: { messageBody: "Error finding user in DB (rating update)", messageError: true } });
            })
            */
            

    }
}