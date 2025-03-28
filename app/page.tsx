"use client";

import Blurb from "@/components/Blurb";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

import { useState, useEffect } from "react";

export function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-6 text-center">
      <svg
        className="w-24 h-24 mb-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
      <h2 className="text-2xl font-bold mb-2">Desktop View Required</h2>
      <p className="mb-8">
        Mobile will be ready soon! Please view on Desktop for now &lt;3
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileBlocker />

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Landing />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export function Landing() {
  return (
    <div className="h-screen snap-start mx-20">
      <Blurb />
    </div>
  );
}
