"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!footerRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        // 1. Reduced outer padding (pt-6, pb-4)
        <footer className="bg-[#0a0a0a] pt-6 px-4 pb-4 flex justify-center">
            <div 
                ref={footerRef}
                onMouseMove={handleMouseMove}
                className="relative w-full max-w-7xl bg-[#111] rounded-[2rem] overflow-hidden border border-white/10 group"
            >
                {/* Spotlight Gradient */}
                <div 
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(96, 130, 182, 0.15), transparent 40%)`
                    }}
                />

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                </div>

                {/* 2. Reduced inner container padding (p-6 md:p-10) */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col h-full justify-between">
                    
                    {/* Top Section: Reduced gap and margin (gap-8, mb-10) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                        
                        {/* CTA Section */}
                        <div className="space-y-6">
                            {/* Slightly smaller heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[0.9]">
                                Let's build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6082b6] to-cyan-300">
                                    the future.
                                </span>
                            </h2>
                            <p className="text-neutral-400 text-sm md:text-base max-w-sm">
                                Join the Tech Amigos Club WhatsApp Group.
                            </p>
                            
                            <a 
                                href="https://chat.whatsapp.com/KsU9mqGZlKA9YjT1NfZyx5?mode=wwt" 
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#6082b6] hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                <span>Join the Community</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>

                        {/* Links Grid: Tighter spacing */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-end">
                            <FooterColumn title="Socials" links={[
                                { name: "Instagram", url: "https://www.instagram.com/techamigosclub.dsw/" },
                                { name: "LinkedIn", url: "#" },
                                { name: "Twitter", url: "#" }
                            ]} />
                            <FooterColumn title="Club" links={[
                                { name: "About", url: "#about" },
                                { name: "Events", url: "#events" },
                                { name: "Team", url: "#leadership" }
                            ]} />
                            <FooterColumn title="Contact" links={[
                                { name: "Email", url: "mailto:dswtechamigos@cgc.edu.in" },
                                { name: "Sponsor", url: "#" }
                            ]} />
                        </div>
                    </div>

                    {/* Marquee: Reduced padding (py-4) and text size (text-5xl) */}
                    <div className="w-full overflow-hidden py-4 border-t border-white/10 relative mask-linear-fade">
                        <div className="whitespace-nowrap animate-marquee flex items-center gap-8 text-[#6082b6]/20 font-black text-5xl md:text-6xl select-none">
                            <span>TECH AMIGOS</span>
                            <span className="text-white/10">•</span>
                            <span>INNOVATE</span>
                            <span className="text-white/10">•</span>
                            <span>BUILD</span>
                            <span className="text-white/10">•</span>
                            <span>TECH AMIGOS</span>
                            <span className="text-white/10">•</span>
                            <span>INNOVATE</span>
                            <span className="text-white/10">•</span>
                            <span>BUILD</span>
                        </div>
                    </div>

                    {/* Bottom Bar: Reduced top padding (pt-4) */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 text-neutral-500 text-xs font-medium">
                        <p>&copy; {currentYear} Tech Amigos Club. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>

                </div>
            </div>
            
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .mask-linear-fade {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </footer>
    );
}

// Helper Component (Compact Text)
function FooterColumn({ title, links }) {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm">{title}</h4>
            <ul className="space-y-1.5">
                {links.map((link, idx) => (
                    <li key={idx}>
                        <a 
                            href={link.url} 
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[#6082b6] transition-colors duration-300 text-xs md:text-sm"
                        >
                            <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                &gt;
                            </span>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}