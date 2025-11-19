'use client';

import { motion } from 'framer-motion';
import { Instagram, Music2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export function SocialFeed() {
    useEffect(() => {
        // Load Instagram embed script
        const instagramScript = document.createElement('script');
        instagramScript.src = 'https://www.instagram.com/embed.js';
        instagramScript.async = true;
        document.body.appendChild(instagramScript);

        // Load TikTok embed script
        const tiktokScript = document.createElement('script');
        tiktokScript.src = 'https://www.tiktok.com/embed.js';
        tiktokScript.async = true;
        document.body.appendChild(tiktokScript);

        return () => {
            // Cleanup scripts on unmount
            if (document.body.contains(instagramScript)) {
                document.body.removeChild(instagramScript);
            }
            if (document.body.contains(tiktokScript)) {
                document.body.removeChild(tiktokScript);
            }
        };
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Doodles */}
            <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[var(--color-calm)]">
                    <path d="M20 50 Q35 20 50 50 T80 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
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
                        Follow Our <span className="text-[var(--color-primary)]">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Stay updated with daily tips, patient stories, and fertility insights on our social media.
                    </p>
                </motion.div>

                {/* Social Media Embeds */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Instagram Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <Instagram className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Instagram</h3>
                                    <p className="text-purple-600 text-sm font-semibold">@fishtail_ivf</p>
                                </div>
                            </div>
                            <Link
                                href="https://www.instagram.com/fishtail_ivf/"
                                target="_blank"
                                className="text-purple-500 hover:text-purple-600 transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Instagram Embed - Profile Feed */}
                        <div className="bg-white rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.instagram.com/fishtail_ivf/embed"
                                width="100%"
                                height="480"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency={true}
                                className="rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* TikTok Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-100"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <Music2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">TikTok</h3>
                                    <p className="text-cyan-600 text-sm font-semibold">@dr.anu.hirachan</p>
                                </div>
                            </div>
                            <Link
                                href="https://www.tiktok.com/@dr.anu.hirachan"
                                target="_blank"
                                className="text-cyan-500 hover:text-cyan-600 transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* TikTok Embed */}
                        <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center min-h-[480px]">
                            <blockquote
                                className="tiktok-embed"
                                cite="https://www.tiktok.com/@dr.anu.hirachan"
                                data-unique-id="dr.anu.hirachan"
                                data-embed-type="creator"
                                style={{ maxWidth: '605px', minWidth: '325px' }}
                            >
                                <section>
                                    <a
                                        target="_blank"
                                        href="https://www.tiktok.com/@dr.anu.hirachan"
                                        rel="noopener noreferrer"
                                    >
                                        @dr.anu.hirachan
                                    </a>
                                </section>
                            </blockquote>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center"
                >
                    <p className="text-gray-600 mb-4">
                        Connect with us on social media for daily updates, patient stories, and fertility tips!
                    </p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link
                            href="https://www.instagram.com/fishtail_ivf/"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            <Instagram className="w-5 h-5" />
                            Follow on Instagram
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@dr.anu.hirachan"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            <Music2 className="w-5 h-5" />
                            Follow on TikTok
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
