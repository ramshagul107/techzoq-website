"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Easy Record Management",
    description:
      "Manage your daily business records in a simple and organized way.",
  },
  {
    number: "02",
    title: "Customer Accounts",
    description:
      "Keep customer transactions and account details safely in one place.",
  },
  {
    number: "03",
    title: "Smart Business Tracking",
    description:
      "Track your business activities and stay updated with your records.",
  },
  {
    number: "04",
    title: "Simple & Fast",
    description:
      "A clean and easy interface that makes everyday business work easier.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white pt-5 pb-12 sm:pt-6 sm:pb-14"
    >
      {/* =========================
          BACKGROUND DECORATIONS
      ========================== */}
      <div className="pointer-events-none absolute -left-32 top-5 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-5 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mx-auto mb-7 max-w-3xl text-center">

          <span className="mb-2 inline-block rounded-full bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-600">
            OUR PROJECT
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet{" "}
            <span className="text-green-600">
              Pakka Khata
            </span>
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
            A smart and simple digital solution designed to help businesses
            manage their daily records, customers and transactions with ease.
          </p>

        </div>

        {/* =========================
            MAIN PROJECT CONTENT
        ========================== */}
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">

          {/* =========================
              PROJECT IMAGE
          ========================== */}
          <div className="group relative">

            {/* Green Glow */}
            <div className="absolute inset-8 rounded-[40px] bg-green-200/40 blur-3xl transition duration-700 group-hover:bg-green-300/50" />

            <div className="relative mx-auto max-w-[550px]">

              {/* Floating Top Card */}
              <div className="absolute -left-5 top-6 z-20 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl transition duration-500 group-hover:-translate-x-3 sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Easy Records
                    </p>

                    <p className="text-xs text-gray-500">
                      Manage everything
                    </p>
                  </div>

                </div>

              </div>

              {/* Main Image Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-4 shadow-2xl transition duration-700 group-hover:-translate-y-3 group-hover:rotate-[1deg] sm:p-5">

                <div className="relative h-[310px] overflow-hidden rounded-[24px] bg-gray-100 sm:h-[370px]">

                  <Image
                    src="/images/khata.jpg"
                    alt="Pakka Khata Project"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                </div>

                {/* Project Label */}
                <div className="mt-4 flex items-center justify-between px-1">

                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      Pakka Khata
                    </p>

                    <p className="text-sm text-gray-500">
                      Smart Business Management
                    </p>
                  </div>

                  <div className="rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-600">
                    Featured
                  </div>

                </div>

              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-3 right-0 z-20 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl transition duration-500 group-hover:translate-x-3">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Business Made Easy
                    </p>

                    <p className="text-xs text-gray-500">
                      Smart & organized
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* =========================
              PROJECT CONTENT
          ========================== */}
          <div>

            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Featured Project
            </p>

            <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Manage your business with

              <span className="mt-1 block text-green-600">
                Pakka Khata
              </span>
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Pakka Khata helps businesses move from traditional record
              keeping to a simple digital system. Keep your customer accounts,
              transactions and daily business records organized in one place.
            </p>

            {/* =========================
                FEATURES
            ========================== */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group/feature rounded-2xl border border-gray-100 bg-gray-50 p-4 transition duration-500 hover:-translate-y-2 hover:border-green-100 hover:bg-white hover:shadow-lg"
                >

                  <div className="mb-2 flex items-center gap-3">

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-bold text-green-600 transition duration-300 group-hover/feature:scale-110">
                      {feature.number}
                    </span>

                    <h4 className="font-bold text-gray-900">
                      {feature.title}
                    </h4>

                  </div>

                  <p className="text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>

                </div>
              ))}

            </div>

            {/* =========================
                VIEW PROJECT BUTTON
            ========================== */}
            <div className="mt-6">

              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                View Projects

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}