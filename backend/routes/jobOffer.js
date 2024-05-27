const express = require('express');
const jobController = require('../controllers/JobOffer');

const router = express.Router();

//get
router.get('/', jobController.getAlljobOffer)
router.get('/:id', jobController.getjobOffer)
//post
router.post('/', jobController.createjobOffer);
//put
router.put('/:id', jobController.updatejobOffer);
//delete
router.delete('/:id', jobController.removejobOffer);

module.exports = router;
