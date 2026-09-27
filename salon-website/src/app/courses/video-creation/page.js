"use client";

import Link from "next/link";
import { useState } from "react";

export default function VideoCreationPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Video Creation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Video Creation",
        message: "",
      });
    }, 3000);
  };

  const scrollToForm = () => {
    document.getElementById("video-enrollment")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const processSteps = [
    {
      number: "01",
      title: "Concept",
      icon: "✦",
      items: [
        "Creative Concept",
        "Story & Script Planning",
        "Visual Direction",
        "Production Roadmap",
      ],
    },
    {
      number: "02",
      title: "Produce",
      icon: "▶",
      items: [
        "Camera Setup",
        "Professional Shooting",
        "Lighting & Composition",
        "Audio Recording",
      ],
    },
    {
      number: "03",
      title: "Edit",
      icon: "✂",
      items: [
        "Video Editing",
        "Transitions & Effects",
        "Color & Audio Polish",
        "Final Review",
      ],
    },
    {
      number: "04",
      title: "Publish",
      icon: "↗",
      items: [
        "Quality Export",
        "Platform Optimization",
        "Content Delivery",
        "Portfolio & Publishing",
      ],
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-[#10251b]"
      onMouseMove={handleMouseMove}
    >
      <style jsx>{`
        @keyframes techScrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes techScrollRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .tech-scroll-left {
          animation: techScrollLeft 32s linear infinite;
        }

        .tech-scroll-right {
          animation: techScrollRight 36s linear infinite;
        }

        .tech-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeRightToLeft {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-right-to-left {
          animation: marqueeRightToLeft 28s linear infinite;
        }

        .animate-marquee-left-to-right {
          animation: marqueeLeftToRight 25s linear infinite;
        }

        .animate-marquee-right-to-left:hover,
        .animate-marquee-left-to-right:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .tech-scroll-left {
            animation-duration: 25s;
          }

          .tech-scroll-right {
            animation-duration: 28s;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4fbf7]">
        <div
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -18
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Video Creation
                </span>
              </div>

              <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-tight text-[#10251b] sm:text-6xl lg:text-[72px]">
                Create.
                <span className="block text-green-600">Capture.</span>
                <span className="block">Inspire.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Turn your ideas into powerful visual stories with
                professional video creation, creative direction and engaging
                content designed for modern audiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Create With Us

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-2xl font-extrabold text-[#10251b]">
                    50+
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Projects
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-[#10251b]">
                    4K
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Quality
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-[#10251b]">
                    24/7
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Support
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative transition-transform duration-700"
              style={{
                transform: `translate(${mousePosition.x * 8}px, ${
                  mousePosition.y * 8
                }px)`,
              }}
            >
              <div
                className="absolute -inset-5 rounded-[40px] bg-green-100/70 transition-transform duration-700"
                style={{
                  transform: `rotate(${mousePosition.x * 1.5}deg)`,
                }}
              />

              <div className="relative">
                <div className="overflow-hidden rounded-[34px] border-[10px] border-white bg-white shadow-2xl shadow-green-900/10">
                  <div className="relative h-[450px] overflow-hidden sm:h-[570px]">
                    <img
                      src="/images/gallery8.jpg"
                      alt="Video Creation"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

                    <button
                      onClick={scrollToForm}
                      className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-2xl text-green-700 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                    >
                      ▶
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">
                          Creative Production
                        </p>

                        <p className="mt-1 text-xl font-bold text-white">
                          Ideas into Motion
                        </p>
                      </div>

                      <div className="hidden rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:block">
                        01 / CREATE
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-7 -left-5 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl sm:-left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-lg">
                      🎥
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#10251b]">
                        Visual Storytelling
                      </p>

                      <p className="text-xs text-slate-500">
                        Creative • Modern • Engaging
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOVING WORDS
      ===================================================== */}

      <section className="overflow-hidden border-y border-green-100 bg-white py-5">
        <div className="flex w-max animate-marquee-right-to-left whitespace-nowrap">
          {[
            "VIDEO CREATION",
            "CREATIVE DIRECTION",
            "CINEMATIC STORIES",
            "VISUAL PRODUCTION",
            "CONTENT CREATION",
            "VIDEO PRODUCTION",
            "DIGITAL STORIES",
            "VIDEO CREATION",
          ].map((text, index) => (
            <div
              key={index}
              className="mx-6 flex items-center gap-6"
            >
              <span className="text-xl font-extrabold uppercase tracking-tight text-[#10251b] sm:text-3xl">
                {text}
              </span>

              <span className="text-xl text-green-500 sm:text-3xl">
                ✦
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#06351d] py-5">
        <div className="flex w-max animate-marquee-left-to-right whitespace-nowrap">
          {[
            "CREATE",
            "CAPTURE",
            "DIRECT",
            "PRODUCE",
            "STORYTELLING",
            "MOTION",
            "INSPIRE",
            "CREATE",
            "CAPTURE",
            "DIRECT",
          ].map((text, index) => (
            <div
              key={index}
              className="mx-7 flex items-center gap-7"
            >
              <span className="text-xl font-extrabold uppercase tracking-[0.08em] text-white sm:text-3xl">
                {text}
              </span>

              <span className="text-xl text-green-400 sm:text-3xl">
                •
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CREATIVE TEAM
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  Learn From Experts
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#10251b] sm:text-5xl">
                Meet the
                <span className="block text-green-600">
                  Creative Team
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500 md:ml-auto">
              Learn practical video creation techniques from experienced
              creative professionals who understand storytelling, production
              and modern digital content.
            </p>
          </div>

          <div className="mt-20 grid gap-20 md:grid-cols-3">
            <CircleTeacher
              image="/images/cr1.jpg"
              name="Ahsan Malik"
              role="Video Production Mentor"
              number="01"
            />

            <CircleTeacher
              image="/images/cr2.jpg"
              name="Maya Khan"
              role="Cinematic Video Specialist"
              number="02"
            />

            <CircleTeacher
              image="/images/cr3.jpg"
              name="Hamza Tariq"
              role="Creative Video Instructor"
              number="03"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT YOU LEARN
      ===================================================== */}

      <section className="bg-[#f4faf6] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                What You Learn
              </span>
            </div>

            <h2 className="text-4xl font-extrabold text-[#10251b] sm:text-5xl">
              Build skills that
              <span className="text-green-600">
                {" "}actually matter.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <LearningCard
              number="01"
              title="Storyboarding"
              text="Plan scenes, messages and visual direction before production."
            />

            <LearningCard
              number="02"
              title="Camera Skills"
              text="Learn framing, composition, lighting and professional shooting basics."
            />

            <LearningCard
              number="03"
              title="Video Editing"
              text="Create smooth cuts, transitions, effects and engaging sequences."
            />

            <LearningCard
              number="04"
              title="Social Content"
              text="Create videos optimized for YouTube, Instagram and modern platforms."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE INFO
      ===================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[#f8fcf9] shadow-sm">
            <div className="grid md:grid-cols-3">
              <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                  Course Duration
                </p>

                <p className="mt-3 text-3xl font-extrabold text-[#10251b]">
                  8 Weeks
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Practical learning with guided projects.
                </p>
              </div>

              <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                  Learning Mode
                </p>

                <p className="mt-3 text-3xl font-extrabold text-[#10251b]">
                  Practical
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Learn by creating real video projects.
                </p>
              </div>

              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                  Career Path
                </p>

                <p className="mt-3 text-3xl font-extrabold text-[#10251b]">
                  Freelancing
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Build skills to start offering creative services online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PROCESS / BLUEPRINT
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[34px] border border-gray-100 bg-[#f8fbf9] p-6 shadow-sm sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT */}

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Our Process
                </span>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Our blueprint for
                  <span className="block text-green-600">
                    creative impact.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                  A proven creative process that helps you move from an
                  initial idea to a complete, polished and professional
                  video project.
                </p>
              </div>

              {/* RIGHT BLUEPRINT GRAPHIC */}

              <div className="relative overflow-hidden rounded-[28px] bg-[#075c32] p-6 shadow-xl shadow-green-900/10 sm:p-8">
                <div className="flex items-center justify-center gap-2 sm:gap-5">
                  {["✦", "▶", "✂", "◎"].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="relative flex h-16 w-16 shrink-0 rotate-45 items-center justify-center rounded-xl bg-white shadow-lg sm:h-20 sm:w-20"
                    >
                      <span className="-rotate-45 text-2xl font-bold text-green-700 sm:text-3xl">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-100">
                    Concept • Produce • Edit • Publish
                  </span>
                </div>
              </div>
            </div>

            {/* PROCESS CARDS */}

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                  style={{
                    transform: `translate(
                      ${mousePosition.x * (index + 1)}px,
                      ${mousePosition.y * (index + 1)}px
                    )`,
                  }}
                >
                  <span className="absolute -right-2 -top-5 text-8xl font-black text-gray-100 transition-all duration-500 group-hover:text-green-50">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      {step.icon}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-gray-500"
                        >
                          <span className="mt-1 text-green-600">•</span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CREATIVE CAREER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#06351d] py-24">
        <div
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-green-400/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -15
            }px)`,
          }}
        />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-300">
                Creative Career
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Turn your creativity
                <span className="block text-green-400">
                  into opportunity.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Build a strong creative portfolio, understand client
                requirements and develop the skills needed to work on
                professional video projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                  Portfolio Building
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                  Client Handling
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                  Online Work
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <CareerCard number="01" title="Build Portfolio" />
              <CareerCard number="02" title="Find Clients" />
              <CareerCard number="03" title="Deliver Work" />
              <CareerCard number="04" title="Grow Career" />
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
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                FAQ
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#10251b] sm:text-5xl">
              Questions?
              <span className="text-green-600">
                {" "}We have answers.
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            <Faq
              question="Who can learn Video Creation?"
              answer="Anyone interested in creating professional videos can learn it, whether they are beginners, students, business owners or aspiring freelancers."
            />

            <Faq
              question="Do I need professional equipment?"
              answer="No. You can begin with basic equipment and gradually improve your setup as your skills and projects grow."
            />

            <Faq
              question="Will I learn video editing too?"
              answer="Yes. The course covers the essential editing workflow including cuts, transitions, visual effects, audio and final delivery."
            />

            <Faq
              question="Can I start freelancing after learning?"
              answer="Yes. You can build a portfolio from your practical projects and use your skills to offer video creation services to clients."
            />

            <Faq
              question="Will I learn cinematic storytelling?"
              answer="Yes. You will learn how to plan shots, build visual sequences and use storytelling techniques to make videos more engaging."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ENROLLMENT FORM
      ===================================================== */}

      <section
        id="video-enrollment"
        className="relative overflow-hidden bg-[#f4fbf7] py-24"
      >
        <div
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-200/50 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-100/70 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}

            <div
              className="transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -4}px, ${
                  mousePosition.y * -4
                }px)`,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  How We Can Help
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Let&apos;s create your
                <span className="block text-green-600">
                  next visual story.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-500">
                Have questions about our Video Creation program? Want to
                enroll, discuss the course or learn more about our training?
                Send us your details and our team will get back to you.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: "✓",
                    title: "Course Enrollment",
                    text: "Get complete information about the Video Creation course.",
                  },
                  {
                    icon: "🎥",
                    title: "Video Creation",
                    text: "Discuss video production, editing and creative projects.",
                  },
                  {
                    icon: "↗",
                    title: "Career & Freelancing",
                    text: "Learn about portfolio building and creative career opportunities.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}

            <div
              className="relative rounded-[32px] border border-white bg-white p-6 shadow-2xl shadow-green-900/10 transition-transform duration-500 sm:p-8 lg:p-10"
              style={{
                transform: `translate(${mousePosition.x * 4}px, ${
                  mousePosition.y * 4
                }px)`,
              }}
            >
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                  Get In Touch
                </span>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                  How can we help you?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form and our team will contact you soon.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#10251b]">
                    Form Submitted!
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Thank you for your interest. Our team will contact you
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* NAME + EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>
                  </div>

                  {/* PHONE + SERVICE */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+92 300 0000000"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        I&apos;m Interested In
                      </label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      >
                        <option>Video Creation</option>
                        <option>Video Production</option>
                        <option>Video Editing</option>
                        <option>Cinematic Video</option>
                        <option>Social Media Content</option>
                        <option>Freelancing Training</option>
                        <option>Creative Career</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us how we can help you..."
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                  >
                    Send Request

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f1faf4] py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/50 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(
              calc(-50% + ${mousePosition.x * 80}px),
              calc(-50% + ${mousePosition.y * 60}px)
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 15
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-green-100/70 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -15
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Start Creating
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#10251b] sm:text-5xl">
            Your next story
            <span className="text-green-600"> starts here.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Learn, create and turn your ideas into professional visual
            content that people remember.
          </p>

          <button
            onClick={scrollToForm}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            Get Started

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   CIRCLE TEACHER
===================================================== */

function CircleTeacher({
  image,
  name,
  role,
  number,
}) {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="absolute right-[18%] top-0 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
        {number}
      </div>

      <div className="relative h-64 w-64 transition-transform duration-700 sm:h-72 sm:w-72">
        <div className="absolute -inset-3 rounded-full border border-green-200 transition-all duration-700 group-hover:scale-110 group-hover:border-green-500" />

        <div className="absolute -inset-6 rounded-full border border-dashed border-green-200 transition-all duration-1000 group-hover:rotate-180 group-hover:border-green-500" />

        <div className="absolute -inset-9 rounded-full border border-green-100 opacity-0 transition-all duration-700 group-hover:scale-95 group-hover:opacity-100" />

        <div className="absolute inset-0 overflow-hidden rounded-full border-[8px] border-white bg-green-50 shadow-xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-[#06351d]/95 via-[#06351d]/30 to-transparent px-5 pb-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-green-300">
              {role}
            </p>

            <h3 className="mt-1 text-center text-xl font-bold text-white">
              {name}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center transition-all duration-500 group-hover:-translate-y-2">
        <h3 className="text-xl font-extrabold text-[#10251b] transition-colors duration-300 group-hover:text-green-600">
          {name}
        </h3>

        <p className="mt-2 text-sm font-medium text-green-600">
          {role}
        </p>

        <div className="mx-auto mt-4 h-[2px] w-8 bg-green-500 transition-all duration-500 group-hover:w-20" />
      </div>
    </div>
  );
}

/* =====================================================
   CAREER CARD
===================================================== */

function CareerCard({
  number,
  title,
}) {
  return (
    <div className="group min-h-[150px] rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.16] hover:shadow-xl">
      <div className="flex h-full flex-col justify-between">
        <span className="text-3xl font-extrabold text-green-300">
          {number}
        </span>

        <div className="mt-8">
          <h3 className="text-sm font-bold text-white sm:text-base">
            {title}
          </h3>

          <div className="mt-3 h-[2px] w-7 bg-green-400 transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   LEARNING CARD
===================================================== */

function LearningCard({
  number,
  title,
  text,
}) {
  return (
    <div className="group rounded-[22px] border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-sm font-extrabold text-green-600">
          {number}
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
          ↗
        </span>
      </div>

      <h3 className="mt-8 text-lg font-bold text-[#10251b] group-hover:text-green-700">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

      <div className="mt-6 h-[2px] w-7 bg-green-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

/* =====================================================
   FAQ
===================================================== */

function Faq({
  question,
  answer,
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-[#f9fcfa] p-5 transition-all duration-300 hover:border-green-300 hover:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-[#10251b]">
        {question}

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
        {answer}
      </p>
    </details>
  );
}