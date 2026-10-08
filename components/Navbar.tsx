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
                className="fixed left-1/2 top-6 z-50 w-full max-w-[760px] -translate-x-1/2 px-4 md:px-6"
            >
                <div
                    className={`flex items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:px-6 ${
                        scrolled
                            ? 'border-white/15 bg-[#0e1319]/90 shadow-[0_0_30px_rgba(59,130,246,0.12)]'
                            : 'border-white/10 bg-[#0d1117]/70 shadow-[0_0_25px_rgba(0,0,0,0.2)]'
                    }`}
                >
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                        <Link href="/" className="flex items-center justify-center">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-[#f5f5f7]">&lt;</span>
                                <span className="text-lg font-semibold text-[#f5f5f7]">JS</span>
                                <span className="text-2xl font-bold text-[#f5f5f7]">/&gt;</span>
                            </div>
                        </Link>
                    </motion.div>

                    <div className="hidden items-center gap-2 md:flex">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    <div className="flex items-center gap-2">
                        <motion.a
                            href="https://github.com/johnsanusi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#b6bcc6] transition-colors duration-200 hover:border-white/20 hover:text-[#f5f5f7] md:flex"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </motion.a>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#b6bcc6] transition-colors hover:border-white/20 hover:text-[#f5f5f7] md:hidden"
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-24 z-40 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl border border-white/10 bg-[#0d1117]/95 shadow-[0_0_35px_rgba(59,130,246,0.15)] backdrop-blur-xl md:hidden"
                    >
                        <div className="space-y-2 px-5 py-5">
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
                                    <Github className="h-4 w-4" />
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
            className="rounded-full px-4 py-2 text-sm font-medium text-[#a8afb9] transition-all duration-200 hover:bg-white/5 hover:text-[#f5f5f7]"
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
            className="block rounded-xl px-3 py-3 text-base font-medium text-[#f5f5f7] transition-all hover:bg-white/5 hover:text-[#b6bcc6]"
        >
            {children}
        </Link>
    );
}
