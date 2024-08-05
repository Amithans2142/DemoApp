const express = require('express');
const { userRegistration, loginUser } = require('../controllers/auth');
const { getUsers, editUser, deleteUser } = require('../controllers/usersController');
const user = require('../middlewares/user');
const router = express.Router();
router.post('/adduser',userRegistration)
router.post('/login',loginUser)
router.get('/users',getUsers)
router.put('/update/:id',user,editUser)
router.delete('/delete/:id',deleteUser)
module.exports=router;