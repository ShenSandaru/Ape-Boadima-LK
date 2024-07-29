// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user database
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: '$2a$10$EIXZs3x1Z1D1Y5F0zR1y8O3yZ1Q9c8hY5z1f8K4P3z8e3JZ2KX1F6' // hashed password for 'password123'
  }
];

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Create JWT token
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});