"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const leadershipRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- DATA: Hero Images ---
  const images = [
    'IMG-20250811-WA0040.jpg',
    'IMG-20250812-WA0020.jpg',
    'IMG_0046 (3).jpg',
    'IMG_0073-1.jpg',
    'event1.jpg',
    'event1.2.jpg',
    'IMG_0079.jpg',
    'trophy.jpg'
  ];

  // --- DATA: Leaders ---
  const leaders = [
    { 
      name: "Aastha", 
      role: "President", 
      image: "/team/Aastha.jpeg",
      linkedin: "#" 
    },
    { 
      name: "Namit", 
      role: "Vice President", 
      image: "/team/Namit.jpg",
      linkedin: "#" 
    },
    { 
      name: "Kamakshi", 
      role: "Secretary", 
      image: "/team/kamakshi.jpeg",
      linkedin: "#" 
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO SLIDER LOGIC
      const slides = document.querySelectorAll('.hero-slide');
      let current = 0;

      const showSlide = (index) => {
        gsap.to(slides, { opacity: 0, duration: 1 });
        gsap.to(slides[index], { opacity: 1, duration: 1 });
        setCurrentSlide(index);

        const isBrightImage = images[index] === 'IMG_0046 (3).jpg';
        window.dispatchEvent(new CustomEvent('heroImageChange', {
          detail: { isBrightImage }
        }));
      };

      showSlide(0);

      const interval = setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 5000);

      // 2. LEADERSHIP ANIMATION (UPDATED)
      // Animate the Title
      gsap.fromTo(leadershipRef.current.querySelector('.section-title'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: leadershipRef.current,
            start: "top 75%",
          }
        }
      );

      // Animate the Cards (Staggered)
      gsap.fromTo('.leader-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2, // Cards appear one by one
          ease: "power3.out",
          scrollTrigger: {
            trigger: leadershipRef.current,
            start: "top 70%",
          }
        }
      );

      // 3. EVENTS ANIMATION
      gsap.fromTo('.event-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#events',
            start: "top 70%",
          }
        }
      );

      // 4. GENERAL TITLES ANIMATION
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

      // 5. TROPHY ANIMATION
      gsap.from('.trophy-section', {
        scrollTrigger: {
          trigger: '.trophy-section',
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out"
      });

      return () => clearInterval(interval);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-screen max-w-none flex items-center justify-center 
             text-center text-white overflow-hidden p-0 m-0"
        ref={heroRef}
      >
        <div className="absolute inset-0 w-full h-full z-1">
          {images.map((src, index) => (
            <div
              key={index}
              className="hero-slide absolute inset-0 w-full h-full opacity-0"
            >
              <Image
                src={`/${src}`}
                alt="Tech Amigos"
                fill
                className="object-cover brightness-75"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full z-2 bg-linear-to-b from-black/40 to-black/20"></div>

        {/* Content */}
        <div className="relative z-3 p-8 max-w-[900px] text-shadow-hero">
          <h1 className="text-[2.5rem] md:text-[4rem] mb-4 animate-[fadeInUp_1s_ease-out]">
            Tech Amigos Club
          </h1>
          <p className="text-[1.2rem] md:text-[1.5rem] mb-8 animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Empowering Innovation, Building Community
          </p>
          <Link href="/#events" className="btn">Explore More</Link>

          <div className="flex justify-center gap-12 mt-12 animate-[fadeInUp_1s_ease-out_0.6s_both] flex-col md:flex-row">
            <div>
              <div className="text-[2.5rem] font-bold">50+</div>
              <div className="text-[1rem]">Events Hosted</div>
            </div>
            <div>
              <div className="text-[2.5rem] font-bold">🏆</div>
              <div className="text-[1rem]">Best Club Award</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white p-8 md:p-16">
        <h2 className="section-title text-center text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
          <div className="event-card bg-white rounded-[15px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
            <div className="h-[250px] relative">
              <Image src="/event1.jpg" alt="Event" fill className="object-cover" />
            </div>
            <div className="p-8">
              <div className="font-semibold text-[#6082b6] mb-4">November 25, 2025</div>
              <h3 className="text-2xl text-[#1a1a2e] mb-4">DevFest</h3>
              <p className="text-base text-[#666] mb-6">This is a description for the upcoming event.</p>
              <Link href="/register" className="btn bg-[#6082b6] text-white hover:bg-[#6082b6] inline-block px-6 py-2 rounded">Register Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trophy Section */}
      <section className="px-4">
        <div className="trophy-section bg-linear-to-br from-[#6082b6] to-[#6082b6] text-white text-center rounded-[20px] py-16 px-8 my-16 relative overflow-hidden max-w-7xl mx-auto">
          <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[rotate_20s_linear_infinite]"></div>
          <div className="relative z-1">
            <h2 className="text-[2.5rem] mb-4">🏆 Best Club Award Winner</h2>
            <p className="text-[1.3rem] opacity-95">Recognized for Excellence in Technical Innovation & Community Building</p>
            <div className="max-w-[300px] mx-auto my-8 animate-[float_3s_ease-in-out_infinite]">
              <Image src="/trophy.jpg" alt="Best Club Trophy" width={300} height={300} className="w-full rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]" />
            </div>
            <p className="text-[1.1rem] mt-4">We're proud to have been awarded the Best Club at CGC Landran, a testament to our dedication, hard work, and the incredible spirit of our members.</p>
          </div>
        </div>
      </section>

      {/* Leadership Section  */}
      <section id="leadership" className="bg-[#f8faff] py-20" ref={leadershipRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-bold text-[#1a1a2e] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              The minds behind the innovation. Leading Tech Amigos with passion and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="leader-card group bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
                           hover:shadow-[0_20px_40px_rgba(96,130,182,0.15)] transition-all duration-300 
                           hover:-translate-y-2 active:scale-95 border border-gray-100"
              >
                {/* Image Container with Gradient Ring */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#6082b6] to-[#93b8e6] p-1 
                                group-hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1 group-hover:text-[#6082b6] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-[#6082b6] font-medium tracking-wide uppercase text-sm mb-4">
                    {leader.role}
                  </p>

                  {/* Decorative Line: Mobile (Visible/Wide) vs Desktop (Hidden/Small) */}
                  <div className="h-1 mx-auto rounded-full mb-6 transition-all duration-300
                                  w-24 bg-[#6082b6] 
                                  lg:w-12 lg:bg-[#6082b6]/20 lg:group-hover:w-24 lg:group-hover:bg-[#6082b6]"></div>

                  {/* Social Links: Mobile (Visible) vs Desktop (Hover only) */}
                  <div className="flex justify-center gap-4 transition-all duration-300
                                  opacity-100 translate-y-0
                                  lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                    <Link href={leader.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="section-subtitle text-[2.2rem] mb-6 font-bold">About Tech Amigos</h2>
            <div className="space-y-4 text-base text-[#666] leading-relaxed">
              <h3 className="text-2xl text-[#6082b6] mb-4">Leading Tech Community at CGC Landran</h3>
              <p>Tech Amigos is the premier technical club at CGC Landran, dedicated to fostering innovation and technical excellence among students.</p>
            </div>
          </div>
          <div className="relative h-[400px]">
            {/* Adjusted to fill container properly */}
            <Image src="/event1.2.jpg" alt="About" fill className="rounded-[15px] shadow-lg object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}