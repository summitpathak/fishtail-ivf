import { motion } from 'framer-motion';
import { stories } from '@/data/stories';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Clock, Stethoscope, CheckCircle2, Quote } from 'lucide-react';
import { StoryCard } from '@/components/features/StoryCard';

interface PageProps {
    params: Promise<{ id: string }>;
}

// Generate static params for all stories
export async function generateStaticParams() {
    return stories.map((story) => ({
        id: story.id,
    }));
}

export default async function StoryDetailPage({ params }: PageProps) {
    const { id } = await params;
    const story = stories.find((s) => s.id === id);

    if (!story) {
        notFound();
    }

    // Get related stories (same treatment type, excluding current)
    const relatedStories = stories
        .filter((s) => s.id !== id && s.treatmentType === story.treatmentType)
        .slice(0, 2);

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Section with Image */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={story.thumbnailUrl}
                    alt={story.patientName}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Back Button */}
                <div className="absolute top-8 left-4 md:left-8 z-10">
                    <Link href="/stories-of-hope">
                        <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-white transition-all shadow-lg">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Stories
                        </button>
                    </Link>
                </div>

                {/* Story Title */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="container mx-auto">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] px-4 py-2 rounded-full mb-4">
                                <Heart className="w-4 h-4 text-white" fill="currentColor" />
                                <span className="text-white font-semibold text-sm">{story.treatmentType}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                {story.patientName}'s Journey
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-medium">{story.struggleDuration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Stethoscope className="w-5 h-5" />
                                    <span className="font-medium">{story.treatmentType} Treatment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Content */}
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Quote Section */}
                    <div className="relative mb-16">
                        <div className="bg-gradient-to-br from-[var(--color-separator)] to-white rounded-3xl p-8 md:p-12 border-l-4 border-[var(--color-primary)]">
                            <Quote className="w-12 h-12 text-[var(--color-primary)]/20 mb-4" />
                            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic mb-6">
                                "{story.quote}"
                            </blockquote>
                            <cite className="text-[var(--color-primary)] font-bold text-lg not-italic">
                                — {story.patientName}
                            </cite>
                        </div>
                    </div>

                    {/* Story Timeline */}
                    <div className="space-y-12">
                        {/* The Challenge */}
                        <div className="relative pl-8 border-l-2 border-[var(--color-calm)]">
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-calm)] border-4 border-white"></div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="text-[var(--color-calm)]">01</span>
                                    The Challenge
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {story.challenge}
                                </p>
                            </div>
                        </div>

                        {/* The Journey */}
                        <div className="relative pl-8 border-l-2 border-[var(--color-secondary)]">
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-secondary)] border-4 border-white"></div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="text-[var(--color-secondary)]">02</span>
                                    The Journey
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {story.journey}
                                </p>
                            </div>
                        </div>

                        {/* The Happy Ending */}
                        <div className="relative pl-8 border-l-2 border-[var(--color-primary)]">
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-primary)] border-4 border-white flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-white rounded-2xl p-8 shadow-sm border border-[var(--color-primary)]/20">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="text-[var(--color-primary)]">03</span>
                                    The Happy Ending
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {story.happyEnding}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-3xl p-8 md:p-12 text-center text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Inspired by {story.patientName}'s Story?
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Every journey is unique, but hope is universal. Let us help you write your own success story.
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                                Start Your Journey Today
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Related Stories */}
            {relatedStories.length > 0 && (
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                More {story.treatmentType} Success Stories
                            </h2>
                            <p className="text-xl text-gray-600">
                                Read about other families who found hope through {story.treatmentType} treatment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {relatedStories.map((relatedStory) => (
                                <div key={relatedStory.id}>
                                    <StoryCard story={relatedStory} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
