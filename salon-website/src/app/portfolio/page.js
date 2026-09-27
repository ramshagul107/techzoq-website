"use client";

import Link from "next/link";

const projects = [
  {
    image: "/images/1.jpg",
    name: "Connairo",
  },
  {
    image: "/images/2.jpg",
    name: "Hamidiye",
  },
  {
    image: "/images/3.jpg",
    name: "Pakka Khata",
  },
  {
    image: "/images/4.jpg",
    name: "CLKD Pay",
  },
  {
    image: "/images/5.jpg",
    name: "Zing",
  },
  {
    image: "/images/6.jpg",
    name: "SPIXHOST",
  },
  {
    image: "/images/7.jpg",
    name: "EOLL Recruitment",
  },
  {
    image: "/images/8.jpg",
    name: "Bilal",
  },
  {
    image: "/images/9.jpg",
    name: "Corner",
  },
  {
    image: "/images/10.jpg",
    name: "Digital",
  },
];

const features = [
  {
    icon: "📊",
    title: "Mandi Accounting",
  },
  {
    icon: "📈",
    title: "Party Ledgers",
  },
  {
    icon: "⚡",
    title: "WhatsApp Billing",
  },
];

const portfolioProjects = [
  {
    number: "01",
    image: "/images/card1.jpg",
    name: "Staffing Solution 24/7",
    category: "HR Technology",
    stat: "Recruitment",
    description:
      "HR technology platform managing recruitment, payroll, compliance, and workforce analytics for staffing operations across the UK.",
    tags: [
      "Web Platform",
      "Payroll System",
      "Compliance Tools",
    ],
  },

  {
    number: "02",
    image: "/images/card2.jpg",
    name: "BILAL ENGINEERING",
    category: "Hosting & Operations",
    stat: "Project Management",
    description:
      "A high-performance industrial engineering platform built for large-scale product management and technical workflows.",
    tags: [
      "Hosting Platform",
      "Customer Support",
      "Billing Management",
    ],
  },

  {
    number: "03",
    image: "/images/card3.jpg",
    name: "CLKD Pay",
    category: "Fintech",
    stat: "Real Time Processing",
    description:
      "Enterprise-grade financial technology platform powering banking operations with real-time transaction processing and regulatory compliance.",
    tags: [
      "Fintech Platform",
      "Payment Processing",
      "Compliance Systems",
    ],
  },

  {
    number: "04",
    image: "/images/card12.jpg",
    name: "CONNAIRO",
    category: "Mobile Development",
    stat: "50+ Businesses",
    description:
      "Complete ERP solution managing project lifecycles, resource allocation, and financial controls for large-scale construction operations.",
    tags: [
      "React Native",
      "Node.js",
      "Firebase",
      "ERP Workflows",
    ],
  },

  {
    number: "05",
    image: "/images/card4.jpg",
    name: "HAMIDIYE FOUNDATION",
    category: "Web Development",
    stat: "ERP · Project Management",
    description:
      "Finance and donation management system for all Pakistan with bank reconciliation module.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Bank Reconciliation",
    ],
  },

  {
    number: "06",
    image: "/images/card7.jpg",
    name: "Zing",
    category: "E-commerce",
    stat: "Real-time Order Tracking",
    description:
      "High-performance E-commerce ecosystem with custom mobile apps and automated workflows designed for a connected shopping experience.",
    tags: [
      "Ecommerce",
      "Mobile Apps",
      "Order Tracking",
      "Automation",
    ],
  },

  {
    number: "07",
    image: "/images/card10.jpg",
    name: "SPIXHOST",
    category: "Hosting & Operations",
    stat: "Service Automation",
    description:
      "Enterprise hosting and operations platform featuring automated customer support and billing management.",
    tags: [
      "Hosting Platform",
      "Billing Automation",
      "Support Tools",
      "Operations",
    ],
  },

  {
    number: "08",
    image: "/images/card8.jpg",
    name: "EMPLOYMENT OF LONDON LIMITED",
    category: "HR Technology",
    stat: "10,000+ Active Users",
    description:
      "HR technology platform managing recruitment, payroll, compliance, and workforce analytics for staffing operations across the UK.",
    tags: [
      "Recruitment CRM",
      "Payroll",
      "Compliance",
      "Analytics",
    ],
  },

  {
    number: "09",
    image: "/images/card9.jpg",
    name: "DIGITAL OTTERS",
    category: "HR Technology",
    stat: "Workforce Optimization",
    description:
      "A hybrid management suite integrating AI-driven HR operations and automated social media analytics.",
    tags: [
      "HR Operations",
      "Social Analytics",
      "AI Assistance",
      "Dashboards",
    ],
  },
  {
    number: "11",
    image: "/images/card11.jpg",
    name: "MAR GROUP OF COMPANIES",
    category: "ERP",
    stat: "Real Time Processing",
    description:
      "Multi-subsidiary operations with unified group reporting and cross-border visibility, providing a consolidated view across all business units in real-time.",
    tags: [
      "Group ERP",
      "Subsidiary Reporting",
      "Dashboards",
      "Finance Controls",
    ],
  },

  {
    number: "12",
    image: "/images/card13.jpg",
    name: "Pakka Khata",
    category: "ERP / Mandi Operations",
    stat: "Business Management",
    description:
      "Mandi-first ERP and digital khata platform designed for sales, purchases, party ledgers, inventory, reports, WhatsApp billing, and Urdu/Roman Urdu workflows.",
    tags: [
      "Mandi ERP",
      "Accounting",
      "Party Ledgers",
      "Digital Khata",
    ],
  },
  {
  number: "13",
  image: "/images/card16.jpg",
  name: "CORNER",
  category: "Web Development",
  stat: "Digital Platform",
  description:
    "A modern digital platform designed to simplify business operations, customer engagement, and day-to-day workflow management.",
  tags: [
    "Web Platform",
    "Responsive Design",
    "Business Tools",
    "Modern UI",
  ],
},
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111827]">

      {/* ========================================================= */}
      {/* ===================== PORTFOLIO HERO ==================== */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-14 sm:py-16 lg:py-20">

        <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-green-100/70 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[280px] w-[280px] rounded-full bg-emerald-100/60 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-50 px-5 py-2 text-sm font-bold tracking-[0.18em] text-green-600">
            <span className="text-green-500">
              ✦
            </span>
            OUR LATEST WORKS
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[72px]">

            <span className="block text-[#111827]">
              Engineering Digital
            </span>

            <span className="mt-2 block text-green-600">
              Excellence at Scale
            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl">
            We bridge the gap between abstract concepts and robust digital
            realities. Our portfolio demonstrates a track record of delivering{" "}
            <span className="font-bold text-[#111827]">
              high-performance architectures
            </span>{" "}
            that empower businesses to lead in their respective markets.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="#projects"
              className="group flex min-w-[200px] items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white shadow-[0_10px_30px_rgba(22,163,74,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-[0_15px_40px_rgba(22,163,74,0.30)]"
            >
              Explore Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="flex min-w-[200px] items-center justify-center rounded-xl border-2 border-green-600 bg-white px-7 py-3.5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white hover:shadow-[0_10px_30px_rgba(22,163,74,0.20)]"
            >
              Get in Touch
            </Link>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* =============== COMPACT HORIZONTAL SECTION ============= */}
      {/* ========================================================= */}

      <section
        id="projects"
        className="relative overflow-hidden border-t border-gray-100 bg-white py-8 sm:py-10"
      >

        <div className="mb-5 px-6 text-center">

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-green-600">
            Trusted By Businesses
          </p>

          <h2 className="mt-1 text-xl font-black text-[#111827] sm:text-2xl">
            Our{" "}
            <span className="text-green-600">
              Latest Works
            </span>
          </h2>

        </div>

        <div className="relative w-full overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />

          <div className="portfolio-slider flex w-max gap-3">

            {projects.map((project, index) => (
              <div
                key={`first-${index}`}
                className="group flex h-[125px] w-[170px] shrink-0 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-[0_10px_25px_rgba(22,163,74,0.12)]"
              >

                <div className="flex h-[55px] w-full items-center justify-center overflow-hidden rounded-lg">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                <h3 className="mt-2 text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-green-600">
                  {project.name}
                </h3>

                <div className="mt-0.5 text-[10px] tracking-tight text-green-500">
                  ★★★★★
                </div>

              </div>
            ))}

            {projects.map((project, index) => (
              <div
                key={`second-${index}`}
                className="group flex h-[125px] w-[170px] shrink-0 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-[0_10px_25px_rgba(22,163,74,0.12)]"
              >

                <div className="flex h-[55px] w-full items-center justify-center overflow-hidden rounded-lg">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                <h3 className="mt-2 text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-green-600">
                  {project.name}
                </h3>

                <div className="mt-0.5 text-[10px] tracking-tight text-green-500">
                  ★★★★★
                </div>

              </div>
            ))}

          </div>

        </div>

        <style jsx>{`
          .portfolio-slider {
            animation: portfolioScroll 32s linear infinite;
          }

          .portfolio-slider:hover {
            animation-play-state: paused;
          }

          @keyframes portfolioScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </section>


      {/* ========================================================= */}
      {/* ==================== FEATURED PROJECT ================== */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-20">

        <div className="pointer-events-none absolute left-[-150px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-green-100/50 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-50 px-5 py-2 text-sm font-bold tracking-[0.18em] text-green-600">
              <span>✦</span>
              SPOTLIGHT
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl">
              Featured{" "}
              <span className="text-green-600">
                Project
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              A showcase of cutting-edge development bringing innovation
              to the industry.
            </p>

          </div>

          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] lg:grid-cols-2">

            <div className="group relative min-h-[320px] overflow-hidden bg-gray-100 sm:min-h-[400px] lg:min-h-[500px]">

              <img
                src="/images/pakka-khata.jpg"
                alt="Pakka Khata"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                Featured Project
              </div>

            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Mandi ERP
              </p>

              <h3 className="text-3xl font-black text-[#111827] sm:text-4xl lg:text-5xl">
                Pakka Khata
              </h3>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Mandi-first ERP and digital khata software for sales,
                purchases, party ledgers, inventory, reports, WhatsApp
                billing, and Urdu/Roman Urdu workflows.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">

                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-all duration-300 hover:border-green-200 hover:bg-green-50"
                  >

                    <span className="text-xl">
                      {feature.icon}
                    </span>

                    <span className="text-sm font-bold text-[#111827]">
                      {feature.title}
                    </span>

                  </div>
                ))}

              </div>

              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Mandi ERP",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-8">

                <Link
                  href="https://pakkakhata.com"
                  target="_blank"
                  className="group inline-flex items-center gap-3 rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white shadow-[0_10px_30px_rgba(22,163,74,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-[0_15px_40px_rgba(22,163,74,0.30)]"
                >
                  View Project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* ===================== PORTFOLIO PROOF =================== */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute left-[-180px] top-[150px] h-[400px] w-[400px] rounded-full bg-green-100/50 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] bottom-[100px] h-[400px] w-[400px] rounded-full bg-emerald-100/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ================= PORTFOLIO PROOF ================= */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-50 px-5 py-2 text-sm font-bold tracking-[0.18em] text-green-600">
              <span>✦</span>
              PORTFOLIO PROOF
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl">

              Work mapped to the{" "}

              <span className="text-green-600">
                services
              </span>{" "}

              businesses search for.

            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
              TECHZOQ portfolio work connects product engineering, ecommerce,
              ERP, search visibility, digital marketing, and AI into systems
              that can be operated after launch.
            </p>

            <div className="mt-7">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-[0_10px_30px_rgba(22,163,74,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-[0_15px_40px_rgba(22,163,74,0.28)]"
              >
                Discuss a project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>


          {/* ===================================================== */}
          {/* ================= OUR STRATEGIC APPROACH ============ */}
          {/* ===================================================== */}

          <div className="mt-20">

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-50 px-5 py-2 text-sm font-bold tracking-[0.18em] text-green-600">
                <span>✦</span>
                OUR STRATEGIC APPROACH
              </div>

              <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl md:text-6xl">

                The Roadmap to{" "}

                <span className="text-green-600">
                  Excellence
                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                From the first idea to continuous support, we follow a clear
                process to build powerful, reliable, and scalable digital
                products.
              </p>

            </div>


            {/* ================================================= */}
            {/* ================== ROADMAP CARDS ================ */}
            {/* ================================================= */}

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">


              {/* ================= DISCOVERY ================= */}

              <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(22,163,74,0.14)]">

                <div className="relative mb-6 flex h-[170px] items-center justify-center overflow-hidden rounded-2xl bg-green-50">

                  <img
                    src="/images/discovery.jpg"
                    alt="Discovery"
                    className="h-[145px] w-[145px] object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-green-600 shadow-sm">
                    01
                  </div>

                </div>

                <h3 className="text-xl font-black text-[#111827]">
                  Discovery
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Deep dive into your requirements and business goals to set
                  a solid foundation.
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-green-500 transition-all duration-500 group-hover:w-16" />

              </div>


              {/* ================= DESIGN ================= */}

              <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(22,163,74,0.14)]">

                <div className="relative mb-6 flex h-[170px] items-center justify-center overflow-hidden rounded-2xl bg-green-50">

                  <img
                    src="/images/design.jpg"
                    alt="Design"
                    className="h-[145px] w-[145px] object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-green-600 shadow-sm">
                    02
                  </div>

                </div>

                <h3 className="text-xl font-black text-[#111827]">
                  Design
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Crafting modern, user-centric interfaces with a focus on
                  minimalist aesthetics.
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-green-500 transition-all duration-500 group-hover:w-16" />

              </div>


              {/* ================= DEVELOPMENT ================= */}

              <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(22,163,74,0.14)]">

                <div className="relative mb-6 flex h-[170px] items-center justify-center overflow-hidden rounded-2xl bg-green-50">

                  <img
                    src="/images/development.jpg"
                    alt="Development"
                    className="h-[145px] w-[145px] object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-green-600 shadow-sm">
                    03
                  </div>

                </div>

                <h3 className="text-xl font-black text-[#111827]">
                  Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Turning designs into high-performance, scalable code using
                  modern tech stacks.
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-green-500 transition-all duration-500 group-hover:w-16" />

              </div>


              {/* ================= SUPPORT ================= */}

              <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(22,163,74,0.14)]">

                <div className="relative mb-6 flex h-[170px] items-center justify-center overflow-hidden rounded-2xl bg-green-50">

                  <img
                    src="/images/support.jpg"
                    alt="Support"
                    className="h-[145px] w-[145px] object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-green-600 shadow-sm">
                    04
                  </div>

                </div>

                <h3 className="text-xl font-black text-[#111827]">
                  Support
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Continuous monitoring and updates to ensure your product
                  stays ahead of the curve.
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-green-500 transition-all duration-500 group-hover:w-16" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* ================== PORTFOLIO PROJECTS =================== */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-green-100/50 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] bottom-20 h-[400px] w-[400px] rounded-full bg-emerald-100/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-50 px-5 py-2 text-sm font-bold tracking-[0.18em] text-green-600">
              <span>✦</span>
              OUR PORTFOLIO
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl md:text-6xl">

              Selected{" "}

              <span className="text-green-600">
                Projects
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore our latest digital products, platforms, business
              solutions, and technology projects built for real-world impact.
            </p>

          </div>


          {/* ================= PROJECT CARDS ================= */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {portfolioProjects.map((project) => (

              <div
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_20px_45px_rgba(22,163,74,0.13)]"
              >

                {/* IMAGE */}

                <div className="relative h-[190px] overflow-hidden bg-gray-100">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-black text-green-600 shadow-sm backdrop-blur-sm">
                    {project.number}
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {project.category}
                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-6">

                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-green-600">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-lg font-black leading-tight text-[#111827]">
                    {project.name}
                  </h3>

                  <div className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-bold text-green-700">
                    {project.stat}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-green-100 bg-green-50 px-2.5 py-1.5 text-[10px] font-bold text-green-700 transition-colors duration-300 group-hover:border-green-200"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* ========================================================= */}
{/* ===================== PROJECT CTA ======================= */}
{/* ========================================================= */}

<div className="mt-20">
  <div className="relative overflow-hidden rounded-3xl border border-green-200 bg-green-50 px-6 py-12 text-center sm:px-10 sm:py-16">

    {/* Background Glow */}
    <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[280px] w-[500px] -translate-x-1/2 rounded-full bg-green-200/60 blur-[100px]" />

    <div className="relative z-10 mx-auto max-w-3xl">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-white px-5 py-2 text-sm font-bold tracking-[0.18em] text-green-600 shadow-sm">
        <span>✦</span>
        HAVE A PROJECT IN MIND?
      </div>

      <h2 className="text-3xl font-black leading-tight text-[#111827] sm:text-4xl md:text-5xl">
        Let's Build Something{" "}
        <span className="text-green-600">
          Exceptional
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
        From idea to launch, our team helps businesses turn ambitious
        concepts into powerful digital products that are built to scale.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <Link
          href="/contact"
          className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white shadow-[0_10px_30px_rgba(22,163,74,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-[0_15px_40px_rgba(22,163,74,0.30)]"
        >
          Start a Project

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          href="/services"
          className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white px-7 py-3.5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white"
        >
          Explore Services

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </div>
  </div>
</div>
    </main>
  );
}