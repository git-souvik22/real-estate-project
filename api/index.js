import express from "express";
const app = express();
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Souvik2001:cQeGO7STXFZApuv2@souvik.yjvclqj.mongodb.net/estate"
  )
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("API is running on port 3000");
});
