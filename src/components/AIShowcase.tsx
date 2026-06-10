import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquareCode,
  ArrowRight,
  TrendingUp,
  Cpu,
  Workflow,
  Sparkles,
  RefreshCw,
  Send,
  Database,
  Search,
  CheckCircle,
  Play
} from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function AIShowcase() {
  const [activeLabTab, setActiveLabTab] = useState<"chat" | "workflow" | "bi">("chat");

  // Chatbot state
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "Greetings! I am the Aethrixa-Pro Cognitive microagent. Select a preset query or write any software task to see a simulated AI pipeline outcome:" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const presetPrompts = [
    "Refactor server routing to serverless edge modules",
    "Create high-conversion automated ad graphics",
    "Formulate responsive SEO keywords blueprint"
  ];

  // Workflow visualizer state
  const [activeNodes, setActiveNodes] = useState<string[]>(["trigger", "llm", "db"]);
  const [isFlowing, setIsFlowing] = useState(true);

  // BI state
  const [growthScenario, setGrowthScenario] = useState<"conservative" | "aggressive">("aggressive");
  const [biPercentage, setBiPercentage] = useState(452);

  // Bot responses templates
  const getBotResponse = (prompt: string): string => {
    const p = prompt.toLowerCase();
    if (p.includes("refactor")) {
      return "### [Aethrixa AI Refactoring Engine Active]\n- **Analyzing bundle footprints:** Optimized router import paths from standard commonJS to CJS ESModule tree-shaking.\n- **Outcome:** Reduced build payload by **42%** and cold-start boots to **1.1s**.\n- **Action:** Live route synchronization saved to AWS server boundaries.";
    }
    if (p.includes("ad graphics")) {
      return "### [Holographic Creative Generation Core]\n- **Input details verified:** Target audience = Tech Founders.\n- **Creative components loaded:** Pastel glassmorphic layouts, futuristic clean outline borders, premium text shadows.\n- **Prediction score:** Estimated click-through rate = **4.85%** (industry benchmark: 1.2%).\n- **Output status:** Meta and Google ad templates compiled successfully.";
    }
    if (p.includes("seo keywords") || p.includes("keyword") || p.includes("seo")) {
      return "### [AI Semantic Context Search Engine]\n- **Primary Intent:** High purchase frequency software buyers.\n- **Mapped Keywords:** 'custom enterprise AI automations', 'next-generation headless react development'.\n- **Monthly search volume scope:** 122,000 potential visitors.\n- **Deployment status:** Mapped directly to site metadata schemas and index files.";
    }
    return `### [Aethrixa General Intelligence Output]\n- **Prompt query recognized:** "${prompt}"\n- **Solution path coordinated:** Running optimized cloud deployment sequence.\n- **Outcome:** Operations configured, telemetry diagnostics verified. System ready for custom configuration. Contact our engineering team to connect actual backend structures.`;
  };

  const handleSendChat = (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const newMessages = [...chatMessages, { sender: "user", text: textToSend } as ChatMessage];
    setChatMessages(newMessages);
    setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(textToSend);
      setChatMessages((prev) => [...prev, { sender: "bot", text: responseText }]);
      setIsTyping(false);
    }, 1200);
  };

  // Toggle active node paths in workflow simulation
  const toggleNode = (nodeId: string) => {
    setActiveNodes((prev) => {
      if (prev.includes(nodeId)) {
        return prev.filter((id) => id !== nodeId);
      }
      return [...prev, nodeId];
    });
  };

  const renderChatLab = () => (
    <motion.div
      key="chat-lab"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex-1 flex flex-col h-full"
    >
      {/* Chat logs list view */}
      <div className="flex-1 overflow-y-auto max-h-[300px] border border-indigo-50/50 bg-white dark:bg-slate-900/80 rounded-2xl p-4 mb-4 space-y-4 shadow-inner no-scrollbar">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}
          >
            <span className="text-[9px] font-bold font-mono tracking-wider text-slate-400 mb-1">
              {msg.sender === "user" ? "USER_SYSTEM" : "AETHRIXA_MICROAGENT_v1"}
            </span>
            <div
              className={`p-3.5 rounded-2xl text-xs font-sans leading-relaxed whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white rounded-br-none shadow-md shadow-indigo-100"
                  : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 text-slate-800 dark:text-slate-100 rounded-bl-none font-mono"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-3 rounded-2xl self-start max-w-[200px]">
            <RefreshCw className="w-3.5 h-3.5 text-brand-purple animate-spin" />
            <span className="text-xs font-mono font-bold text-slate-400">Streaming nodes...</span>
          </div>
        )}
      </div>

      {/* Preset Quick Chips Prompts */}
      <div className="flex flex-wrap gap-2 mb-4">
        {presetPrompts.map((preset) => (
          <button
            key={preset}
            onClick={() => handleSendChat(preset)}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-250 text-[10px] sm:text-xs font-bold text-slate-600 hover:text-brand-purple hover:border-violet-200 hover:bg-indigo-50/40 transition-all cursor-pointer"
            disabled={isTyping}
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Typing input form core */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendChat(chatInput);
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask the microagent: e.g. Design structured responsive metadata outlines..."
          className="flex-1 px-4 py-3 rounded-xl border border-slate-250 bg-white dark:bg-slate-900 text-xs font-sans text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
        />
        <button
          type="submit"
          disabled={isTyping}
          className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-900 text-white text-xs font-bold hover:bg-brand-purple flex items-center justify-center transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </motion.div>
  );

  const renderWorkflowLab = () => (
    <motion.div
      key="workflow-lab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col justify-between"
    >
      <div className="border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-inner">
        <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block mb-4">
          ROBOTIC COGNITIVE GATEWAYS (CLICK NODE TO SYNCHRONIZE PATH)
        </span>

        {/* Nodes visual network mapper drawing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center relative py-6">
          
          {/* Node 1: Trigger */}
          <div
            onClick={() => toggleNode("trigger")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              activeNodes.includes("trigger")
                ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
          >
            <div className="font-mono text-[9px] text-brand-blue mb-1 font-bold">STAGE 01_TRIGGER</div>
            <h4 className="text-xs font-extrabold font-display leading-none">Webhook Input</h4>
            <p className="text-[9px] mt-1 text-slate-400 leading-tight">Incoming customer data flow stream.</p>
          </div>

          {/* Node 2: Extraction LLM */}
          <div
            onClick={() => toggleNode("llm")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              activeNodes.includes("llm")
                ? "bg-gradient-to-tr from-brand-blue/15 to-brand-purple/15 border-brand-indigo text-[#6366f1] shadow-md"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
          >
            <div className="font-mono text-[9px] text-brand-purple mb-1 font-bold">STAGE 02_COGNITIVE</div>
            <h4 className="text-xs font-extrabold font-display leading-none">Aethrixa FineTuning Parser</h4>
            <p className="text-[9px] mt-1 text-slate-400 leading-tight">Extract schema intents & triggers.</p>
          </div>

          {/* Node 3: Routing sync */}
          <div
            onClick={() => toggleNode("sync")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              activeNodes.includes("sync")
                ? "bg-cyan-50 border-cyan-400 text-cyan-600 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
          >
            <div className="font-mono text-[9px] text-cyan-500 mb-1 font-bold">STAGE 03_CONNECTOR</div>
            <h4 className="text-xs font-extrabold font-display leading-none">Cloud sync API</h4>
            <p className="text-[9px] mt-1 text-slate-400 leading-tight">Authorize remote CRM profiles.</p>
          </div>

          {/* Node 4: DB persistence */}
          <div
            onClick={() => toggleNode("db")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              activeNodes.includes("db")
                ? "bg-slate-50 dark:bg-slate-900/50 border-indigo-600 text-indigo-700 shadow-md"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
          >
            <div className="font-mono text-[9px] text-indigo-500 mb-1 font-bold">STAGE 04_STORE</div>
            <h4 className="text-xs font-extrabold font-display leading-none">Database Secure Saved</h4>
            <p className="text-[9px] mt-1 text-slate-400 leading-tight">Cloud SQL or Firebase storage file.</p>
          </div>

        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/40">
        <div className="flex items-center gap-1.5 font-bold">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>COGNITIVE LOGIC FLOW ACTIVE STATUS: OK</span>
        </div>
        <button
          onClick={() => setActiveNodes(["trigger", "llm", "db"])}
          className="px-3 py-1 bg-white dark:bg-slate-900 border rounded-lg hover:border-slate-300 dark:border-slate-600 text-[10px] font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1 cursor-pointer"
        >
          <RefreshCw className="w-3 h-3 animate-spin" />
          Reset Pathway
        </button>
      </div>
    </motion.div>
  );

  const renderBILab = () => (
    <motion.div
      key="bi-lab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold font-mono text-slate-400 tracking-widest uppercase">
            PREDICTIVE COGNITIVE SCENARIO FORECASTS
          </span>
          {/* Growth select */}
          <div className="flex gap-1.5">
            <button
              onClick={() => {
                setGrowthScenario("conservative");
                setBiPercentage(128);
              }}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-lg font-mono tracking-tight cursor-pointer ${
                growthScenario === "conservative"
                  ? "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                  : "bg-transparent text-slate-500 hover:text-slate-700 dark:text-slate-200"
              }`}
            >
              CONSERVATIVE MODEL
            </button>
            <button
              onClick={() => {
                setGrowthScenario("aggressive");
                setBiPercentage(452);
              }}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-lg font-mono tracking-tight cursor-pointer ${
                growthScenario === "aggressive"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-transparent text-slate-500 hover:text-slate-700 dark:text-slate-200"
              }`}
            >
              AGGRESSIVE SCENARIO
            </button>
          </div>
        </div>

        {/* Calculated Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="glass-card bg-white dark:bg-slate-900 p-4 rounded-2xl text-left border">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              Computed Revenue Shift
            </span>
            <div className="text-xl font-bold font-mono text-slate-800 dark:text-slate-100 mt-1">
              +{biPercentage}%
            </div>
          </div>
          <div className="glass-card bg-white dark:bg-slate-900 p-4 rounded-2xl text-left border">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              Customer LTV Metrics
            </span>
            <div className="text-xl font-bold font-mono text-slate-800 dark:text-slate-100 mt-1">
              {growthScenario === "aggressive" ? "$4,280" : "$1,640"}
            </div>
          </div>
          <div className="glass-card bg-white dark:bg-slate-900 p-4 rounded-2xl text-left border">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              ROI Acceleration speed
            </span>
            <div className="text-xl font-bold font-mono text-slate-800 dark:text-slate-100 mt-1">
              {growthScenario === "aggressive" ? "12X Rate" : "4.5X Rate"}
            </div>
          </div>
        </div>

        {/* Visual Growth bar diagram */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-3 sm:p-4 overflow-x-auto w-full overflow-y-hidden no-scrollbar">
          <div className="h-28 relative flex items-end gap-1.5 sm:gap-3 px-1 sm:px-6 justify-between pt-4 min-w-[280px]">
            {[40, 55, 45, 60, 75, 90, 85].map((val, idx) => {
              const multiplier = growthScenario === "aggressive" ? 1.0 : 0.45;
              const heightVal = Math.round(val * multiplier);
              return (
                <div key={idx} className="w-8 h-full relative">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightVal * 0.8}%` }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full rounded-t-lg bg-gradient-to-t from-cyan-400 to-indigo-500"
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold text-slate-600 dark:text-slate-300">
                      {heightVal}%
                    </div>
                  </motion.div>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-400 font-bold">M0{idx+1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 py-3 border-t">
        <span>Aethrixa Cognitive SQL analysis running...</span>
        <span className="text-brand-purple flex items-center gap-1 font-bold">
          <Sparkles className="w-3 h-3 animate-spin" />
          PREDICTIVE STREAMS ACTIVE
        </span>
      </div>
    </motion.div>
  );

  return (
    <motion.section 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="ai-showcase" 
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
    >
      {/* Decorative Cyber Grid Background & Radial Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Block Section */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-white dark:bg-slate-900 mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
            <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
              AETH_AGENT_LABORATORY (PROTOTYPE CORE)
            </span>
          </div>

          <h2 className="font-display font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 tracking-tight mb-4 max-w-3xl">
            Experience Our Intelligent Systems in Action.
          </h2>

          <p className="font-sans text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl">
            Interact with our simulated chatbot, customize digital logic workflows, or map forecast estimates dynamically.
          </p>
        </div>

        {/* Modular Grid Layout (Left Side Tab Selectors, Right Side Interactive Sandbox Display) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column A: Control Panels with detailed Tab select triggers */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {[
              {
                id: "chat",
                title: "Intelligent Chat Agent",
                desc: "An intelligent microagent typing technical answers, code routines, and SEO schedules in real-time.",
                icon: MessageSquareCode
              },
              {
                id: "workflow",
                title: "Custom Robotic Pipelines",
                desc: "Map automated workflow triggers, toggle cloud sync points, and watch connections dynamically re-align.",
                icon: Workflow
              },
              {
                id: "bi",
                title: "Interactive Data Predictive Analytics",
                desc: "Adjust strategic business parameters to calculate immediate growth models and estimate pipeline yield.",
                icon: TrendingUp
              }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeLabTab === tab.id;
              return (
                <div key={tab.id} className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveLabTab(tab.id as any)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-2 relative group cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 dark:shadow-black/30 scale-[1.02]"
                        : "bg-white dark:bg-slate-900/80 border-slate-200 hover:border-violet-200 text-slate-700 dark:text-slate-200 hover:bg-white dark:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <TabIcon className={`w-5 h-5 ${isSelected ? "text-cyan-400" : "text-brand-purple"}`} />
                      <span className="font-display font-bold text-sm tracking-tight">{tab.title}</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isSelected ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
                      {tab.desc}
                    </p>
                    <ArrowRight className={`w-4 h-4 self-end transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-slate-300 group-hover:translate-x-1"}`} />
                  </button>
                  
                  {/* Mobile Accordion Sandbox Display */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="glass-card border border-white/60 dark:border-slate-700/60 p-5 rounded-3xl shadow-xl bg-white dark:bg-slate-900/80 flex flex-col mb-2 mt-1">
                          {tab.id === "chat" && renderChatLab()}
                          {tab.id === "workflow" && renderWorkflowLab()}
                          {tab.id === "bi" && renderBILab()}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column B: Interactive Glass Sandbox Container (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-8 glass-card border-white p-6 md:p-8 rounded-3xl shadow-xl bg-white dark:bg-slate-900/70 flex-col min-h-[460px]">
            <AnimatePresence mode="wait">
              
              {/* Sandbox Tab: Intelligent Chat Agent */}
              {activeLabTab === "chat" && renderChatLab()}

              {/* Sandbox Tab: Intelligent Robotic Pipelines */}
              {activeLabTab === "workflow" && renderWorkflowLab()}

              {/* Sandbox Tab: Intelligent Predictive Analytics & BI */}
              {activeLabTab === "bi" && renderBILab()}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
