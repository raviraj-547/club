import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0f0f1a] text-white pt-16 pb-8 px-[5%] text-left">
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-[1400px] mx-auto mb-12">
                <div className="footer-column">
                    <h3 className="text-2xl mb-6 text-white">Tech Amigos Club</h3>
                    <p className="text-base leading-relaxed opacity-80">Building a community where tech enthusiasts connect, learn, and grow together.</p>
                </div>
                <div className="footer-column">
                    <h3 className="text-2xl mb-6 text-white">Connect With Us</h3>
                    <ul className="list-none p-0">
                        <li className="mb-4">
                            <a href="#" className="text-white opacity-80 hover:opacity-100 hover:text-[#6082b6] transition-all flex items-center gap-3">
                                💼 Follow us on LinkedIn
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.instagram.com/techamigosclub.dsw/" className="text-white opacity-80 hover:opacity-100 hover:text-[#6082b6] transition-all flex items-center gap-3">
                                📷 Follow us on Instagram
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="mailto:dswtechamigos@cgc.edu.in" className="text-white opacity-80 hover:opacity-100 hover:text-[#6082b6] transition-all flex items-center gap-3">
                                📧 dswtechamigos@cgc.edu.in
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="bg-[#2c4363] p-10 rounded-[15px]">
                        <h3 className="text-white text-2xl mb-4">Join Our Community</h3>
                        <p className="opacity-90 mb-6">Join our <strong>WhatsApp group</strong> for instant updates, discussions, and event notifications!</p>
                        <a href="https://chat.whatsapp.com/KsU9mqGZlKA9YjT1NfZyx5?mode=wwt" className="inline-block py-3 px-7 rounded-full font-bold text-white bg-gradient-to-r from-[#007BFF] to-[#00C6FF] shadow-[0_4px_15px_rgba(0,198,255,0.2)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,198,255,0.3)] transition-all text-center no-underline">
                            Join WhatsApp Group
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10 opacity-70">
                <p>&copy; 2025 Tech Amigos Club - CGC Landran. All rights reserved.</p>
            </div>
        </footer>
    );
}
