import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getAllReviews } from "@/lib/content";
import { Plus, Edit, Trash2, Star, ToggleLeft, ToggleRight } from "lucide-react";

export default async function AdminReviews() {
  const authenticated = await isAuthenticated();
  if (!authenticated) redirect("/admin/login");

  const reviews = getAllReviews();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-stone-800">Reviews</h1>
          <p className="text-stone-500">Beheer klantbeoordelingen en testimonials</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors">
          <Plus className="h-5 w-5" />
          Nieuwe Review
        </button>
      </div>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                {/* Avatar */}
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-medium">
                    {review.name.charAt(0)}
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-stone-800">{review.name}</h3>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-stone-400">
                      {new Date(review.date).toLocaleDateString('nl-NL', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className="text-stone-600 max-w-2xl">&quot;{review.text}&quot;</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {review.active ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    <ToggleRight className="h-3 w-3" /> Zichtbaar
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-xs font-medium">
                    <ToggleLeft className="h-3 w-3" /> Verborgen
                  </span>
                )}
                <button className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 text-center border border-stone-100">
          <p className="text-3xl font-semibold text-stone-800">{reviews.length}</p>
          <p className="text-sm text-stone-500">Totaal reviews</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-stone-100">
          <p className="text-3xl font-semibold text-amber-500">
            {(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length || 0).toFixed(1)}
          </p>
          <p className="text-sm text-stone-500">Gemiddelde score</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-stone-100">
          <p className="text-3xl font-semibold text-green-600">
            {reviews.filter(r => r.rating === 5).length}
          </p>
          <p className="text-sm text-stone-500">5-sterren reviews</p>
        </div>
      </div>
    </div>
  );
}
