const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const clientRoutes = require('./routes/client');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/client', clientRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API backend flash active' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Backend server listening on port ${PORT}`);

  const defaultIdentifier = '5418759624';
  const existingUser = await User.findOne({ identifierClient: defaultIdentifier });
  if (!existingUser) {
    const passwordHash = await bcrypt.hash('123456', 10);
    await User.create({
      identifierClient: defaultIdentifier,
      secretCode: passwordHash,
      rememberId: false
    });
    console.log(`Default utilisateur créé : ${defaultIdentifier} / 123456`);
  }
});
