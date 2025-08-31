// server/src/models/Resume.js
import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  filename: { type: String },
  originalFilePath: { type: String },
  parsedText: { type: String },
  layoutJson: { type: Object },
  atsScore: { type: Number, default: null },
  sectionScores: { type: Object, default: {} },
  suggestions: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Resume', ResumeSchema);
