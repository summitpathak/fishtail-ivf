'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Microscope, Syringe, Snowflake, TestTube } from 'lucide-react';

const treatments = [
    {
        icon: Microscope,
        title: "IVF Treatment",
        description: "Advanced in-vitro fertilization with personalized protocols for optimal success rates.",
        href: "/services/ivf",
        color: "text-[var(--color-primary)]",
        bgGradient: "from-[var(--color-primary)]/10 to-[var(--color-primary)]/5"
    },
    {
        icon: Syringe,
        title: "IUI Treatment",
        description: "Intrauterine insemination for a less invasive first-line fertility approach.",
        href: "/services/iui",
        color: "text-[var(--color-calm)]",
        bgGradient: "from-[var(--color-calm)]/10 to-[var(--color-calm)]/5"
    },
    {
        icon: Snowflake,
        title: "Egg Freezing",
        description: "Preserve your fertility and plan your family on your own timeline.",
        href: "/services/egg-freezing",
        color: "text-[var(--color-secondary)]",
        bgGradient: "from-[var(--color-secondary)]/10 to-[var(--color-secondary)]/5"
    },
    {
        icon: TestTube,
        title: "ICSI",
        description: "Specialized sperm injection for severe male factor infertility cases.",
        href: "/services/icsi",
        color: "text-gray-600",
        bgGradient: "from-gray-100 to-gray-50"
    }
];

export function TreatmentsOverview() {
    return (
        <section className="py-24 bg-gradient-to-b from-[var(--color-separator)]/30 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-calm)]/5 rounded-full blur-3xl"></div>

            {/* Doodle */}
            <div className="absolute top-20 left-20 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[var(--color-secondary)]">
                    <path d="M10 50 L30 30 L50 50 L70 30 L90 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-[var(--color-primary)]">Treatments</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        From basic fertility support to advanced reproductive technologies, we offer comprehensive solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={treatment.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={treatment.href} className="group block">
                                <div className={`bg-gradient-to-br ${treatment.bgGradient} rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full`}>
                                    <div className="flex items-start gap-6">
                                        <div className={`${treatment.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <treatment.icon className="w-12 h-12" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                                {treatment.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {treatment.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold group-hover:gap-3 transition-all">
                                                Learn More <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
                    <Link href="/services">
                        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                            View All Services <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
