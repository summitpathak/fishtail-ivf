'use client';

import { useState } from 'react';
import { stories } from '@/data/stories';
import { StoryCard } from '@/components/features/StoryCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function StoryCarousel() {
    // Simple carousel logic: show 1 card on mobile, 2 on tablet, 3 on desktop (handled by grid in CSS mostly, but here we might want to slide)
    // For simplicity and robustness in this iteration, we'll use a horizontal scroll snap container or a simple index slicer.
    // Let's use a simple index slicer for a controlled carousel feel.

    // Actually, a horizontal scroll is more modern and robust for responsive.
    // But the mandate asks for a "Carousel".

    return (
        <section className="py-24 bg-[var(--color-separator)]/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Every family has a story. Here are just a few of the thousands we've been privileged to be part of.
                    </p>
                </div>

                <div className="relative">
                    {/* Scrollable Container */}
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {stories.map((story) => (
                            <div key={story.id} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[350px] snap-center">
                                <StoryCard story={story} />
                            </div>
                        ))}
                    </div>

                    {/* Visual hint for scrolling if needed, or just rely on natural scroll */}
                </div>
            </div>
        </section>
    );
}
