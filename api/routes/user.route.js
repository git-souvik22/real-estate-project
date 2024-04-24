import express from "express";
import { UpdateUser } from "../controllers/user.controller.js";
import { authUser } from "../Utils/authUser.js";
const router = express.Router();

router.put("/update/:id", authUser, UpdateUser);

export default router;
