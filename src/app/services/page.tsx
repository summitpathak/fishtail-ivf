import { services } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesIndexPage() {
    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="bg-[var(--color-calm)]/10 py-16 mb-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive fertility care tailored to your unique journey.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                    {service.challenge}
                                </p>
                                <div className="flex items-center text-[var(--color-primary)] font-semibold text-sm group-hover:gap-2 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
