import express from "express";
import passport from "../config/auth.js";
import { linkedinAuthSuccess, logout } from "../controllers/authController.js";

const router = express.Router();

router.get(
  "/linkedin",
  passport.authenticate("linkedin", { state: "SOME STATE" })
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    failureRedirect: "/login",
    session: false,
  }),
  linkedinAuthSuccess
);

router.post("/logout", logout);

export default router;
