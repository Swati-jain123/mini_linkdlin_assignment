const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Post = sequelize.define('Post', {
  content: { type: DataTypes.TEXT, allowNull: false }
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = Post;