import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSiteConfig } from "@/lib/content";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// Social Icons as SVG components
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function ContactPage() {
  const config = getSiteConfig();
  const whatsappUrl = `https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`;
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19516.02!2d${config.coordinates.lng}!3d${config.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72f4c5f4c5d%3A0x400de5a8d1e6d70!2sScheveningen!5e0!3m2!1sen!2snl!4v1234567890`;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7]">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <section className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
                Contact
              </h2>
              <h1 className="text-3xl md:text-5xl font-light text-stone-800">
                Laten we <span className="font-serif italic text-stone-600">verbinden</span>
              </h1>
              <p className="text-stone-500 font-light">
                Heb je vragen over de lessen, workshops of wil je een afspraak maken?
                Neem gerust contact op.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] border border-stone-100 hover:shadow-lg transition-shadow">
                    <div className="bg-[#FDFBF7] p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#D4A373]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-800 mb-1">Email</h3>
                      <a href={`mailto:${config.email}`} className="text-stone-500 hover:text-[#D4A373] transition-colors">
                        {config.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] border border-stone-100 hover:shadow-lg transition-shadow">
                    <div className="bg-[#FDFBF7] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#D4A373]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-800 mb-1">Telefoon</h3>
                      <a href={`tel:${config.phone}`} className="text-stone-500 hover:text-[#D4A373] transition-colors">
                        {config.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] border border-stone-100 hover:shadow-lg transition-shadow">
                    <div className="bg-[#FDFBF7] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#D4A373]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-800 mb-1">Locatie</h3>
                      <p className="text-stone-500">{config.address}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors shadow-lg font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat via WhatsApp
                </Link>

                {/* Social Media */}
                <div className="pt-6 border-t border-stone-100">
                  <h3 className="font-medium text-stone-800 mb-4">Volg mij</h3>
                  <div className="flex gap-4">
                    <Link
                      href={config.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full border border-stone-100 hover:shadow-lg hover:border-[#D4A373] transition-all text-stone-600 hover:text-[#D4A373]"
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </Link>
                    <Link
                      href={config.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full border border-stone-100 hover:shadow-lg hover:border-[#D4A373] transition-all text-stone-600 hover:text-[#D4A373]"
                    >
                      <FacebookIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <form className="space-y-6 bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">Naam</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-stone-200 bg-[#FDFBF7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 focus:border-[#D4A373] transition-all"
                      placeholder="Je naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-stone-200 bg-[#FDFBF7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 focus:border-[#D4A373] transition-all"
                      placeholder="je@email.nl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-stone-700">Onderwerp</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-stone-200 bg-[#FDFBF7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 focus:border-[#D4A373] transition-all"
                    >
                      <option>Algemene vraag</option>
                      <option>Yoga lessen</option>
                      <option>Workshops</option>
                      <option>Personal Coaching</option>
                      <option>Anders</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-stone-700">Bericht</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-stone-200 bg-[#FDFBF7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 focus:border-[#D4A373] transition-all resize-none"
                      placeholder="Je bericht..."
                    />
                  </div>
                  <Button className="w-full rounded-full h-12 bg-stone-800 hover:bg-stone-700 text-white shadow-lg" size="lg">
                    Verstuur Bericht
                  </Button>
                </form>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-16 rounded-[2rem] overflow-hidden shadow-lg border border-stone-100">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie PuurGeeske"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
