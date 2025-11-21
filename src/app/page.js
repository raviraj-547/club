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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = document.querySelectorAll('.hero-slide');
      let current = 0;

      const showSlide = (index) => {
        gsap.to(slides, { opacity: 0, duration: 1 });
        gsap.to(slides[index], { opacity: 1, duration: 1 });
        setCurrentSlide(index);

        // Dispatch event for Navbar - indicate if current image is the bright one
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

      gsap.fromTo(leadershipRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: leadershipRef.current,
            start: "top 80%",
          }
        }
      );

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

      gsap.utils.toArray('.section-title, .section-subtitle').forEach(title => {
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
      <section id="events" className="bg-white">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
          <div className="event-card bg-white rounded-[15px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
            <div className="h-[250px] relative">
              <Image src="/event1.jpg" alt="Event" fill className="object-cover" />
            </div>
            <div className="p-8">
              <div className="font-semibold text-[#6082b6] mb-4">November 25, 2025</div>
              <h3 className="text-2xl text-[#1a1a2e] mb-4">DevFest</h3>
              <p className="text-base text-[#666] mb-6">This is a description for the upcoming event.</p>
              <Link href="/register" className="btn bg-[#6082b6] text-white hover:bg-[#6082b6]">Register Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trophy Section */}
      <section>
        <div className="trophy-section bg-linear-to-br from-[#6082b6] to-[#6082b6] text-white text-center rounded-[20px] py-16 px-8 my-16 relative overflow-hidden">
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

      {/* Leadership Section */}
      <section id="leadership" className="bg-[#f5f5f5]" ref={leadershipRef}>
        <h2 className="section-title">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="text-center">
            <div className="w-[120px] h-[120px] rounded-full mx-auto mb-6 border-4 border-[#6082b6] shadow-md overflow-hidden relative">
              <Image src="/logo.png" alt="Tech Amigos Logo" fill className="object-cover" />
            </div>
            <p className="text-[#6082b6] font-semibold mb-4">President</p>
          </div>
          <div className="text-center">
            <div className="w-[120px] h-[120px] rounded-full mx-auto mb-6 border-4 border-[#6082b6] shadow-md overflow-hidden relative">
              <Image src="/team/Namit.jpg" alt="Vice President" fill className="object-cover" />
            </div>
            <p className="text-[#6082b6] font-semibold mb-4">Vice President</p>
          </div>
          <div className="text-center">
            <div className="w-[120px] h-[120px] rounded-full mx-auto mb-6 border-4 border-[#6082b6] shadow-md overflow-hidden relative">
              <Image src="/logo.png" alt="Tech Amigos Logo" fill className="object-cover" />
            </div>
            <p className="text-[#6082b6] font-semibold mb-4">Secretary</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-subtitle text-[2.2rem] mb-6">About Tech Amigos</h2>
            <div className="space-y-4 text-base text-[#666] leading-relaxed">
              <h3 className="text-2xl text-[#6082b6] mb-4">Leading Tech Community at CGC Landran</h3>
              <p>Tech Amigos is the premier technical club at CGC Landran, dedicated to fostering innovation and technical excellence among students.</p>
            </div>
          </div>
          <div>

            <Image src="/event1.2.jpg" alt="About" width={600} height={400} className="rounded-[15px] shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
