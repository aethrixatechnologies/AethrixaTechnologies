import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Compass, CheckCircle2, TrendingUp, Sparkles, Scale, HelpCircle } from "lucide-react";

interface AdvItem {
  id: string;
  title: string;
  percent: number;
  label: string;
  desc: string;
  color: string;
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef as any, { once: false, amount: 0.1 });

  // State values for progress indicators matching the advantages
  const [pricesProgress, setPricesProgress] = useState(0);
  const [solutionsProgress, setSolutionsProgress] = useState(0);
  const [devProgress, setDevProgress] = useState(0);
  const [supportProgress, setSupportProgress] = useState(0);
  const [growthProgress, setGrowthProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Simulate progress growth animation
      const interval = setInterval(() => {
        setSolutionsProgress((prev) => (prev < 98 ? prev + 1 : 98));
        setDevProgress((prev) => (prev < 100 ? prev + 1 : 100));
        setPricesProgress((prev) => (prev < 92 ? prev + 1 : 92));
        setSupportProgress((prev) => (prev < 99 ? prev + 1 : 99));
        setGrowthProgress((prev) => (prev < 95 ? prev + 1 : 95));
      }, 15);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  const reasons: AdvItem[] = [
    {
      id: "innovative",
      title: "Innovative Solutions",
      percent: solutionsProgress,
      label: "Model Precision Rating",
      desc: "Our AI architectures leverage cutting-edge neural vector modeling and contextual stream parsing to formulate custom systems ahead of competitors.",
      color: "bg-indigo-600"
    },
    {
      id: "custom",
      title: "Customized Development",
      percent: devProgress,
      label: "Client Alignment Score",
      desc: "No low-quality template clones. We write custom TypeScript algorithms, clean-designed databases, and robust server environments from scratch.",
      color: "bg-cyan-500"
    },
    {
      id: "budget",
      title: "Affordable Pricing",
      percent: pricesProgress,
      label: "Operational Spend Efficiency",
      desc: "We minimize computational overhead through smart serverless route scaling, matching premium solutions directly to your seed/enterprise budgets.",
      color: "bg-emerald-500"
    },
    {
      id: "support",
      title: "Reliable Support",
      percent: supportProgress,
      label: "Live Hot-Patch SLA Response",
      desc: "Our engineering operations team is on proactive rotation around the clock, guaranteeing 99.9% uptime and zero-delay hot-fixes.",
      color: "bg-violet-600"
    },
    {
      id: "growth",
      title: "Business Growth Focus",
      percent: growthProgress,
      label: "Customer LTV Trajectory",
      desc: "We ground our development milestones in real business revenue, conversion metrics, social leads, and Google keywords optimization structures.",
      color: "bg-brand-blue"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      ref={containerRef}
      id="why-us"
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
    >
      {/* Decorative Pastel Background light rings */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        
        {/* Left Side: Comparison analysis & text */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          {/* Accent Tag */}
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-white dark:bg-slate-900 mb-2 self-start shadow-sm">
            <Scale className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
              OPERATIONAL COMPARISON METRICS
            </span>
          </div>

          <h2 className="font-display font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 tracking-tight leading-tight">
            Why Forward-thinking Brands Trust Aethrixa.
          </h2>

          <p className="font-sans text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">
            We merge absolute mechanical precision with commercial startup metrics. Our code isn't just beautiful—it's engineered to maximize operational capacity and catalyze client gains.
          </p>

          <p className="font-sans text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            While basic agencies use mock code, templates, and slow servers, Aethrixa Technologies builds durable cloud structures, fine-tuned agent setups, and seamless web experiences.
          </p>

          {/* Quick confirmation chips list */}
          <div className="space-y-3 mt-4 border-t border-slate-200 dark:border-slate-700/50 pt-6">
            {[
              "ISO 27001 Security Standard",
              "100% Pure TypeScript Codebases",
              "Comprehensive Cloud Ownership Rights",
              "Flexible Consultations Model Setup",
            ].map((check_item, check_idx) => (
              <div key={check_idx} className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{check_item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Animated comparison progress cards */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="glass-card bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-white flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm hover:shadow-md transition-all group overflow-hidden w-full"
            >
              {/* Card Label and text detail */}
              <div className="flex-1 space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 text-base group-hover:text-brand-purple transition-colors">
                    {reason.title}
                  </h4>
                </div>
                <p className="font-sans text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {/* Progress bar container widget */}
              <div className="w-full md:w-52 flex flex-col justify-center flex-shrink-0 max-w-full">
                <div className="flex items-center justify-between text-[10px] font-bold font-mono text-slate-400 mb-1.5">
                  <span>{reason.label}</span>
                  <span className="text-slate-800 dark:text-slate-100 font-extrabold">{reason.percent}%</span>
                </div>
                {/* Frosted Bar track */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 p-0.5 border border-slate-200 dark:border-slate-700/30 overflow-hidden shadow-inner">
                  <motion.div
                    className={`h-full ${reason.color} rounded-full`}
                    style={{ width: `${reason.percent}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
