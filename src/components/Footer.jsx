import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0d1117] text-slate-300 font-mono border-t border-[#30363d]">
            
            {/* Terminal Header Bar */}
            <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between text-xs select-none">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                    </div>
                    <span className="ml-3 text-slate-500">user@tech-amigos:~/footer</span>
                </div>
                <div className="hidden md:block text-slate-600">bash — 80x24</div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-10">
                
                {/* Section 1: Brand (Simulated Code) */}
                <div className="md:col-span-5 space-y-4">
                    <h3 className="text-cyan-400 font-bold text-xl">
                        <span className="text-pink-500">const</span> Club = <span className="text-yellow-300">'{'{'}</span>
                    </h3>
                    <div className="pl-6 space-y-2 text-sm">
                        <p><span className="text-blue-400">name:</span> <span className="text-[#a5d6ff]">'Tech Amigos'</span>,</p>
                        <p><span className="text-blue-400">location:</span> <span className="text-[#a5d6ff]">'CGC Landran'</span>,</p>
                        <p><span className="text-blue-400">mission:</span> <span className="text-[#a5d6ff]">'Code. Create. Connect.'</span>,</p>
                        <p><span className="text-blue-400">status:</span> <span className="text-green-400">'Online'</span></p>
                    </div>
                    <h3 className="text-yellow-300 font-bold text-xl">{'}'};</h3>
                </div>

                {/* Section 2: Directory Links */}
                <div className="md:col-span-3">
                    <h4 className="text-slate-500 mb-4 text-sm uppercase tracking-wider">// Navigation</h4>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                <span className="text-slate-600 group-hover:text-cyan-400">./</span>home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                <span className="text-slate-600 group-hover:text-cyan-400">./</span>team
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                <span className="text-slate-600 group-hover:text-cyan-400">./</span>events
                            </a>
                        </li>
                        <li>
                            <a href="mailto:dswtechamigos@cgc.edu.in" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                <span className="text-slate-600 group-hover:text-cyan-400">./</span>contact_us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Command Line CTA */}
                <div className="md:col-span-4">
                    <div className="bg-[#000000] border border-[#30363d] rounded p-4 h-full">
                        <p className="text-slate-500 text-sm mb-4"># Join the community server</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-pink-500">➜</span>
                                <span className="text-cyan-400">~</span>
                                <span className="animate-pulse">_</span>
                            </div>
                            <a 
                                href="https://chat.whatsapp.com/KsU9mqGZlKA9YjT1NfZyx5?mode=wwt" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-center w-full py-2 bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-bold rounded border border-[rgba(240,246,252,0.1)] transition-colors"
                            >
                                npm run join-whatsapp
                            </a>
                        </div>
                        
                        {/* Social Icons as "Imports" */}
                        <div className="mt-8 pt-4 border-t border-[#30363d]">
                            <p className="text-xs text-slate-500 mb-3">import socials from 'network';</p>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/techamigosclub.dsw/" className="text-slate-400 hover:text-pink-400 transition-colors"><InstagramIcon /></a>
                                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><LinkedinIcon /></a>
                                <a href="mailto:dswtechamigos@cgc.edu.in" className="text-slate-400 hover:text-yellow-400 transition-colors"><MailIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* VIM Style Status Bar */}
            <div className="bg-[#1f6feb] text-white text-xs px-4 py-1 flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="font-bold">NORMAL</span>
                    <span>master*</span>
                    <span>© {currentYear} Tech Amigos</span>
                </div>
                <div className="hidden sm:block">
                   UTF-8 | 100% | Ln 42, Col 8
                </div>
            </div>
        </footer>
    );
}

// Simple Icons (No external library needed)
const InstagramIcon = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const LinkedinIcon = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const MailIcon = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
