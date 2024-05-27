const express = require('express');
const router = express.Router();
const appController = require('../controllers/Application');

//get
router.get('/', appController.getAllApplications);
router.get('/:id', appController.getApplication);

// post
router.post('/', appController.createApplication);

// put
router.put('/:id', appController.updateApplication);

// delete
router.delete(':id', appController.removeApplication);


module.exports = router;
