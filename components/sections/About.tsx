"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        {/* Premium Minimalist About Section */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-medium tracking-[0.3em] text-stone-500 uppercase border-b border-stone-200 pb-2 inline-block">
                                Mijn Verhaal
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-light text-stone-800 leading-tight">
                                Balans en harmonie in <span className="font-serif italic text-stone-600">body & mind</span>
                            </h3>
                        </div>

                        <div className="space-y-8 text-lg text-stone-600 leading-relaxed font-light">
                            <p>
                                Hi, ik ben Geeske. Bij PuurGeeske geloof ik in de kracht van zachtheid.
                                In een wereld die altijd "aan" staat, bied ik een plek waar je even helemaal niets hoeft.
                            </p>
                            <p>
                                Of het nu in de besloten sfeer van de yurt is, of met de wind door je haren op het strand:
                                ik begeleid je graag naar meer rust, ruimte en verbinding met jezelf.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-[#FDFBF7] border border-stone-100 rounded-[2rem] hover:shadow-lg transition-shadow duration-500">
                                    <h4 className="font-serif text-xl italic mb-3 text-stone-800">Veilige Haven</h4>
                                    <p className="text-sm text-stone-500 font-light leading-loose">Een plek waar je jezelf mag zijn, zonder oordeel.</p>
                                </div>
                                <div className="p-8 bg-[#FDFBF7] border border-stone-100 rounded-[2rem] hover:shadow-lg transition-shadow duration-500">
                                    <h4 className="font-serif text-xl italic mb-3 text-stone-800">Persoonlijk</h4>
                                    <p className="text-sm text-stone-500 font-light leading-loose">Aandacht voor jouw unieke proces en behoeften.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="realtive z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/geeske-yurt-selfie.jpg"
                                alt="Geeske in her Yurt"
                                className="object-cover w-full h-[600px]"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-10 right-10 w-full h-full border-4 border-[#FDFBF7] rounded-[2rem] -z-10 bg-[#FAF9F6]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
