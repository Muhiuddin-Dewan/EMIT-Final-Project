import express from "express";
import {
  forgotPasswordController,
  registerController,
  loginController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object

const router = express.Router();

//routing
//Regiter || Method Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

// Forgot-Password || POST
router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

// protected route auth
router.get("/userAuth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin route auth
router.get("/adminAuth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSignIn, updateProfileController);

export default router;
