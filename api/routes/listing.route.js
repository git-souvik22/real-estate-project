import express from "express";
import {
  createListing,
  deleteListing,
} from "../controllers/listing.controller.js";
import { authUser } from "../Utils/authUser.js";
const router = express.Router();

router.post("/create", authUser, createListing);
router.delete("/delete/:id", authUser, deleteListing);

export default router;
