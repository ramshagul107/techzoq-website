"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage({ type: "", text: "" });

    if (!email || !password) {
      setMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);

    try {
      setMessage({
        type: "success",
        text: `Welcome back! Redirecting as ${email}...`,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      setMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAF9] flex items-center justify-center px-4 py-10 relative overflow-hidden font-sans">

      {/* Background Soft Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#39FF14]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-[#16A34A]/10 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[28px] shadow-2xl overflow-hidden border border-[#E0E8E3]">

        {/* ================= LEFT SIDE ================= */}
        <section className="hidden lg:flex relative bg-gradient-to-br from-[#02140B] via-[#072B18] to-[#0D4427] p-12 text-white flex-col justify-between min-h-[650px] overflow-hidden">

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#39FF14]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0B5D34]/30 blur-2xl" />

          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0B5D34] flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-2xl tracking-tight">
                  T
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  Tech<span className="text-[#16A34A]">zoq</span>
                </span>

                <span className="text-[10px] tracking-[0.2em] text-[#A7F3D0] font-bold uppercase mt-1">
                  SOFTWARE HOUSE
                </span>
              </div>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-md">

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B5D34]/50 border border-[#39FF14]/30 text-[#A7F3D0] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
              SOFTWARE HOUSE • DIGITAL SOLUTIONS
            </span>

            <h1 className="text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white">
              We Build <br />

              <span className="text-[#16A34A]">
                Digital
              </span>{" "}
              <span className="text-white">
                Experiences.
              </span>
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              We create modern websites, mobile applications, software and
              digital solutions that help businesses grow.
            </p>
          </div>

          {/* Portal Card */}
          <div className="relative z-10 p-4 rounded-2xl bg-[#072615]/80 border border-[#39FF14]/20 backdrop-blur-md flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-[#0B5D34] flex items-center justify-center text-[#A7F3D0] font-bold text-sm">
                &lt;/&gt;
              </div>

              <div>
                <p className="text-xs font-bold text-white">
                  Techzoq Portal
                </p>

                <p className="text-[11px] text-gray-400">
                  Access your workspace & projects
                </p>
              </div>

            </div>

            <span className="text-[#39FF14] text-sm">
              →
            </span>

          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}
        <section className="p-6 sm:p-10 lg:p-14 flex items-center justify-center bg-white">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center mb-10">

              <Link href="/" className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-[#0B5D34] flex items-center justify-center shadow-md">
                  <span className="text-white font-extrabold text-xl">
                    T
                  </span>
                </div>

                <div className="flex flex-col">

                  <span className="text-2xl font-bold text-gray-900 leading-none">
                    Tech<span className="text-[#16A34A]">zoq</span>
                  </span>

                  <span className="text-[9px] tracking-[0.18em] text-gray-400 font-bold uppercase mt-1">
                    SOFTWARE HOUSE
                  </span>

                </div>

              </Link>

            </div>

            {/* ================= HEADING ================= */}
            <div className="mb-8">

              <span className="inline-block px-3 py-1 rounded-md bg-[#ECFDF3] text-[#16A34A] font-bold text-xs uppercase tracking-wider mb-3">
                Account Login
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 tracking-tight">
                Welcome{" "}
                <span className="text-[#16A34A]">
                  back!
                </span>
              </h2>

              <p className="text-gray-500 text-sm">
                Enter your credentials to access your account.
              </p>

            </div>

            {/* ================= FORM ================= */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9FBF9] text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#16A34A] focus:ring-4 focus:ring-[#DCFCE7]"
                  required
                />

              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-[#16A34A] hover:underline"
                  >
                    Forgot Password?
                  </Link>

                </div>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-16 rounded-xl border border-gray-200 bg-[#F9FBF9] text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#16A34A] focus:ring-4 focus:ring-[#DCFCE7]"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 hover:text-[#16A34A] select-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 accent-[#16A34A] rounded cursor-pointer"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer select-none"
                >
                  Remember me for 30 days
                </label>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-base shadow-md shadow-[#16A34A]/20 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Login"}
              </button>

              {/* Feedback */}
              {message.text && (
                <div
                  className={`text-sm rounded-xl px-4 py-3 border ${
                    message.type === "success"
                      ? "text-[#166534] bg-[#F0FDF4] border-[#BBF7D0]"
                      : "text-red-600 bg-red-50 border-red-200"
                  }`}
                  role="status"
                >
                  {message.text}
                </div>
              )}

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">

              <div className="flex-1 h-px bg-gray-200" />

              <span className="text-xs font-semibold text-gray-400">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-200" />

            </div>

            {/* Sign Up */}
            <p className="text-center text-sm text-gray-500">

              Don't have an account?{" "}

              <Link
                href="/signup"
                className="font-bold text-[#16A34A] hover:underline"
              >
                Sign Up
              </Link>

            </p>

            {/* Need Help */}
            <div className="text-center mt-6">

              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#16A34A] transition-colors"
              >
                <span>Let's Talk / Need Help?</span>
                <span>↗</span>
              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}