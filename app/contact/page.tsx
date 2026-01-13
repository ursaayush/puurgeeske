import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7]">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <section className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact</h1>
                        <p className="text-center text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
                            Heb je vragen over de lessen, workshops of wil je een afspraak maken?
                            Neem gerust contact op.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground">info@puurgeeske.nl</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Telefoon</h3>
                                        <p className="text-muted-foreground">+31 6 12345678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Locatie</h3>
                                        <p className="text-muted-foreground">Scheveningen / Den Haag</p>
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Naam</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="Je naam"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="je@email.nl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Bericht</label>
                                    <textarea
                                        id="message"
                                        className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="Je bericht..."
                                    />
                                </div>
                                <Button className="w-full rounded-full" size="lg">Verstuur Bericht</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
