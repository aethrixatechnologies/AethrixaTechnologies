import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  User,
  Building,
  Phone,
  FileText,
  DollarSign,
  Calendar,
  Send,
  CheckCircle,
  Clock,
  Sparkles,
  ShieldCheck
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
  budgetRange: string;
  timeline: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    budgetRange: "",
    timeline: ""
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const budgets = [
    { value: "", label: "Select Budget Range" },
    { value: "5k-10k", label: "$5,000 – $10,000" },
    { value: "10k-25k", label: "$10,000 – $25,000" },
    { value: "25k-50k", label: "$25,000 – $50,000" },
    { value: "50k+", label: "$50,000+ Enterprise" }
  ];

  const timelines = [
    { value: "", label: "Select Target Timeline" },
    { value: "rapid", label: "Ultra Rapid (< 1 Month)" },
    { value: "standard", label: "1 – 3 Months" },
    { value: "flexible", label: "3+ Months (Flexible)" }
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name field is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email field is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Please input a valid email structured address.";
    }
    if (!form.projectDetails.trim()) nextErrors.projectDetails = "Please specify project details.";
    if (!form.budgetRange) nextErrors.budgetRange = "Please select a budget range.";
    if (!form.timeline) nextErrors.timeline = "Please select a targeted launching timeline.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `New Blueprint Request from ${form.name}`,
          from_name: "Aethrixa Lead System",
          replyto: form.email,
          "Full Name": form.name,
          "Email Address": form.email,
          "Phone": form.phone || "Not provided",
          "Company": form.company || "Not provided",
          "Project Details": form.projectDetails,
          "Budget Specs": form.budgetRange,
          "Launch Timeline": form.timeline,
          "Submission Time": new Date().toLocaleString()
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        console.error("Form submission error:", result);
        alert("Failed to send message. Please check the access key and try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="contact" 
      className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-transparent relative w-full overflow-hidden"
    >
      {/* Background Soft decorative flares removed */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch relative z-10 w-full text-left">
        
        {/* Left Column Information Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between select-none">
          <div className="space-y-6">
            {/* Accent Tag */}
            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-100 bg-slate-900 shadow-sm self-start">
              <Clock className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
              <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-400">
                AETHRIXA LEAD CONFIGURATION
              </span>
            </div>

            <h2 className="font-display font-black text-3xl md:text-5xl text-slate-100 tracking-tight leading-tight">
              Let's Co-create Your Next Digital Breakthrough.
            </h2>

            <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed font-semibold">
              Fill out the lead specifications to map operational requirements. Our core software engineering architects will review your blueprints.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border flex items-center justify-center text-brand-indigo shadow-sm flex-shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Core Mail Coordinates</span>
                  <a href="mailto:solutions@aethrixa.tech" className="text-xs font-mono font-bold text-slate-200 hover:text-brand-purple">
                    solutions@aethrixa.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border flex items-center justify-center text-cyan-500 shadow-sm flex-shrink-0">
                  <Clock className="w-4.5 h-4.5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Response SLA Latency Rate</span>
                  <span className="text-xs font-mono font-bold text-slate-200">
                    ~ 1.2 Hours Business SLA Limit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Technical specifications verification footer */}
          <div className="p-4 bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-2xl flex items-center gap-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-mono">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <span>Encrypted Lead Pipeline v2 | ISO Standard 27001 TLS Safe Gateway</span>
          </div>
        </div>

        {/* Right Column Glassmorphic Contact Form Core */}
        <div className="lg:col-span-7 relative h-full">
          <div className="glass-card bg-slate-900/70 border border-slate-700/50 p-6 md:p-8 rounded-3xl shadow-xl relative h-full flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form-view"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                        <User className="w-3 h-3 text-brand-blue" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Marcus Thorne"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-900/80 text-xs font-sans text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.name ? "border-red-400 focus:ring-red-400" : "border-slate-205 focus:border-brand-purple focus:ring-brand-purple"
                        }`}
                      />
                      {errors.name && <p className="text-[9px] font-mono text-red-500 font-bold">{errors.name}</p>}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-brand-purple" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="e.g. marcus@apex.co"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-900/80 text-xs font-sans text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-205 focus:border-brand-purple focus:ring-brand-purple"
                        }`}
                      />
                      {errors.email && <p className="text-[9px] font-mono text-red-500 font-bold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-brand-blue" />
                        <span>Phone (Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (555) 0192"
                        className="w-full px-4 py-3 border border-slate-205 rounded-xl bg-slate-900/80 text-xs font-sans text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                      />
                    </div>

                    {/* Company field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                        <Building className="w-3 h-3 text-brand-purple" />
                        <span>Company / Organization</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Ledger Corp"
                        className="w-full px-4 py-3 border border-slate-205 rounded-xl bg-slate-900/80 text-xs font-sans text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                      />
                    </div>
                  </div>

                  {/* Project Details textarea */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                      <FileText className="w-3 h-3 text-brand-blue" />
                      <span>Project blue print Scope *</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      value={form.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Outline your requirements: e.g. custom AI support agent stream synchronization alongside React mobile portals..."
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-900/80 text-xs font-sans text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                        errors.projectDetails ? "border-red-400 focus:ring-red-400" : "border-slate-205 focus:border-brand-purple focus:ring-brand-purple"
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-[9px] font-mono text-red-500 font-bold">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Budget & Timelines row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Budget select */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-brand-purple" />
                        <span>Budget Specs *</span>
                      </label>
                      <select
                        name="budgetRange"
                        value={form.budgetRange}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-900 text-xs font-sans text-slate-200 focus:outline-none focus:ring-1 ${
                          errors.budgetRange ? "border-red-400 focus:ring-red-400" : "border-slate-205 focus:border-brand-purple"
                        }`}
                      >
                        {budgets.map((b) => (
                          <option key={b.value} value={b.value}>
                            {b.label}
                          </option>
                        ))}
                      </select>
                      {errors.budgetRange && (
                        <p className="text-[9px] font-mono text-red-500 font-bold">{errors.budgetRange}</p>
                      )}
                    </div>

                    {/* Timeline select */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-brand-blue" />
                        <span>Launch Timeline *</span>
                      </label>
                      <select
                        name="timeline"
                        value={form.timeline}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-900 text-xs font-sans text-slate-200 focus:outline-none focus:ring-1 ${
                          errors.timeline ? "border-red-400 focus:ring-red-400" : "border-slate-205 focus:border-brand-purple"
                        }`}
                      >
                        {timelines.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      {errors.timeline && (
                        <p className="text-[9px] font-mono text-red-500 font-bold">{errors.timeline}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-xs shadow-lg hover:shadow-xl hover:opacity-90 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin text-cyan-400" />
                          <span>Validating Gateway secure channels...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Secure Blueprints To Architect</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Success Animated feedback cards view */
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-5"
                >
                  <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shadow animate-bounce">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>

                  <div className="space-y-1 max-w-md">
                    <h3 className="font-display font-black text-slate-100 text-xl md:text-2xl">
                      Blueprint Transmitted Successfully!
                    </h3>
                    <p className="font-sans text-slate-400 text-xs leading-relaxed">
                      Thank you, <span className="font-bold text-slate-100">{form.name}</span>. Your technology roadmap request has bypassed secondary filters and secured direct architect synchronization.
                    </p>
                  </div>

                  {/* Custom lead telemetry list summary */}
                  <div className="w-full max-w-sm rounded-xl border border-dashed border-emerald-200 bg-emerald-50/20 p-4 font-mono text-[10px] text-left text-slate-300 leading-relaxed space-y-1 border-t">
                    <div className="font-bold text-emerald-700 tracking-wider">SECURE TELEMETRY REGISTERED //</div>
                    <div>CLIENT COMP: {form.company || "Self Employed Core"}</div>
                    <div>BUDGET BRACKET: {form.budgetRange} scale</div>
                    <div>ESTIMATED STRATEGY SLA: ~1.2 hrs business review limit</div>
                  </div>

                  <button
                    onClick={() => {
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        projectDetails: "",
                        budgetRange: "",
                        timeline: ""
                      });
                      setIsSuccess(false);
                    }}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-900 text-white font-bold text-xs tracking-tight transition-colors cursor-pointer"
                  >
                    Submit Another File Blueprint
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
