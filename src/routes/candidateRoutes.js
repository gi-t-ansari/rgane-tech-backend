import express from "express";
import {
  getAllCandidates,
  getCandidateById,
  updateCandidate,
} from "../controllers/candidateController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllCandidates);

router.get("/:id", getCandidateById);

router.put("/:id", authMiddleware, updateCandidate);

export default router;
