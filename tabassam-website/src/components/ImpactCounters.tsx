"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ImpactCounters() {
  const [instagramPosts, setInstagramPosts] = useState([
    {
      id: 1,
      imageUrl: "https://placehold.co/300x300/orange/white?text=Instagram+Post",
      caption: "Recent youth outreach event #TabassamInitiative #YouthFirstKE",
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/300x300/orange/white?text=Instagram+Post",
      caption: "Working with families in Likoni #SmileForTheFuture",
    },
    {
      id: 3,
      imageUrl: "https://placehold.co/300x300/orange/white?text=Instagram+Post",
      caption: "Mwanga Wa Kesho Yetu progress #MwangaWaKeshoYetu",
    },
  ]);

  // Placeholder achievements that would come from admin dashboard
  const achievements = [
    { id: 1, text: "First youth outreach event completed" },
    { id: 2, text: "Partnership with local school established" },
    { id: 3, text: "Community training program launched" },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Our Impact
        </h2>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Instagram Feed */}
          <motion.div
            className="overflow-hidden rounded-lg bg-white p-5 shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Follow Our Journey
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative aspect-square overflow-hidden rounded-md"
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.caption}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2">
                    <p className="text-xs text-white line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            className="overflow-hidden rounded-lg bg-white p-5 shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Recent Achievements
            </h3>

            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="rounded-md border-l-4 border-orange-500 bg-orange-50 p-3 dark:bg-gray-700/50"
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button className="inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
                View All Achievements
              </button>
            </div>
          </motion.div>

          {/* Placeholder Counter */}
          <motion.div
            className="overflow-hidden rounded-lg bg-white p-5 shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Our Growing Impact
            </h3>

            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                  Smiles Impacted
                </h4>
                <p className="text-3xl font-bold text-orange-500">
                  The Journey Begins!
                </p>
              </div>

              <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="h-full rounded-full bg-orange-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "15%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Help us grow our impact by volunteering or donating today.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}