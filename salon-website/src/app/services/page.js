"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built for businesses and brands.",
    link: "/services/web-development",
    number: "01",
    image: "/images/gallery5.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "User-friendly mobile applications designed for Android and iOS platforms.",
    link: "/services/mobile-app-development",
    number: "02",
    image: "/images/gallery6.jpg",
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing that turns raw footage into engaging and polished content.",
    link: "/services/video-editing",
    number: "03",
    image: "/images/gallery7.jpg",
  },
  {
    title: "Video Creation",
    description:
      "Creative video content designed to communicate your ideas and strengthen your brand.",
    link: "/services/video-creation",
    number: "04",
    image: "/images/gallery8.jpg",
  },
  {
    title: "E-Commerce",
    description:
      "Modern online stores and e-commerce solutions designed to help businesses grow.",
    link: "/services/e-commerce",
    number: "05",
    image: "/images/gallery9.jpg",
  },
  {
    title: "Ethical Hacking",
    description:
      "Security-focused solutions that help identify vulnerabilities and protect digital systems.",
    link: "/services/ethical-hacking",
    number: "06",
    image: "/images/gallery10.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Creative visual designs that give your business a strong and memorable identity.",
    link: "/services/graphic-design",
    number: "07",
    image: "/images/gallery12.jpg",
  },
 {
  title: "AI Solutions",
  description:
    "Smart AI-powered solutions designed to automate tasks and improve business efficiency.",
  link: "/courses/ai-innovate",
  number: "08",
  image: "/images/gallery11.jpg",
},
  {
    title: "Software Solutions",
    description:
      "Custom software solutions built around your business needs and long-term goals.",
    link: "/services/software-solutions",
    number: "09",
    image: "/images/gallery18.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111827]">

      {/* ================= HERO ================= */}
      <section className="relative mt-[108px] min-h-[680px] w-full overflow-hidden md:min-h-[760px]">

        {/* HERO IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery20.jpg"
            alt="Techzoq Digital Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/20" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-[680px] items-center md:min-h-[760px]">

          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">

            <div className="max-w-xl">

              {/* BADGE */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#15803D]/20 bg-white/90 px-5 py-2 shadow-sm backdrop-blur-md">

                <span className="h-2 w-2 rounded-full bg-[#15803D]" />

                <span className="text-xs font-semibold tracking-[0.16em] text-[#15803D] md:text-sm">
                  SOFTWARE HOUSE • DIGITAL SOLUTIONS
                </span>

              </div>

              {/* HEADING */}
              <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">

                <span className="block text-[#111827]">
                  We Build
                </span>

                <span className="block text-[#15803D]">
                  Digital
                </span>

                <span className="block text-[#15803D]">
                  Experiences.
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-xl rounded-2xl bg-white/90 p-5 text-sm leading-7 text-gray-700 shadow-md backdrop-blur-md md:text-base">
                We create modern websites, mobile applications, software and
                digital solutions that help businesses grow, connect with
                customers and succeed in the digital world.
              </p>

              {/* START PROJECT */}
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#065c3c] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#04482f]"
              >
                Start a Project

                <span className="text-lg">
                  ↗
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-20 md:py-24">

        {/* INTRO */}
        <div className="mx-auto mb-10 max-w-7xl px-6 md:px-10">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#15803D] md:text-sm">
            Our Expertise
          </p>

          <h2 className="text-3xl font-bold text-[#111827] md:text-5xl">
            Digital Solutions For{" "}
            <span className="text-[#15803D]">
              Your Business
            </span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            From websites and mobile applications to creative and AI-powered
            solutions, we build digital products that help businesses grow.
          </p>

        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative w-full overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

          {/* TRACK */}
          <div className="services-track flex w-max gap-5">

            {/* FIRST SET */}
            {services.map((service, index) => (
              <div
                key={`first-${index}`}
                className="w-[270px] flex-shrink-0 md:w-[300px]"
              >
                <ServiceCard service={service} />
              </div>
            ))}

            {/* SECOND SET */}
            {services.map((service, index) => (
              <div
                key={`second-${index}`}
                className="w-[270px] flex-shrink-0 md:w-[300px]"
              >
                <ServiceCard service={service} />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#063f2b] px-8 py-16 text-center shadow-[0_20px_60px_rgba(6,63,43,0.20)] md:px-16">

          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#b9f2d1] md:text-sm">
            Let's Work Together
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Have A Project In Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d5eee2]">
            Let's turn your idea into a powerful digital experience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 font-semibold text-[#063f2b] transition-all duration-300 hover:scale-105 hover:bg-[#e8f8ef]"
          >
            Get In Touch

            <span className="text-lg">
              ↗
            </span>
          </Link>

        </div>
      </section>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        .services-track {
          animation: serviceScroll 45s linear infinite;
        }

        .services-track:hover {
          animation-play-state: paused;
        }

        @keyframes serviceScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }
      `}</style>

    </main>
  );
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service }) {
  return (
    <div
      className="
        group
        relative
        h-[430px]
        overflow-hidden
        rounded-[20px]
        border
        border-[#e1e8e4]
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#15803D]/40
        hover:shadow-[0_18px_35px_rgba(21,128,61,0.12)]
      "
    >

      {/* ================= IMAGE ================= */}
      <div className="relative h-[165px] w-full overflow-hidden">

        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 270px, 300px"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* NUMBER */}
        <div
          className="
            absolute
            bottom-4
            left-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-white/95
            text-sm
            font-bold
            text-[#15803D]
            shadow-lg
          "
        >
          {service.number}
        </div>

        {/* CLICKABLE ARROW */}
        <Link
          href={service.link}
          aria-label={`View ${service.title} details`}
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-[#15803D]
            shadow-md
            transition-all
            duration-300
            hover:bg-[#15803D]
            hover:text-white
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        >
          ↗
        </Link>

      </div>


      {/* ================= CONTENT ================= */}
      <div className="p-6">

        <h3
          className="
            mb-3
            text-xl
            font-bold
            text-[#111827]
            transition-colors
            duration-300
            group-hover:text-[#15803D]
          "
        >
          {service.title}
        </h3>

        <p className="text-sm leading-6 text-gray-500">
          {service.description}
        </p>

      </div>


      {/* ================= VIEW DETAILS ================= */}
      <div className="absolute bottom-6 left-6">

        <Link
          href={service.link}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#063f2b]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#065c3c]
            hover:shadow-lg
          "
        >
          View Details

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>

      </div>

    </div>
  );
}