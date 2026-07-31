"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Mail, Volume2, VolumeX, Sun, Moon, Rss, X } from "lucide-react"; 

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const { theme, setTheme } = useTheme();

  const [modalContent, setModalContent] = useState<{title: string, text: string} | null>(null);

  useEffect(() => setMounted(true), []);

  const playClick = () => {
    if (!isMuted) {
      const audio = new Audio('/click.mp3');
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
  };

  const playPop = () => {
    if (!isMuted) {
      const audio = new Audio('/pop.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      const audio = new Audio('/pop.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
  };

  const handleToggleTheme = () => {
    playPop();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const openModal = (title: string, text: string) => {
    playPop();
    setModalContent({ title, text });
  };

  const closeModal = () => {
    playClick(); 
    setModalContent(null);
  };

  return (
    <>
      <footer className="relative bg-[#a9dcf7] dark:bg-neutral-900 transition-colors duration-300 text-slate-800 dark:text-slate-200 pt-32 pb-12 overflow-visible z-10 mt-16 mt-24 md:mt-16">
        
        {/* Top Wavy Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -mt-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-slate-50 dark:fill-neutral-950 transition-colors duration-300"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-51.24V0Z" opacity=".5" className="fill-slate-50 dark:fill-neutral-950 transition-colors duration-300"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-slate-50 dark:fill-neutral-950 transition-colors duration-300"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 relative">
              
              {/* THE FIX: Removed 'hidden', adjusted sizing and top margin for mobile */}
              <div className="absolute -top-24 md:-top-36 left-4 md:left-8 z-20">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#a9dcf7] dark:border-neutral-900 bg-white shadow-xl transition-colors duration-300">
                  <img 
                    src="/shakib_avater.png" 
                    alt="MD Shakib Al Hassan" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-1">
                  Shakib <span className="text-blue-600 text-4xl">.</span>
                </h2>
                <p className="mt-2 text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-300">
                  <span>🇧🇩</span> Code, AI, and continuous learning.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium mb-3 text-slate-800 dark:text-slate-300">
                  Want to know when I launch new projects? <br className="hidden md:block" />
                  Enter your email to join my newsletter:
                </p>
                <form className="flex max-w-sm bg-white dark:bg-neutral-800 rounded-md p-1 border border-slate-200 dark:border-neutral-700 focus-within:ring-2 focus-within:ring-blue-600 shadow-sm transition-all duration-300">
                  <input 
                    type="email" 
                    placeholder="peter@aol.com" 
                    className="w-full px-3 py-2 outline-none text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-transparent text-sm font-medium"
                    required
                  />
                  <button 
                    type="submit" 
                    onClick={playClick}
                    className="bg-black hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 text-white px-4 py-2 rounded flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="mt-12 text-xs text-slate-700 dark:text-slate-400 font-medium space-y-1">
                <p>© {new Date().getFullYear()}-present MD Shakib Al Hassan. All Rights Reserved.</p>
                <div className="flex gap-4 pt-1">
                  <button onClick={() => openModal('Terms of Use', 'Welcome to my portfolio! This is a personal website designed to showcase my engineering projects and skills. Feel free to explore, but please do not copy the exact source code of this portfolio without permission.')} className="hover:text-black dark:hover:text-white underline decoration-slate-400 dark:decoration-slate-600 underline-offset-2">Terms of Use</button>
                  <button onClick={() => openModal('Privacy Policy', 'Your privacy is important. This site does not aggressively track you. If you provide your email for the newsletter, it will solely be used for project updates and never sold to third parties.')} className="hover:text-black dark:hover:text-white underline decoration-slate-400 dark:decoration-slate-600 underline-offset-2">Privacy Policy</button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">Browse By Category</h3>
                  <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <li><Link href="#skills" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">Frontend</Link></li>
                    <li><Link href="#skills" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">Backend (MERN)</Link></li>
                    <li><Link href="#education" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">Education</Link></li>
                    <li><Link href="#research" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">AI & Prompting</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">Featured Projects</h3>
                  <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <li>
                      <button 
                        onClick={() => openModal('TruthGuard System', 'TruthGuard is a multimodal fake news detection system powered by an advanced AI RAG model. It cross-checks data and scrapes sources to verify authenticity effectively.')} 
                        className="text-left hover:text-black dark:hover:text-white transition-colors"
                      >
                        TruthGuard System
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => openModal('AI Content Generator', 'A custom tool designed utilizing advanced AI generation models. It allows users to write and refine highly structured prompts for generating images, video, and music.')} 
                        className="text-left hover:text-black dark:hover:text-white transition-colors"
                      >
                        AI Content Generator
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => openModal('Full-Stack Application', 'A robust full-stack platform built utilizing Node.js, Express, Next.js, Tailwind CSS, and MongoDB for scalable database management.')} 
                        className="text-left hover:text-black dark:hover:text-white transition-colors"
                      >
                        Full-Stack Application
                      </button>
                    </li>
                    <li>
                      <Link href="/#projects" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">
                        View All Projects
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">General</h3>
                  <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <li><Link href="/about" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">About Me</Link></li>
                    <li><Link href="/#contact" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/resume" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">Resume / CV</Link></li>
                    <li><Link href="https://github.com/Shakibsah191?tab=repositories" target="_blank" onClick={playClick} className="hover:text-black dark:hover:text-white transition-colors">GitHub Repository</Link></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-12 text-slate-600 dark:text-slate-400">
                <button onClick={handleToggleMute} aria-label="Sound Toggle" className="hover:text-black dark:hover:text-white transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                
                <button onClick={handleToggleTheme} aria-label="Theme Toggle" className="hover:text-black dark:hover:text-white transition-colors">
                  {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
                </button>

                <Link href="#" onClick={playClick} aria-label="RSS Feed" className="hover:text-black dark:hover:text-white transition-colors"><Rss className="w-5 h-5" /></Link>
                
                <span className="w-px h-5 bg-slate-400 dark:bg-slate-600 mx-1"></span>
                
                <Link href="https://github.com/Shakibsah191" target="_blank" onClick={playClick} aria-label="GitHub" className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </Link>

                <Link href="https://www.linkedin.com/in/md-shakib-al-hassan-7ba5ba391" target="_blank" onClick={playClick} aria-label="LinkedIn" className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
                
                <Link href="mailto:shakibsah191@gmail.com" onClick={playClick} aria-label="Email" className="hover:text-black dark:hover:text-white transition-colors"><Mail className="w-5 h-5" /></Link>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {modalContent && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all duration-300"
          onClick={closeModal} 
        >
          <div 
            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200 dark:border-neutral-700 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 pr-8">
              {modalContent.title}
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
              {modalContent.text}
            </p>
          </div>
        </div>
      )}
    </>
  );
}