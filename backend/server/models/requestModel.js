const mongoose = require('mongoose');

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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', RequestSchema);
