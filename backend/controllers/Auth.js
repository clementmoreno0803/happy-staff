// routes/applications.js
const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerPP = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        ...req.body,
        email: req.body.email,
        password: hash
      });
      user.save()
      .then(user => res.status(201).json({ id: user.id }))
      .catch(error => res.status(400).json({ error }));

    })
    .catch(error => res.status(500).json({ error }));
};

exports.registerPM = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const company = new Company({
        ...req.body,
        email: req.body.email,
        password: hash
      });
    company.save()
      .then(() => res.status(201).json({ message: 'Entreprise créée !' }))
      .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        return bcrypt.compare(password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            return res.status(200).json({
              userId: user.id,
              statut: 'particulier',
              token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          });
      } else {
        return Company.findOne({ where: { email } })
          .then(company => {
            if (!company) {
              return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            return bcrypt.compare(password, company.password)
              .then(valid => {
                if (!valid) {
                  return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                return res.status(200).json({
                  userId: company.company_id,
                  statut: 'entreprise',
                  token: jwt.sign(
                    { userId: company.company_id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                  )
                });
              });
          });
      }
    })
    .catch(error => res.status(500).json({ error }));
};
