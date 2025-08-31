import pdfplumber
import docx
import os
from collections import Counter
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure OpenRouter client
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

if OPENROUTER_API_KEY:
    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key=OPENROUTER_API_KEY,
    )
    API_AVAILABLE = True
    print("✅ OpenRouter client configured successfully")
else:
    client = None
    API_AVAILABLE = False
    print("❌ OPENROUTER_API_KEY not found in environment variables")

# Preferred models in order (for roast/analysis)
ROAST_MODELS = [
    "Qwen/QwQ-32B",  # Free reasoning model
    "deepseek-ai/DeepSeek-R1",  # Strong reasoning
    "meta-llama/Meta-Llama-3.1-70B-Instruct"  # Reliable fallback
]


def test_api_connection():
    """Test if OpenRouter API is working"""
    if not API_AVAILABLE:
        return False
    
    for model in ROAST_MODELS:
        try:
            response = client.chat.completions.create(
                extra_headers={
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "Resume Analyzer",
                },
                model=model,
                messages=[{"role": "user", "content": "Hello"}],
                max_tokens=5
            )
            print(f"✅ OpenRouter API test successful with {model}")
            return True
        except Exception as e:
            print(f"⚠️ Model {model} failed: {e}")
            continue
    print("❌ All roast models failed")
    return False


def extract_text_and_formatting(file_path: str):
    formatting_info = {
        "font_sizes": [],
        "font_names": [],
        "alignments": [],
        "text": ""
    }
    
    try:
        if file_path.endswith(".pdf"):
            with pdfplumber.open(file_path) as pdf:
                for page in pdf.pages:
                    page_text = page.extract_text()
                    if page_text:
                        formatting_info["text"] += page_text + "\n"
                    for char in page.chars:
                        formatting_info["font_sizes"].append(round(char["size"]))
                        formatting_info["font_names"].append(char["fontname"])
                        if char.get('x0', 0) < 100:
                            formatting_info["alignments"].append(round(char.get('x0', 0)))
                            
        elif file_path.endswith(".docx"):
            doc = docx.Document(file_path)
            full_text = []
            for para in doc.paragraphs:
                full_text.append(para.text)
                if para.paragraph_format.first_line_indent:
                    formatting_info["alignments"].append(para.paragraph_format.first_line_indent.pt)
                for run in para.runs:
                    if run.font.size:
                        formatting_info["font_sizes"].append(run.font.size.pt)
                    if run.font.name:
                        formatting_info["font_names"].append(run.font.name)
            formatting_info["text"] = "\n".join(full_text)
        else:
            formatting_info["text"] = "Unsupported file format"
            
    except Exception as e:
        print(f"Error extracting text: {e}")
        formatting_info["text"] = "Error extracting text from file"
    
    return formatting_info


def analyze_formatting(formatting_info: dict):
    suggestions = []
    
    # Font Size Consistency
    if formatting_info["font_sizes"]:
        size_counts = Counter(formatting_info["font_sizes"])
        common_sizes = size_counts.most_common(3)
        if len(common_sizes) > 2:
            suggestions.append(
                f"Your resume has inconsistent font sizes ({[s for s, _ in common_sizes]}). "
                f"Stick to two sizes: one for headings and one for body text."
            )

    # Font Name Consistency
    if formatting_info["font_names"]:
        name_counts = Counter(formatting_info["font_names"])
        if len(name_counts) > 1:
            clean_font_names = []
            for font_name in name_counts.keys():
                if '+' in font_name:
                    clean_name = font_name.split('+')[1]
                else:
                    clean_name = font_name
                clean_font_names.append(clean_name)
            suggestions.append(
                f"Multiple fonts detected ({clean_font_names}). "
                "For a polished resume, stick with one professional font like Calibri, Arial, or Times New Roman."
            )

    # Alignment Consistency
    if formatting_info["alignments"]:
        alignment_counts = Counter(formatting_info["alignments"])
        if len(alignment_counts) > 5:
            suggestions.append(
                "Alignment looks inconsistent across sections. "
                "Ensure bullets, dates, and text blocks line up neatly."
            )

    return suggestions


def get_ai_analysis(resume_text: str):
    """Get AI-powered resume analysis using OpenRouter"""
    
    if not API_AVAILABLE or not test_api_connection():
        return get_fallback_analysis(resume_text)
    
    clean_text = resume_text[:3000].strip()
    roast, fix = None, None

    # Try roast with preferred models
    for model in ROAST_MODELS:
        try:
            print(f"🤖 Getting AI roast with {model}...")
            roast_response = client.chat.completions.create(
                extra_headers={
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "Resume Analyzer",
                },
                model=model,
                messages=[{
                    "role": "user", 
                    "content": f"""You are a witty but constructive career coach. Review this resume and provide humorous but helpful feedback in 2-3 sentences. Point out the biggest areas for improvement:

Resume Text:
{clean_text}"""
                }],
                max_tokens=250,
                temperature=0.8
            )
            roast = roast_response.choices[0].message.content
            print(f"✅ Roast generated successfully with {model}")
            break
        except Exception as e:
            print(f"⚠️ Roast failed with {model}: {e}")
            continue

    # Improvements (fast/cheap model)
    try:
        print("🔧 Getting AI improvements...")
        fix_response = client.chat.completions.create(
            extra_headers={
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Resume Analyzer",
            },
            model="mistralai/mistral-small",
            messages=[{
                "role": "user", 
                "content": f"""You are a professional resume advisor. Analyze this resume and provide 4-5 specific, actionable improvements. Format your response as a clear, numbered list:

Resume Text:
{clean_text}"""
            }],
            max_tokens=400,
            temperature=0.3
        )
        fix = fix_response.choices[0].message.content
        print("✅ Improvements generated successfully")
        
    except Exception as e:
        print(f"❌ Improvements generation failed: {e}")
        fix = None
    
    # Use fallbacks if needed
    if not roast or not fix:
        fallback_roast, fallback_fix = get_fallback_analysis(resume_text)
        roast = roast or fallback_roast
        fix = fix or fallback_fix
    
    return roast, fix


def get_fallback_analysis(resume_text: str):
    """Smart fallback responses when AI is unavailable"""
    text_lower = resume_text.lower()
    word_count = len(resume_text.split())
    
    roast_issues = []
    if word_count < 200:
        roast_issues.append("a bit too short (like a Twitter bio trying to be a resume)")
    if "responsible for" in text_lower:
        roast_issues.append("relying too much on 'responsible for' instead of strong verbs")
    if not any(verb in text_lower for verb in ["achieved", "increased", "improved", "developed"]):
        roast_issues.append("lacking action verbs that show impact")
    
    if roast_issues:
        roast = f"Your resume is {', '.join(roast_issues)}. Let's give it more punch so it actually flexes your achievements."
    else:
        roast = "Not bad—your resume looks solid, but it could use more measurable results and sharper language to stand out."
    
    fix = """Here are specific improvements to make your resume stronger:

1. **Action Verbs**: Replace weak phrases like "responsible for" with strong ones like "spearheaded," "optimized," or "delivered."
2. **Quantify Impact**: Back up your experience with numbers—% increases, revenue saved, projects completed.
3. **Relevant Keywords**: Tailor your resume to the roles you want by adding industry/job-specific keywords.
4. **Formatting Polish**: Use consistent font, size, and alignment so your resume looks professional and easy to scan.
5. **Highlight Achievements**: Shift from duties to results. Show how you made a difference, not just what you were assigned."""
    
    return roast, fix


def analyze(file_path: str):
    print(f"\n=== ANALYZING RESUME: {file_path} ===")
    
    try:
        formatting_data = extract_text_and_formatting(file_path)
        text = formatting_data["text"]
        
        print(f"📄 Extracted text length: {len(text)} characters")

        if "Unsupported file format" in text or "Error extracting" in text:
            return 0, {"roast": "", "fix": "", "general": [text], "formatting": []}, []

        if not text or len(text.strip()) < 50:
            return 0, {"roast": "", "fix": "", "general": ["Resume appears to be empty or too short"], "formatting": []}, []

        # Get AI analysis
        roast, fix = get_ai_analysis(text)

        # ATS Scoring Logic
        score = 0
        suggestions = []

        # Section Scoring (40 points)
        required_sections = ["Education", "Experience", "Skills", "Projects"]
        found_sections = []
        for sec in required_sections:
            if sec.lower() in text.lower():
                score += 10
                found_sections.append(sec)
        
        if len(found_sections) < len(required_sections):
            missing = [s for s in required_sections if s not in found_sections]
            suggestions.append(f"Missing sections: {', '.join(missing)}. Adding them can significantly improve your ATS score.")

        # Action Verb Scoring (30 points)
        action_verbs = [
            "developed", "led", "managed", "created", "implemented", "achieved", 
            "designed", "engineered", "optimized", "analyzed", "automated", "built",
            "spearheaded", "transformed", "improved", "increased", "decreased", "delivered"
        ]
        verb_count = sum(1 for verb in action_verbs if verb in text.lower())
        verb_score = min(verb_count * 2, 30)
        score += verb_score
        
        if verb_score < 15:
            suggestions.append("Use more powerful action verbs like 'spearheaded', 'optimized', or 'transformed' to describe your accomplishments.")

        # Resume Length Scoring (20 points)
        word_count = len(text.split())
        if 300 <= word_count <= 600:
            score += 20
        elif word_count > 600:
            suggestions.append(f"Your resume is {word_count} words long. Consider condensing to 400-500 words for optimal readability.")
        else:
            suggestions.append(f"Your resume is only {word_count} words long. Add more detail about your experiences and achievements.")
        
        # Contact Information Check (10 points)
        if "email" in text.lower() or "@" in text:
            score += 5
        else:
            suggestions.append("Include your email address in the contact section.")
            
        if "phone" in text.lower() or any(char.isdigit() for char in text):
            score += 5
        else:
            suggestions.append("Include your phone number in the contact section.")

        # Formatting suggestions
        formatting_suggestions = analyze_formatting(formatting_data)

        # Combine all suggestions
        # Organize suggestions clearly
        all_suggestions = {
            "roast": roast,
            "fix": fix,
            "general": [
                "📌 General Suggestions:",
                *suggestions
            ] if suggestions else ["Looks good! No critical ATS issues detected."],
            "formatting": [
                "🎨 Formatting Feedback:",
                *formatting_suggestions
            ] if formatting_suggestions else ["Formatting looks clean and consistent."]
        }
        

        print(f"🎯 Final score: {score}/100")
        print(f"🤖 AI Analysis: {'SUCCESS' if roast else 'USING FALLBACK'}")

        return score, all_suggestions, found_sections
        
    except Exception as e:
        print(f"💥 Error in analyze function: {e}")
        import traceback
        traceback.print_exc()
        
        return 0, {
            "roast": "Your resume is so exceptional it temporarily broke our analyzer! But don't worry - that just means it's unique (hopefully in a good way).",
            "fix": "Since our AI had a moment, here are the essentials: use strong action verbs, add quantifiable achievements, include relevant keywords, and ensure clean formatting.",
            "general": ["Error processing file. Please verify it's a readable PDF or DOCX format."],
            "formatting": []
        }, []
