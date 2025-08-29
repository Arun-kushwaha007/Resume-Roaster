from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import uvicorn
from parse_utils import parse_pdf, parse_docx


app = FastAPI()


@app.post('/parse')
async def parse(file: UploadFile = File(...)):
	contents = await file.read()
	filename = file.filename.lower()
	if filename.endswith('.pdf'):
		text, layout = parse_pdf(contents)
	elif filename.endswith('.docx'):
		text, layout = parse_docx(contents)
	else:
		return JSONResponse(status_code=400, content={"error": "Unsupported file"})
	return {"parsed_text": text, "layout": layout}


if __name__ == '__main__':
	uvicorn.run(app, host='0.0.0.0', port=8000, reload=True)