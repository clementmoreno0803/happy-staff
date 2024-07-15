const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/User');

const router = express.Router();

//get
router.get('/', auth,userController.getAllUser)
router.get('/:id', auth, userController.getUser)
//post
router.post('/', userController.createUser);
//put
router.put('/:id',userController.updateUser);
//delete
router.delete('/:id',userController.removeUser);

module.exports = router;
