const User = require('../models/User');

exports.getUser = (req, res, next) => {
  User.findOne({ user_id : req.params.id})
  .then(user => res.status(200).json(user))
  .catch(error => res.status(404).json(error))
}

exports.getAllUser = (req, res, next) => {
  User.findAll()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json(error))
}

exports.createUser = (req, res, next) => {
delete req.body.id
 const user = new User({
  ...req.body
 })
 user.save()
    .then(() => res.status(200).json({message: 'User créé !'}))
    .catch(error => res.status(404).json(error))
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

exports.removeUser = (req, res, next) => {
  User.destroy({ user_id: req.params.id })
    .then(() => res.status(200).json({ message: 'User supprimé !' }))
    .catch(error => res.status(404).json(error))
}
