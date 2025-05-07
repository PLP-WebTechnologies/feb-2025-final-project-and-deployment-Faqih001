"use client";

import { motion } from "framer-motion";

export default function MwangaSpotlight() {
  // Project stats that would be updated from admin dashboard
  const projectStats = [
    { label: "Children Reached", value: 85, target: 200, color: "bg-orange-500" },
    { label: "School Sessions", value: 12, target: 50, color: "bg-green-500" },
    { label: "Family Outreach", value: 34, target: 100, color: "bg-blue-500" },
    { label: "Youth Mentored", value: 28, target: 100, color: "bg-purple-500" },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-800" id="mwanga">
      <div className="container mx-auto px-4">
        {/* Title with custom styling */}
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="relative inline-block">
              Mwanga Wa Kesho Yetu
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="italic">Shining Light on Tomorrow</span> - 
            Our flagship project transforming children & youth away from drugs.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column - Project information */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Project Purpose
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Mwanga Wa Kesho Yetu aims to create a comprehensive support system 
                for children and youth at risk of substance abuse in Likoni. 
                By combining school interventions, family support, and community
                partnerships, we&apos;re creating a network of protection and opportunity.
              </p>
              <ul className="ml-5 space-y-2 list-disc text-gray-700 dark:text-gray-300">
                <li>Early intervention in schools before drug use begins</li>
                <li>Rehabilitation support for youth already affected</li>
                <li>Family healing and strengthening to rebuild home environments</li>
                <li>Educational and economic opportunities for sustainable change</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-700">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Our Approach
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We believe in holistic, community-driven solutions that address not just 
                the symptoms of substance abuse, but its root causes - including poverty,
                lack of opportunity, and family breakdown.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-white p-3 text-center shadow-sm dark:bg-gray-800">
                  <div className="mb-2 text-3xl text-orange-500">🏫</div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    School Programs
                  </h4>
                </div>
                <div className="rounded-md bg-white p-3 text-center shadow-sm dark:bg-gray-800">
                  <div className="mb-2 text-3xl text-orange-500">👪</div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Family Support
                  </h4>
                </div>
                <div className="rounded-md bg-white p-3 text-center shadow-sm dark:bg-gray-800">
                  <div className="mb-2 text-3xl text-orange-500">🎓</div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Skills Training
                  </h4>
                </div>
                <div className="rounded-md bg-white p-3 text-center shadow-sm dark:bg-gray-800">
                  <div className="mb-2 text-3xl text-orange-500">❤️</div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Rehabilitation
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Progress dashboard */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">
              Project Progress
            </h3>
            
            <div className="mb-8 space-y-8">
              {projectStats.map((stat, index) => (
                <div key={index}>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                      {stat.value} / {stat.target}
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className={`h-full rounded-full ${stat.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${(stat.value / stat.target) * 100}%` }}
                      transition={{ duration: 1.2, delay: 0.3 * index }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-md bg-orange-50 p-4 dark:bg-orange-900/10">
              <h4 className="mb-3 text-center text-lg font-semibold text-gray-800 dark:text-white">
                Next Milestone
              </h4>
              <div className="mb-4 flex items-center justify-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-orange-600 dark:text-orange-400">August 2024</span>
              </div>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                Launch of youth entrepreneurship program with 25 participants
                from Likoni secondary schools.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
              >
                Support This Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}