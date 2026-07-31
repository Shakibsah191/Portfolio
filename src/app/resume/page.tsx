"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumePage() {
  const [isMuted, setIsMuted] = useState(true);

  // --- SOUND FUNCTIONS ---
  const playClick = () => {
    if (!isMuted) {
      const audio = new Audio('/click.mp3');
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
  };

  const playHover = () => {
    if (!isMuted) {
      const audio = new Audio('/hover.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      
      {/* --- TOP ACTION BAR --- */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-6">
        <Link 
          href="/" 
          onClick={playClick}
          onMouseEnter={playHover}
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Portfolio
        </Link>

        {/* Download Button */}
        <a 
          href="/resume.pdf" 
          download="MD_Shakib_Al_Hassan_Resume.pdf"
          onClick={playClick}
          onMouseEnter={playHover}
          className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" /> Download PDF
        </a>
      </div>

      {/* --- PDF VIEWER --- */}
      <div className="max-w-5xl mx-auto h-[80vh] bg-slate-200 dark:bg-neutral-800 rounded-lg shadow-2xl overflow-hidden border border-slate-300 dark:border-neutral-700 flex items-center justify-center">
        
        {/* This iframe automatically loads and displays your PDF from the public folder */}
        <iframe 
          src="/resume.pdf" 
          className="w-full h-full border-0"
          title="MD Shakib Al Hassan Resume"
        >
          {/* Fallback text if their browser doesn't support PDF viewing */}
          <p className="text-center p-10 text-slate-700 dark:text-slate-300">
            Your browser does not support PDFs. 
            <a href="/resume.pdf" download className="text-blue-500 hover:underline ml-1">Download the PDF</a> to view it.
          </p>
        </iframe>
        
      </div>
    </div>
  );
}