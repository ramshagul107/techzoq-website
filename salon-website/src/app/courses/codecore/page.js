"use client";

import Link from "next/link";
import { useState } from "react";

export default function SoftwareSolutionsPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const teachers = [
    {
      name: "Sir Hamza",
      role: "Software Solutions Instructor",
      image: "/images/sf1.jpg",
    },
    {
      name: "Sir Daniyal",
      role: "Software Development Expert",
      image: "/images/sf2.jpg",
    },
    {
      name: "Sir Shahzaib",
      role: "Technology Expert",
      image: "/images/sf3.jpg",
    },
  ];

  const courseFeatures = [
    {
      icon: "◈",
      title: "Custom Software",
      text: "Learn how modern software solutions are planned and developed for real business needs.",
    },
    {
      icon: "</>",
      title: "Web Applications",
      text: "Understand modern web applications, dashboards and business platforms.",
    },
    {
      icon: "⚙",
      title: "Business Automation",
      text: "Learn how software can simplify repetitive tasks and improve workflows.",
    },
    {
      icon: "↗",
      title: "Scalable Systems",
      text: "Build an understanding of software that can grow with business requirements.",
    },
  ];

  /*
   * ============================================================
   * OUR BLUEPRINT / PROCESS
   * ============================================================
   */
  const blueprintSteps = [
    {
      number: "01",
      icon: "⌕",
      title: "Strategize",
      text: "We understand your business goals, users and technical requirements before turning an idea into a software solution.",
      points: [
        "Strategic Analysis",
        "Requirement Planning",
        "User & Business Research",
      ],
    },
    {
      number: "02",
      icon: "</>",
      title: "Develop",
      text: "We transform the planned solution into reliable software using modern development practices and technologies.",
      points: [
        "System Architecture",
        "Software Development",
        "API & Database Integration",
      ],
    },
    {
      number: "03",
      icon: "↗",
      title: "Deploy",
      text: "We test, optimize and launch the software to make sure it is secure, reliable and ready for real users.",
      points: [
        "Quality Assurance",
        "Security & Performance",
        "Production Deployment",
      ],
    },
    {
      number: "04",
      icon: "◎",
      title: "Support",
      text: "We continuously improve the software with monitoring, updates and support as business requirements evolve.",
      points: [
        "Proactive Monitoring",
        "Maintenance & Updates",
        "Continuous Improvement",
      ],
    },
  ];

  /*
   * ============================================================
   * LEARN / PRACTICE
   * SOFTWARE SOLUTIONS SPECIFIC CONTENT
   * ============================================================
   */

  const learnSkills = [
    "Software Architecture",
    "Requirements Analysis",
    "Web Application Development",
    "Database Management",
    "API Integration",
    "UI & UX Development",
    "Business Automation",
    "Cloud Solutions",
  ];

  const practiceSkills = [
    "Custom Software",
    "Full Stack Development",
    "Database Projects",
    "REST API Development",
    "Admin Dashboards",
    "System Integration",
    "Testing & Debugging",
    "Deployment",
  ];

  const careers = [
    "Software Developer",
    "Web Application Developer",
    "Full Stack Developer",
    "Software Consultant",
    "Business Automation Specialist",
    "Freelance Developer",
  ];

  const faqs = [
    {
      question: "How long is the Software Solutions course?",
      answer:
        "The complete training program is designed for 6 months and covers software development concepts, practical projects and professional skills.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The course starts with basic concepts and gradually moves toward practical software development and real-world project work.",
    },
    {
      question: "Is practical training included?",
      answer:
        "Yes. Students work on practical exercises and projects so they can understand how software solutions are created and delivered.",
    },
    {
      question: "Is freelancing guidance included?",
      answer:
        "Yes. Students receive guidance about freelancing, portfolio development, client communication and presenting their software development skills professionally.",
    },
    {
      question: "Is internship available?",
      answer:
        "Yes. After completing the training, students can get a 3-month internship opportunity to gain practical experience in a professional environment.",
    },
    {
      question: "What can I do after completing the course?",
      answer:
        "Students can explore software development, web application development, freelancing, automation and other technology-related career paths.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
           {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f5fcf8]">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 18
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -15
            }px)`,
          }}
        />

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8 lg:pt-24 lg:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div
              className="relative z-10 transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${
                  mousePosition.y * -3
                }px)`,
              }}
            >
              {/* Label */}
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-700">
                  Software Solutions
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-[48px] font-black leading-[0.96] tracking-[-0.035em] text-[#071426] sm:text-[56px] lg:text-[60px]">
                Build
                <span className="block text-green-600">
                  Smarter Software
                </span>
                For
                <span className="block">
                  Real Businesses.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-600 sm:text-base">
                Learn how modern software solutions are designed, developed
                and delivered to solve real business problems and create
                long-term digital value.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Join The Course

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
                >
                  All Services
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-9 grid max-w-md grid-cols-3 border-t border-slate-200 pt-5">
                <div>
                  <p className="text-2xl font-black text-[#071426]">6</p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                    Months Course
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-[#071426]">3</p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                    Months Internship
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-[#071426]">
                    100%
                  </p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                    Practical
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                HERO IMAGE
            ================================================= */}
            <div
              className="relative flex items-center justify-center transition-transform duration-700"
              style={{
                transform: `translate(${mousePosition.x * 6}px, ${
                  mousePosition.y * 6
                }px)`,
              }}
            >
              {/* Decorative Circle */}
              <div className="absolute -right-3 -top-5 h-24 w-24 rounded-full border-[14px] border-green-100 sm:-right-5 sm:-top-6 sm:h-28 sm:w-28" />

              {/* Image Card */}
              <div
                className="group relative w-full max-w-[560px] overflow-hidden rounded-[34px] bg-white p-2.5 shadow-2xl shadow-green-900/10 transition-transform duration-700"
                style={{
                  transform: `rotateY(${mousePosition.x * 1.5}deg) rotateX(${
                    mousePosition.y * -1.5
                  }deg)`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[27px]">
                  <img
                    src="/images/gallery18.jpg"
                    alt="Software Solutions"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/95 p-3.5 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-base font-bold text-green-700 sm:h-11 sm:w-11">
                        {"</>"}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#071426]">
                          Software Development
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-500">
                          Modern • Scalable • Reliable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Circle */}
              <div className="absolute -bottom-5 -left-4 -z-0 h-20 w-20 rounded-full bg-green-100 sm:-bottom-6 sm:-left-5 sm:h-24 sm:w-24" />
            </div>

          </div>
        </div>
      </section>

       
           

             

                 

      {/* =====================================================
          COURSE OVERVIEW
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Course Overview
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#071426] sm:text-5xl">
                Learn to create
                <span className="block text-green-600">
                  useful digital solutions.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
                This structured 6-month program helps students understand
                software development from fundamentals to practical project
                implementation.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                The focus is on practical learning, problem solving,
                professional development and building skills that can be used
                for jobs and freelancing.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: "⏱",
                  title: "6 Months",
                  text: "Complete software solutions training program.",
                },
                {
                  icon: "💻",
                  title: "Practical",
                  text: "Hands-on projects and real development exercises.",
                },
                {
                  icon: "💼",
                  title: "Freelancing",
                  text: "Portfolio, clients and professional freelancing guidance.",
                },
                {
                  icon: "🚀",
                  title: "3 Months",
                  text: "Internship opportunity after successful training.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-green-100 bg-[#f4fbf7] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#effaf4] hover:shadow-xl"
                  style={{
                    transform: `translate(${
                      mousePosition.x * (index + 1)
                    }px, ${mousePosition.y * (index + 1)}px)`,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#071426]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR BLUEPRINT FOR REAL IMPACT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f5faf7] py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-green-700">
                Our Process
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-[#071426] sm:text-5xl lg:text-[50px]">
                Our blueprint for real
                <span className="block text-green-600">impact.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                A proven software development process that helps turn ideas
                into reliable, scalable and production-ready software
                solutions.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-[30px] bg-[#056333] px-6 py-10 shadow-xl shadow-green-900/10 sm:px-10 sm:py-12"
              style={{
                transform: `translate(
                  ${mousePosition.x * 3}px,
                  ${mousePosition.y * 3}px
                )`,
              }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-400/10 blur-3xl" />

              <div className="relative flex items-center justify-center">
                <div className="flex items-center">
                  {[
                    {
                      icon: "→",
                      active: false,
                    },
                    {
                      icon: "→",
                      active: false,
                    },
                    {
                      icon: "→",
                      active: false,
                    },
                    {
                      icon: "◎",
                      active: true,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`flex h-[76px] w-[76px] rotate-45 items-center justify-center rounded-[19px] bg-white shadow-sm transition-all duration-500 hover:scale-105 sm:h-[88px] sm:w-[88px] ${
                          index === 0 ? "-ml-1" : "-ml-1 sm:-ml-2"
                        }`}
                      >
                        <span className="-rotate-45 text-2xl font-light text-green-600">
                          {item.icon}
                        </span>
                      </div>

                      {index < 3 && <div className="w-5 sm:w-7" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-9 text-center">
                <p className="text-[10px] font-bold tracking-[0.28em] text-white sm:text-xs">
                  IDEA • BUILD • LAUNCH • GROW
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {blueprintSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/10"
                style={{
                  transform: `translateY(${
                    mousePosition.y * (index + 1) * 0.7
                  }px)`,
                }}
              >
                <span className="pointer-events-none absolute -right-1 -top-7 text-[90px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-green-50">
                  {step.number}
                </span>

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d9f9e7] text-lg font-bold text-green-700 transition-all duration-500 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-600/20">
                  {step.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="mt-7 text-xl font-black text-[#071426] transition-colors duration-300 group-hover:text-green-700">
                    {step.title}
                  </h3>

                  <p className="mt-4 min-h-[92px] text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>

                  <div className="mt-5 space-y-3">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-7 h-1 w-8 rounded-full bg-green-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
            {blueprintSteps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-2 rounded-full border border-green-100 bg-white px-3 py-2"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-[9px] font-bold text-white">
                  {step.number}
                </span>

                <span className="text-[10px] font-semibold text-slate-600">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARN & PRACTICE
          HORIZONTAL MOVING SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#003d24] py-24 sm:py-28">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Heading */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300">
            Software Solutions Skills
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn the skills.
            <span className="block text-green-400">
              Practice the knowledge.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-emerald-100/70 sm:text-base">
            Explore the core concepts, technologies and practical skills used
            to design, develop and deliver modern software solutions.
          </p>
        </div>

        {/* =================================================
            TOP ROW
            RIGHT TO LEFT
        ================================================= */}
        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#003d24] to-transparent sm:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#003d24] to-transparent sm:w-40" />

          <div className="software-marquee software-marquee-right flex w-max gap-5">
            {[...learnSkills, ...learnSkills].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex h-[58px] w-[205px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-emerald-400/20 bg-white/[0.06] px-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 sm:w-[225px]"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

                <span className="text-center text-sm font-bold text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LEARN BUTTON */}
        <div className="relative z-20 my-7 flex justify-center">
          <div className="rounded-full border border-emerald-400/50 bg-[#003d24] px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 shadow-lg shadow-black/10">
            Learn
          </div>
        </div>

        {/* =================================================
            BOTTOM ROW
            LEFT TO RIGHT
        ================================================= */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#003d24] to-transparent sm:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#003d24] to-transparent sm:w-40" />

          <div className="software-marquee software-marquee-left flex w-max gap-5">
            {[...practiceSkills, ...practiceSkills].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex h-[58px] w-[205px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-emerald-300/20 bg-white/[0.06] px-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/50 hover:bg-emerald-300/10 sm:w-[225px]"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />

                <span className="text-center text-sm font-bold text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PRACTICE BUTTON */}
        <div className="relative z-20 mt-7 flex justify-center">
          <div className="rounded-full border border-emerald-400/50 bg-[#003d24] px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 shadow-lg shadow-black/10">
            Practice
          </div>
        </div>

        {/* Animation CSS */}
        <style jsx>{`
          .software-marquee-right {
            animation: softwareRightToLeft 32s linear infinite;
          }

          .software-marquee-left {
            animation: softwareLeftToRight 32s linear infinite;
          }

          .software-marquee:hover {
            animation-play-state: paused;
          }

          @keyframes softwareRightToLeft {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes softwareLeftToRight {
            0% {
              transform: translateX(-50%);
            }

            100% {
              transform: translateX(0);
            }
          }

          @media (max-width: 640px) {
            .software-marquee-right {
              animation-duration: 25s;
            }

            .software-marquee-left {
              animation-duration: 25s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .software-marquee-right,
            .software-marquee-left {
              animation-play-state: paused;
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          WHAT YOU WILL LEARN
      ===================================================== */}
      <section className="bg-[#f5fcf8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              What You&apos;ll Learn
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#071426] sm:text-5xl">
              Skills that turn ideas
              <span className="block text-green-600">
                into working software.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Explore the important areas covered throughout the course.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courseFeatures.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-green-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-xl"
                style={{
                  transform: `translate(${mousePosition.x * (index + 1)}px, ${
                    mousePosition.y * (index + 1)
                  }px)`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#071426] group-hover:text-green-700">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-green-500 transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FREELANCING + INTERNSHIP
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-2">
            <div className="rounded-[32px] border border-green-100 bg-[#f4fbf7] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                💼
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                Freelancing
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#071426]">
                Turn your software skills
                <span className="block text-green-600">
                  into opportunities.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Learn how to create a professional portfolio, communicate
                with clients and present your development skills for freelance
                projects.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Portfolio development",
                  "Freelancing fundamentals",
                  "Client communication",
                  "Professional profile building",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-green-100 bg-[#f7fcf9] p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                🚀
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                Internship
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#071426]">
                3 Months of
                <span className="block text-green-600">
                  practical experience.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                After completing the course, students can gain practical
                experience through a 3-month internship and understand
                professional development workflows.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Practical Experience",
                  "Professional Environment",
                  "Project Exposure",
                  "Career Preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-green-100 bg-white px-4 py-3 text-sm text-slate-600"
                  >
                    <span className="mr-2 text-green-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* =====================================================
    TEACHERS
===================================================== */}
<section className="bg-[#f5fcf8] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
        Our Instructors
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#071426] sm:text-5xl">
        Learn from experienced
        <span className="text-green-600"> professionals.</span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-slate-500">
        Build your software skills with guidance from experienced
        instructors.
      </p>
    </div>

    <div className="mt-16 grid gap-10 md:grid-cols-3">
      {teachers.map((teacher, index) => (
        <div
          key={teacher.name}
          className="group text-center"
          style={{
            transform: `translateY(${
              mousePosition.y * (index + 1) * 2
            }px)`,
          }}
        >
          {/* TEACHER IMAGE */}
          <div
            className="relative mx-auto h-[390px] max-w-[300px] overflow-hidden rounded-[48%] border-[10px] border-white bg-[#eaf8f0] shadow-xl shadow-green-900/10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="h-full w-full object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Bottom soft overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Number Badge */}
            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xs font-black text-green-700 shadow-md">
              0{index + 1}
            </div>
          </div>

          <h3 className="mt-7 text-xl font-black text-[#071426] transition-colors duration-300 group-hover:text-green-700">
            {teacher.name}
          </h3>

          <p className="mt-2 text-sm text-green-700">
            {teacher.role}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
         

      {/* =====================================================
          CAREER OPPORTUNITIES
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Career Opportunities
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#071426] sm:text-5xl">
                Where can these
                <span className="block text-green-600">
                  skills take you?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                After developing your skills, you can explore different
                technology careers or start building your own freelance
                development business.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {careers.map((career, index) => (
                <div
                  key={career}
                  className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f5fcf8] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  style={{
                    transform: `translate(${
                      mousePosition.x * (index + 1)
                    }px, ${mousePosition.y * (index + 1)}px)`,
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {career}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-[#f5fcf8] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#071426] sm:text-5xl">
              Questions?
              <span className="text-green-600"> We have answers.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Everything you need to know before starting the Software
              Solutions training program.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-md"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 0.4
                  }px, ${mousePosition.y * (index + 1) * 0.4}px)`,
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-[#071426]">
                  {faq.question}

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENROLLMENT FORM
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Course Enrollment
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#071426] sm:text-5xl">
                Start your
                <span className="block text-green-600">
                  software journey.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Fill out the form to register your interest in the Software
                Solutions course. Our team will contact you with further
                details about the course, classes and enrollment process.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f5fcf8] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                    🎓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#071426]">
                      6 Months Training
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Complete practical software development training.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f5fcf8] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                    🚀
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#071426]">
                      3 Months Internship
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Gain practical experience after successful training.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f5fcf8] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                    💼
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#071426]">
                      Freelancing Guidance
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Learn how to build your portfolio and find opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="relative rounded-[32px] border border-green-100 bg-[#f5fcf8] p-6 shadow-xl shadow-green-900/5 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-green-100/70 blur-sm" />

              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-[#071426]">
                    Enroll Now
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Please provide your details below.
                  </p>
                </div>

                <form className="space-y-5">
                  {/* Full Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>

                  {/* Phone + Education */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="03XX XXXXXXX"
                        className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Education
                      </label>

                      <input
                        type="text"
                        placeholder="Your education"
                        className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>

                  {/* Select Course */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Select Course
                    </label>

                    <select
                      defaultValue=""
                      className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    >
                      <option value="" disabled>
                        Select Software Solutions
                      </option>

                      <option value="software-solutions">
                        Software Solutions
                      </option>

                      <option value="web-development">
                        Web Development
                      </option>

                      <option value="mobile-app-development">
                        Mobile App Development
                      </option>

                      <option value="artificial-intelligence">
                        Artificial Intelligence
                      </option>
                    </select>
                  </div>

                  {/* How Can We Help */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      How Can We Help?
                    </label>

                    <select
                      defaultValue=""
                      className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    >
                      <option value="" disabled>
                        How can we help you?
                      </option>

                      <option value="course-information">
                        I want course information
                      </option>

                      <option value="enrollment">
                        I want to enroll in the course
                      </option>

                      <option value="fee-details">
                        I want fee details
                      </option>

                      <option value="class-schedule">
                        I want class schedule
                      </option>

                      <option value="internship">
                        I want to know about internship
                      </option>

                      <option value="freelancing">
                        I want freelancing guidance
                      </option>

                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Message
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Tell us anything you would like to know..."
                      className="w-full resize-none rounded-2xl border border-green-100 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                  >
                    Submit Enrollment

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </button>

                  <p className="text-center text-[11px] leading-5 text-slate-400">
                    By submitting this form, you agree to be contacted
                    regarding the Software Solutions course.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#edf9f2] py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-green-200/50 blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${
              mousePosition.x * 80
            }px), calc(-50% + ${mousePosition.y * 60}px))`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Start Your Journey
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071426] sm:text-5xl">
            Ready to build your
            <span className="block text-green-600">
              software career?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Join the 6-month training program, develop practical skills,
            explore freelancing and gain experience through a 3-month
            internship.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Enroll Now

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}