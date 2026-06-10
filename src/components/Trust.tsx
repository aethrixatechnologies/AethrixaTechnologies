import { motion } from "motion/react";
import { Award, Zap, Anchor, Layers, Battery, Globe, Radio, Shield } from "lucide-react";

export default function Trust() {
  const row1 = [
    { name: "Apex Startups", icon: Anchor },
    { name: "Stripe Partners", icon: Zap },
    { name: "Linear Systems", icon: Layers },
    { name: "Google Cloud", icon: Globe },
    { name: "Cognitive Solutions", icon: Battery },
    { name: "Tesla Engines", icon: RadarIcon },
    { name: "Vercel Edge", icon: Award },
    { name: "OpenAI Labs", icon: Radio }
  ];

  const row2 = [
    { name: "Aethrixa Global", icon: Globe },
    { name: "Enterprise Co.", icon: Shield },
    { name: "SaaS Accelerators", icon: Layers },
    { name: "Fortune 500", icon: Award },
    { name: "Next-Gen Fintech", icon: Zap },
    { name: "Digital Growth Inc", icon: Anchor }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 bg-transparent border-y border-slate-200 dark:border-slate-700/40 overflow-hidden relative w-full"
    >
      {/* Background Decorative Gradient lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
          TRUSTED BY LEADERS WORLDWIDE
        </p>
      </div>

      {/* Infinite Row 1 */}
      <div className="flex w-full mb-4">
        <div className="flex gap-4 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
          {/* First Render */}
          {row1.concat(row1).map((item, idx) => {
            const Icon = item.icon || Award;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/70 shadow-sm text-slate-700 dark:text-slate-200 min-w-[200px]"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-50/80 flex items-center justify-center text-brand-indigo font-bold">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-sans font-bold text-xs tracking-tight">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Row 2 (Reverse Scroll direction) */}
      <div className="flex w-full">
        <div className="flex gap-4 animate-[scroll-reverse_35s_linear_infinite] whitespace-nowrap">
          {/* First Render */}
          {row2.concat(row2).map((item, idx) => {
            const Icon = item.icon || Shield;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/70 shadow-sm text-slate-700 dark:text-slate-200 min-w-[210px]"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-50/80 flex items-center justify-center text-cyan-500 font-bold">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-sans font-bold text-xs tracking-tight">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Injecting scroll keyframes into style dynamically */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </motion.section>
  );
}

// Temporary Fallback icon if RadarIcon is undefined
const RadarIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m19.07 4.93-1.41 1.41" />
    <path d="M12 12V2" />
  </svg>
);
