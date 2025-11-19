import { services } from '@/data/services';
import { MetricBox } from '@/components/services/MetricBox';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Quote } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="bg-[var(--color-calm)]/10 py-16 mb-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{service.title}</h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-[var(--color-primary)]">Services</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{service.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Metric Box (if available) */}
                {service.metric && (
                    <MetricBox value={service.metric.value} label={service.metric.label} />
                )}

                {/* 1. The Challenge */}
                <section className="bg-[var(--color-separator)] p-8 rounded-2xl mb-12 border-l-4 border-[var(--color-primary)]">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {service.challenge}
                    </p>
                </section>

                {/* 2. The Solution & Process */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {service.solution}
                    </p>

                    {/* Testimonial Injection (if available) */}
                    {service.testimonial && (
                        <div className="my-10 relative pl-8 md:pl-12 py-2">
                            <Quote className="absolute top-0 left-0 w-8 h-8 text-[var(--color-secondary)]/40" />
                            <blockquote className="text-xl font-medium text-gray-800 italic mb-4 relative z-10">
                                "{service.testimonial.quote}"
                            </blockquote>
                            <cite className="block text-[var(--color-secondary)] font-bold not-italic">
                                — {service.testimonial.author}
                            </cite>
                        </div>
                    )}

                    <ProcessSteps steps={service.processSteps} />
                </section>

                {/* 3. Next Steps (Conversion) */}
                <section className="mt-16 pt-8 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to take the next step?</h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Every journey is unique. Schedule a consultation with our experts to discuss your personalized path to parenthood.
                        </p>
                        <Link href="/contact" className="block w-full md:w-auto">
                            <button className="w-full md:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Schedule Your Personalized Consultation <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
