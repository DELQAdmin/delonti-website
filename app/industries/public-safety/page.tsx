"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Eye, EyeOff, FileText, Network, ShieldCheck,
  Box, Truck, HardHat, Activity, LayoutDashboard,
  Radio, Database, TrendingUp, Monitor, ShieldAlert, FileCheck,
  Globe, ArrowRight, Zap, ChevronRight, ChevronLeft, Play, HeartPulse, UserCheck, Shield
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PublicSafetyIndustryPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const IMAGES = {
    hero: "/images/public-safety/public_safety_hero.png",
    asset: "/images/public-safety/public_safety_asset.png",
    personnel: "/images/public-safety/public_safety_personnel.png",
    incident: "/images/public-safety/public_safety_incident.png",
    monitoring: "/images/public-safety/public_safety_monitoring.png",
    case_law: "/images/public-safety/public_safety_case_law.png",
    case_emergency: "/images/public-safety/public_safety_case_emergency.png",
    case_equipment: "/images/public-safety/public_safety_case_equipment.png",
    case_facility: "/images/public-safety/public_safety_case_facility.png",
    case_safety: "/images/public-safety/public_safety_case_safety.png",
  };

  // Carousel states for Use Cases scroll section
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 380;
  const gap = 24;

  const useCases = [
    { title: "Law Enforcement Fleet & Asset Management", img: IMAGES.case_law, href: "/resources/case-studies/law-enforcement-asset-tracking" },
    { title: "Emergency Medical Services Readiness", img: IMAGES.case_emergency, href: "/resources/case-studies/emergency-response-coordination" },
    { title: "Fire & Rescue Equipment Tracking", img: IMAGES.case_equipment, href: "/resources/case-studies/equipment-management-public-safety" },
    { title: "Public Facility Security Monitoring", img: IMAGES.case_facility, href: "/resources/case-studies/facility-monitoring-public-safety" },
    { title: "Community Safety Monitoring", img: IMAGES.case_safety, href: "/resources/case-studies/officer-first-responder-safety-monitoring" }
  ];

  useEffect(() => {
    const calculateMaxScroll = () => {
      if (containerRef.current) {
        const visibleWidth = containerRef.current.offsetWidth;
        const possibleScrolls = Math.max(0, useCases.length - Math.floor(visibleWidth / (cardWidth + gap)));
        setMaxScroll(possibleScrolls);
      }
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);
    return () => window.removeEventListener("resize", calculateMaxScroll);
  }, [useCases.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxScroll ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <main className="w-full bg-[#FAFAFA] dark:bg-background-dark font-sans selection:bg-[#2b2b4f] selection:text-white relative">
      <Header />

      {/* 1. HERO SECTION - Clean Professional Split Layout */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800/80 pt-5 lg:pt-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-primary dark:text-blue-400 bg-primary/5 dark:bg-blue-500/5 border border-primary/10 dark:border-blue-500/10 rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400" />
                Public Safety
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-[#111111] dark:text-white uppercase"
              >
                RFID + AI Platform for <br />
                <span className="text-primary dark:text-blue-400">Public Safety Operations</span>
              </motion.h1>

              {/* Subtext - Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-xl font-medium"
              >
                Track assets, personnel, and operations in real time to improve response, coordination, and safety outcomes.
              </motion.p>

              {/* Points / Meta */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xs md:text-sm text-primary dark:text-blue-400 mb-10 font-bold tracking-[0.15em] uppercase border-l-2 border-primary dark:border-blue-500 pl-4"
              >
                Real-Time Awareness • Faster Response • Coordinated Operations
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="group relative bg-logo hover:bg-logo/90 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden w-full sm:w-60 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="#solutions"
                  className="group relative bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#111111] dark:text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 shadow-sm overflow-hidden w-full sm:w-60 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/0 via-black/5 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Explore Solutions</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[1.05/1] lg:max-h-[700px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <img
                src={IMAGES.hero}
                alt="Public Safety Operations"
                className="w-full h-full object-cover"
              />
              {/* Subtle accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CHALLENGES SECTION */}
      <section className="py-16 lg:py-20 bg-white dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase">
              Challenges in Public Safety Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Monitor,
                num: "01",
                title: "Limited Real-Time Visibility",
                desc: "Lack of visibility into assets and personnel impacts response effectiveness.",
              },
              {
                icon: Activity,
                num: "02",
                title: "Delayed Coordination",
                desc: "Disconnected systems slow down communication and decision-making.",
              },
              {
                icon: Network,
                num: "03",
                title: "Asset & Equipment Tracking Gaps",
                desc: "Critical equipment is difficult to track during operations.",
              },
              {
                icon: ShieldCheck,
                num: "04",
                title: "High Accountability Requirements",
                desc: "Accurate reporting and tracking are essential for compliance and audits.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark-alt p-8 lg:p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/30"
                >
                  {/* subtle top glow */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-8 w-8 lg:h-9 lg:w-9" />
                  </div>

                  {/* Number */}
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary dark:text-blue-400">
                    {item.num}
                  </div>

                  {/* Title */}
                  <h3 className="min-h-[3.5rem] text-base font-bold leading-relaxed text-slate-900 dark:text-white transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm lg:text-base font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE DELONTI APPROACH */}
      <section className="py-16 lg:py-20 bg-[#FAFAFA] dark:bg-background-dark-alt border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-[#111111] dark:text-white uppercase">A Platform Approach to Public Safety Infrastructure</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">Delonti enables real-time tracking and operational intelligence using RFID sensing, IoT connectivity, and AI analytics.</p>
          </div>

          <PublicSafetyKeyFlow />

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-base lg:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              From tracking field equipment to enabling coordinated response, Delonti provides a unified platform for public safety operations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU CAN DO */}
      <InteractiveTabsSection images={IMAGES} />

      {/* 5. PLATFORM CAPABILITIES */}
      <section className="py-16 lg:py-20 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase mb-4">
              Platform Capabilities for Public Safety
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="flex flex-row md:grid md:grid-cols-5 gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
            {[
              { icon: Radio, title: "Real-Time Asset Tracking", desc: "Instantly locate and track tactical gear, weaponry, and vehicles." },
              { icon: UserCheck, title: "Personnel Monitoring", desc: "Safe and secure coordination of first responders in real time." },
              { icon: Monitor, title: "Operational Dashboards", desc: "Command-level situational awareness dashboards across facilities." },
              { icon: ShieldAlert, title: "AI-Based Alerts", desc: "Automatic notifications on asset absence or security fence breaches." },
              { icon: FileCheck, title: "Compliance Reporting", desc: "Secure, audit-ready tracking logs customized for safety audits." }
            ].map((cap, i) => {
              const Icon = cap.icon;
              const subtleThemes = [
                {
                  iconColor: "text-blue-650 dark:text-blue-400",
                  bgColor: "bg-blue-500/5 dark:bg-blue-500/10",
                  borderColor: "border-blue-500/10 dark:border-blue-500/20",
                  hoverBorderColor: "group-hover:border-blue-500/40 dark:group-hover:border-blue-500/30",
                  hoverBgColor: "group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20"
                },
                {
                  iconColor: "text-purple-650 dark:text-purple-400",
                  bgColor: "bg-purple-500/5 dark:bg-purple-500/10",
                  borderColor: "border-purple-500/10 dark:border-purple-500/20",
                  hoverBorderColor: "group-hover:border-purple-500/40 dark:group-hover:border-purple-500/30",
                  hoverBgColor: "group-hover:bg-purple-500/10 dark:group-hover:bg-purple-500/20"
                },
                {
                  iconColor: "text-amber-600 dark:text-amber-400",
                  bgColor: "bg-amber-500/5 dark:bg-amber-500/10",
                  borderColor: "border-amber-500/10 dark:border-amber-500/20",
                  hoverBorderColor: "group-hover:border-amber-500/40 dark:group-hover:border-amber-500/30",
                  hoverBgColor: "group-hover:bg-amber-500/10 dark:group-hover:bg-amber-500/20"
                },
                {
                  iconColor: "text-emerald-600 dark:text-emerald-400",
                  bgColor: "bg-emerald-500/5 dark:bg-emerald-500/10",
                  borderColor: "border-emerald-500/10 dark:border-emerald-500/20",
                  hoverBorderColor: "group-hover:border-emerald-500/40 dark:group-hover:border-emerald-500/30",
                  hoverBgColor: "group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20"
                },
                {
                  iconColor: "text-rose-600 dark:text-rose-455",
                  bgColor: "bg-rose-500/5 dark:bg-rose-500/10",
                  borderColor: "border-rose-500/10 dark:border-rose-500/20",
                  hoverBorderColor: "group-hover:border-rose-500/40 dark:group-hover:border-rose-500/30",
                  hoverBgColor: "group-hover:bg-rose-500/10 dark:group-hover:bg-rose-500/20"
                }
              ];
              const theme = subtleThemes[i % subtleThemes.length];

              return (
                <div 
                  key={i} 
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-background-dark-alt border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer w-[75vw] sm:w-[45vw] md:w-auto shrink-0 snap-start"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border ${theme.borderColor} ${theme.bgColor} flex items-center justify-center shrink-0 mb-5 ${theme.hoverBorderColor} ${theme.hoverBgColor} transition-all duration-300`}>
                    <Icon strokeWidth={1.5} className={`w-6 h-6 md:w-7 md:h-7 ${theme.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold tracking-tight text-[#111111] dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300 uppercase mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS - Sticky Stacking Cards */}
      <StickyStackingSection />

      {/* 7. USE CASES / PROVEN DEPLOYMENTS */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] dark:bg-background-dark-alt overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
          {/* Header with Navigation */}
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase">
                Proven Public Safety Use Cases
              </h2>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full border border-slate-900 dark:border-white flex items-center justify-center transition-all cursor-pointer ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex >= maxScroll}
                className={`w-12 h-12 rounded-full border border-slate-900 dark:border-white flex items-center justify-center transition-all cursor-pointer ${currentIndex >= maxScroll ? 'opacity-20 cursor-not-allowed' : 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Row */}
          <div className="relative overflow-visible">
            <motion.div 
              className="flex gap-6 items-start"
              animate={{ x: -(currentIndex * (cardWidth + gap)) }}
              transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
            >
              {useCases.map((study, idx) => (
                <div key={idx} className="shrink-0" style={{ width: `${cardWidth}px` }}>
                  <Link href={study.href} className="group cursor-pointer flex flex-col h-full bg-white dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-6 relative">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${study.img}')` }} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight mb-6 h-[3.5rem] overflow-hidden line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors text-[#111111] dark:text-white uppercase">
                      {study.title}
                    </h4>
                    <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111] dark:text-white">
                      Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative py-16 lg:py-20 bg-[#111111] text-white overflow-hidden border-t border-[#2b2b4f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 max-w-3xl leading-tight uppercase">
            Enhance Public Safety Operations with Delonti
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="group relative bg-logo hover:bg-logo/90 text-white px-10 py-4 font-bold text-lg rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
              <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
            <Link href="/contact" className="group relative bg-white/10 hover:bg-white/20 text-white px-10 py-4 font-bold text-lg rounded-xl transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Contact Sales</span>
              <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- Sub-component: Animated Responsive Key Flow ---
function PublicSafetyKeyFlow() {
  const steps = [
    { title: "RFID Tags", desc: "Affixed to field gear & tools", icon: Radio },
    { title: "Sensors", desc: "Detect signals & entry access", icon: Activity },
    { title: "Cloud Platform", desc: "Secure central compliance database", icon: Database },
    { title: "AI Insights", desc: "Distress & presence alerts", icon: Zap },
    { title: "Operational Dashboards", desc: "Command center map layouts", icon: LayoutDashboard },
  ];

  return (
    <div className="relative w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
        {/* Connection line for desktop */}
        <div className="absolute top-[35px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 hidden md:block z-0" />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center mb-4 group hover:border-primary dark:hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/5 dark:bg-blue-500/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary dark:text-blue-400" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-tight mb-1">{step.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[150px]">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// --- Sub-component: Fixed UX Interactive Tabs ---
function InteractiveTabsSection({ images }: { images: any }) {
  const tabs = [
    {
      id: 1, num: "01",
      title: "Asset Tracking",
      desc: "Track critical equipment, vehicles, and tools in real time. Ensure emergency response bags, weaponry, and radios are accounted for.",
      img: images.asset, icon: Box
    },
    {
      id: 2, num: "02",
      title: "Personnel Visibility",
      desc: "Monitor personnel movement and deployment during operations. Keep command stations updated on active locations of field officers.",
      img: images.personnel, icon: UserCheck
    },
    {
      id: 3, num: "03",
      title: "Incident Response Coordination",
      desc: "Enable faster and more coordinated responses. Integrate multi-agency maps to allocate resources efficiently during critical alarms.",
      img: images.incident, icon: Activity
    },
    {
      id: 4, num: "04",
      title: "Operational Monitoring",
      desc: "Track activity across facilities and field environments. Secure dispatch centers, training labs, and evidence lockups in real time.",
      img: images.monitoring, icon: Shield
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="solutions" className="py-16 lg:py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left: Dynamic Accordion-style List */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-10 lg:mb-12 text-[#111111] dark:text-white uppercase">
              What Public Safety Agencies Can Do with Delonti
            </h2>

            {/* The Tab Items */}
            <div className="flex flex-col gap-0 border-l border-slate-200 dark:border-slate-800">
              {tabs.map((tab) => {
                const isActive = activeTab.id === tab.id;
                return (
                  <div
                    key={tab.id}
                    onMouseEnter={() => setActiveTab(tab)}
                    className="cursor-pointer group flex flex-col pl-6 py-5 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 transition-colors duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xl font-display font-black tracking-tighter transition-colors duration-300 ${isActive ? 'text-primary dark:text-blue-400' : 'text-slate-300 dark:text-slate-700'}`}>
                        {tab.num}.
                      </span>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 uppercase ${isActive ? 'text-[#111111] dark:text-white' : 'text-slate-300 dark:text-slate-700 group-hover:text-slate-400 dark:group-hover:text-slate-500'}`}>
                        {tab.title}
                      </h3>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 12 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {tab.desc}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Instant Morphing Image */}
          <div className="lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[600px] xl:h-[700px] relative mt-8 lg:mt-0">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative bg-slate-100 dark:bg-slate-900">
              <img
                key={activeTab.id}
                src={activeTab.img}
                alt={activeTab.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Elegant Outcomes Grid ---
function StickyStackingSection() {
  const cards = [
    { id: 1, icon: Zap, title: "Faster Response Times", text: "Improve coordination, reduce communication delays, and dispatch resources rapidly." },
    { id: 2, icon: Eye, title: "Enhanced Situational Awareness", text: "Gain real-time insight into personnel locations, active gear, and field incidents." },
    { id: 3, icon: ShieldCheck, title: "Improved Accountability", text: "Track evidence logs, tactical equipment checkouts, and personnel accurately." },
    { id: 4, icon: TrendingUp, title: "Operational Efficiency", text: "Streamline dispatch center workflows, station audits, and active decision-making." },
  ];

  return (
    <section className="bg-slate-50/50 dark:bg-background-dark-alt py-16 lg:py-20 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-logo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-logo bg-logo/5 border border-logo/10 rounded-full"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-logo animate-pulse" />
            Strategic Outcomes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-[#111111] dark:text-white mb-5 uppercase"
          >
            Outcomes for Public Safety Agencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl"
          >
            Delivering rapid mobilization capabilities, real-time command maps, and absolute compliance reporting for first responder networks.
          </motion.p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: card.id * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-background-dark p-6 md:p-10 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_-15px_rgba(0,89,171,0.08)] hover:border-logo/30 dark:hover:border-blue-500/30 transition-all duration-500 ease-out flex flex-col justify-between"
              >
                <div className="absolute top-6 right-8 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300 dark:text-slate-700 group-hover:text-logo/30 dark:group-hover:text-blue-500/20 transition-colors duration-500">
                  Outcome 0{card.id}
                </div>

                <div className="relative flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                  <div className="flex h-14 w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-2xl border border-logo/10 bg-logo/5 text-logo shadow-xs transition-all duration-500 group-hover:scale-110 group-hover:bg-logo group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(0,89,171,0.4)]">
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7 transition-transform duration-500 group-hover:rotate-3" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-logo transition-colors duration-300 leading-snug pr-12 sm:pr-0">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {card.text}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-logo/40 to-logo w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
