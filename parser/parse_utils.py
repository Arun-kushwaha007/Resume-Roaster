# parser/parse_utils.py
import pdfplumber
import docx

def extract_text(file_path: str):
    if file_path.endswith(".pdf"):
        text = ""
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"
        return text
    elif file_path.endswith(".docx"):
        doc = docx.Document(file_path)
        return "\n".join([p.text for p in doc.paragraphs])
    else:
        return "Unsupported file format"

def analyze(file_path: str):
    text = extract_text(file_path)

    # Rule-based ATS scoring
    sections = ["Education", "Experience", "Skills", "Projects"]
    score = 50
    found_sections = []

    for sec in sections:
        if sec.lower() in text.lower():
            score += 10
            found_sections.append(sec)

    suggestions = []
    if "Projects" not in found_sections:
        suggestions.append("Add a 'Projects' section with measurable achievements.")
    if "Skills" not in found_sections:
        suggestions.append("List your skills clearly in bullet points.")
    if "experience" not in text.lower():
        suggestions.append("Highlight internships or work experience with action verbs.")

    return score, suggestions, found_sections
