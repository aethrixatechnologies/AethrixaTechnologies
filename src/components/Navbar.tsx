import React, { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Cpu, Network, Compass, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "AI Showcase", href: "#ai-showcase" },
    { 
      name: "Projects", 
      href: "#portfolio",
      submenu: [
        { name: "Web Apps", href: "#portfolio" },
        { name: "Mobile Apps", href: "#portfolio" },
        { name: "AI solutions", href: "#portfolio" },
        { name: "Marketing campaigns", href: "#portfolio" }
      ]
    },
    { name: "Why Us", href: "#why-us" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Growth", href: "#growth" },
    { name: "About", href: "#about" },
  ];

  // Monitor scroll for header background style morphing
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection to highlight the correct visible section automatically
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when section occupies center of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setOpenSubmenu(null);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  const handleScrollClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-center pointer-events-none select-none box-border">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className={`w-full transition-all duration-500 pointer-events-auto relative border ${
          mobileMenuOpen
            ? "max-w-5xl rounded-3xl border-slate-200/50 bg-white/95 backdrop-blur-xl shadow-2xl py-3 px-4 sm:px-6"
            : scrolled
            ? "max-w-5xl rounded-full border-slate-200/50 bg-white/75 backdrop-blur-xl shadow-[0_12px_40px_-12px_rgba(30,41,59,0.12),0_0_15px_-3px_rgba(99,102,241,0.06)] py-2 px-4 sm:px-6"
            : "max-w-7xl rounded-[2rem] border-transparent py-3 px-4 sm:px-6 md:px-8 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-12">
          {/* LOGO ENGINE */}
          <a
            href="#welcome"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105">
              <img src="/logo.png" alt="Company Logo" className="h-12 sm:h-16 w-auto object-contain drop-shadow-sm invert" />
            </div>
          </a>

          {/* Desktop Navigation Link Cluster with Magnetic Sliding Background Pill */}
          <nav className="hidden 2xl:flex items-center gap-0.5 bg-slate-100/55 p-1 rounded-full border border-slate-200/40 relative">
            {navLinks.map((link) => {
              const cleanedId = link.href.replace("#", "");
              const isActive = activeSection === cleanedId;
              return (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300 relative inline-flex items-center gap-1 ${
                      isActive ? "text-indigo-600 font-extrabold" : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {/* Sliding capsule indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-capsule"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(99,102,241,0.08),0_1px_2px_rgba(99,102,241,0.03)] border border-slate-100"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    {link.submenu && (
                      <svg className="w-3 h-3 relative z-10 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Desktop Dropdown */}
                  {link.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-2 min-w-[200px] flex flex-col gap-1">
                        {link.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleScrollClick(e, subItem.href)}
                            className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-colors whitespace-nowrap"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden 2xl:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, "#contact")}
              className="flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-[11px] font-bold shadow-md shadow-slate-900/5 transition-all duration-300 group"
            >
              <span>Build Solution</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Collapse Toggle Trigger */}
          <div className="2xl:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-2 sm:p-2.5 rounded-full text-slate-800 hover:bg-slate-100 hover:text-indigo-600 transition-all outline-none focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden 2xl:hidden w-full"
            >
              <div className="flex flex-col gap-4 text-left pt-6 pb-2 mt-4 border-t border-slate-100 relative">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50" />
              
              <div className="text-[10px] font-mono font-extrabold text-slate-400 tracking-widest flex items-center gap-2 border-b border-slate-100 pb-3 mt-1">
                <Compass className="w-4 h-4 text-indigo-500 animate-[spin_4s_linear_infinite]" />
                <span>NAVIGATION MENU</span>
              </div>
              
              <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-1 pb-2">
                {navLinks.map((link) => {
                  const cleanedId = link.href.replace("#", "");
                  const isActive = activeSection === cleanedId;
                  
                  if (link.submenu) {
                    const isSubmenuOpen = openSubmenu === link.name;
                    return (
                      <div key={link.name} className="flex flex-col gap-1.5 mt-1 mb-1">
                        <div 
                          className={`p-3.5 rounded-xl border transition-all flex flex-col gap-3 cursor-pointer ${
                            isActive || isSubmenuOpen
                              ? "border-indigo-100 bg-indigo-50/30 text-indigo-600 shadow-sm"
                              : "border-slate-100 hover:border-slate-200 text-slate-600 hover:text-slate-900 bg-white hover:shadow-sm"
                          }`}
                          onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.name)}
                        >
                          <div className="flex justify-between items-center px-1">
                            <span className="text-sm font-bold">{link.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold bg-white border border-slate-200 text-indigo-600 px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">Categories</span>
                              <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isSubmenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {isSubmenuOpen && (
                              <motion.div 
                                key={`submenu-${link.name}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100/50">
                                  {link.submenu.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleScrollClick(e, subItem.href);
                                      }}
                                      className="group p-3 rounded-xl text-xs font-bold text-slate-600 hover:text-indigo-600 hover:bg-white bg-slate-100/50 transition-all duration-300 border border-transparent hover:border-indigo-100 flex items-center gap-3"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300" />
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollClick(e, link.href)}
                      className={`p-3.5 rounded-xl border text-sm font-bold text-left transition-all flex justify-between items-center ${
                        isActive
                          ? "border-indigo-100 bg-indigo-50/80 text-indigo-600 shadow-sm"
                          : "border-slate-100 hover:border-slate-200 text-slate-600 hover:text-slate-900 bg-white hover:shadow-sm hover:-translate-y-0.5"
                      }`}
                    >
                      {link.name}
                      {isActive && <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />}
                    </a>
                  );
                })}
              </div>

              <div className="h-[1px] bg-slate-100 my-1" />

              <a
                href="#contact"
                onClick={(e) => handleScrollClick(e, "#contact")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-indigo-600 hover:to-indigo-500 text-white text-center text-xs font-bold shadow-lg shadow-slate-900/20 hover:shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Initiate Consultation Discovery</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
