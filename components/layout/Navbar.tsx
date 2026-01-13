"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react"; // Import Globe icon as a placeholder logo
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Over", href: "/over" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40 py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Empty Left Side for Balance or minimal spacer */}
                    <div className="hidden md:block w-20" />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="default" size="sm" className="rounded-full px-6">
                            Boek een les
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay - Premium & Bug-free */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#FDFBF7] pt-32 px-6 md:hidden flex flex-col items-center"
                    >
                        <nav className="flex flex-col gap-8 items-center text-center w-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-light text-stone-800 hover:text-[#D4A373] hover:italic transition-all duration-300 font-serif"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="w-16 h-[1px] bg-stone-200 my-4" />
                            <Button
                                className="w-full max-w-sm h-14 rounded-full text-lg shadow-xl bg-stone-800 text-white hover:bg-stone-700"
                                size="lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Boek een les
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
