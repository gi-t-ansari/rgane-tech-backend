import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ id: user.linkedinId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const linkedinAuthSuccess = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = generateToken(req.user);
  res.status(200).json({ user: req.user, token });
};

export const logout = (req, res) => {
  req.logout(() => {
    res.status(200).json({ message: "Logged out successfully" });
  });
};
