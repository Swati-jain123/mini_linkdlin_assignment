const express = require('express');
const Post = require('../models/post');
const User = require('../models/user');

const router = express.Router();

router.post('/posts', async (req, res) => {
  const { userId, content } = req.body;
  const post = await Post.create({ content, UserId: userId });
  res.status(201).json(post);
});

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({ include: User, order: [['createdAt', 'DESC']] });
  res.json(posts);
});
// Get posts for a specific user
router.get('/user/:id/posts', async (req, res) => {
  const userId = req.params.id;
  const posts = await Post.findAll({
    where: { UserId: userId },
    include: User,
    order: [['createdAt', 'DESC']]
  });
  res.json(posts);
});

module.exports = router;