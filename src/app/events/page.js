"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.event-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: (i % 3) * 0.1,
                    ease: "power2.out"
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="events" className="min-h-screen pt-24">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
                <div className="event-card bg-white rounded-[15px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                    <div className="h-[250px] relative">
                        <Image src="/event1.jpg" alt="Event" fill className="object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="font-semibold text-[#6082b6] mb-4">November 25, 2025</div>
                        <h3 className="text-2xl text-[#2c4363] mb-4">DevFest</h3>
                        <p className="text-base text-[#666] mb-6">This is a description for the upcoming event. Talk about what members will learn, who the speaker is, and why they should attend. Keep it concise!</p>
                        <Link href="/register" className="btn bg-[#6082b6] text-white hover:bg-[#6082b6]">Register Now</Link>
                    </div>
                </div>
                <div className="event-card bg-white rounded-[15px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                    <div className="h-[250px] relative">
                        <Image src="/event1.2.jpg" alt="Event" fill className="object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="font-semibold text-[#6082b6] mb-4">December 10, 2025</div>
                        <h3 className="text-2xl text-[#2c4363] mb-4">Workshop Event</h3>
                        <p className="text-base text-[#666] mb-6">Join us for an exciting workshop where you'll learn cutting-edge technologies and best practices from industry experts.</p>
                        <Link href="/register" className="btn bg-[#6082b6] text-white hover:bg-[#6082b6]">Register Now</Link>
                    </div>
                </div>

                <div className="event-card bg-white rounded-[15px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                    <div className="h-[250px] relative">
                        <Image src="/IMG_0073-1.jpg" alt="Event" fill className="object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="font-semibold text-[#6082b6] mb-4">January 15, 2026</div>
                        <h3 className="text-2xl text-[#2c4363] mb-4">Tech Talk Series</h3>
                        <p className="text-base text-[#666] mb-6">Experience inspiring talks from tech leaders and innovators sharing their journey and insights into the future of technology.</p>
                        <Link href="/register" className="btn bg-[#6082b6] text-white hover:bg-[#6082b6]">Register Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
