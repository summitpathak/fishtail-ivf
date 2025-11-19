'use client';

import { motion } from 'framer-motion';
import { Video, Play, Instagram, Music2, Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'FAQs', 'Treatment Information', 'Patient Education', 'Success Stories'];

const videos = [
    {
        id: '1',
        title: 'Understanding IVF Process',
        description: 'A comprehensive guide to the IVF treatment process and what to expect at every stage.',
        thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
        category: 'Treatment Information',
        duration: '8:45'
    },
    {
        id: '2',
        title: 'Common Fertility FAQs Answered',
        description: 'Dr. Anu answers the most frequently asked questions about fertility and conception.',
        thumbnail: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=80',
        category: 'FAQs',
        duration: '12:30'
    },
    {
        id: '3',
        title: 'Egg Freezing Explained',
        description: 'Everything you need to know about preserving your fertility for the future.',
        thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80',
        category: 'Patient Education',
        duration: '10:15'
    },
    {
        id: '4',
        title: 'Success Story: Sarah & Mike',
        description: 'Hear from our patients about their emotional journey to parenthood through IVF.',
        thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80',
        category: 'Success Stories',
        duration: '6:20'
    },
    {
        id: '5',
        title: 'IUI vs IVF: Which is Right for You?',
        description: 'Understanding the differences between IUI and IVF treatments.',
        thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
        category: 'Treatment Information',
        duration: '9:10'
    },
    {
        id: '6',
        title: 'Male Fertility Factors',
        description: 'Important information about male fertility and how it impacts conception.',
        thumbnail: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&auto=format&fit=crop&q=80',
        category: 'Patient Education',
        duration: '7:55'
    }
];

export default function ResourcesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredVideos = videos.filter(video => {
        const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-[var(--color-calm)]/10 via-white to-[var(--color-primary)]/5 py-20 mb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6">
                            <Video className="w-5 h-5 text-[var(--color-primary)]" />
                            <span className="text-[var(--color-primary)] font-semibold text-sm">Educational Resources</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Learn About <span className="text-[var(--color-primary)]">Fertility</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Watch our expert videos covering fertility treatments, FAQs, and patient success stories.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search videos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all text-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-3 justify-center mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category
                                    ? 'bg-[var(--color-primary)] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
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
                                    <div className="absolute bottom-3 right-3">
                                        <span className="bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
                                            {video.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Media Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-[var(--color-separator)] to-white rounded-3xl p-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Follow Us for Daily Updates
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get daily fertility tips, patient stories, and expert advice on our social media channels.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="https://www.instagram.com/fishtail_ivf/"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <Instagram className="w-6 h-6" />
                            Follow on Instagram
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@dr.anu.hirachan"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <Music2 className="w-6 h-6" />
                            Follow on TikTok
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
