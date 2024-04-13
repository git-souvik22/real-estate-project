import bcryptjs from "bcryptjs";

export const ValidatePass = (password, hashedPassword) => {
  const verifyPassword = bcryptjs.compareSync(password, hashedPassword);
  if (verifyPassword) {
    return true;
  }
  if (!verifyPassword) {
    return false;
  }
};
