"use client";

import { useRef, useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Radio, Database, TrendingUp, Monitor, ShieldAlert,
  ArrowRight, ChevronRight, ChevronLeft, ArrowRightLeft,
  Cpu, Wrench, Shield, CheckCircle2, AlertTriangle, Play, HelpCircle,
  Laptop, Factory, Activity, Truck, Package, Building2,
  Tag, Cloud, Brain
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AssetTrackingSolutionPage() {
  // Carousel states for Use Cases scroll section
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 380;
  const gap = 24;

  const useCases = [
    {
      title: "Government Asset Tracking",
      img: "/images/government/gov_case_rfid_1778638339756.png",
      href: "/resources/case-studies/rfid-asset-tracking-government",
      overview: "Government agencies manage thousands of assets across multiple departments, facilities, and field operations. Maintaining visibility and accountability is critical for operational efficiency and compliance. Delonti provides real-time tracking and monitoring of government assets through RFID-enabled infrastructure and intelligent dashboards.",
      benefits: ["Visibility", "Utilization", "Efficiency", "Compliance"]
    },
    {
      title: "Healthcare Equipment Tracking",
      img: "/images/healthcare/healthcare_case_equip.png",
      href: "/resources/case-studies/medical-equipment-tracking",
      overview: "Healthcare providers depend on critical medical equipment being available when and where it is needed. Delays in locating equipment can impact patient care and operational efficiency. Delonti enables healthcare organizations to track equipment in real time across hospitals, clinics, and healthcare facilities.",
      benefits: ["Visibility", "Utilization", "Efficiency", "Compliance"]
    },
    {
      title: "Manufacturing Tools Tracking",
      img: "/images/government/gov_fleet_tech_1778636024858.png",
      href: "/industries/manufacturing",
      overview: "Manufacturing operations rely on specialized tools, molds, dies, and equipment to maintain production schedules. Missing or unavailable tools can create costly delays. Delonti provides real-time visibility into production assets and tools throughout the manufacturing environment.",
      benefits: ["Visibility", "Utilization", "Efficiency", "Compliance"]
    },
    {
      title: "Warehouse Asset Tracking",
      img: "/images/supply-chain/supply_chain_case_warehouse.png",
      href: "/resources/case-studies/warehouse-inventory-tracking",
      overview: "Warehouses and distribution centers manage large volumes of assets that support inventory movement, fulfillment, and logistics operations. Delonti provides real-time visibility into warehouse assets and operational equipment.",
      benefits: ["Visibility", "Utilization", "Efficiency", "Compliance"]
    }
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
    <main className="w-full bg-[#FAFAFA] dark:bg-background-dark font-sans selection:bg-logo selection:text-white relative">
      <Header />

      {/* 1. HERO SECTION */}
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-logo dark:text-blue-400 bg-logo/5 dark:bg-blue-500/5 border border-logo/10 dark:border-blue-500/10 rounded-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-logo dark:bg-blue-400" />
                Asset Tracking
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-slate-900 dark:text-white uppercase">
                Real-Time Asset Tracking <br />
                <span className="text-logo dark:text-blue-400">with RFID + AI</span>
              </h1>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-xl font-medium">
                Track equipment, tools, and high-value assets across facilities and operations in real time.
              </p>

              <p className="text-xs md:text-sm text-logo dark:text-blue-400 mb-10 font-bold tracking-[0.15em] uppercase border-l-2 border-logo dark:border-blue-500 pl-4">
                Real-Time Visibility • Reduced Loss • Improved Utilization
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group relative bg-logo hover:bg-logo/90 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden w-full sm:w-60 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="#use-cases"
                  className="group relative bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 shadow-sm overflow-hidden w-full sm:w-60 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/0 via-black/5 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">See Use Cases</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[1.05/1] lg:max-h-[700px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <img
                src="/images/solutions/asset_tracking_hero.png"
                alt="Asset Tracking with RFID & AI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-logo/10 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-16 lg:py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-logo dark:text-blue-400 mb-3 block">CHALLENGES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase">
              Why Asset Tracking Is a Challenge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Difficult to Locate", desc: "Assets are difficult to locate across facilities." },
              { title: "Manual Processes", desc: "Manual tracking leads to errors and delays." },
              { title: "Increased Costs", desc: "Asset loss and underutilization increase operational costs." },
              { title: "Operational Gaps", desc: "Lack of real-time visibility impacts daily operations." }
            ].map((prob, i) => (
              <div key={i} className="p-8 bg-[#F8FAFC] dark:bg-background-dark-alt rounded-2xl border border-slate-150/60 dark:border-slate-800/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{prob.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. & 4. SOLUTION SECTION - OUR APPROACH */}
      <section className="py-20 lg:py-24 bg-[#FAFAFA] dark:bg-background-dark-alt border-y border-slate-200/60 dark:border-slate-855 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-logo/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold uppercase tracking-[0.25em] text-logo dark:text-blue-400 bg-logo/5 dark:bg-blue-500/5 border border-logo/10 dark:border-blue-500/10 rounded-full">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase mb-6 leading-tight">
              RFID + AI-Powered Asset Tracking Platform
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Delonti enables real-time tracking of assets using RFID sensing and AI analytics.
            </p>
          </div>

          {/* Interactive Steps Flow */}
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 relative">
            {[
              { step: "RFID Tags", desc: "Affixed to physical assets", icon: Tag },
              { step: "Sensors", desc: "Scan and detect signals", icon: Radio },
              { step: "Cloud Platform", desc: "Central database ingestion", icon: Cloud },
              { step: "AI Insights", desc: "Predictive utilization models", icon: Brain },
              { step: "Dashboard", desc: "Operational mapping visuals", icon: Monitor }
            ].map((node, idx, arr) => {
              const IconComponent = node.icon;
              return (
                <Fragment key={idx}>
                  <div className="flex-1 flex flex-col items-center text-center p-6 bg-white dark:bg-[#15151f] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl w-full shadow-sm hover:shadow-xl hover:border-logo/30 dark:hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 relative group">
                    {/* Step badge */}
                    <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-bold bg-logo dark:bg-blue-500 text-white tracking-widest uppercase shadow-xs">
                      Step {idx + 1}
                    </div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 text-logo dark:text-blue-400 flex items-center justify-center mb-4 mt-2 shrink-0 group-hover:scale-110 group-hover:bg-logo/5 dark:hover:group-hover:bg-blue-500/5 transition-all duration-300">
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                      {node.step}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                  
                  {idx < arr.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-logo/70 dark:text-blue-400/80 select-none pointer-events-none shrink-0 w-8 self-center">
                      <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES */}
      <section className="py-16 lg:py-20 bg-white dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase mb-4">
              Capabilities
            </h2>
            <div className="w-24 h-1 bg-logo mx-auto" />
          </div>

          <div className="flex flex-row md:grid md:grid-cols-5 gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
            {[
              { title: "Real-Time Asset Tracking", desc: "Continuous visibility over critical physical assets." },
              { icon: Cpu, title: "Automated Identification", desc: "No manual counting required, automated identification tags." },
              { icon: Wrench, title: "Location Tracking", desc: "Zonal facility localization tracking routes." },
              { icon: Shield, title: "Alerts & Notifications", desc: "Automatic alerts when an asset leaves designated boundaries." },
              { icon: Monitor, title: "Reporting & Analytics", desc: "Rich metrics on asset utilization rates and inventory health." }
            ].map((cap, i) => {
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
              const Icon = cap.icon ?? Radio;

              return (
                <div 
                  key={i} 
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-background-dark-alt border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer w-[75vw] sm:w-[45vw] md:w-auto shrink-0 snap-start"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border ${theme.borderColor} ${theme.bgColor} flex items-center justify-center shrink-0 mb-5 ${theme.hoverBorderColor} ${theme.hoverBgColor} transition-all duration-300`}>
                    <Icon strokeWidth={1.5} className={`w-6 h-6 md:w-7 md:h-7 ${theme.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold tracking-tight text-[#111111] dark:text-white group-hover:text-logo dark:group-hover:text-blue-400 transition-colors duration-300 uppercase mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 lg:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <img
                src="/solutions/Delonti Platform Architecture 1.png"
                alt="Delonti Platform Architecture 1"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-logo/10 to-transparent pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <img
                src="/solutions/Delonti Platform Architecture.png"
                alt="Delonti Platform Architecture"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-logo/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="py-16 lg:py-20 bg-slate-50/50 dark:bg-background-dark-alt border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase mb-4">
              Benefits
            </h2>
            <div className="w-24 h-1 bg-logo mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "Reduce Loss", desc: "Reduce asset loss across operations." },
              { val: "Improve Utilization", desc: "Improve overall utilization rates." },
              { val: "Faster Audits", desc: "Enable faster and audit-ready cycles." },
              { val: "Increase Efficiency", desc: "Increase daily warehouse & office efficiency." }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-background-dark rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-logo/5 text-logo dark:text-blue-400 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{benefit.val}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. USE CASES / PROVEN DEPLOYMENTS */}
      <section id="use-cases" className="py-16 lg:py-20 bg-[#F8FAFC] dark:bg-background-dark-alt overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
          {/* Header with Navigation */}
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase">
                Proven Asset Tracking Use Cases
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
                    <h4 className="text-lg md:text-xl font-bold tracking-tight mb-6 h-[3.5rem] overflow-hidden line-clamp-2 group-hover:text-logo dark:group-hover:text-blue-400 transition-colors text-[#111111] dark:text-white uppercase">
                      {study.title}
                    </h4>
                    <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111] dark:text-white mt-auto">
                      Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. ADDITIONAL SECTION - ASSETS WE TRACK */}
      <section className="py-16 lg:py-20 bg-white dark:bg-background-dark border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase mb-4">
              Assets We Track
            </h2>
            <div className="w-24 h-1 bg-logo mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "IT Assets", icon: Laptop },
              { label: "Manufacturing Equipment", icon: Factory },
              { label: "Medical Devices", icon: Activity },
              { label: "Vehicles & Fleet", icon: Truck },
              { label: "Inventory & Containers", icon: Package },
              { label: "Tools & Instruments", icon: Wrench },
              { label: "Furniture & Fixtures", icon: Building2 },
              { label: "Critical Infrastructure", icon: Radio }
            ].map((asset, idx) => {
              const IconComponent = asset.icon;
              return (
                <div key={idx} className="group relative p-6 bg-white dark:bg-background-dark-alt rounded-2xl border border-slate-200 dark:border-slate-800/80 flex items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-[#1a1a24] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-logo/30 dark:hover:border-blue-500/30 transition-all duration-300">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-logo/0 via-logo/50 to-logo/0 dark:from-blue-500/0 dark:via-blue-500/50 dark:to-blue-500/0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-850 flex items-center justify-center text-logo dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-logo dark:group-hover:text-blue-400 transition-colors uppercase tracking-wider leading-snug">
                    {asset.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-16 lg:py-20 bg-[#111111] text-white overflow-hidden border-t border-[#2b2b4f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 max-w-3xl leading-tight uppercase">
            Start Tracking Assets in Real Time
          </h2>
          <Link href="/contact" className="group relative bg-logo hover:bg-logo/90 text-white px-10 py-4 font-bold text-lg rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
            <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
