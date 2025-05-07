"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a basic implementation - in production, use proper auth
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // Statistics for the dashboard
  const dashboardStats = [
    { label: "Resource Documents", value: 24, icon: "📄" },
    { label: "Volunteer Registrations", value: 18, icon: "👥" },
    { label: "Instagram Posts Linked", value: 12, icon: "📸" },
    { label: "News Articles", value: 8, icon: "📰" },
  ];

  // Recent activities - would be dynamically loaded in production
  const recentActivities = [
    { 
      id: 1, 
      action: "New Policy Brief Uploaded", 
      user: "Keah", 
      time: "Today, 10:45 AM",
      status: "approved"
    },
    { 
      id: 2, 
      action: "Research Paper Added", 
      user: "Admin", 
      time: "Yesterday, 3:22 PM",
      status: "pending"
    },
    { 
      id: 3, 
      action: "Volunteer Application Received", 
      user: "System", 
      time: "May 5, 2024",
      status: "review"
    },
  ];

  // Render login form if not logged in
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              TABASSAM Admin
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Login to manage content and resources
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-orange-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-label="Username"
              />
            </div>

            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-orange-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>For demo purposes: username = &quot;admin&quot;, password = &quot;password&quot;</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md dark:bg-gray-800">
        <div className="border-b border-gray-200 p-4 dark:border-gray-700">
          <h1 className="text-xl font-bold text-orange-500">TABASSAM Admin</h1>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-sm ${
                  activeTab === "dashboard"
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("dashboard")}
              >
                <span className="mr-3">📊</span>
                Dashboard
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-sm ${
                  activeTab === "resources"
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("resources")}
              >
                <span className="mr-3">📄</span>
                Resources
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-sm ${
                  activeTab === "impact"
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("impact")}
              >
                <span className="mr-3">📈</span>
                Impact Data
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-sm ${
                  activeTab === "news"
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("news")}
              >
                <span className="mr-3">📰</span>
                News Feeds
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-sm ${
                  activeTab === "users"
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("users")}
              >
                <span className="mr-3">👥</span>
                Users
              </button>
            </li>
          </ul>
          
          <div className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
            <button
              className="flex w-full items-center rounded-lg px-4 py-2 text-left text-sm text-gray-700 hover:bg-red-100 hover:text-red-700 dark:text-gray-300 dark:hover:bg-red-900/20 dark:hover:text-red-400"
              onClick={() => setIsLoggedIn(false)}
            >
              <span className="mr-3">🚪</span>
              Logout
            </button>
            <Link 
              href="/"
              className="mt-2 flex w-full items-center rounded-lg px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <span className="mr-3">🏠</span>
              View Website
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        {activeTab === "dashboard" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Dashboard Overview
            </h2>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dashboardStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
                >
                  <div className="flex items-center">
                    <div className="mr-4 text-3xl">{stat.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
              Recent Activity
            </h3>
            
            <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4"
                  >
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        by {activity.user} • {activity.time}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          activity.status === "approved"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : activity.status === "pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Resources Management
            </h2>
            
            <div className="mb-6 flex justify-between">
              <div className="flex gap-2">
                <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
                  + Add New Resource
                </button>
                <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                  Bulk Upload
                </button>
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Date Added
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Kenya National Drug Control Policy 2024
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      Policy Brief
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      May 7, 2024
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        Published
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="mr-2 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Parent&apos;s Guide to Substance Abuse Prevention
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      Toolkit
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      May 5, 2024
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Draft
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="mr-2 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "impact" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Impact Measurement & Reporting
            </h2>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Mwanga Wa Kesho Yetu
                </h3>
                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Children Reached
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value="85"
                      className="mr-2 w-24 rounded border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      aria-label="Children Reached Count"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      out of target: 200
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    School Sessions
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value="12"
                      className="mr-2 w-24 rounded border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      aria-label="School Sessions Count"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      out of target: 50
                    </span>
                  </div>
                </div>
                <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
                  Update Metrics
                </button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Generate Reports
                </h3>
                <div className="mb-4">
                  <label 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="reportType"
                  >
                    Report Type
                  </label>
                  <select 
                    id="reportType"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    aria-label="Report Type"
                  >
                    <option>Monthly Impact Summary</option>
                    <option>Quarterly Progress Report</option>
                    <option>Annual Donor Report</option>
                    <option>Custom Report</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      defaultValue="2024-04-01"
                      aria-label="Start Date"
                    />
                    <span>to</span>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      defaultValue="2024-05-01"
                      aria-label="End Date"
                    />
                  </div>
                </div>
                <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Generate Report
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                Recent Impact Stories
              </h3>

              <div className="mb-4">
                <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                  + Add New Story
                </button>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-4">
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Youth Employment Initiative Success
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Added May 3, 2024 • 3 photos • 2 testimonials
                  </p>
                </div>
                <div className="py-4">
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    School Intervention Program Results
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Added April 28, 2024 • 5 photos • 1 video
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "news" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              News & Alerts Integration
            </h2>
            
            <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                RSS Feed Settings
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="nationFeed"
                  >
                    Nation.co.ke Feed URL
                  </label>
                  <input
                    id="nationFeed"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value="https://nation.africa/kenya/rss/news"
                    aria-label="Nation.co.ke Feed URL"
                  />
                </div>
                
                <div>
                  <label 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="standardFeed"
                  >
                    Standard Digital Feed URL
                  </label>
                  <input
                    id="standardFeed"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value="https://www.standardmedia.co.ke/rss/headlines.php"
                    aria-label="Standard Digital Feed URL"
                  />
                </div>
                
                <div>
                  <label 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="nacadaFeed"
                  >
                    NACADA Updates Feed
                  </label>
                  <input
                    id="nacadaFeed"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value="https://nacada.go.ke/feed"
                    aria-label="NACADA Updates Feed"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="auto-approve"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600"
                    aria-label="Auto-approve news items"
                  />
                  <label
                    htmlFor="auto-approve"
                    className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Auto-approve news items containing these keywords:
                  </label>
                </div>
                
                <div>
                  <label 
                    htmlFor="keywords"
                    className="sr-only"
                  >
                    Keywords for auto-approval
                  </label>
                  <input
                    id="keywords"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value="youth, children, drug abuse, substance abuse, mental health, rehabilitation"
                    aria-label="Keywords for auto-approval"
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Comma-separated keywords
                  </p>
                </div>
                
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Save Feed Settings
                </button>
              </div>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 flex items-center justify-between text-lg font-semibold text-gray-800 dark:text-white">
                <span>Pending News Items</span>
                <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                  4 items need review
                </span>
              </h3>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      NACADA Launches New Youth Prevention Program
                    </h4>
                    <div className="flex space-x-2">
                      <button className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                        Approve
                      </button>
                      <button className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50">
                        Reject
                      </button>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Source: NACADA Kenya • May 6, 2024
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The National Authority for the Campaign Against Alcohol and Drug 
                    Abuse has launched a new prevention program targeting youth in 
                    secondary schools across Kenya...
                  </p>
                </div>
                
                <div className="py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Study Shows Rise in Mental Health Issues Among Teens
                    </h4>
                    <div className="flex space-x-2">
                      <button className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                        Approve
                      </button>
                      <button className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50">
                        Reject
                      </button>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Source: Nation.co.ke • May 5, 2024
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    A new study by the Ministry of Health shows concerning trends 
                    in adolescent mental health, with cases of depression and anxiety 
                    increasing by 30% among teenagers in urban areas...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              User Management
            </h2>
            
            <div className="mb-6 flex justify-between">
              <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
                + Add New User
              </button>
              
              <div>
                <input
                  type="text"
                  placeholder="Search users..."
                  className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Keah Salim
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      keah@tabassam.org
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        Administrator
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="mr-2 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        Deactivate
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        John Doe
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      john@tabassam.org
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Content Editor
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="mr-2 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        Deactivate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}