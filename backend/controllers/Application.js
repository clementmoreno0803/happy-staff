// routes/applications.js
const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Obtenir toutes les applications
exports.getAllApplications = (req, res) => {
  Application.findAll()
    .then(applications => res.statut(200).json(applications))
    .catch(error =>
      res.status(500).json({ error: error.message }))
}

exports.getApplication = (req, res) => {
  Application.findOne({ application_id: req.params.id })
    .then(application => res.status(200).json(application))
    .catch(error => res.status(404).json(error))
}

// Créer une nouvelle application
exports.createApplication = (req, res) => {
  delete req.body.id
  const application = new Application({ ...req.body })
  application.save()
    .then(() => res.status(200).json({ message: 'CV envoyé !' }))
    .catch(error => res.status(500).json({ error: error.message }))
}


// Mettre à jour une application
exports.updateApplication = async (req, res) => {
  const application = Application.findOne(req.params.id)
  application.update(req.body)
    .then(application => res.json(application))
    .catch (error => res.status(500).json({ error: error.message }))
  }

// Supprimer une application
exports.removeApplication = (req, res) => {
  Application.destroy(req.params.id)
    .then(application => res.status(200).json(application))
    .catch(error => res.status(500).json({ error: error.message }))
}
