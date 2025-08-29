from fastapi import FastAPI
from pydantic import BaseModel
import parse_utils

app = FastAPI()

class ResumeRequest(BaseModel):
    file_path: str

@app.post("/parse")
def parse_resume(req: ResumeRequest):
    score, suggestions, sections = parse_utils.analyze(req.file_path)
    return {"score": score, "suggestions": suggestions, "sections": sections}
