import React, { useState, ComponentType } from"react";
import { motion, AnimatePresence } from"motion/react";
import { TrendingUp, Sparkles, DollarSign, Search, Target, Users, ArrowUpRight, BarChart3 } from"lucide-react";

interface ChannelsMetric {
 id:"seo" |"google" |"meta" |"social";
 label: string;
 topic: string;
 icon: ComponentType<any>;
 points: string[];
 metrics: string;
 metricLabel: string;
 color: string;
 graphCoordinates: number[]; // Percentage heights for 6 month columns
}

export default function DigitalGrowth() {
 const [activeChannel, setActiveChannel] = useState<"seo" |"google" |"meta" |"social">("seo");

 const channels: ChannelsMetric[] = [
 {
 id:"seo",
 label:"SEO Optimization Engine",
 topic:"Command Organic Placements",
 icon: Search,
 points: [
"Semantic keyword structure architecture mapping",
"Pristine core web vitals optimization (100 index speed)",
"Premium quality authority backlinking loops",
"Dynamic automated site outline indexes"
 ],
 metrics:"+320% Hits",
 metricLabel:"Average Organic Volume Traffic Increase",
 color:"from-sky-500 to-indigo-600",
 graphCoordinates: [25, 40, 35, 60, 78, 100]
 },
 {
 id:"google",
 label:"Google Paid Campaigns",
 topic:"Intelligent Search Bidding",
 icon: DollarSign,
 points: [
"Intent-grounded low CPA keyword algorithms",
"Targeted performance max scaling filters",
"Dynamic conversion track triggers setup",
"A/B heading copy optimization"
 ],
 metrics:"5.8X ROAS",
 metricLabel:"Average Conversion Return On Ad Spend",
 color:"from-amber-500 to-orange-600",
 graphCoordinates: [35, 48, 55, 45, 78, 92]
 },
 {
 id:"meta",
 label:"Meta Creative Campaigns",
 topic:"Retarget Lookalike Scales",
 icon: Target,
 points: [
"Highly aesthetic visual frame vectors layout",
"Dynamic custom pixel retarget triggers",
"High affinity buyer audience matching",
"Custom lookalike conversion matrices"
 ],
 metrics:"4.2X ROAS",
 metricLabel:"Meta Conversion Yield Margin",
 color:"from-pink-500 to-rose-650",
 graphCoordinates: [20, 38, 50, 65, 55, 88]
 },
 {
 id:"social",
 label:"Social Media Strategy",
 topic:"Catalyze Community Support",
 icon: Users,
 points: [
"Interactive digital assets storytelling",
"Continuous customer interest acquisition loops",
"Strategic industry authority posts",
"Micro-influencer content network setup"
 ],
 metrics:"+125% Eng",
 metricLabel:"Average Organic Interest Resonance",
 color:"from-violet-500 to-brand-purple",
 graphCoordinates: [15, 30, 48, 42, 68, 80]
 }
 ];

 const currentChannel = channels.find((c) => c.id === activeChannel) || channels[0];

 return (
 <motion.section 
 initial={{ opacity: 0, y: 80 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-50px" }}
 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 id="growth" 
 className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
 >
 {/* Decorative gradient soft radial lines */}
 <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-[140px] pointer-events-none" />
 <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-cyan-150/10 rounded-full blur-[100px] pointer-events-none" />

 <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
 {/* Accent Tag */}
 <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-white mb-4 shadow-sm">
 <TrendingUp className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
 <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500">
 DIGITAL HYPER-GROWTH PLATFORM
 </span>
 </div>

 {/* Headline */}
 <h2 className="font-display font-black text-3xl md:text-5xl text-slate-800 tracking-tight mb-4 max-w-2xl text-center">
 Catalyze Real Traffic and Customer Acquisition Rates.
 </h2>

 {/* Subtext */}
 <p className="font-sans text-slate-600 text-base md:text-lg max-w-xl mb-16 text-center">
 We don't rely on hope. All growth routines are backed by real search intent, optimized bidding, and interactive data analysis.
 </p>

 {/* Channels selector and detail columns split */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full text-left">
 
 {/* Left Column Selector buttons */}
 <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
 {channels.map((chan) => {
 const ChanIcon = chan.icon;
 const isSelected = activeChannel === chan.id;
 return (
 <button
 key={chan.id}
 onClick={() => setActiveChannel(chan.id)}
 className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer relative group ${
 isSelected
 ?"bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-950/10 scale-102"
 :"bg-slate-50 border-slate-200 hover:border-violet-100 text-slate-700 hover:bg-white"
 }`}
 >
 <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
 isSelected ?"bg-white text-cyan-400" :"bg-white border text-indigo-500"
 }`}>
 <ChanIcon className="w-5 h-5" />
 </div>
 <div className="flex-1">
 <h3 className="font-display font-bold text-xs uppercase tracking-wider leading-none mb-1.5">
 {chan.id.toUpperCase()} Optimization
 </h3>
 <span className={`text-xs block font-bold leading-none ${isSelected ?"text-slate-350" :"text-slate-500"}`}>
 {chan.label}
 </span>
 </div>
 <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ?"text-cyan-400 translate-x-0.5" :"text-slate-350 group-hover:translate-x-0.5"}`} />
 </button>
 );
 })}
 </div>

 {/* Right Column: Visual Spline Output and Points */}
 <div className="lg:col-span-8 glass-card border border-white/85 p-6 md:p-8 rounded-3xl shadow-xl bg-slate-50 flex flex-col justify-between min-h-[440px]">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeChannel}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.2 }}
 className="flex-1 flex flex-col lg:flex-row gap-8 justify-between"
 >
 {/* Specific details and metrics checkboxes */}
 <div className="flex-1 space-y-6">
 <div className="space-y-1">
 <span className="font-mono text-[9px] font-extrabold text-brand-purple tracking-widest uppercase block">
 ACTIVE CHANNELS INTEGRATION
 </span>
 <h3 className="font-display font-black text-slate-800 text-xl">
 {currentChannel.label}
 </h3>
 <p className="text-brand-indigo font-bold text-xs font-mono lowercase">
 // {currentChannel.topic}
 </p>
 </div>

 <div className="space-y-3">
 {currentChannel.points.map((pt, p_idx) => (
 <div key={p_idx} className="flex items-start gap-2 text-xs font-semibold text-slate-500 text-left">
 <Sparkles className="w-3.5 h-3.5 text-indigo-500 mt-0.5 flex-shrink-0 animate-pulse" />
 <span>{pt}</span>
 </div>
 ))}
 </div>

 {/* Highlight Metric */}
 <div className="border-t border-slate-200 pt-5 bg-white p-4 rounded-2xl border flex items-center justify-between">
 <div>
 <span className="block font-display font-extrabold text-2xl text-slate-900 font-mono">
 {currentChannel.metrics}
 </span>
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
 {currentChannel.metricLabel}
 </span>
 </div>
 <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 font-bold font-mono text-xs shadow-sm">
 OK
 </div>
 </div>
 </div>

 {/* SVG Live Graphic Plot */}
 <div className="w-full lg:w-[350px] bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-inner flex flex-col overflow-hidden max-w-full">
 <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-4 border-b pb-2">
 <span className="flex items-center gap-1">
 <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
 YIELD GRAPH SPEC
 </span>
 <span className="text-emerald-500 font-bold uppercase animate-pulse">ACTIVE FEED</span>
 </div>

 {/* SVG Bar graphs */}
 <div className="relative flex-1 w-full h-48 sm:h-40 mt-4 mb-2">
 {/* SVG Spline overlay */}
 <div className="absolute inset-0 z-10 pb-[28px] pointer-events-none">
 <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
 <path
 d={`M5,${100 - currentChannel.graphCoordinates[0]} L23,${100 - currentChannel.graphCoordinates[1]} L41,${100 - currentChannel.graphCoordinates[2]} L59,${100 - currentChannel.graphCoordinates[3]} L77,${100 - currentChannel.graphCoordinates[4]} L95,${100 - currentChannel.graphCoordinates[5]}`}
 fill="none"
 stroke="currentColor"
 strokeWidth="3"
 vectorEffect="non-scaling-stroke"
 className="stroke-indigo-400 drop-shadow-md"
 />
 </svg>
 </div>

 {/* Bars matching graph coordinates */}
 <div className="absolute inset-0 flex justify-between px-2 sm:px-4 z-20 pb-[20px]">
 {currentChannel.graphCoordinates.map((height, h_idx) => (
 <div key={h_idx} className="w-8 h-full relative group cursor-pointer">
 <div 
 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 sm:w-3 bg-gradient-to-t from-sky-200 to-indigo-300 group-hover:from-indigo-400 group-hover:to-purple-500 rounded-t-full transition-all duration-500 shadow-sm"
 style={{ height: `${height * 0.85}%` }}
 >
 <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] font-extrabold text-slate-700 bg-white/90 px-1 py-0.5 rounded shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
 {height}%
 </div>
 </div>
 <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold font-mono text-slate-500 group-hover:text-indigo-600 transition-colors">M0{h_idx + 1}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Status index labels */}
 <div className="mt-4 pt-3 border-t text-[9px] font-semibold text-slate-400 flex items-center gap-1 justify-center leading-none">
 <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
 <span>TRAFFIC VELOCITY: OPTIMIZED SYSTEM</span>
 </div>
 </div>

 </motion.div>
 </AnimatePresence>
 </div>

 </div>
 </div>
 </motion.section>
 );
}
