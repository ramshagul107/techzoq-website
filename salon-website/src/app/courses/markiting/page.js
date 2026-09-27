"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: "↗",
    title: "Social Media Marketing",
    description:
      "Creative campaigns that help your brand reach the right audience and build strong engagement.",
  },
  {
    icon: "⌕",
    title: "SEO & Growth",
    description:
      "Smart search strategies that improve your visibility and bring more potential customers.",
  },
  {
    icon: "✦",
    title: "Content Marketing",
    description:
      "Useful and engaging content that builds trust and supports long-term business growth.",
  },
];

const strategies = [
  {
    number: "01",
    title: "Audience Research",
    text: "Understand your audience, their needs, interests and online behavior before creating campaigns.",
  },
  {
    number: "02",
    title: "Content Strategy",
    text: "Create useful, creative and engaging content that connects your brand with the right people.",
  },
  {
    number: "03",
    title: "Social Media Growth",
    text: "Build a strong social presence with consistent campaigns, creative posts and meaningful engagement.",
  },
  {
    number: "04",
    title: "SEO Optimization",
    text: "Improve search visibility and attract potential customers through smart SEO strategies.",
  },
];

const faqs = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is the process of promoting a business, product or service through online channels such as social media, search engines, websites and content platforms.",
  },
  {
    question: "Which digital marketing services do you provide?",
    answer:
      "We provide social media marketing, SEO, content marketing, campaign strategy, online growth and other digital marketing solutions according to your business needs.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing can help your business reach a wider audience, increase brand awareness, generate leads and build stronger relationships with customers.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results depend on the strategy, industry and goals. Some campaigns can generate engagement quickly, while SEO and long-term growth strategies usually require consistent effort over time.",
  },
  {
    question: "Can you manage our social media?",
    answer:
      "Yes. We can help with content planning, creative campaigns, audience engagement and overall social media growth.",
  },
  {
    question: "Can you create a custom marketing strategy?",
    answer:
      "Absolutely. Every business is different, so we can create a customized strategy based on your audience, goals, industry and budget.",
  },
];

export default function DigitalMarketingPage() {
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

  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-[#0b1728]"
      onMouseMove={handleMouseMove}
    >

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f3fbf6]">

        {/* Background Glow LEFT */}
        <div
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-200/50 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 28}px, ${
              mousePosition.y * 22
            }px)`,
          }}
        />

        {/* Background Glow RIGHT */}
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-100/70 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid min-h-[680px] items-center gap-14 py-14 lg:grid-cols-2">

            {/* ================= LEFT CONTENT ================= */}
            <div
              className="order-2 transition-transform duration-500 lg:order-1"
              style={{
                transform: `translate(${mousePosition.x * -5}px, ${
                  mousePosition.y * -4
                }px)`,
              }}
            >

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Digital Marketing
                </span>

              </div>


              <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-tight text-[#0b1728] sm:text-6xl lg:text-[70px]">

                Grow Your

                <span className="block text-green-600">
                  Business.
                </span>

                <span className="block">
                  Reach More.
                </span>

                <span className="block">
                  Grow Better.
                </span>

              </h1>


              <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                We create smart digital marketing strategies that help
                businesses reach the right audience, build stronger brands
                and turn online attention into real growth.
              </p>


              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Grow Your Business

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>


                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-700"
                >
                  View Services
                </Link>

              </div>


              {/* STATS */}
              <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-7">

                <div className="group">

                  <p className="text-2xl font-extrabold text-[#0b1728] transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl">
                    50+
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Campaigns
                  </p>

                </div>


                <div className="group">

                  <p className="text-2xl font-extrabold text-[#0b1728] transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl">
                    3X
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Reach
                  </p>

                </div>


                <div className="group">

                  <p className="text-2xl font-extrabold text-[#0b1728] transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl">
                    24/7
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Growth
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT IMAGE ================= */}
            <div
              className="order-1 relative transition-transform duration-700 lg:order-2"
              style={{
                transform: `translate(${mousePosition.x * 9}px, ${
                  mousePosition.y * 9
                }px)`,
              }}
            >

              {/* Glow */}
              <div
                className="pointer-events-none absolute -inset-10 rounded-full bg-green-200/40 blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * -15}px, ${
                    mousePosition.y * -15
                  }px)`,
                }}
              />


              <div
                className="group relative"
                style={{
                  transform: `rotateY(${mousePosition.x * 2}deg) rotateX(${
                    mousePosition.y * -2
                  }deg)`,
                }}
              >

                <div className="relative h-[430px] overflow-hidden rounded-[32px] bg-white p-3 shadow-2xl shadow-green-900/10 transition-all duration-500 group-hover:-translate-y-2 sm:h-[540px]">

                  <img
                    src="/images/gallery13.jpg"
                    alt="Digital Marketing"
                    className="h-full w-full rounded-[25px] bg-[#f8faf9] object-contain object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />


                  <div className="pointer-events-none absolute inset-3 rounded-[25px] bg-gradient-to-t from-black/20 via-transparent to-transparent" />


                  {/* FLOATING CARD */}
                  <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-bold text-green-700">
                        ↗
                      </div>

                      <div>

                        <p className="text-sm font-bold text-[#162033]">
                          Digital Growth
                        </p>

                        <p className="text-xs text-slate-500">
                          Reach • Engage • Grow
                        </p>

                      </div>

                    </div>

                  </div>

                </div>


                {/* Decorative Circle */}
                <div
                  className="absolute -bottom-6 -right-6 -z-0 h-28 w-28 rounded-full bg-green-100 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    transform: `translate(${mousePosition.x * -10}px, ${
                      mousePosition.y * -8
                    }px)`,
                  }}
                />


                <div
                  className="absolute -left-5 top-10 -z-0 h-12 w-12 rounded-full bg-green-200 transition-transform duration-700 group-hover:scale-125"
                  style={{
                    transform: `translate(${mousePosition.x * 12}px, ${
                      mousePosition.y * 10
                    }px)`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MOVING STRIP
      ====================================================== */}
      <section className="overflow-hidden border-y border-green-100 bg-white py-5">

        <div className="flex w-max animate-marquee whitespace-nowrap">

          {[
            "DIGITAL MARKETING",
            "SOCIAL MEDIA",
            "SEO",
            "CONTENT STRATEGY",
            "BRAND GROWTH",
            "DIGITAL MARKETING",
            "SOCIAL MEDIA",
            "SEO",
            "CONTENT STRATEGY",
            "BRAND GROWTH",
          ].map((text, index) => (

            <div
              key={index}
              className="mx-6 flex items-center gap-5"
            >

              <span className="text-xl font-extrabold uppercase tracking-tight text-[#0b1728] sm:text-3xl">
                {text}
              </span>

              <span className="text-xl text-green-500 sm:text-3xl">
                ✦
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-end gap-8 md:grid-cols-[0.8fr_1.2fr]">

            <div
              className="transition-transform duration-500"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${
                  mousePosition.y * -2
                }px)`,
              }}
            >

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  Marketing Expertise
                </span>

              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#0b1728] sm:text-5xl">

                Turn Attention Into

                <span className="block text-green-600">
                  Growth.
                </span>

              </h2>

            </div>


            <p className="max-w-xl text-sm leading-7 text-slate-500 md:ml-auto">
              Our digital marketing solutions help your business connect
              with customers, build trust and create meaningful results
              through smart online strategies.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {features.map((feature, index) => (

              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-300 hover:shadow-xl"
                style={{
                  transform: `translate(
                    ${mousePosition.x * (index + 1) * 2}px,
                    ${mousePosition.y * (index + 1) * 2}px
                  )`,
                }}
              >

                <span className="absolute right-6 top-5 text-xs font-bold tracking-widest text-slate-200 group-hover:text-green-200">
                  0{index + 1}
                </span>


                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-bold text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                  {feature.icon}
                </div>


                <h3 className="mt-7 text-xl font-bold text-[#0b1728] group-hover:text-green-700">
                  {feature.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>


                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-700">

                  Explore

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </div>


                <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STRATEGIES
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f3fbf6] py-24">

        <div
          className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-200/40 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 15
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  Our Strategies
                </span>

              </div>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-[#0b1728] sm:text-5xl">

                Smart Strategies.

                <span className="block text-green-600">
                  Better Results.
                </span>

              </h2>

            </div>


            <p className="max-w-lg text-sm leading-7 text-slate-500 lg:ml-auto">
              We combine research, creativity and data-driven thinking to
              create marketing strategies that are built around your
              business goals.
            </p>

          </div>


          {/* STRATEGY CARDS */}

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {strategies.map((strategy, index) => (

              <div
                key={strategy.number}
                className={`group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-700 hover:border-green-300 hover:shadow-xl ${
                  index % 2 === 0
                    ? "md:hover:translate-x-3"
                    : "md:hover:-translate-x-3"
                }`}
                style={{
                  transform: `translateX(${
                    mousePosition.x *
                    (index % 2 === 0 ? -3 : 3)
                  }px)`,
                }}
              >

                <div className="flex items-start justify-between">

                  <span className="text-5xl font-extrabold text-green-100 transition-colors duration-500 group-hover:text-green-200">
                    {strategy.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-500 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-45">
                    ↗
                  </span>

                </div>


                <h3 className="mt-7 text-2xl font-bold text-[#0b1728] group-hover:text-green-700">
                  {strategy.title}
                </h3>


                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  {strategy.text}
                </p>


                <div className="mt-6 h-[2px] w-10 bg-green-500 transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              How We Work
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-[#0b1728] sm:text-5xl">

              From Strategy

              <span className="text-green-600">
                {" "}To Growth.
              </span>

            </h2>

          </div>


          <div className="relative mt-16 grid gap-10 md:grid-cols-4">

            {[
              [
                "01",
                "Research",
                "We understand your business, audience and competitors.",
              ],
              [
                "02",
                "Plan",
                "We create a focused marketing strategy based on your goals.",
              ],
              [
                "03",
                "Execute",
                "Our team launches campaigns and creates engaging content.",
              ],
              [
                "04",
                "Optimize",
                "We analyze results and improve campaigns for better growth.",
              ],
            ].map(([number, title, text], index) => (

              <div
                key={number}
                className={`group relative transition-transform duration-700 ${
                  index % 2 === 0
                    ? "hover:-translate-y-3"
                    : "hover:translate-y-3"
                }`}
                style={{
                  transform: `translateX(${
                    mousePosition.x *
                    (index % 2 === 0 ? -2 : 2)
                  }px)`,
                }}
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-500 group-hover:scale-110">
                  {number}
                </div>


                <h3 className="mt-6 text-xl font-bold text-[#0b1728] group-hover:text-green-700">
                  {title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>


                {index !== 3 && (
                  <div className="absolute left-14 top-7 hidden h-[1px] w-[calc(100%-20px)] bg-green-100 md:block" />
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-[#f5faf7] py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                Questions & Answers
              </span>

              <span className="h-[2px] w-10 bg-green-600" />

            </div>


            <h2 className="text-4xl font-extrabold text-[#0b1728] sm:text-5xl">

              Frequently Asked

              <span className="text-green-600">
                {" "}Questions.
              </span>

            </h2>


            <p className="mt-4 text-sm leading-7 text-slate-500">
              Everything you need to know about our digital marketing
              services and strategies.
            </p>

          </div>


          <div className="mt-12 space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-green-300 shadow-lg shadow-green-900/5"
                      : "border-slate-200"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >

                    <span className="text-sm font-bold text-[#0b1728] sm:text-base">
                      {faq.question}
                    </span>


                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-green-600 text-white"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      +
                    </span>

                  </button>


                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-6 pb-6 pr-16 text-sm leading-7 text-slate-500">
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
    PROJECT INQUIRY FORM
===================================================== */}
<section className="bg-white py-20 sm:py-24">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">

    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

      {/* LEFT CONTENT */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-green-600" />

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
            Start Your Project
          </span>
        </div>

        <h2 className="text-4xl font-extrabold leading-tight text-[#0b1728] sm:text-5xl">
          Let&apos;s Build Your
          <span className="block text-green-600">
            Digital Growth.
          </span>
        </h2>

        <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          Tell us about your business and marketing goals. Our team will
          create a strategy designed around your audience and growth needs.
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-bold text-green-700">
              ✓
            </div>
            <div>
              <p className="text-sm font-bold text-[#0b1728]">
                Custom Strategy
              </p>
              <p className="text-xs text-slate-500">
                Marketing plan according to your business.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-bold text-green-700">
              ↗
            </div>
            <div>
              <p className="text-sm font-bold text-[#0b1728]">
                Business Growth
              </p>
              <p className="text-xs text-slate-500">
                Focused on reach, engagement and conversions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-bold text-green-700">
              ✦
            </div>
            <div>
              <p className="text-sm font-bold text-[#0b1728]">
                Creative Marketing
              </p>
              <p className="text-xs text-slate-500">
                Fresh ideas that make your brand stand out.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* FORM */}
      <div
        className="rounded-[30px] border border-slate-200 bg-[#f5faf7] p-6 shadow-xl sm:p-8"
        style={{
          transform: `translate(
            ${mousePosition.x * 2}px,
            ${mousePosition.y * 2}px
          )`,
        }}
      >

        <form className="space-y-5">

          <div className="grid gap-5 sm:grid-cols-2">

            {/* NAME */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1728]">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0b1728] outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>


            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1728]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0b1728] outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

          </div>


          {/* PHONE */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1728]">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0b1728] outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* SERVICE */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1728]">
              Marketing Service
            </label>

            <select
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0b1728] outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Social Media Marketing</option>
              <option>SEO & Growth</option>
              <option>Content Marketing</option>
              <option>Digital Advertising</option>
              <option>Complete Digital Marketing</option>
            </select>
          </div>


          {/* BUDGET */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1728]">
              Project Budget
            </label>

            <select
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0b1728] outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select your budget
              </option>
              <option>Under $500</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $2,500</option>
              <option>$2,500+</option>
            </select>
          </div>


          {/* MESSAGE */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1728]">
              Project Details
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your business and marketing goals..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0b1728] outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* SUBMIT */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            Send Project Inquiry

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </button>

        </form>

      </div>

    </div>
  </div>
</section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#052e16] py-24">

        <div
          className="pointer-events-none absolute h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
          style={{
            left: `calc(50% + ${mousePosition.x * 120}px)`,
            top: `calc(50% + ${mousePosition.y * 80}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />


        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
            Ready To Grow?
          </p>


          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Let&apos;s Grow Your Brand Together.
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Build your online presence, reach the right audience and
            turn your digital efforts into meaningful business growth.
          </p>


          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400"
          >

            Start a Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>

          </Link>

        </div>

      </section>


      {/* =====================================================
          ANIMATION
      ====================================================== */}
      <style jsx global>{`

        @keyframes marquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

      `}</style>

    </main>
  );
}