"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  // Array of letters for the headline
  const headlineLetters = "TABASSAM".split("");
  const [videoError, setVideoError] = useState(false);

  return (
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
              <source src="/video-background.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-gray-900 via-orange-900/40 to-black"></div>
        )}
      </div>

      {/* Main Content */}
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
      </div>
    </div>
  );
}
