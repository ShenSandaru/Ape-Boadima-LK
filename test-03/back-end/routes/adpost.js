const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Ad schema and model
const adSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  location: String,
  contactInfo: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  amenities: [String],
  available: String,
  photos: String,
  featured: Boolean,
});

const Ad = mongoose.model('Ad', adSchema);

// Parse JSON request body
app.use(express.json());

// Handle ad creation
app.post('/ads', upload.single('photos'), async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      location,
      contactInfo,
      bedrooms,
      bathrooms,
      area,
      amenities,
      available,
      featured,
    } = req.body;

    const ad = new Ad({
      title,
      description,
      price,
      category,
      location,
      contactInfo,
      bedrooms,
      bathrooms,
      area,
      amenities: amenities.split(','),
      available,
      photos: req.file ? req.file.filename : null,
      featured,
    });

    await ad.save();
    res.status(201).json({ message: 'Ad created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating ad' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});