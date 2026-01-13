"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#FDFBF7] overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-[#E6D5C3]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C8B6A6]/10 rounded-full blur-[100px]" />
            </div>

            {/* Actual Implementation overwriting the simpler attempt above */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 pt-0 lg:pt-12 pb-12 w-full">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-2 lg:gap-20">

                    {/* LEFT COLUMN CONTENT (Desktop) / SPLIT (Mobile) */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-1 lg:space-y-8">

                        {/* 1. LOGO - Larger on mobile, pulled up to maximize space */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="w-64 sm:w-72 lg:w-96 order-1 -mt-10 md:mt-0" // More negative margin
                        >
                            <img src="/images/logo-full.png" alt="Puur Geeske" className="w-full h-auto object-contain" />
                        </motion.div>

                        {/* 2. IMAGE - Compact height for viewport fit */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="block lg:hidden order-2 w-full max-w-[55vw] sm:max-w-xs mx-auto opacity-100 -mt-6" // Pulled closer to logo
                        >
                            <div className="relative aspect-[3/4] rounded-t-[5rem] rounded-b-[2rem] overflow-hidden shadow-xl border-4 border-white">
                                <img src="/images/geeske-yoga-beach.jpg" alt="Geeske Yoga" className="object-cover w-full h-full" />
                            </div>
                        </motion.div>

                        {/* 3. QUOTE - Relaxed spacing from image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="order-3 space-y-3 max-w-md pt-4" // Added pt-4 for gap from image, space-y-3 for internal rhythm
                        >
                            <p className="text-lg md:text-2xl text-stone-600 font-light leading-snug font-serif italic relative inline-block px-4 lg:px-0">
                                <span className="text-3xl text-[#D4A373]/30 absolute -top-2 left-0 lg:-left-8 font-serif">“</span>
                                Verbind met je ware zelf in alle rust en ruimte.
                                <span className="text-3xl text-[#D4A373]/30 absolute -bottom-4 right-0 lg:-right-8 font-serif">”</span>
                            </p>
                        </motion.div>

                        {/* 4. TITLE */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="order-4 text-[10px] md:text-sm font-medium tracking-[0.3em] text-stone-500 uppercase border-b border-stone-200 pb-2 mt-2"
                        >
                            Holistic Yoga & Retreats
                        </motion.h2>

                        {/* 5. BUTTONS - Clear of the fold */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="order-5 flex flex-row gap-3 pt-4 w-full justify-center" // Increased pt from 0 to 4
                        >
                            <Button size="sm" className="h-10 px-6 rounded-full bg-stone-800 hover:bg-stone-700 text-white shadow-lg text-sm">
                                Bekijk Aanbod
                            </Button>
                            <Button variant="ghost" size="sm" className="h-10 px-6 rounded-full text-stone-600 hover:bg-stone-100/50 text-sm">
                                Contact
                            </Button>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN IMAGE (Desktop Only - Hidden on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="hidden lg:flex w-1/2 justify-center justify-end relative"
                    >
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 border border-stone-200 rounded-t-[12rem] rounded-b-[4rem] translate-x-4 translate-y-4 -z-10" />
                            <div className="relative aspect-[3/4] rounded-t-[12rem] rounded-b-[4rem] overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply z-10" />
                                <img
                                    src="/images/geeske-yoga-beach.jpg"
                                    alt="Geeske Yoga"
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-[2s]"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
