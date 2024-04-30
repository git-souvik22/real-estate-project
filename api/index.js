import express from "express";
const app = express();
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, ".env") });
import cookieParser from "cookie-parser";
// routes imported
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

// middleware
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("API is running on port 3000");
});
