import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "password length should be minimum of 8 characters"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
