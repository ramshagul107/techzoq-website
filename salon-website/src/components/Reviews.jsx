"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Ayesha Khan",
    role: "Business Owner",
    review:
      "Techzoq created a clean and modern website for our business. The design is simple, professional and easy to use.",
  },
  {
    name: "Ali Raza",
    role: "Entrepreneur",
    review:
      "Great experience working with Techzoq. The website looks modern and works smoothly on different devices.",
  },
  {
    name: "Sara Ahmed",
    role: "Student",
    review:
      "I really liked the clean design and the overall user experience. Everything feels organized and professional.",
  },
];

export default function Reviews() {
  const [liked, setLiked] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleLike = (index) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-[#f7fbf8] px-6 py-20 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-600">
            Reviews
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What People Say About Techzoq
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We value your feedback and appreciate everyone who takes the time
            to share their experience with Techzoq.
          </p>
        </div>

        {/* Write Review Button */}
        <div className="mb-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="rounded-full bg-green-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-xl"
          >
            {showForm ? "Close Review Form" : "Write a Review"}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-green-100 bg-white p-6 shadow-md">
            <h3 className="mb-5 text-xl font-bold text-slate-900">
              Share Your Experience
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Your Role"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
              />

              <textarea
                rows="4"
                placeholder="Write your review..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
              />

              <button
                type="button"
                className="rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}

        {/* Reviews */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 text-lg tracking-wide text-green-500">
                ★ ★ ★ ★ ★
              </div>

              {/* Review */}
              <p className="text-sm leading-7 text-slate-600">
                “{item.review}”
              </p>

              {/* User + Like */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-green-600">
                    {item.role}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleLike(index)}
                  aria-label="Like review"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl transition-all duration-300 ${
                    liked[index]
                      ? "border-green-200 bg-green-50 text-green-600"
                      : "border-slate-200 bg-slate-50 text-slate-400 hover:border-green-300 hover:bg-green-50 hover:text-green-500"
                  }`}
                >
                  {liked[index] ? "♥" : "♡"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}