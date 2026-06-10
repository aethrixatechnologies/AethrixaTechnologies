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
      <div className="min-h-screen overflow-x-clip bg-gradient-to-b from-slate-50 via-indigo-50/30 to-blue-50/40 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white antialiased">
        <AnimatePresence mode="wait">
          {!isLoaded ? (
            <Preloader key="welcome-screen" onComplete={() => setIsLoaded(true)} />
          ) : (
            <div key="app-content" className="relative flex flex-col min-h-screen">
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
