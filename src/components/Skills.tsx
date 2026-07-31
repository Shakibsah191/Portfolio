"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  // We can treat different skill categories with varying grid spans for a bento box look
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full mt-6"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main/Large Card: AI & Prompt Engineering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-colors hover:border-blue-200 dark:hover:border-blue-900/50"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span>
              {skills.ai.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.ai.items.map((item) => (
                <span key={item} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold rounded-xl border border-blue-100 dark:border-blue-800/50">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Medium Card: Frontend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-colors hover:border-indigo-200 dark:hover:border-indigo-900/50"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              {skills.frontend.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.items.map((item) => (
                <span key={item} className="px-3 py-1.5 bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-neutral-800">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Medium Card: Backend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-colors hover:border-emerald-200 dark:hover:border-emerald-900/50"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              {skills.backend.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.items.map((item) => (
                <span key={item} className="px-3 py-1.5 bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-neutral-800">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Medium Card: Others */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-colors hover:border-purple-200 dark:hover:border-purple-900/50 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">🔧</span>
              {skills.others.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.others.items.map((item) => (
                <span key={item} className="px-4 py-2 bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 font-medium rounded-xl border border-slate-200 dark:border-neutral-700">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
