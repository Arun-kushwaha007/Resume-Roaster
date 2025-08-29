import io
import pdfplumber
from docx import Document




def parse_pdf(bytes_data):
    text = ''
    layout = {'pages': []}
    with pdfplumber.open(io.BytesIO(bytes_data)) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text() or ''
            text += page_text + '\n'
            # minimal layout: store top-left words bbox
            words = page.extract_words()
            layout['pages'].append({'words': words})
    return text, layout




def parse_docx(bytes_data):
    text = ''
    layout = {'paragraphs': []}
    doc = Document(io.BytesIO(bytes_data))
    for para in doc.paragraphs:
        layout['paragraphs'].append({'text': para.text})
        text += para.text + '\n'
    return text, layout