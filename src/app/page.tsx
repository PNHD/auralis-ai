"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/Providers";
import {
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  Globe,
  LayoutDashboard,
  Bot,
  Contact,
  FolderKanban,
  ShoppingBag,
  GraduationCap,
  HelpCircle,
  Users,
  CircleDollarSign,
  HeartPulse,
  Component,
  Lock,
  FileText,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { ALL_PAGES, PageInfo } from "@/data/pagesDb";

export default function LandingPage() {
  const { theme, dir, toggleTheme, toggleDir } = useApp();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Pages", count: ALL_PAGES.length },
    { id: "dashboard", label: "Dashboards", count: 12 },
    { id: "ai-apps", label: "AI Apps", count: 20 },
    { id: "crm", label: "CRM Pages", count: 15 },
    { id: "project", label: "Project Mgmt", count: 15 },
    { id: "ecommerce", label: "eCommerce", count: 15 },
    { id: "lms", label: "LMS Portal", count: 12 },
    { id: "help-desk", label: "Help Desk", count: 12 },
    { id: "hr", label: "HR Systems", count: 12 },
    { id: "finance", label: "Finance", count: 10 },
    { id: "healthcare", label: "Healthcare", count: 10 },
    { id: "components", label: "UI Components", count: 25 },
    { id: "auth", label: "Auth & Utils", count: 20 },
    { id: "docs", label: "Documentation", count: 10 },
  ];

  const filteredPages = activeCategory === "all"
    ? ALL_PAGES
    : ALL_PAGES.filter(p => p.group === activeCategory);

  const keyFeatures = [
    { title: "Next.js + TypeScript", desc: "Built with the latest App Router structure.", icon: Cpu },
    { title: "Tailwind CSS", desc: "No custom CSS bloat. Custom themes configure in globals.css.", icon: Layers },
    { title: "RTL Ready", desc: "Full direction switch support for Arabic/Hebrew layouts.", icon: Globe },
    { title: "Light & Dark Mode", desc: "Seamless class-based theme switcher.", icon: Sun },
    { title: "No jQuery", desc: "100% clean component-based React state architecture.", icon: Zap },
    { title: "Well Documented", desc: "Comprehensive guides to customize layouts and routes.", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      {/* Background Glowing Blobs */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] dark:bg-indigo-500/5"></div>
        <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] dark:bg-purple-500/5"></div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/40">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 text-white p-2.5 rounded-2xl shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-slate-950 to-slate-800 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Auralis AI
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDir}
            title="Toggle RTL/LTR"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </button>
          <button
            onClick={toggleTheme}
            title="Toggle Theme"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-slate-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
          <Link
            href="/documentation"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 duration-150"
          >
            <span>Read Docs</span>
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multipurpose SaaS Website & Admin Dashboard Template</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-white dark:to-slate-200 bg-clip-text text-transparent max-w-4xl mx-auto">
          ThemeForest Grade Next.js + Tailwind Template
        </h1>

        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock 184+ high-fidelity routes, 12+ premium dashboard layouts, and AI application mockups.
          Built using clean components, ready to load your APIs.
        </p>

        {/* Big Badge Claims */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {["184+ Pages", "12+ Dashboards", "RTL Ready", "Light & Dark Mode", "No jQuery", "Well Documented"].map(
            (badge, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {badge}
              </span>
            )
          )}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/dashboard/ai-saas"
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Dashboard Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#routes-explorer"
            className="px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-2xl shadow-sm transition"
          >
            <span>Browse 184+ Routes</span>
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl font-extrabold">ThemeForest Grade Feature Set</h2>
          <p className="text-xs text-slate-400">Everything needed to build professional enterprise layouts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-500/10 p-3 rounded-xl w-fit text-indigo-500 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm mb-2">{f.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dashboard Preview Cards */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl font-extrabold">12+ Dashboard Layout Variants</h2>
          <p className="text-xs text-slate-400">Pre-designed control panels optimized for multiple business metrics</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { id: "ai-saas", title: "AI SaaS Console", desc: "API usage and limits parameters.", color: "from-violet-500 to-indigo-500" },
            { id: "analytics", title: "Advanced Analytics", desc: "Chart reports and traffic sources.", color: "from-blue-500 to-sky-500" },
            { id: "crm-dashboard", title: "CRM Control Panel", desc: "Pipeline details and sales representative records.", color: "from-emerald-500 to-teal-500" },
            { id: "project-mgmt", title: "Project Management", desc: "Task tracking and workloads timeline.", color: "from-amber-500 to-orange-500" },
            { id: "ecommerce", title: "eCommerce Dashboard", desc: "Sales totals, cart ratios and products inventory.", color: "from-fuchsia-500 to-pink-500" },
            { id: "lms", title: "LMS Learning Portal", desc: "Curriculum trackers and classes lists.", color: "from-indigo-500 to-cyan-500" },
            { id: "help-desk", title: "Help Desk Support", desc: "Customer tickets queues and CSAT stats.", color: "from-rose-500 to-pink-500" },
            { id: "hr-mgmt", title: "HR Administration", desc: "Headcount charts and time-off requests.", color: "from-purple-500 to-indigo-500" },
          ].map((dash, idx) => (
            <Link
              key={idx}
              href={`/dashboard/${dash.id}`}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className={`h-3 bg-gradient-to-r ${dash.color}`}></div>
              <div className="p-5 space-y-2">
                <h5 className="font-extrabold text-xs text-slate-400 uppercase tracking-widest">Dashboard #{idx + 1}</h5>
                <h4 className="font-bold text-sm group-hover:text-indigo-500 transition-colors">{dash.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{dash.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Routes Explorer (Dynamic Explorer) */}
      <section id="routes-explorer" className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-extrabold">Complete Page Directory Explorer</h2>
            <p className="text-xs text-slate-400 mt-1">Interactively review and select from 184+ exported static routes</p>
          </div>
        </div>

        {/* Categories Scroller */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                  : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id ? "bg-indigo-700 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPages.slice(0, 32).map((p) => (
            <Link
              key={p.slug}
              href={`/${p.group}/${p.slug}`}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl hover:border-indigo-500/50 hover:shadow-md transition-all group flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-indigo-500 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                  {p.group}
                </span>
                <h4 className="font-bold text-sm mt-3 text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 transition-colors">
                  {p.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5 line-clamp-2">
                  {p.description}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mt-4 group-hover:translate-x-1 transition-transform">
                <span>Load Live Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {filteredPages.length > 32 && (
          <div className="text-center mt-10">
            <p className="text-xs text-slate-400">And {filteredPages.length - 32} more pages in this category...</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 py-12 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>© 2026 Auralis AI template. Created for ThemeForest kit portfolios.</p>
        <p className="mt-1">All rights reserved. Static mockups ready for dynamic API hooks integration.</p>
      </footer>
    </div>
  );
}
