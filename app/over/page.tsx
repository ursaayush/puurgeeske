import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

export default function OverPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7]">
            <Navbar />
            <main className="flex-grow pt-24">
                <About />
                <section className="container mx-auto px-4 pb-24 text-center max-w-2xl">
                    <h3 className="text-2xl font-bold mb-4">Mijn Reis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        [Hier komt meer gedetailleerde tekst over je achtergrond, opleidingen en passie voor yoga.
                        Dit is een placeholder sectie die je later kunt vullen met je volledige biografie.]
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
