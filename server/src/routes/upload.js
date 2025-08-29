// server/src/routes/upload.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const { callParser } = require('../services/parserService');
const { computeATSScores } = require('../services/atsScorer');
const Resume = require('../models/Resume');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    await fs.ensureDir(path.join(process.cwd(), 'uploads'));

    // call parser microservice
    const parseResult = await callParser(file.path, file.originalname);
    const parsedText = parseResult.parsed_text || parseResult.parsedText || '';
    const layoutJson = parseResult.layout || parseResult.layoutJson || {};

    // compute ATS scores (no jobDescription provided here; optional second param)
    const atsResult = computeATSScores(parsedText, layoutJson, req.body.jobDescription || '');

    // persist resume record
    const resumeRecord = new Resume({
      filename: file.originalname,
      originalFilePath: file.path,
      parsedText,
      layoutJson,
      atsScore: atsResult.atsScore,
      sectionScores: atsResult.sectionScores,
      suggestions: atsResult.suggestions
    });
    await resumeRecord.save();

    return res.json({
      status: 'ok',
      resumeId: resumeRecord._id,
      parseResult,
      atsResult
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Upload failed', details: err.message });
  }
});

module.exports = router;
