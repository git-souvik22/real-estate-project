import express from "express";
import { UpdateUser, test } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", test);
router.put("/update/:id", UpdateUser);

export default router;
