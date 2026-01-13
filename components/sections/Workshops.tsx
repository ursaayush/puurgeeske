"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin } from "lucide-react";

export function Workshops() {
    // Placeholder for workshop data - you would typically fetch this from an API or define it elsewhere
    const workshops = [
        {
            date: "6 Feb",
            time: "14:00 - 16:00",
            title: "Hot Yin Yoga: Winter Editie",
            description: "Laat de kou uit je lichaam verdwijnen en geef jezelf een diepe, verwarmende reset. De focus ligt op vertragen, loslaten en opladen. Met aandacht voor de blaas- en niermeridiaan.",
            price: "€40",
        },
        {
            date: "12 Mar",
            time: "10:00 - 12:00",
            title: "Sound Bath & Meditatie",
            description: "Ervaar diepe ontspanning en innerlijke rust met een helend klankbad. Laat de vibraties van klankschalen en gongs je meenemen op een meditatieve reis.",
            price: "€35",
        },
        {
            date: "20 Apr",
            time: "09:30 - 11:30",
            title: "Ademwerk voor Stressreductie",
            description: "Leer krachtige ademhalingstechnieken om stress te verminderen, energie te verhogen en je zenuwstelsel te kalmeren. Een praktische workshop voor dagelijkse toepassing.",
            price: "€45",
        },
    ];

    return (
        <section className="py-24 bg-white" id="workshops">
            <div className="container mx-auto px-4 md:px-6">
                {/* Workshops Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
                        Agenda
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-stone-800">
                        Workshops & <span className="font-serif italic text-stone-600">Events</span>
                    </h3>
                </div>

                {/* Vertical Event List for Editorial Feel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {workshops.map((workshop, index) => (
                        <div key={index} className="group relative bg-white rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 border border-stone-100 hover:-translate-y-1">
                            <div className="absolute top-8 right-8 text-right">
                                <span className="block text-2xl font-serif italic text-[#D4A373]">{workshop.date}</span>
                                <span className="text-xs text-stone-400 uppercase tracking-widest">{workshop.time}</span>
                            </div>

                            <div className="mt-16 space-y-4">
                                <h4 className="text-xl font-medium text-stone-800 group-hover:text-[#D4A373] transition-colors">
                                    {workshop.title}
                                </h4>
                                <p className="text-sm text-stone-500 font-light leading-relaxed">
                                    {workshop.description}
                                </p>
                                <div className="pt-4 flex items-center justify-between">
                                    <span className="text-sm font-medium text-stone-400">{workshop.price}</span>
                                    <Button variant="outline" size="sm" className="rounded-full border-stone-200 text-stone-600 hover:bg-stone-50">
                                        Inschrijven
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
