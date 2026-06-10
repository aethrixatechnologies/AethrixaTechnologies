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
 { name:"React & Next.js", description:"Dynamic, SEO-friendly frontends.", icon: Layers, color:"text-sky-500 bg-sky-50 border-sky-100" },
 { name:"Node.js & Express", description:"Robust and scalable backend systems.", icon: Server, color:"text-emerald-500 bg-emerald-50 border-emerald-100" },
 { name:"Tailwind CSS", description:"Utility-first, responsive UI styling.", icon: Layout, color:"text-cyan-500 bg-cyan-50 border-cyan-100" },
 { name:"TypeScript", description:"Type-safe, maintainable codebases.", icon: Code, color:"text-blue-600 bg-blue-50 border-blue-100" },
 ]
 },
 {
 id:"app",
 title:"App Development",
 subtitle:"Native and cross-platform mobile experiences for iOS and Android.",
 image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"Flutter", description:"Beautiful cross-platform apps from a single codebase.", icon: MonitorSmartphone, color:"text-sky-400 bg-sky-50 border-sky-100" },
 { name:"React Native", description:"Native apps built with React principles.", icon: Smartphone, color:"text-indigo-500 bg-indigo-50 border-indigo-100" },
 { name:"iOS Native (Swift)", description:"High-performance native Apple applications.", icon: AppWindow, color:"text-slate-800 bg-slate-100 border-slate-200" },
 { name:"Android (Kotlin)", description:"Modern, secure native Android apps.", icon: Cpu, color:"text-green-500 bg-green-50 border-green-100" },
 ]
 },
 {
 id:"ai",
 title:"AI Automation",
 subtitle:"Intelligent systems and workflows powered by cutting-edge machine learning.",
 image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"Python Core", description:"The foundation of modern AI data processing.", icon: Bot, color:"text-blue-500 bg-blue-50 border-blue-100" },
 { name:"LLM Integration", description:"OpenAI, Claude, and custom model APIs.", icon: Brain, color:"text-violet-600 bg-violet-50 border-violet-100" },
 { name:"LangChain", description:"Advanced AI agent workflows and pipelines.", icon: Network, color:"text-amber-500 bg-amber-50 border-amber-100" },
 { name:"Predictive ML", description:"TensorFlow and PyTorch model deployment.", icon: Sparkles, color:"text-fuchsia-500 bg-fuchsia-50 border-fuchsia-100" },
 ]
 },
 {
 id:"marketing",
 title:"Digital Marketing",
 subtitle:"Data-driven strategies to maximize reach, engagement, and conversion.",
 image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
 items: [
 { name:"SEO Optimization", description:"Technical and content search ranking strategies.", icon: Target, color:"text-emerald-500 bg-emerald-50 border-emerald-100" },
 { name:"Analytics Tracking", description:"Google Analytics 4 & Custom Dashboards.", icon: BarChart, color:"text-amber-500 bg-amber-50 border-amber-100" },
 { name:"Marketing Automation", description:"CRM integrations (HubSpot, Salesforce).", icon: Workflow, color:"text-rose-500 bg-rose-50 border-rose-100" },
 { name:"Paid Ads Management", description:"Meta, Google, and LinkedIn targeted campaigns.", icon: Megaphone, color:"text-blue-500 bg-blue-50 border-blue-100" },
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
 className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-slate-50 relative w-full overflow-hidden"
 >
 {/* Background decorations */}
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-[100px] pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-full blur-[100px] pointer-events-none" />

 <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
 
 {/* Header */}
 <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
 <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 text-indigo-600 shadow-sm">
 <Sparkles className="w-4 h-4" />
 <span className="text-xs font-bold tracking-widest uppercase">Our Expertise</span>
 </div>
 <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
 The Technology Driving Your Growth
 </h2>
 <p className="text-lg text-slate-600 font-medium">
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
 ?"bg-white border-indigo-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
 :"bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:shadow"
 }`}
 >
 {isActive && (
 <motion.div
 layoutId="active-indicator"
 className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-indigo-600 rounded-r-full"
 />
 )}
 <h3 className={`font-bold text-lg mb-1 ${isActive ?"text-indigo-900" :"text-slate-700"}`}>
 {cat.title}
 </h3>
 <p className={`text-sm leading-relaxed ${isActive ?"text-slate-600" :"text-slate-500"}`}>
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
 <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col mb-2 mt-2">
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
 <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
 <div className={`p-3 rounded-xl border flex-shrink-0 ${item.color}`}>
 <Icon className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 text-lg mb-1">{item.name}</h4>
 <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
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
 <div className="hidden lg:flex lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[500px] flex-col">
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
 <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
 <div className={`p-3 rounded-xl border flex-shrink-0 ${item.color}`}>
 <Icon className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 text-lg mb-1">{item.name}</h4>
 <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
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
