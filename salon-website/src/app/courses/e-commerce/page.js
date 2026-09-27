"use client";

import { useState } from "react";
import Link from "next/link";

const strategies = [
  {
    number: "01",
    phase: "STRATEGIZE",
    icon: "⌕",
    title: "Plan",
    text: "Understand your market, customers and products before building your online store.",
    points: [
      "Market Research",
      "Customer Journey",
      "Product Strategy",
      "Business Goals",
    ],
  },
  {
    number: "02",
    phase: "BUILD",
    icon: "</>",
    title: "Build",
    text: "Create a modern shopping experience with a strong store structure and engaging design.",
    points: [
      "Store Design",
      "Product Catalog",
      "Shopping Experience",
      "Responsive Design",
    ],
  },
  {
    number: "03",
    phase: "LAUNCH",
    icon: "↗",
    title: "Launch",
    text: "Prepare your store for customers with secure payments, testing and performance optimization.",
    points: [
      "Payment Integration",
      "Testing",
      "Performance",
      "Security",
    ],
  },
  {
    number: "04",
    phase: "GROW",
    icon: "◎",
    title: "Grow",
    text: "Keep improving your online business through marketing, analytics and continuous optimization.",
    points: [
      "SEO & Marketing",
      "Analytics",
      "Conversion Optimization",
      "Continuous Growth",
    ],
  },
];

const curriculum = [
  {
    number: "01",
    title: "E-Commerce Fundamentals",
    text: "Understand how modern e-commerce businesses work, from products and customers to orders and online sales.",
  },
  {
    number: "02",
    title: "Store Planning",
    text: "Learn how to plan your online store structure, categories, products and customer journey.",
  },
  {
    number: "03",
    title: "UI/UX & Store Design",
    text: "Create clean, modern and user-friendly shopping experiences that encourage customers to buy.",
  },
  {
    number: "04",
    title: "Product Management",
    text: "Learn how to organize products, categories, pricing, variations and product information.",
  },
  {
    number: "05",
    title: "Shopify",
    text: "Explore Shopify and learn how to create, customize and manage professional online stores.",
  },
  {
    number: "06",
    title: "WooCommerce",
    text: "Learn how WooCommerce works with WordPress and how to build flexible online stores.",
  },
  {
    number: "07",
    title: "Payment Integration",
    text: "Understand secure online payment systems and how payment methods connect with e-commerce stores.",
  },
  {
    number: "08",
    title: "Orders & Customers",
    text: "Learn how to manage orders, customers, shipping and the complete shopping workflow.",
  },
  {
    number: "09",
    title: "SEO & Marketing",
    text: "Discover practical strategies for improving visibility, attracting customers and increasing sales.",
  },
  {
    number: "10",
    title: "Analytics & Growth",
    text: "Use analytics and performance data to understand customers and continuously improve your store.",
  },
];

const platforms = [
  {
    icon: "S",
    title: "Shopify",
    text: "Build and manage modern online stores with Shopify's powerful e-commerce ecosystem.",
  },
  {
    icon: "W",
    title: "WooCommerce",
    text: "Create flexible and customizable online stores using WordPress and WooCommerce.",
  },
  {
    icon: "</>",
    title: "Custom E-Commerce",
    text: "Develop custom e-commerce platforms designed around specific business requirements.",
  },
  {
    icon: "◎",
    title: "Business Growth",
    text: "Connect your store with marketing, analytics and automation to scale your business.",
  },
];

const faqs = [
  {
    question: "Will I learn Shopify?",
    answer:
      "Yes. The course introduces Shopify store creation, customization, product management and essential e-commerce workflows.",
  },
  {
    question: "Will I learn WooCommerce?",
    answer:
      "Yes. You will understand how WooCommerce works with WordPress and how to create and manage an online store.",
  },
  {
    question: "Will I learn payment integration?",
    answer:
      "Yes. You will learn the concepts behind payment integration, checkout systems and secure online transactions.",
  },
  {
    question: "Are practical projects included?",
    answer:
      "Yes. Practical exercises and project-based learning help you apply e-commerce concepts to real-world store scenarios.",
  },
  {
    question: "Can I use these skills for freelancing?",
    answer:
      "Yes. E-commerce development, Shopify, WooCommerce and store management skills can be used to offer services to businesses and clients.",
  },
];

export default function EcommercePage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setMousePosition({
      x,
      y,
    });
  };

  return (
    <main
      className="min-h-screen overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        .ecommerce-marquee-left {
          animation: ecommerceMoveLeft 30s linear infinite;
        }

        .ecommerce-marquee-right {
          animation: ecommerceMoveRight 30s linear infinite;
        }

        .ecommerce-marquee-left:hover,
        .ecommerce-marquee-right:hover {
          animation-play-state: paused;
        }

        @keyframes ecommerceMoveLeft {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes ecommerceMoveRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
        }

        .ecommerce-floating {
          animation: ecommerceFloat 5s ease-in-out infinite;
        }

        @keyframes ecommerceFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f3fbf6]">
        {/* LEFT GLOW */}

        <div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200/40 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        {/* RIGHT GLOW */}

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-100/60 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        {/* HERO CONTAINER */}

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

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
                  E-Commerce Solutions
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.04] tracking-tight text-[#071426] sm:text-6xl lg:text-6xl">
                Build
                <span className="block text-green-600">
                  Better
                </span>
                <span className="block">
                  Online Stores.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Learn how to build modern e-commerce stores, create powerful
                shopping experiences and help businesses sell their products
                online through practical learning and real-world projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
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

              <div className="mt-12 grid grid-cols-3 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-2xl font-bold text-[#071426]">
                    3
                  </p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    Platforms
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#071426]">
                    10+
                  </p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    Topics
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#071426]">
                    100%
                  </p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    Practical
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT HERO CARD
            ================================================= */}

            <div
              className="relative transition-transform duration-500 ease-out"
              style={{
                transform: `
                  perspective(1000px)
                  rotateX(${mousePosition.y * -4}deg)
                  rotateY(${mousePosition.x * 4}deg)
                  translate(${mousePosition.x * 5}px, ${
                  mousePosition.y * 5
                }px)
                `,
              }}
            >
              {/* OUTER GLOW */}

              <div
                className="pointer-events-none absolute -inset-8 rounded-[45px] bg-green-300/30 blur-3xl transition-transform duration-500"
                style={{
                  transform: `translate(${mousePosition.x * 18}px, ${
                    mousePosition.y * 18
                  }px)`,
                }}
              />

              {/* WHITE CARD */}

              <div className="relative mx-auto w-full max-w-[540px] overflow-hidden rounded-[32px] border border-green-100 bg-white p-4 shadow-2xl">
                {/* GREEN INNER CARD */}

                <div
                  className="relative overflow-hidden rounded-[25px] bg-[#063f2b] p-6 transition-transform duration-300 sm:p-8"
                  style={{
                    transform: `translate(${mousePosition.x * 3}px, ${
                      mousePosition.y * 3
                    }px)`,
                  }}
                >
                  {/* MOVING LIGHT */}

                  <div
                    className="pointer-events-none absolute h-40 w-40 rounded-full bg-green-400/20 blur-3xl transition-all duration-300"
                    style={{
                      left: `calc(50% + ${mousePosition.x * 80}px)`,
                      top: `calc(50% + ${mousePosition.y * 60}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* TOP */}

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-300">
                      Online Business
                    </span>

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
                      LIVE
                    </span>
                  </div>

                  {/* GROWTH */}

                  <div
                    className="relative z-10 mt-8 transition-transform duration-500"
                    style={{
                      transform: `translate(${mousePosition.x * -4}px, ${
                        mousePosition.y * -4
                      }px)`,
                    }}
                  >
                    <div className="text-sm text-white/60">
                      Store Growth
                    </div>

                    <div className="mt-2 text-5xl font-black text-white">
                      +86%
                    </div>
                  </div>

                  {/* CHART */}

                  <div
                    className="relative z-10 mt-8 flex h-28 items-end gap-3"
                    style={{
                      transform: `translate(${mousePosition.x * 5}px, ${
                        mousePosition.y * 3
                      }px)`,
                    }}
                  >
                    {[35, 48, 42, 62, 58, 76, 90].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="group/bar relative flex-1 rounded-t-lg bg-green-400/70 transition-all duration-500 hover:bg-green-300"
                          style={{
                            height: `${height}%`,
                            transform: `translateY(${
                              mousePosition.y *
                              (index % 2 === 0 ? 2 : -2)
                            }px)`,
                          }}
                        >
                          <div className="pointer-events-none absolute inset-0 rounded-t-lg bg-green-300 opacity-0 blur-md transition-opacity duration-300 group-hover/bar:opacity-60" />
                        </div>
                      )
                    )}
                  </div>

                  {/* STATS */}

                  <div
                    className="relative z-10 mt-8 grid grid-cols-3 gap-3"
                    style={{
                      transform: `translate(${mousePosition.x * -3}px, ${
                        mousePosition.y * -3
                      }px)`,
                    }}
                  >
                    <div className="rounded-2xl bg-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                      <p className="text-xs text-white/50">
                        Orders
                      </p>

                      <p className="mt-2 text-lg font-bold text-white">
                        1.2K
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                      <p className="text-xs text-white/50">
                        Sales
                      </p>

                      <p className="mt-2 text-lg font-bold text-white">
                        24K
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                      <p className="text-xs text-white/50">
                        Growth
                      </p>

                      <p className="mt-2 text-lg font-bold text-green-300">
                        +32%
                      </p>
                    </div>
                  </div>

                  {/* CURSOR LIGHT DOT */}

                  <div
                    className="pointer-events-none absolute h-3 w-3 rounded-full bg-green-300/80 blur-[2px] transition-all duration-200"
                    style={{
                      left: `calc(50% + ${mousePosition.x * 120}px)`,
                      top: `calc(50% + ${mousePosition.y * 90}px)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOVING STRATEGY
      ===================================================== */}

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                E-Commerce Strategy
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              From Idea To
              <span className="text-green-600">
                {" "}Online Growth.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
              A practical e-commerce strategy that takes your business from
              planning and store development to launch and long-term growth.
            </p>
          </div>
        </div>

        {/* MOVING TEXT */}

        <div className="relative mb-12 overflow-hidden border-y border-green-100 bg-[#f3fbf6] py-5">
          <div className="ecommerce-marquee-left flex w-max whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-10 px-5 text-3xl font-black uppercase tracking-tight text-green-700/20 sm:text-5xl"
              >
                <span>PLAN</span>
                <span>•</span>
                <span>BUILD</span>
                <span>•</span>
                <span>LAUNCH</span>
                <span>•</span>
                <span>GROW</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGY CARDS */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.number}
                className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${
                    mousePosition.y * (index + 1) * 2
                  }px)`,
                }}
              >
                <div className="absolute right-4 top-0 text-[100px] font-black leading-none text-gray-100 transition-colors duration-500 group-hover:text-green-50">
                  {strategy.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-sm font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      {strategy.icon}
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-green-600">
                      {strategy.phase}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {strategy.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {strategy.text}
                  </p>

                  <div className="mt-6 space-y-3">
                    {strategy.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BLUEPRINT
      ===================================================== */}

      <section className="bg-[#f8fbf9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Our Blueprint
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-[#071426] sm:text-5xl">
                Our blueprint for real
                <span className="block text-green-600">
                  e-commerce growth.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                A proven process that helps you move from an idea to a
                complete, professional and production-ready online store.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-[#056437] p-7 shadow-xl sm:p-10">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-300/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  {["→", "→", "→", "◎"].map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-20 w-20 rotate-45 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform duration-500 hover:scale-105 sm:h-24 sm:w-24"
                    >
                      <span className="-rotate-45 text-xl font-bold text-green-600 sm:text-2xl">
                        {icon}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-white">
                  PLAN • BUILD • LAUNCH • GROW
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                icon: "⌕",
                title: "Strategize",
                points: [
                  "Market Research",
                  "Customer Journey",
                  "Product Strategy",
                  "Business Goals",
                ],
              },
              {
                number: "02",
                icon: "</>",
                title: "Build",
                points: [
                  "Store Design",
                  "Product Catalog",
                  "Shopping Experience",
                  "Responsive Design",
                ],
              },
              {
                number: "03",
                icon: "↗",
                title: "Launch",
                points: [
                  "Payment Integration",
                  "Testing",
                  "Performance",
                  "Security",
                ],
              },
              {
                number: "04",
                icon: "◎",
                title: "Grow",
                points: [
                  "SEO & Marketing",
                  "Analytics",
                  "Conversion Optimization",
                  "Continuous Improvement",
                ],
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="absolute right-3 top-0 text-[90px] font-black leading-none text-gray-100 transition-colors duration-500 group-hover:text-green-50">
                  {item.number}
                </div>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-sm font-bold text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <div className="mt-6 space-y-4">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORMS
      ===================================================== */}

      <section className="bg-[#052e16] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
              E-Commerce Platforms
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Build. Sell. Scale.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
              Explore the technologies and platforms used to create powerful
              online shopping experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/[0.08]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-lg font-black text-green-400">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
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
                E-Commerce Curriculum
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Learn E-Commerce
              <span className="block text-green-600">
                step by step.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              A practical curriculum designed to take you from e-commerce
              fundamentals to professional online stores, marketing and
              business growth.
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
                  }px, ${
                    mousePosition.y * (index % 2 + 1) * 2
                  }px)`,
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
              E-Commerce Course Details
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Learn. Build. Sell. Grow.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🛒",
                title: "Store Building",
                text: "Learn how to create professional online stores",
              },
              {
                icon: "📦",
                title: "Product Management",
                text: "Manage products, categories and shopping workflows",
              },
              {
                icon: "💳",
                title: "Payments",
                text: "Understand checkout and online payment systems",
              },
              {
                icon: "🚀",
                title: "Business Growth",
                text: "Learn SEO, marketing, analytics and growth strategies",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/[0.08]"
              >
                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to know.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-green-100 bg-[#f8fbf9] p-6 transition-all duration-300 hover:border-green-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-gray-900">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-transform duration-300 group-open:rotate-45">
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
          ENROLLMENT / CONTACT
      ===================================================== */}

      <section
        id="ecommerce-enrollment"
        className="relative overflow-hidden bg-white py-24"
      >
        <div
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 15
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -15
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[35px] border border-green-100 bg-[#052e16] shadow-2xl lg:grid-cols-2">
            {/* LEFT */}

            <div className="relative overflow-hidden p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064b25] shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-400 text-sm font-bold text-green-400">
                    🛒
                  </div>
                </div>

                <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
                  Build your
                  <span className="block text-green-400">
                    e-commerce future.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                  Learn practical e-commerce skills, build real projects and
                  prepare yourself for opportunities in e-commerce development,
                  freelancing and online business.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "E-Commerce Store Development",
                    "Shopify & WooCommerce",
                    "Product & Order Management",
                    "Payment Integration",
                    "SEO & Marketing",
                    "Freelancing Guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-sm font-bold text-green-400">
                        ✓
                      </span>

                      <span className="text-sm text-white/85">
                        {item}
                      </span>
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
                  {/* NAME + EMAIL */}

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
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>
                  </div>

                  {/* PHONE + INTEREST */}

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
                        defaultValue="E-Commerce Course"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      >
                        <option>E-Commerce Course</option>
                        <option>Shopify</option>
                        <option>WooCommerce</option>
                        <option>Custom E-Commerce</option>
                        <option>Store Development</option>
                        <option>Freelancing Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#071426]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Tell us about your e-commerce project..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f9fbfa] px-5 py-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                  >
                    Send Message

                    <span>→</span>
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

      <section className="bg-[#f3fbf6] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
            Start Building
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#071426] sm:text-5xl">
            Ready to build your
            <span className="block text-green-600">
              online store?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Whether you are starting a new store or improving an existing
            business, we can help turn your e-commerce idea into a powerful
            digital experience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Start a Project

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-600">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}