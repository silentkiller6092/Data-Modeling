import mongoose from 'mongoose';
const hospitalSchema = new mongoose(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
    },
    city: {
      name: String,
      require: true,
    },
    pincode: {
      name: String,
      required: true,
    },
    specilization: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
export const Hospital = mongoose.model('Hospital', hospitalSchema);
