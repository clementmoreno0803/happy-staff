const express = require('express');
const companyController = require('../controllers/Company');

const router = express.Router();

//get
router.get('/', companyController.getAllCompany)
router.get('/:id', companyController.getCompany)
//post
router.post('/', companyController.createCompany);
//put
router.put('/:id', companyController.updateCompany);
//delete
router.delete('/:id', companyController.removeCompany);

module.exports = router;
