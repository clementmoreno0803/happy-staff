const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/User');

const router = express.Router();

//get
router.get('/', auth,userController.getAllUser)
router.get('/:id', auth, userController.getUser)
//post
router.post('/', auth,userController.createUser);
router.post('/login', userController.login);
//put
router.put('/:id', auth,userController.updateUser);
//delete
router.delete('/:id', auth,userController.removeUser);

module.exports = router;
