import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, CheckCircle2, ShieldCheck, Sparkles, Network } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [checkmarkIndex, setCheckmarkIndex] = useState(-1);

  const checkmarks = [
    "AI Automation",
    "Web Development",
    "Mobile Apps",
    "Digital Growth"
  ];

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Phases for text sequences
    if (progress === 0) setPhase(0); // Welcome
    else if (progress === 25) setPhase(1); // We build intelligent digital experiences
    else if (progress === 50) {
      setPhase(2); // Initializing checklists...
      setCheckmarkIndex(0);
    } else if (progress === 65) {
      setCheckmarkIndex(1);
    } else if (progress === 80) {
      setCheckmarkIndex(2);
    } else if (progress === 92) {
      setCheckmarkIndex(3);
    } else if (progress === 100) {
      // Small delay at 100% before starting fadeout
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
    >
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center">
        {/* Animated Digital Network Molecule */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          {/* Outer Rotating Halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-sky-300/60"
          />

          {/* Golden/Purple Glowing Orbit Node Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-24 h-24 rounded-full border border-violet-300/40"
          />

          {/* Central Animated Core */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center shadow-lg shadow-indigo-200"
          >
            <Network className="w-8 h-8 text-white animate-pulse" />
          </motion.div>

          {/* Small floating digital orbits around core */}
          {[0, 1, 2, 3].map((val, idx) => {
            const angle = (idx * 90 * Math.PI) / 180;
            const x = Math.cos(angle) * 44;
            const y = Math.sin(angle) * 44;
            return (
              <motion.div
                key={idx}
                animate={{
                  x: [x, x + Math.cos(angle + 0.5) * 6, x],
                  y: [y, y + Math.sin(angle + 0.5) * 6, y],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + idx,
                  ease: "easeInOut",
                }}
                className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400 border border-white shadow-sm flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-900" />
              </motion.div>
            );
          })}
        </div>


        {/* Cinematic Subtitles Transition */}
        <div className="h-16 flex items-center justify-center mt-4 mb-8 text-center">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.p
                key="p0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="font-sans font-medium text-slate-700 dark:text-slate-200 text-lg flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-indigo-500 animate-spin" />
                Welcome to Aethrixa Technologies
              </motion.p>
            )}

            {phase === 1 && (
              <motion.p
                key="p1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-sans text-brand-indigo font-bold text-lg"
              >
                We Build Intelligent Digital Experiences
              </motion.p>
            )}

            {phase >= 2 && (
              <motion.div
                key="p2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap justify-center gap-3 text-xs md:text-sm"
              >
                {checkmarks.map((item, idx) => {
                  const isActive = checkmarkIndex >= idx;
                  return (
                    <motion.div
                      key={item}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        isActive
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.9, opacity: 0.4 }
                      }
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "bg-white dark:bg-slate-900 border-indigo-200 text-slate-800 dark:text-slate-100 font-medium shadow-sm"
                          : "border-slate-200 dark:border-slate-700 text-slate-400"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 transition-colors ${
                          isActive ? "text-cyan-500" : "text-slate-300"
                        }`}
                      />
                      <span>{item}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Glassmorphic Progress Container */}
        <div className="w-full bg-slate-200 dark:bg-slate-700/50 rounded-full h-2.5 p-0.5 overflow-hidden border border-white/80 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Pulsing Light Glow at progress head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 shadow-md border border-cyan-400 animate-ping" />
          </motion.div>
        </div>

        {/* Digital Percentage Label */}
        <motion.div className="mt-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-brand-blue animate-spin" />
          <span>INITIALIZING COGNITIVE STREAM: {progress}%</span>
        </motion.div>
      </div>

      {/* Tech Spec Bottom Labels */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
          <span>AETHRIXA OS v4.11_SECURE</span>
        </div>
        <span>UTC: {new Date().toISOString().substring(0, 10)}</span>
      </div>
    </motion.div>
  );
}
