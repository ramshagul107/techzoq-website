"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // ================= NAVIGATION LINKS =================
  const navLinks = [
    {
      name: "Overview",
      href: "/",
    },
    {
      name: "Who We Are",
      href: "/about",
    },
    {
      name: "Our Work",
      href: "/projects",
    },
    {
      name: "Showcase",
      href: "/portfolio",
    },
  ];

  // ================= COURSES =================
  const courses = [
    {
      name: "WebCraft Pro",
      href: "/courses/web-development",
    },
    {
      name: "AppForge",
      href: "/courses/mobile-app-development",
    },
    {
      name: "ShopSphere",
      href: "/courses/e-commerce",
    },
    {
      name: "MotionLab",
      href: "/courses/video-editing",
    },
    {
     name: "CodeCore",
href: "/courses/codecore",
    },
    {
      name: "PixelCraft",
      href: "/courses/graphic-design",
    },
    {
      name: "CyberShield",
      href: "/courses/ethical-hacking",
    },
    {
     name: "AI Innovate",
href: "/courses/ai-innovate",
    },
    {
      name: "VisionStudio",
      href: "/courses/video-creation",
    },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <nav
        className="
          mx-auto
          w-full
          rounded-b-2xl
          border-x
          border-b
          border-gray-200
          bg-white/95
          backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        "
      >
        {/* =================================================
            MAIN NAVBAR
        ================================================= */}
        <div className="flex h-[76px] items-center justify-between px-5 lg:px-7">

          {/* =================================================
              LOGO
          ================================================= */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#166534]
                text-lg
                font-bold
                text-white
                shadow-md
                shadow-green-900/20
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:rotate-[-5deg]
              "
            >
              T
            </div>

            <div className="leading-none">
              <h1
                className="
                  text-[18px]
                  font-bold
                  tracking-tight
                  text-gray-900
                "
              >
                Tech
                <span className="text-[#16A34A]">
                  zoq
                </span>
              </h1>

              <p
                className="
                  mt-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                "
              >
                Software House
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <div className="hidden items-center gap-1 lg:flex">

            {/* OVERVIEW / WHO WE ARE / OUR WORK / SHOWCASE */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  rounded-xl
                  px-4
                  py-2.5
                  text-[14px]
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isActive(link.href)
                      ? "bg-green-50 text-[#15803D]"
                      : "text-gray-600 hover:bg-green-50 hover:text-[#15803D]"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            
           {/* =================================================
    COURSES DROPDOWN
================================================= */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <Link
                href="/courses"
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-4
                  py-2.5
                  text-[14px]
                  font-medium
                  transition-all
                  duration-300

                  ${
                    pathname.startsWith("/courses")
                      ? "bg-green-50 text-[#15803D]"
                      : "text-gray-600 hover:bg-green-50 hover:text-[#15803D]"
                  }
                `}
              >
                Courses

                <span
                  className={`
                    text-[10px]
                    transition-transform
                    duration-300

                    ${
                      coursesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  ▼
                </span>
              </Link>

              {/* =================================================
                  DESKTOP COURSES DROPDOWN
              ================================================= */}
              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  mt-3
                  w-72
                  -translate-x-1/2
                  rounded-2xl
                  border
                  border-green-100
                  bg-white
                  p-2
                  shadow-2xl
                  shadow-green-900/10
                  transition-all
                  duration-200

                  ${
                    coursesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <Link
                  href="/courses"
                  className="
                    mb-1
                    block
                    rounded-xl
                    bg-green-50
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-[#15803D]
                    transition-all
                    duration-200
                    hover:bg-green-100
                  "
                >
                  All Courses
                </Link>

                {courses.map((course) => (
                  <Link
                    key={course.name}
                    href={course.href}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-2.5
                      text-sm
                      text-gray-600
                      transition-all
                      duration-200
                      hover:bg-green-50
                      hover:pl-5
                      hover:text-[#15803D]
                    "
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              LOGIN + CONTACT BUTTONS
          ================================================= */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* LOGIN BUTTON */}
            <Link
              href="/login"
              className="
                rounded-full
                border
                border-[#15803D]
                px-5
                py-3
                text-sm
                font-semibold
                text-[#15803D]
                transition-all
                duration-300
                hover:bg-green-50
              "
            >
              Login
            </Link>

            {/* CONTACT BUTTON */}
            <Link
              href="/contact"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-[#15803D]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                shadow-green-700/20
                transition-all
                duration-300
                hover:bg-[#166534]
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-green-700/25
              "
            >
              Let's Talk

              <span
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-green-50
              text-xl
              text-[#15803D]
              transition
              hover:bg-green-100
              lg:hidden
            "
            aria-label="Toggle menu"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden

            ${
              mobileOpen
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-gray-100 px-5 pb-5 pt-4">

            <div className="flex flex-col gap-1">

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition

                    ${
                      isActive(link.href)
                        ? "bg-green-50 text-[#15803D]"
                        : "text-gray-600 hover:bg-green-50 hover:text-[#15803D]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}

             
             {/* =================================================
    MOBILE COURSES BUTTON
================================================= */}
              <button
                type="button"
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-gray-600
                  transition
                  hover:bg-green-50
                  hover:text-[#15803D]
                "
              >
                <span>Courses</span>

                <span
                  className={`
                    text-[10px]
                    transition-transform
                    duration-300

                    ${
                      coursesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  ▼
                </span>
              </button>

              {/* =================================================
                  MOBILE COURSES LIST
              ================================================= */}
              <div
                className={`
                  overflow-hidden
                  pl-4
                  transition-all
                  duration-300

                  ${
                    coursesOpen
                      ? "max-h-[800px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <Link
                  href="/courses"
                  onClick={() => setMobileOpen(false)}
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#15803D]
                    transition
                    hover:bg-green-50
                  "
                >
                  All Courses
                </Link>

                {courses.map((course) => (
                  <Link
                    key={course.name}
                    href={course.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      block
                      rounded-lg
                      px-4
                      py-2.5
                      text-sm
                      text-gray-500
                      transition
                      hover:bg-green-50
                      hover:text-[#15803D]
                    "
                  >
                    {course.name}
                  </Link>
                ))}
              </div>

              {/* =================================================
                  MOBILE LOGIN BUTTON
              ================================================= */}
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#15803D]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-[#15803D]
                  transition
                  hover:bg-green-50
                "
              >
                Login
              </Link>

              {/* =================================================
                  MOBILE CONTACT BUTTON
              ================================================= */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#15803D]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#166534]
                "
              >
                Let's Talk ↗
              </Link>

            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}