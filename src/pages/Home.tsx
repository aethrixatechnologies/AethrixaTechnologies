import React from "react";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import AIShowcase from "../components/AIShowcase";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import TechStack from "../components/TechStack";
import DigitalGrowth from "../components/DigitalGrowth";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Breathtaking intro dashboards */}
      <Hero />
      
      {/* Continuously looping partner stream */}
      <Trust />
      
      {/* Earth telemetry coordinates */}
      <About />
      
      {/* Fully filterable distinct items catalog */}
      <Services />
      
      {/* Detailed connector timeline levels */}
      <Process />
      
      {/* Dynamic interactive chatbots & trigger toggles */}
      <AIShowcase />
      
      {/* Filtered perspectives cards board */}
      <Portfolio />
      
      {/* Strategic metrics growth progress metrics */}
      <WhyChooseUs />
      
      {/* Glass testimonial auto-shifted panels loop */}
      <Testimonials />
      
      {/* Orbiting technology systems core */}
      <TechStack />
      
      {/* Functional area graph conversion recalculation */}
      <DigitalGrowth />
      
      {/* Aesthetic consultations calling trigger banner */}
      <CTA />
      
      {/* Encrypted validated lead information corridor */}
      <Contact />
    </main>
  );
}
