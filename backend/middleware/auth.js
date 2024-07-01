const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
try {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  req.aut = {
    userId: userId
  };
  console.log('passé')
} catch (error) {
  res.status(401).json(error);
}
}
