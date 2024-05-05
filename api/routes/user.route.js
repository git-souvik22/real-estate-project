import express from "express";
import {
  DeleteUser,
  UpdateUser,
  getUserListings,
} from "../controllers/user.controller.js";
import { authUser } from "../Utils/authUser.js";
const router = express.Router();

router.put("/update/:id", authUser, UpdateUser);
router.delete("/delete/:id", authUser, DeleteUser);
router.get("/listings/:id", authUser, getUserListings);

export default router;
