"use client";

import Link from "next/link";
import { useState } from "react";

export default function EthicalHackingPage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Ethical Hacking Training",
    message: "",
  });

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

    alert(
      "Thank you! Your request has been submitted. Our team will contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Ethical Hacking Training",
      message: "",
    });
  };

  /* =====================================================
      COURSE MODULES
  ===================================================== */

  const courseModules = [
    {
      number: "01",
      title: "Cyber Security Fundamentals",
      text: "Learn the foundations of cyber security, threats, attacks and basic security concepts.",
      icon: "🛡️",
    },
    {
      number: "02",
      title: "Networking",
      text: "Understand networks, protocols, IP addresses, ports and how systems communicate.",
      icon: "🌐",
    },
    {
      number: "03",
      title: "Linux & Security Tools",
      text: "Learn Linux fundamentals and understand commonly used security and testing tools.",
      icon: "⌨️",
    },
    {
      number: "04",
      title: "Web Security",
      text: "Understand common web application vulnerabilities and secure development practices.",
      icon: "🔐",
    },
    {
      number: "05",
      title: "Vulnerability Assessment",
      text: "Learn how to identify, document and understand security weaknesses responsibly.",
      icon: "🔍",
    },
    {
      number: "06",
      title: "Penetration Testing",
      text: "Practice authorized security testing methodologies in controlled environments.",
      icon: "🎯",
    },
  ];

  /* =====================================================
      LEARN / PRACTICE BLUEPRINT
  ===================================================== */

  const hackingStrategiesTop = [
    "Reconnaissance",
    "Information Gathering",
    "Network Scanning",
    "Port Analysis",
    "Enumeration",
    "Web Security",
    "Vulnerability Assessment",
    "Security Testing",
    "Risk Analysis",
    "Security Reporting",
  ];

  const hackingStrategiesBottom = [
    "Linux Security",
    "Network Security",
    "Web Application Security",
    "Access Control",
    "Threat Detection",
    "Security Monitoring",
    "System Hardening",
    "Incident Response",
    "Security Awareness",
    "Ethical Testing",
  ];

  /* =====================================================
      ETHICAL HACKING BLUEPRINT / PROCESS
  ===================================================== */
  const ethicalBlueprintSteps = [
    {
      number: "01",
      icon: "⌕",
      title: "Reconnaissance",
      text: "Understand how responsible security assessments begin by gathering authorized information about systems, networks and potential attack surfaces.",
      points: [
        "Information Gathering",
        "Attack Surface Mapping",
        "Target & Scope Definition",
      ],
    },
    {
      number: "02",
      icon: "⌕",
      title: "Assess",
      text: "Identify vulnerabilities and security weaknesses in authorized environments while documenting findings clearly and responsibly.",
      points: [
        "Vulnerability Assessment",
        "Risk Identification",
        "Security Analysis",
      ],
    },
    {
      number: "03",
      icon: "↗",
      title: "Test",
      text: "Apply controlled and authorized security testing techniques to validate vulnerabilities and understand their potential impact.",
      points: [
        "Penetration Testing",
        "Web Security Testing",
        "Controlled Exploitation",
      ],
    },
    {
      number: "04",
      icon: "◎",
      title: "Secure",
      text: "Turn security findings into practical improvements through reporting, remediation guidance, system hardening and continuous awareness.",
      points: [
        "Security Reporting",
        "Remediation Guidance",
        "System Hardening",
      ],
    },
  ];

  /* =====================================================
      BENEFITS
  ===================================================== */

  const benefits = [
    {
      icon: "💻",
      title: "Practical Learning",
      text: "Learn through hands-on labs, exercises and controlled security environments.",
    },
    {
      icon: "🎓",
      title: "Professional Training",
      text: "Build a strong foundation for starting your career in cyber security.",
    },
    {
      icon: "💼",
      title: "Freelancing",
      text: "Learn how to build your portfolio and explore cyber security freelance opportunities.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      text: "Develop practical skills that can help you move toward professional security roles.",
    },
  ];

  /* =====================================================
      CAREERS
  ===================================================== */

  const careers = [
    "Ethical Hacker",
    "Cyber Security Analyst",
    "Penetration Tester",
    "Security Consultant",
    "Vulnerability Analyst",
    "SOC Analyst",
  ];

  /* =====================================================
      FAQ
  ===================================================== */

  const faqs = [
    {
      question: "How long is the Ethical Hacking course?",
      answer:
        "The complete course duration is 6 months and includes theoretical concepts, practical learning and security exercises.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The course starts with fundamental concepts and gradually moves toward practical cyber security and ethical hacking topics.",
    },
    {
      question: "Is practical training included?",
      answer:
        "Yes. Students learn through practical exercises and controlled environments designed to develop real-world security skills.",
    },
    {
      question: "Is freelancing included in the course?",
      answer:
        "Yes. Freelancing guidance is included to help students understand how to present their skills, build a portfolio and explore online opportunities.",
    },
    {
      question: "Is internship included?",
      answer:
        "Yes. After the training, students can get a 3-month internship opportunity for practical industry experience.",
    },
    {
      question: "What can I do after completing the course?",
      answer:
        "You can explore cyber security roles, ethical hacking, vulnerability assessment, penetration testing and related freelance opportunities.",
    },
  ];

  /* =====================================================
      INSTRUCTORS
  ===================================================== */

  const instructors = [
    {
      name: "Sir Tariq",
      image: "/images/teacher1.jpg",
    },
    {
      name: "Mam Ramsha Gul",
      image: "/images/teacher2.jpg",
    },
    {
      name: "Mam Ayesha",
      image: "/images/teacher3.jpg",
    },
    {
      name: "Sir Ahmad",
      image: "/images/teacher4.jpg",
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

  <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-16 sm:pt-18 lg:px-8 lg:pb-14 lg:pt-20">
    <div className="grid min-h-[540px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
      
      {/* LEFT CONTENT */}
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
            Cyber Security Training
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#0b1728] sm:text-4xl lg:text-[46px]">
          Learn
          <span className="block text-green-600">
            Ethical Hacking
          </span>
          Build
          <span className="block">
            Cyber Security Skills.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          Develop practical cyber security skills through a structured
          6-month Ethical Hacking course covering networking, Linux,
          web security, vulnerability assessment and authorized
          penetration testing.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#help-form"
            className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Join The Course

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

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
              6
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
              Months Course
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
              3
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
              Months Internship
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
              100%
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
              Practical Focus
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="relative transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${
            mousePosition.y * 10
          }px)`,
        }}
      >
        <div
          className="absolute -inset-10 rounded-full bg-green-200/30 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${
              mousePosition.y * -15
            }px)`,
          }}
        />

        <div
          className="group relative overflow-hidden rounded-[30px] bg-white p-3 shadow-2xl shadow-green-900/10 transition-all duration-500 hover:-translate-y-2"
          style={{
            transform: `rotateY(${mousePosition.x * 2}deg) rotateX(${
              mousePosition.y * -2
            }deg)`,
          }}
        >
          <div className="relative h-[320px] overflow-hidden rounded-[20px] sm:h-[390px] lg:h-[430px]">
            <img
              src="/images/gallery10.jpg"
              alt="Ethical Hacking and Cyber Security"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                🔒
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Ethical Hacking
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  Learn • Practice • Secure
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Course Overview
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Build skills for the
                <span className="block text-green-600">
                  digital security world.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                Our Ethical Hacking training is designed to take students
                from foundational concepts toward practical cyber security
                knowledge in a structured learning environment.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
                The focus is on responsible and authorized security testing,
                understanding vulnerabilities, improving security awareness
                and developing skills that can be used professionally.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: "⏱️",
                  title: "6 Months",
                  text: "Complete training program",
                },
                {
                  icon: "💻",
                  title: "Practical",
                  text: "Hands-on learning approach",
                },
                {
                  icon: "💼",
                  title: "Freelancing",
                  text: "Portfolio and freelance guidance",
                },
                {
                  icon: "🚀",
                  title: "3 Months",
                  text: "Internship opportunity",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-green-100 bg-[#f4fbf7] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
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
          LEARN / PRACTICE BLUEPRINT
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#052e16] py-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-400" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Learn • Practice • Secure
              </span>

              <span className="h-[2px] w-10 bg-green-400" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Learn the skills.
              <span className="block text-green-400">
                Practice the knowledge.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Explore the core methodologies and security practices used in
              ethical hacking, vulnerability assessment and responsible cyber
              security testing.
            </p>
          </div>

          {/* TOP MOVING CARDS */}

          <div className="relative mx-auto mt-14 max-w-[1600px] overflow-hidden px-4">
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#052e16] to-transparent sm:w-36" />

            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#052e16] to-transparent sm:w-36" />

            <div className="flex w-max animate-marquee-left gap-5">
              {[...hackingStrategiesTop, ...hackingStrategiesTop].map(
                (item, index) => (
                  <div
                    key={`learn-${index}`}
                    className="flex h-[58px] w-[205px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-green-400/20 bg-white/[0.07] px-5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:bg-green-500/10"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-7 flex justify-center px-6">
            <div className="rounded-full border border-green-400/30 bg-green-400/5 px-6 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              Learn
            </div>
          </div>

          {/* BOTTOM MOVING CARDS */}

          <div className="relative mx-auto mt-8 max-w-[1600px] overflow-hidden px-4">
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#052e16] to-transparent sm:w-36" />

            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#052e16] to-transparent sm:w-36" />

            <div className="flex w-max animate-marquee-right gap-5">
              {[...hackingStrategiesBottom, ...hackingStrategiesBottom].map(
                (item, index) => (
                  <div
                    key={`practice-${index}`}
                    className="flex h-[58px] w-[205px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-emerald-300/20 bg-white/[0.07] px-5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/60 hover:bg-emerald-500/10"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />

                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-7 flex justify-center px-6">
            <div className="rounded-full border border-green-400/30 bg-green-400/5 px-6 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              Practice
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marqueeLeft {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marqueeRight {
            0% {
              transform: translateX(-50%);
            }

            100% {
              transform: translateX(0);
            }
          }

          .animate-marquee-left {
            animation: marqueeLeft 32s linear infinite;
          }

          .animate-marquee-right {
            animation: marqueeRight 34s linear infinite;
          }

          .animate-marquee-left:hover,
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .animate-marquee-left {
              animation-duration: 24s;
            }

            .animate-marquee-right {
              animation-duration: 26s;
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          OUR BLUEPRINT FOR REAL SECURITY IMPACT
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
                <span className="block text-green-600">security impact.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                A responsible security testing process that helps you move from
                discovery to assessment, authorized testing and stronger
                cyber security protection.
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

              <div className="relative flex items-center justify-center overflow-hidden">
                <div className="flex items-center">
                  {[
                    { icon: "→" },
                    { icon: "→" },
                    { icon: "→" },
                    { icon: "◎" },
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
                  DISCOVER • ASSESS • TEST • SECURE
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ethicalBlueprintSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[26px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/10"
                style={{
                  transform: `translateY(${
                    mousePosition.y * (index + 1) * 0.7
                  }px)`,
                }}
              >
                <span className="pointer-events-none absolute -right-1 -top-7 text-[90px] font-black leading-none text-gray-100 transition-colors duration-500 group-hover:text-green-50">
                  {step.number}
                </span>

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d9f9e7] text-lg font-bold text-green-700 transition-all duration-500 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-600/20">
                  {step.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="mt-7 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-700">
                    {step.title}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-sm leading-6 text-gray-500">
                    {step.text}
                  </p>

                  <div className="mt-5 space-y-3">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-xs text-gray-500"
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
            {ethicalBlueprintSteps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-2 rounded-full border border-green-100 bg-white px-3 py-2"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-[9px] font-bold text-white">
                  {step.number}
                </span>

                <span className="text-[10px] font-semibold text-gray-600">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT YOU WILL LEARN
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
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
              From fundamentals to
              <span className="text-green-600"> practical skills.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              A structured curriculum covering important areas of ethical
              hacking and cyber security.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseModules.map((module, index) => (
              <div
                key={module.number}
                className="group flex h-full min-h-[300px] flex-col rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 1.5
                  }px, ${mousePosition.y * (index + 1) * 1.5}px)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {module.icon}
                  </div>

                  <span className="text-4xl font-bold text-green-100">
                    {module.number}
                  </span>
                </div>

                <h3 className="mt-7 min-h-[56px] text-xl font-bold text-gray-900 group-hover:text-green-700">
                  {module.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                  {module.text}
                </p>

                <div className="mt-6 h-1 w-10 shrink-0 rounded-full bg-green-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-white py-24">
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

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group flex h-full min-h-[280px] flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-xl"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1)
                  }px, ${mousePosition.y * (index + 1)}px)`,
                }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FREELANCING + INTERNSHIP
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group rounded-[30px] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                💼
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Freelancing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Turn your skills into
                <span className="text-green-600"> opportunities.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Learn how to present your cyber security skills, create a
                professional portfolio and understand how to approach
                freelance opportunities responsibly.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Portfolio guidance",
                  "Freelancing fundamentals",
                  "Client communication",
                  "Professional profile building",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#052e16] p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-2xl">
                🚀
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-green-400">
                Internship
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                3 Months of
                <span className="text-green-400"> practical experience.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                After completing the training, students can gain practical
                experience through a 3-month internship and become familiar
                with professional workflows and project environments.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Practical Experience",
                  "Professional Environment",
                  "Real Project Exposure",
                  "Career Preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              <span className="text-green-600"> instructors.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Meet the instructors guiding students through practical cyber
              security learning.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((teacher, index) => (
              <div
                key={teacher.name}
                className="group flex flex-col items-center text-center transition-transform duration-500"
                style={{
                  transform: `translate(${
                    mousePosition.x * (index + 1) * 2
                  }px, ${mousePosition.y * (index + 1) * 2}px)`,
                }}
              >
                <div className="relative h-52 w-52">
                  <div className="absolute inset-0 rounded-full border-4 border-green-100 transition-all duration-500 group-hover:scale-105 group-hover:border-green-500" />

                  <div className="absolute inset-2 overflow-hidden rounded-full bg-[#f4fbf7] shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-900/20">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#052e16]/0 opacity-0 transition-all duration-500 group-hover:bg-[#052e16]/75 group-hover:opacity-100">
                      <div className="px-4 text-center text-white">
                        <p className="text-lg font-bold">{teacher.name}</p>

                        <div className="mx-auto mt-2 h-[2px] w-8 bg-green-400" />

                        <p className="mt-2 text-xs text-green-100">
                          Cyber Security Instructor
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-4 h-5 w-5 rounded-full border-4 border-white bg-green-500 transition-transform duration-300 group-hover:scale-125" />
                </div>

                <div className="mt-6 h-16">
                  <h3 className="text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-green-700">
                    {teacher.name}
                  </h3>

                  <p className="mt-1 text-sm text-green-700">
                    Cyber Security Instructor
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER OPPORTUNITIES
      ===================================================== */}

      <section className="bg-[#f4fbf7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Career Opportunities
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Where can these skills
                <span className="block text-green-600">take you?</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Cyber security skills can open different professional paths.
                Continue learning, build experience and choose the area that
                matches your interests.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {careers.map((career, index) => (
                <div
                  key={career}
                  className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                Frequently Asked Questions
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Questions?
              <span className="text-green-600"> We have answers.</span>
            </h2>
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
          HOW WE CAN HELP + FORM
      ===================================================== */}

      <section
        id="help-form"
        className="relative overflow-hidden bg-[#f3fbf6] py-24"
      >
        <div
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-200/40 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-green-200/30 blur-3xl transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                How We Can Help
              </span>

              <span className="h-[2px] w-10 bg-green-600" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#0b1728] sm:text-4xl lg:text-5xl">
              Ready to start your
              <span className="block text-green-600">
                cyber security journey?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Have questions about Ethical Hacking training, freelancing,
              internship or career opportunities? Send us your details and
              our team will guide you.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div
              className="space-y-5"
              style={{
                transform: `translate(${mousePosition.x * -4}px, ${
                  mousePosition.y * -4
                }px)`,
              }}
            >
              <div className="rounded-[28px] bg-[#052e16] p-8 text-white shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-2xl">
                  🛡️
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  How can we help?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  Our team can guide you about the course, learning path,
                  practical training and career opportunities.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Ethical Hacking Course",
                    "Cyber Security Training",
                    "Freelancing Guidance",
                    "3-Month Internship",
                    "Career Guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl">
                      📞
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                        Contact Us
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-800">
                        Let&apos;s discuss your goals
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl">
                      💬
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                        Get Guidance
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-800">
                        We&apos;re here to help
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-[30px] border border-green-100 bg-white p-7 shadow-xl shadow-green-900/5 sm:p-10"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${
                  mousePosition.y * 3
                }px)`,
              }}
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
                  Get In Touch
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Tell us how we can help.
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-gray-200 bg-[#f9fcfa] px-5 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-gray-200 bg-[#f9fcfa] px-5 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03XX XXXXXXX"
                      className="w-full rounded-2xl border border-gray-200 bg-[#f9fcfa] px-5 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      I&apos;m Interested In
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 bg-[#f9fcfa] px-5 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    >
                      <option>Ethical Hacking Training</option>
                      <option>Cyber Security Training</option>
                      <option>Freelancing Guidance</option>
                      <option>Internship</option>
                      <option>Career Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need help with..."
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-[#f9fcfa] px-5 py-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-green-600/30"
                >
                  Send Request

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <p className="text-center text-xs text-gray-400">
                  We&apos;ll use your information only to respond to your
                  request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#eaf8ef] py-24">
        <div
          className="pointer-events-none absolute h-72 w-72 rounded-full bg-green-300/30 blur-3xl transition-transform duration-700"
          style={{
            left: `calc(50% + ${mousePosition.x * 120}px)`,
            top: `calc(50% + ${mousePosition.y * 80}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">
            Start Your Cyber Security Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0b1728] sm:text-5xl">
            Ready to learn
            <span className="block text-green-700">
              Ethical Hacking?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Join our 6-month training program, develop practical skills,
            explore freelancing opportunities and gain experience through a
            3-month internship.
          </p>

          <a
            href="#help-form"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-green-700/30"
          >
            Enroll Now

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
