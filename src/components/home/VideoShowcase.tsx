'use client';

import { motion } from 'framer-motion';
import { Play, Video } from 'lucide-react';
import { useState } from 'react';

interface VideoItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    embedUrl?: string;
}

// Placeholder videos - user can replace with actual content
const videos: VideoItem[] = [
    {
        id: '1',
        title: 'Understanding IVF Process',
        description: 'A comprehensive guide to the IVF treatment process and what to expect.',
        thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
        category: 'Treatment Information',
        embedUrl: '' // Add YouTube/Vimeo embed URL
    },
    {
        id: '2',
        title: 'Common Fertility FAQs',
        description: 'Dr. Anu answers the most frequently asked questions about fertility.',
        thumbnail: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=80',
        category: 'FAQs',
        embedUrl: ''
    },
    {
        id: '3',
        title: 'Egg Freezing Explained',
        description: 'Everything you need to know about preserving your fertility.',
        thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80',
        category: 'Patient Education',
        embedUrl: ''
    },
    {
        id: '4',
        title: 'Success Story: Sarah & Mike',
        description: 'Hear from our patients about their journey to parenthood.',
        thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80',
        category: 'Success Stories',
        embedUrl: ''
    }
];

export function VideoShowcase() {
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[var(--color-separator)]/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[var(--color-primary)]">
                    <rect x="10" y="10" width="80" height="80" rx="10" stroke="currentColor" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="50" r="15" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-4">
                        <Video className="w-5 h-5 text-[var(--color-primary)]" />
                        <span className="text-[var(--color-primary)] font-semibold text-sm">Educational Videos</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Learn from <span className="text-[var(--color-primary)]">Our Experts</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Watch our educational videos covering fertility treatments, FAQs, and patient success stories.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-[var(--color-primary)] ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {video.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <a
                        href="/resources"
                        className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Video className="w-5 h-5" />
                        View All Videos
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
