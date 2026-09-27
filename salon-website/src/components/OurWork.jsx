"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Mandi Operations",
    title: "Pakka Khata",
    description:
      "A digital khata and mandi management system designed for adhatis, traders, and cold stores.",
    image: "/images/gallery1.jpg",
    link: "https://pakkakhata.com",
  },
  {
    category: "Farmer Marketplace",
    title: "Kissan Market",
    description:
      "A modern agriculture platform connecting farmers, buyers, dealers, and agri businesses.",
    image: "/images/gallery2.jpg",
    link: "https://kissanmarket.pk",
  },
  {
    category: "Agriculture Expo",
    title: "Kissan AgriFest",
    description:
      "A field-first agriculture event connecting farmers with experts, companies, machinery, and innovation.",
    image: "/images/gallery3.jpg",
    link: "https://agrifest.com.pk",
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="relative overflow-hidden bg-white pt-2 pb-16 sm:pt-4 sm:pb-18"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-green-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto mb-7 max-w-2xl text-center">

          {/* Our Work */}
          <span className="mb-1 inline-block rounded-full bg-green-100 px-6 py-4 text-sm font-semibold text-green-700">
            Our Work
          </span>

          {/* Main Heading */}
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Projects We{" "}
            <span className="text-green-600">
              Build
            </span>
          </h2>

          {/* Description */}
          <p className="mt-2 text-base leading-7 text-gray-600 md:text-lg">
            We create practical digital solutions that help businesses,
            communities, and industries work smarter and grow faster.
          </p>

        </div>

        {/* =========================
            PROJECT CARDS
        ========================== */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-green-700 shadow-md">
                  0{index + 1}
                </div>

                {/* Category */}
                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    {project.category}
                  </span>
                </div>

              </div>

              {/* =========================
                  CONTENT
              ========================== */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Button */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-green-600 px-5 py-2.5 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg"
                >
                  View Project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}