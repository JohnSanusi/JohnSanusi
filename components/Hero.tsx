 'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';

const stack = [
  { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { Icon: SiExpress, label: 'Express', color: '#f5f5f7' },
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 24,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 lg:px-8 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute left-[-8%] top-[-8%] h-[420px] w-[420px] rounded-full bg-[#8b5cf6]/12 blur-[120px]" />
        <div className="absolute right-[-6%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#38bdf8]/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] left-[20%] h-[380px] w-[380px] rounded-full bg-[#22c55e]/8 blur-[120px]" />
      </div>

      <motion.div
        style={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 40, damping: 18 }}
        className="absolute inset-0 opacity-[0.09]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'radial-gradient(circle at center, black 20%, transparent 85%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
              <span className="text-sm font-medium text-[#d7d7db]">Available for work</span>
            </motion.div>

            <div className="mb-6 space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#8a8a91]">
                Full stack developer
              </p>

              <h1 className="max-w-xl text-5xl font-black tracking-[-0.08em] text-white md:text-6xl lg:text-7xl">
                MERN Stack
                <span className="block bg-gradient-to-r from-white via-[#d8d8dc] to-[#8a8a91] bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="max-w-xl text-lg leading-relaxed text-[#a1a1a8] md:text-xl"
            >
              Hi, I&apos;m <span className="font-semibold text-white">John Sanusi</span>. I build scalable digital products and modern experiences with MongoDB, Express, React, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7e7ea]"
              >
                View work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/5"
              >
                Contact me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'UI Systems'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-[#101012]/80 px-3 py-1.5 text-xs font-medium text-[#d8d8dc]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-[32px] border border-white/10 bg-[#0d0d0f]/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs text-[#8a8a91]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="rounded-full border border-white/10 px-2 py-1">portfolio.dev</span>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.18),_transparent_35%),linear-gradient(180deg,#121214,#0b0b0d)] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8a8a91]">Current focus</p>
                      <p className="mt-2 text-2xl font-bold text-white">Building modern apps</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3f3f46] bg-white/5 text-xl font-black text-white">
                      JS
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {stack.map(({ Icon, label, color }, index) => (
                      <motion.div
                        key={label}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#111113]">
                            <Icon className="h-4 w-4" style={{ color }} />
                          </div>
                          <span className="text-sm font-medium text-[#e8e8eb]">{label}</span>
                        </div>
                        <Sparkles className="h-4 w-4 text-[#8a8a91]" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                    <div className="flex items-center justify-between gap-3 text-sm text-[#d9fce8]">
                      <span className="font-medium">Project health</span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        live
                      </span>
                    </div>
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-3xl font-black text-white">98%</div>
                        <p className="text-xs text-[#bfedd3]">delivery focus</p>
                      </div>
                      <div className="h-12 w-24 overflow-hidden rounded-full border border-emerald-400/20 bg-black/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '98%' }}
                          transition={{ duration: 1.2, delay: 0.4 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex"
      >
        <div className="flex flex-col items-center gap-2 text-[#8a8a91]">
          <span className="text-[10px] font-medium uppercase tracking-[0.24em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

