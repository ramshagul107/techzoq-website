"use client";

import Link from "next/link";
import { useState } from "react";

export default function GraphicDesignPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Graphic Design",
    help: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const handleChange = (e) => {
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
    }, 4000);
  };

  const modules = [
    {
      number: "01",
      title: "Graphic Design Fundamentals",
      text: "Learn design principles, composition, typography and visual communication.",
      icon: "🎨",
    },
    {
      number: "02",
      title: "Adobe Photoshop",
      text: "Create professional graphics, photo edits, social media designs and creative visuals.",
      icon: "🖼️",
    },
    {
      number: "03",
      title: "Adobe Illustrator",
      text: "Design logos, icons, illustrations and professional vector graphics.",
      icon: "✏️",
    },
    {
      number: "04",
      title: "Brand Identity",
      text: "Create strong visual identities, logos and complete branding systems.",
      icon: "✨",
    },
    {
      number: "05",
      title: "Social Media Design",
      text: "Create attractive posts, banners and promotional content for modern brands.",
      icon: "📱",
    },
    {
      number: "06",
      title: "Freelancing",
      text: "Build your portfolio and learn how to present your design skills professionally.",
      icon: "💼",
    },
  ];

  const benefits = [
    {
      icon: "💻",
      title: "Practical Learning",
      text: "Learn through real design exercises and creative projects.",
    },
    {
      icon: "🎓",
      title: "Professional Training",
      text: "Develop a strong foundation for a career in graphic design.",
    },
    {
      icon: "💼",
      title: "Freelancing Skills",
      text: "Learn how to build your portfolio and work with clients.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      text: "Develop creative skills for professional design opportunities.",
    },
  ];

  const strategies = [
    {
      icon: "🎯",
      title: "Visual Strategy",
      text: "Learn how to organize visual elements so your design communicates the right message instantly.",
    },
    {
      icon: "🎨",
      title: "Color Strategy",
      text: "Understand color combinations, emotions and visual consistency for professional designs.",
    },
    {
      icon: "✍️",
      title: "Typography Strategy",
      text: "Use fonts, spacing and hierarchy to make designs clear, readable and visually powerful.",
    },
    {
      icon: "📱",
      title: "Content Strategy",
      text: "Create social media graphics and promotional designs that attract attention effectively.",
    },
    {
      icon: "🧠",
      title: "Creative Thinking",
      text: "Develop creative thinking skills and learn how to turn ideas into strong visual concepts.",
    },
    {
      icon: "⭐",
      title: "Brand Strategy",
      text: "Learn how colors, logos, fonts and graphics work together to build memorable brands.",
    },
    {
      icon: "📐",
      title: "Layout Strategy",
      text: "Master spacing, alignment and composition to create clean professional designs.",
    },
    {
      icon: "🔥",
      title: "Attention Strategy",
      text: "Understand how to guide viewers' attention toward the most important parts of a design.",
    },
  ];

  const careers = [
    "Graphic Designer",
    "Brand Designer",
    "Logo Designer",
    "Social Media Designer",
    "UI Visual Designer",
    "Freelance Designer",
  ];

  const faqs = [
    {
      question: "How long is the Graphic Design course?",
      answer:
        "The course is designed as a structured practical training program covering graphic design fundamentals, Adobe tools, branding and freelancing.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The course starts from basic design concepts and gradually moves toward professional design projects.",
    },
    {
      question: "Which software will I learn?",
      answer:
        "Students learn important industry tools including Adobe Photoshop and Adobe Illustrator along with practical design techniques.",
    },
    {
      question: "Is practical training included?",
      answer:
        "Yes. Students work on practical design exercises, creative projects and portfolio-based work.",
    },
    {
      question: "Can I start freelancing after the course?",
      answer:
        "Yes. Freelancing guidance and portfolio development can help students prepare for online design opportunities.",
    },
    {
      question: "Will I build a portfolio?",
      answer:
        "Yes. Students can work on practical projects that help them build a strong collection of professional design work.",
    },
  ];

  const movingSkills = [
    "Photoshop",
    "Illustrator",
    "Logo Design",
    "Brand Identity",
    "Social Media Design",
    "Typography",
    "Poster Design",
    "Banner Design",
    "Photo Editing",
    "Creative Direction",
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* =====================================================
          GLOBAL ANIMATION
      ===================================================== */}

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 24s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 26s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f3fbf6]">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-200/40 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
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
         <div className="grid min-h-[560px] items-center gap-14 lg:grid-cols-2">
            <div
              className="transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -5}px, ${
                  mousePosition.y * -5
                }px)`,
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Creative Design Training
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-[#0b1728] sm:text-6xl lg:text-6xl">
                Learn
                <span className="block text-green-600">
                  Graphic Design
                </span>
                Create
                <span className="block">Designs That Inspire.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                Build professional graphic design skills through practical
                training in Photoshop, Illustrator, branding, social media
                design and freelancing.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="#enrollment"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Join The Course

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

              <div className="mt-12 grid grid-cols-3 border-t border-gray-200 pt-7">
                <div>
                  <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    6+
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
                    Design Modules
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    100%
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
                    Practical
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Pro
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
                    Skills
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative transition-transform duration-700"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${
                  mousePosition.y * 10
                }px)`,
              }}
            >
              <div className="absolute -inset-10 rounded-full bg-green-200/30 blur-3xl" />

              <div
                className="group relative overflow-hidden rounded-[30px] bg-white p-3 shadow-2xl shadow-green-900/10"
                style={{
                  transform: `rotateY(${mousePosition.x * 2}deg) rotateX(${
                    mousePosition.y * -2
                  }deg)`,
                }}
              >
                <div className="relative h-[360px] overflow-hidden rounded-[24px] sm:h-[420px] lg:h-[440px]">
                  <img
                    src="/images/gallery12.jpg"
                    alt="Graphic Design Training"
                   className="h-full w-full object-cover object-[center_center] transition-transform duration-700 group-hover:scale-105">

                   </img>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-bold text-green-700 shadow-lg backdrop-blur-md">
                    CREATIVE STUDIO
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
                      🎨
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Graphic Design
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500">
                        Create • Design • Inspire
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
          GRAPHIC DESIGN BLUEPRINT
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* TOP CONTENT */}

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT CONTENT */}

            <div
              className="transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${
                  mousePosition.y * -3
                }px)`,
              }}
            >
              <h2 className="text-5xl font-black leading-[1.02] tracking-tight text-[#0b1728] sm:text-6xl lg:text-[62px]">
                Our blueprint for
                <br />
                real
                <span className="block text-green-500">
                  creative impact.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#58708c] sm:text-lg">
                A practical Graphic Design learning process that takes you
                from understanding design fundamentals to creating,
                presenting and improving professional visual work.
              </p>
            </div>

            {/* RIGHT GREEN GRAPHIC */}

            <div
              className="relative transition-transform duration-700"
              style={{
                transform: `translate(${mousePosition.x * 5}px, ${
                  mousePosition.y * 5
                }px)`,
              }}
            >
              <div className="relative overflow-hidden rounded-[30px] bg-[#076b3b] px-6 py-10 shadow-2xl shadow-green-900/15 sm:px-10 lg:px-12">
                {/* Decorative glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-400/20 blur-3xl" />

                <div className="relative flex items-center justify-center gap-1 sm:gap-3">
                  {[
                    { symbol: "→" },
                    { symbol: "→" },
                    { symbol: "→" },
                    { symbol: "◎" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative flex h-[62px] w-[62px] rotate-45 items-center justify-center rounded-[18px] bg-white shadow-lg transition-all duration-500 hover:scale-110 sm:h-[82px] sm:w-[82px]"
                    >
                      <span className="-rotate-45 text-xl font-light text-green-500 transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                        {item.symbol}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-10 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-xs sm:tracking-[0.35em]">
                    LEARN · DESIGN · CREATE · ELEVATE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOUR BLUEPRINT CARDS */}

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                icon: "✦",
                text: "Understand design fundamentals, visual communication and creative thinking.",
              },
              {
                number: "02",
                title: "Design",
                icon: "</>",
                text: "Learn Photoshop, Illustrator, typography, color and professional layouts.",
              },
              {
                number: "03",
                title: "Create",
                icon: "↗",
                text: "Turn your ideas into logos, branding, social media graphics and creative projects.",
              },
              {
                number: "04",
                title: "Elevate",
                icon: "◎",
                text: "Build your portfolio, improve your work and prepare for professional opportunities.",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                className={`group relative min-h-[220px] overflow-hidden rounded-[26px] border bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  index === 2 ? "border-green-300" : "border-gray-100"
                }`}
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 0.8
                  }px, ${mousePosition.y * (index + 1) * 0.8}px)`,
                }}
              >
                {/* BIG NUMBER */}

                <span className="absolute -right-1 -top-8 text-[100px] font-black leading-none text-gray-100 transition-colors duration-500 group-hover:text-green-50">
                  {step.number}
                </span>

                {/* ICON */}

                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 ${
                    index === 2
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                      : "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white"
                  }`}
                >
                  {step.icon}
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-7">
                  <h3 className="text-xl font-bold text-[#0b1728] transition-colors duration-300 group-hover:text-green-600">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                    {step.text}
                  </p>
                </div>

                {/* BOTTOM LINE */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MOVING SKILLS
      ===================================================== */}

      <section className="overflow-hidden border-y border-green-100 bg-white py-5">
        <div className="flex w-max animate-marquee gap-4">
          {[...movingSkills, ...movingSkills].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 rounded-full border border-green-100 bg-[#f4fbf7] px-7 py-3 text-sm font-bold text-green-700"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          INSTRUCTORS
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Our Instructors
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Learn from experienced
              <span className="text-green-600"> designers.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Learn creative skills from instructors focused on practical
              design and professional development.
            </p>
          </div>

          <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
            {/* TEACHER 1 */}

            <div
              className="group w-full max-w-[240px] text-center transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -4}px, ${
                  mousePosition.y * -4
                }px)`,
              }}
            >
              <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border-[8px] border-green-100 bg-green-50 shadow-xl transition-all duration-500 group-hover:border-green-500 group-hover:shadow-2xl">
                <img
                  src="/images/graphic1.jpg"
                  alt="Mam Maham"
                  className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-green-700">
                  01
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Mam Maham
                </h3>

                <p className="mt-2 text-sm font-medium text-green-700">
                  Graphic Design Instructor
                </p>
              </div>
            </div>

            {/* TEACHER 2 */}

            <div
              className="group w-full max-w-[280px] text-center transition-transform duration-500 md:-translate-y-8"
              style={{
                transform: `translate(${mousePosition.x * 5}px, ${
                  mousePosition.y * 5
                }px)`,
              }}
            >
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-[10px] border-green-200 bg-green-50 shadow-2xl transition-all duration-500 group-hover:border-green-600">
                <img
                  src="/images/graphic2.jpg"
                  alt="Sir Bilal"
                  className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-green-700">
                  02
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Sir Bilal
                </h3>

                <p className="mt-2 text-sm font-medium text-green-700">
                  Senior Graphic Design Instructor
                </p>
              </div>
            </div>

            {/* TEACHER 3 */}

            <div
              className="group w-full max-w-[240px] text-center transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * 4}px, ${
                  mousePosition.y * 4
                }px)`,
              }}
            >
              <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border-[8px] border-green-100 bg-green-50 shadow-xl transition-all duration-500 group-hover:border-green-500 group-hover:shadow-2xl">
                <img
                  src="/images/graphic3.jpg"
                  alt="Mam Atiqa"
className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-green-700">
                  03
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Mam Atiqa
                </h3>

                <p className="mt-2 text-sm font-medium text-green-700">
                  Graphic Design Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE OVERVIEW
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Course Overview
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn your creativity into
                <span className="block text-green-600">
                  professional skills.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                Learn the principles of graphic design and develop practical
                skills through creative projects, professional software and
                portfolio development.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
                The course focuses on practical design work, creative thinking,
                branding, social media graphics and freelancing preparation.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: "🎨",
                  title: "Creative",
                  text: "Build your creative design skills.",
                },
                {
                  icon: "💻",
                  title: "Practical",
                  text: "Hands-on design projects.",
                },
                {
                  icon: "🖼️",
                  title: "Portfolio",
                  text: "Create professional work.",
                },
                {
                  icon: "🚀",
                  title: "Career",
                  text: "Prepare for design opportunities.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-green-100 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    transform: `translate(${
                      mousePosition.x * (index + 1) * 2
                    }px, ${mousePosition.y * (index + 1) * 2}px)`,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT YOU WILL LEARN
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                What You&apos;ll Learn
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              From basics to
              <span className="text-green-600">
                {" "}
                professional design.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              Learn the essential areas of modern graphic design.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <div
                key={module.number}
                className="group rounded-3xl border border-green-100 bg-[#f4fbf7] p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 1.5
                  }px, ${mousePosition.y * (index + 1) * 1.5}px)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {module.icon}
                  </div>

                  <span className="text-4xl font-bold text-green-100">
                    {module.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900 group-hover:text-green-700">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {module.text}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-green-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Why Learn With Us
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              More than just
              <span className="block text-green-600">
                classroom learning.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1)
                  }px, ${mousePosition.y * (index + 1)}px)`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESIGN STRATEGIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#052e16] py-24">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-500/10 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 35}px, ${
              mousePosition.y * 25
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-3xl text-center transition-transform duration-500"
            style={{
              transform: `translate(${mousePosition.x * -3}px, ${
                mousePosition.y * -3
              }px)`,
            }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-400" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Design Strategies
              </span>

              <span className="h-[2px] w-10 bg-green-400" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Think creatively.
              <span className="block text-green-400">
                Design strategically.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Learn the strategies professional designers use to create
              attractive, meaningful and high-impact visual experiences.
            </p>
          </div>

          <div className="relative mt-16 overflow-hidden border-y border-white/10 py-5">
            <div className="flex w-max animate-marquee gap-4">
              {[...movingSkills, ...movingSkills].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-3 rounded-full border border-green-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-400/40 hover:bg-white/[0.08] hover:shadow-2xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 1.2
                  }px, ${mousePosition.y * (index + 1) * 1.2}px)`,
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500">
                  {strategy.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                  {strategy.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {strategy.text}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-green-500 transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>

          <div className="relative mt-14 overflow-hidden border-y border-white/10 py-5">
            <div className="flex w-max animate-marquee-reverse gap-4">
              {[...movingSkills, ...movingSkills].map((item, index) => (
                <div
                  key={`${item}-reverse-${index}`}
                  className="rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-900/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER OPPORTUNITIES
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
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
                  Career Opportunities
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Where can your
                <span className="block text-green-600">
                  creativity take you?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Build a strong portfolio and explore different career paths
                within the creative design industry.
              </p>

              <div className="mt-8 rounded-3xl bg-[#f4fbf7] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl">
                    🚀
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Creative Career
                    </p>

                    <p className="text-sm text-gray-500">
                      Turn your creativity into professional opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {careers.map((career, index) => (
                <div
                  key={career}
                  className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f4fbf7] p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-lg"
                  style={{
                    transform: `translate(${
                      mousePosition.x * (index + 1)
                    }px, ${mousePosition.y * (index + 1)}px)`,
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-gray-800">
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

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Frequently Asked Questions
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Questions?
              <span className="text-green-600"> We have answers.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
              Everything you need to know before starting the Graphic Design
              training program.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-green-200 hover:shadow-md"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 0.5
                  }px, ${mousePosition.y * (index + 1) * 0.5}px)`,
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-gray-900">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW CAN WE HELP / ENROLLMENT FORM
      ===================================================== */}

      <section
        id="enrollment"
        className="relative overflow-hidden bg-white py-24"
      >
        {/* BACKGROUND GLOW */}

        <div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-green-100/50 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT CONTENT */}

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
                  Let&apos;s Connect
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0b1728] sm:text-5xl">
                How can we
                <span className="block text-green-600">help you?</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                Have questions about Graphic Design training, course
                enrollment or career opportunities? Send us your details and
                our team will get back to you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f4fbf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                    🎨
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Course Guidance
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Get guidance about our Graphic Design training.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f4fbf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                    💬
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Ask Your Questions
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Tell us what you need help with.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-[#f4fbf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                    🚀
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Start Your Journey
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Take the first step toward your creative career.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div
              className="rounded-[32px] border border-green-100 bg-[#f4fbf7] p-6 shadow-2xl shadow-green-900/10 transition-transform duration-500 sm:p-8 lg:p-10"
              style={{
                transform: `translate(${mousePosition.x * 4}px, ${
                  mousePosition.y * 4
                }px)`,
              }}
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Get In Touch
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Tell us how we can help.
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form and our team will contact you.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-100 px-5 py-4 text-sm font-semibold text-green-800">
                  ✓ Thank you! Your request has been submitted successfully.
                </div>
              )}

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
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
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
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>
                </div>

                {/* PHONE + COURSE */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                      Course / Service
                    </label>

                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    >
                      <option>Graphic Design</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Digital Marketing</option>
                      <option>Video Editing</option>
                      <option>Ethical Hacking</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* HOW CAN WE HELP */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    How can we help?
                  </label>

                  <select
                    name="help"
                    value={formData.help}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                  >
                    <option value="">Select how we can help you</option>

                    <option value="course-information">
                      I need course information
                    </option>

                    <option value="course-fees">
                      I want to know about course fees
                    </option>

                    <option value="course-enrollment">
                      I want to enroll in the course
                    </option>

                    <option value="career-guidance">
                      I need career guidance
                    </option>

                    <option value="freelancing">
                      I want to learn freelancing
                    </option>

                    <option value="other">Something else</option>
                  </select>
                </div>

                {/* EXPERIENCE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Your Experience Level
                  </label>

                  <div className="grid grid-cols-3 gap-3">
                    {["Beginner", "Intermediate", "Advanced"].map(
                      (level) => (
                        <label
                          key={level}
                          className={`cursor-pointer rounded-2xl border px-3 py-3 text-center text-xs font-semibold transition-all duration-300 ${
                            formData.experience === level
                              ? "border-green-500 bg-green-600 text-white shadow-lg"
                              : "border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:text-green-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="experience"
                            value={level}
                            checked={formData.experience === level}
                            onChange={handleChange}
                            className="hidden"
                          />

                          {level}
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us a little about what you need..."
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                >
                  Send Your Request

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <p className="text-center text-xs leading-5 text-gray-400">
                  We&apos;ll review your request and get back to you with the
                  relevant information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#eaf7ef] py-24">
        <div
          className="pointer-events-none absolute h-96 w-96 rounded-full bg-green-300/30 blur-3xl transition-transform duration-700"
          style={{
            left: `calc(50% + ${mousePosition.x * 120}px)`,
            top: `calc(50% + ${mousePosition.y * 80}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
            Start Your Creative Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0b1728] sm:text-5xl">
            Ready to learn
            <span className="block text-green-600">Graphic Design?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Learn professional design skills, build your portfolio and
            prepare yourself for exciting creative opportunities.
          </p>

          <Link
            href="#enrollment"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
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