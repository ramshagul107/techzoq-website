"use client";

import Link from "next/link";

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("what-we-offer");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#07120d]">
      {/* ========================================================= */}
      {/*                         HERO CONTENT                     */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-96px)]
          max-w-[1600px]
          grid-cols-1
          lg:grid-cols-[44%_56%]
        "
      >
        {/* ========================================================= */}
        {/*                         LEFT SIDE                         */}
        {/* ========================================================= */}

        <div
          className="
            relative
            z-20
            flex
            items-center
            overflow-hidden
            bg-gradient-to-br
            from-[#f7fbf8]
            via-[#eef7f1]
            to-[#dceee3]
           px-6
pt-28
pb-16
sm:px-8
sm:pt-32
md:px-12
md:pt-32
lg:min-h-[calc(100vh-96px)]
lg:px-10
lg:pt-24
lg:pb-16
xl:px-14
xl:pt-28
2xl:px-20
          "
        >
          {/* ================= SOFT GREEN GLOW ================= */}

          <div
            className="
              pointer-events-none
              absolute
              -left-32
              top-1/3
              h-80
              w-80
              rounded-full
              bg-green-300/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-120px]
              left-1/2
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-green-200/20
              blur-3xl
            "
          />

          <div className="relative z-10 w-full max-w-2xl">
            {/* ================= SMALL LABEL ================= */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-green-900/15
                bg-white/70
                px-4
                py-2
                shadow-sm
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                  shadow-lg
                  shadow-green-500/40
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-slate-700
                  sm:text-sm
                "
              >
                Software House • Digital Solutions
              </span>
            </div>

            {/* ================= MAIN HEADING ================= */}

            <h1
              className="
                text-5xl
                font-bold
                leading-[0.98]
                tracking-[-0.035em]
                text-slate-900
                sm:text-6xl
                md:text-7xl
                lg:text-[58px]a
                xl:text-[70px]
                2xl:text-[78px]
              "
            >
              We Build

              <span className="block text-green-500">
                Digital
              </span>

              <span className="block">
                Experiences.
              </span>
            </h1>

            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mt-5
                max-w-[620px]
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              We create modern websites, mobile applications, software and
              digital solutions that help businesses grow, connect with
              customers and succeed in the digital world.
            </p>

            {/* ================= BUTTONS ================= */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              {/* ================= START PROJECT ================= */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  h-13
                  min-w-[185px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-green-600
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-green-900/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-500
                  hover:shadow-xl
                  hover:shadow-green-500/20
                  active:scale-[0.97]
                "
              >
                <span>Start a Project</span>

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

              {/* ================= EXPLORE COURSES ================= */}

              <Link
                href="/courses"
                className="
                  group
                  inline-flex
                  h-13
                  min-w-[185px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-slate-400/60
                  bg-white/70
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-800
                  shadow-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-500
                  hover:bg-green-600
                  hover:text-white
                  hover:shadow-xl
                  hover:shadow-green-500/20
                  active:scale-[0.97]
                "
              >
                <span>Explore Courses</span>

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* ================= TRUST POINTS ================= */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                text-sm
                text-slate-500
              "
            >
              {/* TRUST POINT 1 */}

              <div className="flex items-center gap-2">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-500"
                >
                  <path d="m12 3 1.9 5.8H20l-4.9 3.6 1.9 5.8-5-3.6-5 3.6 1.9-5.8L4 8.8h6.1L12 3Z" />
                </svg>

                Innovative Solutions
              </div>

              {/* TRUST POINT 2 */}

              <div className="flex items-center gap-2">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-500"
                >
                  <path d="m12 3 1.9 5.8H20l-4.9 3.6 1.9 3.6-5-3.6-5 3.6 1.9-5.8L4 8.8h6.1L12 3Z" />
                </svg>

                Modern Technology
              </div>

              {/* TRUST POINT 3 */}

              <div className="flex items-center gap-2">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-500"
                >
                  <path d="m12 3 1.9 5.8H20l-4.9 3.6 1.9 5.8-5 3.6 1.9-5.8L4 8.8h6.1L12 3Z" />
                </svg>

                Quality Development
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/*                         RIGHT SIDE                        */}
        {/* ========================================================= */}

        <div
          className="
            relative
            min-h-[430px]
            overflow-hidden
            lg:min-h-[calc(100vh-96px)]
          "
        >
          {/* ================= HERO IMAGE ================= */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-no-repeat
            "
            style={{
              backgroundImage: "url('/images/hero.jpg')",
              backgroundPosition: "68% center",
            }}
          />

          {/* ================= LIGHT IMAGE OVERLAY ================= */}

          <div
            className="
              absolute
              inset-0
              bg-black/10
            "
          />

          {/* ================= LEFT IMAGE BLEND ================= */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[35%]
              bg-gradient-to-r
              from-[#eef7f1]
              via-[#eef7f1]/60
              to-transparent
            "
          />

          {/* ================= BOTTOM IMAGE BLEND ================= */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-black/15
              to-transparent
            "
          />

          {/* ================= GREEN GLOW ================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              bottom-0
              h-80
              w-80
              rounded-full
              bg-green-400/10
              blur-3xl
            "
          />

          {/* ================= IMAGE LABEL ================= */}

          <div
            className="
              absolute
              bottom-7
              right-6
              z-10
              hidden
              rounded-full
              border
              border-white/30
              bg-black/20
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-white
              backdrop-blur-md
              sm:block
              lg:right-8
              xl:right-10
            "
          >
            Digital Solutions
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/*                    SCROLL TO EXPLORE                      */}
      {/* ========================================================= */}

      <button
        type="button"
        onClick={handleScroll}
        aria-label="Scroll to explore"
        className="
          absolute
          bottom-6
          right-6
          z-30
          hidden
          items-center
          gap-3
          text-xs
          uppercase
          tracking-[0.18em]
          text-slate-500
          transition-all
          duration-300
          hover:text-green-600
          md:flex
          lg:right-8
        "
      >
        <span>Scroll to explore</span>

        <span
          className="
            flex
            h-10
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-slate-400/60
            bg-white/40
            p-1
            transition-all
            duration-300
            hover:border-green-500
          "
        >
          <span
            className="
              h-2
              w-1
              animate-bounce
              rounded-full
              bg-green-500
            "
          />
        </span>
      </button>
    </section>
  );
}
 