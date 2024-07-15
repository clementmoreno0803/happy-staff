const express = require('express');
const router = express.Router();
const authController = require('../controllers/Auth');

// Routes d'inscription
router.post('/register/physique', authController.registerPP);
router.post('/register/morale', authController.registerPM);

// Route de login
router.post('/login', authController.login);

module.exports = router;
