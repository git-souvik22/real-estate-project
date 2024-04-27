import express from "express";
import { DeleteUser, UpdateUser } from "../controllers/user.controller.js";
import { authUser } from "../Utils/authUser.js";
const router = express.Router();

router.put("/update/:id", authUser, UpdateUser);
router.delete("/delete/:id", authUser, DeleteUser);

export default router;
