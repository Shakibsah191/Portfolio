"use client";

import { motion } from "framer-motion";
import { MapPin, Gamepad2, Brain, Plane, Keyboard, Film } from "lucide-react";
import Footer from "@/components/Footer"

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      {/* ================= HERO SECTION (Dark) ================= */}
      <section className="relative bg-[#1e293b] text-slate-100 pt-32 pb-40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
                Hi there! I'm Shakib.
              </h1>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
                <p>
                  My coding journey has been a long, rewarding process of learning step-by-step. I built my foundation by diving deep into documentation and working through tutorials, and I am still continuously learning every single day.
                </p>
                <p>
                  To me, solving problems and coding doesn't just mean fighting with a compiler. You have to truly <em>think</em> to solve real-life problems. Thinking is the real power behind any great software.
                </p>
                <p>
                  These days, I am highly focused on exploring AI, creating intelligent workflows, and building new things from the ground up.
                </p>
              </div>
            </motion.div>

            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              {/* Replace '/shakib_about.png' with your actual image path */}
              <img 
                src="/sh_img3.jpeg" 
                alt="Shakib" 
                className="w-full max-w-md object-contain drop-shadow-2xl rounded-2xl"
                onError={(e) => {
                  // Fallback gray box if image isn't added yet
                  e.currentTarget.src = "https://via.placeholder.com/500x600/334155/cbd5e1?text=Your+Photo+Here";
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-[100px] md:h-[150px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-white dark:fill-[#0a0a0a]"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-51.24V0Z" 
              opacity=".5" 
              className="fill-white dark:fill-[#0a0a0a]"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-white dark:fill-[#0a0a0a]"
            ></path>
          </svg>
        </div>
      </section>

      {/* ================= BENTO BOX GRID (Light) ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#e6f4fe] dark:bg-sky-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-900/50 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Proudly from Rajshahi
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                I am originally from the Rajshahi district of Bangladesh. It's a beautiful area that is famously known nationwide for producing the absolute best mangoes and high-quality silk!
              </p>
            </motion.div>

            {/* AI Interest Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#f3e8ff] dark:bg-purple-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-900/50 shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800/50 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                AI Explorer
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                I spend a lot of my free time tinkering with AI generators, crafting precise prompts, and trying to push the boundaries of what these models can create.
              </p>
            </motion.div>

            {/* Hobbies / Leisure Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#ffeded] dark:bg-rose-900/20 rounded-3xl p-8 border border-rose-100 dark:border-rose-900/50 shadow-sm"
            >
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-100 dark:bg-rose-800/50 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400">
                  <Plane className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-rose-100 dark:bg-rose-800/50 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400">
                  <Film className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Unplugged
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                When I step away from the keyboard, I love to travel and explore new places. I'm also a big fan of reading books and catching up on good movies.
              </p>
            </motion.div>

            {/* Sports & Gaming Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-[#e6fbf4] dark:bg-emerald-900/20 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-900/50 shadow-sm flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Football & eFootball
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  I closely follow professional football match results (always supporting FC Barça!). When I want to play myself, I grind mechanical gameplay and strategic player builds in eFootball. 
                </p>
              </div>
            </motion.div>

            {/* Typing Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#fff9e6] dark:bg-amber-900/20 rounded-3xl p-8 border border-amber-100 dark:border-amber-900/50 shadow-sm"
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-800/50 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                <Keyboard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Keyboard Warrior
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                I actively track my touch-typing performance. I maintain around 95% accuracy and can comfortably hit peak speeds of nearly 50 WPM!
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}