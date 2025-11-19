'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&auto=format&fit=crop&q=80"
                    alt="Happy family with baby"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
            </div>

            {/* Decorative Doodles */}
            <div className="absolute top-20 right-20 w-40 h-40 opacity-10 animate-float">
                <svg viewBox="0 0 100 100" className="text-[var(--color-primary)]">
                    <path d="M50 10 C70 10, 90 30, 90 50 C90 70, 70 90, 50 90 C30 90, 10 70, 10 50 C10 30, 30 10, 50 10"
                        stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="10,5" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                </svg>
            </div>
            <div className="absolute bottom-32 right-1/4 w-24 h-24 opacity-10 animate-pulse">
                <svg viewBox="0 0 100 100" className="text-[var(--color-calm)]">
                    <path d="M50 20 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="4" fill="none" />
                    <circle cx="50" cy="60" r="5" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl space-y-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
                    >
                        Your Journey to <br />
                        <span className="text-[var(--color-primary)]">Parenthood</span> Starts Here.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                    >
                        Advanced fertility treatments with a heart. Under the expert care of Dr. Anu Hirachan, we turn hope into happiness, one family at a time.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-4 flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                            >
                                Start Your Story
                            </motion.button>
                        </Link>
                        <Link href="/stories-of-hope">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                            >
                                Read Success Stories
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
