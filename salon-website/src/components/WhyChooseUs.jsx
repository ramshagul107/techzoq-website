"use client";

import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Experienced Team",
    description:
      "Our skilled team combines technical expertise, creativity, and business understanding to build solutions that actually work.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We use modern technologies and development practices to create fast, secure, scalable, and reliable digital products.",
  },
  {
    number: "03",
    title: "Quality First",
    description:
      "From design to development, we focus on quality, performance, usability, and attention to every important detail.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "We don't disappear after delivery. We provide ongoing support and help your digital product grow with your business.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">

      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
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

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="flex flex-col justify-center">

            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-green-700
                "
              >
                Why Choose Us
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-xl
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              We don't just build
              <span className="block text-green-600">
                technology.
              </span>

              <span className="block">
                We build possibilities.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-gray-600
              "
            >
              Choosing the right technology partner can make a big
              difference. We focus on understanding your goals first,
              then create digital solutions that are practical,
              scalable, and built for long-term success.
            </p>

            {/* =====================================================
                STATS
            ===================================================== */}
            <div
              className="
                mt-10
                grid
                grid-cols-2
                gap-4
              "
            >

              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="
                    stats-card
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-200
                    hover:bg-green-50/40
                    hover:shadow-xl
                    hover:shadow-green-900/10
                  "
                >

                  {/* GREEN SIDE LINE */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      bg-green-500
                      transition-all
                      duration-500
                      group-hover:w-1
                      group-hover:bg-green-600
                    "
                  />

                  {/* NUMBER */}
                  <p
                    className="
                      stat-number
                      text-2xl
                      font-bold
                      text-gray-900
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:scale-110
                      group-hover:text-green-600
                    "
                  >
                    {stat.value}
                  </p>

                  {/* LABEL */}
                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-gray-700
                    "
                  >
                    {stat.label}
                  </p>

                  {/* BOTTOM LINE */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-green-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>
              ))}

            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#052e16]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-green-900/15
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-700
                  hover:shadow-xl
                "
              >
                Let's Work Together

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </Link>
            </div>

          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}
          <div className="relative">

            {/* VERTICAL LINE */}
            <div
              className="
                absolute
                left-[22px]
                top-7
                hidden
                h-[calc(100%-56px)]
                w-px
                bg-green-100
                sm:block
              "
            />

            <div className="space-y-5">

              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-200
                    hover:shadow-xl
                    hover:shadow-green-900/10
                    sm:p-6
                  "
                >

                  <div className="flex gap-5">

                    {/* NUMBER */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-green-200
                        bg-green-50
                        text-xs
                        font-bold
                        text-green-700
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-green-600
                        group-hover:bg-green-600
                        group-hover:text-white
                      "
                    >
                      {reason.number}
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3
                        className="
                          text-lg
                          font-bold
                          text-gray-900
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-green-700
                        "
                      >
                        {reason.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-gray-500
                          transition-colors
                          duration-300
                          group-hover:text-gray-600
                        "
                      >
                        {reason.description}
                      </p>
                    </div>

                  </div>

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
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          STATS ANIMATION
      ===================================================== */}
      <style>{`
        .stats-card {
          animation: statsFloat 4s ease-in-out infinite;
        }

        .stats-card:nth-child(2) {
          animation-delay: 0.4s;
        }

        .stats-card:nth-child(3) {
          animation-delay: 0.8s;
        }

        .stats-card:nth-child(4) {
          animation-delay: 1.2s;
        }

        .stats-card:hover {
          animation-play-state: paused;
        }

        @keyframes statsFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>

    </section>
  );
}