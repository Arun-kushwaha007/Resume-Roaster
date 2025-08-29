
// server/src/routes/analyze.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Roast Endpoint
router.post("/roast", async (req, res) => {
  try {
    const { text } = req.body;

    const prompt = `You are a sarcastic career coach. Roast the following resume brutally but humorously. Highlight weaknesses, bad phrasing, and boring language. Resume text:\n\n${text}`;

    const gptRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 400,
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    res.json({ roast: gptRes.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Error roasting resume" });
  }
});

// Fix Endpoint
router.post("/fix", async (req, res) => {
  try {
    const { text } = req.body;

    const prompt = `You are a professional career advisor. Rewrite the following resume into a recruiter-friendly version with strong action verbs, measurable impact, and ATS-friendly keywords. Resume text:\n\n${text}`;

    const gptRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 600,
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    res.json({ fixed: gptRes.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Error fixing resume" });
  }
});

export default router;
