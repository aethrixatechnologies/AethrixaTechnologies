import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Star, ArrowLeft, ArrowRight, Sparkles, UserCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  avatarColor: string;
  initials: string;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const autoRotateRef = useRef<boolean>(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marcus Vance",
      role: "VP of Engineering",
      company: "Apex Ledger Systems",
      feedback: "Aethrixa Technologies did what five other agencies failed to deploy. They refactored our server routing in days, built an impeccable glassmorphic interface, and automated our support pipelines. Our core efficiency spiked by over 80% on week one.",
      rating: 5,
      avatarColor: "from-brand-blue to-indigo-500",
      initials: "MV"
    },
    {
      id: 2,
      name: "Seraphina Lin",
      role: "Founder & CEO",
      company: "Aethera AI Labs",
      feedback: "The AI agent setup Aethrixa developed for our custom datasets is remarkably fast and accurate. It handles thousands of API triggers seamlessly. Their engineering team is elite and responds with proactive solutions.",
      rating: 5,
      avatarColor: "from-cyan-400 to-teal-500",
      initials: "SL"
    },
    {
      id: 3,
      name: "Demetri Thorne",
      role: "Head of Operations",
      company: "Horizon Logistics Inc",
      feedback: "Aethrixa didn't just build our custom React application—they optimized our Google keyword indexes and drove active Social pipelines. Truly world-class consulting, communication, and execution.",
      rating: 5,
      avatarColor: "from-violet-600 to-purple-500",
      initials: "DT"
    },
    {
      id: 4,
      name: "Nicoletta Reyes",
      role: "VP of Digital Growth",
      company: "Pinnacle Fintech",
      feedback: "Impeccable attention to detail. Every transition, color palette alignment, and micro-interaction is perfectly crafted. Over 300,000 monthly hits arrived from their robust SEO schemas.",
      rating: 5,
      avatarColor: "from-rose-500 to-pink-500",
      initials: "NR"
    }
  ];

  // Auto scroll rotation controller
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoRotateRef.current) {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
      }
    }, 5500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    autoRotateRef.current = false;
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    autoRotateRef.current = false;
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="testimonials" 
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
    >
      {/* Decorative Aurora lights removed */}

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full text-center">
        {/* Accent Tag */}
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-slate-900 mb-4 shadow-sm">
          <MessageSquare className="w-3.5 h-3.5 text-brand-purple fill-brand-purple/10" />
          <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-400">
            CLIENT COGNITIVE VERIFICATION
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-3xl md:text-5xl text-slate-100 tracking-tight mb-4 max-w-2xl">
          Don't Take Our Word For It. Read The Feedback.
        </h2>

        {/* Subtext */}
        <p className="font-sans text-slate-300 text-base md:text-lg max-w-xl mb-16">
          Over 50+ businesses have accelerated their operational capacity and catalyzed digital outcomes under our engineering care.
        </p>

        {/* Testimonial Active Slider glass container */}
        <div className="w-full max-w-4xl relative min-h-[380px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.96, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -25 }}
              transition={{ duration: 0.45 }}
              className="w-full glass-card border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-xl bg-slate-900/70 flex flex-col md:flex-row gap-8 items-center text-left relative"
            >
              {/* Star graphics banner */}
              <div className="absolute top-6 right-8 flex gap-1 text-amber-400">
                {Array.from({ length: testimonials[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Left Column Avatar bubble */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 border border-brand-indigo/10 flex items-center justify-center flex-shrink-0 relative">
                {/* Colored inner monogram ring */}
                <div className={`w-18 h-18 rounded-xl bg-gradient-to-tr ${testimonials[activeIdx].avatarColor} flex items-center justify-center text-white font-mono font-black text-xl shadow-lg`}>
                  {testimonials[activeIdx].initials}
                </div>
                {/* Sync check */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-emerald-500 border-2 border-slate-800 flex items-center justify-center text-white shadow">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Right Column Content block */}
              <div className="flex-1 space-y-4">
                <span className="font-mono text-[9px] font-extrabold text-slate-300 uppercase tracking-widest block">
                  CUSTOMER EXPERIENCE VERIFIED STAMP
                </span>
                
                {/* Feedback Quote */}
                <p className="font-sans text-slate-200 italic text-sm md:text-base leading-relaxed font-medium">
                  "{testimonials[activeIdx].feedback}"
                </p>

                {/* Sub-label profile details */}
                <div className="border-t border-slate-800 pt-4 flex flex-col">
                  <span className="font-display font-extrabold text-slate-100 text-sm">
                    {testimonials[activeIdx].name}
                  </span>
                  <span className="text-[10px] font-bold text-brand-purple tracking-wide font-mono mt-0.5">
                    {testimonials[activeIdx].role} // {testimonials[activeIdx].company}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Absolute Slider Floating Arrows */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3 h-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-200 hover:border-slate-600 text-slate-200 flex items-center justify-center hover:bg-transparent dark:hover:bg-slate-900/50 dark:hover:bg-slate-900/50 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            
            {/* Slide Count Indicator */}
            <div className="px-4 bg-slate-900 border border-slate-900 text-white rounded-xl flex items-center justify-center font-mono text-[11px] font-bold shadow-md">
              <span>0{activeIdx + 1} / 0{testimonials.length}</span>
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-200 hover:border-slate-600 text-slate-200 flex items-center justify-center hover:bg-transparent dark:hover:bg-slate-900/50 dark:hover:bg-slate-900/50 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
