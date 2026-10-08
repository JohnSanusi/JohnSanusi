'use client';

import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-1/2 z-50 w-full max-w-3xl -translate-x-1/2 px-6"
            >
                <div
                    className={`flex items-center justify-between gap-4 rounded-full border px-6 py-4 backdrop-blur-xl transition-all duration-300 ${
                        scrolled
                            ? 'border-white/15 bg-[#0f1117]/90 shadow-[0_0_30px_rgba(96,165,250,0.15)]'
                            : 'border-white/10 bg-[#101318]/75'
                    }`}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/" className="flex items-center justify-center">
                            <div className="relative flex items-center gap-2">
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold text-[#f5f5f7]">&lt;</span>
                                    <span className="mx-1 text-xl font-bold text-[#f5f5f7]">JS</span>
                                    <span className="text-2xl font-bold text-[#f5f5f7]">/&gt;</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <div className="hidden items-center gap-2 md:flex">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    <motion.a
                        href="https://github.com/johnsanusi"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#b6bcc6] transition-colors duration-200 hover:border-white/20 hover:text-[#f5f5f7] md:flex"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </motion.a>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#b6bcc6] transition-colors hover:border-white/20 hover:text-[#f5f5f7] md:hidden"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-24 z-40 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl border border-white/10 bg-[#101318]/95 shadow-[0_0_40px_rgba(59,130,246,0.12)] backdrop-blur-xl md:hidden"
                    >
                        <div className="space-y-2 px-6 py-6">
                            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
                                About
                            </MobileNavLink>
                            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>
                                Projects
                            </MobileNavLink>
                            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact
                            </MobileNavLink>
                            <div className="mt-2 border-t border-white/10 pt-2">
                                <a
                                    href="https://github.com/johnsanusi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#b6bcc6] transition-all hover:bg-white/5 hover:text-[#f5f5f7]"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="text-sm font-medium">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="rounded-full px-5 py-2 text-sm font-medium text-[#a8afb9] transition-all duration-200 hover:bg-white/5 hover:text-[#f5f5f7]"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block rounded-xl px-4 py-3 text-base font-medium text-[#f5f5f7] transition-all hover:bg-white/5 hover:text-[#b6bcc6]"
        >
            {children}
        </Link>
    );
}
