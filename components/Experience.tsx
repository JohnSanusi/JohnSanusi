'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItem {
    role: string;
    company: string;
    period?: string;
    type?: string;
    description: string;
    highlights: string[];
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: 'OAT Trainee (Frontend Development)',
        company: 'ESG Management Services',
        description: 'Contributed to the frontend engineering of the CIREF ESG compliance platform and managed associated web solutions.',
        highlights: [
            'Built and maintained role-specific dashboards with React and TypeScript for ESG data reporting.',
            'Implemented responsive frontend workflows that streamlined user data entry and reporting procedures.',
            'Integrated Supabase for backend queries, authentication support, and database operations.',
            'Executed WordPress development and ongoing content updates for corporate web properties.',
        ],
        skills: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'WordPress'],
    },
    {
        role: 'Co-founder & Full-Stack Developer',
        company: 'StudyHelp Nigeria',
        description: 'Led full-stack application development, database architecture, and feature rollout for an educational platform.',
        highlights: [
            'Developed the responsive frontend web application for students and educators.',
            'Engineered Node.js and Express backend services and RESTful APIs.',
            'Integrated MongoDB database for secure user profiles, lesson records, and study data.',
            'Implemented authentication and role-based access control for students and administrators.',
            'Built structured lesson upload workflows and administrative content controls.',
            'Developed the interactive, gamified study-map learning experience to enhance engagement.',
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
        role: 'Web Developer',
        company: 'EzzyGabby Photography',
        description: 'Developed and deployed a bespoke digital showcase for a professional photographer.',
        highlights: [
            'Designed and built a clean, distraction-free visual portfolio highlighting creative photography collections.',
            'Delivered responsive layout performance and smooth visual transitions with modern frontend architecture.',
            'Optimized image loading pipelines and client-side browsing experiences.',
        ],
        skills: ['Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 bg-[#000000] relative overflow-hidden">
            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.05, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 left-0 w-96 h-96 bg-[#1d1d1f] rounded-full blur-[120px]"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#8a8a91]">
                        Career
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f7] mb-4 tracking-tight">
                        Professional Experience
                    </h2>
                    <motion.div
                        className="h-1 bg-[#f5f5f7] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-[#1c1c1e] rounded-3xl p-8 shadow-lg border border-[#38383a] overflow-hidden transition-all duration-300 hover:border-[#48484a]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        {exp.company}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#f5f5f7]">
                                        {exp.role}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-[#86868b] text-base leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            <div className="mb-6 space-y-2.5">
                                {exp.highlights.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <ChevronRight className="w-4 h-4 text-[#86868b] shrink-0 mt-1" />
                                        <span className="text-sm md:text-base text-[#a8afb9] leading-relaxed">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium text-[#f5f5f7] bg-[#38383a] px-3 py-1 rounded-full cursor-default transition-all hover:bg-[#48484a]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
