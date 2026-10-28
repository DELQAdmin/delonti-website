"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Calendar, Tag, ArrowRight, Megaphone, Radio, ShieldCheck, Sparkles, Building2 } from "lucide-react";

interface NewsItem {
    id: string;
    title: string;
    category: "Press Releases" | "Product Announcements" | "Events & Webinars" | "Industry Partnerships";
    date: string;
    description: string;
    readTime?: string;
    tag: string;
    featured?: boolean;
    image?: string;
    link?: string;
}

const NEWS_ITEMS: NewsItem[] = [
    {
        id: "news-001",
        title: "Delonti Launches Next-Generation RFID + AI Platform for Connected Infrastructure",
        category: "Product Announcements",
        date: "October 15, 2026",
        description: "Delonti today announced the release of its unified RFID + AI Operational Intelligence Platform, enabling enterprises and public sector agencies to automate asset tracking, personnel safety, and facility intelligence in real time.",
        readTime: "4 min read",
        tag: "Platform Launch",
        featured: true,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
        link: "/technology"
    },
    {
        id: "news-002",
        title: "State Government Agency Deploys Delonti RFID Solution Across Regional Facilities",
        category: "Press Releases",
        date: "September 28, 2026",
        description: "A major state administration has selected Delonti to deploy RFID asset tracking and automated audit reporting across multiple agency headquarters, reducing inventory count cycles by over 60%.",
        readTime: "3 min read",
        tag: "Public Sector",
        image: "/images/government/gov_case_rfid_1778638339756.png",
        link: "/resources/case-studies/rfid-asset-tracking-government"
    },
    {
        id: "news-003",
        title: "Delonti to Host Virtual Executive Summit: Real-Time Visibility in Modern Supply Chains",
        category: "Events & Webinars",
        date: "November 12, 2026",
        description: "Join Delonti industry leaders and supply chain directors for an exclusive webinar examining modern RFID orchestration, cycle count automation, and return-logistics optimization.",
        readTime: "Webinar",
        tag: "Live Webinar",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
        link: "/contact"
    },
    {
        id: "news-004",
        title: "Delonti Announces Strategic Partnership with Leading IoT Sensor Manufacturers",
        category: "Industry Partnerships",
        date: "August 18, 2026",
        description: "New hardware-software ecosystem integrations expand Delonti's native support for UHF RFID portals, environmental sensors, and edge-processing gateway nodes.",
        readTime: "3 min read",
        tag: "Partnership",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
        link: "/technology"
    },
    {
        id: "news-005",
        title: "Expanding Healthcare Visibility: Automated Medical Equipment Tracking Deployment",
        category: "Press Releases",
        date: "July 24, 2026",
        description: "Metropolitan Hospital Network expands Delonti's real-time locating solution across acute care wings, ensuring continuous visibility of critical mobile diagnostic devices and pumps.",
        readTime: "4 min read",
        tag: "Healthcare",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070",
        link: "/resources/case-studies/medical-equipment-tracking"
    },
    {
        id: "news-006",
        title: "Delonti Showcases Smart Public Safety and Responder Monitoring at Global Tech Expo",
        category: "Events & Webinars",
        date: "June 30, 2026",
        description: "Delonti demonstrated its wearable responder locating badges, emergency incident dispatch maps, and tactical equipment readiness consoles to public safety officials.",
        readTime: "Conference",
        tag: "Conference",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070",
        link: "/industries/public-safety"
    }
];

const CATEGORIES = [
    "All",
    "Press Releases",
    "Product Announcements",
    "Events & Webinars",
    "Industry Partnerships"
] as const;

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredNews = selectedCategory === "All"
        ? NEWS_ITEMS
        : NEWS_ITEMS.filter((item) => item.category === selectedCategory);

    const featuredItem = NEWS_ITEMS.find((item) => item.featured);

    return (
        <>
            <Header />
            <main className="bg-white dark:bg-slate-950 font-sans">
                <PageHero
                    title="News & Announcements"
                    subtitle="Press releases, product milestones, webinars, and upcoming industry events."
                    breadcrumbs={[
                        { label: "Resources", href: "/resources" },
                        { label: "News & Announcements" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
                />

                <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-white/5">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        
                        {/* Section Header */}
                        <div className="mb-12 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
                                <Megaphone className="w-3.5 h-3.5" />
                                Company Updates
                            </div>
                            <h2 className="text-3xl md:text-5xl font-light text-slate-900 dark:text-white leading-tight font-display mb-4">
                                Latest <span className="font-semibold">Press & News</span>
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                Stay informed about new platform capabilities, customer deployments, and upcoming webinars from the Delonti team.
                            </p>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                                        selectedCategory === cat
                                            ? "bg-primary text-white shadow-md shadow-primary/20"
                                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-white/10"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Featured Hero News (Only when "All" or "Product Announcements" is selected) */}
                        {featuredItem && (selectedCategory === "All" || selectedCategory === featuredItem.category) && (
                            <div className="mb-12 bg-white dark:bg-slate-950 rounded-3xl border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                    <div className="lg:col-span-7 relative h-72 lg:h-[420px] w-full overflow-hidden">
                                        <img
                                            src={featuredItem.image}
                                            alt={featuredItem.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                                                Featured Story
                                            </span>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-semibold mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                                {featuredItem.date}
                                            </span>
                                            <span>•</span>
                                            <span className="text-primary font-bold uppercase tracking-widest">
                                                {featuredItem.category}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                                            {featuredItem.title}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base leading-relaxed mb-6 font-light">
                                            {featuredItem.description}
                                        </p>
                                        <Link
                                            href={featuredItem.link || "/technology"}
                                            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group hover:gap-3 transition-all"
                                        >
                                            Read Full Announcement
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* News Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredNews
                                .filter((item) => !item.featured || selectedCategory !== "All")
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="group bg-white dark:bg-slate-950 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                    >
                                        {item.image && (
                                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                                                        {item.tag}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-6 md:p-8 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-semibold mb-3">
                                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                                <span>{item.date}</span>
                                                <span>•</span>
                                                <span className="text-primary font-bold uppercase tracking-wider text-[10px]">
                                                    {item.category}
                                                </span>
                                            </div>

                                            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light mb-6 flex-1 line-clamp-3">
                                                {item.description}
                                            </p>

                                            <div className="mt-auto pt-5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                                                <Link
                                                    href={item.link || "/contact"}
                                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all"
                                                >
                                                    Learn More
                                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                                {item.readTime && (
                                                    <span className="text-xs text-slate-400 dark:text-slate-500">
                                                        {item.readTime}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>

                    </div>
                </section>

                <CTASection
                    heading="Subscribe to News & Announcements"
                    description="Get press releases, event invitations, and platform release notes delivered straight to your inbox."
                    isNewsletter={true}
                />
            </main>
            <Footer />
        </>
    );
}
