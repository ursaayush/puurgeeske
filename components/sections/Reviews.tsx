"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  id: string;
  name: string;
  photo: string | null;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsProps {
  reviews: Review[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-[#D4A373] text-[#D4A373]"
              : "fill-none text-stone-300"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Reviews({ reviews }: ReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-24 bg-[#FDFBF7]" id="reviews">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
            Ervaringen
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-stone-800">
            Wat anderen <span className="font-serif italic text-stone-600">zeggen</span>
          </h3>
        </div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[#D4A373]/20" />

              {/* Content */}
              <div className="space-y-4">
                {/* Rating */}
                <StarRating rating={review.rating} />

                {/* Text */}
                <p className="text-stone-600 font-light leading-relaxed text-lg">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                  {review.photo ? (
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center text-stone-400 font-serif text-lg">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-stone-800">{review.name}</p>
                    <p className="text-sm text-stone-400">
                      {new Date(review.date).toLocaleDateString("nl-NL", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
