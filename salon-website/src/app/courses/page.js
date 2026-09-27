"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "WebCraft Pro",
    description:
      "Learn modern web development and build responsive, professional websites from scratch.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    number: "01",
    image: "/images/gallery5.jpg",
    link: "/courses/webcraft-pro",
  },
  {
    title: "AppForge",
    description:
      "Learn mobile app development and create powerful, user-friendly applications.",
    duration: "3 Months",
    level: "Intermediate",
    number: "02",
    image: "/images/gallery6.jpg",
    link: "/courses/appforge",
  },
  {
    title: "ShopSphere",
    description:
      "Learn how to build modern e-commerce stores and create better online shopping experiences.",
    duration: "2 Months",
    level: "Intermediate",
    number: "03",
    image: "/images/gallery9.jpg",
    link: "/courses/shopsphere",
  },
  {
    title: "MotionLab",
    description:
      "Master video editing and create engaging, professional visual content for brands and businesses.",
    duration: "2 Months",
    level: "Beginner to Advanced",
    number: "04",
    image: "/images/gallery8.jpg",
    link: "/courses/motionlab",
  },
  {
    title: "CodeCore",
    description:
      "Build a strong programming foundation and learn how to solve real-world coding problems.",
    duration: "3 Months",
    level: "Beginner",
    number: "05",
    image: "/images/gallery18.jpg",
    link: "/courses/codecore",
  },
  {
    title: "PixelCraft",
    description:
      "Learn graphic design and create modern visual identities, graphics and digital experiences.",
    duration: "2 Months",
    level: "Beginner",
    number: "06",
    image: "/images/gallery12.jpg",
    link: "/courses/pixelcraft",
  },
  {
    title: "CyberShield",
    description:
      "Learn cybersecurity fundamentals and ethical hacking techniques to understand digital security.",
    duration: "3 Months",
    level: "Intermediate",
    number: "07",
    image: "/images/gallery10.jpg",
    link: "/courses/cybershield",
  },
  {
    title: "AI Innovate",
    description:
      "Explore artificial intelligence and learn how AI can be used to solve modern business problems.",
    duration: "3 Months",
    level: "Intermediate",
    number: "08",
    image: "/images/gallery11.jpg",
    link: "/courses/ai-innovate",
  },
  {
    title: "VisionStudio",
    description:
      "Learn creative digital skills and turn your ideas into professional visual experiences.",
    duration: "2 Months",
    level: "Beginner",
    number: "09",
    image: "/images/gallery7.jpg",
    link: "/courses/visionstudio",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#111827]">

   {/* =========================================================
    HERO - FULL BACKGROUND IMAGE
========================================================= */}
<section className="relative mt-[82px] min-h-[calc(100svh-80px)] overflow-hidden">

  {/* =======================================================
      FULL BACKGROUND IMAGE
  ======================================================= */}
  <div className="absolute inset-0">

    <Image
      src="/images/gallery26.jpg"
      alt="Students learning technology together"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />

    {/* Main soft white/green overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/10" />

    {/* Green tint on right */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8f7ee]/10 to-[#08783f]/10" />

    {/* Bottom soft overlay */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/40 to-transparent" />

  </div>


  {/* =======================================================
      DECORATIVE GREEN CIRCLES
  ======================================================= */}
  <div className="pointer-events-none absolute -right-[180px] -top-[180px] z-[1] h-[600px] w-[600px] rounded-full bg-[#bcebcf]/35 blur-sm" />

  <div className="pointer-events-none absolute -bottom-[180px] -left-[180px] z-[1] h-[450px] w-[450px] rounded-full bg-[#ccefd9]/40" />


  {/* =======================================================
      HERO CONTENT
  ======================================================= */}
  <div className="relative z-10 mx-auto flex min-h-[calc(100svh-92px)] max-w-[1500px] items-center">

    {/* =====================================================
        LEFT CONTENT
    ===================================================== */}
    <div className="w-full px-6 pt-1 pb-10 sm:px-10 sm:pt-1 md:px-14 md:pt-5 lg:w-[58%] lg:px-16 lg:pt-3 xl:px-20">

      {/* =================================================
          BADGE
      ================================================= */}
      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#15803D]/20 bg-white/95 px-5 py-2.5 shadow-[0_5px_20px_rgba(21,128,61,0.10)] backdrop-blur-md">

        <span className="h-2 w-2 rounded-full bg-[#15803D]" />

        <span className="text-[10px] font-bold tracking-[0.16em] text-[#08783f] sm:text-xs md:text-sm">
          LEARN • BUILD • GROW
        </span>

      </div>


      {/* =================================================
          HEADING
      ================================================= */}
      <h1 className="max-w-[620px] text-[44px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[52px] md:text-[60px] lg:text-[58px] xl:text-[70px]">

        <span className="block text-[#111827]">
          Learn
        </span>

        <span className="block text-[#15803D]">
          Technology.
        </span>

        <span className="block text-[#111827]">
          Build Your
        </span>

        <span className="block text-[#15803D]">
          Future.
        </span>

      </h1>


      {/* =================================================
          DESCRIPTION
      ================================================= */}
      <p className="mt-5 max-w-[540px] text-[14px] leading-6 text-[#374151] sm:text-[15px] sm:leading-7 md:text-base">

        Learn practical digital skills through industry-focused
        courses designed to help you build real projects and grow
        your career in tech.

      </p>


      {/* =================================================
          BUTTONS
      ================================================= */}
      <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">

        {/* Explore Courses */}
        <a
          href="#courses"
          className="inline-flex items-center gap-3 rounded-full bg-[#08783f] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(8,120,63,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#056333] sm:px-7"
        >

          Explore Courses

          <span className="text-lg leading-none">
            →
          </span>

        </a>


        {/* Watch Video */}
        <button
          type="button"
          className="inline-flex items-center gap-3 rounded-full border border-[#15803D]/25 bg-white/95 px-5 py-3 text-sm font-semibold text-[#08783f] shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#15803D]/40 hover:shadow-lg"
        >

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#15803D]/20 bg-[#f5fbf7] text-xs text-[#15803D]">
            ▶
          </span>

          Watch Video

        </button>

      </div>


      {/* =================================================
          FEATURES
      ================================================= */}
      <div className="mt-7 flex max-w-[700px] flex-wrap items-center gap-x-5 gap-y-4">

        {/* Feature 1 */}
        <div className="flex items-center gap-3">

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#15803D] shadow-sm">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

          </span>

          <div>

            <p className="text-xs font-semibold text-[#1f2937]">
              Expert Instructors
            </p>

            <p className="text-[10px] text-gray-600">
              Learn from industry pros
            </p>

          </div>

        </div>


        {/* Divider */}
        <div className="hidden h-8 w-px bg-[#15803D]/25 sm:block" />


        {/* Feature 2 */}
        <div className="flex items-center gap-3">

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#15803D] shadow-sm">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5L12 2z" />
            </svg>

          </span>

          <div>

            <p className="text-xs font-semibold text-[#1f2937]">
              Hands-on Projects
            </p>

            <p className="text-[10px] text-gray-600">
              Build real world skills
            </p>

          </div>

        </div>


        {/* Divider */}
        <div className="hidden h-8 w-px bg-[#15803D]/25 lg:block" />


        {/* Feature 3 */}
        <div className="flex items-center gap-3">

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#15803D] shadow-sm">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3v18h18" />
              <path d="M7 16l4-5 3 3 5-7" />
            </svg>

          </span>

          <div>

            <p className="text-xs font-semibold text-[#1f2937]">
              Career Support
            </p>

            <p className="text-[10px] text-gray-600">
              Get hired with confidence
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =========================================================
          COURSES
      ========================================================= */}
      <section
        id="courses"
        className="bg-white py-20 md:py-24"
      >

        <div className="mx-auto mb-12 max-w-7xl px-6 md:px-10">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#15803D] md:text-sm">
            Our Courses
          </p>

          <h2 className="text-3xl font-bold text-[#111827] md:text-5xl">
            Learn Skills That{" "}
            <span className="text-[#15803D]">
              Matter
            </span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            Explore practical courses designed to help you learn modern
            technology, build real-world projects and develop valuable skills.
          </p>

        </div>

        {/* =====================================================
            TOP ROW
        ===================================================== */}
        <div className="relative mb-6 w-full overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

          <div className="courses-track-left flex w-max gap-5">

            {courses.map((course, index) => (
              <div
                key={`top-one-${index}`}
                className="w-[280px] flex-shrink-0 md:w-[310px]"
              >
                <CourseCard course={course} />
              </div>
            ))}

            {courses.map((course, index) => (
              <div
                key={`top-two-${index}`}
                className="w-[280px] flex-shrink-0 md:w-[310px]"
              >
                <CourseCard course={course} />
              </div>
            ))}

          </div>
        </div>

        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}
        <div className="relative w-full overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

          <div className="courses-track-right flex w-max gap-5">

            {courses.map((course, index) => (
              <div
                key={`bottom-one-${index}`}
                className="w-[280px] flex-shrink-0 md:w-[310px]"
              >
                <CourseCard course={course} />
              </div>
            ))}

            {courses.map((course, index) => (
              <div
                key={`bottom-two-${index}`}
                className="w-[280px] flex-shrink-0 md:w-[310px]"
              >
                <CourseCard course={course} />
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-white px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#063f2b] px-8 py-16 text-center shadow-[0_20px_60px_rgba(6,63,43,0.20)] md:px-16">

          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#b9f2d1] md:text-sm">
            Start Learning Today
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready To Build Your Skills?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d5eee2]">
            Choose a course, start learning and turn your knowledge into
            practical skills.
          </p>

          <a
            href="#courses"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 font-semibold text-[#063f2b] transition-all duration-300 hover:scale-105 hover:bg-[#e8f8ef]"
          >
            View Courses

            <span className="text-lg">
              ↓
            </span>
          </a>

        </div>
      </section>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style jsx>{`

        .courses-track-left {
          animation: coursesLeft 45s linear infinite;
        }

        .courses-track-left:hover {
          animation-play-state: paused;
        }

        @keyframes coursesLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .courses-track-right {
          animation: coursesRight 45s linear infinite;
        }

        .courses-track-right:hover {
          animation-play-state: paused;
        }

        @keyframes coursesRight {
          from {
            transform: translateX(calc(-50% - 10px));
          }

          to {
            transform: translateX(0);
          }
        }

      `}</style>

    </main>
  );
}


/* =============================================================
   COURSE CARD
============================================================= */

function CourseCard({ course }) {
  return (
    <div
      className="
        group
        relative
        h-[440px]
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

      {/* Image */}
      <div className="relative h-[175px] w-full overflow-hidden">

        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 280px, 310px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Number */}
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-sm font-bold text-[#15803D] shadow-lg">
          {course.number}
        </div>

        {/* Arrow */}
        <Link
          href={course.link}
          aria-label={`View ${course.title} course`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#15803D] shadow-md transition-all duration-300 hover:bg-[#15803D] hover:text-white"
        >
          ↗
        </Link>

      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="mb-3 text-xl font-bold text-[#111827] transition-colors duration-300 group-hover:text-[#15803D]">
          {course.title}
        </h3>

        <p className="text-sm leading-6 text-gray-500">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          <span className="rounded-full bg-[#e8f8ef] px-3 py-1.5 text-xs font-semibold text-[#15803D]">
            {course.duration}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
            {course.level}
          </span>

        </div>
      </div>

      {/* View Course */}
      <div className="absolute bottom-6 left-6">

        <Link
          href={course.link}
          className="inline-flex items-center gap-2 rounded-full bg-[#063f2b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#065c3c]"
        >
          View Course

          <span>
            →
          </span>
        </Link>

      </div>

    </div>
  );
}