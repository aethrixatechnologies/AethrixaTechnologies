import React, { useState, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  MessageSquare,
  Globe,
  Code,
  Smartphone,
  Settings,
  BarChart,
  Megaphone,
  Target,
  Search,
  DollarSign,
  ShoppingBag,
  Cloud,
  Shield,
  Rocket,
  Sparkles
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "ai" | "engineering" | "marketing" | "cloud";
  icon: ComponentType<any>;
  description: string;
  badge?: string;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "engineering" | "marketing" | "cloud">("all");

  const categories = [
    { id: "all", name: "All Solutions" },
    { id: "ai", name: "AI & Automation" },
    { id: "engineering", name: "Web & Mobile" },
    { id: "marketing", name: "Digital Growth" },
    { id: "cloud", name: "Enterprise IT & Support" }
  ];

  const services: ServiceItem[] = [
    {
      id: "ai-auto",
      title: "AI Automation Solutions",
      category: "ai",
      icon: Cpu,
      description: "Automate raw repetitive workflows and corporate processes utilizing customized AI models and smart triggers.",
      badge: "Flagship"
    },
    {
      id: "ai-bot",
      title: "AI Chatbot Development",
      category: "ai",
      icon: MessageSquare,
      description: "Integrate LLM conversational agents, intelligent fine-tuned support systems, and automated cognitive answering modules.",
      badge: "Popular"
    },
    {
      id: "web-design",
      title: "Website Design & Development",
      category: "engineering",
      icon: Globe,
      description: "Award-winning layouts, ultra-high responsiveness, modern SaaS aesthetics matching pristine corporate branding.",
    },
    {
      id: "web-app",
      title: "Web Application Development",
      category: "engineering",
      icon: Code,
      description: "Highly performant cloud-backed apps, full-stack state engines, robust APIs, and dashboard systems built in React.",
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      category: "engineering",
      icon: Smartphone,
      description: "Native-quality experience for iOS and Android, responsive interface structures, cross-platform fluid utilities.",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      category: "engineering",
      icon: Settings,
      description: "Incorporate robust middleware algorithms, customized APIs, secure system endpoints tailored to business specs."
    },
    {
      id: "biz-auto",
      title: "Business Automation Solutions",
      category: "ai",
      icon: BarChart,
      description: "Scale internal processes securely, compile reports automatically, link legacy software systems seamlessly."
    },
    {
      id: "dig-marketing",
      title: "Digital Marketing Solutions",
      category: "marketing",
      icon: Megaphone,
      description: "Data-backed conversion rate strategies designed to establish authority and drive leads automatically."
    },
    {
      id: "social-marketing",
      title: "Social Media Campaign Management",
      category: "marketing",
      icon: Target,
      description: "Build robust brand identity, trigger dynamic visual storytelling, engage communities directly with premium assets."
    },
    {
      id: "seo-opt",
      title: "SEO Optimization Engine",
      category: "marketing",
      icon: Search,
      description: "Command search engine rankings with semantic structures, lightning quick page speed loads, and robust backlinking."
    },
    {
      id: "paid-ads",
      title: "Google & Meta Paid Campaigns",
      category: "marketing",
      icon: DollarSign,
      description: "Zero-budget waste setup, optimized pixel integrations, targeted lookalikes, with dynamic budget scaling metrics."
    },
    {
      id: "ecom-solutions",
      title: "E-Commerce Architecture",
      category: "engineering",
      icon: ShoppingBag,
      description: "Secure cart integrations, payment corridors, inventory pipelines, with fluid high-conversion checkout flows."
    },
    {
      id: "cloud-it",
      title: "Cloud Services & Modern IT Solutions",
      category: "cloud",
      icon: Cloud,
      description: "Serverless setups, security monitoring, server migrations, managed infrastructure across AWS, Azure, and Cloud SQL."
    },
    {
      id: "maintenance-support",
      title: "Maintenance & Cyber Security Support",
      category: "cloud",
      icon: Shield,
      description: "Around-the-clock proactive defense, regular diagnostic patches, zero-downtime hot reloading, backups secured.",
      badge: "24/7"
    },
    {
      id: "custom-ai-it",
      title: "Custom AI & IT Engineering Solutions",
      category: "ai",
      icon: Rocket,
      description: "Brimming with specific computational configurations for high-speed training datasets, algorithmic pipelines, and server integrations.",
      badge: "Specialty"
    }
  ];

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      id="services" 
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full"
    >
      {/* Background decoration elements removed */}

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        {/* Accent Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-slate-900 mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
          <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-400">
            AETHRIXA TECHNICAL CAPABILITIES
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-display font-black text-3xl md:text-5xl text-slate-100 tracking-tight mb-4 max-w-2xl"
        >
          Complete Suite of Intelligent Digital Architectures.
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-slate-300 text-base md:text-lg max-w-xl mb-12"
        >
          From advanced artificial intelligence pipelines to enterprise software development and market-conquering digital campaigns.
        </motion.p>

        {/* Navigation Category Filter Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-900/80 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-800/80 max-w-4xl shadow-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-white dark:hover:text-slate-50 dark:hover:text-slate-50 hover:bg-slate-900/60"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Service Grid Cards with framer-motion entry transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, service_idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.2, delay: service_idx * 0.04 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-700/60 bg-slate-900/50 text-left flex flex-col justify-between relative overflow-hidden group min-h-[220px]"
                >
                  {/* Subtle corner light gradient glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-blue/10 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-bl-3xl" />

                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo transition-transform duration-300 group-hover:scale-110 group-hover:border-violet-300/40 group-hover:bg-violet-50">
                        <IconComponent className="w-5.5 h-5.5 text-brand-indigo group-hover:text-violet-600" />
                      </div>
                      {service.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase font-mono bg-indigo-50 border border-indigo-100 text-brand-indigo shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-bold text-slate-100 text-lg mb-2 leading-snug group-hover:text-brand-purple transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-slate-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Micro-interaction Line Accent at bottom */}
                  <div className="w-full h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-6" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
