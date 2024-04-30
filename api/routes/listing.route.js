import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { authUser } from "../Utils/authUser.js";
const router = express.Router();

router.post("/create", authUser, createListing);

export default router;
