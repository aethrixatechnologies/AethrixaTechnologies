import React from "react";
import { motion } from "motion/react";

interface Scroll3DWrapperProps {
  children: React.ReactNode;
}

export default function Scroll3DWrapper({ children }: Scroll3DWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 150, rotateX: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformPerspective: 1200,
        transformOrigin: "top center",
      }}
      className="w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}
