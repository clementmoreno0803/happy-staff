// routes/applications.js
const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Obtenir toutes les companies
exports.getAllCompany = (req, res) => {
  Company.findAll()
    .then(company => res.status(200).json(company))
    .catch(error => res.status(404).json(error))
}

exports.getCompany = (req, res) => {
  Company.findOne({ company_id: req.params.id })
    .then(company => res.status(200).json(company))
    .catch(error => res.status(404).json(error))
}

// Créer une nouvelle company
exports.createCompany = (req, res) => {
 bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const entreprise = new Company({
        ...req.body,
        email: req.body.email,
        password: hash
      });
      entreprise.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}

exports.login = (req, res, next) => {
   Company.findOne({ email: req.body.email })
       .then(company => {
           if (!company) {
               return res.status(401).json({ error: 'Entreprise non trouver !' });
           }
           bcrypt.compare(req.body.password, company.password)
               .then(valid => {
                   if (!valid) {
                       return res.status(401).json({ error: 'Mot de passe incorrecte !' });
                   }
                   res.status(200).json({
                       userId: company.company_id,
                       statut: 'entreprise',
                       token: jwt.sign(
                           { userId: company.company_id },
                           'RANDOM_TOKEN_SECRET',
                           { expiresIn: '24h' }
                       )
                  });
               })
               .catch(error => res.status(500).json(error));
       })
       .catch(error => res.status(500).json(error));
};


// Mettre à jour une company
exports.updateCompany = async (req, res) => {
  const company = await Company.findByPk(req.params.id);
  company.update(req.body)
    .then(company => res.status(200).json(company))
    .catch(error => res.status(500).json({ error: error.message }))
}

// Supprimer une company
exports.removeCompany = async (req, res) => {
  const { id } = req.params;
  const company = await Company.findByPk(id);
  await company.destroy()
    .then(res.json({ message: "Company supprimé avec succès." }))
    .catch(error => res.status(404).json({ message: error }))
}
