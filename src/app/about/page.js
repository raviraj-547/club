"use client";

import { useEffect } from 'react';

import Image from 'next/image';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);



export default function About() {

    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.from('.about-content', {

                scrollTrigger: {

                    trigger: '.about-content',

                    start: "top bottom-=100",

                    toggleActions: "play none none reverse"

                },

                opacity: 0,

                y: 50,

                duration: 0.8,

                ease: "power2.out"

            });



            gsap.from('.about-image', {

                scrollTrigger: {

                    trigger: '.about-image',

                    start: "top bottom-=100",

                    toggleActions: "play none none reverse"

                },

                opacity: 0,

                x: -50,

                duration: 0.8,

                ease: "power2.out"

            });

        });



        return () => ctx.revert();

    }, []);



    return (

        <section id="about" className="min-h-screen pt-24 relative">

            <h2 className="section-title">About Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">

                <div className="about-image relative rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] group">

                    <Image

                        src="/event1.2.jpg"

                        alt="About Tech Amigos"

                        width={600}

                        height={500}

                        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"

                    />

                </div>

                <div className="about-content">

                    <h3 className="text-2xl text-[#6082b6] mb-4">Leading Tech Community at CGC Landran</h3>

                    <p className="text-[1.1rem] text-[#555] mb-6 leading-relaxed">

                        Tech Amigos is the premier technology club at CGC Landran, dedicated to fostering innovation, creativity, and technical excellence among students. We believe in learning by doing, and our community is built on collaboration, knowledge sharing, and pushing the boundaries of what's possible.

                    </p>

                    <p className="text-[1.1rem] text-[#555] mb-6 leading-relaxed">

                        Our mission is to create a platform where passionate tech enthusiasts can come together to learn, build, and innovate. From hackathons to workshops, coding competitions to tech talks, we provide countless opportunities for our members to grow their skills and network with like-minded individuals.

                    </p>

                    <p className="text-[1.1rem] text-[#555] mb-6 leading-relaxed">

                        Whether you're a beginner taking your first steps into the world of technology or an experienced developer looking to collaborate on exciting projects, Tech Amigos welcomes you to join our thriving community.

                    </p>

                </div>

            </div>



            {/* Trophy Section */}

            <div className="trophy-section bg-gradient-to-br from-[#6082b6] to-[#6082b6] text-white text-center rounded-[20px] py-16 px-8 my-16 relative overflow-hidden">

                <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[rotate_20s_linear_infinite]"></div>

                <div className="relative z-[1]">

                    <h2 className="text-[2.5rem] mb-4">🏆 Best Club Award Winner</h2>

                    <p className="text-[1.3rem] opacity-95">Recognized for Excellence in Technical Innovation & Community Building</p>

                    <div className="max-w-[300px] mx-auto my-8 animate-[float_3s_ease-in-out_infinite]">

                        <Image src="/trophy.jpg" alt="Best Club Trophy" width={300} height={300} className="w-full rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]" />

                    </div>

                    <p className="text-[1.1rem] mt-4">We're proud to have been awarded the Best Club at CGC Landran, a testament to our dedication, hard work, and the incredible spirit of our members.</p>

                </div>

            </div>



            {/* Stats Section */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                <div className="text-center p-8 bg-white rounded-[15px] shadow-[0_5px_25px_rgba(0,0,0,0.1)]">

                    <div className="text-[3rem] font-bold text-[#6082b6] mb-2">50+</div>

                    <div className="text-[1.2rem] text-[#555]">Events Hosted</div>

                </div>

                <div className="text-center p-8 bg-white rounded-[15px] shadow-[0_5px_25px_rgba(0,0,0,0.1)]">

                    <div className="text-[3rem] font-bold text-[#6082b6] mb-2">500+</div>

                    <div className="text-[1.2rem] text-[#555]">Active Members</div>

                </div>

                <div className="text-center p-8 bg-white rounded-[15px] shadow-[0_5px_25px_rgba(0,0,0,0.1)]">

                    <div className="text-[3rem] font-bold text-[#6082b6] mb-2">🏆</div>

                    <div className="text-[1.2rem] text-[#555]">Best Club Award</div>

                </div>

            </div>

        </section>

    );

}