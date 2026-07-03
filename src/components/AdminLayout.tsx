"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "./Providers";
import {
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
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Bell,
  Search,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { ALL_PAGES, PageInfo } from "@/data/pagesDb";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const { theme, dir, toggleTheme, toggleDir } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    dashboard: true,
    "ai-apps": true,
  });

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const navGroups = [
    { id: "dashboard", label: "Dashboards", icon: LayoutDashboard, pathPrefix: "/dashboard" },
    { id: "ai-apps", label: "AI Apps", icon: Bot, pathPrefix: "/ai-apps" },
    { id: "crm", label: "CRM", icon: Contact, pathPrefix: "/crm" },
    { id: "project", label: "Project Mgmt", icon: FolderKanban, pathPrefix: "/project" },
    { id: "ecommerce", label: "eCommerce", icon: ShoppingBag, pathPrefix: "/ecommerce" },
    { id: "lms", label: "LMS Portal", icon: GraduationCap, pathPrefix: "/lms" },
    { id: "help-desk", label: "Help Desk", icon: HelpCircle, pathPrefix: "/help-desk" },
    { id: "hr", label: "HR Systems", icon: Users, pathPrefix: "/hr" },
    { id: "finance", label: "Finance & Tax", icon: CircleDollarSign, pathPrefix: "/finance" },
    { id: "healthcare", label: "Healthcare", icon: HeartPulse, pathPrefix: "/healthcare" },
    { id: "components", label: "UI Components", icon: Component, pathPrefix: "/components" },
    { id: "auth", label: "Auth & Utils", icon: Lock, pathPrefix: "/auth" },
    { id: "docs", label: "Docs & Guides", icon: FileText, pathPrefix: "/docs" },
  ];

  const getPagesForGroup = (groupName: string): PageInfo[] => {
    // Return all pages belonging to the specified navigation group
    return ALL_PAGES.filter((p) => p.group === groupName);
  };

  const renderSidebar = () => (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
      {/* Brand Logo */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/55 dark:bg-slate-900/55">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Auralis AI
          </span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2 custom-scrollbar">
        {navGroups.map((group) => {
          const Icon = group.icon;
          const isExpanded = !!expandedGroups[group.id];
          const groupPages = getPagesForGroup(group.id);

          return (
            <div key={group.id} className="space-y-1">
              <button
                onClick={() => toggleGroup(group.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  pathname.startsWith(group.pathPrefix)
                    ? "bg-indigo-50/70 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{group.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                    {groupPages.length}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-250 ${
                      isExpanded ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="pl-9 space-y-1 border-l border-slate-100 dark:border-slate-800/60 ml-5 py-1">
                  {groupPages.map((page) => {
                    const pagePath = `/${group.id}/${page.slug}`;
                    const isActive = pathname === pagePath;

                    return (
                      <Link
                        key={page.slug}
                        href={pagePath}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-1.5 px-3 rounded-lg text-xs transition-colors duration-150 ${
                          isActive
                            ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/30 dark:bg-indigo-950/20"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                        }`}
                      >
                        {page.title.replace(" Dashboard", "").replace(" Analytics", "").replace(" System", "").replace(" UI", "")}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/20"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">Sarah Connor</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">sarah@auralis.ai</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 h-screen sticky top-0">
        {renderSidebar()}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
        ></div>
      )}

      {/* Mobile Drawer Container */}
      <aside
        className={`lg:hidden fixed top-0 bottom-0 z-50 w-64 max-w-[80vw] transition-transform duration-300 ${
          dir === "rtl" ? "right-0" : "left-0"
        } ${
          mobileMenuOpen
            ? "translate-x-0"
            : dir === "rtl"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        {renderSidebar()}
      </aside>

      {/* Content wrapper */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md">
          {/* Left search */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative hidden md:block w-64 xl:w-80">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search resources, apps or settings..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* RTL toggle */}
            <button
              onClick={toggleDir}
              title="Toggle RTL/LTR direction"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* Dark Mode toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle theme mode"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Notification drop */}
            <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>

            {/* Back to landing */}
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/10 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Preview Demo</span>
            </Link>
          </div>
        </header>

        {/* Content body */}
        <main className="flex-1 p-6 md:p-8 xl:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
