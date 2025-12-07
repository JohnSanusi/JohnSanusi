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
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6"
            >
                <div className={`flex items-center justify-between gap-4 bg-[#1c1c1e]/80 backdrop-blur-xl rounded-full px-6 py-4 border border-[#38383a] transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/20' : ''
                    }`}>
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <div className="relative flex items-center gap-2">
                                {/* Bracket design */}
                                <div className="flex items-center">
                                    <span className="text-[#f5f5f7] text-2xl font-bold">&lt;</span>
                                    <span className="text-[#f5f5f7] text-xl font-bold mx-1">JS</span>
                                    <span className="text-[#f5f5f7] text-2xl font-bold">/&gt;</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    {/* GitHub Link */}
                    <motion.a
                        href="https://github.com/johnsanusi"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden md:flex items-center justify-center w-10 h-10 text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200 rounded-full hover:bg-[#2c2c2e]"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 text-[#86868b] hover:text-[#f5f5f7] rounded-full hover:bg-[#2c2c2e] transition-colors"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%] max-w-sm bg-[#1c1c1e]/95 backdrop-blur-xl rounded-3xl border border-[#38383a] shadow-xl"
                    >
                        <div className="px-6 py-6 space-y-2">
                            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
                                About
                            </MobileNavLink>
                            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>
                                Projects
                            </MobileNavLink>
                            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact
                            </MobileNavLink>
                            <div className="pt-2 mt-2 border-t border-[#38383a]">
                                <a
                                    href="https://github.com/johnsanusi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 text-[#86868b] hover:text-[#f5f5f7] hover:bg-[#2c2c2e] rounded-xl transition-all"
                                >
                                    <Github className="w-5 h-5" />
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
            className="px-5 py-2 text-sm font-medium text-[#86868b] hover:text-[#f5f5f7] rounded-full hover:bg-[#2c2c2e] transition-all duration-200"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({
    href,
    onClick,
    children
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block px-4 py-3 text-base font-medium text-[#f5f5f7] hover:text-[#86868b] hover:bg-[#2c2c2e] rounded-xl transition-all"
        >
            {children}
        </Link>
    );
}
