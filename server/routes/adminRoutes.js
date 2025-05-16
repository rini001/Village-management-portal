import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Hardcoded admin credentials
const adminUser = {
  username: 'admin',
  password: '$2b$10$hi1iSZC2qqu8ndMjBNlA0en.JoPi.wDeOgLf/6C99d7A/RSzTwHlW' // hashed ''
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== adminUser.username) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, adminUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

export default router;
