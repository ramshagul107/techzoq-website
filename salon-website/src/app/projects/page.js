"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "Mandi Operations",
    title: "Pakka Khata",
    description:
      "A digital khata and mandi management system designed for adhatis, traders, and cold stores.",
    image: "/images/gallery1.jpg",
    link: "https://pakkakhata.com",
  },
  {
    number: "02",
    category: "Farmer Marketplace",
    title: "Kissan Market",
    description:
      "A modern agriculture platform connecting farmers, buyers, dealers, and agri businesses.",
    image: "/images/gallery2.jpg",
    link: "https://kissanmarket.pk",
  },
  {
    number: "03",
    category: "Agriculture Expo",
    title: "Kissan AgriFest",
    description:
      "A field-first agriculture event connecting farmers with experts, companies, machinery, and innovation.",
    image: "/images/gallery3.jpg",
    link: "https://agrifest.com.pk",
  },
];

export default function ProjectsPage() {
  const [heroMove, setHeroMove] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setHeroMove({
      x: x * 14,
      y: y * 14,
    });
  };

  const handleHeroMouseLeave = () => {
    setHeroMove({ x: 0, y: 0 });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 lg:px-20 lg:py-20">

        {/* Decorative Green Blur */}
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — Heading */}
          <div className="max-w-xl">

            <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              Our Projects
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Digital Products
              <span className="block text-green-600">
                We&apos;ve Built.
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
              Explore the digital platforms and solutions we have created
              for businesses, farmers, communities, and growing industries.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-green-600" />

              <span className="text-sm font-medium text-gray-500">
                Innovation • Design • Technology
              </span>
            </div>

          </div>

          {/* RIGHT — HERO IMAGE */}
          <div
            className="relative"
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
          >

            {/* Green Shape */}
            <div
              className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] bg-green-100 transition-transform duration-300"
              style={{
                transform: `translate(${heroMove.x * 0.35}px, ${
                  heroMove.y * 0.35
                }px)`,
              }}
            />

            {/* Image */}
            <div
              className="relative h-[380px] overflow-hidden rounded-[2rem] shadow-2xl md:h-[460px] transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${heroMove.x}px, ${heroMove.y}px)`,
              }}
            >

              <Image
                src="/images/khata.jpg"
                alt="Pakka Khata Project"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-green-700 shadow-lg">
                  Featured Project
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="relative px-6 py-24 md:px-12 lg:px-20">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-green-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              Featured Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Recent Projects
            </h2>

            <p className="mt-4 max-w-2xl text-gray-500">
              Practical digital experiences designed with purpose,
              performance, and real-world users in mind.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">

            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Card Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-green-600 shadow-lg">
                    {project.number}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* View Project */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-green-600 px-6 py-3 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg"
                  >
                    View Project

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

    {/* ================= CTA ================= */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600 px-8 py-14 text-center md:px-16">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-100">
            Have an Idea?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Build Your Next Project.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-green-50 md:text-base">
            Have a business idea or digital product in mind?
            Let&apos;s turn it into a powerful digital experience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-50"
          >
            Get In Touch
          </Link>

        </div>
      </section>

    </main>
  );
}