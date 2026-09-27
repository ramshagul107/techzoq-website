"use client"; 
 
import { useEffect, useState } from "react"; 
 
export default function SplashScreen({ onFinish }) { 
  const [showContent, setShowContent] = useState(false); 
  const [fadeOut, setFadeOut] = useState(false); 
 
  useEffect(() => { 
    // 2 sec tak sirf image 
    const contentTimer = setTimeout(() => { 
      setShowContent(true); 
    }, 2000); 
 
    // Total 4.8 sec baad fade out 
    const fadeTimer = setTimeout(() => { 
      setFadeOut(true); 
 
      setTimeout(() => { 
        onFinish(); 
      }, 800); 
    }, 4800); 
 
    return () => { 
      clearTimeout(contentTimer); 
      clearTimeout(fadeTimer); 
    }; 
  }, [onFinish]); 
 
  return ( 
    <div 
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-700 ${ 
        fadeOut ? "opacity-0" : "opacity-100" 
      }`} 
    > 
      {/* Background Image */} 
      <img 
        src="/images/intro-techzoq.jpg" 
        alt="Techzoq Software House" 
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[zoom_5s_ease-out_forwards]" 
      /> 
 
      {/* Overlay */} 
      <div className="absolute inset-0 bg-black/45" /> 
 
      {/* Content */} 
      <div 
        className={`relative z-10 flex h-full flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${ 
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6" 
        }`} 
      > 
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.25em] text-white"> 
          TECHZOQ 
        </h1> 
 
        <div className="mt-5 h-[2px] w-24 bg-blue-400" /> 
 
        <p className="mt-5 text-blue-100 tracking-[0.35em] text-sm md:text-base"> 
          BUILDING THE FUTURE 
        </p> 
 
        <div className="mt-10 flex gap-3"> 
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce"></span> 
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]"></span> 
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]"></span> 
        </div> 
      </div> 
 
      {/* Zoom Animation */} 
      <style jsx>{` 
        @keyframes zoom { 
          from { 
            transform: scale(1); 
          } 
          to { 
            transform: scale(1.08); 
          } 
        } 
      `}</style> 
    </div> 
  ); 
} 
 
