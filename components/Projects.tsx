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
        description: 'Another amazing project showcasing full-stack capabilities and attention to detail in design and user experience.',
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
        <section id="projects" className="py-32 px-6 bg-[#000000] relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.04, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1d1d1f] rounded-full blur-[120px]"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f7] mb-4 tracking-tight">
                        Selected Projects
                    </h2>
                    <motion.div
                        className="h-1 bg-[#f5f5f7] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="group relative bg-[#1c1c1e] rounded-3xl p-8 shadow-lg border border-[#38383a] overflow-hidden transition-all duration-300 hover:border-[#48484a]"
        >
            {/* Subtle Hover Background */}
            <motion.div
                className="absolute inset-0 bg-[#2c2c2e]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
                {/* Project Image */}
                <motion.div
                    className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-[#2c2c2e]"
                    animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent opacity-60" />
                </motion.div>

                <motion.h3
                    className="text-2xl font-semibold text-[#f5f5f7] mb-4"
                    animate={isHovered ? { x: 3 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {project.title}
                </motion.h3>

                <p className="text-[#86868b] mb-8 leading-relaxed text-lg">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs font-medium text-[#f5f5f7] bg-[#38383a] px-3 py-1 rounded-full cursor-default transition-all hover:bg-[#48484a]"
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
                        className="flex items-center text-sm font-medium text-[#86868b] hover:text-[#f5f5f7] transition-colors group/link"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        Code
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="flex items-center text-sm font-medium text-[#86868b] hover:text-[#f5f5f7] transition-colors group/link"
                    >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
