// routes/applications.js
const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

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
  delete req.body.id
  const company = new Company({ ...req.body });
  company.save()
    .then(() => res.status(200).json({ message: 'company crée !' }))
    .catch(error => res.status(500).json({ error: error.message }))
}


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
