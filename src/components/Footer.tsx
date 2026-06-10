import React, { MouseEvent } from "react";
import { motion } from "motion/react";
import { Cpu, Github, Linkedin, Twitter, Sparkles, Send, Network } from "lucide-react";

export default function Footer() {
  const handleScrollClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-slate-900 text-white relative w-full overflow-hidden pt-20 pb-8 px-4 md:px-12 lg:px-24 border-t border-slate-950"
    >
      {/* Decorative cosmic dark particles inside footer */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col">
        {/* Upper Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-800 pb-16">
          
          {/* Col 1 Brand details block */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#welcome" onClick={(e) => handleScrollClick(e, "#welcome")} className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="/logo.png" alt="Company Logo" className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              </div>
            </a>
            
            <p className="font-sans text-slate-400 text-xs leading-relaxed max-w-sm">
              World-renowned, award-winning software engineering and custom AI solutions agency helping companies conquer market authority at hyper speed.
            </p>

            {/* Social connectors */}
            <div className="flex gap-2.5 pt-2">
              {[
                { label: "Twitter", href: "https://twitter.com", icon: Twitter },
                { label: "Linkedin", href: "https://linkedin.com", icon: Linkedin },
                { label: "Github", href: "https://github.com", icon: Github }
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-lg bg-slate-850 border border-slate-800 text-slate-400 hover:text-white hover:border-violet-100/50 flex items-center justify-center transition-all shadow-sm"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2 Services */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display font-extrabold text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-4 flex items-center gap-1">
              <Network className="w-3.5 h-3.5 text-brand-blue animate-spin" />
              <span>CORE CAPABILITIES</span>
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {["AI Automation Systems", "Cognitive LLM Chatbots", "Custom React Software", "Mobile App Portals", "Cloud SQL SQL setups", "Digital Conversion optimization"].map((link) => (
                <li key={link}>
                  <a href="#services" onClick={(e) => handleScrollClick(e, "#services")} className="hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 Company */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display font-extrabold text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-4">
              AETHRIXA CORP
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {[
                { name: "About Storytelling", href: "#about" },
                { name: "Technical Blueprint", href: "#process" },
                { name: "Simulated AI Lab", href: "#ai-showcase" },
                { name: "Customer Portfolio", href: "#portfolio" },
                { name: "Why Us benchmarks", href: "#why-us" },
                { name: "Interactive Tech Stack", href: "#tech-stack" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} onClick={(e) => handleScrollClick(e, item.href)} className="hover:text-brand-purple transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 Resources */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-display font-extrabold text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-4">
              STANDARDS
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {["Timezone UTC", "SLA Guarantees", "Privacy Schema", "ISO Audits v2", "Terms & Licencing"].map((res) => (
                <li key={res} className="hover:text-white cursor-pointer transition-colors">
                  {res}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright row with Glowing Pulsing Divider track */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400 gap-4">
          <div className="flex items-center gap-1.5 font-bold">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>AETHRIXA-PRO NETWORKS OPERATIONAL: OK 99.9% UPTIME</span>
          </div>

          <div className="text-center md:text-right">
            <span>© {currentYear} Aethrixa Technologies. All Rights Secured under TLS protocols.</span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
