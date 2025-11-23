"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Text Color Logic:
    // - Scrolled: Black text (on white background)
    // - Not Scrolled (Transparent):
    //   - Home Page: White text (on dark hero image)
    //   - Other Pages: Black text (on light page background)
    const textColorClass = isScrolled ? 'text-black' : (isHomePage ? 'text-white' : 'text-black');
    const bgClass = isScrolled ? 'bg-white/60 backdrop-blur-md shadow-md py-1' : 'bg-transparent py-2';

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
            <div className="w-full px-6 flex justify-between items-center">

                {/* Logo and Brand Name */}
                <Link href="/" className="flex items-center gap-3 no-underline group">
                    <div className="relative w-16 h-16 transition-colors">
                        <Image
                            src="/logo.png"
                            alt="Tech Amigos Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    <Link href="/" className={`text-lg font-medium hover:text-[#6082b6] transition-opacity ${textColorClass} no-underline`}>
                        Home
                    </Link>
                    <Link href="/events" className={`text-lg font-medium hover:text-[#6082b6] transition-opacity ${textColorClass} no-underline`}>
                        Events
                    </Link>
                    <Link href="/about" className={`text-lg font-medium hover:text-[#6082b6] transition-opacity ${textColorClass} no-underline`}>
                        About
                    </Link>
                    <Link href="/activities" className={`text-lg font-medium hover:text-[#6082b6] transition-opacity ${textColorClass} no-underline`}>
                        Activities
                    </Link>
                    <Link href="/team" className={`text-lg font-medium hover:text-[#6082b6] transition-opacity ${textColorClass} no-underline`}>
                        Team
                    </Link>
                    <Link href="/register" className={`text-lg font-medium hover:text-[#6082b6] transition-opacity ${textColorClass} no-underline`}>
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden text-2xl ${textColorClass} focus:outline-none`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed top-0 right-0 w-1/2 h-screen bg-white/30 backdrop-blur-xl shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-32`}>
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 text-3xl text-black focus:outline-none hover:text-[#6082b6] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    ✕
                </button>
                <div className="flex flex-col items-center gap-4">
                    <Link
                        href="/"
                        className="text-black text-lg font-medium hover:text-[#6082b6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/events"
                        className="text-black text-lg font-medium hover:text-[#6082b6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Events
                    </Link>
                    <Link
                        href="/about"
                        className="text-black text-lg font-medium hover:text-[#6082b6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/activities"
                        className="text-black text-lg font-medium hover:text-[#6082b6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Activities
                    </Link>
                    <Link
                        href="/team"
                        className="text-black text-lg font-medium hover:text-[#6082b6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Team
                    </Link>
                    <Link
                        href="/register"
                        className="text-black text-lg font-medium hover:text-[#6082b6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}
