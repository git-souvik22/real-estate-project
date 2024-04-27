import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const UpdateUser = async (req, res) => {
  if (req.user.id !== req.params.id)
    return res.status(500).json({
      success: false,
      message: "Unauthorized Access!",
    });
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avator: req.body.avator,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json({
      success: true,
      user: rest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const DeleteUser = async (req, res) => {
  if (req.user.id !== req.params.id)
    return res.status(500).json({
      success: false,
      message: "Cannot Delete Account",
    });
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (deleteUser) {
      res.status(401).json({
        success: true,
        message: "Account Deletion Complete!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
