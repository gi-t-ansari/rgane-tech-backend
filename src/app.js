import express from "express";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import session from "express-session";
import dotenv from "dotenv";

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(corsMiddleware);

app.use("/auth", authRoutes);
app.use("/candidates", candidateRoutes);
app.use("/companies", companyRoutes);

app.use(errorHandler);

export default app;
