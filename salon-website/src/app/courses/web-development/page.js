"use client";

import Link from "next/link";
import { useState } from "react";

export default function WebDevelopmentPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your request has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Web Development",
      message: "",
    });
  };

  const technologies = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
    "Responsive Design",
    "Deployment",
  ];

  const frontendTechnologies = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  const backendTechnologies = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Authentication",
    "Deployment",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategize",
      icon: "⌕",
      items: [
        "Strategic Analysis",
        "Goal & Scope Definition",
        "UX/UI Prototyping",
        "Project Roadmap",
      ],
    },
    {
      number: "02",
      title: "Develop",
      icon: "</>",
      items: [
        "System Architecture",
        "Front-End Engineering",
        "Back-End Engineering",
        "API Integration",
      ],
    },
    {
      number: "03",
      title: "Deploy",
      icon: "↗",
      items: [
        "Quality Assurance",
        "Performance Testing",
        "User Feedback Loops",
        "Project Launch",
      ],
    },
    {
      number: "04",
      title: "Support",
      icon: "◉",
      items: [
        "Proactive Monitoring",
        "SLA-Backed Support",
        "Continuous Improvement",
        "Bug & Security Fixes",
      ],
    },
  ];

  const learningCards = [
    {
      number: "01",
      title: "Frontend Development",
      text: "Learn how to create modern, responsive and interactive websites using modern frontend technologies.",
      icon: "</>",
    },
    {
      number: "02",
      title: "Backend Development",
      text: "Learn server-side development, databases, APIs, authentication and complete backend systems.",
      icon: "DB",
    },
    {
      number: "03",
      title: "Full-Stack Development",
      text: "Connect frontend and backend to build complete professional web applications.",
      icon: "FS",
    },
    {
      number: "04",
      title: "Freelancing",
      text: "Learn how to present your skills, find clients, create proposals and start earning online.",
      icon: "↗",
    },
  ];

  const roadmap = [
    {
      month: "Month 01",
      title: "Web Fundamentals",
      text: "HTML, CSS, layouts, responsive design and basic web concepts.",
    },
    {
      month: "Month 02",
      title: "JavaScript",
      text: "JavaScript fundamentals, DOM, events, functions and modern JS.",
    },
    {
      month: "Month 03",
      title: "React & Modern UI",
      text: "React components, state, props and modern frontend development.",
    },
    {
      month: "Month 04",
      title: "Next.js & Advanced Frontend",
      text: "Next.js, routing, pages, components, APIs and production-ready UI.",
    },
    {
      month: "Month 05",
      title: "Backend Development",
      text: "Node.js, Express, databases, authentication and REST APIs.",
    },
    {
      month: "Month 06",
      title: "Full Stack + Freelancing",
      text: "Complete projects, deployment, portfolio and freelancing preparation.",
    },
  ];

  const faqs = [
    {
      question: "How long is the Web Development course?",
      answer:
        "The complete Web Development course is designed for 6 months, covering frontend, backend, full-stack development and freelancing skills.",
    },
    {
      question: "Will I learn both Frontend and Backend?",
      answer:
        "Yes. The course covers both frontend and backend development so students can learn how complete web applications are built.",
    },
    {
      question: "Is freelancing included in the course?",
      answer:
        "Yes. Freelancing training is included. Students learn how to build a portfolio, present their skills, communicate with clients and prepare for online work.",
    },
    {
      question: "Is there an internship?",
      answer:
        "Yes. After the learning phase, students can get practical experience through a 3-month internship opportunity.",
    },
    {
      question: "Who will teach the course?",
      answer:
        "The Web Development training is conducted by Sir Manzoor, Sir Mohsin and Sir Uzair.",
    },
    {
      question: "Do I need previous programming experience?",
      answer:
        "No. The course can start from the fundamentals and gradually move toward advanced frontend, backend and full-stack development.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-white"
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
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbf7]">
        <div
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-100/70 blur-3xl transition-transform duration-500"
          style={{
            transform: `translate(${mousePosition.x * 35}px, ${
              mousePosition.y * 30
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-100/60 blur-3xl transition-transform duration-500"
          style={{
            transform: `translate(${mousePosition.x * -35}px, ${
              mousePosition.y * -30
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute left-1/2 top-20 h-40 w-40 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${
              mousePosition.y * -35
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">
            <div
              className="max-w-2xl transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -6}px, ${
                  mousePosition.y * -6
                }px)`,
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Techzoq Training Program
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Web
                <span className="block text-green-600">
                  Development
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Learn to build professional websites and complete web
                applications from frontend to backend, while developing
                practical skills for freelancing and real-world projects.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm">
                  6 Months Course
                </span>

                <span className="rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm">
                  3 Months Internship
                </span>

                <span className="rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm">
                  Freelancing
                </span>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Enroll Now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
                >
                  All Services
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-200 pt-7">
                <div>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Months
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Months Internship
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Instructors
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative flex items-center justify-center transition-transform duration-500 lg:justify-end"
              style={{
                transform: `translate(${mousePosition.x * 14}px, ${
                  mousePosition.y * 14
                }px)`,
              }}
            >
              <div
                className="absolute h-[420px] w-[420px] rounded-full bg-green-200/60 blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * -25}px, ${
                    mousePosition.y * -25
                  }px)`,
                }}
              />

              <div className="group relative w-full max-w-[600px] overflow-hidden rounded-[28px] border border-white bg-white p-3 shadow-2xl shadow-green-900/10 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-[360px] overflow-hidden rounded-[22px] bg-green-50 sm:h-[430px]">
                  <img
                    src="/images/web-development.jpg"
                    alt="Web Development"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-7 left-7 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                      &lt;/&gt;
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Full Web Development
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500">
                        Frontend • Backend • Freelancing
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
          COURSE OVERVIEW
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Course Overview
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Learn everything you need to become a
              <span className="block text-green-600">
                Web Developer.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              Our training program focuses on practical skills,
              modern technologies and real-world development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningCards.map((item, index) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${mousePosition.y * (index + 1) * 2}px)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
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

      {/* =====================================================
          FRONTEND + BACKEND
      ===================================================== */}
      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                What You Will Learn
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              From frontend to
              <span className="text-green-600"> backend.</span>
            </h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            <div
              className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${
                  mousePosition.y * 3
                }px)`,
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700">
                &lt;/&gt;
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-900">
                Frontend Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Learn how to create beautiful, responsive and interactive
                interfaces that work across devices.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {frontendTechnologies.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                  >
                    ✓ {skill}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${
                  mousePosition.y * -3
                }px)`,
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700">
                DB
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-900">
                Backend Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Understand how the server side of applications works,
                including APIs, databases, authentication and deployment.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {backendTechnologies.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                  >
                    ✓ {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PROCESS
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[34px] border border-gray-100 bg-[#f8fbf9] p-6 shadow-sm sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Our Process
                </span>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Our blueprint for real
                  <span className="block text-green-600">
                    impact.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                  A proven process that helps you move from an idea to a
                  complete, professional and production-ready web project.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-[#075c32] p-6 shadow-xl shadow-green-900/10 sm:p-8">
                <div className="flex items-center justify-center gap-2 sm:gap-5">
                  {["→", "→", "→", "◎"].map((item, index) => (
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
                    Idea • Build • Launch • Grow
                  </span>
                </div>
              </div>
            </div>

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
          MOVING TECHNOLOGY STACK
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#073b27] py-20">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-300/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-300">
              Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              The Right Tech For Every
              <span className="text-green-300"> Challenge.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              From frontend interfaces to backend systems, we work with
              modern technologies to build fast, scalable and reliable
              web experiences.
            </p>
          </div>

          <div className="mt-12 overflow-hidden">
            <div className="tech-track tech-scroll-left flex w-max">
              {[...technologies, ...technologies].map(
                (technology, index) => (
                  <div
                    key={`left-${technology}-${index}`}
                    className="mx-2 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-300/40 hover:bg-green-500/20 hover:text-green-200"
                  >
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    {technology}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <span className="rounded-full border border-green-300/20 bg-green-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-300">
              Frontend Technologies
            </span>
          </div>

          <div className="mt-8 overflow-hidden">
            <div className="tech-track tech-scroll-right flex w-max">
              {[
                ...technologies.slice().reverse(),
                ...technologies.slice().reverse(),
              ].map((technology, index) => (
                <div
                  key={`right-${technology}-${index}`}
                  className="mx-2 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-300/40 hover:bg-green-500/20 hover:text-green-200"
                >
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  {technology}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <span className="rounded-full border border-green-300/20 bg-green-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-300">
              Mobile & Backend Technologies
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE ROADMAP
      ===================================================== */}
      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
              6 Month Roadmap
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Your journey from
              <span className="text-green-600">
                {" "}beginner to developer.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((item, index) => (
              <div
                key={item.month}
                className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  transform: `translate(
                    ${mousePosition.x * (index + 1)}px,
                    ${mousePosition.y * (index + 1)}px
                  )`,
                }}
              >
                <span className="text-sm font-bold text-green-600">
                  {item.month}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
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

      {/* =====================================================
          INSTRUCTORS
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
              Our Instructors
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Learn from experienced
              <span className="text-green-600">
                {" "}instructors.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Web Development training is conducted by our instructors
              with a focus on practical learning and real-world skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {["Sir Manzoor", "Sir Mohsin", "Sir Uzair"].map(
              (teacher, index) => (
                <div
                  key={teacher}
                  className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-xl"
                  style={{
                    transform: `translate(
                      ${mousePosition.x * (index + 1) * 2}px,
                      ${mousePosition.y * (index + 1) * 2}px
                    )`,
                  }}
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {teacher
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {teacher}
                  </h3>

                  <p className="mt-2 text-sm text-green-600">
                    Web Development Instructor
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNSHIP + FREELANCING
      ===================================================== */}
      <section className="bg-[#052e16] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 sm:p-10"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${
                  mousePosition.y * 3
                }px)`,
              }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Practical Experience
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                3 Months
                <span className="text-green-400"> Internship</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                After completing the learning phase, students can gain
                practical experience through a 3-month internship and
                work on real development tasks.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Practical project experience",
                  "Professional development workflow",
                  "Team collaboration",
                  "Real-world problem solving",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span className="text-green-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 sm:p-10"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${
                  mousePosition.y * -3
                }px)`,
              }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Career Skills
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Freelancing
                <span className="text-green-400"> Training</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Learn how to take your development skills into the
                freelance market and prepare yourself for working with
                clients online.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Portfolio building",
                  "Client communication",
                  "Project proposals",
                  "Freelance profile preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span className="text-green-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
              Questions & Answers
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked
              <span className="text-green-600"> Questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-green-200"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-bold text-gray-900 sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE CAN HELP / FORM
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f4fbf7] py-24">
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
                Let&apos;s build your
                <span className="block text-green-600">
                  digital future.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-500">
                Have questions about our Web Development program?
                Want to enroll, discuss the course or learn more about
                our training? Send us your details and our team will
                get back to you.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: "✓",
                    title: "Course Enrollment",
                    text: "Get complete information about the Web Development course.",
                  },
                  {
                    icon: "</>",
                    title: "Web Development",
                    text: "Discuss websites, web applications and development projects.",
                  },
                  {
                    icon: "↗",
                    title: "Career & Freelancing",
                    text: "Learn about freelancing, internship and career opportunities.",
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

              <form onSubmit={handleFormSubmit} className="space-y-5">

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
                      <option>Web Development</option>
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                      <option>Full-Stack Development</option>
                      <option>Freelancing Training</option>
                      <option>Internship</option>
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
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f4fbf7] py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-green-100/60 blur-3xl transition-transform duration-500"
          style={{
            transform: `translate(
              calc(-50% + ${mousePosition.x * 25}px),
              calc(-50% + ${mousePosition.y * 25}px)
            )`,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-600">
            Start Your Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Ready to become a
            <span className="block text-green-600">
              Web Developer?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            Join our 6-month Web Development program, gain practical
            experience through internship and prepare yourself for
            freelancing and real-world opportunities.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
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