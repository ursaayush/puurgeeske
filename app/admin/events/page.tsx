import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getAllEvents } from "@/lib/content";
import { Plus, Edit, Trash2, ExternalLink, Calendar } from "lucide-react";

export default async function AdminEvents() {
  const authenticated = await isAuthenticated();
  if (!authenticated) redirect("/admin/login");

  const events = getAllEvents();
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-stone-800">Events</h1>
          <p className="text-stone-500">Beheer workshops, retreats en speciale events</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors">
          <Plus className="h-5 w-5" />
          Nieuw Event
        </button>
      </div>

      <div className="grid gap-4">
        {events.map((event) => {
          const isPast = event.date < today;
          return (
            <div
              key={event.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-stone-100 ${isPast ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-6">
                  {/* Date Badge */}
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center ${isPast ? 'bg-stone-100' : 'bg-[#D4A373]/10'}`}>
                      <span className={`text-2xl font-semibold ${isPast ? 'text-stone-400' : 'text-[#D4A373]'}`}>
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs text-stone-500 uppercase">
                        {new Date(event.date).toLocaleDateString('nl-NL', { month: 'short' })}
                      </span>
                    </div>
                    {isPast && (
                      <span className="text-xs text-stone-400 mt-1 block">Afgelopen</span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-stone-800">{event.title}</h3>
                    <p className="text-sm text-stone-500 max-w-xl">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-stone-400">
                      <span>{event.time}</span>
                      <span>•</span>
                      <span>{event.location}</span>
                      <span>•</span>
                      <span className="font-medium text-stone-600">€{event.price}</span>
                    </div>
                  </div>
                </div>

                {/* Actions & Stats */}
                <div className="flex items-start gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-stone-800">{event.spotsRemaining}</p>
                    <p className="text-xs text-stone-400">van {event.spotsTotal} plekken</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={event.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-stone-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-amber-50 rounded-xl text-amber-700 text-sm">
        <strong>Let op:</strong> Events die voorbij zijn worden automatisch grijs weergegeven en niet meer op de website getoond.
      </div>
    </div>
  );
}
