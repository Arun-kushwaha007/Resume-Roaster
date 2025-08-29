import random

def analyze(file_path: str):
    # TODO: replace with real PDF/DOC parsing
    score = random.randint(50, 90)
    suggestions = [
        "Add more keywords from job descriptions.",
        "Use simpler formatting.",
        "Highlight measurable achievements."
    ]
    sections = ["Education", "Experience", "Skills"]
    return score, suggestions, sections
