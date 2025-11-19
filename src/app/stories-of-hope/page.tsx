'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { stories } from '@/data/stories';
import { StoryCard } from '@/components/features/StoryCard';
import { StoryFilter } from '@/components/features/StoryFilter';
import { TreatmentType, StruggleDuration } from '@/types/story';
import { Heart, Users, Baby, Sparkles } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { icon: Baby, value: "2,500+", label: "Success Stories", color: "text-[var(--color-primary)]" },
    { icon: Heart, value: "98%", label: "Happy Families", color: "text-[var(--color-calm)]" },
    { icon: Users, value: "5,000+", label: "Patients Helped", color: "text-[var(--color-secondary)]" },
    { icon: Sparkles, value: "15+", label: "Years of Hope", color: "text-gray-600" }
];

export default function StoriesOfHopePage() {
    const [selectedTreatment, setSelectedTreatment] = useState<TreatmentType | 'All'>('All');
    const [selectedDuration, setSelectedDuration] = useState<StruggleDuration | 'All'>('All');

    const filteredStories = stories.filter(story => {
        const matchesTreatment = selectedTreatment === 'All' || story.treatmentType === selectedTreatment;
        const matchesDuration = selectedDuration === 'All' || story.struggleDuration === selectedDuration;
        return matchesTreatment && matchesDuration;
    });

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Header Section */}
            <div className="relative bg-gradient-to-br from-[var(--color-separator)] via-white to-[var(--color-calm)]/10 py-20 mb-16 overflow-hidden">
                {/* Decorative Doodles */}
                <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="text-[var(--color-primary)]">
                        <path d="M50 10 C70 10, 90 30, 90 50 C90 70, 70 90, 50 90 C30 90, 10 70, 10 50 C10 30, 30 10, 50 10"
                            stroke="currentColor" strokeWidth="3" fill="none" />
                        <circle cx="50" cy="50" r="8" fill="currentColor" />
                    </svg>
                </div>
                <div className="absolute bottom-10 left-10 w-40 h-40 opacity-10">
                    <svg viewBox="0 0 100 100" className="text-[var(--color-calm)]">
                        <path d="M20 50 L40 30 L60 50 L80 30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="50" cy="50" r="5" fill="currentColor" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" />
                            <span className="text-[var(--color-primary)] font-semibold text-sm">Real Stories, Real Hope</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Stories of <span className="text-[var(--color-primary)]">Hope</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Every family has a unique journey. These are the real stories of courage, perseverance, and the miracle of life from our Fishtail IVF family.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="container mx-auto px-4 md:px-6 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
                        >
                            <div className={`${stat.color} w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <StoryFilter
                        selectedTreatment={selectedTreatment}
                        selectedDuration={selectedDuration}
                        onTreatmentChange={setSelectedTreatment}
                        onDurationChange={setSelectedDuration}
                    />
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <p className="text-gray-600 text-lg">
                        Showing <span className="font-bold text-[var(--color-primary)]">{filteredStories.length}</span> {filteredStories.length === 1 ? 'story' : 'stories'}
                    </p>
                </motion.div>

                {/* Stories Grid */}
                {filteredStories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredStories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <StoryCard story={story} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100"
                    >
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-10 h-10 text-gray-400" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">No stories found</p>
                        <p className="text-gray-500 mb-6">Try adjusting your filters to see more stories.</p>
                        <button
                            onClick={() => { setSelectedTreatment('All'); setSelectedDuration('All'); }}
                            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Clear All Filters
                        </button>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-3xl p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Story?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Every success story starts with a single step. Let us help you begin your journey to parenthood.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                                    Book Your Consultation
                                </button>
                            </Link>
                            <Link href="/services">
                                <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                                    Explore Our Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
