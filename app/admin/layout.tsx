import Link from "next/link";
import { Home, LayoutGrid, Calendar, MessageSquare, FileText, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-stone-200">
          <Link href="/admin" className="flex items-center gap-2">
            <img src="/images/logo-full.png" alt="PuurGeeske" className="h-10 w-auto" />
          </Link>
          <p className="text-xs text-stone-400 mt-2">Admin Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-colors"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/services"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-colors"
          >
            <LayoutGrid className="h-5 w-5" />
            Services
          </Link>
          <Link
            href="/admin/events"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            Events
          </Link>
          <Link
            href="/admin/reviews"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Reviews
          </Link>
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-colors"
          >
            <FileText className="h-5 w-5" />
            Blog
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-colors"
          >
            <Settings className="h-5 w-5" />
            Instellingen
          </Link>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-500 hover:bg-stone-50 hover:text-stone-700 transition-colors text-sm"
          >
            <Home className="h-4 w-4" />
            Bekijk website
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors text-sm w-full"
            >
              <LogOut className="h-4 w-4" />
              Uitloggen
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
