"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("policy");
  
  const resourceTypes = [
    {
      id: "policy",
      label: "Policy Briefs",
      description: "Latest policy updates from Kenya, NACADA, and international organizations"
    },
    {
      id: "research",
      label: "Research Papers",
      description: "Academic and field research on youth, narcotics, mental health, and rehabilitation"
    },
    {
      id: "toolkits",
      label: "Toolkits",
      description: "Practical guides for parents, teachers, and youth leaders"
    },
    {
      id: "reports",
      label: "Our Reports",
      description: "Tabassam's monitoring, evaluation, and annual impact reports"
    }
  ];

  // Mock data for resources - this would be dynamically loaded from the backend
  const mockResources = {
    policy: [
      {
        id: 1,
        title: "Kenya National Drug Control Policy 2024",
        source: "NACADA Kenya",
        date: "March 2024",
        summary: "Latest guidelines on youth drug prevention and control measures in Kenya.",
        tag: "Kenya",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Youth Mental Health Framework",
        source: "Ministry of Health Kenya",
        date: "January 2024",
        summary: "Comprehensive approach to youth mental health services across Kenya.",
        tag: "Kenya",
        downloadUrl: "#"
      },
      {
        id: 3,
        title: "Drug Use Prevention Guidelines",
        source: "UNODC",
        date: "November 2023",
        summary: "International standards for prevention of drug use among children and youth.",
        tag: "International",
        downloadUrl: "#"
      }
    ],
    research: [
      {
        id: 1,
        title: "Risk Factors for Youth Substance Abuse in Coastal Kenya",
        source: "University of Nairobi",
        date: "February 2024",
        summary: "Research examining key factors contributing to youth drug use in coastal regions.",
        tag: "Academic",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Efficacy of School-Based Prevention Programs",
        source: "NACADA Research Department",
        date: "December 2023",
        summary: "Evaluation of prevention programs in Kenyan secondary schools.",
        tag: "Government",
        downloadUrl: "#"
      }
    ],
    toolkits: [
      {
        id: 1,
        title: "Parent's Guide to Substance Abuse Prevention",
        source: "Tabassam Initiative",
        date: "April 2024",
        summary: "Practical tools for parents to recognize and address substance abuse risks.",
        tag: "Families",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Teacher's Toolkit: Drug Prevention in Schools",
        source: "Ministry of Education",
        date: "January 2024",
        summary: "Resources for educators to implement prevention programs in classrooms.",
        tag: "Education",
        downloadUrl: "#"
      }
    ],
    reports: [
      {
        id: 1,
        title: "Tabassam Initial Impact Assessment",
        source: "Tabassam Initiative",
        date: "May 2024",
        summary: "First evaluation of our programs and interventions in Likoni.",
        tag: "Internal",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Mwanga Wa Kesho Yetu: Progress Report",
        source: "Tabassam Initiative",
        date: "April 2024",
        summary: "Updates on our flagship youth intervention program.",
        tag: "Project",
        downloadUrl: "#"
      }
    ]
  };

  // News alerts section - would be dynamically pulled from RSS feeds
  const newsAlerts = [
    {
      id: 1,
      title: "NACADA Announces New Youth Prevention Campaign",
      source: "Nation.co.ke",
      date: "May 1, 2024",
      summary: "Kenya's anti-drug agency launches nationwide campaign targeting schools.",
      url: "#"
    },
    {
      id: 2,
      title: "Report Shows Rising Mental Health Issues Among Kenyan Youth",
      source: "Standard Digital",
      date: "April 28, 2024",
      summary: "New study highlights need for increased mental health support for teenagers.",
      url: "#"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900" id="resources">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Resources</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            For Advocates, Parents, & Policymakers
          </p>
          <div className="mx-auto mt-2 h-1 w-24 bg-orange-500"></div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {resourceTypes.map((type) => (
            <button
              key={type.id}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === type.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab(type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Tab Description */}
        <div className="mb-10 text-center">
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            {resourceTypes.find(type => type.id === activeTab)?.description}
          </p>
        </div>

        {/* Resources Grid */}
        <motion.div 
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {mockResources[activeTab as keyof typeof mockResources].map((resource) => (
            <motion.div
              key={resource.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
              variants={cardVariants}
            >
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                    {resource.tag}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{resource.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {resource.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Source: {resource.source}
                  </span>
                  <a
                    href={resource.downloadUrl}
                    className="flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    <span>Download</span>
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* News & Alerts Section */}
        <div className="pt-8">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              News & Alerts
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Latest updates on child and youth issues in Kenya and globally
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {newsAlerts.map((news) => (
              <motion.a
                key={news.id}
                href={news.url}
                className="flex rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md dark:bg-gray-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                      {news.source}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{news.date}</span>
                  </div>
                  <h4 className="mb-1 text-lg font-semibold text-gray-800 dark:text-white">
                    {news.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{news.summary}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}