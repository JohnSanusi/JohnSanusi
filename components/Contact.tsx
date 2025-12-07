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
        <section id="contact" className="py-32 px-6 bg-[#000000] relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.02, 0.04, 0.02],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-1/4 w-96 h-96 bg-[#1d1d1f] rounded-full blur-[120px]"
            />

            <div className="max-w-2xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-[#1c1c1e] border border-[#38383a] rounded-2xl"
                        >
                            <Mail className="w-10 h-10 text-[#f5f5f7]" />
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f7] mb-4 tracking-tight">
                            Get in Touch
                        </h2>
                        <motion.div
                            className="h-1 bg-[#f5f5f7] rounded-full mx-auto mb-6"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <p className="text-[#86868b] text-xl">
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>
                    </div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Name Field */}
                        <div className="relative">
                            <label htmlFor="name" className="block text-sm font-medium text-[#86868b] mb-2">
                                Name
                            </label>
                            <div className="relative">
                                <motion.div
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                    animate={{
                                        scale: focusedField === 'name' ? 1.1 : 1,
                                        color: focusedField === 'name' ? '#f5f5f7' : '#86868b',
                                    }}
                                >
                                    <User className="w-5 h-5" />
                                </motion.div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1c1c1e] border border-[#38383a] text-[#f5f5f7] focus:border-[#f5f5f7] focus:ring-1 focus:ring-[#f5f5f7] outline-none transition-all placeholder-[#515155]"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-[#86868b] mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <motion.div
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                    animate={{
                                        scale: focusedField === 'email' ? 1.1 : 1,
                                        color: focusedField === 'email' ? '#f5f5f7' : '#86868b',
                                    }}
                                >
                                    <Mail className="w-5 h-5" />
                                </motion.div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1c1c1e] border border-[#38383a] text-[#f5f5f7] focus:border-[#f5f5f7] focus:ring-1 focus:ring-[#f5f5f7] outline-none transition-all placeholder-[#515155]"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <label htmlFor="message" className="block text-sm font-medium text-[#86868b] mb-2">
                                Message
                            </label>
                            <div className="relative">
                                <motion.div
                                    className="absolute left-4 top-4"
                                    animate={{
                                        scale: focusedField === 'message' ? 1.1 : 1,
                                        color: focusedField === 'message' ? '#f5f5f7' : '#86868b',
                                    }}
                                >
                                    <MessageSquare className="w-5 h-5" />
                                </motion.div>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1c1c1e] border border-[#38383a] text-[#f5f5f7] focus:border-[#f5f5f7] focus:ring-1 focus:ring-[#f5f5f7] outline-none transition-all resize-none placeholder-[#515155]"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                            className="relative w-full py-4 bg-[#f5f5f7] text-[#000000] font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:bg-[#e8e8ed]"
                        >
                            <span className="relative flex items-center justify-center gap-2">
                                {status === 'loading' ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-[#000000] border-t-transparent rounded-full"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </span>
                        </motion.button>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center justify-center gap-2 text-[#f5f5f7] bg-[#1c1c1e] border border-[#38383a] rounded-xl p-4"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-medium">Message sent successfully!</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center justify-center gap-2 text-[#f5f5f7] bg-[#1c1c1e] border border-[#38383a] rounded-xl p-4"
                                >
                                    <XCircle className="w-5 h-5" />
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

