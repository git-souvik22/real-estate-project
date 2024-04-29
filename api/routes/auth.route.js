import express from "express";
import {
  Google,
  SignIn,
  SignOut,
  SignUp,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/google", Google);
router.post("/signout", SignOut);

export default router;
