"use client";

import Link from "next/link";
import { useState } from "react";

export default function VideoEditingPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const editors = [
    {
      image: "/images/vi1.jpg",
      name: "Maheen Raza",
      role: "Senior Video Editor",
      number: "01",
    },
    {
      image: "/images/vi2.jpg",
      name: "Areeba Khan",
      role: "Creative Video Specialist",
      number: "02",
    },
    {
      image: "/images/vi3.jpg",
      name: "Hira Fatima",
      role: "Motion Graphics Expert",
      number: "03",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Reels & Shorts",
      text: "Fast-paced and engaging videos created for Instagram, TikTok and social media.",
    },
    {
      number: "02",
      title: "YouTube Editing",
      text: "Professional long-form editing with clean cuts, pacing, sound and storytelling.",
    },
    {
      number: "03",
      title: "Motion Graphics",
      text: "Creative titles, animations and visual effects that make your content stand out.",
    },
    {
      number: "04",
      title: "Brand Videos",
      text: "Polished videos designed to communicate your brand message professionally.",
    },
  ];

  /* =====================================================
     VIDEO EDITING BLUEPRINT
  ===================================================== */
  const blueprint = [
    {
      number: "01",
      title: "Plan",
      icon: "⌕",
      points: [
        "Content & Story Analysis",
        "Creative Direction",
        "Editing Plan Definition",
      ],
    },
    {
      number: "02",
      title: "Edit",
      icon: "</>",
      points: [
        "Professional Video Editing",
        "Cuts, Pacing & Transitions",
        "Music & Sound Design",
      ],
    },
    {
      number: "03",
      title: "Polish",
      icon: "↗",
      points: [
        "Color Correction",
        "Motion Graphics & Effects",
        "Audio Enhancement",
      ],
    },
    {
      number: "04",
      title: "Deliver",
      icon: "◎",
      points: [
        "Quality Assurance",
        "HD & 4K Export",
        "Final Video Delivery",
      ],
    },
  ];

  const movingWordsOne = [
    "VIDEO EDITING",
    "REELS & SHORTS",
    "YOUTUBE EDITING",
    "MOTION GRAPHICS",
    "CREATIVE CONTENT",
    "CINEMATIC EDITING",
  ];

  const movingWordsTwo = [
    "COLOR GRADING",
    "SOUND DESIGN",
    "VISUAL EFFECTS",
    "BRAND VIDEOS",
    "SOCIAL MEDIA",
    "STORYTELLING",
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-[#10251b]"
      onMouseMove={handleMouseMove}
    >

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#f3faf6]">

        <div
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-300/20 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -15
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">

          {/* LEFT */}
          <div
            className="transition-transform duration-500"
            style={{
              transform: `translate(${mousePosition.x * -4}px, ${
                mousePosition.y * -4
              }px)`,
            }}
          >

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
                Video Editing Studio
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#10251b] sm:text-6xl lg:text-6xl">
              Raw Footage.
              <span className="block text-green-600">
                Refined Stories.
              </span>
              <span className="block">
                Powerful Videos.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Professional video editing that transforms your raw footage
              into engaging, cinematic and memorable visual stories.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                Start a Project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
              >
                Explore Services
              </Link>

            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-7">

              <div>
                <p className="text-2xl font-extrabold text-[#10251b]">
                  100+
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Videos Edited
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-[#10251b]">
                  4K
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Quality
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-[#10251b]">
                  24/7
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Support
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div
            className="relative transition-transform duration-700"
            style={{
              transform: `translate(${mousePosition.x * 8}px, ${
                mousePosition.y * 8
              }px)`,
            }}
          >

            <div className="absolute -inset-5 rotate-3 rounded-[40px] bg-green-100/80" />

            <div className="relative overflow-hidden rounded-[35px] border-[10px] border-white bg-white shadow-2xl">

              <div className="relative h-[500px] overflow-hidden">

                <img
                  src="/images/gallery15.jpg"
                  alt="Professional Video Editing"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  EDIT • CREATE • INSPIRE
                </div>

                <div className="absolute bottom-7 left-7 right-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                    Creative Editing
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    From Footage to Final Cut
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =====================================================
          MOVING TECHNOLOGY STYLE STRIP
          LEFT → RIGHT
      ===================================================== */}
      <section className="relative overflow-hidden border-y border-green-100 bg-white py-7">

        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-green-200 bg-green-50 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-700">
            Video Editing Expertise
          </span>
        </div>

        <div className="overflow-hidden">

          <div className="flex w-max animate-marquee-left">

            {[...movingWordsOne, ...movingWordsOne].map((word, index) => (
              <div
                key={`${word}-${index}`}
                className="flex items-center"
              >

                <span className="mx-5 flex items-center gap-3 rounded-full border border-green-200 bg-[#f5fbf7] px-6 py-3 text-sm font-bold text-[#10251b] shadow-sm sm:mx-7 sm:text-base">

                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  {word}

                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  What We Edit
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#10251b] sm:text-5xl">
                Editing that makes
                <span className="block text-green-600">
                  every frame matter.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                From short-form social content to complete brand videos,
                we create edits that keep your audience watching.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="group rounded-[26px] border border-slate-200 bg-[#f8fcf9] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:bg-white hover:shadow-xl"
                  style={{
                    transform: `translate(${mousePosition.x * (index + 1)}px, ${
                      mousePosition.y * (index + 1)
                    }px)`,
                  }}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-extrabold tracking-widest text-green-600">
                      {service.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      ↗
                    </span>

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#10251b] group-hover:text-green-700">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.text}
                  </p>

                  <div className="mt-7 h-[2px] w-8 bg-green-500 transition-all duration-500 group-hover:w-full" />

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MOVING TECHNOLOGY STYLE STRIP
          RIGHT → LEFT
      ===================================================== */}
      <section className="overflow-hidden border-y border-green-100 bg-[#f2faf5] py-7">

        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-green-200 bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-700">
            Creative Production Skills
          </span>
        </div>

        <div className="overflow-hidden">

          <div className="flex w-max animate-marquee-right">

            {[...movingWordsTwo, ...movingWordsTwo].map((word, index) => (
              <div
                key={`${word}-${index}`}
                className="flex items-center"
              >

                <span className="mx-5 flex items-center gap-3 rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-bold text-[#10251b] shadow-sm sm:mx-7 sm:text-base">

                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  {word}

                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR BLUEPRINT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f4faf7] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* TOP CONTENT */}
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT HEADING */}
            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
                  Our Process
                </span>

              </div>

              <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[#10251b] sm:text-5xl lg:text-6xl">

                Our blueprint for real

                <span className="block text-green-600">
                  impact.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                A proven process that helps you move from raw footage to
                a polished, professional and production-ready video.
              </p>

            </div>


            {/* RIGHT PROCESS DIAGRAM */}
            <div
              className="relative overflow-hidden rounded-[30px] bg-[#06351d] px-6 py-10 shadow-xl shadow-green-900/10 transition-transform duration-700 sm:px-10"
              style={{
                transform: `translate(
                  ${mousePosition.x * 3}px,
                  ${mousePosition.y * 3}px
                )`,
              }}
            >

              <div className="flex items-center justify-center">

                <div className="flex items-center">

                  <div className="flex h-20 w-20 rotate-45 items-center justify-center rounded-[15px] bg-white shadow-lg sm:h-24 sm:w-24">
                    <span className="-rotate-45 text-2xl font-medium text-green-600">
                      →
                    </span>
                  </div>

                  <div className="-ml-1 flex h-20 w-20 rotate-45 items-center justify-center rounded-[15px] bg-white shadow-lg sm:h-24 sm:w-24">
                    <span className="-rotate-45 text-2xl font-medium text-green-600">
                      →
                    </span>
                  </div>

                  <div className="-ml-1 flex h-20 w-20 rotate-45 items-center justify-center rounded-[15px] bg-white shadow-lg sm:h-24 sm:w-24">
                    <span className="-rotate-45 text-2xl font-medium text-green-600">
                      →
                    </span>
                  </div>

                  <div className="-ml-1 flex h-20 w-20 rotate-45 items-center justify-center rounded-[15px] bg-white shadow-lg sm:h-24 sm:w-24">
                    <span className="-rotate-45 text-2xl font-bold text-green-600">
                      ◎
                    </span>
                  </div>

                </div>

              </div>

              <p className="mt-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-white">
                PLAN • EDIT • POLISH • DELIVER
              </p>

            </div>

          </div>


          {/* BLUEPRINT CARDS */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {blueprint.map((item, index) => (

              <div
                key={item.number}
                className={`group relative min-h-[310px] overflow-hidden rounded-[26px] border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  index === 1
                    ? "border-green-200"
                    : "border-slate-200"
                }`}
                style={{
                  transform: `translateY(${
                    mousePosition.y * (index + 1)
                  }px)`,
                }}
              >

                {/* LARGE NUMBER */}
                <span className="pointer-events-none absolute -right-1 -top-8 text-[86px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-green-50">
                  {item.number}
                </span>


                {/* ICON */}
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold transition-all duration-500 ${
                    index === 1
                      ? "bg-green-600 text-white group-hover:bg-green-700"
                      : "bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white"
                  }`}
                >
                  {item.icon}
                </div>


                {/* TITLE */}
                <h3 className="relative mt-7 text-xl font-bold text-[#10251b] transition-colors duration-300 group-hover:text-green-700">
                  {item.title}
                </h3>


                {/* POINTS */}
                <ul className="relative mt-5 space-y-4">

                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-500"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />

                      <span>{point}</span>
                    </li>
                  ))}

                </ul>


                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CREATIVE TEAM — CIRCLES
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Meet The Editors
              </span>

              <span className="h-[2px] w-10 bg-green-600" />

            </div>

            <h2 className="text-4xl font-extrabold text-[#10251b] sm:text-5xl">
              Creative minds behind
              <span className="text-green-600">
                {" "}every frame.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Experienced editors who turn raw footage into engaging
              visual stories.
            </p>

          </div>


          <div className="mt-20 grid gap-16 md:grid-cols-3">

            {editors.map((editor, index) => (

              <div
                key={editor.name}
                className={`group text-center ${
                  index === 1 ? "md:-translate-y-10" : "md:translate-y-8"
                }`}
              >

                <div
                  className="relative mx-auto h-64 w-64 cursor-pointer transition-transform duration-700 group-hover:scale-105"
                  style={{
                    transform: `translate(${mousePosition.x * (index + 1) * 2}px, ${
                      mousePosition.y * (index + 1) * 2
                    }px)`,
                  }}
                >

                  <div className="absolute -inset-3 rounded-full border border-green-200 transition-all duration-700 group-hover:rotate-12 group-hover:border-green-500" />

                  <div className="absolute -inset-6 rounded-full border border-dashed border-green-200 transition-all duration-1000 group-hover:-rotate-12 group-hover:border-green-400" />

                  <div className="absolute inset-3 overflow-hidden rounded-full border-8 border-white bg-green-50 shadow-2xl">

                    <img
                      src={editor.image}
                      alt={editor.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#06351d]/75 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">

                      <div>

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                          {editor.number}
                        </p>

                        <p className="mt-2 px-4 text-lg font-bold text-white">
                          {editor.role}
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="absolute right-0 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                    {editor.number}
                  </div>

                </div>


                <div className="mt-10">

                  <h3 className="text-xl font-extrabold text-[#10251b] transition-colors duration-300 group-hover:text-green-700">
                    {editor.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-green-600">
                    {editor.role}
                  </p>

                  <div className="mx-auto mt-4 h-[2px] w-8 bg-green-500 transition-all duration-500 group-hover:w-20" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY VIDEO EDITING
      ===================================================== */}
      <section className="bg-[#f3faf6] py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="overflow-hidden rounded-[36px] bg-[#06351d] px-7 py-14 text-white shadow-2xl sm:px-12 lg:px-16">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                  Why Professional Editing?
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
                  Your footage deserves
                  <span className="text-green-400">
                    {" "}a better story.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Great footage is only the beginning. The right editing,
                  pacing, music, color and motion can transform it into
                  content that people actually remember.
                </p>

              </div>


              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                  <p className="text-2xl font-extrabold text-green-400">
                    4K
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Export
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                  <p className="text-2xl font-extrabold text-green-400">
                    HD
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Delivery
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                  <p className="text-2xl font-extrabold text-green-400">
                    ✦
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Creative
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                  <p className="text-2xl font-extrabold text-green-400">
                    ∞
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Ideas
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Frequently Asked
              </span>

              <span className="h-[2px] w-10 bg-green-600" />

            </div>

            <h2 className="text-4xl font-extrabold text-[#10251b] sm:text-5xl">
              Questions before
              <span className="text-green-600">
                {" "}we begin?
              </span>
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            <Faq
              question="What type of videos do you edit?"
              answer="We edit Instagram Reels, TikTok videos, YouTube videos, advertisements, promotional content, brand videos and other creative projects."
            />

            <Faq
              question="Can I provide my own footage?"
              answer="Absolutely. You can send your raw footage, images, audio and other assets and our team will turn them into a polished final video."
            />

            <Faq
              question="Do you provide motion graphics?"
              answer="Yes. We can add animated titles, motion graphics, visual effects, transitions and branded elements according to your project."
            />

            <Faq
              question="Can you edit short-form social media videos?"
              answer="Yes. We create vertical short-form videos optimized for Instagram Reels, TikTok, YouTube Shorts and other modern platforms."
            />

            <Faq
              question="What quality do you deliver?"
              answer="We can deliver professional HD and 4K videos depending on the requirements and quality of the original footage."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEO EDITING PROJECT FORM
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f3faf6] py-24">

        <div
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"
          style={{
            transform: `translate(
              ${mousePosition.x * 20}px,
              ${mousePosition.y * 15}px
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"
          style={{
            transform: `translate(
              ${mousePosition.x * -20}px,
              ${mousePosition.y * -15}px
            )`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Start Your Project
              </span>

              <span className="h-[2px] w-10 bg-green-600" />

            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#10251b] sm:text-5xl">
              Tell us about your
              <span className="block text-green-600">
                video project.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Share your project details with us and our creative team
              will help turn your footage into a professional video.
            </p>

          </div>


          <div
            className="mx-auto mt-14 max-w-5xl rounded-[35px] border border-green-100 bg-white p-6 shadow-xl shadow-green-900/5 transition-transform duration-500 sm:p-10 lg:p-12"
            style={{
              transform: `translate(
                ${mousePosition.x * 2}px,
                ${mousePosition.y * 2}px
              )`,
            }}
          >

            <form className="space-y-7">

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10251b]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-[#10251b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10251b]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-[#10251b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

              </div>


              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10251b]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92 300 1234567"
                    className="w-full rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-[#10251b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10251b]">
                    Editing Service
                  </label>

                  <select
                    name="service"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Select a service</option>
                    <option value="reels-shorts">Reels & Shorts</option>
                    <option value="youtube">YouTube Editing</option>
                    <option value="motion-graphics">Motion Graphics</option>
                    <option value="brand-videos">Brand Videos</option>
                    <option value="social-media">Social Media Videos</option>
                    <option value="other">Other</option>
                  </select>
                </div>

              </div>


              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10251b]">
                    Video Type
                  </label>

                  <select
                    name="videoType"
                    className="w-full rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Select video type</option>
                    <option value="short-form">Short Form</option>
                    <option value="long-form">Long Form</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="promotional">Promotional Video</option>
                    <option value="youtube">YouTube Video</option>
                    <option value="social-media">Social Media Content</option>
                  </select>
                </div>


                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10251b]">
                    Estimated Budget
                  </label>

                  <select
                    name="budget"
                    className="w-full rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Select budget</option>
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="custom">Custom Budget</option>
                  </select>
                </div>

              </div>


              <div>

                <label className="mb-2 block text-sm font-bold text-[#10251b]">
                  Project Details
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your video, footage, style, duration and requirements..."
                  required
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f9fcfa] px-5 py-4 text-sm text-[#10251b] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                />

              </div>


              <div className="rounded-2xl border border-dashed border-green-200 bg-green-50/50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-700">
                    ↑
                  </div>

                  <div>

                    <p className="text-sm font-bold text-[#10251b]">
                      Have your footage ready?
                    </p>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      You can share your raw footage, references or
                      project files with our team after submitting the form.
                    </p>

                  </div>

                </div>

              </div>


              <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-100 pt-7 sm:flex-row">

                <p className="max-w-md text-xs leading-5 text-slate-400">
                  By submitting this form, you agree to let our team
                  contact you regarding your video editing project.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                >
                  Send Project Details

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA — LIGHT VERSION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#eaf8ef] py-24">

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] rounded-full bg-green-300/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(
              calc(-50% + ${mousePosition.x * 35}px),
              calc(-50% + ${mousePosition.y * 25}px)
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full border border-green-200/60 transition-transform duration-700"
          style={{
            transform: `translate(
              ${mousePosition.x * 15}px,
              ${mousePosition.y * 15}px
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-green-200/60 transition-transform duration-700"
          style={{
            transform: `translate(
              ${mousePosition.x * -18}px,
              ${mousePosition.y * -18}px
            )`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6">

          <div
            className="group relative overflow-hidden rounded-[38px] border border-green-200/80 bg-white px-7 py-16 text-center shadow-xl shadow-green-900/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10 sm:px-12 lg:px-20"
            style={{
              transform: `translate(
                ${mousePosition.x * 3}px,
                ${mousePosition.y * 3}px
              )`,
            }}
          >

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-100 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-green-500" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
                Let&apos;s Edit
              </p>

              <span className="h-[2px] w-10 bg-green-500" />

            </div>

            <h2 className="relative mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#10251b] sm:text-5xl lg:text-6xl">

              Have footage?

              <span className="block text-green-600">
                Let&apos;s make it unforgettable.
              </span>

            </h2>

            <p className="relative mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Send us your footage, idea or concept and let our creative
              team turn it into a video worth watching.
            </p>

            <div className="relative mt-9 flex justify-center">

              <Link
                href="/contact"
                className="group/button inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/20"
              >
                Start Your Project

                <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                  ↗
                </span>
              </Link>

            </div>

            <div className="relative mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-green-100 pt-6">

              <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Professional Editing
              </span>

              <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                HD & 4K Quality
              </span>

              <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Creative Support
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MARQUEE ANIMATIONS
      ===================================================== */}
      <style jsx global>{`

        @keyframes marqueeLeft {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          animation: marqueeLeft 30s linear infinite;
          will-change: transform;
        }

        .animate-marquee-right {
          animation: marqueeRight 30s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-play-state: paused;
          }
        }

      `}</style>

    </main>
  );
}


/* =====================================================
   FAQ COMPONENT
===================================================== */

function Faq({ question, answer }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-[#f9fcfa] p-5 transition-all duration-300 hover:border-green-300 hover:shadow-sm">

      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-[#10251b]">

        {question}

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
        {answer}
      </p>

    </details>
  );
}