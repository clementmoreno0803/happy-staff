const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       console.log('TOOOKENNNN', token);
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       console.log('DECODEDTOKEN', decodedToken);
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
    console.log(error);
       res.status(401).json({ error });
   }
};
