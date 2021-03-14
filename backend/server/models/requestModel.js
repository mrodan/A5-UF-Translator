const mongoose = require('mongoose');
const { number } = require('prop-types');

const RequestSchema = new mongoose.Schema(
  {
    requestedBy: { type: String },
    requestBody: { type: String },
    responses: [
      {
        responseBy: { type: String },
        responseBody: { type: String },
      },
    ],
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', RequestSchema);
