"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImpactCounters from "@/components/ImpactCounters";
import OurWork from "@/components/OurWork";
import Resources from "@/components/Resources";
import MwangaSpotlight from "@/components/MwangaSpotlight";

export default function Home() {
  // Array of letters for the headline
  const headlineLetters = "TABASSAM".split("");
  const [videoError, setVideoError] = useState(false);

  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background or Fallback Gradient */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <div className="relative h-full w-full bg-black/50">
              <video
                className="h-full w-full object-cover opacity-70"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
              >
                <source src="/images/hero-video-bg.mp4" type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="h-full w-full bg-gradient-to-b from-gray-900 via-orange-900/40 to-black">
              <Image 
                src="/images/hero-bg.jpg" 
                alt="Tabassam Initiative" 
                fill 
                className="object-cover opacity-30 mix-blend-overlay" 
              />
            </div>
          )}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
          {/* TABASSAM Headline */}
          <div className="mb-8 flex">
            {headlineLetters.map((letter, index) => (
              <motion.div
                key={`headline-${letter}-${index}`}
                className="text-6xl font-bold text-orange-500 md:text-8xl lg:text-9xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#ff7e33",
                  transition: { duration: 0.2 },
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>

          {/* Shimmer Effect on Headline */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
            animate={{
              width: ["0%", "100%", "0%"],
              left: ["0%", "0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />

          {/* Subheadline */}
          <motion.div
            className="max-w-xl text-xl font-light text-orange-100 md:text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="mb-2">For every child, a chance.</p>
            <p>For every youth, a future.</p>
          </motion.div>

          {/* Shimmer Effect on Subheadline */}
          <motion.div
            className="absolute top-[calc(50%+5rem)] left-0 h-0.5 w-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent"
            animate={{
              width: ["0%", "100%", "0%"],
              left: ["0%", "0%", "100%"],
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 7,
            }}
          />

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Link 
              href="#our-work"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl md:text-base"
            >
              Explore Our Work
            </Link>
            <Link 
              href="#mwanga"
              className="rounded-full border-2 border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-xl md:text-base"
            >
              Mwanga Wa Kesho Yetu
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 2.2,
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <svg className="h-10 w-10 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Impact Counters Section */}
      <ImpactCounters />

      {/* Our Work Section */}
      <OurWork />

      {/* Mwanga Wa Kesho Yetu Spotlight */}
      <MwangaSpotlight />

      {/* Resources Section */}
      <Resources />

      {/* Admin Link Section */}
      <section className="bg-orange-50 py-10 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/admin"
            className="inline-flex items-center space-x-2 rounded-full bg-gray-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <span>Admin Dashboard</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            For demo: username = &quot;admin&quot;, password = &quot;password&quot;
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold text-orange-500">TABASSAM</h3>
              <p className="text-sm text-gray-300">
                Proudly and unapologetically focused on Kenya&apos;s children and youth.
              </p>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 transition-colors hover:text-orange-500"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path 
                    fillRule="evenodd" 
                    d="M12 2C9.284 2 8.944 2.01 7.877 2.06c-1.067.05-1.79.217-2.428.465a4.883 4.883 0 00-1.77 1.153 4.915 4.915 0 00-1.153 1.77c-.248.637-.416 1.36-.465 2.428C2.01 8.944 2 9.284 2 12c0 2.716.01 3.056.06 4.123.05 1.067.217 1.79.465 2.428a4.89 4.89 0 001.153 1.77 4.88 4.88 0 001.77 1.152c.637.248 1.36.416 2.428.465 1.067.05 1.407.06 4.123.06 2.716 0 3.057-.01 4.123-.06 1.067-.05 1.79-.217 2.428-.464a4.893 4.893 0 001.77-1.153 4.902 4.902 0 001.153-1.77c.248-.637.416-1.36.465-2.428.05-1.067.06-1.407.06-4.123 0-2.716-.01-3.056-.06-4.123-.05-1.067-.217-1.79-.464-2.428a4.902 4.902 0 00-1.153-1.77 4.893 4.893 0 00-1.77-1.153c-.637-.248-1.36-.416-2.428-.465C15.056 2.01 14.716 2 12 2zm0 1.8c2.67 0 2.986.01 4.04.058.975.045 1.505.208 1.858.344.466.182.8.4 1.15.748.35.35.566.684.748 1.15.136.353.3.883.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.044.975-.208 1.505-.344 1.858a3.09 3.09 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.136-.883.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.975-.044-1.505-.208-1.858-.344a3.098 3.098 0 01-1.15-.748 3.09 3.09 0 01-.748-1.15c-.136-.353-.3-.883-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.975.208-1.505.344-1.858.182-.466.4-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.136.883-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064A5.136 5.136 0 106.864 12 5.136 5.136 0 0012 6.864zm0 8.468A3.332 3.332 0 118.668 12 3.332 3.332 0 0112 15.332zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" 
                rel="noopener noreferrer" 
                className="text-gray-300 transition-colors hover:text-orange-500"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.157 1.2A4.92 4.92 0 0016.916 2a4.935 4.935 0 00-4.935 4.935c0 .388.044.764.127 1.124A14.017 14.017 0 013.616 3.132a4.89 4.89 0 00-.666 2.478c0 1.715.871 3.225 2.19 4.112a4.895 4.895 0 01-2.23-.616v.061a4.937 4.937 0 003.955 4.838 4.9 4.9 0 01-2.223.084 4.937 4.937 0 004.604 3.426 9.893 9.893 0 01-6.126 2.106c-.4 0-.792-.023-1.18-.067a13.948 13.948 0 007.548 2.209c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a10.028 10.028 0 002.46-2.548l-.045-.02z" />
                </svg>
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 transition-colors hover:text-orange-500"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.887-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Tabassam Initiative. All rights reserved.</p>
            <p className="mt-2">Made with love in Likoni, Kenya.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
