'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-[var(--color-separator)] via-white to-[var(--color-calm)]/5 pt-20 pb-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-calm)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-primary)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                Fishtail<span className="text-[var(--color-primary)]">IVF</span>
                                <Heart className="w-6 h-6 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Transforming dreams into reality with advanced fertility care and unwavering compassion.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] transition-all duration-300 shadow-sm hover:shadow-md">
                                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/fishtail_ivf/" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] transition-all duration-300 shadow-sm hover:shadow-md">
                                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                            <a href="https://www.tiktok.com/@dr.anu.hirachan" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] transition-all duration-300 shadow-sm hover:shadow-md">
                                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Stories of Hope', href: '/stories-of-hope' },
                                { name: 'Our Services', href: '/services' },
                                { name: 'Educational Resources', href: '/resources' },
                                { name: 'The Fishtail Team', href: '/team' },
                                { name: 'Contact Us', href: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group flex items-center gap-2 text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'IVF Treatment', href: '/services/ivf' },
                                { name: 'IUI Treatment', href: '/services/iui' },
                                { name: 'ICSI', href: '/services/icsi' },
                                { name: 'Egg Freezing', href: '/services/egg-freezing' },
                                { name: 'PGT Testing', href: '/services/pgt' }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="group flex items-center gap-2 text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                                        <span>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-calm)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-calm)]/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-[var(--color-calm)]" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Visit Us</p>
                                    <p className="text-sm text-gray-600">123 Fertility Lane, Hope City</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-calm)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-calm)]/20 transition-colors">
                                    <Phone className="w-5 h-5 text-[var(--color-calm)]" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Call Us</p>
                                    <a href="tel:+15551234567" className="text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors">+1 (555) 123-4567</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-calm)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-calm)]/20 transition-colors">
                                    <Mail className="w-5 h-5 text-[var(--color-calm)]" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Email Us</p>
                                    <a href="mailto:hello@fishtailivf.com" className="text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors">hello@fishtailivf.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mb-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Start Your Journey?</h3>
                            <p className="text-white/90 text-lg">Book a consultation with our fertility experts today.</p>
                        </div>
                        <Link href="/contact">
                            <button className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-calm)] hover:text-white hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap flex items-center gap-2">
                                Book Consultation <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Fishtail IVF Centre. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
