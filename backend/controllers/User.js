const User = require('../models/User');
const bcrypt = require('bcrypt');
const jswtoken = require('jsonwebtoken')

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
  console.log('createUser');
delete req.body.id
bcrypt.hash(req.body.password, 10)
.then(hash => {
  const user = new User({
    ...req.body,
    password: hash
  })
  user.save()
      .then(() => res.status(201).json({message: 'User créé !'}))
      .catch(error => res.status(400).json(error))
  })
  .catch(error => res.status(500).json(error))
}

exports.login = (req, res, next) => {
  User.findOne({email: req.body.email})
  .then(user => {
    if( user === null){
      res.status(401).json({message: 'pair-identifiant mot de passe incorect'})
    }
    else{
      bcrypt.compare(req.body.password, user.password)
      .then( valid => {
        if(!valid){
          res.status(401).json({message: 'pair-identifiant mot de passe incorect'})
        }else {
          res.status(201).json({
            id: user.user_id,
            token: jwt.sign(
                      { userId: user._id },
                      'TOKEN_SECRET',
                      { expiresIn: '24h' }
                      )
          })
        }
      })
      .catch(error => res.status(500).json(error))
    }
  })
  .catch(error => res.status(500).json(error))
}


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
