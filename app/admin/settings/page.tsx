import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getSiteConfig } from "@/lib/content";
import { Save, Globe, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default async function AdminSettings() {
  const authenticated = await isAuthenticated();
  if (!authenticated) redirect("/admin/login");

  const config = getSiteConfig();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-stone-800">Instellingen</h1>
          <p className="text-stone-500">Beheer je website instellingen en contactgegevens</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors">
          <Save className="h-5 w-5" />
          Opslaan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Site Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-medium text-stone-800">Website Info</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Site Naam</label>
              <input
                type="text"
                defaultValue={config.siteName}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Tagline</label>
              <input
                type="text"
                defaultValue={config.tagline}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Missie Statement</label>
              <textarea
                defaultValue={config.missionStatement}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-50 rounded-lg">
              <Mail className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-lg font-medium text-stone-800">Contactgegevens</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Email</label>
              <input
                type="email"
                defaultValue={config.email}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Telefoon</label>
              <input
                type="tel"
                defaultValue={config.phone}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">WhatsApp</label>
              <input
                type="tel"
                defaultValue={config.whatsapp}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Adres</label>
              <input
                type="text"
                defaultValue={config.address}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Instagram className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-lg font-medium text-stone-800">Social Media</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Instagram URL</label>
              <input
                type="url"
                defaultValue={config.social.instagram}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Facebook URL</label>
              <input
                type="url"
                defaultValue={config.social.facebook}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-50 rounded-lg">
              <MapPin className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-lg font-medium text-stone-800">Boekingen</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Booking URL (Momoyoga)</label>
              <input
                type="url"
                defaultValue={config.bookingUrl}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Latitude</label>
                <input
                  type="number"
                  step="any"
                  defaultValue={config.coordinates.lat}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Longitude</label>
                <input
                  type="number"
                  step="any"
                  defaultValue={config.coordinates.lng}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
