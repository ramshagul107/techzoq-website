"use client";

import Link from "next/link";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "E-Commerce", href: "/services/e-commerce" },
  { name: "Software Solutions", href: "/services/software-solutions" },
  { name: "AI Solutions", href: "/services/ai" },
  { name: "Ethical Hacking", href: "/services/ethical-hacking" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Video Editing", href: "/services/video-editing" },
  { name: "Video Creation", href: "/services/video-creation" },
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06251c] text-white">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#16A34A]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#16A34A]/10 blur-[130px]" />

      {/* =====================================================
          CTA / IMAGE SECTION
      ====================================================== */}
      <section className="relative px-5 pt-16 sm:px-8 md:px-12 lg:px-16 lg:pt-24">

        <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10">

          {/* IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/gallery20.jpg')",
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#031d16]/75" />

          {/* GREEN OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#032119]/95 via-[#063b2b]/75 to-[#16A34A]/20" />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          {/* GREEN GLOW */}
          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#16A34A]/20 blur-[100px]" />

          {/* CTA CONTENT */}
          <div className="relative z-10 flex min-h-[440px] flex-col justify-center px-7 py-16 sm:px-12 md:px-16 lg:min-h-[500px] lg:px-20">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#16A34A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#16A34A]">
                Let's Create Something
              </span>

            </div>

            {/* HEADING */}
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

              Have an idea
              <br />

              <span className="text-[#16A34A]">
                in mind?
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Let's turn your vision into a powerful digital experience.
              From websites and apps to AI and innovative software solutions,
              we're ready to build it with you.
            </p>

            {/* =================================================
                LET'S TALK BUTTON
            ================================================== */}
            <div className="mt-9">

              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-4 rounded-full bg-[#16A34A] px-7 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(22,163,74,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#22c55e] hover:shadow-[0_0_45px_rgba(22,163,74,0.4)]"
              >

                Let's Talk

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#06251c] transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </div>

          {/* DECORATIVE NUMBER */}
          <div className="absolute bottom-7 right-8 hidden select-none text-[120px] font-black leading-none text-white/[0.035] md:block lg:text-[170px]">
            01
          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-12 lg:px-16">

        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_0.8fr]">

          {/* =================================================
              BRAND
          ================================================== */}
          <div>

            <Link
              href="/"
              className="inline-block text-3xl font-black tracking-[-0.06em]"
            >
              <span className="text-white">
                TECH
              </span>

              <span className="text-[#16A34A]">
                ZOQ
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              We build modern digital solutions that help businesses grow,
              connect with their audience and scale with confidence.
            </p>

            {/* STATUS */}
            <div className="mt-7 flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />

              </span>

              <span className="text-xs text-white/70">
                Available for new projects
              </span>

            </div>

          </div>

          {/* =================================================
              COMPANY
          ================================================== */}
          <div>

            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#16A34A]">
              Company
            </h3>

            <ul className="space-y-3.5">

              {companyLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-[#16A34A]"
                  >

                    <span className="h-px w-0 bg-[#16A34A] transition-all duration-300 group-hover:w-3" />

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =================================================
              SERVICES
          ================================================== */}
          <div>

            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#16A34A]">
              Services
            </h3>

            <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">

              {services.map((service, index) => (

                <li key={service.name}>

                  <Link
                    href={service.href}
                    className="group flex w-fit items-center gap-3 text-sm text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-[#16A34A]"
                  >

                    <span className="text-[10px] text-[#16A34A] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {service.name}
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =================================================
              CONNECT
          ================================================== */}
          <div>

            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#16A34A]">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:info@techzoq.com"
                className="block text-sm text-white/80 transition-colors duration-300 hover:text-[#16A34A]"
              >
                info@techzoq.com
              </a>

              <div className="pt-2">

                {socials.map((social) => (

                  <a
                    key={social.name}
                    href={social.href}
                    className="group mb-3 flex items-center gap-3 text-sm text-white/80 transition-colors duration-300 hover:text-[#16A34A]"
                  >

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs transition-all duration-300 group-hover:border-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white">
                      ↗
                    </span>

                    {social.name}

                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            GIANT TECHZOQ WORDMARK
        ====================================================== */}
        <div className="relative mt-14 overflow-hidden">

          <div className="animate-footer-marquee whitespace-nowrap text-center text-[18vw] font-black leading-[0.75] tracking-[-0.08em] text-white/[0.035] sm:text-[16vw]">
            TECHZOQ&nbsp;&nbsp;TECHZOQ&nbsp;&nbsp;TECHZOQ
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

            <span className="text-[15vw] font-black tracking-[-0.08em] text-transparent opacity-90 [text-stroke:1px_rgba(22,163,74,0.18)]">
              TECHZOQ
            </span>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Techzoq. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-[#16A34A]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-[#16A34A]"
            >
              Terms & Conditions
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-[#16A34A]"
            >

              Back to top

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#16A34A] group-hover:text-[#16A34A]">
                ↑
              </span>

            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARQUEE ANIMATION
      ====================================================== */}
      <style jsx>{`
        @keyframes footerMarquee {
          0% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(-3%);
          }

          100% {
            transform: translateX(0);
          }
        }

        .animate-footer-marquee {
          animation: footerMarquee 12s ease-in-out infinite;
        }
      `}</style>

    </footer>
  );
}