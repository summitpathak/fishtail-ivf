import { Story } from '@/types/story';
import { Clock, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
    story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
    return (
        <Link href={`/stories-of-hope/${story.id}`} className="block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group h-full">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={story.thumbnailUrl}
                        alt={`Story of ${story.patientName}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">{story.patientName}</p>
                        <div className="flex items-center gap-2 text-sm opacity-90">
                            <span className="bg-[var(--color-primary)] px-2 py-0.5 rounded-full text-xs font-medium">
                                {story.treatmentType}
                            </span>
                            <span className="flex items-center gap-1 text-xs">
                                <Clock className="w-3 h-3" /> {story.struggleDuration}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <blockquote className="text-gray-700 italic mb-4 relative pl-4 border-l-4 border-[var(--color-secondary)]">
                        "{story.quote}"
                    </blockquote>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                        <span className="text-[var(--color-primary)] font-semibold text-sm group-hover:text-[var(--color-primary-hover)] flex items-center gap-2 transition-colors">
                            Read Full Story
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <Heart className="w-5 h-5 text-gray-300 group-hover:text-[var(--color-primary)] group-hover:fill-[var(--color-primary)] transition-all" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
