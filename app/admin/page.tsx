import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getServices, getEvents, getReviews, getBlogPosts } from "@/lib/content";
import { LayoutGrid, Calendar, MessageSquare, FileText, TrendingUp, Users, Eye } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect("/admin/login");
  }

  const services = getServices();
  const events = getEvents();
  const reviews = getReviews();
  const posts = getBlogPosts();

  const stats = [
    {
      label: "Actieve Services",
      value: services.length,
      icon: LayoutGrid,
      href: "/admin/services",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Aankomende Events",
      value: events.length,
      icon: Calendar,
      href: "/admin/events",
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Reviews",
      value: reviews.length,
      icon: MessageSquare,
      href: "/admin/reviews",
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Blog Posts",
      value: posts.length,
      icon: FileText,
      href: "/admin/blog",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-stone-800">Dashboard</h1>
        <p className="text-stone-500">Welkom terug! Hier is een overzicht van je website.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-3xl font-semibold text-stone-800 group-hover:text-[#D4A373] transition-colors">
                {stat.value}
              </span>
            </div>
            <p className="text-stone-500 text-sm">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-stone-800">Aankomende Events</h2>
            <Link href="/admin/events" className="text-sm text-[#D4A373] hover:underline">
              Bekijk alle
            </Link>
          </div>
          <div className="space-y-4">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-stone-50 rounded-xl"
              >
                <div>
                  <p className="font-medium text-stone-800">{event.title}</p>
                  <p className="text-sm text-stone-500">
                    {new Date(event.date).toLocaleDateString("nl-NL", {
                      day: "numeric",
                      month: "short",
                    })} - {event.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    {event.spotsRemaining} plekken
                  </p>
                  <p className="text-xs text-stone-400">beschikbaar</p>
                </div>
              </div>
            ))}
            {events.length === 0 && (
              <p className="text-stone-400 text-center py-8">Geen aankomende events</p>
            )}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-stone-800">Recente Reviews</h2>
            <Link href="/admin/reviews" className="text-sm text-[#D4A373] hover:underline">
              Bekijk alle
            </Link>
          </div>
          <div className="space-y-4">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-4 bg-stone-50 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={star <= review.rating ? "text-amber-400" : "text-stone-300"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-stone-500">{review.name}</span>
                </div>
                <p className="text-sm text-stone-600 line-clamp-2">{review.text}</p>
              </div>
            ))}
            {reviews.length === 0 && (
              <p className="text-stone-400 text-center py-8">Geen reviews</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
