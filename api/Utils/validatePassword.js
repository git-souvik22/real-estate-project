import bcryptjs from "bcryptjs";

export const ValidatePass = (password, hashedPassword) => {
  const verifyPassword = bcryptjs.compareSync(password, hashedPassword);
  if (verifyPassword === true) {
    return true;
  }
  if (verifyPassword === false) {
    return false;
  }
};
