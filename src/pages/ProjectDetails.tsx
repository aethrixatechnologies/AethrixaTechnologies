import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { projects, getProjectIcon } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-black text-slate-800 dark:text-slate-100 mb-4">Project Not Found</h1>
        <p className="text-slate-500 mb-8">We couldn't find the project you're looking for.</p>
        <Link to="/" className="px-6 py-3 bg-brand-purple text-white rounded-xl font-bold hover:bg-brand-purple-dark transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  const ProjectIcon = getProjectIcon(project.iconName);

  return (
    <main className="flex-1 flex flex-col w-full bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        {/* Back navigation */}
        <div className="mb-12">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-purple transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-extrabold font-mono tracking-widest text-brand-purple block uppercase bg-brand-purple/10 w-fit px-3 py-1 rounded-full">
                {project.categoryLabel}
              </span>
              {project.inProgress && (
                <span className="text-xs font-bold font-mono tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-3 py-1 rounded-full uppercase">
                  In Progress
                </span>
              )}
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {project.summary}
            </p>
            



          </div>

          <div className="relative">
            <div className={`w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] bg-gradient-to-tr ${project.gradient} border border-slate-200/50 dark:border-slate-800 relative overflow-hidden flex items-center justify-center shadow-2xl`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/50 dark:border-slate-700 shadow-2xl flex items-center justify-center relative z-10"
              >
                <ProjectIcon className="w-16 h-16 md:w-24 md:h-24 text-slate-800 dark:text-white" strokeWidth={1.5} />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 font-display">The Challenge</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 font-display">Our Solution</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {project.solution}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 font-display">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                      <div className="text-3xl font-black text-brand-purple mb-2">{result.value}</div>
                      <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-32">
              {project.role && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Role</h3>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{project.role}</p>
                </div>
              )}
              
              {project.duration && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Timeline</h3>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{project.duration}</p>
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technologies Used</h3>
              <ul className="space-y-4">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
              

            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
