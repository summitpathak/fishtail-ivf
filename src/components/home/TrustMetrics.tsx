'use client';

import { motion } from 'framer-motion';
import { Users, Baby, Award, Calendar } from 'lucide-react';

const metrics = [
    {
        id: 1,
        icon: Baby,
        value: "2,500+",
        label: "Babies Born",
        color: "text-[var(--color-primary)]"
    },
    {
        id: 2,
        icon: Users,
        value: "98%",
        label: "Patient Satisfaction",
        color: "text-[var(--color-calm)]"
    },
    {
        id: 3,
        icon: Award,
        value: "15+",
        label: "Years of Excellence",
        color: "text-[var(--color-secondary)]"
    },
    {
        id: 4,
        icon: Calendar,
        value: "24/7",
        label: "Support Available",
        color: "text-gray-600"
    }
];

export function TrustMetrics() {
    return (
        <section className="py-16 bg-white border-b border-gray-50 relative overflow-hidden">
            {/* Decorative Doodle */}
            <div className="absolute top-1/2 left-10 w-20 h-20 opacity-5 -translate-y-1/2">
                <svg viewBox="0 0 100 100" className="text-[var(--color-primary)]">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" />
                    <circle cx="50" cy="50" r="20" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className={`p-3 rounded-full bg-gray-50 ${metric.color}`}
                            >
                                <metric.icon className="w-8 h-8" />
                            </motion.div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className={`text-3xl md:text-4xl font-bold ${metric.color}`}
                            >
                                {metric.value}
                            </motion.h3>
                            <p className="text-gray-600 font-medium">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
