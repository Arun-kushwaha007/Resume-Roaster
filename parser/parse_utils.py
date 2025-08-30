# parser/parse_utils.py
import pdfplumber
import docx
import os
import google.generativeai as genai
from collections import Counter

# Configure the Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def extract_text_and_formatting(file_path: str):
    text = ""
    formatting_info = {
        "font_sizes": [],
        "font_names": [],
        "alignments": [],
        "text": ""
    }
    if file_path.endswith(".pdf"):
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                formatting_info["text"] += page.extract_text() + "\n"
                for char in page.chars:
                    formatting_info["font_sizes"].append(round(char["size"]))
                    formatting_info["font_names"].append(char["fontname"])
                    # A simple way to track line starting points for alignment
                    if char.get('x0', 0) < 100: # Assuming left margin
                        formatting_info["alignments"].append(round(char.get('x0', 0)))
        return formatting_info
    elif file_path.endswith(".docx"):
        doc = docx.Document(file_path)
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
            # Limited formatting info from docx
            if para.paragraph_format.first_line_indent:
                 formatting_info["alignments"].append(para.paragraph_format.first_line_indent.pt)
            for run in para.runs:
                if run.font.size:
                    formatting_info["font_sizes"].append(run.font.size.pt)
                if run.font.name:
                    formatting_info["font_names"].append(run.font.name)
        formatting_info["text"] = "\n".join(full_text)
        return formatting_info
    else:
        formatting_info["text"] = "Unsupported file format"
        return formatting_info

def analyze_formatting(formatting_info: dict):
    suggestions = []
    
    # 1. Font Size Consistency
    if formatting_info["font_sizes"]:
        size_counts = Counter(formatting_info["font_sizes"])
        common_sizes = size_counts.most_common(3)
        if len(common_sizes) > 2:
            suggestions.append(f"Your resume uses multiple font sizes ({[s for s, c in common_sizes]}). For a clean look, stick to two sizes: one for headings and one for body text.")

    # 2. Font Name Consistency
    if formatting_info["font_names"]:
        name_counts = Counter(formatting_info["font_names"])
        if len(name_counts) > 1:
            suggestions.append(f"You are using multiple fonts ({list(name_counts.keys())}). It's best to use a single, professional font like 'Calibri', 'Arial', or 'Times New Roman'.")

    # 3. Alignment Consistency (simple check)
    if formatting_info["alignments"]:
        alignment_counts = Counter(formatting_info["alignments"])
        if len(alignment_counts) > 5: # Heuristic for too many different indentations
            suggestions.append("There seem to be inconsistent indentations and alignments. Make sure all your bullet points, paragraphs, and sections are perfectly aligned.")
            
    # Use Gemini for a final, expert opinion
    formatting_summary = f"""
    - Font sizes used (top 3): {[s for s, c in Counter(formatting_info["font_sizes"]).most_common(3)]}
    - Font names used: {list(Counter(formatting_info["font_names"]).keys())}
    - Detected left-margin alignments (top 5): {[a for a, c in Counter(formatting_info["alignments"]).most_common(5)]}
    """
    
    try:
        prompt = f"""
        You are a resume design expert. Based on the following formatting summary of a resume, 
        provide one key suggestion to improve the layout for professional appeal.
        Summary: {formatting_summary}
        """
        response = model.generate_content(prompt)
        if response.text:
            suggestions.append(f"AI Formatting Tip: {response.text}")
    except Exception as e:
        print(f"Error getting AI formatting analysis: {e}")

    return suggestions

def get_ai_analysis(resume_text: str):
    roast_prompt = f"""
    You are a sarcastic career coach. Roast the following resume brutally but humorously.
    Highlight weaknesses, bad phrasing, and boring language.
    Resume text: {resume_text}
    """
    fix_prompt = f"""
    You are a professional career advisor. Rewrite the following resume into a
    recruiter-friendly version with strong action verbs, measurable impact, and
    ATS-friendly keywords. Provide a section-by-section breakdown of improvements.
    Resume text: {resume_text}
    """
    try:
        roast_response = model.generate_content(roast_prompt)
        fix_response = model.generate_content(fix_prompt)
        
        roast = roast_response.text
        fix = fix_response.text
        
        return roast, fix
    except Exception as e:
        print(f"Error getting AI analysis: {e}")
        return "Error: Could not generate AI roast.", "Error: Could not generate AI suggestions."

def analyze(file_path: str):
    formatting_data = extract_text_and_formatting(file_path)
    text = formatting_data["text"]

    if "Unsupported file format" in text:
        return 0, {"roast": "", "fix": "", "general": ["Unsupported file format"], "formatting": []}, []

    # Get AI analysis
    roast, fix = get_ai_analysis(text)

    # --- Enhanced ATS Scoring Logic ---
    score = 0
    suggestions = []

    # 1. Section Scoring (40 points)
    required_sections = ["Education", "Experience", "Skills", "Projects"]
    found_sections = []
    for sec in required_sections:
        if sec.lower() in text.lower():
            score += 10
            found_sections.append(sec)
    if len(found_sections) < len(required_sections):
        missing = [s for s in required_sections if s not in found_sections]
        suggestions.append(f"Your resume is missing the following sections: {', '.join(missing)}. Adding them can significantly improve your score.")

    # 2. Action Verb Scoring (30 points)
    action_verbs = [
        "developed", "led", "managed", "created", "implemented", "achieved", 
        "designed", "engineered", "optimized", "analyzed", "automated", "built"
    ]
    verb_count = sum(1 for verb in action_verbs if verb in text.lower())
    verb_score = min(verb_count * 3, 30)
    score += verb_score
    if verb_score < 15:
        suggestions.append("Your resume could be stronger. Use more action verbs like 'developed', 'achieved', or 'optimized' to describe your accomplishments.")

    # 3. Resume Length Scoring (20 points)
    word_count = len(text.split())
    if 300 <= word_count <= 600:
        score += 20
    elif word_count > 600:
        suggestions.append(f"Your resume is {word_count} words long, which is a bit lengthy. Aim for a concise, one-page resume (around 400-500 words).")
    else: # word_count < 300
        suggestions.append(f"Your resume is only {word_count} words long. Consider adding more detail to your experiences and projects.")
    
    # 4. Contact Information Check (10 points)
    if "email" in text.lower() or "@" in text:
        score += 5
    else:
        suggestions.append("You are missing an email address. Make sure to include your contact information.")
    if "phone" in text.lower() or any(char.isdigit() for char in text):
        score += 5
    else:
        suggestions.append("You are missing a phone number. Make sure to include your contact information.")

    # Get formatting suggestions
    formatting_suggestions = analyze_formatting(formatting_data)

    # Combine AI suggestions with rule-based ones
    all_suggestions = {
        "roast": roast,
        "fix": fix,
        "general": suggestions,
        "formatting": formatting_suggestions
    }

    return score, all_suggestions, found_sections
