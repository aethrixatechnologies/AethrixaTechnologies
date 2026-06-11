import React, { useState, ComponentType, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Search,
  BookOpen,
  LayoutTemplate,
  Terminal,
  Activity,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface ProcessStep {
  idx: number;
  label: string;
  icon: ComponentType<any>;
  summary: string;
  details: string;
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = stepRefs.current[activeStep];
    const container = scrollContainerRef.current;
    
    if (el && container && typeof window !== "undefined" && window.innerWidth < 1024) {
      const scrollLeft = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeStep]);

  const steps: ProcessStep[] = [
    {
      idx: 1,
      label: "Discovery",
      icon: Search,
      summary: "Assess & Map Operations",
      details: "We perform a thorough digital audit, structure your data assets, identify workflow bottlenecks, and map out exactly where custom AI integration or code updates will trigger maximum operational ROI."
    },
    {
      idx: 2,
      label: "Planning",
      icon: BookOpen,
      summary: "Formulate High-Performance Plans",
      details: "We select your custom technology framework (e.g. React, Cloud SQL, Firebase) and build a highly structured, step-by-step launch roadmap aligned with real business metrics."
    },
    {
      idx: 3,
      label: "Design",
      icon: LayoutTemplate,
      summary: "Aesthetic Glassmorphic Visuals",
      details: "Our UI/UX team drafts bespoke, high-fidelity prototypes based on modern SaaS principles, prioritizing visual spacing, responsive fluidity, and rich micro-interactions."
    },
    {
      idx: 4,
      label: "Development",
      icon: Terminal,
      summary: "Pragmatic High-Speed Engineering",
      details: "Our elite engineers compile modular, optimized code using TypeScript and stable backend structures. Core integrations are built synchronously under local server monitors."
    },
    {
      idx: 5,
      label: "Testing",
      icon: Activity,
      summary: "Rigorous Stress & Security Audits",
      details: "Every pipeline undergoes strict validation, security testing, page-load optimization checks, and multi-device viewport tests to assure 100% stable deployment."
    },
    {
      idx: 6,
      label: "Launch",
      icon: Rocket,
      summary: "Zero-Downtime Deployment",
      details: "Your new system is live-streamed directly to secure, autoscaling servers. We coordinate zero-downtime hot reloads and optimize search metadata configuration."
    },
    {
      idx: 7,
      label: "Growth",
      icon: TrendingUp,
      summary: "AI fine-tuning & Continuous Scale",
      details: "We implement analytics tools, run targeted Google/Meta ad tracking, optimize keywords, and continuously tune cognitive AI models to guarantee business expansion."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      id="process" 
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
    >
      {/* Decorative gradient light lines removed */}

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
        {/* Accent Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-slate-900 mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-blue animate-spin" />
          <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-400">
            ENGINEERING WORKFLOW SYSTEM
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-display font-black text-3xl md:text-5xl text-slate-100 tracking-tight mb-4 text-center max-w-2xl"
        >
          We Guide You From Raw Concept to Market Expansion.
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-slate-300 text-base md:text-lg max-w-xl mb-16 text-center"
        >
          Our meticulous seven-phase blueprint ensures absolute development precision, zero-friction launches, and rapid growth.
        </motion.p>

        {/* Timeline Connector Container - Responsive Layout */}
        <div className="w-full relative px-4 select-none">


          {/* Steps Horizontal Row on Desktop, Flex/Scroll on mobile */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-7 gap-2 lg:gap-5 w-full snap-x snap-mandatory pt-6 pb-6 px-2"
          >
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isSelected = activeStep === idx;
              const isBefore = idx <= activeStep;

              return (
                <div 
                  key={step.idx} 
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  className="flex flex-row items-start lg:block shrink-0 snap-center relative"
                >
                  <div
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center cursor-pointer group w-[130px] sm:w-[150px] lg:w-auto"
                  >
                    {/* Step Metric Bubble Indicator */}
                    <div
                      className={`w-22 h-22 rounded-2xl flex flex-col items-center justify-center border transition-all duration-500 relative ${
                        isSelected
                          ? "bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple border-transparent text-white shadow-xl shadow-indigo-500/20 scale-105"
                          : isBefore
                          ? "bg-slate-900 border-brand-indigo/65 text-brand-indigo shadow-md"
                          : "bg-slate-900/50 border-slate-700 text-slate-400 group-hover:bg-slate-800/30 dark:hover:bg-slate-800 dark:hover:bg-slate-800"
                      }`}
                    >
                      {/* Small ordinal position indicator badge */}
                      <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[9px] font-bold font-mono border shadow-sm flex items-center justify-center transition-colors duration-500 ${
                        isSelected
                          ? "bg-brand-indigo border-brand-indigo text-white ring-2 ring-indigo-500/20"
                          : "bg-slate-900 border-slate-700 text-slate-300"
                      }`}>
                        0{step.idx}
                      </span>

                      <IconComp className={`w-6 h-6 ${isSelected ? "text-white" : isBefore ? "text-brand-indigo" : "text-slate-400"}`} />
                      <span className="text-[10px] font-black uppercase tracking-wider font-mono mt-1.5 leading-none">
                        {step.label}
                      </span>
                    </div>

                    {/* Micro label summary */}
                    <span className={`text-[11px] font-bold mt-3 px-1 transition-colors ${isSelected ? "text-brand-indigo" : "text-slate-400 group-hover:text-slate-200 dark:hover:text-slate-100 dark:hover:text-slate-100"}`}>
                      {step.summary}
                    </span>
                  </div>

                  {/* Arrow for mobile/tablet horizontal scroll view */}
                  {idx < steps.length - 1 && (
                    <>
                      <div className="lg:hidden mt-[34px] mx-1 text-slate-500 shrink-0">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <div className="hidden lg:flex absolute top-[34px] -right-[10px] text-slate-500/50 justify-center items-center pointer-events-none translate-x-[50%]">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Technical Analysis Detail Box (Glassmorphic Container) */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 w-full max-w-4xl glass-card border border-slate-700/50 p-8 rounded-3xl shadow-lg relative flex flex-col md:flex-row gap-6 items-center text-left"
        >
          {/* Accent decoration tag detailing the step */}
          <div className="absolute top-4 right-6 hidden md:flex items-center gap-1 text-[10px] font-mono font-extrabold text-slate-300">
            <span>ACTIVE CORE_PIPELINE STAGE // 0{steps[activeStep].idx}</span>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 border border-brand-indigo/10 flex items-center justify-center text-brand-indigo flex-shrink-0">
            {(() => {
              const IconComp = steps[activeStep].icon;
              return <IconComp className="w-7 h-7 text-brand-indigo" />;
            })()}
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-black uppercase text-brand-indigo bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                Phase 0{steps[activeStep].idx}: {steps[activeStep].label}
              </span>
              <span className="text-slate-400 text-sm font-semibold">—</span>
              <span className="text-slate-100 font-extrabold text-lg leading-none">
                {steps[activeStep].summary}
              </span>
            </div>
            <p className="font-sans text-slate-300 text-sm leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <button
            onClick={() => {
              setActiveStep((prev) => (prev + 1) % steps.length);
            }}
            className="self-center md:self-end px-5 py-3 rounded-xl bg-slate-900 shadow-sm text-white text-xs font-bold hover:bg-brand-indigo flex items-center gap-1.5 flex-shrink-0 transition-colors"
          >
            <span>Next Stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
