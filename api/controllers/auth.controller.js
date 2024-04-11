import User from "../models/user.model.js";

export const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username: username,
      email: email,
      password: password,
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
      return res.status(400).json({ errors });
    }
    res.status(500).send("Server Error");
  }
};
