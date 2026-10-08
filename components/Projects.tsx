'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        title: 'EzzyGabby PhotoGraphy',
        description: "A minimalist and modern portfolio site built to showcase creative work in a clean, distraction-free layout. Designed to reflect the photographer's visual style and provide a seamless browsing experience",
        tags: ['Nuxt.js', 'Tailwind', 'TypeScript'],
        github: 'https://github.com/JohnSanusi/EZZYGABBY',
        demo: 'https://ezzygabby.vercel.app',
        image: '/ezzy.png',
    },
    {
        title: 'Ex2325 Fashion Store',
        description: 'A clean and responsive e-commerce frontend built with Next.js for a handmade fashion brand. Features a modern product catalog, fast UI, and scalable structure ready for future cart and checkout features.',
        tags: ['Next.js', 'Tailwind', 'Node.js', 'Express', 'TypeScript'],
        github: 'https://github.com/JohnSanusi/EX2325-Shoe-Store',
        demo: 'https://ex2325.vercel.app',
        image: '/ex2325.png',
    },
    {
        title: 'Lumea Collections',
        description: 'A sleek and modern e-commerce website built for a startup and small brand to sell products online with ease. Designed with a minimalist layout and smooth navigation to deliver a seamless shopping experience for customers',
        tags: ['Next.js', 'Tailwind', 'Node.js', 'Express', 'TypeScript'],
        github: 'https://github.com/JohnSanusi/LUMEA',
        demo: 'https://lumeax.vercel.app',
        image: '/lume.png',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden px-6 py-32">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.05, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-sky-500/12 blur-[120px]"
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#8a8a91]">
                        Portfolio
                    </p>
                    <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#f5f5f7] md:text-5xl">
                        Selected Projects
                    </h2>
                    <motion.div
                        className="h-1 w-[100px] rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101318]/85 p-8 shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-300 hover:border-white/20"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-emerald-500/8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
                <motion.div
                    className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#121821]"
                    animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101318] via-transparent to-transparent opacity-70" />
                </motion.div>

                <motion.h3
                    className="mb-4 text-2xl font-semibold text-[#f5f5f7]"
                    animate={isHovered ? { x: 3 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {project.title}
                </motion.h3>

                <p className="mb-8 text-lg leading-relaxed text-[#a8afb9]">{project.description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#e3e7ef]"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="group/link flex items-center text-sm font-medium text-[#b6bcc6] transition-colors hover:text-[#f5f5f7]"
                    >
                        <Github className="mr-2 h-5 w-5" />
                        Code
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition-opacity group-hover/link:opacity-100" />
                    </motion.a>
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="group/link flex items-center text-sm font-medium text-[#b6bcc6] transition-colors hover:text-[#f5f5f7]"
                    >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition-opacity group-hover/link:opacity-100" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
