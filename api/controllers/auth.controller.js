import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

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
