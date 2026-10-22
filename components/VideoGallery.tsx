"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Video {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
}

const videos: Video[] = [
    {
        id: "airport-and-marine-port",
        title: "Airport and Marine Port",
        url: "https://media-delonti.realhalal.co.uk/videos/airport-and-marine-port-rfid-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105840279-11bc80efe1def8c2724568b86ff50bcbf6257d81eab9fd5d785ec2449361b1b9-d_640?region=us",
    },
    {
        id: "cities-and-counties",
        title: "Cities and Counties",
        url: "https://media-delonti.realhalal.co.uk/videos/cities-and-counties-rfid-demo-v4.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105836651-a15983c4c61296154db174b66b8133acedfbe34fa9e69e66c5ecd8e09bea135a-d_640?region=us",
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        url: "https://media-delonti.realhalal.co.uk/videos/cybersecurity-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105838579-4c5e71da9342b1b1c17f56646eec04ab4039d59bdbb879812ae26801f173704c-d_640?region=us",
    },
    {
        id: "events-and-festivals",
        title: "Events and Festivals",
        url: "https://media-delonti.realhalal.co.uk/videos/events-and-festivals-rfid-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105839021-3887f94b3227251ed8b57c320bbdd6e194293701909390f3a9c15b609e0d6336-d_640?region=us",
    },
    {
        id: "healthcare",
        title: "Healthcare",
        url: "https://media-delonti.realhalal.co.uk/videos/healthcare-v2-rfid-demo-v3.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105839519-9df9b78a160b97fcd5a65375d192d39a9831e0caba841d52fd6f1cd40fb84d8f-d_640?region=us",
    },
    {
        id: "homeless-kiosks-combined",
        title: "Homeless Kiosks Combined",
        url: "https://media-delonti.realhalal.co.uk/videos/homeless-kiosks-combined-rfid-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105837587-a22a2b7030b8f6b1a5edc6cfa5a7bc6ddb5023fbf2589521d4ca6ca85d533278-d_640?region=us",
    },
    {
        id: "indoor-navigation",
        title: "Indoor Navigation",
        url: "https://media-delonti.realhalal.co.uk/videos/indoor-navigation-rfid-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105839861-dd3d695869f375ff2594e607bfbd5c0f0f9858818d5623ea60c1f04c71ba9bda-d_640?region=us",
    },
    {
        id: "resource-augmentation",
        title: "Resource Augmentation",
        url: "https://media-delonti.realhalal.co.uk/videos/resource-augmentation-rfid-demo-v3.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105840727-ebb14a9ea32d889d13ba0a31e803ca99c3acd96b35264852ad543257bc85600a-d_640?region=us",
    },
    {
        id: "schools-and-universities",
        title: "Schools and Universities",
        url: "https://media-delonti.realhalal.co.uk/videos/schools-and-universities-rfid-demo-v5.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105841165-9f06a569b023176aa8d65df6dc541ae7f3ef67786de895e41548745b0e3a4afe-d_640?region=us",
    },
    {
        id: "transportation",
        title: "Transportation",
        url: "https://media-delonti.realhalal.co.uk/videos/transportation-rfid-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105841557-bc2bed09b942179c15f9f129eaef02e504ae4acf40332226f624097b0099add6-d_640?region=us",
    },
    {
        id: "utilities-version-1",
        title: "Utilities — Version 1",
        url: "https://media-delonti.realhalal.co.uk/videos/utilities-version-1-rfid-demo-v3.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105842220-2de14a5c364b840c17195e6fa9b452f5fc88181a6a3b1fe76ecb839571127d6f-d_640?region=us",
    },
    {
        id: "utilities-version-2",
        title: "Utilities — Version 2",
        url: "https://media-delonti.realhalal.co.uk/videos/utilities-version-2-rfid-demo-v2.mp4",
        thumbnail: "https://i.vimeocdn.com/video/2105841877-c12bab9c65a9e841998751e47bb020bcd55f19bb45c09c2934e929d1a5e792b2-d_640?region=us",
    },
];

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState<Video | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveVideo(null);
            }
        };

        if (activeVideo) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeVideo]);

    return (
        <section className="py-24 bg-[#FAFAFA] dark:bg-background-dark">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-blue-400 mb-3 block">Video Library</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase">
                        Solution Demos
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {videos.map((video) => (
                        <div 
                            key={video.id}
                            className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                            onClick={() => setActiveVideo(video)}
                        >
                            <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                                <img 
                                    src={video.thumbnail} 
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-sm lg:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300 uppercase tracking-tight">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* In-Site Video Lightbox Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div 
                            className="relative w-full max-w-5xl flex flex-col bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
                                <h3 className="text-sm md:text-base font-bold text-white tracking-wide uppercase truncate pr-4">
                                    {activeVideo.title}
                                </h3>
                                <button 
                                    type="button"
                                    className="text-white/70 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
                                    onClick={() => setActiveVideo(null)}
                                    aria-label="Close video modal"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>

                            {/* Native Video Player */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full aspect-video bg-black flex items-center justify-center"
                            >
                                <video
                                    key={activeVideo.url}
                                    src={activeVideo.url}
                                    poster={activeVideo.thumbnail}
                                    controls
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-contain"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
