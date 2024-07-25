// models/Ad.js
const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  amenities: { type: [String], required: true },
  available: { type: Date, required: true },
  image: { type: String, required: true },
  featured: { type: Boolean, default: false },
});

module.exports = mongoose.model('Ad', AdSchema);
