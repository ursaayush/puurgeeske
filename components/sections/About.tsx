"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Onze Filosofie</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                            Balans en harmonie in lichaam en geest
                        </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-loose">
                        Bij PuurGeeske geloven we in de kracht van balans en harmonie.
                        We helpen je bij het ontdekken van je innerlijke kracht en het bereiken
                        van transformatie. Ben je op zoek naar ontspanning, het vergroten van
                        je flexibiliteit, meer energie, rust of het versterken van je lichaam?
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
                        <div className="bg-[#FDFBF7] p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-4">Voor wie?</h4>
                            <p className="text-muted-foreground">
                                Of je nu herstellende bent van een blessure, stress wilt verminderen,
                                of gewoon beter in je vel wilt zitten: PuurGeeske biedt een plek
                                waar je jezelf mag zijn.
                            </p>
                        </div>
                        <div className="bg-[#FFF8F0] p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-4">Mijn Aanpak</h4>
                            <p className="text-muted-foreground">
                                Met persoonlijke aandacht en een warme sfeer begeleid ik je op jouw pad.
                                Van Yin Yoga tot actieve flows, alles staat in het teken van jouw welzijn.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
