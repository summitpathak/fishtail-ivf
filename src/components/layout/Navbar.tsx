import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900 tracking-tight">
                        Fishtail<span className="text-[var(--color-primary)]">IVF</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                        Home
                    </Link>
                    <Link href="/stories-of-hope" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                        Stories of Hope
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                        Our Services
                    </Link>
                    <Link href="/resources" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                        Resources
                    </Link>
                    <Link href="/team" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                        The Fishtail Team
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* CTA Button - Visible on all screens */}
                    <Link href="/contact">
                        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap">
                            Start Your Story
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
