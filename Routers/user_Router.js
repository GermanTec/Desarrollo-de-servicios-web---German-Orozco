const express=require('express');
const router=express.Router();
const userController = require('../Controllers/user_controller');
const authMiddleware = require('../utils/auth.middleware')

router.post('/',userController.registerUser)
//router.post('/',userController.registerUser)
router.get('/',userController.getUser)
router.post('/login',userController.loginUser)

module.exports=router;