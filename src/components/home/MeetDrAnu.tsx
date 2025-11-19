'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const credentials = [
    "MBBS (NMC, Nepal)",
    "MD, Obstetrics and Gynecology (FUMC, Philippines)",
    "IVF Fellowship (RISAA, New Delhi)",
    "Cosmetic Gynecology (RISAA, New Delhi)"
];

export function MeetDrAnu() {
    return (
        <section className="py-16 bg-gradient-to-br from-white via-[var(--color-separator)]/30 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-3 py-1.5 rounded-full mb-4">
                        <Heart className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" />
                        <span className="text-[var(--color-primary)] font-semibold text-xs">Expert Care You Can Trust</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Meet <span className="text-[var(--color-primary)]">Dr. Anu Hirachan</span>
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Leading IVF Specialist with international training
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                    {/* Doctor Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative max-w-sm mx-auto lg:mx-0"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
                                alt="Dr. Anu Hirachan"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Doctor Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                Dr. Anu Hirachan
                            </h3>
                            <p className="text-lg text-[var(--color-primary)] font-semibold mb-4">
                                IVF Specialist & Founder
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                With over 15 years of experience in reproductive medicine and international training from the Philippines and India, Dr. Anu brings world-class fertility care to Nepal.
                            </p>
                        </div>

                        {/* Credentials */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-[var(--color-primary)]" />
                                Qualifications
                            </h4>
                            <div className="space-y-2">
                                {credentials.map((credential, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                        <Award className="w-4 h-4 text-[var(--color-calm)] flex-shrink-0 mt-0.5" />
                                        <span>{credential}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Link href="/team">
                                <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Learn More About Dr. Anu
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
