import express from "express";
import multer from "multer";
import { analyzeResume } from "../services/parserService.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const result = await analyzeResume(req.file.path, req.file.originalname);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Error analyzing resume" });
  }
});

export default router;
