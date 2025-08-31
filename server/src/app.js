import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import uploadRouter from "./routes/upload.js";
import analyzeRouter from "./routes/analyze.js";
import authRouter from "./routes/auth.js";
import plansRouter from "./routes/plans.js";
// import plansRouter from "./routes/Plans.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/upload", uploadRouter);
app.use("/api/analyze", analyzeRouter);
app.use("/api/auth", authRouter);
app.use('/api/plans', plansRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
