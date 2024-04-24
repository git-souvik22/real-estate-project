import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const authUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token)
    return res.json({
      success: false,
      message: "Unauthorized User!",
    });
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.json({ success: false, message: "ERROR!" });
      req.user = user;
      next();
    });
  }
};
