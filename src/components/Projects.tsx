"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  // --- SOUND FUNCTION ---
  const playClick = () => {
    const audio = new Audio('/click.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-neutral-900 rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-900/50"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm font-medium bg-white dark:bg-neutral-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-neutral-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-neutral-800">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Code
                </a>
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}