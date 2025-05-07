"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurWork() {
  // Audience tiles data
  const audienceTiles = [
    {
      id: "children",
      title: "Children (12-17)",
      icon: "👧",
      description:
        "Empowering children with knowledge and skills to avoid drugs and build healthy futures.",
      programs: ["BrainShield", "Peer Leadership", "School Programs"],
    },
    {
      id: "youth",
      title: "Youth (18-25)",
      icon: "👨‍🎓",
      description:
        "Supporting young adults with rehabilitation, mentorship, and economic opportunities.",
      programs: ["Hustle Hub", "Mentorship", "Job Training"],
    },
    {
      id: "parents",
      title: "Parents & Families",
      icon: "👪",
      description:
        "Strengthening families to support their children through addiction recovery.",
      programs: ["Family Reset", "WhatsApp Support", "Parenting Skills"],
    },
    {
      id: "leaders",
      title: "Community Leaders",
      icon: "🧑‍⚖️",
      description:
        "Partnering with local authorities and leaders to create supportive environments.",
      programs: ["Chief's Pledge", "CHV Training", "Community Mobilization"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-white py-16 dark:bg-gray-800" id="our-work">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            OUR WORK
          </h2>
          <div className="mx-auto h-1 w-24 bg-orange-500"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our focus is exclusively on children and youth - Kenya's present and future.
          </p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audienceTiles.map((tile) => (
            <motion.div
              key={tile.id}
              className="overflow-hidden rounded-lg bg-gray-50 transition-all dark:bg-gray-700"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="p-6">
                <div className="mb-4 text-4xl">{tile.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {tile.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {tile.description}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                    Our Interventions:
                  </p>
                  <ul className="ml-5 list-disc text-sm text-gray-600 dark:text-gray-300">
                    {tile.programs.map((program, index) => (
                      <li key={index}>{program}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-1 w-full bg-orange-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}