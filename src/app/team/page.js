"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teams = [
    {
        name: "Tech Team",
        members: [
            { name: "Ayush", role: "Developer", img: "/team/Ayush.jpg" },
            { name: "Raviraj", role: "Developer", img: "/team/Raviraj.jpg" },
            { name: "Sidharth", role: "Developer", img: "/team/Siddharth_.jpg" },
        ]
    },
    {
        name: "Sponsorship Team",
        members: [
            { name: "Hansika", role: "Outreach", img: "/team/Hansika.jpg" },
            { name: "Kritika", role: "Coordinator", img: "/team/Kritika.jpg" },
            { name: "Himanshu", role: "Outreach", img: "/team/himanshu.jpg" },
            { name: "Harsimar Kaur", role: "Outreach", img: "/team/Harsimar_Kaur.jpg" },
        ]
    },
    {
        name: "Documentation Team",
        members: [
            { name: "Muskan", role: "Content Writer", img: "/team/Muskan.jpg" },
            { name: "Aarzoo", role: "Technical Writer", img: "/team/Aarzoo.jpg" },
            { name: "Anshika", role: "Technical Writer", img: "/team/Anshika.jpg" },
            { name: "Harsh", role: "Content Creator", img: "/team/Harsh.jpg" },
            { name: "Trisha", role: "Content Creator", img: "/team/Trisha.jpg" },
        ]
    },
    {
        name: "Media and Content",
        members: [
            { name: "Harshvardhan", role: "Media Writer", img: "/team/Harshvardhan_.jpg" },
            { name: "Saumayajit", role: "Media Writer", img: "/team/Saumayajit.jpg" },
            { name: "Prince", role: "Media Writer", img: "/team/Prince_.jpg" },
            { name: "Navdeep", role: "Content Creator", img: "/team/Navdeep.jpg" },
            { name: "Satvik", role: "Content Creator", img: "/team/Satvik.jpg" },
        ]
    }
];

export default function Team() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.team-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    delay: (i % 4) * 0.1,
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
        <section id="team" className="min-h-screen bg-[#f5f5f5]">
            <h2 className="section-title">Our Team</h2>

            {teams.map((team, idx) => (
                <div key={idx} className="mb-16">
                    <h3 className="section-subtitle text-center text-[2.2rem] text-[#6082b6] mb-10 pb-2 border-b-2 border-[#6082b6]/20 inline-block relative left-1/2 -translate-x-1/2">
                        {team.name}
                    </h3>
                    <div className={`${idx === 0 ? 'flex flex-wrap justify-center gap-10' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'}`}>
                        {team.members.map((member, mIdx) => (
                            <div key={mIdx} className="team-card bg-white rounded-[15px] p-8 text-center shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-[120px] h-[120px] rounded-full mx-auto mb-6 border-4 border-[#6082b6] shadow-md overflow-hidden relative">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        onError={(e) => e.target.src = '/logo.png'} // Fallback
                                    />
                                </div>
                                <h3 className="text-[1.3rem] text-[#2c4363] mb-2">{member.name}</h3>
                                <p className="text-[#6082b6] font-semibold mb-4">{member.role}</p>
                                <p className="text-[#666] text-[0.95rem]">Description of their role or skills.</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
