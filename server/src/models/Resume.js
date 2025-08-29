// server/src/models/Resume.js
const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  filename: { type: String },
  originalFilePath: { type: String },
  parsedText: { type: String },
  layoutJson: { type: Object },
  atsScore: { type: Number, default: null },
  sectionScores: { type: Object, default: {} },
  suggestions: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
