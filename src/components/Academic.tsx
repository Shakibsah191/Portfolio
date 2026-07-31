"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Database, BrainCircuit, MonitorSmartphone } from "lucide-react";

export default function Academic() {
  const interests = [
    {
      title: "Retrieval-Augmented Generation",
      description: "Enhancing large language models by integrating dynamic, external knowledge bases to improve factual accuracy and contextual relevance.",
      icon: <Database className="w-7 h-7" />,
      colorClass: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/50"
    },
    {
      title: "Agentic AI Workflows",
      description: "Designing autonomous AI agents capable of reasoning, breaking down complex tasks, and executing multi-step pipelines efficiently.",
      icon: <BrainCircuit className="w-7 h-7" />,
      colorClass: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/50"
    },
    {
      title: "Human-Computer Interaction",
      description: "Exploring intuitive interfaces and adaptive user experiences to bridge the gap between complex intelligent systems and everyday end-users.",
      icon: <MonitorSmartphone className="w-7 h-7" />,
      colorClass: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/50"
    }
  ];

  return (
    <>
      {/* ================= EDUCATION SECTION ================= */}
      {/* Background matches the Projects component: white / dark:#0a0a0a */}
      <section id="education" className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-neutral-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full mt-6"></div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative bg-slate-50 dark:bg-neutral-900 rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-900/50"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Bachelor of Science in Software Engineering
                  </h3>
                </div>
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 ml-11">
                  Daffodil International University – DIU
                </p>
              </div>
              
              <div className="flex flex-col gap-2 md:items-end ml-11 md:ml-0 mt-2 md:mt-0">
                <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl border border-slate-200 dark:border-neutral-700 w-fit">
                  <Calendar className="w-4 h-4" />
                  2023 – 2026 (Expected)
                </span>
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium px-2">
                  <MapPin className="w-4 h-4" />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-neutral-800 ml-0 md:ml-11">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Relevant coursework:</span> Artificial Intelligence, Web Development, Data Structures, Object-Oriented Programming, and Database Management Systems.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= RESEARCH INTERESTS SECTION ================= */}
      {/* Background matches the Skills component: slate-50 / dark:neutral-950 */}
      <section id="research" className="py-24 bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Research Interests
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full mt-6"></div>
          </motion.div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-neutral-800 transition-colors hover:border-blue-200 dark:hover:border-blue-900/50 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${interest.colorClass}`}>
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {interest.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}