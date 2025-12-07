'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-30 overflow-hidden">
            {/* Animated Background Effects */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-full h-full"
            >
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#1d1d1f] rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#1d1d1f] rounded-full blur-[100px]" />
            </motion.div>

            {/* Floating Grid Pattern */}
            <motion.div
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                className="absolute inset-0 opacity-[0.02]"
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #f5f5f7 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block mb-4 px-4 py-2 bg-[#1c1c1e] border border-[#38383a] rounded-full"
                        >
                            <span className="text-sm text-[#86868b]">Available for work</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-[#f5f5f7] mb-6 tracking-tight leading-[1.1]">
                            MERN Stack
                            <br />
                            Developer
                        </h1>

                        <p className="text-xl md:text-lg text-[#86868b] mb-8 leading-relaxed">
                            Hi, I'm <span className="text-[#f5f5f7] font-semibold">John Sanusi</span>.
                            I architect scalable full-stack solutions using MongoDB, Express, React, and Node.js—transforming complex ideas into elegant digital experiences.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-[#f5f5f7] text-[#000000] font-semibold rounded-xl transition-all hover:bg-[#e8e8ed]"
                            >
                                View Work
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-[#1c1c1e] text-[#f5f5f7] font-semibold rounded-xl border border-[#38383a] transition-all hover:bg-[#2c2c2e] hover:border-[#48484a]"
                            >
                                Contact Me
                            </motion.a>
                        </div>

                        {/* Stats */}
                        { /* <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#38383a]">
                            <div>
                                <div className="text-3xl font-bold text-[#f5f5f7] mb-1">3+</div>
                                <div className="text-sm text-[#86868b]">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#f5f5f7] mb-1">20+</div>
                                <div className="text-sm text-[#86868b]">Projects Done</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#f5f5f7] mb-1">15+</div>
                                <div className="text-sm text-[#86868b]">Happy Clients</div>
                            </div>
                        </div>*/}
                    </motion.div>

                    {/* Right Column - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Animated Rings */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 border border-[#38383a] rounded-full"
                                    animate={{
                                        scale: [1 + i * 0.15, 1.1 + i * 0.15, 1 + i * 0.15],
                                        opacity: [0.3, 0.15, 0.3],
                                        rotate: [0, 180, 360],
                                    }}
                                    transition={{
                                        duration: 8 + i * 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        transformOrigin: 'center',
                                    }}
                                />
                            ))}

                            {/* Center Element */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="w-48 h-48 bg-[#1c1c1e] border border-[#38383a] rounded-3xl flex items-center justify-center">
                                    <span className="text-6xl font-bold text-[#f5f5f7]">JS</span>
                                </div>
                            </motion.div>

                            {/* Floating MERN Stack Icons */}
                            {[
                                { Icon: SiMongodb, label: 'MongoDB', delay: 0, x: -100, y: -50, color: '#47A248' },
                                { Icon: SiExpress, label: 'Express', delay: 1, x: 100, y: -30, color: '#f5f5f7' },
                                { Icon: SiReact, label: 'React', delay: 2, x: -80, y: 70, color: '#61DAFB' },
                                { Icon: SiNodedotjs, label: 'Node.js', delay: 1.5, x: 90, y: 80, color: '#339933' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-16 h-16 bg-[#1c1c1e] border border-[#38383a] rounded-xl flex items-center justify-center"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    animate={{
                                        x: [0, item.x, 0],
                                        y: [0, item.y, 0],
                                        rotate: [0, 360, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: item.delay,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <item.Icon
                                        className="w-8 h-8"
                                        style={{ color: item.color }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-[#86868b] font-medium">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown className="w-5 h-5 text-[#86868b]" />
                </motion.div>
            </motion.div>
        </section>
    );
}

