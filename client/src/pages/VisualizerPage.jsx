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
    <div className="min-h-screen py-10 px-2 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Resume Preview */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-6 flex flex-col items-center">
          <h2 className="mb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 text-center">
            Your Resume
          </h2>
          {file ? (
            <div className="w-full flex flex-col items-center">
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    className="my-4 shadow-lg rounded-lg overflow-hidden"
                    renderTextLayer={false}
                  />
                ))}
              </Document>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {numPages ? `Pages: ${numPages}` : "Loading..."}
              </p>
            </div>
          ) : (
            <div className="text-gray-400 italic text-center py-12">
              No resume file provided.
            </div>
          )}
        </div>
        {/* Analysis Results */}
        <div className="flex flex-col gap-8">
          <h2 className="mb-2 text-3xl font-extrabold text-blue-700 dark:text-cyan-400 text-center">
            Analysis Results
          </h2>
          {analysisResult ? (
            <div className="space-y-8">
              <ATSScore score={analysisResult.score} />
              <Sections sections={analysisResult.sections} />
              <Suggestions suggestions={analysisResult.suggestions} />
            </div>
          ) : (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-xl p-6 text-yellow-800 dark:text-yellow-200 shadow text-center">
              No analysis results available. Please upload and analyze your resume first.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisualizerPage;