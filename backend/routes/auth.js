const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();
const SECRET = 'mysecret';

router.post('/register', async (req, res) => {
  const { name, email, password, bio } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword, bio });
    res.status(201).json({ message: 'Registered successfully' });
  } catch (e) {
    res.status(400).json({ error: 'Email already exists or invalid input' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid password' });

  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: user.id, name: user.name, email, bio: user.bio } });
});

module.exports = router;