"use client";

import { motion } from "framer-motion";
import { Flower2, Heart, Activity, Wind, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const services = [
    {
        title: "Yoga",
        description: "Verbind ademhaling en beweging voor flexibiliteit en rust.",
        icon: Flower2,
    },
    {
        title: "Pilates",
        description: "Versterk je kern en verbeter je houding en balans.",
        icon: Activity,
    },
    {
        title: "Personal Coaching",
        description: "Een-op-een begeleiding om je persoonlijke doelen te bereiken.",
        icon: User,
    },
    {
        title: "PuurGeeske Massage",
        description: "Diepe ontspanning en herstel voor lichaam en geest.",
        icon: Heart,
    },
    {
        title: "Breathwork",
        description: "Leer de kracht van je ademhaling voor energie en focus.",
        icon: Wind,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function Services() {
    return (
        <section className="py-24 bg-[#FDFBF7]" id="services">
            <div className="container mx-auto px-4 md:px-6">

                {/* Intro */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
                        Aanbod
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-stone-800">
                        Ontdek jouw <span className="font-serif italic text-stone-600">pad naar rust</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    {/* Feature Image - Group/Community */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px] border-4 border-white"
                    >
                        <img
                            src="/images/geeske-group-beach.jpg"
                            alt="Group yoga session on the beach"
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-12 text-white">
                            <h4 className="text-3xl font-serif italic mb-3">Groepslessen & Retreats</h4>
                            <p className="text-white/90 font-light tracking-wide text-lg">Samen bewegen in de natuur, verbinden met elkaar en jezelf.</p>
                        </div>
                    </motion.div>

                    {/* Service Grid - Clean & Minimal */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full hover:shadow-xl transition-all duration-500 border-none bg-white/80 backdrop-blur-sm shadow-sm hover:-translate-y-1 rounded-[2rem] p-2">
                                    <CardHeader>
                                        <div className="w-14 h-14 rounded-2xl bg-[#FDFBF7] flex items-center justify-center mb-4 text-[#D4A373]">
                                            <service.icon className="h-6 w-6" strokeWidth={1.5} />
                                        </div>
                                        <CardTitle className="text-xl font-medium text-stone-800">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-stone-500 text-sm leading-loose font-light">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
