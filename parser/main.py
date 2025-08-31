# main.py
import os
import tempfile
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import parse_utils

# Load environment variables from .env file
load_dotenv()

# Verify API key is loaded
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
if OPENROUTER_API_KEY:
    print("✅ OpenRouter API key loaded successfully")
else:
    print("⚠️  Warning: OPENROUTER_API_KEY not found - AI analysis will use fallbacks")

app = FastAPI(
    title="Resume Roaster API",
    description="AI-powered resume analysis and feedback system",
    version="1.0.0"
)

# Add CORS middleware to allow frontend connections
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "Resume Roaster API is running!",
        "api_status": "✅ API Key Configured" if OPENROUTER_API_KEY else "⚠️ Using Fallbacks",
        "endpoints": {
            "parse": "/parse - Upload and analyze resume",
            "health": "/ - Health check"
        }
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "api_configured": bool(OPENROUTER_API_KEY),
        "version": "1.0.0"
    }

@app.post("/parse")
async def parse_resume(file: UploadFile = File(...)):
    """
    Upload and analyze a resume file
    
    - **file**: PDF or DOCX resume file
    
    Returns ATS score, AI feedback, and suggestions
    """
    # Validate file type
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")
    
    allowed_extensions = {'.pdf', '.docx'}
    file_extension = os.path.splitext(file.filename.lower())[1]
    
    if file_extension not in allowed_extensions:
        raise HTTPException(
            status_code=400, 
            detail=f"Unsupported file type: {file_extension}. Please upload a PDF or DOCX file."
        )
    
    # Validate file size (max 10MB)
    file_content = await file.read()
    if len(file_content) > 10 * 1024 * 1024:  # 10MB
        raise HTTPException(status_code=413, detail="File too large. Maximum size is 10MB.")
    
    # Reset file pointer
    await file.seek(0)
    
    temp_file_path = None
    try:
        # Create temporary file with proper extension
        with tempfile.NamedTemporaryFile(delete=False, suffix=file_extension) as tmp:
            tmp.write(file_content)
            temp_file_path = tmp.name
        
        print(f"📄 Processing file: {file.filename}")
        print(f"💾 Temporary file: {temp_file_path}")
        
        # Analyze the resume
        score, suggestions, sections = parse_utils.analyze(temp_file_path)
        
        return {
            "success": True,
            "filename": file.filename,
            "score": score,
            "suggestions": suggestions,
            "sections": sections,
            "message": "Resume analyzed successfully!"
        }
        
    except Exception as e:
        print(f"💥 Error processing file: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing resume: {str(e)}")
        
    finally:
        # Clean up temporary file
        if temp_file_path and os.path.exists(temp_file_path):
            try:
                os.unlink(temp_file_path)
                print(f"🗑️  Cleaned up temporary file: {temp_file_path}")
            except Exception as e:
                print(f"⚠️  Warning: Could not delete temp file {temp_file_path}: {e}")

# Add error handlers
@app.exception_handler(413)
async def file_too_large_handler(request, exc):
    return {
        "success": False,
        "error": "File too large",
        "message": "Please upload a file smaller than 10MB"
    }

@app.exception_handler(400)
async def bad_request_handler(request, exc):
    return {
        "success": False,
        "error": "Bad request",
        "message": str(exc.detail)
    }

@app.exception_handler(500)
async def internal_error_handler(request, exc):
    return {
        "success": False,
        "error": "Internal server error",
        "message": "Something went wrong processing your resume"
    }

if __name__ == "__main__":
    import uvicorn
    print("🚀 Starting Resume Roaster API...")
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)