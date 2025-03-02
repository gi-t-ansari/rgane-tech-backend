import express from "express";
import {
  searchCandidates,
  getCandidateDetails,
} from "../controllers/companyController.js";

const router = express.Router();

router.get("/search", searchCandidates);

router.get("/:id", getCandidateDetails);

export default router;
