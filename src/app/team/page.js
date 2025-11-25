"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teams = [
    {
        name: "Tech Team",
        members: [
            { name: "Ayush", role: "Developer", img: "/team/Ayush.jpg", linkedin: "#" },
            { name: "Raviraj", role: "Developer", img: "/team/Raviraj.jpg", linkedin: "#" },
            { name: "Sidharth", role: "Developer", img: "/team/Siddharth_.jpg", linkedin: "#" },
        ]
    },
    {
        name: "Sponsorship Team",
        members: [
            { name: "Hansika", role: "Outreach", img: "/team/Hansika.jpg", linkedin: "#" },
            { name: "Kritika", role: "Coordinator", img: "/team/Kritika.jpg", linkedin: "#" },
            { name: "Himanshu", role: "Outreach", img: "/team/himanshu.jpg", linkedin: "#" },
            { name: "Harsimar Kaur", role: "Outreach", img: "/team/Harsimar_Kaur.jpg", linkedin: "#" },
        ]
    },
    {
        name: "Documentation Team",
        members: [
            { name: "Muskan", role: "Content Writer", img: "/team/Muskan.jpg", linkedin: "#" },
            { name: "Aarzoo", role: "Technical Writer", img: "/team/Aarzoo.jpg", linkedin: "#" },
            { name: "Anshika", role: "Technical Writer", img: "/team/Anshika.jpg", linkedin: "#" },
            { name: "Harsh", role: "Content Creator", img: "/team/Harsh.jpg", linkedin: "#" },
            { name: "Trisha", role: "Content Creator", img: "/team/Trisha.jpg", linkedin: "#" },
        ]
    },
    {
        name: "Media and Content",
        members: [
            { name: "Harshvardhan", role: "Media Writer", img: "/team/Harshvardhan_.jpg", linkedin: "#" },
            { name: "Saumayajit", role: "Media Writer", img: "/team/Saumayajit.jpg", linkedin: "#" },
            { name: "Prince", role: "Media Writer", img: "/team/Prince_.jpg", linkedin: "#" },
            { name: "Navdeep", role: "Content Creator", img: "/team/Navdeep.jpg", linkedin: "#" },
            { name: "Satvik", role: "Content Creator", img: "/team/Satvik.jpg", linkedin: "#" },
        ]
    }
];

export default function Team() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.team-card').forEach((card) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            gsap.utils.toArray('.section-subtitle').forEach(title => {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: title,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="team" className="min-h-screen bg-[#f5f5f5] py-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-4xl font-bold text-center text-[#1a1a2e] mb-16">Our Team</h2>

                {teams.map((team, idx) => (
                    <div key={idx} className="mb-20">
                        <h3 className="section-subtitle text-center text-[2.2rem] text-[#6082b6] mb-12 pb-2 border-b-2 border-[#6082b6]/20 inline-block relative left-1/2 -translate-x-1/2">
                            {team.name}
                        </h3>

                        {/* GRID CENTER FOR TECH TEAM */}
                        <div 
                            className={`grid gap-8 
                                ${team.name === "Tech Team"
                                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center"
                                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                }
                            `}
                        >
                            {team.members.map((member, mIdx) => (
                                <div 
                                    key={mIdx} 
                                    className="team-card group bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
                                               hover:shadow-[0_20px_40px_rgba(96,130,182,0.15)] transition-all duration-300 
                                               hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6082b6] to-[#93b8e6] p-1 
                                                      group-hover:scale-105 transition-transform duration-300">
                                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                                                <Image
                                                    src={member.img}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => e.target.src = '/logo.png'}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="text-center relative z-10">
                                        <h3 className="text-xl font-bold text-[#1a1a2e] mb-1 group-hover:text-[#6082b6] transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#6082b6] font-medium tracking-wide uppercase text-xs mb-4">
                                            {member.role}
                                        </p>

                                        <div className="w-12 h-1 bg-[#6082b6]/20 mx-auto rounded-full mb-6 group-hover:w-24 group-hover:bg-[#6082b6] transition-all duration-300"></div>

                                        <div className="flex justify-center gap-4 opacity-0 transform translate-y-4 
                                                group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <Link href={member.linkedin} target="_blank" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
