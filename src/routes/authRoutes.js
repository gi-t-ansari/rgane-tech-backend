import express from "express";
import passport from "../config/auth.js";
import { linkedinAuthSuccess, logout } from "../controllers/authController.js";

const router = express.Router();

router.get("/linkedin", passport.authenticate("linkedin", { state: true }));

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    failureRedirect: "/login",
    // session: false,
  }),
  linkedinAuthSuccess
);

router.get("/login", (req, res) => {
  res.redirect("http://localhost:5173/login");
});

router.post("/logout", logout);

export default router;
