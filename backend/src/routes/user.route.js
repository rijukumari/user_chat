import express from "express";
import {
  getUserProfile,
  login,
  logout,
  singup,
} from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
const router = express.Router();

router.post("/singup", singup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUserProfile", secureRoute, getUserProfile);

// router.get("/getUserProfile", secureRoute, getUserProfile);

export default router;
