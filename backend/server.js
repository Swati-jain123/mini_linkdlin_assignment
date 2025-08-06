const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', postRoutes);

sequelize.sync().then(() => {
  console.log('Database synced ✅');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
});