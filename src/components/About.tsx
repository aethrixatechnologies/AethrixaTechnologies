import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef as any, { once: false, amount: 0.1 });

  // 3D Hover Effect state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Stats incremental counters
  const [projectsCount, setProjectsCount] = useState(0);
  const [industriesCount, setIndustriesCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [supportHours, setSupportHours] = useState(0);


  useEffect(() => {
    if (isInView) {
      // Animate counters
      let pLimit = 50;
      let iLimit = 20;
      let sLimit = 98;
      let supLimit = 24;

      const pInterval = setInterval(() => {
        setProjectsCount((prev) => {
          if (prev >= pLimit) {
            clearInterval(pInterval);
            return pLimit;
          }
          return prev + 1;
        });
      }, 40);

      const iInterval = setInterval(() => {
        setIndustriesCount((prev) => {
          if (prev >= iLimit) {
            clearInterval(iInterval);
            return iLimit;
          }
          return prev + 1;
        });
      }, 80);

      const sInterval = setInterval(() => {
        setSatisfactionCount((prev) => {
          if (prev >= sLimit) {
            clearInterval(sInterval);
            return sLimit;
          }
          return prev + 1;
        });
      }, 25);

      const supInterval = setInterval(() => {
        setSupportHours((prev) => {
          if (prev >= supLimit) {
            clearInterval(supInterval);
            return supLimit;
          }
          return prev + 1;
        });
      }, 80);

      return () => {
        clearInterval(pInterval);
        clearInterval(iInterval);
        clearInterval(sInterval);
        clearInterval(supInterval);
      };
    }
  }, [isInView]);

  const stats = [
    { label: "Projects Delivered Successfully", value: `${projectsCount}+` },
    { label: "Sectors & Industries Automated", value: `${industriesCount}+` },
    { label: "Client Satisfaction Metrics", value: `${satisfactionCount}%` },
    { label: "Continuous Support Availability", value: `${supportHours}/7` }
  ];


  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      ref={containerRef}
      id="about"
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent overflow-hidden relative w-full"
    >
      {/* Decorative Radial Aurora Lights removed */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Left Side: Editorial Typography storytelling */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6 text-left"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              COGNITIVE ENGINEERING
            </span>
          </div>

          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-100 tracking-tight leading-tight">
            Engineering The{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Future Version
            </span>{" "}
            Of Business With Automated Intelligence.
          </h2>

          <p className="font-sans text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Aethrixa Technologies is a world-renowned software engineering and AI solutions agency. We build and deploy innovative AI interfaces, web applications, mobile platforms, and serverless architectures designed to automate operations and catalyze digital growth.
          </p>

          <p className="font-sans text-slate-400 text-sm leading-relaxed">
            From cognitive bots to robust cloud applications, our mission is to eliminate operational hurdles, minimize computing costs, and empower enterprise companies to conquer market share at speed.
          </p>

          {/* Stats Counters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 border-t border-slate-800 pt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-brand-indigo font-mono">
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Attractive Visual Image */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative perspective-[1000px] mt-8 lg:mt-0 w-full overflow-hidden sm:overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[550px] aspect-square flex items-center justify-center mx-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glowing Backdrop for Image removed */}
            
            <motion.img 
              src="/globe-transparent-new.png" 
              alt="Global AI Infrastructure" 
              className="w-full h-full object-contain relative z-10 cursor-pointer transform-gpu"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                z: 50,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
