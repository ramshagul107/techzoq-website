"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  return (
    <main className="min-h-screen overflow-hidden bg-white">

      {/* =====================================================
          FULL GOOGLE MAP
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-gray-100">

        <div className="h-[430px] w-full sm:h-[520px] lg:h-[600px]">

          <iframe
            title="TECHZOQ Location"
            src="https://www.google.com/maps?q=TECHZOQ&ll=31.0578755,74.1426805&z=10&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>


      {/* =====================================================
          CONTACT INTRO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f8faf9] py-20 sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-100/60 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-600">
                Get In Touch
              </span>

            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

              Let's build something

              <span className="block text-green-600">
                amazing together.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Have an idea, a project or a challenge? Tell us what you have
              in mind and our team will help turn it into a powerful digital
              solution.
            </p>

          </div>


          {/* =================================================
              FORM + CONTACT INFORMATION
          ================================================== */}
          <div className="mt-16 grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">


            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <div>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">

                How can we

                <span className="block text-green-600">
                  help you?
                </span>

              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                Whether you need a website, mobile application, custom
                software, AI solution, e-commerce platform or something
                completely unique, tell us what you're looking for.
              </p>


              {/* =================================================
                  EMAIL CARD
              ================================================== */}
              <a
                href="mailto:info@techzoq.com"
                className="group mt-9 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  @
                </div>

                <div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    info@techzoq.com
                  </p>

                </div>

                <span className="ml-auto text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-600">
                  →
                </span>

              </a>


              {/* =================================================
                  PHONE CARD
              ================================================== */}
              <a
                href="tel:+923000000000"
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  ☎
                </div>

                <div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    +92 300 0000000
                  </p>

                </div>

                <span className="ml-auto text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-600">
                  →
                </span>

              </a>


              {/* =================================================
                  LOCATION CARD
              ================================================== */}
              <a
                href="https://www.google.com/maps/place/TECHZOQ/@31.0578755,74.1426805,10.06z"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  📍
                </div>

                <div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    TECHZOQ
                  </p>

                </div>

                <span className="ml-auto text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-600">
                  →
                </span>

              </a>


              {/* =================================================
                  AVAILABILITY
              ================================================== */}
              <div className="mt-7 flex items-center gap-3">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />

                </span>

                <span className="text-xs font-medium text-gray-500">
                  Available for new projects
                </span>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================== */}
            <div className="relative">

              {/* Green Background Shape */}
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[28px] bg-green-100" />


              {/* FORM CARD */}
              <div className="relative rounded-[28px] border border-gray-100 bg-white p-7 shadow-xl shadow-gray-200/50 sm:p-10">

                {/* Form Header */}
                <div className="mb-8">

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                    Start a Conversation
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                    Tell us about your project.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Fill out the form and our team will get back to you.
                  </p>

                </div>


                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >


                  {/* =================================================
                      NAME + EMAIL
                  ================================================== */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-gray-200 bg-[#f8faf9] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-200 bg-[#f8faf9] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                      />

                    </div>

                  </div>


                  {/* =================================================
                      PHONE + COMPANY
                  ================================================== */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92..."
                        className="w-full rounded-xl border border-gray-200 bg-[#f8faf9] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                        Company
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full rounded-xl border border-gray-200 bg-[#f8faf9] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                      />

                    </div>

                  </div>


                  {/* =================================================
                      HOW CAN WE HELP
                  ================================================== */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      How can we help you?
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#f8faf9] px-4 py-3.5 text-sm text-gray-600 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="Web Development">
                        Web Development
                      </option>

                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>

                      <option value="E-Commerce">
                        E-Commerce
                      </option>

                      <option value="Software Solutions">
                        Software Solutions
                      </option>

                      <option value="AI Solutions">
                        AI Solutions
                      </option>

                      <option value="Ethical Hacking">
                        Ethical Hacking
                      </option>

                      <option value="Graphic Design">
                        Graphic Design
                      </option>

                      <option value="Video Editing">
                        Video Editing
                      </option>

                      <option value="Video Creation">
                        Video Creation
                      </option>

                      <option value="Other">
                        Something Else
                      </option>

                    </select>

                  </div>


                  {/* =================================================
                      PROJECT DETAILS
                  ================================================== */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Tell us about your project
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your idea, requirements, budget or anything else..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-[#f8faf9] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />

                  </div>


                  {/* SUCCESS MESSAGE */}
                  {submitted && (
                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                      Thanks! Your message has been received.
                    </div>
                  )}


                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                  >

                    Send Message

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-700 transition-transform duration-300 group-hover:translate-x-1">
                      →
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
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#03251c] py-20 text-white sm:py-24">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/15 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-500">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

            Your idea deserves

            <span className="block text-green-500">
              to be built.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
            Let's turn your vision into a digital experience that makes
            an impact.
          </p>

        </div>

      </section>

    </main>
  );
}