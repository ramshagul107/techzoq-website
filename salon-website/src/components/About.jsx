"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Business-Focused",
    description:
      "We understand your goals first and then create technology around your actual business needs.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We use modern technologies and development practices to create fast, scalable and reliable products.",
  },
  {
    number: "03",
    title: "Creative Thinking",
    description:
      "We combine technology with creativity to build digital experiences that stand out.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    description:
      "Our relationship does not end after launch. We continue to support and improve your product.",
  },
];

const workCategories = [
  {
    number: "01",
    title: "Build Digital Products",
    description:
      "We build powerful digital products that help businesses grow and work smarter.",
    items: ["Websites", "Mobile Apps", "Software Systems"],
  },
  {
    number: "02",
    title: "Create & Design",
    description:
      "Creative digital experiences designed to look modern, feel simple and engage users.",
    items: ["UI/UX Design", "Graphic Design", "Video Creation & Editing"],
  },
  {
    number: "03",
    title: "Grow Your Business",
    description:
      "Digital solutions that help businesses reach more customers and improve their workflow.",
    items: ["E-Commerce", "Digital Solutions", "Business Automation"],
  },
  {
    number: "04",
    title: "Smart & Secure",
    description:
      "Smart technologies and security solutions that keep your business protected and future-ready.",
    items: ["AI Solutions", "Ethical Hacking", "Cyber Security"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your idea, business goals and requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a clear roadmap and choose the right technology.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team designs and develops your digital solution.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, optimize and launch your product with confidence.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We continue improving your product as your business grows.",
  },
];

function WhatWeDoCard({ category }) {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#f8faf9] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:bg-white hover:shadow-2xl md:p-9"
    >
      {/* Cursor Movement Glow */}
      <div
        className="pointer-events-none absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
      />

      <div className="relative z-10">
        {/* Top */}
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-bold tracking-[0.2em] text-green-600">
            {category.number}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-400 transition-all duration-300 group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white">
            ↗
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600 md:text-3xl">
          {category.title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
          {category.description}
        </p>

        {/* Items */}
        <div className="mt-7 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 transition-all duration-300 group-hover:border-green-200 group-hover:text-green-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Green Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* ================= HERO / WHO WE ARE ================= */}

      <section className="relative overflow-hidden bg-[#f8faf9] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-100/60 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="group relative">

              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[30px] bg-green-100" />

              <div className="relative h-[420px] overflow-hidden rounded-[30px] shadow-2xl sm:h-[540px]">

                <Image
                  src="/images/about.jpg"
                  alt="Techzoq team"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03251c]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">

                  <p className="text-2xl font-black text-green-600">
                    Techzoq
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Technology - Creativity - Growth
                  </p>

                </div>

              </div>

            </div>

            {/* WHO WE ARE */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
                  Who We Are
                </span>

              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Building Digital

                <span className="block text-green-600">
                  Solutions That Matter.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                Techzoq is a technology-driven company focused on creating
                modern digital solutions that help businesses work smarter,
                grow faster and build stronger connections with customers.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                From websites and mobile applications to custom software,
                e-commerce, AI and cybersecurity, we combine technology,
                creativity and business understanding to turn ideas into
                meaningful digital experiences.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {[
                  "Business-Focused Solutions",
                  "Modern Technology",
                  "Creative Approach",
                  "Long-Term Support",
                ].map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-gray-800">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <div className="mt-7">

                <Link
                  href="/courses"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Explore Our Services

                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


   {/* ================= STATS ================= */}

<section className="relative overflow-hidden bg-[#03251c] py-10 text-white sm:py-12">

  <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

      {[
        ["50+", "Projects Delivered"],
        ["30+", "Happy Clients"],
        ["15+", "Technologies"],
        ["24/7", "Support"],
      ].map(([number, label]) => (

        <div
          key={label}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/[0.06] sm:px-6"
        >

          {/* Cursor Movement Glow */}

          <div
            className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-green-400/20 opacity-0 blur-2xl transition-all duration-500 group-hover:left-1/2 group-hover:top-1/2 group-hover:opacity-100"
          />

          <div className="relative z-10">

            <div className="text-4xl font-black text-green-500 transition-transform duration-500 group-hover:scale-110 sm:text-5xl">
              {number}
            </div>

            <div className="mt-2 text-xs uppercase tracking-widest text-white/50 sm:text-sm">
              {label}
            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* ================= WHAT WE DO ================= */}

      <section
        id="what-we-do"
        className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
      >

        {/* Background Glow */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-green-50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* ================= HEADING ================= */}

          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-600">
                  What We Do
                </span>

              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                <span className="inline-block rounded-lg bg-[#03251c] px-3 py-1 text-white">
                  Turning Ideas
                </span>

                <span className="block text-green-600">
                  Into Digital Experiences.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              We combine technology, creativity and strategy to create digital
              solutions that help businesses grow, connect and succeed.
            </p>

          </div>


          {/* ================= CARDS ================= */}

          <div className="grid gap-5 md:grid-cols-2">

            {workCategories.map((category) => (
              <WhatWeDoCard
                key={category.number}
                category={category}
              />
            ))}

          </div>


          {/* ================= BUTTON ================= */}

          <div className="mt-12 text-center">

            <Link
              href="/courses"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
            >

              Explore Our Services

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-600 transition-transform duration-300">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY TECHZOQ ================= */}

      <section className="relative bg-white py-8 sm:py-10 lg:py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">

            {/* LEFT CONTENT */}

            <div className="pt-1">

              <div className="mb-3 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
                  Why Techzoq
                </span>

              </div>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">

                We Don't Just

                <span className="block text-green-600">
                  Build. We Think.
                </span>

              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                Every successful digital product starts with the right
                thinking. We combine strategy, creativity and technology to
                create useful and scalable solutions.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >

                Let's Build Together

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-green-600">
                  →
                </span>

              </Link>

            </div>


            {/* REASONS */}

            <div className="grid gap-4 sm:grid-cols-2">

              {reasons.map((reason) => (

                <div
                  key={reason.number}
                  className="rounded-2xl border border-gray-100 bg-[#f8faf9] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:bg-white hover:shadow-xl"
                >

                  <span className="text-xs font-bold text-green-600">
                    {reason.number}
                  </span>

                  <h3 className="mt-7 text-lg font-bold text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {reason.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="bg-[#f8faf9] py-14 sm:py-18 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
                Our Process
              </span>

              <span className="h-[2px] w-10 bg-green-600" />

            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">

              From Idea To{" "}

              <span className="text-green-600">
                Impact.
              </span>

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
              A simple and transparent process that keeps your project moving
              from the first conversation to long-term growth.
            </p>

          </div>


          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">

            {process.map((step) => (

              <div
                key={step.number}
                className="text-center transition-all duration-500 hover:-translate-y-2"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-lg font-black text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden bg-[#03251c] py-16 text-white sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-500">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

            Ready to build something

            <span className="block text-green-500">
              amazing?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Have an idea, a challenge or a project in mind? Let's turn it
            into a digital solution that makes an impact.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
          >

            Start a Project

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#03251c]">
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}