const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.login = async (req, res) => {
  try {
    const { identifierClient, secretCode, rememberId } = req.body;

    if (!identifierClient || !secretCode) {
      return res.status(400).json({ message: 'Identifiant client et code secret requis.' });
    }

    const user = await User.findOne({ identifierClient });
    if (!user) {
      return res.status(401).json({ message: 'Identifiant ou code secret incorrect.' });
    }

    const isMatch = await bcrypt.compare(secretCode, user.secretCode);
    if (!isMatch) {
      return res.status(401).json({ message: 'Identifiant ou code secret incorrect.' });
    }

    user.rememberId = rememberId === true;
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({
      message: 'Connexion réussie.',
      token,
      user: {
        identifierClient: user.identifierClient,
        rememberId: user.rememberId
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur lors de la connexion.' });
  }
};
