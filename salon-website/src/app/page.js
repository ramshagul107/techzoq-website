"use client";

import { useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Projects";
import OurWork from "@/components/OurWork";
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen
          onFinish={() => setShowSplash(false)}
        />
      )}

      {/* Main Website */}
      <main className="min-h-screen bg-white text-gray-900">

        {/* Hero Section */}
        <Hero />

        {/* What We Offer */}
        <WhatWeOffer />

        {/* About Section */}
        <About />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Products / Projects */}
        <Products />

        {/* Our Work */}
        <OurWork />

  

      </main>

      
    </>
  );
}