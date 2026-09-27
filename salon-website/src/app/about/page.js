"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const team = [
    {
      name: "Creative Team",
      role: "Design & UI/UX",
      icon: "✦",
    },
    {
      name: "Development Team",
      role: "Web & App Development",
      icon: "</>",
    },
    {
      name: "Technology Team",
      role: "Software & AI Solutions",
      icon: "◇",
    },
    {
      name: "Support Team",
      role: "Client Success",
      icon: "↗",
    },
  ];

  const stats = [
    {
      number: "50+",
      title: "Projects",
    },
    {
      number: "9+",
      title: "Services",
    },
    {
      number: "100%",
      title: "Commitment",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  const values = [
    {
      icon: "✦",
      title: "Innovation",
      text: "We continuously explore better ideas, tools, and technologies.",
    },
    {
      icon: "✓",
      title: "Quality",
      text: "We focus on reliable products and experiences that last.",
    },
    {
      icon: "◇",
      title: "Integrity",
      text: "We believe in honest communication and responsible work.",
    },
    {
      icon: "∞",
      title: "Collaboration",
      text: "We work closely with clients to achieve shared goals.",
    },
  ];

  const approach = [
    {
      number: "01",
      icon: "✦",
      title: "Discover",
      text: "We understand your goals, audience, challenges, and requirements.",
    },
    {
      number: "02",
      icon: "◇",
      title: "Design",
      text: "We create thoughtful interfaces and experiences around your users.",
    },
    {
      number: "03",
      icon: "</>",
      title: "Develop",
      text: "We turn the approved concept into a fast and reliable product.",
    },
    {
      number: "04",
      icon: "↗",
      title: "Deliver",
      text: "We launch your product and continue supporting its growth.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbf7]">

        {/* LEFT GLOW */}
        <div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/70 blur-3xl transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-100/60 blur-3xl transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  About Techzoq
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Building
                <span className="block text-green-600">
                  Technology.
                </span>

                Creating
                <span className="block text-green-600">
                  Possibilities.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                We build modern digital products that help businesses
                turn ideas into meaningful technology and real-world
                solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Work With Us

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
                >
                  Our Projects
                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div
              className="relative flex justify-center transition-transform duration-300 ease-out lg:justify-end"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${
                  mousePosition.y * 10
                }px)`,
              }}
            >

              <div
                className="absolute h-[430px] w-[430px] rounded-full bg-green-200/60 blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * -18}px, ${
                    mousePosition.y * -18
                  }px)`,
                }}
              />

              <div className="group relative w-full max-w-[600px] overflow-hidden rounded-[28px] border border-white bg-white p-3 shadow-2xl shadow-green-900/10 transition-all duration-500 hover:-translate-y-2">

                <div className="relative h-[360px] overflow-hidden rounded-[22px] sm:h-[450px]">

                  <Image
                    src="/images/home-banner.jpg"
                    alt="Techzoq"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />

                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-7 left-7 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Techzoq
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500">
                        Technology • Innovation • Growth
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="group rounded-2xl border border-green-100 bg-[#f4fbf7] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${
                    mousePosition.y * (index + 1) * 2
                  }px)`,
                }}
              >
                <h3 className="text-3xl font-bold text-green-600 sm:text-4xl">
                  {stat.number}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {stat.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-24">

        <div
          className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-green-50 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -12}px, ${
              mousePosition.y * -10
            }px)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* STORY CONTENT */}
            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Our Story
                </span>
              </div>

             <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
  <span className="inline-block rounded-lg bg-green-100 px-3 py-1">
    Turning Ideas Into
  </span>

  <span className="block text-green-600">
    Digital Reality.
  </span>
</h2>

              <p className="mt-6 text-base leading-7 text-gray-600">
                Techzoq was built with a simple vision — to transform
                ideas into meaningful digital products that solve real
                business problems.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                We combine technology, creativity, and business
                understanding to create digital experiences that are
                practical, scalable, and ready for the future.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Our work covers websites, mobile applications, custom
                software, AI solutions, and other digital products that
                help organizations move forward.
              </p>

            </div>

            {/* STORY CARDS */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div
                className="rounded-3xl border border-green-100 bg-[#f4fbf7] p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  transform: `translate(${mousePosition.x * 4}px, ${
                    mousePosition.y * 4
                  }px)`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                  ✦
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Ideas First
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  We understand the idea before choosing the technology.
                </p>
              </div>

              <div
                className="mt-8 rounded-3xl border border-green-100 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:mt-0"
                style={{
                  transform: `translate(${mousePosition.x * -4}px, ${
                    mousePosition.y * -4
                  }px)`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                  ↗
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Built to Grow
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  We build solutions with long-term growth and scalability
                  in mind.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          OUR TEAM
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f4fbf7] py-24">

        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-green-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Our Team
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              People Behind
              <span className="text-green-600">
                {" "}Techzoq.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              A creative and technology-focused team working together
              to turn ideas into powerful digital solutions.
            </p>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {team.map((member, index) => (
              <div
                key={member.name}
                className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${
                    mousePosition.y * (index + 1) * 2
                  }px)`,
                }}
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {member.icon}
                  </div>

                  <span className="text-4xl font-bold text-green-100">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-green-600">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Passionate professionals focused on creating useful,
                  modern, and reliable digital experiences.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-24">

        <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-green-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Our Approach
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              How We Turn Ideas Into
              <span className="text-green-600">
                {" "}Solutions.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              A simple and practical process that keeps every project
              focused, clear, and effective.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {approach.map((item, index) => (

              <div
                key={item.number}
                className="group rounded-3xl border border-green-100 bg-[#f4fbf7] p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${
                    mousePosition.y * (index + 1) * 2
                  }px)`,
                }}
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-lg text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <span className="text-4xl font-bold text-green-100">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-green-600 transition-all duration-300 group-hover:w-20" />

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR VALUES
      ========================================================= */}
      <section className="bg-[#f4fbf7] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Our Values
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Principles behind
              <span className="block text-green-600">
                everything we build.
              </span>
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {values.map((value, index) => (

              <div
                key={value.title}
                className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1)
                  }px, ${
                    mousePosition.y * (index + 1)
                  }px)`,
                }}
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {value.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#052e16] py-24">

        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-800/30 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${
              mousePosition.y * 10
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-700/20 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${
              mousePosition.y * -10
            }px)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
              What Drives Us
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Our Mission &
              <span className="text-green-400">
                {" "}Vision.
              </span>
            </h2>

          </div>


          <div className="grid gap-6 lg:grid-cols-2">

            {/* MISSION */}
            <div
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 sm:p-10"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${
                  mousePosition.y * 3
                }px)`,
              }}
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-2xl text-green-400">
                ✦
              </div>

              <span className="mt-7 block text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Our Mission
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Make technology
                <span className="text-green-400">
                  {" "}useful.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Our mission is to create technology that solves meaningful
                problems, improves the way people work, and helps businesses
                achieve their goals.
              </p>

            </div>


            {/* VISION */}
            <div
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 sm:p-10"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${
                  mousePosition.y * -3
                }px)`,
              }}
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-2xl text-green-400">
                ↗
              </div>

              <span className="mt-7 block text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Our Vision
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Build what&apos;s
                <span className="text-green-400">
                  {" "}next.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                We aim to become a trusted technology partner for businesses
                by delivering innovative, reliable, and future-ready digital
                solutions.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-24">

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/60 blur-3xl"
          style={{
            transform: `translate(
              calc(-50% + ${mousePosition.x * 20}px),
              calc(-50% + ${mousePosition.y * 20}px)
            )`,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-600">
            Let&apos;s Build Together
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Have an idea?

            <span className="block text-green-600">
              Let&apos;s make it real.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            Tell us about your idea and let&apos;s create something
            meaningful together.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            Start a Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>

        </div>

      </section>

    </main>
  );
}