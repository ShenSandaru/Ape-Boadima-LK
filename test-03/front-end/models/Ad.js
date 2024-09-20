import mongoose from 'mongoose';

const AdSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this ad.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this ad.'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this ad.'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location for this ad.'],
  },
  bedrooms: {
    type: Number,
    required: [true, 'Please provide the number of bedrooms.'],
  },
  bathrooms: {
    type: Number,
    required: [true, 'Please provide the number of bathrooms.'],
  },
  amenities: {
    type: [String],
    required: [true, 'Please provide the amenities.'],
  },
  available: {
    type: Date,
    required: [true, 'Please provide the availability date.'],
  },
  contact: {
    type: String,
    required: [true, 'Please provide a contact number.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL.'],
  },
});

export default mongoose.models.Ad || mongoose.model('Ad', AdSchema);