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
        <section id="about" className="relative overflow-hidden px-6 py-32">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.05, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[-5%] top-1/2 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]"
            />

            <div className="relative z-10 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="mb-12">
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#8a8a91]">
                            About
                        </p>
                        <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#f5f5f7] md:text-5xl">
                            Building thoughtful digital experiences.
                        </h2>
                        <motion.div
                            className="h-1 w-[100px] rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400"
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
                        className="relative mb-20 max-w-3xl rounded-[28px] border border-white/10 bg-white/3 p-6 backdrop-blur-sm md:p-8"
                    >
                        <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-violet-400 via-sky-400 to-emerald-400" />
                        <p className="mb-4 pl-8 text-lg leading-relaxed text-[#a8afb9] md:text-xl">
                            I&apos;m a full-stack developer specializing in the MERN ecosystem, with expertise in building modern, scalable web applications. My focus is on creating clean, efficient code and delivering seamless user experiences.
                        </p>
                        <p className="pl-8 text-lg leading-relaxed text-[#a8afb9] md:text-xl">
                            With a strong foundation in JavaScript and TypeScript, I work across the entire stack—from crafting responsive interfaces with React and Vue to building robust APIs with Node.js and Express. I&apos;m passionate about staying current with industry trends and continuously refining my craft.
                        </p>
                    </motion.div>

                    <div className="grid gap-16 md:grid-cols-2">
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
            <h3 className="mb-8 text-2xl font-semibold text-[#f5f5f7]">{title}</h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.2 },
                        }}
                        className="group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#101318]/80 p-4 transition-all duration-300 hover:border-white/20 hover:bg-[#131a22]"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                        >
                            <item.icon
                                className="relative z-10 mb-3 h-8 w-8 text-[#9aa4b2] transition-colors duration-300 group-hover:text-[var(--color)]"
                                style={{ '--color': item.color } as React.CSSProperties}
                            />
                        </motion.div>

                        <span className="relative z-10 text-center text-xs font-medium text-[#b6bcc6] transition-colors duration-300 group-hover:text-[#f5f5f7]">
                            {item.name}
                        </span>

                        <motion.div
                            className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400"
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

