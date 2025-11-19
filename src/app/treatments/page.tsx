'use client';

import { stories } from '@/data/stories';
import { StoryCard } from '@/components/features/StoryCard';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function TreatmentsPage() {
    // Find an IVF story for injection
    const ivfStory = stories.find(s => s.treatmentType === 'IVF');

    const treatments = [
        {
            id: 'ivf',
            title: 'In Vitro Fertilization (IVF)',
            description: 'Our most advanced fertility treatment, offering the highest success rates. We use personalized protocols tailored to your unique body.',
            features: ['Personalized Stimulation', 'ICSI Included', 'Blastocyst Culture'],
        },
        {
            id: 'iui',
            title: 'Intrauterine Insemination (IUI)',
            description: 'A less invasive first-line treatment for mild male factor or unexplained infertility. We monitor your cycle closely for optimal timing.',
            features: ['Sperm Wash & Prep', 'Ovulation Monitoring', 'Painless Procedure'],
        },
        {
            id: 'egg-freezing',
            title: 'Egg Freezing',
            description: 'Empower your future fertility. Preserve your eggs now to have biological children when you are ready.',
            features: ['Vitrification Technology', 'Long-term Storage', 'Fertility Assessment'],
        },
        {
            id: 'pesa',
            title: 'Male Infertility (PESA/TESA)',
            description: 'Specialized procedures for severe male factor infertility. We work with top urologists to help you become a father.',
            features: ['Surgical Retrieval', 'ICSI Integration', 'Expert Urologists'],
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="bg-[var(--color-calm)]/10 py-16 mb-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Treatments</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        World-class fertility care with a personal touch. We offer a full range of assisted reproductive technologies.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 space-y-24">
                {treatments.map((treatment, index) => (
                    <div key={treatment.id} id={treatment.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">{treatment.title}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{treatment.description}</p>
                            <ul className="space-y-3">
                                {treatment.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-calm)]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact">
                                <button className="mt-4 text-[var(--color-primary)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Book Consultation <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>

                        {/* Special Injection for IVF */}
                        {treatment.id === 'ivf' && ivfStory ? (
                            <div className="flex-1 w-full">
                                <div className="bg-[var(--color-separator)] p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[var(--color-secondary)]/20 rounded-full blur-xl"></div>
                                    <h3 className="text-lg font-semibold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[1px] bg-[var(--color-secondary)]"></span>
                                        Success Story
                                    </h3>
                                    <blockquote className="text-xl font-medium text-gray-800 italic mb-6">
                                        "{ivfStory.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                            {/* Using mock image directly or from story object */}
                                            <img src={ivfStory.thumbnailUrl} alt={ivfStory.patientName} className="object-cover w-full h-full" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{ivfStory.patientName}</p>
                                            <p className="text-sm text-gray-500">IVF Patient</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Link href="/stories-of-hope" className="text-sm text-[var(--color-primary)] hover:underline">Read full story</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                                {/* Placeholder for other treatments images */}
                                Treatment Image Placeholder
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
