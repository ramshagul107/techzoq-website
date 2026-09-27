"use client";

import Link from "next/link";
import { useState } from "react";

export default function AIPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  /* =====================================================
      AI TOPICS
  ===================================================== */

  const aiTopics = [
    {
      number: "01",
      icon: "✦",
      title: "Artificial Intelligence",
      text: "Understand the foundations of AI and how intelligent systems solve real-world problems.",
    },
    {
      number: "02",
      icon: "◎",
      title: "Machine Learning",
      text: "Learn how machines identify patterns, learn from data and make intelligent predictions.",
    },
    {
      number: "03",
      icon: "✧",
      title: "Generative AI",
      text: "Explore modern AI systems that generate text, images, ideas and intelligent content.",
    },
    {
      number: "04",
      icon: "⚡",
      title: "AI Automation",
      text: "Discover how AI can automate repetitive tasks and improve business workflows.",
    },
    {
      number: "05",
      icon: "◈",
      title: "Data Intelligence",
      text: "Turn raw data into useful information through intelligent analysis and visualization.",
    },
    {
      number: "06",
      icon: "⌁",
      title: "AI Projects",
      text: "Build practical AI projects that demonstrate your skills and prepare you for real work.",
    },
  ];

  /* =====================================================
      MOVING AI STRATEGY
  ===================================================== */

  const strategies = [
    {
      number: "01",
      phase: "FOUNDATION",
      icon: "🧠",
      title: "Understand",
      text: "Start with the core concepts of artificial intelligence and intelligent systems.",
      points: [
        "AI Fundamentals",
        "Problem Solving",
        "AI Concepts",
        "Data Basics",
      ],
    },
    {
      number: "02",
      phase: "LEARN",
      icon: "📚",
      title: "Learn",
      text: "Explore machine learning, generative AI, automation and modern AI tools.",
      points: [
        "Machine Learning",
        "Generative AI",
        "AI Tools",
        "Prompt Engineering",
      ],
    },
    {
      number: "03",
      phase: "BUILD",
      icon: "🛠️",
      title: "Build",
      text: "Apply your knowledge by creating useful AI-powered projects and solutions.",
      points: [
        "AI Applications",
        "Automation Projects",
        "Intelligent Systems",
        "Real Projects",
      ],
    },
    {
      number: "04",
      phase: "GROW",
      icon: "🚀",
      title: "Grow",
      text: "Develop your portfolio and prepare yourself for AI careers, freelancing and business.",
      points: [
        "Portfolio",
        "Freelancing",
        "Career Skills",
        "AI Opportunities",
      ],
    },
  ];

  /* =====================================================
      CURRICULUM
  ===================================================== */

  const curriculum = [
    {
      number: "01",
      title: "AI Fundamentals",
      text: "Understand artificial intelligence, intelligent systems, AI applications and real-world use cases.",
    },
    {
      number: "02",
      title: "Machine Learning",
      text: "Learn how machines learn from data, identify patterns and make predictions.",
    },
    {
      number: "03",
      title: "Deep Learning",
      text: "Explore neural networks and the fundamentals behind modern deep learning systems.",
    },
    {
      number: "04",
      title: "Generative AI",
      text: "Understand modern generative AI and how intelligent systems create useful content.",
    },
    {
      number: "05",
      title: "Prompt Engineering",
      text: "Learn how to communicate effectively with AI models to generate better results.",
    },
    {
      number: "06",
      title: "AI Automation",
      text: "Discover how AI can automate repetitive tasks and improve productivity.",
    },
    {
      number: "07",
      title: "AI Tools",
      text: "Explore modern AI tools used for productivity, content creation, research and business.",
    },
    {
      number: "08",
      title: "Data Analysis",
      text: "Learn how AI and data can be combined to discover useful insights.",
    },
    {
      number: "09",
      title: "AI Projects",
      text: "Build practical AI projects and develop a portfolio for real-world opportunities.",
    },
    {
      number: "10",
      title: "Freelancing",
      text: "Learn how to present AI skills, create services and work with clients.",
    },
  ];

  /* =====================================================
      FEATURES
  ===================================================== */

  const features = [
    {
      icon: "01",
      title: "Practical Projects",
      text: "Work on practical AI projects instead of studying theory only.",
    },
    {
      icon: "02",
      title: "Modern AI Tools",
      text: "Explore current AI technologies and productivity tools.",
    },
    {
      icon: "03",
      title: "Career Skills",
      text: "Develop useful skills for AI, automation and data-related careers.",
    },
  ];

  /* =====================================================
      AI TOOLS
  ===================================================== */

  const tools = [
    {
      icon: "🤖",
      title: "AI Assistants",
      text: "Explore intelligent assistants for research, writing, productivity and problem solving.",
    },
    {
      icon: "✨",
      title: "Generative AI",
      text: "Learn how modern AI can generate text, images, ideas and other useful content.",
    },
    {
      icon: "⚙️",
      title: "Automation",
      text: "Understand how AI-powered automation can simplify repetitive business processes.",
    },
  ];

  /* =====================================================
      LEARNING OUTCOMES
  ===================================================== */

  const outcomes = [
    "Understand Artificial Intelligence",
    "Work With Machine Learning",
    "Explore Generative AI",
    "Use Modern AI Tools",
    "Create AI-Powered Solutions",
    "Build AI Automation",
    "Analyze Data With AI",
    "Create Practical Projects",
    "Build An AI Portfolio",
    "Start AI Freelancing",
  ];

  /* =====================================================
      TEACHERS
  ===================================================== */

  const teachers = [
    {
      name: "Dr. Hamza",
      role: "AI & Machine Learning Instructor",
      image: "/images/ai1.jpg",
    },
    {
      name: "Ms. Zara",
      role: "Artificial Intelligence Instructor",
      image: "/images/ai2.jpg",
    },
    {
      name: "Sir Adeel",
      role: "AI & Data Science Instructor",
      image: "/images/ai3.jpg",
    },
  ];

  /* =====================================================
      FAQ
  ===================================================== */

  const faqs = [
    {
      question: "What is Artificial Intelligence?",
      answer:
        "Artificial Intelligence is technology that enables computers and machines to perform tasks that normally require human intelligence, such as learning, reasoning and problem solving.",
    },
    {
      question: "What will I learn in this AI course?",
      answer:
        "You will learn AI fundamentals, machine learning, generative AI, prompt engineering, automation, AI tools, data analysis, projects and freelancing.",
    },
    {
      question: "Will Generative AI be taught?",
      answer:
        "Yes. The course covers modern generative AI concepts, AI assistants, content generation and practical use cases.",
    },
    {
      question: "Will I build AI projects?",
      answer:
        "Yes. Practical projects are an important part of the learning process so you can apply your knowledge and build a useful portfolio.",
    },
    {
      question: "Is AI automation included?",
      answer:
        "Yes. You will learn how AI can be used to automate repetitive tasks and improve productivity and business workflows.",
    },
    {
      question: "Is freelancing included?",
      answer:
        "Yes. The course also focuses on building a portfolio and understanding how AI-related services can be offered to clients.",
    },
    {
      question: "Who can learn AI?",
      answer:
        "Beginners, students, professionals, business owners and anyone interested in modern AI technologies can start learning.",
    },
    {
      question: "Do I need advanced programming knowledge?",
      answer:
        "No. Beginners can start with the fundamentals and gradually move toward more advanced AI concepts and projects.",
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

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4fff8] via-white to-[#e8fff0]">
        <div
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 22}px, ${
              mousePosition.y * 22
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* LEFT */}

            <div
              className="max-w-2xl transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -5}px, ${
                  mousePosition.y * -5
                }px)`,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  Artificial Intelligence
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-[#071426] sm:text-6xl lg:text-[64px]">
                Build

                <span className="block text-green-600">Smarter</span>

                <span className="block">With AI.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Explore artificial intelligence, machine learning, generative
                AI, automation and modern AI tools through practical learning
                and real-world projects.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Start Learning

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-9 grid max-w-lg grid-cols-3 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-2xl font-bold text-[#071426]">50+</p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    AI Projects
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#071426]">20+</p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    AI Tools
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#071426]">100%</p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    Practical
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div
              className="relative w-full transition-transform duration-700"
              style={{
                transform: `translate(${mousePosition.x * 7}px, ${
                  mousePosition.y * 7
                }px)`,
              }}
            >
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-green-200/30 blur-3xl" />

              <div
                className="group relative overflow-hidden rounded-[30px] bg-white p-3 shadow-2xl shadow-green-900/10 transition-all duration-500 hover:-translate-y-2"
                style={{
                  transform: `rotateY(${mousePosition.x * 2}deg) rotateX(${
                    mousePosition.y * -2
                  }deg)`,
                }}
              >
                {/* FIXED IMAGE AREA */}

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-slate-100">
                  <img
                    src="/images/gallery11.jpg"
                    alt="Artificial Intelligence"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 sm:bottom-7 sm:left-7 sm:right-auto">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg font-bold text-green-700">
                      AI
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#071426]">
                        Intelligent Future
                      </p>

                      <p className="text-xs text-slate-500">
                        Learn • Create • Innovate
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
          AI TOPICS
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  What You&apos;ll Explore
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Learn the

                <span className="block text-green-600">technology</span>
                shaping tomorrow.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                Explore important areas of artificial intelligence through
                practical concepts, modern tools and project-based learning.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiTopics.map((topic, index) => (
                <div
                  key={topic.number}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-[#f7fcf9] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                  style={{
                    transform: `translate(${mousePosition.x * (index + 1)}px, ${
                      mousePosition.y * (index + 1)
                    }px)`,
                  }}
                >
                  <span className="absolute right-5 top-4 text-5xl font-bold text-green-100">
                    {topic.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-lg text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      {topic.icon}
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-gray-900 group-hover:text-green-700">
                      {topic.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {topic.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI MOVING STRATEGY SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4fbf7] py-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                AI Learning Strategy
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Learn.

              <span className="text-green-600"> Build.</span> Grow.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              A complete learning journey designed to take you from AI
              fundamentals to practical projects and professional
              opportunities.
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[30px] bg-[#052e16] px-5 py-5 shadow-2xl">
            <div className="ai-track-left flex min-w-max items-center gap-4">
              {[
                {
                  icon: "🧠",
                  title: "UNDERSTAND",
                  text: "AI Fundamentals",
                },
                {
                  icon: "📚",
                  title: "LEARN",
                  text: "Machine Learning",
                },
                {
                  icon: "✨",
                  title: "CREATE",
                  text: "Generative AI",
                },
                {
                  icon: "⚙️",
                  title: "AUTOMATE",
                  text: "AI Automation",
                },
                {
                  icon: "🛠️",
                  title: "BUILD",
                  text: "AI Projects",
                },
                {
                  icon: "🚀",
                  title: "GROW",
                  text: "Career & Freelancing",
                },
                {
                  icon: "🧠",
                  title: "UNDERSTAND",
                  text: "AI Fundamentals",
                },
                {
                  icon: "📚",
                  title: "LEARN",
                  text: "Machine Learning",
                },
                {
                  icon: "✨",
                  title: "CREATE",
                  text: "Generative AI",
                },
                {
                  icon: "⚙️",
                  title: "AUTOMATE",
                  text: "AI Automation",
                },
                {
                  icon: "🛠️",
                  title: "BUILD",
                  text: "AI Projects",
                },
                {
                  icon: "🚀",
                  title: "GROW",
                  text: "Career & Freelancing",
                },
              ].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex min-w-[245px] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm font-bold tracking-widest text-green-400">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden">
            <div className="ai-track-right flex min-w-max gap-5">
              {[...strategies, ...strategies].map((strategy, index) => (
                <div
                  key={`${strategy.number}-${index}`}
                  className="group w-[310px] shrink-0 rounded-[28px] border border-green-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/10"
                  style={{
                    transform: `translateY(${
                      mousePosition.y * ((index % 4) + 1) * 1.2
                    }px)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-green-600">
                      {strategy.icon}
                    </div>

                    <span className="text-4xl font-black text-green-100">
                      {strategy.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-bold tracking-[0.25em] text-green-600">
                    {strategy.phase}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-green-700">
                    {strategy.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {strategy.text}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {strategy.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-gray-600"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-700">
                          ✓
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 h-1 w-10 rounded-full bg-green-500 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .ai-track-left {
            animation: aiLeftToRight 25s linear infinite;
          }

          .ai-track-right {
            animation: aiRightToLeft 30s linear infinite;
          }

          .ai-track-left:hover,
          .ai-track-right:hover {
            animation-play-state: paused;
          }

          @keyframes aiLeftToRight {
            0% {
              transform: translateX(-50%);
            }

            100% {
              transform: translateX(0%);
            }
          }

          @keyframes aiRightToLeft {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .ai-track-left {
              animation-duration: 20s;
            }

            .ai-track-right {
              animation-duration: 24s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .ai-track-left,
            .ai-track-right {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          AI ADVANTAGE
      ===================================================== */}

      <section className="bg-[#052e16] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                The AI Advantage
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Turn technology

                <span className="block text-green-400">
                  into an advantage.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                Artificial intelligence is changing how businesses work.
                Learn how intelligent systems can improve productivity,
                automate processes and create new possibilities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.icon}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                  style={{
                    transform: `translate(${
                      mousePosition.x * (index + 1)
                    }px, ${mousePosition.y * (index + 1)}px)`,
                  }}
                >
                  <span className="text-sm font-bold text-green-400">
                    {feature.icon}
                  </span>

                  <h3 className="mt-8 text-lg font-bold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI TOOLS
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
              Modern AI
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Explore modern

              <span className="text-green-600"> AI tools.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Discover how modern AI technologies can improve creativity,
              productivity and business workflows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {tools.map((tool, index) => (
              <div
                key={tool.title}
                className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
                style={{
                  transform: `translate(${mousePosition.x * (index + 1)}px, ${
                    mousePosition.y * (index + 1)
                  }px)`,
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600">
                  {tool.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900 group-hover:text-green-700">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {tool.text}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-green-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TEACHERS
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Meet The Experts
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Learn from our

              <span className="text-green-600"> AI experts.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Experienced instructors helping students understand artificial
              intelligence through practical learning.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.name}
                className="group relative flex flex-col items-center"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${mousePosition.y * (index + 1) * 2}px)`,
                }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-green-200/50 blur-2xl opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

                  <div className="relative h-56 w-56 overflow-hidden rounded-full border-[7px] border-white bg-white shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-green-400">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/20 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="translate-y-4 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className="text-lg font-bold text-white">
                          {teacher.name}
                        </p>

                        <p className="mt-1 text-xs text-green-300">
                          {teacher.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 text-center">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">
                    {teacher.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-green-700">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRICULUM
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                AI Curriculum
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Learn AI

              <span className="block text-green-600">step by step.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              A practical curriculum designed to take you from AI
              fundamentals to real-world projects and freelancing.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {curriculum.map((item, index) => (
              <div
                key={item.number}
                className="group flex gap-5 rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-lg"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index % 2 + 1) * 2
                  }px, ${mousePosition.y * (index % 2 + 1) * 2}px)`,
                }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-sm font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE DETAILS
      ===================================================== */}

      <section className="bg-[#052e16] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
              AI Course Details
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Learn. Practice. Build. Grow.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🧠",
                title: "AI Fundamentals",
                text: "Strong foundation in artificial intelligence",
              },
              {
                icon: "🛠️",
                title: "Practical Projects",
                text: "Learn by building real-world projects",
              },
              {
                icon: "💻",
                title: "AI Skills",
                text: "Develop modern AI and automation skills",
              },
              {
                icon: "🚀",
                title: "Career Growth",
                text: "Prepare for AI careers and freelancing",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1)
                  }px, ${mousePosition.y * (index + 1)}px)`,
                }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING OUTCOME
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  After The Course
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                What can you do

                <span className="block text-green-600">
                  after learning AI?
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-500">
                Build your skills, create a strong portfolio and start
                providing AI-related services to businesses and clients.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-green-100 bg-[#f7fcf9] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  style={{
                    transform: `translate(${
                      mousePosition.x * (index % 2 + 1)
                    }px, ${mousePosition.y * (index % 2 + 1)}px)`,
                  }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </span>

                  <span className="text-sm font-semibold text-gray-700">
                    {item}
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

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-600">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Everything you need to know about the AI course.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-green-200"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index % 2 + 1)
                  }px, ${mousePosition.y * (index % 2 + 1)}px)`,
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-bold text-gray-900">
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl text-green-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GET IN TOUCH FORM
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[30px] border border-green-100 bg-white shadow-2xl shadow-green-900/10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT GREEN BOX */}

            <div className="relative overflow-hidden rounded-[30px] bg-[#052e16] p-8 text-white sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * 12}px, ${
                    mousePosition.y * 12
                  }px)`,
                }}
              />

              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-green-400/10 blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * -10}px, ${
                    mousePosition.y * -10
                  }px)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064b25] shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-400 text-sm font-bold text-green-400">
                    AI
                  </div>
                </div>

                <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
                  How can we help?
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                  Our team can guide you about the AI course, learning path,
                  practical training and career opportunities.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Artificial Intelligence Course",
                    "Machine Learning Training",
                    "Generative AI Learning",
                    "AI Projects & Practical Training",
                    "Career & Freelancing Guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-sm font-bold text-green-400">
                        ✓
                      </span>

                      <span className="text-sm text-white/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
                  Get In Touch
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071426] sm:text-4xl">
                  Tell us how we can help.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form and our team will get back to you.
                </p>

                <form
                  className="mt-9"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-[#071426]"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-[#071426]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-[#071426]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="03XX XXXXXXX"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="mb-2 block text-sm font-bold text-[#071426]"
                      >
                        I&apos;m Interested In
                      </label>

                      <select
                        id="interest"
                        defaultValue="Artificial Intelligence Course"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      >
                        <option>Artificial Intelligence Course</option>
                        <option>Machine Learning</option>
                        <option>Generative AI</option>
                        <option>AI Automation</option>
                        <option>AI Projects</option>
                        <option>Freelancing Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#071426]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us what you need help with..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 py-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                  >
                    Send Message

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#eaf8ef] py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/20 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(
              calc(-50% + ${mousePosition.x * 20}px),
              calc(-50% + ${mousePosition.y * 20}px)
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-green-200/30 blur-3xl"
          style={{
            transform: `translate(
              ${mousePosition.x * 15}px,
              ${mousePosition.y * 15}px
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-green-200/30 blur-3xl"
          style={{
            transform: `translate(
              ${mousePosition.x * -15}px,
              ${mousePosition.y * -15}px
            )`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-green-600 shadow-lg shadow-green-900/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
            AI
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-green-700">
            Build The Future
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Ready to explore

            <span className="block text-green-600">
              Artificial Intelligence?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Learn modern AI technologies, work on practical projects and
            develop skills for the rapidly growing world of intelligent
            systems.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            Get Started

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}