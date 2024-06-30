const Ad = require('../models/Ad');

exports.createAd = async (req, res) => {
  try {
    const newAd = new Ad(req.body);
    const savedAd = await newAd.save();
    res.status(201).json({ success: true, id: savedAd._id });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
