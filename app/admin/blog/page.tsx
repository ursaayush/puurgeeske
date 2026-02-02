import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getAllBlogPosts } from "@/lib/content";
import { Plus, Edit, Trash2, Eye, ToggleLeft, ToggleRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function AdminBlog() {
  const authenticated = await isAuthenticated();
  if (!authenticated) redirect("/admin/login");

  const posts = getAllBlogPosts();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-stone-800">Blog</h1>
          <p className="text-stone-500">Schrijf en beheer je blogartikelen</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors">
          <Plus className="h-5 w-5" />
          Nieuw Artikel
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-100">
              <th className="text-left py-4 px-6 text-sm font-medium text-stone-500">Artikel</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-stone-500">Categorie</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-stone-500">Datum</th>
              <th className="text-center py-4 px-6 text-sm font-medium text-stone-500">Status</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-stone-500">Acties</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-stone-50 hover:bg-stone-50/50">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 line-clamp-1">{post.title}</p>
                      <p className="text-xs text-stone-400 line-clamp-1">{post.excerpt}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs">
                    {post.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-stone-500">
                  {new Date(post.date).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </td>
                <td className="py-4 px-6 text-center">
                  {post.active ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                      <ToggleRight className="h-3 w-3" /> Gepubliceerd
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium">
                      <ToggleLeft className="h-3 w-3" /> Concept
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-2 text-stone-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <button className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-xl text-green-700 text-sm">
        <strong>Tip:</strong> Gebruik categorieën om je content te organiseren. Bezoekers kunnen dan filteren op onderwerp.
      </div>
    </div>
  );
}
