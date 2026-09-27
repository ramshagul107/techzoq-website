"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern and responsive websites built for performance and business growth.",
    image: "/images/web-development.jpg",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Powerful mobile applications designed for modern businesses and users.",
    image: "/images/app-development.jpg",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Clean and engaging interfaces focused on a smooth user experience.",
    image: "/images/ui-ux.jpg",
  },
  {
    number: "04",
    title: "Software Solutions",
    description:
      "Custom software solutions designed around your business requirements.",
    image: "/images/software.jpg",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Smart digital strategies that help your brand reach more customers.",
    image: "/images/digital-marketing.jpg",
  },
  {
    number: "06",
    title: "E-Commerce",
    description:
      "Modern online stores designed to increase sales and conversions.",
    image: "/images/e-commerce.jpg",
  },
  {
    number: "07",
    title: "AI Solutions",
    description:
      "AI-powered solutions that automate tasks and improve productivity.",
    image: "/images/ai.jpg",
  },
  {
    number: "08",
    title: "Video Creation",
    description:
      "Creative video content that communicates your brand and ideas.",
    image: "/images/video-creation.jpg",
  },
  {
    number: "09",
    title: "Video Editing",
    description:
      "Professional editing that turns your footage into engaging content.",
    image: "/images/video-editing.jpg",
  },
];

function ServiceCard({ service }) {
  return (
    <div
      className="
        group
        relative
        h-[265px]
        w-[295px]
        shrink-0
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-lg
        shadow-gray-200/70
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-200
        hover:shadow-2xl
        hover:shadow-green-900/15
      "
    >
      {/* IMAGE + NUMBER */}
      <div className="flex items-start justify-between">
        <img
          src={service.image}
          alt={service.title}
          className="
            h-[76px]
            w-[76px]
            rounded-2xl
            object-cover
            shadow-md
            ring-1
            ring-gray-100
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-2
            group-hover:shadow-lg
          "
        />

        <span
          className="
            rounded-full
            bg-green-50
            px-3
            py-1
            text-xs
            font-bold
            tracking-[0.15em]
            text-green-600
          "
        >
          {service.number}
        </span>
      </div>

      {/* TITLE */}
      <h3
        className="
          mt-6
          text-xl
          font-bold
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-green-700
        "
      >
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mt-3
          text-sm
          leading-6
          text-gray-500
        "
      >
        {service.description}
      </p>

      {/* EXPLORE SERVICE */}
      <Link
        href="/services"
        className="
          absolute
          bottom-5
          left-6
          inline-flex
          items-center
          gap-2
          rounded-full
          px-3
          py-1.5
          text-xs
          font-semibold
          text-gray-700
          transition-all
          duration-300
          hover:bg-green-50
          hover:text-green-600
        "
      >
        Explore Courses

        <span
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>

      {/* GREEN BOTTOM LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          rounded-r-full
          bg-green-600
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
}

export default function WhatWeOffer() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-green-50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-72
          w-72
          rounded-full
          bg-green-50
          blur-3xl
        "
      />

      {/* HEADER */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-green-600" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-green-700
                "
              >
                What We Offer
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              Everything you need to
              <span className="block text-green-600">
                grow digitally.
              </span>
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <p
            className="
              max-w-lg
              text-sm
              leading-6
              text-gray-600
              sm:text-base
            "
          >
            From websites and apps to AI, marketing and creative
            solutions, we provide everything your business needs
            to build a strong digital presence.
          </p>
        </div>
      </div>

      {/* =====================================================
          MOVING SERVICE CARDS
          ONLY ONE LINE
      ===================================================== */}
      <div className="relative mt-14 overflow-hidden">

        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-28
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
          "
        />

        {/* RIGHT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-28
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent
          "
        />

        {/* ONE LINE TRACK */}
        <div className="services-track">

          {/* FIRST SET */}
          <div className="services-group">
            {services.map((service) => (
              <ServiceCard
                key={`first-${service.number}`}
                service={service}
              />
            ))}
          </div>

          {/* SECOND SET
              This keeps the movement smooth */}
          <div className="services-group">
            {services.map((service) => (
              <ServiceCard
                key={`second-${service.number}`}
                service={service}
              />
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <div
        className="
          relative
          mx-auto
          mt-16
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-2xl
            bg-[#052e16]
            px-6
            py-6
            shadow-xl
            shadow-green-900/10
            sm:flex-row
            sm:items-center
          "
        >
          {/* CTA TEXT */}
          <div>
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-green-400
              "
            >
              Have an idea?
            </p>

            <h3
              className="
                mt-1
                text-lg
                font-bold
                text-white
                sm:text-xl
              "
            >
              Let's turn your idea into reality.
            </h3>
          </div>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-green-500
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-lg
              shadow-green-900/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-green-400
              hover:shadow-xl
            "
          >
            Start a Project ↗
          </Link>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}
      <style>{`
        .services-track {
          display: flex;
          width: max-content;

          /*
            1. Right → Left
            2. Left → Right
            3. Right → Left
            4. Continues...
          */
          animation: services-scroll 32s linear infinite alternate;
        }

        .services-track:hover {
          animation-play-state: paused;
        }

        .services-group {
          display: flex;
          gap: 24px;
          padding-right: 24px;
        }

        @keyframes services-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
