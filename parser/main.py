from fastapi import FastAPI, UploadFile, File
import parse_utils
import tempfile

app = FastAPI()

@app.post("/parse")
async def parse_resume(file: UploadFile = File(...)):
    # Use a temporary file to save the uploaded content
    with tempfile.NamedTemporaryFile(delete=False, suffix=file.filename) as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name
    
    score, suggestions, sections = parse_utils.analyze(tmp_path)
    return {"score": score, "suggestions": suggestions, "sections": sections}
