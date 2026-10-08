'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, XCircle, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Failed to send message');

            setStatus('success');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    }

    return (
        <section id="contact" className="relative overflow-hidden px-6 py-32">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.05, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[-8%] top-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]"
            />

            <div className="relative z-10 mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="mb-16 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-sky-500/10"
                        >
                            <Mail className="h-10 w-10 text-[#f5f5f7]" />
                        </motion.div>

                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#8a8a91]">
                            Contact
                        </p>
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#f5f5f7] md:text-5xl">
                            Get in Touch
                        </h2>
                        <motion.div
                            className="mx-auto mb-6 h-1 w-[100px] rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <p className="text-xl text-[#a8afb9]">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                        </p>
                    </div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-[28px] border border-white/10 bg-[#101318]/85 p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-sm md:p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#b6bcc6]">
                                Name
                            </label>
                            <div className="relative">
                                <motion.div
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                    animate={{
                                        scale: focusedField === 'name' ? 1.1 : 1,
                                        color: focusedField === 'name' ? '#f5f5f7' : '#8a8a91',
                                    }}
                                >
                                    <User className="h-5 w-5" />
                                </motion.div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full rounded-xl border border-white/10 bg-[#0d1117] py-4 pl-12 pr-4 text-[#f5f5f7] outline-none transition-all placeholder:text-[#5f6775] focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#b6bcc6]">
                                Email
                            </label>
                            <div className="relative">
                                <motion.div
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                    animate={{
                                        scale: focusedField === 'email' ? 1.1 : 1,
                                        color: focusedField === 'email' ? '#f5f5f7' : '#8a8a91',
                                    }}
                                >
                                    <Mail className="h-5 w-5" />
                                </motion.div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full rounded-xl border border-white/10 bg-[#0d1117] py-4 pl-12 pr-4 text-[#f5f5f7] outline-none transition-all placeholder:text-[#5f6775] focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#b6bcc6]">
                                Message
                            </label>
                            <div className="relative">
                                <motion.div
                                    className="absolute left-4 top-4"
                                    animate={{
                                        scale: focusedField === 'message' ? 1.1 : 1,
                                        color: focusedField === 'message' ? '#f5f5f7' : '#8a8a91',
                                    }}
                                >
                                    <MessageSquare className="h-5 w-5" />
                                </motion.div>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0d1117] py-4 pl-12 pr-4 text-[#f5f5f7] outline-none transition-all placeholder:text-[#5f6775] focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                            className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 px-6 py-4 font-semibold text-[#0a0d12] transition-all hover:shadow-[0_0_30px_rgba(96,165,250,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <span className="relative flex items-center justify-center gap-2">
                                {status === 'loading' ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="h-5 w-5 rounded-full border-2 border-[#0a0d12] border-t-transparent"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="h-5 w-5" />
                                    </>
                                )}
                            </span>
                        </motion.button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-[#dfffe8]"
                                >
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-medium">Message sent successfully!</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center justify-center gap-2 rounded-xl border border-rose-400/30 bg-rose-500/10 p-4 text-[#ffe4ea]"
                                >
                                    <XCircle className="h-5 w-5" />
                                    <span className="font-medium">Something went wrong. Please try again.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}

