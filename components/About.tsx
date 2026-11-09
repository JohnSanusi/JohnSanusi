'use client';

import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiSupabase,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiVite,
    SiVercel,
    SiVuedotjs,
    SiNuxtdotjs,
} from 'react-icons/si';

const frontendSkills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

const backendSkills = [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#f5f5f7' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
];

const toolSkills = [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
];

const additionalSkills = [
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82' },
];

const stats = [
    { value: '3+', label: 'Years building' },
    { value: 'Full-Stack', label: 'Core focus' },
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
                className="absolute left-[-5%] top-1/2 h-[20rem] w-[20rem] rounded-full bg-violet-500/20 blur-[120px]"
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]"
                >
                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#8a8a91]">
                            About
                        </p>
                        <h2 className="mb-6 max-w-xl text-4xl font-bold tracking-[-0.06em] text-[#f5f5f7] md:text-5xl lg:text-6xl">
                            Building reliable full-stack applications with modern web architecture.
                        </h2>
                        <motion.div
                            className="h-1 w-[100px] rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                className="rounded-[22px] border border-white/10 bg-[#101318]/80 p-5 backdrop-blur-sm"
                            >
                                <div className="text-2xl font-black text-white md:text-3xl">{stat.value}</div>
                                <div className="mt-2 text-sm text-[#a8afb9]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mt-16 max-w-4xl rounded-[30px] border border-white/10 bg-[#101318]/80 p-6 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-sm md:p-8"
                >
                    <div className="absolute -left-4 top-6 h-[70%] w-1 rounded-full bg-gradient-to-b from-violet-400 via-sky-400 to-emerald-400" />
                    <p className="mb-4 pl-8 text-lg leading-relaxed text-[#a8afb9] md:text-xl">
                        I am a Full-Stack Developer building responsive web applications, interactive dashboards, and scalable backend services. My experience spans frontend interface design and backend implementation, working directly with REST APIs, authentication flows, and database integration.
                    </p>
                    <p className="pl-8 text-lg leading-relaxed text-[#a8afb9] md:text-xl">
                        I have delivered role-based applications, member portals, and database-backed platforms from concept to deployment. With core strengths in React, Next.js, TypeScript, and Node.js—alongside backend integration using MongoDB and Supabase—I can step into existing development teams and contribute to ongoing projects with clean code and dependable execution.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-16 md:grid-cols-2">
                    <SkillsSection title="Frontend Development" items={frontendSkills} />
                    <SkillsSection title="Backend Development" items={backendSkills} />
                    <SkillsSection title="Tools & Platforms" items={toolSkills} />
                    <SkillsSection title="Additional Experience" items={additionalSkills} />
                </div>
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
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {items.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
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
