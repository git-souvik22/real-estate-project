import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const UpdateUser = async (req, res) => {
  if (req.user.id !== req.params.id)
    return res.json({
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
    res.json({
      success: false,
      message: error,
    });
  }
};
