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
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Onze Diensten</h2>
                    <p className="text-muted-foreground text-lg">
                        Een overzicht van wat we bieden om jou te ondersteunen in je proces.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm group cursor-pointer hover:-translate-y-1">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
