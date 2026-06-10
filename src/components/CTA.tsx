import React, { MouseEvent } from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";

export default function CTA() {
  const handleScrollClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Aurora Light Gradients Behind Glass */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-blue/15 to-brand-purple/20 rounded-full blur-[130px] pointer-events-none animate-pulse-soft" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Majestic Glass Banner container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl glass-card border border-white/90 p-8 md:p-16 rounded-3xl shadow-xl bg-white dark:bg-slate-900/70 text-center relative overflow-hidden flex flex-col items-center"
      >
        {/* Subtle corner light gradients decoration */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl pointer-events-none" />

        {/* Floating star icons */}
        <div className="absolute top-6 left-12 hidden md:block animate-float-slow">
          <Sparkles className="w-5 h-5 text-brand-purple opacity-40" />
        </div>
        <div className="absolute bottom-6 right-12 hidden md:block animate-float-delay">
          <Sparkles className="w-6 h-6 text-cyan-400 opacity-40" />
        </div>

        {/* Accent Label */}
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-white dark:bg-slate-900 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
          <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
            AETHRIXA DIGITAL TRANSFORMATION
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-4xl md:text-5xl xl:text-6xl text-slate-800 dark:text-slate-100 tracking-tight mb-4 max-w-3xl leading-[1.1]">
          Ready To Build{" "}
          <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
            The Future Version
          </span>{" "}
          Of Your Business?
        </h2>

        {/* Subtext */}
        <p className="font-sans text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium">
          Let's formulate an elite high-speed digital roadmap together. Book your customized 1-on-1 strategy call with our core engineers.
        </p>

        {/* Contact Action Trigger */}
        <button
          onClick={handleScrollClick}
          className="flex items-center gap-2 px-8 py-4.5 rounded-xl bg-slate-900 border border-slate-900 text-white font-bold text-sm shadow-xl shadow-slate-950/15 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-purple hover:shadow-indigo-200/40 hover:scale-102 transition-all cursor-pointer group"
        >
          <Calendar className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Book Free Consultation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* System confirmations */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 border-t border-slate-200 dark:border-slate-700/40 pt-8 text-[11px] font-bold text-slate-400">
          <div className="flex items-center gap-1.5 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>NO OBLIGATION STRATEGY PLANNING</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <HeartPulse className="w-4 h-4 text-brand-purple" />
            <span>30-MINUTE HIGH SPEED BLUEPRINT</span>
          </div>
        </div>

      </motion.div>
    </motion.section>
  );
}
