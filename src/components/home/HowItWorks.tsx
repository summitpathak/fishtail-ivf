'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Initial Consultation",
        description: "Meet with our specialists to discuss your medical history and fertility goals.",
        color: "text-[var(--color-primary)]"
    },
    {
        number: "02",
        title: "Diagnostic Testing",
        description: "Comprehensive fertility assessments to understand your unique situation.",
        color: "text-[var(--color-calm)]"
    },
    {
        number: "03",
        title: "Personalized Plan",
        description: "Custom treatment protocol designed specifically for your needs.",
        color: "text-[var(--color-secondary)]"
    },
    {
        number: "04",
        title: "Treatment & Support",
        description: "Expert care throughout your journey with 24/7 support available.",
        color: "text-gray-600"
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Doodles */}
            <div className="absolute top-1/2 right-10 w-32 h-32 opacity-10 -translate-y-1/2">
                <svg viewBox="0 0 100 100" className="text-[var(--color-primary)]">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" />
                </svg>
            </div>
            <div className="absolute top-20 left-1/4 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[var(--color-calm)]">
                    <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
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
                        How It <span className="text-[var(--color-primary)]">Works</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your journey to parenthood, simplified into four clear steps.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative mb-12 last:mb-0"
                        >
                            <div className="flex items-start gap-6 md:gap-8">
                                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-2 border-gray-200 ${step.color} font-bold text-2xl shadow-sm`}>
                                    {step.number}
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                                        </div>
                                        <CheckCircle2 className={`w-8 h-8 ${step.color} flex-shrink-0`} />
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
