import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowUpRight } from "lucide-react";
import { projects, getProjectIcon } from "../data/projects";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "ai" | "marketing">("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Solutions" },
    { id: "marketing", label: "Marketing Campaigns" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      id="portfolio" 
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
    >

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
        {/* Accent Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-slate-900 mb-4 shadow-sm"
        >
          <Star className="w-3.5 h-3.5 text-brand-purple fill-brand-purple/20 animate-pulse" />
          <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-400">
            AETHRIXA DIGITAL PORTFOLIO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-display font-black text-3xl md:text-5xl text-slate-100 tracking-tight mb-4 max-w-2xl text-center"
        >
          Pristine Solutions Engineered For Real Growth.
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-slate-300 text-base md:text-lg max-w-xl mb-12 text-center"
        >
          We pride ourselves on flawless execution. Explore our featured success stories across AI, web, and marketing domains.
        </motion.p>

        {/* Dynamic Category Filter Button Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-16 bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/50">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-slate-900 text-white shadow-md shadow-black/30"
                  : "text-slate-600 hover:text-white dark:hover:text-slate-50 dark:hover:text-slate-50 hover:bg-slate-900/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = getProjectIcon(project.iconName);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-3xl border border-slate-700/55 bg-gradient-to-b from-slate-900/50 to-slate-950/80 p-6 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 hover:-translate-y-1.5"
                >
                  <Link to={`/project/${project.id}`} className="absolute inset-0 z-20">
                    <span className="sr-only">View {project.title}</span>
                  </Link>

                  {/* Decorative Project vector graphic backdrop representing custom tech layout */}
                  <div className={`w-full aspect-video rounded-2xl mb-6 bg-gradient-to-tr ${project.gradient} border border-slate-700/40 relative overflow-hidden p-4 flex items-center justify-center`}>
                    


                    {/* Glowing centralized vector logo of project */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-900/95 border border-slate-700/50 shadow-xl shadow-none flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110">
                      <ProjectIcon className="w-6 h-6 text-indigo-500" />
                    </div>

                    {/* Miniature floating aesthetic metrics inside vector graphic box */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white rounded-lg px-2.5 py-1 text-[9px] font-mono font-bold flex items-center gap-1 shadow">
                      <span>SECURE CODE</span>
                    </div>
                  </div>

                  {/* Category Stamp Label & In Progress Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-extrabold font-mono tracking-widest text-[#8b5cf6] uppercase">
                      {project.categoryLabel}
                    </span>
                    {project.inProgress && (
                      <span className="text-[9px] font-bold font-mono tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full uppercase">
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Project Headline */}
                  <h3 className="font-display font-black text-slate-100 text-lg mb-2 leading-snug group-hover:text-brand-purple transition-colors relative z-10">
                    {project.title}
                  </h3>

                  {/* Explanatory summary text */}
                  <p className="font-sans text-slate-400 text-xs leading-relaxed mb-6 flex-1 relative z-10">
                    {project.summary}
                  </p>

                  {/* Key Metrics Statistics Bar */}
                  <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-left relative z-10">
                    <div>
                      <span className="block font-mono font-black text-slate-100 text-sm">
                        {project.metrics}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        {project.metricsLabel}
                      </span>
                    </div>
                    
                    {/* Action trigger button */}
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all cursor-pointer">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
