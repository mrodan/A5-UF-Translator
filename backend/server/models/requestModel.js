import mongoose from 'mongoose';
//import User from '../models/UserModel.js';

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

export default mongoose.model('Request', RequestSchema);
