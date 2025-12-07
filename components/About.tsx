'use client';

import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiDocker,
    SiVuedotjs,
    SiNuxtdotjs,
} from 'react-icons/si';

const languages = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
];

const tools = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

export default function About() {
    return (
        <section id="about" className="py-32 px-6 bg-[#000000] relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.04, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-1/2 w-96 h-96 bg-[#1d1d1f] rounded-full blur-[120px]"
            />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f7] mb-4 tracking-tight">
                            About Me
                        </h2>
                        <motion.div
                            className="h-1 bg-[#f5f5f7] rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mb-20 max-w-3xl"
                    >
                        <div className="absolute -left-4 top-0 w-1 h-full bg-[#f5f5f7] rounded-full" />
                        <p className="leading-relaxed text-xl text-[#86868b] pl-8 mb-4">
                            I'm a full-stack developer specializing in the MERN ecosystem, with expertise in building modern, scalable web applications. My focus is on creating clean, efficient code and delivering seamless user experiences.
                        </p>
                        <p className="leading-relaxed text-xl text-[#86868b] pl-8">
                            With a strong foundation in JavaScript and TypeScript, I work across the entire stack—from crafting responsive interfaces with React and Vue to building robust APIs with Node.js and Express. I'm passionate about staying current with industry trends and continuously refining my craft.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <SkillsSection title="Languages" items={languages} />
                        <SkillsSection title="Tools & Technologies" items={tools} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SkillsSection({
    title,
    items,
}: {
    title: string;
    items: Array<{ name: string; icon: any; color: string }>;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <h3 className="text-2xl font-semibold text-[#f5f5f7] mb-8">{title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        className="relative flex flex-col items-center justify-center p-4 bg-[#1c1c1e] rounded-2xl hover:bg-[#2c2c2e] transition-all duration-300 group cursor-pointer"
                    >
                        <motion.div
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.1,
                            }}
                        >
                            <item.icon
                                className="w-8 h-8 mb-3 text-[#86868b] group-hover:text-[var(--color)] transition-colors duration-300 relative z-10"
                                style={{ '--color': item.color } as React.CSSProperties}
                            />
                        </motion.div>

                        <span className="text-xs font-medium text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300 text-center relative z-10">
                            {item.name}
                        </span>

                        {/* Bottom Border Accent */}
                        <motion.div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#f5f5f7]"
                            initial={{ width: 0 }}
                            whileHover={{ width: '60%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

