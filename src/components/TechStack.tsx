import React, { useState } from"react";
import { motion, AnimatePresence } from"motion/react";
import {
 Code,
 Layers,
 Server,
 Layout,
 Smartphone,
 Cpu,
 MonitorSmartphone,
 AppWindow,
 Brain,
 Bot,
 Network,
 Sparkles,
 TrendingUp,
 Megaphone,
 Target,
 BarChart,
 Workflow,
 CheckCircle2
} from"lucide-react";

interface TechItem {
 name: string;
 description: string;
 icon: React.ElementType;
 color: string;
}

interface Category {
 id: string;
 title: string;
 subtitle: string;
 image: string;
 items: TechItem[];
}

const categories: Category[] = [
 {
 id:"web",
 title:"Web Development",
 subtitle:"High-performance, scalable web applications built with modern frameworks.",
 image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"React & Next.js", description:"Dynamic, SEO-friendly frontends.", icon: Layers, color:"text-sky-600 bg-sky-50 border-sky-100 dark:text-sky-400 dark:bg-sky-900/30 dark:border-sky-900/50" },
 { name:"Node.js & Express", description:"Robust and scalable backend systems.", icon: Server, color:"text-emerald-600 bg-emerald-50 border-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30 dark:border-emerald-900/50" },
 { name:"Tailwind CSS", description:"Utility-first, responsive UI styling.", icon: Layout, color:"text-cyan-600 bg-cyan-50 border-cyan-100 dark:text-cyan-400 dark:bg-cyan-900/30 dark:border-cyan-900/50" },
 { name:"TypeScript", description:"Type-safe, maintainable codebases.", icon: Code, color:"text-blue-600 bg-blue-50 border-blue-100 dark:text-blue-400 dark:bg-blue-900/30 dark:border-blue-900/50" },
 ]
 },
 {
 id:"app",
 title:"App Development",
 subtitle:"Native and cross-platform mobile experiences for iOS and Android.",
 image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"Flutter", description:"Beautiful cross-platform apps from a single codebase.", icon: MonitorSmartphone, color:"text-sky-600 bg-sky-50 border-sky-100 dark:text-sky-400 dark:bg-sky-900/30 dark:border-sky-900/50" },
 { name:"React Native", description:"Native apps built with React principles.", icon: Smartphone, color:"text-indigo-600 bg-indigo-50 border-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 dark:border-indigo-900/50" },
 { name:"iOS Native (Swift)", description:"High-performance native Apple applications.", icon: AppWindow, color:"text-slate-700 bg-slate-100 border-slate-200 dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700" },
 { name:"Android (Kotlin)", description:"Modern, secure native Android apps.", icon: Cpu, color:"text-green-600 bg-green-50 border-green-100 dark:text-green-400 dark:bg-green-900/30 dark:border-green-900/50" },
 ]
 },
 {
 id:"ai",
 title:"AI Automation",
 subtitle:"Intelligent systems and workflows powered by cutting-edge machine learning.",
 image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"Python Core", description:"The foundation of modern AI data processing.", icon: Bot, color:"text-blue-600 bg-blue-50 border-blue-100 dark:text-blue-400 dark:bg-blue-900/30 dark:border-blue-900/50" },
 { name:"LLM Integration", description:"OpenAI, Claude, and custom model APIs.", icon: Brain, color:"text-violet-600 bg-violet-50 border-violet-100 dark:text-violet-400 dark:bg-violet-900/30 dark:border-violet-900/50" },
 { name:"LangChain", description:"Advanced AI agent workflows and pipelines.", icon: Network, color:"text-amber-600 bg-amber-50 border-amber-100 dark:text-amber-400 dark:bg-amber-900/30 dark:border-amber-900/50" },
 { name:"Predictive ML", description:"TensorFlow and PyTorch model deployment.", icon: Sparkles, color:"text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100 dark:text-fuchsia-400 dark:bg-fuchsia-900/30 dark:border-fuchsia-900/50" },
 ]
 },
 {
 id:"marketing",
 title:"Digital Marketing",
 subtitle:"Data-driven strategies to maximize reach, engagement, and conversion.",
 image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"SEO Optimization", description:"Technical and content search ranking strategies.", icon: Target, color:"text-emerald-600 bg-emerald-50 border-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30 dark:border-emerald-900/50" },
 { name:"Analytics Tracking", description:"Google Analytics 4 & Custom Dashboards.", icon: BarChart, color:"text-amber-600 bg-amber-50 border-amber-100 dark:text-amber-400 dark:bg-amber-900/30 dark:border-amber-900/50" },
 { name:"Marketing Automation", description:"CRM integrations (HubSpot, Salesforce).", icon: Workflow, color:"text-rose-600 bg-rose-50 border-rose-100 dark:text-rose-400 dark:bg-rose-900/30 dark:border-rose-900/50" },
 { name:"Paid Ads Management", description:"Meta, Google, and LinkedIn targeted campaigns.", icon: Megaphone, color:"text-blue-600 bg-blue-50 border-blue-100 dark:text-blue-400 dark:bg-blue-900/30 dark:border-blue-900/50" },
 ]
 }
];

export default function TechStack() {
 const [activeCategory, setActiveCategory] = useState<string>("web");

 const activeData = categories.find(c => c.id === activeCategory) || categories[0];

 return (
 <motion.section 
 initial={{ opacity: 0, y: 80 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-50px" }}
 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 id="tech-stack" 
 className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
 >

 <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
 
 {/* Header */}
 <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
 <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-900 dark:bg-indigo-900/20 dark:text-indigo-400 shadow-sm">
 <Sparkles className="w-4 h-4" />
 <span className="text-xs font-bold tracking-widest uppercase">Our Expertise</span>
 </div>
 <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
 The Technology Driving Your Growth
 </h2>
 <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
 We leverage industry-leading tools and frameworks across development, AI, and marketing to deliver scalable, high-performance solutions.
 </p>
 </div>

 {/* Content Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 
 {/* Category Selector */}
 <div className="lg:col-span-4 flex flex-col gap-3">
 {categories.map((cat) => {
 const isActive = activeCategory === cat.id;
 return (
 <div key={cat.id} className="flex flex-col gap-2">
 <button
 onClick={() => setActiveCategory(cat.id)}
 className={`relative p-5 rounded-2xl text-left transition-all duration-300 border ${
 isActive 
 ?"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 border-indigo-200 dark:border-indigo-700 shadow-md" 
 :"bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-200 dark:hover:border-slate-700 hover:shadow"
 }`}
 >
 {isActive && (
 <motion.div
 layoutId="active-indicator"
 className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-indigo-600 rounded-r-full"
 />
 )}
 <h3 className={`font-bold text-lg mb-1 ${isActive ?"text-indigo-600 dark:text-indigo-400" :"text-slate-700 dark:text-slate-200"}`}>
 {cat.title}
 </h3>
 <p className={`text-sm leading-relaxed ${isActive ?"text-slate-600 dark:text-slate-300" :"text-slate-500 dark:text-slate-400"}`}>
 {cat.subtitle}
 </p>
 </button>
 
 {/* Mobile Accordion Details Display */}
 <AnimatePresence>
 {isActive && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height:"auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3 }}
 className="lg:hidden overflow-hidden"
 >
 <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col mb-2 mt-2">
 {/* Top Image Banner */}
 <div className="relative h-48 sm:h-64 w-full overflow-hidden flex-shrink-0">
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
 <img 
 src={cat.image} 
 alt={cat.title}
 className="w-full h-full object-cover"
 />
 <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 z-20">
 <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{cat.title}</h3>
 <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
 <CheckCircle2 className="w-4 h-4 text-emerald-400" />
 <span>Industry Standard Tools</span>
 </div>
 </div>
 </div>

 {/* Tech Grid */}
 <div className="p-6 sm:p-8 grid grid-cols-1 gap-4">
 {cat.items.map((item, idx) => {
 const Icon = item.icon;
 return (
 <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
 <div className={`p-3 rounded-xl border flex-shrink-0 ${item.color}`}>
 <Icon className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-1">{item.name}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>

 {/* Details Display (Desktop Only) */}
 <div className="hidden lg:flex lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden min-h-[500px] flex-col">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeCategory}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 viewport={{ once: true, margin:"-20px" }}
 transition={{ duration: 0.3 }}
 className="flex flex-col h-full"
 >
 {/* Top Image Banner */}
 <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
 <img 
 src={activeData.image} 
 alt={activeData.title}
 className="w-full h-full object-cover"
 />
 <div className="absolute bottom-6 left-8 z-20">
 <h3 className="text-3xl font-black text-white mb-2">{activeData.title}</h3>
 <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
 <CheckCircle2 className="w-4 h-4 text-emerald-400" />
 <span>Industry Standard Tools</span>
 </div>
 </div>
 </div>

 {/* Tech Grid */}
 <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
 {activeData.items.map((item, idx) => {
 const Icon = item.icon;
 return (
 <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-800">
 <div className={`p-3 rounded-xl border flex-shrink-0 ${item.color}`}>
 <Icon className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-bold text-slate-50 text-lg mb-1">{item.name}</h4>
 <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
 </div>
 </div>
 );
 })}
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 </div>
 </div>
 </motion.section>
 );
}
