import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
} from "../controllers/listing.controller.js";
import { authUser } from "../Utils/authUser.js";
const router = express.Router();

router.post("/create", authUser, createListing);
router.delete("/delete/:id", authUser, deleteListing);
router.post("/update/:id", authUser, updateListing);

export default router;
