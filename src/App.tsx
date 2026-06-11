/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    // Expose lenis to window so other components can trigger smooth scroll
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#0A1128] to-[#04060A] text-white font-sans selection:bg-[#00F0FF]/30 selection:text-white antialiased relative">
        {/* Global Decorative Backgrounds */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse-soft mix-blend-screen pointer-events-none" />
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse-soft mix-blend-screen pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none animate-float-slow z-0" />
        
        <AnimatePresence mode="wait">
          {!isLoaded ? (
            <Preloader key="welcome-screen" onComplete={() => setIsLoaded(true)} />
          ) : (
            <div key="app-content" className="relative flex flex-col min-h-screen z-10">
              {/* High-Fidelity Navigation */}
              <Navbar />
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
              
              {/* Secure copyright system */}
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}
