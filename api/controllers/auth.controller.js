import { ValidatePass } from "../Utils/validatePassword.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    if (savedUser) {
      res.status(201).json({
        success: true,
        message: "Successfully Registered!",
      });
    }
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ success: false, errMessage: errors });
    }
    if (err.name === "MongoServerError") {
      const errorRes = err.errorResponse.errmsg;
      if (
        errorRes.includes("E11000 duplicate key error") &&
        errorRes.includes("username")
      ) {
        return res.status(400).json({
          success: false,
          errMessage: "this username is already taken",
        });
      }
      if (
        errorRes.includes("E11000 duplicate key error") &&
        errorRes.includes("email")
      ) {
        return res.status(400).json({
          success: false,
          errMessage: "this email is already registered",
        });
      }
    }
    res.status(500).send("Server Error");
  }
};

export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email });
    const validPassword = ValidatePass(password, checkUser.password);
    const genToken = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    const { password: pass, ...rest } = checkUser._doc;

    if (checkUser && validPassword) {
      res
        .cookie("access_token", genToken, { httpOnly: true })
        .status(200)
        .json({
          success: true,
          user: rest,
          token: genToken,
        });
    }
    if (!checkUser || !validPassword) {
      res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
