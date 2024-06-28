const express = require('express');
const auth = require('../middleware/auth');
const companyController = require('../controllers/Company');

const router = express.Router();

//get
router.get('/', auth,companyController.getAllCompany)
router.get('/:id', auth, companyController.getCompany)
//post
router.post('/', auth,companyController.createCompany);
//put
router.put('/:id', auth,companyController.updateCompany);
//delete
router.delete('/:id', auth,companyController.removeCompany);

module.exports = router;
