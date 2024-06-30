import dbConnect from '../../utils/dbConnect';
import Ad from '../../models/Ad';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const ad = new Ad(req.body);
      await ad.save();

      res.status(201).json({ success: true, id: ad._id });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
