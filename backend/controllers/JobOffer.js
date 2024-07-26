// routes/applications.js
const express = require('express');
const router = express.Router();
const JobOffer = require('../models/JobOffer');

// Obtenir toutes les jobOffers
exports.getAlljobOffer = (req, res) => {
  console.log(JobOffer.findAll());
JobOffer.findAll()
.then(jobOffer => res.status(200).json(jobOffer))
.catch(error => res.status(404).json(error))
}

exports.getjobOffer = (req, res) => {
  JobOffer.findOne({ job_id: req.params.id })
    .then(jobOffer => res.status(200).json(jobOffer))
    .catch(error => res.status(404).json(error))
}

// Créer une nouvelle offre
exports.createjobOffer = (req, res) => {
  const jobOffer = new JobOffer({ ...req.body });
  jobOffer.save()
    .then(() => res.status(200).json({ jobOffer: jobOffer.dataValues }))
    .catch(error => res.status(500).json({ error: error.message }))
}


// Mettre à jour une offre
exports.updatejobOffer = async (req, res) => {
  const jobOffer = await JobOffer.findByPk(req.params.id);
  jobOffer.update(req.body)
    .then(jobOffer => res.status(200).json(jobOffer))
    .catch(error => res.status(500).json({ error: error.message }))
}

// Supprimer une jobOffer
exports.removejobOffer = async (req, res) => {
  const { id } = req.params;
  const jobOffer = await JobOffer.findByPk(id);
  await jobOffer.destroy()
    .then(res.json({ message: "jobOffer supprimé avec succès." }))
    .catch(error => res.status(404).json({ message: error }))
}
