const express = require('express');
const Ad = require('../models/Ad');
const router = express.Router();

// Create a new ad
router.post('/', async (req, res) => {
  try {
    const newAd = new Ad(req.body);
    const savedAd = await newAd.save();
    res.status(201).json(savedAd);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all ads
router.get('/', async (req, res) => {
  try {
    const ads = await Ad.find();
    res.status(200).json(ads);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
