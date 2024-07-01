const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/User');

const router = express.Router();

//get
router.get('/',userController.getAllUser)
router.get('/:id', userController.getUser)
//post
router.post('/', auth, userController.createUser);
router.post('/login', auth, userController.login)
//put
router.put('/:id',userController.updateUser);
//delete
router.delete('/:id',userController.removeUser);

module.exports = router;
