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

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'https://sg-connect-salvatore.vercel.app',
  'http://localhost:5173'
].filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) {
    return true;
  }

  if (allowedOrigins.includes(origin)) {
    return true;
  }

  try {
    const { hostname } = new URL(origin);
    return hostname.endsWith('.vercel.app');
  } catch (error) {
    return false;
  }
};

const corsOptions = {
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(null, false);
  }
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/client', clientRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API backend flash active' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Backend server listening on port http://localhost:${PORT}`);

  const defaultIdentifier = '5418759624';
  const defaultPassword = '621941';
  const existingUser = await User.findOne({ identifierClient: defaultIdentifier });

  if (!existingUser) {
    const passwordHash = await bcrypt.hash(defaultPassword, 10);
    await User.create({
      identifierClient: defaultIdentifier,
      secretCode: passwordHash,
      rememberId: false
    });
    console.log(`Default utilisateur créé : ${defaultIdentifier} / ${defaultPassword}`);
    return;
  }

  const passwordIsCurrent = await bcrypt.compare(defaultPassword, existingUser.secretCode);
  if (!passwordIsCurrent) {
    existingUser.secretCode = await bcrypt.hash(defaultPassword, 10);
    await existingUser.save();
    console.log(`Mot de passe utilisateur mis à jour : ${defaultIdentifier} / ${defaultPassword}`);
  }
});
