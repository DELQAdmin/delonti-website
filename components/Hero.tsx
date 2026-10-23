"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const SLIDES = [
  {
    video: "/videos/government-animation.webm",
    badge: "Government Solutions",
    points: [
      "Government Assets Are Hard to Track",
      "Limited Visibility Across Equipment and Operations"
    ],
    title: (
      <>
        RFID + AI <br />
        PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Real-Time Tracking</span>
      </>
    ),
    subtext: "Powering Asset Tracking and Smart Homeless Service Kiosks",
    description: "Delonti - RFID + AI Intelligence Platform",
    cta: "Explore Solutions",
    link: "/industries/government"
  },
  {
    video: "/videos/education-animation.webm",
    badge: "Smart Campus Solutions",
    points: [
      "Managing Campus Assets Is Complex",
      "Limited Visibility Across Labs, Classrooms, and Facilities"
    ],
    title: (
      <>
        RFID + AI <br />
        PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Campus Operations</span>
      </>
    ),
    subtext: "Real-Time Visibility for Equipment, Students, and Safety",
    description: "Delonti - Smart Campus Infrastructure Platform",
    cta: "View Solutions",
    link: "/industries/education"
  },
  {
    video: "/videos/healthcare-animation.webm",
    badge: "Smart Healthcare Solutions",
    points: [
      "Managing Critical Medical Equipment Is Complex",
      "Limited Visibility Across Hospitals and Facilities"
    ],
    title: (
      <>
        RFID + AI <br />
        PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Healthcare Operations</span>
      </>
    ),
    subtext: "Real-Time Visibility for Equipment and Patient Flow",
    description: "Delonti - Smart Healthcare Infrastructure Platform",
    cta: "Learn More",
    link: "/industries/healthcare"
  },
  {
    video: "/videos/manufacturing-animation.webm",
    badge: "Smart Manufacturing Solutions",
    points: [
      "Manufacturing Assets and Production Are Hard to Track",
      "Limited Visibility Across Equipment and Production Lines"
    ],
    title: (
      <>
        RFID + AI <br />
        PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Manufacturing Operations</span>
      </>
    ),
    subtext: "Track Assets, Production, and Workflow in Real Time",
    description: "Delonti - RFID + AI for Smart Manufacturing Infrastructure",
    cta: "View Systems",
    link: "/industries/manufacturing"
  },
  {
    video: "/videos/retail-animation.webm",
    badge: "Intelligent Supply Chain Solutions",
    points: [
      "Inventory and Supply Chains Are Hard to Track",
      "Limited Visibility Across Warehouses and Distribution"
    ],
    title: (
      <>
        RFID + AI <br />
        PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Inventory Tracking</span>
      </>
    ),
    subtext: "Track Inventory, Movement, and Fulfillment in Real Time",
    description: "Delonti - RFID + AI for Intelligent Supply Chains",
    cta: "View Solutions",
    link: "/industries/supply-chain"
  },
  {
    video: "/videos/law-enforcement-animation.webm",
    badge: "Public Safety Solutions",
    points: [
      "Public Safety Assets and Operations Are Hard to Track",
      "Limited Visibility Can Delay Response and Coordination"
    ],
    title: (
      <>
        RFID + AI <br />
        PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Public Safety Operations</span>
      </>
    ),
    subtext: "Track Assets, Personnel, and Response in Real Time",
    description: "Delonti - RFID + AI for Public Safety Infrastructure",
    cta: "Explore Solutions",
    link: "/industries/public-safety"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handleVideoEnded = () => {
    nextSlide();
  };

  return (
    <section className="relative w-full h-screen min-h-[650px] md:min-h-[850px] overflow-hidden bg-[#0a0a0f]">
      {/* Background Video with Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
            >
              <source src={SLIDES[currentSlide].video} type="video/webm" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* Advanced Overlay for premium look */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0f]/80 via-[#0a0a0f]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#0a0a0f]/10" />
      </div>

      <div className="relative z-30 container mx-auto h-full flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-left text-white"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {SLIDES[currentSlide].badge}
            </motion.div>

            {/* Problem Points */}
            <div className="space-y-2 mb-8">
              {SLIDES[currentSlide].points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]"
                >
                  • {point}
                </motion.div>
              ))}
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 tracking-tight leading-[1.1] md:leading-[1] wrap-break-word uppercase"
            >
              {SLIDES[currentSlide].title}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-[10px] md:text-sm text-white mb-4 leading-relaxed max-w-2xl font-bold uppercase tracking-[0.2em]"
            >
              {SLIDES[currentSlide].subtext}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[10px] md:text-sm text-white mb-10 md:mb-12 font-bold tracking-[0.2em] uppercase"
            >
              {SLIDES[currentSlide].description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5"
            >
              <Link
                href={SLIDES[currentSlide].link}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center sm:justify-start gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm pointer-events-none">{SLIDES[currentSlide].cta}</span>
                <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5 pointer-events-none" />
              </Link>

              <Link
                href="/contact"
                className="group bg-white/5 hover:bg-white/10 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all backdrop-blur-xl border border-white/10 flex items-center justify-center sm:justify-start gap-3 hover:border-white/20"
              >
                <span className="uppercase tracking-wider text-xs md:text-sm pointer-events-none">Request Demo</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 pointer-events-none" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators (Verkada Style) */}
      <div className="absolute right-6 sm:right-10 md:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6 md:gap-8">
        {SLIDES.map((_, index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative flex items-center justify-center transition-all"
            >
              <AnimatePresence mode="popLayout">
                {isActive ? (
                  <motion.div
                    layoutId="activeIndicator"
                    key="active"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                  >
                    {/* Background Circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 bg-black/20 backdrop-blur-sm" />

                    {/* Progress Circle (SVG) */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray="301.6"
                        strokeDashoffset={301.6 - (301.6 * progress) / 100}
                        className="text-blue-500 transition-all duration-100 ease-linear"
                      />
                    </svg>

                    {/* Slide Number */}
                    <span className="relative z-10 text-sm md:text-base font-bold text-white drop-shadow-md">
                      {index + 1}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dot"
                    layout
                    className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/60 group-hover:bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300"
                  />
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Decorative side accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-transparent via-blue-500/50 to-transparent z-0" />

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0a0a0f] to-transparent z-0" />
    </section>
  );
}