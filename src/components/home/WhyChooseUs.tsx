'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Clock } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: "Compassionate Care",
        description: "Every patient is treated with empathy, dignity, and personalized attention throughout their journey.",
        color: "text-[var(--color-primary)]",
        bgColor: "bg-[var(--color-primary)]/10"
    },
    {
        icon: Shield,
        title: "Proven Expertise",
        description: "Our team of specialists brings decades of combined experience in reproductive medicine.",
        color: "text-[var(--color-calm)]",
        bgColor: "bg-[var(--color-calm)]/10"
    },
    {
        icon: Users,
        title: "Family-Centered",
        description: "We understand that fertility is a family matter, and we support you every step of the way.",
        color: "text-[var(--color-secondary)]",
        bgColor: "bg-[var(--color-secondary)]/10"
    },
    {
        icon: Clock,
        title: "Always Available",
        description: "Round-the-clock support ensures you're never alone in your journey to parenthood.",
        color: "text-gray-600",
        bgColor: "bg-gray-100"
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Doodles */}
            <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[var(--color-primary)]">
                    <path d="M50 10 Q70 30 50 50 Q30 70 50 90" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
            </div>
            <div className="absolute bottom-10 left-10 w-40 h-40 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[var(--color-calm)]">
                    <path d="M20 50 Q50 20 80 50 Q50 80 20 50" stroke="currentColor" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
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
                        Why Choose <span className="text-[var(--color-primary)]">Fishtail IVF</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We combine cutting-edge technology with heartfelt care to give you the best chance at building your family.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                <div className={`${value.bgColor} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
