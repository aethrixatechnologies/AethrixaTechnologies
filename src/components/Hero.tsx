import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Cpu, ArrowRight, Play, Sparkles, Server, CheckCircle, Smartphone, Terminal, BarChart2 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const yDashboard = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTab, setActiveTab] = useState<"ai" | "mobile" | "automation">("ai");
  const [pipelinePercent, setPipelinePercent] = useState(72);
  const [consoleLogs, setConsoleLogs] = useState<string[]>(["// Connecting to Aethrixa API Core..."]);

  // Random console log simulation
  useEffect(() => {
    const messages = [
      "Establishing neural gateway v4...",
      "Cognitive pipeline stream: OK",
      "Analyzing layout performance: 99.42%",
      "Deploying high-speed edge nodes...",
      "Integrating Gemini AI vector indexes...",
      "Serverless route verification: Completed"
    ];

    const idx = setInterval(() => {
      setConsoleLogs((prev) => {
        const randMsg = messages[Math.floor(Math.random() * messages.length)];
        const systemTime = new Date().toLocaleTimeString();
        const next = [...prev, `[${systemTime}] ${randMsg}`];
        if (next.length > 5) next.shift();
        return next;
      });
      setPipelinePercent((prev) => {
        const next = prev + Math.floor(Math.random() * 7) - 3;
        return Math.max(50, Math.min(100, next));
      });
    }, 3500);

    return () => clearInterval(idx);
  }, []);

  const handleCTA = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(targetElement);
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.section ref={containerRef} style={{ opacity: opacityFade }} id="welcome" className="relative min-h-screen pt-32 pb-16 px-4 md:px-12 lg:px-24 bg-transparent overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side Content Column */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          {/* Accent Label Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-1.5 self-start px-4 py-1.5 rounded-full border border-violet-200 bg-slate-900 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-purple animate-spin" />
            <span className="text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-brand-blue to-color-brand-indigo bg-clip-text text-transparent">
              THE FUTURE OF COGNITIVE IT HAS ARRIVED
            </span>
          </motion.div>

          {/* Majestic Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display font-black text-4xl md:text-5xl xl:text-6xl text-slate-100 tracking-tight leading-[1.1]"
          >
            Transforming Ideas Into{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple bg-clip-text text-transparent">
                Intelligent
              </span>
              <svg className="absolute left-0 bottom-1 w-full h-2 text-indigo-400/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>{" "}
            Digital Solutions.
          </motion.h1>

          {/* Subheadline Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-sans text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
          >
            We help startups, businesses, and enterprise teams accelerate hyper-growth through customized AI agents, next-level web platforms, and mobile apps.
          </motion.p>

          {/* Action CTAs Button Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button
              onClick={() => handleCTA("#contact")}
              className="flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-xl shadow-black/30 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-purple hover:scale-102 hover:shadow-indigo-300/50 transition-all duration-300 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleCTA("#services")}
              className="flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-700 bg-slate-900/70 hover:bg-slate-800/30 dark:hover:bg-slate-800 dark:hover:bg-slate-800/80 hover:border-slate-600 text-slate-200 font-bold text-sm shadow-sm hover:scale-102 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-slate-500 text-slate-400" />
              <span>Explore Services</span>
            </button>
          </motion.div>

          {/* Fast Features list indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-2 gap-3 mt-4 border-t border-slate-700/60 pt-6 max-w-lg"
          >
            {[
              "98%+ Client Retention Rate",
              "Billion Dollar SaaS Stack",
              "Enterprise-Grade ISO Security",
              "24/7 Realtime Analytics Support",
            ].map((tag_feature, tag_idx) => (
              <div key={tag_idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{tag_feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side Glassmorphic Floating Dashboard Widget Column */}
        <div className="lg:col-span-6 flex justify-center relative">
          {/* Subtle Outer Glowing Sphere Behind Dashboard */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/15 to-brand-purple/10 rounded-full blur-2xl animate-pulse-soft pointer-events-none" />

          <motion.div
            style={{ y: yDashboard }}
            initial={{ opacity: 0, scale: 0.9, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 40 }}
            className="w-full max-w-lg glass-card border-slate-700/60 p-6 rounded-3xl shadow-2xl shadow-none flex flex-col relative animate-float-slow antialiased"
          >
            {/* Header Control Panels */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-indigo-100/40 pb-4 mb-4 gap-3 sm:gap-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold font-mono tracking-wider text-slate-400 ml-1 sm:ml-2">
                  AETH_AGENT_DASHBOARD v1.0
                </span>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-800/60 font-mono text-[10px] font-bold text-brand-indigo flex items-center gap-1 self-end sm:self-auto">
                <span>SYSTEM ACTIVE</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* Simulated Tabs controller */}
            <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-2 sm:gap-1 mb-5">
              {[
                { id: "ai", label: "AI Analytics", icon: Cpu },
                { id: "mobile", label: "Web / Mobile", icon: Smartphone },
                { id: "automation", label: "Custom CLI", icon: Terminal },
              ].map((tb) => {
                const IconComp = tb.icon;
                const isSelected = activeTab === tb.id;
                return (
                  <button
                    key={tb.id}
                    onClick={() => setActiveTab(tb.id as any)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-[11px] font-bold tracking-tight transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 border-brand-indigo/35 text-brand-indigo shadow-inner"
                        : "bg-slate-900/40 border-transparent text-slate-500 hover:text-slate-200 dark:hover:text-slate-100 dark:hover:text-slate-100 hover:bg-slate-900/60"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isSelected ? "text-brand-indigo" : "text-slate-400"}`} />
                    <span>{tb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Interactive Body */}
            <div className="min-h-[220px] flex flex-col justify-between">
              {activeTab === "ai" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-sm flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Vector Latency
                      </span>
                      <span className="text-xl font-black text-slate-100 mt-1 font-mono">
                        0.42 ms
                      </span>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                        <div className="bg-sky-400 h-full rounded-full" style={{ width: "91%" }}></div>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-sm flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Token Efficiency
                      </span>
                      <span className="text-xl font-black text-slate-100 mt-1 font-mono">
                        99.8%
                      </span>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                        <div className="bg-violet-400 h-full rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Wave Graph Area Component */}
                  <div className="flex-1 bg-slate-900 border border-slate-800 shadow-sm rounded-xl p-3 flex flex-col justify-end w-full overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-2">
                      <span>Real-time Cognitive Load</span>
                      <span className="text-brand-purple flex items-center gap-1 font-bold">
                        <BarChart2 className="w-3 h-3" />
                        PROCESSED LIVE
                      </span>
                    </div>
                    <div className="h-16 relative w-full overflow-hidden">
                      {/* SVG Line Wave */}
                      <svg viewBox="0 0 100 20" className="w-full h-full text-brand-blue shrink-0" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="glow-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,15 C20,2 40,18 60,8 C80,3 90,12 100,2"
                          fill="none"
                          stroke="url(#glow-grad)"
                          strokeWidth="2.5"
                          className="stroke-cyan-500 animate-pulse"
                        />
                        <path
                          d="M0,15 C20,2 40,18 60,8 C80,3 90,12 100,2 L100,20 L0,20 Z"
                          fill="url(#glow-grad)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "mobile" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0 animate-bounce">
                      <Smartphone className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-display text-slate-100 uppercase tracking-widest">
                        Reactive Application Hub
                      </h4>
                      <p className="text-xs font-sans text-slate-400 mt-1">
                        Compiling native modules for web viewports, iOS apps, and Android engines with automated state synchronization tools.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                    {[
                      { status: "Fast Build", metric: "3.2s" },
                      { status: "PageSpeed", metric: "100" },
                      { status: "SEO Rank", metric: "#1" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-900 border border-slate-800 shadow-sm p-2.5 rounded-xl text-center">
                        <span className="block text-[9px] font-black uppercase text-slate-400 font-mono">
                          {item.status}
                        </span>
                        <span className="text-sm font-black text-brand-purple mt-0.5">
                          {item.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "automation" && (
                <div className="flex-1 flex flex-col bg-slate-900 border border-slate-950 p-4 rounded-xl font-mono text-[11px] text-emerald-400 leading-relaxed overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2 text-slate-400 text-[9px]">
                    <span>core_microagent_cli</span>
                    <span>PIPELINE: {pipelinePercent}%</span>
                  </div>
                  <div className="space-y-1.5 flex-1 select-none">
                    {consoleLogs.map((log, idx) => (
                      <div key={idx} className="truncate">
                        <span className="text-slate-400">$</span> {log}
                      </div>
                    ))}
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">$</span>
                      <div className="w-2.5 h-3.5 bg-emerald-400 rounded-sm animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Grid Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-indigo-100/40 pt-4 mt-4 text-[10px] font-bold font-sans text-slate-400 gap-3 sm:gap-0">
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-cyan-500" />
                <span>Nodes Connected: 128/128</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-slate-200">AI AGENT: AETHRIXA-PRO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
