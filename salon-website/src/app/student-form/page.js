"use client";

import { useState } from "react";

const initialFormData = {
  fullName: "",
  fatherName: "",
  email: "",
  phone: "",
  whatsapp: "",
  gender: "",
  age: "",
  course: "",
  education: "",
  experience: "",
  timing: "",
  city: "",
  address: "",
  message: "",
};

export default function StudentForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSubmitted(false);

    // Validation
    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.fatherName.trim()) {
      setError("Please enter father / guardian name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.course) {
      setError("Please select a course.");
      return;
    }

    if (
      formData.age &&
      (Number(formData.age) < 1 || Number(formData.age) > 100)
    ) {
      setError("Please enter a valid age between 1 and 100.");
      return;
    }

    setLoading(true);

    try {
      const student = {
        id: Date.now(),
        name: formData.fullName.trim(),
        age: formData.age ? Number(formData.age) : null,
        course: formData.course,
        fatherName: formData.fatherName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        whatsapp: formData.whatsapp.trim(),
        gender: formData.gender,
        education: formData.education,
        experience: formData.experience,
        timing: formData.timing,
        city: formData.city.trim(),
        address: formData.address.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch(
        "http://127.0.0.1:5000/api/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }
      );

      if (!response.ok) {
        throw new Error("Server rejected the request.");
      }

      const data = await response.json();

      console.log("Server Response:", data);

      setSubmitted(true);
      setFormData(initialFormData);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Submit Error:", err);

      setError(
        "Unable to submit registration. Please make sure your backend server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5faf4]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b2815] px-4 pb-16 pt-24 text-white sm:px-6 sm:pb-20 sm:pt-28 lg:pt-32">
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7cff5b]/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#35c759]/20 blur-3xl" />

        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-green-400/10 blur-2xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Logo */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7cff5b] text-xl font-black text-[#0b2815] shadow-xl shadow-green-900/30">
            TQ
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#9cff82] sm:text-sm">
            Techzoq Academy
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Student Registration
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg">
            Start your learning journey with Techzoq Academy.
            Complete the registration form and our team will contact
            you shortly.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md sm:text-sm">
              ✓ Practical Learning
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md sm:text-sm">
              ✓ Industry Skills
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md sm:text-sm">
              ✓ Career Focused
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM AREA
      ====================================================== */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-[#dcebd8] bg-white shadow-[0_20px_60px_rgba(25,90,40,0.10)]">
            {/* Card Header */}
            <div className="border-b border-[#e5eee3] bg-gradient-to-r from-[#f8fff6] to-[#efffea] px-5 py-6 sm:px-8 lg:px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dfffd5] text-xl font-bold text-[#27852f]">
                  ✦
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#17351c] sm:text-2xl">
                    Tell Us About Yourself
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Please provide accurate information to complete
                    your registration.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-10 p-5 sm:p-8 lg:p-10"
            >
              {/* =================================================
                  PERSONAL INFORMATION
              ================================================== */}
              <FormSection
                number="01"
                title="Personal Information"
                description="Basic information about the student"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                  <Input
                    label="Father / Guardian Name"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father or guardian name"
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 3XX XXXXXXX"
                    required
                  />

                  <Input
                    label="WhatsApp Number"
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+92 3XX XXXXXXX"
                  />

                  <Input
                    label="Age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    min="1"
                    max="100"
                  />

                  <Select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    options={[
                      "Male",
                      "Female",
                      "Prefer not to say",
                    ]}
                  />
                </div>
              </FormSection>

              {/* =================================================
                  COURSE
              ================================================== */}
              <FormSection
                number="02"
                title="Course Selection"
                description="Choose the program you want to learn"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Select
                    label="Select Course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    options={[
                      "Web Development",
                      "Mobile App Development",
                      "AI Innovate",
                      "Ethical Hacking",
                      "Video Editing",
                      "Video Creation",
                      "E-Commerce",
                      "Software Solutions",
                    ]}
                  />

                  <Select
                    label="Preferred Class Timing"
                    name="timing"
                    value={formData.timing}
                    onChange={handleChange}
                    options={[
                      "Morning",
                      "Afternoon",
                      "Evening",
                      "Weekend",
                    ]}
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-[#d9efd4] bg-[#f7fff4] p-5">
                  <div className="flex gap-3">
                    <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#3aa63d]" />

                    <div>
                      <h3 className="font-semibold text-[#214927]">
                        Course Information
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Our courses focus on practical projects,
                        modern technologies and industry-oriented
                        skills.
                      </p>
                    </div>
                  </div>
                </div>
              </FormSection>

              {/* =================================================
                  EDUCATION
              ================================================== */}
              <FormSection
                number="03"
                title="Education & Experience"
                description="Help us understand your current skill level"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Select
                    label="Highest Education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    options={[
                      "Matric",
                      "Intermediate",
                      "Bachelor's",
                      "Master's",
                      "Other",
                    ]}
                  />

                  <Select
                    label="Previous Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    options={[
                      "Complete Beginner",
                      "Basic Knowledge",
                      "Intermediate",
                      "Advanced",
                    ]}
                  />
                </div>
              </FormSection>

              {/* =================================================
                  ADDRESS
              ================================================== */}
              <FormSection
                number="04"
                title="Contact & Address"
                description="Where can we reach you?"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                  />

                  <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />
                </div>

                <div className="mt-5">
                  <TextArea
                    label="Additional Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us anything else you'd like us to know..."
                  />
                </div>
              </FormSection>

              {/* =================================================
                  ERROR
              ================================================== */}
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      !
                    </div>

                    <p className="pt-1 text-sm font-medium text-red-700">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {/* =================================================
                  SUCCESS
              ================================================== */}
              {submitted && (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold text-green-800">
                        Registration Submitted!
                      </h3>

                      <p className="mt-1 text-sm text-green-700">
                        Thank you for registering. Our team will
                        contact you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}
              <div className="border-t border-gray-100 pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#16803c] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#116d32] hover:shadow-xl hover:shadow-green-100 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration

                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                  By submitting this form, you agree to provide
                  accurate information for registration purposes.
                </p>
              </div>
            </form>

            {/* Footer */}
            <div className="border-t border-gray-100 bg-gray-50 px-5 py-5 text-center sm:px-8">
              <p className="text-xs text-gray-400">
                © 2026 Techzoq Academy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
  number,
  title,
  description,
  children,
}) {
  return (
    <section>
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaffdf] text-sm font-extrabold text-[#27852f]">
          {number}
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#17351c] sm:text-xl">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#17351c]"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-[#9bd995] focus:border-[#27852f] focus:bg-white focus:ring-4 focus:ring-[#dfffd5]"
      />
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function Select({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#17351c]"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-10 text-sm outline-none transition-all duration-200 hover:border-[#9bd995] focus:border-[#27852f] focus:bg-white focus:ring-4 focus:ring-[#dfffd5] ${
            value ? "text-gray-800" : "text-gray-400"
          }`}
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TEXTAREA
========================================================= */

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#17351c]"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-[#9bd995] focus:border-[#27852f] focus:bg-white focus:ring-4 focus:ring-[#dfffd5]"
      />
    </div>
  );
}