import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border mt-auto">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative h-16 w-48">
                            <Image
                                src="/logo.png"
                                alt="PuurGeeske Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Balans en harmonie in lichaam en geest. Ontdek je pure zelf met Geeske.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Navigatie</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/over" className="hover:text-primary transition-colors">Over mij</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>info@puurgeeske.nl</li>
                            <li>Follow us specifically on sand dunes.</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} PuurGeeske. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
