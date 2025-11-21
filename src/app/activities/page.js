"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const activities = [
    { title: "Workshops1", description: "Hands-on learning sessions covering the latest technologies and industry best practices", image: "/event1.jpg" },
    { title: "Workshops2", description: "Hands-on learning sessions covering the latest technologies and industry best practices.", image: "/event1.2.jpg" },
    { title: "Team Building", description: "Fun activities and collaborative projects that strengthen our tech family bonds.", image: "/IMG_0079.jpg" },
    { title: "Group Photo", description: "Capture the moments with our amazing team!", image: "/grp1.jpg" },
    { title: "Tech Talks", description: "Industry experts share their knowledge and experiences with our community.", image: "/grp.jpg" },
];

export default function Activities() {
    const [selectedActivity, setSelectedActivity] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.activity-card').forEach((card, i) => {
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

    const openModal = (activity) => setSelectedActivity(activity);
    const closeModal = () => setSelectedActivity(null);

    return (
        <>
            <section id="activities" className="min-h-[calc(100vh-72px)]">
                <h2 className="section-title">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
                    {activities.map((activity, idx) => (
                        <div
                            key={idx}
                            className="activity-card relative rounded-[15px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer h-[300px] group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
                            onClick={() => openModal(activity)}
                        >
                            <Image
                                src={activity.image}
                                alt={activity.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#2c4363]/90 via-[#2c4363]/60 to-transparent p-8 text-white flex flex-col justify-end">
                                <h3 className="text-[1.8rem] mb-2 leading-tight">{activity.title}</h3>
                                <p className="text-[1rem] opacity-100 m-0">{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {selectedActivity && (
                <div className="fixed inset-0 z-2000 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70 animate-[fadeIn_0.3s_ease-out]" onClick={closeModal}></div>
                    <div className="relative bg-white rounded-[15px] w-[90%] max-w-[600px] z-2001 shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-hidden max-h-[90vh] animate-[scaleIn_0.3s_ease-out]">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-4 bg-black/30 text-white border-none rounded-full w-8 h-8 text-2xl leading-none cursor-pointer z-10 hover:bg-black/60 transition-colors flex items-center justify-center pb-1"
                        >
                            &times;
                        </button>
                        <div className="relative w-full h-[280px]">
                            <Image src={selectedActivity.image} alt={selectedActivity.title} fill className="object-cover" />
                        </div>
                        <div className="p-8 max-h-[50vh] overflow-y-auto">
                            <h3 className="text-[1.8rem] text-[#2c4363] mb-4">{selectedActivity.title}</h3>
                            <p className="text-[1.1rem] text-[#555] leading-relaxed">{selectedActivity.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            `}</style>
        </>
    );
}
