"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/components/Providers";
import { STITCH_HTML } from "@/data/stitchHtml";
import { ALL_PAGES } from "@/data/pagesDb";
import {
  Sparkles,
  Search,
  Globe,
  Sun,
  Moon,
  FolderOpen,
  X,
  ChevronRight,
  ArrowUpRight,
  Layout,
  Layers,
  Cpu,
} from "lucide-react";

export default function Home() {
  const { theme, dir, toggleTheme, toggleDir } = useApp();
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Load Stitch homepage HTML
  const homeScreen = STITCH_HTML["marketing/home"];

  // Execute inline scripts for the homepage
  useEffect(() => {
    const container = document.getElementById("stitch-home-container");
    if (!container) return;

    const scripts = container.querySelectorAll("script");
    const spawnedScripts: HTMLScriptElement[] = [];

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        // Wrap in IIFE to scope variables and prevent redeclaration errors
        newScript.textContent = `(function(){${oldScript.textContent}})();`;
      }
      document.body.appendChild(newScript);
      spawnedScripts.push(newScript);
    });

    return () => {
      spawnedScripts.forEach((s) => s.remove());
    };
  }, []);

  // Categories list
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
    { id: "finance", label: "Finance Pages", count: 10 },
    { id: "healthcare", label: "Healthcare", count: 10 },
    { id: "components", label: "Components", count: 25 },
    { id: "auth", label: "Auth & Utils", count: 20 },
    { id: "docs", label: "Documentation", count: 10 },
  ];

  // Filter pages
  const filteredPages = ALL_PAGES.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.group === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen">
      {/* Stitch HTML Renderer */}
      {homeScreen ? (
        <div
          id="stitch-home-container"
          className={`${homeScreen.bodyClass} min-h-screen`}
          dangerouslySetInnerHTML={{ __html: homeScreen.html }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
          <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
          <h2 className="text-xl font-bold">Stitch Design System Loading...</h2>
          <p className="text-xs text-slate-400 mt-2">Failed to load the HTML layout</p>
        </div>
      )}

      {/* Floating Demo Control Bar (Premium theme toggle / explorer trigger) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-102">
        {/* Sparkle branding */}
        <div className="flex items-center gap-2 border-r border-white/10 pr-3">
          <div className="bg-gradient-to-tr from-violet-500 to-indigo-500 text-white p-1.5 rounded-lg">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-black tracking-wider text-white uppercase hidden md:inline">
            Auralis AI
          </span>
        </div>

        {/* Action Controls */}
        <button
          onClick={toggleDir}
          title="Toggle Layout Direction (RTL / LTR)"
          className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition"
        >
          <Globe className="w-4 h-4" />
        </button>

        <button
          onClick={toggleTheme}
          title="Toggle Dark/Light Mode"
          className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Page Directory Toggle Button */}
        <button
          onClick={() => setExplorerOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-bold rounded-lg shadow-lg shadow-indigo-600/20 transition-all active:scale-98"
        >
          <FolderOpen className="w-3.5 h-3.5" />
          <span>Browse 198+ Pages Portal</span>
        </button>
      </div>

      {/* Slide-over Drawer Page Explorer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
          explorerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setExplorerOpen(false)}
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
        />

        {/* Slider panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-2xl bg-slate-900 border-l border-slate-800 text-white shadow-2xl flex flex-col transition-transform duration-300 ${
            explorerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/20">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500/10 p-2 rounded-xl text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm">ThemeForest Multipurpose Kit Portal</h3>
                <p className="text-[10px] text-slate-400">Navigate 198 physical routes compiled from Stitch</p>
              </div>
            </div>
            <button
              onClick={() => setExplorerOpen(false)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search bar */}
          <div className="p-6 border-b border-slate-800 bg-slate-950/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search from 198+ pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/50 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition"
              />
            </div>
          </div>

          {/* Categories Tab list */}
          <div className="flex items-center gap-2 overflow-x-auto px-6 py-4 border-b border-slate-800 bg-slate-950/5 custom-scrollbar scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold shrink-0 transition-all ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1 text-[9px] px-1 py-0.2 bg-black/20 rounded-full text-indigo-300">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Pages list scrollable container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {filteredPages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredPages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.group}/${p.slug}`}
                    onClick={() => setExplorerOpen(false)}
                    className="flex flex-col justify-between p-4 bg-slate-950/30 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-950/50 rounded-xl transition group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-extrabold uppercase text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                          {p.group}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <h4 className="font-bold text-xs mt-2 group-hover:text-indigo-400 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500">
                <Layout className="w-8 h-8 mb-2 opacity-50" />
                <p className="text-xs">No pages found matching search</p>
              </div>
            )}
          </div>

          {/* Footer of the Portal panel */}
          <div className="p-6 border-t border-slate-800 bg-slate-950 text-center text-[10px] text-slate-500 flex justify-between items-center">
            <span>Auralis AI multipurpose presentation kit</span>
            <span>198 screens compiled statically</span>
          </div>
        </div>
      </div>
    </div>
  );
}
