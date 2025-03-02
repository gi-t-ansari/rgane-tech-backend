import Candidate from "../models/Candidate.js";

export const searchCandidates = async (req, res) => {
  try {
    const { skill, experience } = req.query;
    let query = {};

    if (skill) query.skills = { $regex: skill, $options: "i" };
    if (experience) query.experience = { $gte: experience };

    const candidates = await Candidate.find(query);
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error searching candidates" });
  }
};

export const getCandidateDetails = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidate details" });
  }
};
