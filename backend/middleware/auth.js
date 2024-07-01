// authMiddleware.js
const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log('Auth Header:', authHeader);

    if (!authHeader) {
      console.log('Token non fourni !');
      return res.status(401).json({ error: 'Token non fourni !' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token);

    if (!token) {
      console.log('Format de token invalide !');
      return res.status(401).json({ error: 'Format de token invalide !' });
    }

    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    console.log('Decoded Token:', decodedToken);

    const userId = decodedToken.userId;
    req.aut = { user_id: userId };
    next();
  } catch (error) {
    console.log('Authentification échouée !', error);
    res.status(401).json({ error: 'Authentification échouée !' });
  }
};
