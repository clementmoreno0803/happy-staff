const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.getUser = (req, res, next) => {
  User.findOne({ user_id : req.params.id})
  .then(user => res.status(201).json(user))
  .catch(error => res.status(404).json(error))
}

exports.getAllUser = (req, res, next) => {
  User.findAll()
    .then(user => res.status(201).json(user))
    .catch(error => res.status(400).json(error))
}

exports.createUser = (req, res, next) => {
bcrypt.hash(req.body.password, 10)
.then(hash => {
  const user = new User({
    ...req.body,
    password: hash
  })
  user.save()
      .then((savedUser) => {
            const token = jwt.sign(
            { user_id: savedUser._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
          );
          // Créer un token après que l'utilisateur a été sauvegardé
          res.status(201).json({
            message: 'Utilisateur créé !',
            token: token
          });
        })
      .catch(error => res.status(400).json(error))
  })
  .catch(error => res.status(500).json(error))
}

exports.login = (req, res, next) => {
   User.findOne({ email: req.body.email })
       .then(user => {
           if (!user) {
               return res.status(401).json({ error: 'Utilisateur non trouvé !' });
           }
           bcrypt.compare(req.body.password, user.password)
               .then(valid => {
                   if (!valid) {
                       return res.status(401).json({ error: 'Mot de passe incorrect !' });
                   }
                   res.status(200).json({
                       userId: user._id,
                       token: jwt.sign(
                           { userId: user._id },
                           'RANDOM_TOKEN_SECRET',
                           { expiresIn: '24h' }
                       )
                      });
               })
               .catch(error => res.status(500).json(error));
       })
       .catch(error => res.status(500).json(error));
};

exports.updateUser = async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.update(req.body);
        res.json(user);
      } else {
        res.status(404).json({ message: 'Application not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.removeUser =  async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
      await user.destroy()
      .then(res.json({ message: "Utilisateur supprimé avec succès." }))
      .catch(error => res.status(404).json({ message: error }))
    }
