import express from 'express';
import { registerController } from '../controllers/authController.js'
import { loginController } from '../controllers/authController.js';
import { testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object

const router = express.Router()

//routing
//Regiter || Method Post
router.post('/register', registerController)

// Login || Post
router.post('/login',loginController);


// test route
router.get('/test', requireSignIn, isAdmin, testController);

export default router;