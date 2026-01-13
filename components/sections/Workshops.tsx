"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin } from "lucide-react";

export function Workshops() {
    return (
        <section className="py-24 bg-white" id="workshops">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Workshops & Events</h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Verdiep je practice met onze speciale workshops en evenementen.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full">
                        Bekijk alle evenementen
                    </Button>
                </div>

                <div className="space-y-6">
                    {/* Featured Workshop Item */}
                    <div className="group relative overflow-hidden rounded-3xl bg-[#FFF8F0] p-8 md:p-12 transition-all hover:shadow-lg border border-[#FDFBF7]">
                        <div className="flex flex-col md:flex-row gap-8 justify-between">
                            <div className="space-y-6 flex-1">
                                <div className="flex flex-wrap gap-4 text-sm font-medium text-primary">
                                    <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
                                        <Calendar className="w-4 h-4" /> 6 Februari
                                    </span>
                                    <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
                                        <Clock className="w-4 h-4" /> 14:00 - 16:00
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    Hot Yin Yoga: Winter Editie
                                </h3>

                                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                    Laat de kou uit je lichaam verdwijnen en geef jezelf een diepe, verwarmende reset.
                                    De focus ligt op vertragen, loslaten en opladen. Met aandacht voor de blaas- en niermeridiaan.
                                </p>

                                <div className="pt-4 flex items-center gap-4">
                                    <Button size="lg" className="rounded-full">Inschrijven (€40)</Button>
                                </div>
                            </div>

                            {/* Decorative/Visual Side */}
                            <div className="hidden md:block w-1/3 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                                {/* Placeholder for an image */}
                                <div className="w-full h-full bg-primary/5 rounded-2xl flex items-center justify-center text-primary/20">
                                    <Calendar className="w-24 h-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
