"use client";

import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const r = (n: number) => Math.round(n * 100) / 100;

function useWaveDots() {
  return useMemo(() => {
    const dots: {
      id: string;
      x: number;
      y: number;
      color: string;
      depth: number;
      opacity: number;
      radius: number;
    }[] = [];

    const colors = ["#1e3a8a", "#7c3aed", "#db2777"];
    const width = 560;
    const baseY = 280;
    const amplitude = 180;
    const bands = 12;
    const dotsPerBand = 24;
    const bandSpacing = 18;

    for (let b = 0; b < bands; b++) {
      const bandOffset = b * bandSpacing;
      for (let i = 0; i < dotsPerBand; i++) {
        const t = i / (dotsPerBand - 1);
        const shaped = Math.sin(Math.PI * Math.pow(t, 0.9));
        const x = t * width;
        const y = baseY - amplitude * shaped - bandOffset;
        const edgeFade = Math.min(t / 0.15, (1 - t) / 0.15, 1);
        const opacity = r(Math.max(0.15, edgeFade));

        dots.push({
          id: `${b}-${i}`,
          x: r(x),
          y: r(y),
          color: colors[(b + i) % colors.length],
          depth: (b % 4) + 1,
          opacity,
          radius: b % 2 === 0 ? 3.5 : 4.5,
        });
      }
    }
    return dots;
  }, []);
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const waveDots = useWaveDots();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  const playClick = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  const playPop = () => {
    const audio = new Audio("/pop.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#a9dcf7] pt-10"
    >
      {/* Wave Dots Container */}
      <div className="absolute inset-0 max-w-[1800px] mx-auto pointer-events-none z-0">
        <svg
          className="absolute right-0 top-24 md:top-28 lg:top-20 xl:top-28 2xl:top-36 opacity-30 xl:opacity-100 w-[70%] md:w-[55%] xl:w-[45%] max-w-[600px] overflow-visible"
          viewBox="0 0 560 350"
          fill="none"
        >
          {waveDots.map((dot) => {
            const dx = r(mouse.x * dot.depth * 5);
            const dy = r(mouse.y * dot.depth * 4);
            return (
              <motion.circle
                key={dot.id}
                animate={{ cx: dot.x + dx, cy: dot.y + dy }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
                r={dot.radius}
                fill={dot.color}
                opacity={dot.opacity}
              />
            );
          })}
        </svg>
      </div>

      {/* SVG Waves Background - Anchored to absolute bottom with max heights to protect text */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none leading-none flex flex-col justify-end">
        <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[150px] md:h-[250px] xl:h-[320px]">
          <path fill="#cdeafb" d="M0,140 C320,280 640,40 1000,120 C1200,160 1350,100 1440,80 L1440,420 L0,420 Z" />
        </svg>
        <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[150px] md:h-[250px] xl:h-[320px]">
          <path fill="#e7f5fd" d="M0,220 C280,140 600,280 960,220 C1160,180 1350,240 1440,200 L1440,420 L0,420 Z" />
        </svg>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="relative w-full h-[140px] md:h-[240px] xl:h-[300px]">
          <path fill="#ffffff" d="M0,300 C300,380 700,240 1050,320 C1250,360 1380,300 1440,280 L1440,400 L0,400 Z" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32 md:pb-40 xl:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 xl:gap-8 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-12 md:col-span-7 z-30 relative"
          >
            <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-6xl font-extrabold text-slate-900 tracking-tight mb-2 md:mb-4 leading-tight">
              Hi there! I'm <br className="hidden xl:block" />
              <span className="text-blue-700">MD Shakib Al Hassan</span>.
            </h1>

            <h2 className="text-sm sm:text-lg md:text-xl xl:text-2xl font-bold text-slate-800 mb-3 md:mb-6">
              Aspiring Prompt Engineer & MERN Developer
            </h2>

            <p className="text-xs sm:text-sm md:text-base xl:text-lg text-slate-700 mb-6 md:mb-10 leading-relaxed max-w-sm md:max-w-md">
              Building full-stack applications with intelligent AI features &mdash; specializing in Prompt Engineering and the MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 relative z-50">
              <Link
                href="/#projects"
                onClick={playClick}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 md:py-3 rounded-xl bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/30"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                onClick={playPop}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 md:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail className="mr-2 w-4 h-4 text-slate-500" />
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Mobile Avatar Image (Only visible on small screens) */}
          <div className="col-span-12 flex justify-center md:hidden mt-4 z-30">
            <img
              src="/sh_img5.png"
              alt="MD Shakib Al Hassan"
              className="w-28 sm:w-32 h-28 sm:h-32 object-cover object-top rounded-full border-4 border-white shadow-lg"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      {/* Tablet & Desktop Image - Absolute to the max-w container so it stays aligned right and pinned to bottom */}
      <div className="absolute inset-0 max-w-[1800px] mx-auto pointer-events-none z-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex absolute right-4 lg:right-10 bottom-0 items-end justify-center w-[45%] max-w-[600px] h-full"
        >
          <img
            src="/shakib_img1.png"
            alt="MD Shakib Al Hassan"
            className="w-56 lg:w-[22rem] xl:w-[28rem] object-contain drop-shadow-2xl pointer-events-auto"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}