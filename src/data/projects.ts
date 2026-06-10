import { ComponentType } from "react";
import { Sparkles, Smartphone, Code } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "web" | "mobile" | "ai" | "marketing";
  categoryLabel: string;
  summary: string;
  metrics: string;
  metricsLabel: string;
  gradient: string;
  iconName: string; // Store string to dynamically get icon component
  
  // Detailed info for the subpage
  technologies: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  inProgress?: boolean;
  
  // Additional details
  role?: string;
  duration?: string;
  features?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "miss-queen",
    title: "Miss Queen E-commerce Website",
    category: "web",
    categoryLabel: "WEB APPS",
    summary: "A premium e-commerce platform specializing in watches and imitation products, offering a seamless and elegant shopping experience.",
    metrics: "3x",
    metricsLabel: "Sales Conversion Rate",
    gradient: "from-rose-100 to-pink-100/60",
    iconName: "Sparkles",
    technologies: ["Next.js", "Tailwind CSS", "CashFree", "Node.js", "Express.js", "mongodb"],
    challenge: "The client needed a custom, elegant e-commerce platform to showcase their extensive catalog of watches and imitation products. Their previous setup lacked the premium feel required for their target audience, and the checkout process was causing significant cart abandonment.",
    solution: "We engineered a modern e-commerce architecture using Next.js and React. We implemented high-quality image galleries, intuitive product filtering, and integrated CashFree for seamless payments, resulting in a premium user journey that drastically reduced bounce rates and improved sales.",
    results: [
      { label: "Sales Conversion Rate", value: "3x Increase" },
      { label: "Mobile Bounce Rate", value: "-45%" },
      { label: "Average Order Value", value: "+22%" }
    ],
    role: "Full-Stack E-commerce Development",
    duration: "4 Months",
    features: [
      "Custom shopping cart and checkout flow",
      "CashFree payment gateway integration",
      "Dynamic product filtering and search",
      "Admin dashboard for inventory management",
      "High-performance image optimization"
    ]
  },
  {
    id: "khedut-parivar",
    title: "Khedut Parivar Android App",
    category: "mobile",
    categoryLabel: "MOBILE APPS",
    summary: "An AI-powered agricultural mobile app that analyzes crop images to provide instant health assessments and actionable farming suggestions.",
    metrics: "10k+",
    metricsLabel: "Active Farmers",
    gradient: "from-emerald-100 to-green-100",
    iconName: "Smartphone",
    technologies: ["React Native", "AI/ML Models", "Firebase", "Node.js", "REST APIs"],
    challenge: "Farmers lacked an accessible way to quickly diagnose crop diseases and get expert advice in their native languages, leading to delayed treatments and reduced yields. They needed a reliable tool that could work even in low-connectivity areas.",
    solution: "We developed an AI-driven Android application where farmers can capture crop images for instant analysis. The app provides actionable suggestions, fully supports Gujarati, Hindi, and English to ensure wide accessibility, and includes offline capabilities for core features.",
    results: [
      { label: "Active Farmers", value: "10,000+" },
      { label: "Daily Engagement", value: "24 Mins/User" },
      { label: "App Rating", value: "4.7 Stars" }
    ],
    inProgress: true,
    role: "Mobile App & AI Integration",
    duration: "6 Months",
    features: [
      "Real-time crop disease detection using AI",
      "Multi-lingual support (Gujarati, Hindi, English)",
      "Weather forecasting and alerts",
      "Community forum for farmers",
      "Offline mode support for remote areas"
    ]
  },
  {
    id: "foodify",
    title: "Foodify Android App",
    category: "mobile",
    categoryLabel: "MOBILE APPS",
    summary: "An intuitive food delivery mobile app with real-time order tracking, dynamic routing, and personalized recommendations.",
    metrics: "4.8 Stars",
    metricsLabel: "App Store Rating",
    gradient: "from-orange-100 to-amber-100/60",
    iconName: "Smartphone",
    technologies: ["React Native", "Google Maps API", "Firebase", "Node.js"],
    challenge: "The local food delivery market was suffering from high latency in order tracking and inefficient delivery routing, leading to cold food and unhappy customers. The platform also needed to handle high concurrency during peak hours.",
    solution: "A robust native Android application was built utilizing real-time geolocation tracking and a custom dynamic routing algorithm. We implemented machine learning for personalized restaurant recommendations based on past orders and time of day, optimizing the entire delivery lifecycle.",
    results: [
      { label: "App Store Rating", value: "4.8 / 5.0" },
      { label: "Delivery Time", value: "-15 Mins" },
      { label: "Order Volume", value: "+300% YoY" }
    ],
    inProgress: true,
    role: "Mobile App Development",
    duration: "5 Months",
    features: [
      "Real-time GPS order tracking",
      "Dynamic routing for delivery partners",
      "Personalized food recommendations",
      "In-app chat support",
      "Secure multiple payment options"
    ]
  },
  {
    id: "restaurant-custom",
    title: "Restaurant Custom Website",
    category: "web",
    categoryLabel: "WEB APPS",
    summary: "A custom-built restaurant website featuring online reservations, interactive menus, and an immersive brand experience.",
    metrics: "+150%",
    metricsLabel: "Online Bookings",
    gradient: "from-sky-100 to-blue-100/60",
    iconName: "Code",
    technologies: ["Next.js", "Express.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    challenge: "A high-end restaurant needed a digital presence that matched their premium dining experience. Their previous site was difficult to navigate, lacked an integrated reservation system, and failed to capture the ambiance of the physical location.",
    solution: "We created a visually stunning, immersive web experience with fluid animations and high-resolution imagery. We integrated a seamless, custom-styled reservation widget and a dynamic menu system that the client can easily update, perfectly reflecting their brand identity.",
    results: [
      { label: "Online Bookings", value: "+150%" },
      { label: "Time on Site", value: "+4 Minutes" },
      { label: "Mobile Traffic", value: "65% Total" }
    ],
    role: "Web Design & Development",
    duration: "2 Months",
    features: [
      "Custom interactive table reservation system",
      "Dynamic digital menu management",
      "Fluid page transitions and animations",
      "Responsive mobile-first design",
      "SEO optimized architecture"
    ]
  }
];

// Helper to get icon component
export const getProjectIcon = (iconName: string): ComponentType<any> => {
  switch (iconName) {
    case 'Sparkles': return Sparkles;
    case 'Smartphone': return Smartphone;
    case 'Code': return Code;
    default: return Code;
  }
};
