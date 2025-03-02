import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    linkedinId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    skills: [{ type: String }],
    experience: { type: Number, default: 0 }, // Years of experience
    location: { type: String },
    preferredRoles: [{ type: String }],
  },
  { timestamps: true }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
export default Candidate;
