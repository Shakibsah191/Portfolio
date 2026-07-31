"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Volume2, VolumeX, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme(); 

  useEffect(() => setMounted(true), []);

  // --- SOUND FUNCTIONS ---
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

  const links: { name: string; href: string; external?: boolean }[] = [
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Get in Touch", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-slate-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              onClick={playClick} 
              className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              Shakib<span className="text-blue-500">.</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={playClick}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-neutral-700 pl-4 ml-4">
              <button 
                onClick={handleToggleMute} 
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors" 
                aria-label="Toggle sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <button 
                onClick={handleToggleTheme} 
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors" 
                aria-label="Toggle theme"
              >
                {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
              </button>
            </div>
          </nav>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => { setIsOpen(!isOpen); playPop(); }} 
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-neutral-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-slate-200 dark:border-neutral-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => { setIsOpen(false); playClick(); }}
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-neutral-800 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}