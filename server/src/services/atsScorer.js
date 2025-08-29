// server/src/services/atsScorer.js
// Simple ATS scoring module based on the rubric we discussed.
// No external deps.

const WEIGHTS = {
  contact: 5,
  summary: 10,
  experience: 30,
  skills: 15,
  projects: 10,
  education: 5,
  formatting: 15,
  keywords: 10
};

const VERB_BLACKLIST = [
  'worked on', 'helped', 'did', 'responsible for', 'assisted', 'participated'
];

function safeLower(s) { return (s || '').toLowerCase(); }

// naive section splitter using headings (SUMMARY, EXPERIENCE, PROJECTS, SKILLS, EDUCATION)
function splitSections(text) {
  const secOrder = ['summary','experience','projects','skills','education','other'];
  const norm = text.replace(/\r/g,'\n');
  // Split by lines and collect chunks under headings
  const lines = norm.split('\n');
  const sections = { summary:'', experience:'', projects:'', skills:'', education:'', other:'' };
  let cur = 'other';
  for (let line of lines) {
    const L = line.trim();
    if (!L) continue;
    const upper = L.replace(/[:.]/g,'').trim().toUpperCase();
    if (/^SUMMARY|OBJECTIVE|PROFILE$/.test(upper)) { cur = 'summary'; continue; }
    if (/^EXPERIENCE|WORK EXPERIENCE|EMPLOYMENT$/.test(upper)) { cur = 'experience'; continue; }
    if (/^PROJECTS?/.test(upper)) { cur = 'projects'; continue; }
    if (/^SKILLS?/.test(upper)) { cur = 'skills'; continue; }
    if (/^EDUCATION|EDUCATIONAL|ACADEMICS$/.test(upper)) { cur = 'education'; continue; }
    sections[cur] += line + '\n';
  }
  return sections;
}

function scoreContact(text) {
  // phone, email, linkedin/github
  const lower = safeLower(text);
  let score = 0;
  if (/\b\d{10}\b/.test(lower) || /\+\d{1,3}.*\d{4,}/.test(lower)) score += 2; // phone-ish
  if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/.test(lower)) score += 2; // email
  if (/linkedin\.com|github\.com/.test(lower)) score += 1;
  return Math.min(score, WEIGHTS.contact);
}

function scoreSummary(text) {
  if (!text) return 0;
  const len = text.trim().split(/\n/).join(' ').split(' ').length;
  // good summary 15-50 words approx -> high score
  let score = 0;
  if (len >= 10 && len <= 60) score = WEIGHTS.summary;
  else if (len >= 5) score = Math.round(WEIGHTS.summary * 0.7);
  else score = Math.round(WEIGHTS.summary * 0.4);
  // penalize fluff words
  if (/hardworking|team player|excellent communication|detail-oriented/.test(safeLower(text))) {
    score = Math.max(0, score - 2);
  }
  return score;
}

function scoreExperience(text) {
  if (!text) return 0;
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const bullets = lines.filter(l => /^[-•*]/.test(l) || l.includes(' - ') || l.startsWith('•'));
  const approximateBullets = bullets.length || Math.max(1, Math.min(5, Math.floor(lines.length / 2)));
  // Count bullets that contain digits -> measurable
  let quantified = 0;
  let weakVerbCount = 0;
  for (let l of lines) {
    const low = safeLower(l);
    if (/\d+%|\b\d+\b/.test(low)) quantified++;
    for (let vb of VERB_BLACKLIST) if (low.includes(vb)) weakVerbCount++;
  }
  // base proportion of quantified bullets
  const ratio = Math.min(1, quantified / (approximateBullets || 1));
  let score = Math.round(WEIGHTS.experience * (0.4 + 0.6 * ratio)); // base floor 40% then scale
  // penalize if many weak verbs
  const weakPenalty = Math.min(6, weakVerbCount * 2);
  score = Math.max(0, score - weakPenalty);
  return score;
}

function extractSkills(text) {
  if (!text) return [];
  // split by commas, slashes, pipes, newlines
  const tokens = text.split(/[,\/|•\n]+/).map(s => s.trim()).filter(Boolean);
  // filter out common words
  return tokens.slice(0, 80);
}

function scoreSkills(text, jobDesc) {
  const skills = extractSkills(text);
  if (skills.length === 0) return 0;
  // basic uniqueness
  const uniqueCount = new Set(skills.map(s => s.toLowerCase())).size;
  let score = Math.round((uniqueCount / Math.max(6, uniqueCount)) * WEIGHTS.skills);
  // if jobDesc provided, reward overlap
  if (jobDesc) {
    const jd = safeLower(jobDesc);
    let matches = 0;
    for (let s of skills) if (jd.includes(s.toLowerCase())) matches++;
    const ratio = matches / Math.max(1, skills.length);
    score = Math.round(score * (0.6 + 0.4 * ratio));
  }
  return Math.min(score, WEIGHTS.skills);
}

function scoreProjects(text) {
  if (!text) return 0;
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const itemCount = Math.min(5, lines.length);
  const quantified = lines.filter(l => /\d+%|\b\d+\b/.test(l)).length;
  const ratio = quantified / Math.max(1, itemCount);
  const score = Math.round(WEIGHTS.projects * (0.3 + 0.7 * ratio));
  return score;
}

function scoreEducation(text) {
  if (!text) return 0;
  // presence of institution, degree, year
  let score = 0;
  const low = safeLower(text);
  if (/[a-z]/.test(low)) score += 2;
  if (/\b(btech|b\.tech|bachelor|mtech|ms|master|phd)\b/.test(low)) score += 2;
  if (/\b(20\d{2}|19\d{2})\b/.test(low)) score += 1;
  return Math.min(score, WEIGHTS.education);
}

// formatting score based on layoutJson bounding boxes (heuristic)
function scoreFormatting(layoutJson) {
  if (!layoutJson || !layoutJson.pages) return Math.round(WEIGHTS.formatting * 0.5);
  // compute x0 variance per page
  try {
    let totals = [];
    for (let p of layoutJson.pages) {
      const xs = (p.words || []).map(w => w.x0).filter(v => typeof v === 'number');
      if (xs.length < 3) continue;
      const mean = xs.reduce((a,b)=>a+b,0)/xs.length;
      const variance = xs.reduce((a,b)=>a + Math.pow(b-mean,2),0)/xs.length;
      totals.push(variance);
    }
    if (totals.length === 0) return Math.round(WEIGHTS.formatting * 0.6);
    const avgVar = totals.reduce((a,b)=>a+b,0)/totals.length;
    // heuristics: smaller variance -> better alignment -> higher score
    // tune thresholds empirically. We'll map var [0, 2000+] to score 100->0
    const norm = Math.max(0, Math.min(1, 1 - (avgVar / 2000)));
    return Math.round(WEIGHTS.formatting * (0.4 + 0.6 * norm)); // base 40% then scale
  } catch (e) {
    return Math.round(WEIGHTS.formatting * 0.5);
  }
}

function scoreKeywords(text, jobDesc) {
  if (!jobDesc) return 0;
  const jd = safeLower(jobDesc).replace(/[^a-z0-9\s]/g,' ');
  const words = new Set(jd.split(/\s+/).filter(Boolean));
  const parsed = safeLower(text);
  let matches = 0;
  for (let w of words) {
    if (w.length < 3) continue;
    if (parsed.includes(w)) matches++;
  }
  const ratio = matches / Math.max(1, words.size);
  return Math.round(WEIGHTS.keywords * ratio);
}

function suggestForExperience(text) {
  // return small suggestions array
  const suggestions = [];
  if (!text) return ['Add experience bullets with measurable impact (numbers, % improvements).'];
  if (!/\d/.test(text)) suggestions.push('No quantifiable metrics found. Add numbers where possible (users, % improvement, time saved).');
  for (let vb of VERB_BLACKLIST) {
    if (safeLower(text).includes(vb)) {
      suggestions.push(`Avoid weak phrases like "${vb}". Use action verbs: developed, improved, reduced, led, automated.`);
      break;
    }
  }
  return suggestions;
}

function computeATSScores(parsedText, layoutJson = {}, jobDescriptionText = '') {
  const sections = splitSections(parsedText || '');
  const contactScore = scoreContact(parsedText);
  const summaryScore = scoreSummary(sections.summary);
  const experienceScore = scoreExperience(sections.experience);
  const skillsScore = scoreSkills(sections.skills, jobDescriptionText);
  const projectsScore = scoreProjects(sections.projects);
  const educationScore = scoreEducation(sections.education);
  const formattingScore = scoreFormatting(layoutJson);
  const keywordsScore = scoreKeywords(parsedText, jobDescriptionText);

  const sectionScores = {
    contact: contactScore,
    summary: summaryScore,
    experience: experienceScore,
    skills: skillsScore,
    projects: projectsScore,
    education: educationScore,
    formatting: formattingScore,
    keywords: keywordsScore
  };

  const atsScore = Object.values(sectionScores).reduce((a,b)=>a+b,0);
  const suggestions = {
    summary: (summaryScore < WEIGHTS.summary) ? ['Make summary concise, include role and 2–3 key skills.'] : [],
    experience: (experienceScore < WEIGHTS.experience) ? suggestForExperience(sections.experience) : [],
    skills: (skillsScore < WEIGHTS.skills) ? ['Add specific technical skills and avoid generic terms.'] : [],
    formatting: (formattingScore < WEIGHTS.formatting) ? ['Use single-column layout, consistent font sizes, avoid tables/columns.'] : []
  };

  return {
    atsScore: Math.max(0, Math.min(100, atsScore)),
    sectionScores,
    suggestions,
    sectionsDetected: Object.keys(sections).filter(k=>sections[k] && sections[k].trim().length>5)
  };
}

module.exports = { computeATSScores };
