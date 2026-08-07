"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
    // --- SOUND FUNCTIONS ---
    const playClick = () => {
        const audio = new Audio('/click.mp3');
        audio.volume = 0.4;
        audio.play().catch(() => {});
    };

    const playPop = () => {
        const audio = new Audio('/pop.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {});
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-neutral-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
                        Contact
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                        Let's build something
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Open to full-time, freelance, and collaboration. Reach out — I typically respond within a day.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-slate-50 dark:bg-neutral-900 rounded-[2rem] p-6 md:p-10 border border-slate-200 dark:border-neutral-800 shadow-sm"
                >
                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">

                        {/* Email */}
                        <a href="mailto:shakibsah191@gmail.com" onClick={playClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-neutral-800 transition-all hover:border-blue-300 dark:hover:border-blue-800/50 hover:shadow-md">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6"/>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email</p>
                                <p className="text-base font-bold text-slate-900 dark:text-white truncate">shakibsah191@gmail.com</p>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/Shakibsah191" target="_blank" rel="noopener noreferrer" onClick={playClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-neutral-800 transition-all hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">GitHub</p>
                                <p className="text-base font-bold text-slate-900 dark:text-white truncate">@Shakibsah191</p>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/shakibsah191/" target="_blank" rel="noopener noreferrer" onClick={playClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-neutral-800 transition-all hover:border-blue-400 dark:hover:border-blue-700 hover:shadow-md">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">LinkedIn</p>
                                <p className="text-base font-bold text-slate-900 dark:text-white truncate" title="@md-shakib-al-hassan-7ba5ba391">
                                    @md-shakib-al-hassan...
                                </p>
                            </div>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/shakib.hassan.35175" target="_blank" rel="noopener noreferrer" onClick={playClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-neutral-800 transition-all hover:border-[#1877F2] dark:hover:border-[#1877F2]/70 hover:shadow-md">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2] group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Facebook</p>
                                <p className="text-base font-bold text-slate-900 dark:text-white truncate">
                                    @shakib
                                </p>
                            </div>
                        </a>

                    </div> {/* <-- This closing div for the grid was missing! */}

                    {/* Bottom Action Area */}
                    <div className="pt-8 border-t border-slate-200 dark:border-neutral-800 flex justify-start">
                        <a
                            href="mailto:shakibsah191@gmail.com"
                            onClick={playClick}
                            className="inline-flex items-center gap-2 bg-[#00997b] hover:bg-[#007a62] text-white px-6 py-3 rounded-xl font-bold transition-colors"
                        >
                            <Send className="w-4 h-4"/>
                            Send an email
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}