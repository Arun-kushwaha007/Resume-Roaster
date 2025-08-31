import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// ✅ Use Vite-compatible worker import
import workerUrl from 'pdfjs-dist/build/pdf.worker?url';
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

import ATSScore from '../components/ATSScore';
import Suggestions from '../components/Suggestions';
import Sections from '../components/Sections';

function VisualizerPage() {
  const location = useLocation();
  const { file, analysisResult } = location.state || {};
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Your Resume</h2>
          {file && (
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Analysis Results</h2>
          {analysisResult && (
            <div className="grid gap-8">
              <ATSScore score={analysisResult.score} />
              <Sections sections={analysisResult.sections} />
              <Suggestions suggestions={analysisResult.suggestions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisualizerPage;
