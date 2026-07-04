"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  Percent,
  Activity,
  Plus,
  Search,
  CheckCircle,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronRight,
  Send,
  Image as ImageIcon,
  FileText,
  Video,
  Download,
  Calendar as CalendarIcon,
  Trash,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MapPin,
  Moon,
  Sun,
  Globe,
  Settings,
  Shield,
  Upload,
  Play,
  RotateCw,
  FolderKanban,
  ShoppingBag,
  GraduationCap,
  Cpu,
  Layers,
  HelpCircle,
} from "lucide-react";
import Charts from "./Charts";
import { useApp } from "./Providers";
import { ALL_PAGES, PageInfo } from "@/data/pagesDb";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  PageTransition,
  TiltCard,
  AnimatedNumber,
} from "./Animations";

// Dynamic mock databases
const MOCK_DATA = {
  analytics: [
    { name: "Mon", Users: 2400, Sessions: 4000, Revenue: 2400 },
    { name: "Tue", Users: 1398, Sessions: 3000, Revenue: 2210 },
    { name: "Wed", Users: 9800, Sessions: 2000, Revenue: 2290 },
    { name: "Thu", Users: 3908, Sessions: 2780, Revenue: 2000 },
    { name: "Mon", Users: 4800, Sessions: 1890, Revenue: 2181 },
    { name: "Sat", Users: 3800, Sessions: 2390, Revenue: 2500 },
    { name: "Sun", Users: 4300, Sessions: 3490, Revenue: 3100 },
  ],
  campaigns: [
    { name: "Week 1", Spend: 1200, Conversions: 180 },
    { name: "Week 2", Spend: 1900, Conversions: 240 },
    { name: "Week 3", Spend: 1500, Conversions: 310 },
    { name: "Week 4", Spend: 2100, Conversions: 420 },
  ],
  finance: [
    { name: "Jan", Revenue: 45000, Expenses: 32000 },
    { name: "Feb", Revenue: 52000, Expenses: 34000 },
    { name: "Mar", Revenue: 49000, Expenses: 31000 },
    { name: "Apr", Revenue: 63000, Expenses: 41000 },
    { name: "May", Revenue: 58000, Expenses: 39000 },
  ],
  healthcare: [
    { name: "Cardiology", Outpatients: 120, Inpatients: 45 },
    { name: "Neurology", Outpatients: 80, Inpatients: 30 },
    { name: "Pediatrics", Outpatients: 150, Inpatients: 60 },
    { name: "Orthopedics", Outpatients: 95, Inpatients: 40 },
  ],
  tickets: [
    { name: "Open", value: 35 },
    { name: "Pending", value: 15 },
    { name: "Resolved", value: 45 },
    { name: "Closed", value: 5 },
  ],
};

interface PageRendererProps {
  group: string;
  slug: string;
}

/**
 * PageRenderer: Fallback UI for pages that don't have a Stitch design.
 * SmartPage handles Stitch routing — this component is ONLY for fallbacks.
 */
export default function PageRenderer({ group, slug }: PageRendererProps) {
  const { theme, dir } = useApp();
  const [activeTab, setActiveTab] = useState("overview");

  // AI chat specific states
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Hello! I am Auralis AI. How can I assist you in your workspace today?" },
  ]);

  // AI Writer states
  const [writerTopic, setWriterTopic] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [writing, setWriting] = useState(false);

  // File uploader states
  const [files, setFiles] = useState<{ name: string; size: string; type: string }[]>([]);

  // Search page page lookup
  const page = ALL_PAGES.find((p) => p.slug === slug) || {
    slug,
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: "Multi-purpose interactive view",
    group,
  };

  // Generate page content based on page category and layout slugs
  const isDashboard = group === "dashboard" || slug.includes("dashboard") || slug.endsWith("-dashboard");
  const isAiApp = group === "ai-apps";
  const isCrm = group === "crm";
  const isProject = group === "project";
  const isEcommerce = group === "ecommerce";
  const isLms = group === "lms";
  const isHelpdesk = group === "help-desk";
  const isHr = group === "hr";
  const isFinance = group === "finance";
  const isHealthcare = group === "healthcare";
  const isComponentDemo = group === "components" || slug === "components" || slug === "forms" || slug === "calendar" || slug === "gallery" || slug === "maps";
  const isAuth = group === "auth";
  const isDocs = group === "docs" || slug === "documentation";

  // RENDER SECTIONS
  // 1. DASHBOARDS RENDERER
  const renderDashboard = () => {
    switch (slug) {
      case "analytics":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Visitors", val: "148,920", change: "+18.2%", isPositive: true, desc: "vs last week", icon: Users, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Unique Sessions", val: "94,302", change: "+12.4%", isPositive: true, desc: "Avg 4m 12s duration", icon: Activity, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
                { title: "Bounce Rate", val: "38.4%", change: "-2.1%", isPositive: true, desc: "Page views up", icon: TrendingUp, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Conversions", val: "3,480", change: "+8.9%", isPositive: true, desc: "ROAS 4.2x", icon: DollarSign, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Traffic Acquisition Analytics</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Users", "Sessions"]} colors={["#6366f1", "#0ea5e9"]} type="area" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Top Referrals</h4>
                <div className="space-y-4">
                  {[
                    { source: "Google Organic", count: "48,200", percent: "51.1%", width: "w-[51.1%]" },
                    { source: "Direct Traffic", count: "24,800", percent: "26.3%", width: "w-[26.3%]" },
                    { source: "GitHub Referrals", count: "12,900", percent: "13.6%", width: "w-[13.6%]" },
                    { source: "Social Ads", count: "8,400", percent: "8.9%", width: "w-[8.9%]" },
                  ].map((ref, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>{ref.source}</span>
                        <span className="text-slate-400">{ref.count} ({ref.percent})</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full bg-indigo-500 ${ref.width} rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "crm-dashboard":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Revenue", val: "$48,920", change: "+14.2%", isPositive: true, desc: "vs last quarter", icon: DollarSign, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Lead Inflow", val: "1,248 leads", change: "+8.3%", isPositive: true, desc: "52 today", icon: Users, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Deals Progressing", val: "84 active", change: "+4.1%", isPositive: true, desc: "Avg size $4,500", icon: Activity, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Win Ratio", val: "24.2%", change: "+1.8%", isPositive: true, desc: "Higher close rate", icon: Percent, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Sales Deal Flow Funnel</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Revenue", "Users"]} colors={["#10b981", "#6366f1"]} type="bar" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Deals in pipeline</h4>
                <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { client: "Acme Corp Ltd", size: "$12,400", stage: "Proposal", status: "text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
                    { client: "Starlight Ag", size: "$8,500", stage: "Negotation", status: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                    { client: "Delta Labs", size: "$22,000", stage: "Contracting", status: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                    { client: "Alpha Inc", size: "$4,800", stage: "Lead Captured", status: "text-slate-500 bg-slate-50 dark:bg-slate-800/40" },
                  ].map((deal, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 first:pt-0">
                      <div>
                        <p className="text-xs font-bold">{deal.client}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{deal.size}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${deal.status}`}>{deal.stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "project-mgmt":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Active Sprints", val: "4 Sprints", change: "+1 today", isPositive: true, desc: "Team velocity 45", icon: FolderKanban, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Completed Tasks", val: "348 tasks", change: "+18.3%", isPositive: true, desc: "84 remaining in backlog", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Overdue Items", val: "2 delays", change: "-4", isPositive: true, desc: "Critical path clear", icon: AlertCircle, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20" },
                { title: "Resource Load", val: "88%", change: "+2%", isPositive: false, desc: "Optimal allocation", icon: Users, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Sprint Delivery Speed</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Sessions"]} colors={["#a855f7"]} type="line" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Active Projects Progress</h4>
                <div className="space-y-4">
                  {[
                    { project: "Auralis AI NextJS", progress: "85%", color: "bg-indigo-500", lead: "Sarah Connor" },
                    { project: "Tailwind V4 Upgrade", progress: "60%", color: "bg-sky-500", lead: "Alex Merc" },
                    { project: "Stitch Integrator module", progress: "40%", color: "bg-amber-500", lead: "Diana Prince" },
                    { project: "Marketing Campaign assets", progress: "100%", color: "bg-emerald-500", lead: "Clark Kent" },
                  ].map((p, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">{p.project}</span>
                        <span className="text-slate-400 font-semibold">{p.progress} (Lead: {p.lead})</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${p.color}`} style={{ width: p.progress }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "ecommerce":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Store Revenue", val: "$92,480.12", change: "+24.5%", isPositive: true, desc: "vs last month", icon: DollarSign, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Products Listed", val: "3,480 items", change: "+12 created", isPositive: true, desc: "24 categories", icon: ShoppingBag, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Abandoned Carts", val: "14%", change: "-2.5%", isPositive: true, desc: "Better conversion rate", icon: Activity, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Low Stock Alerts", val: "8 items", change: "+3 alerts", isPositive: false, desc: "Restock required", icon: AlertCircle, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Monthly Store Sales Conversion</h4>
                <Charts data={MOCK_DATA.finance} dataKeys={["Revenue"]} colors={["#e11d48"]} type="bar" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Stock notifications</h4>
                <div className="space-y-4">
                  {[
                    { item: "Wireless Keyboard MX", stock: "2 left", status: "text-rose-500 bg-rose-50 dark:bg-rose-950/20" },
                    { item: "UltraWide Curved Monitor", stock: "0 left", status: "text-rose-600 bg-rose-100 dark:bg-rose-950/40" },
                    { item: "USB-C Multiport Adapter", stock: "5 left", status: "text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
                  ].map((low, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2">
                      <span className="text-xs font-bold">{low.item}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${low.status}`}>{low.stock}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "lms":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Enrolled Students", val: "12,450", change: "+14.5%", isPositive: true, desc: "248 new this week", icon: Users, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Total Courses", val: "48 courses", change: "+2 added", isPositive: true, desc: "4 categories", icon: GraduationCap, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Completion Rate", val: "74.8%", change: "+3.2%", isPositive: true, desc: "High engagement", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Avg Quiz Score", val: "84.2%", change: "+0.5%", isPositive: true, desc: "Normal curve range", icon: Activity, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Monthly Course Enrollments</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Sessions"]} colors={["#4f46e5"]} type="area" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Instructor Leaderboard</h4>
                <div className="space-y-4">
                  {[
                    { name: "Prof. Alan Turing", courses: "8 courses", rating: "4.9/5", val: 98 },
                    { name: "Ada Lovelace", courses: "5 courses", rating: "4.8/5", val: 92 },
                    { name: "Richard Feynman", courses: "3 courses", rating: "4.9/5", val: 84 },
                  ].map((inst, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1">
                      <div>
                        <p className="text-xs font-bold">{inst.name}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{inst.courses} • Rating {inst.rating}</p>
                      </div>
                      <span className="text-xs font-bold text-indigo-500">{inst.val}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "help-desk":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Open Support Tickets", val: "35 tickets", change: "-8 yesterday", isPositive: true, desc: "Avg response 18m", icon: HelpCircle, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "SLA compliance", val: "98.4%", change: "+0.5%", isPositive: true, desc: "Standard 95%", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "CSAT Feedback", val: "4.8 / 5", change: "+1.2%", isPositive: true, desc: "184 surveys completed", icon: Activity, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
                { title: "Avg Resolution Time", val: "2.4 hours", change: "-12.5%", isPositive: true, desc: "Faster closure rate", icon: Clock, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Ticket Volume Trend</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Users", "Sessions"]} colors={["#e11d48", "#f59e0b"]} type="area" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold mb-1">Ticket Source Categories</h4>
                  <p className="text-xs text-slate-400 mb-6">Distribution by client systems</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Charts data={MOCK_DATA.tickets} dataKeys={["value"]} colors={["#6366f1", "#06b6d4", "#10b981", "#ef4444"]} type="pie" height={160} />
                </div>
              </div>
            </div>
          </div>
        );
      case "hr-mgmt":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Employees", val: "348 members", change: "+12 this month", isPositive: true, desc: "24 global contractors", icon: Users, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Active Leave Requests", val: "5 requests", change: "3 approved", isPositive: true, desc: "2 pending reviews", icon: CalendarIcon, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
                { title: "Open Vacancies", val: "18 jobs", change: "+4 listed", isPositive: true, desc: "84 candidates active", icon: FolderKanban, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Employee Turnover", val: "1.2%", change: "Under threshold", isPositive: true, desc: "High retention score", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Hiring Velocity & Funnel logs</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Users"]} colors={["#8b5cf6"]} type="bar" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Leaves Calendar Summary</h4>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", type: "Sick Leave", dates: "Jul 4 - Jul 6", status: "Approved" },
                    { name: "Sarah Smith", type: "Annual Vacation", dates: "Jul 10 - Jul 17", status: "Pending Review" },
                    { name: "Bruce Wayne", type: "Personal Leave", dates: "Jul 12 - Jul 13", status: "Approved" },
                  ].map((l, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-xs font-bold">{l.name}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{l.type} • {l.dates}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${l.status === "Approved" ? "text-green-600 bg-green-50 dark:bg-green-950/20" : "text-amber-500 bg-amber-50 dark:bg-amber-950/20"}`}>{l.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "marketing-dashboard":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Marketing Spend", val: "$12,450.00", change: "+8.4%", isPositive: false, desc: "vs last month", icon: DollarSign, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "ROAS Index", val: "4.24x ROAS", change: "+12.5%", isPositive: true, desc: "Target 3.5x", icon: TrendingUp, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Ad Impressions", val: "484,200", change: "+18.3%", isPositive: true, desc: "CTR averages 2.4%", icon: Activity, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
                { title: "Cost per Lead (CPL)", val: "$2.84", change: "-12.5%", isPositive: true, desc: "Highly optimized ad copy", icon: CheckCircle2, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Ad Spending vs Conversions</h4>
                <Charts data={MOCK_DATA.campaigns} dataKeys={["Spend", "Conversions"]} colors={["#6366f1", "#10b981"]} type="area" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Performance channels</h4>
                <div className="space-y-4">
                  {[
                    { source: "Google Ads CPC", spend: "$6,200", conversions: "210 leads", roas: "4.8x" },
                    { source: "Meta Conversion Ads", spend: "$4,100", conversions: "148 leads", roas: "3.9x" },
                    { source: "LinkedIn InMail Campaign", spend: "$2,150", conversions: "62 leads", roas: "3.2x" },
                  ].map((chan, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-xs font-bold">{chan.source}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Spend: {chan.spend} • {chan.conversions}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-950/20">{chan.roas}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "finance":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Company Revenue", val: "$248,920.00", change: "+18.2%", isPositive: true, desc: "vs last fiscal year", icon: DollarSign, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Operational Expenses", val: "$142,300.00", change: "+8.4%", isPositive: false, desc: "Infrastructure costs", icon: Activity, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
                { title: "Profit Margin", val: "42.8%", change: "+3.2%", isPositive: true, desc: "High operational efficiency", icon: TrendingUp, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Unpaid Invoices", val: "$12,400.00", change: "-18.5%", isPositive: true, desc: "4 outstanding invoices", icon: AlertCircle, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Revenue vs Expenses Ledger</h4>
                <Charts data={MOCK_DATA.finance} dataKeys={["Revenue", "Expenses"]} colors={["#10b981", "#f43f5e"]} type="area" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Transaction Ledgers</h4>
                <div className="space-y-4">
                  {[
                    { tx: "Invoice paid - Starlight Co", amt: "+$8,400.00", date: "Jul 3", type: "in" },
                    { tx: "AWS Infrastructure fee", amt: "-$2,450.00", date: "Jul 2", type: "out" },
                    { tx: "Stitch API quota renewal", amt: "-$480.00", date: "Jun 28", type: "out" },
                    { tx: "Refund payment - client #80", amt: "-$120.00", date: "Jun 25", type: "out" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-xs font-bold">{item.tx}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{item.date}</p>
                      </div>
                      <span className={`text-xs font-bold ${item.type === "in" ? "text-green-600 dark:text-green-400" : "text-rose-600 dark:text-rose-400"}`}>{item.amt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "healthcare":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Patients Inpatient", val: "184 patients", change: "+12 today", isPositive: false, desc: "Outpatients queue 54", icon: Users, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Active Appointments", val: "42 slots", change: "92% complete", isPositive: true, desc: "3 doctors on duty", icon: CalendarIcon, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
                { title: "Ward Bed Availability", val: "84 beds", change: "12 vacancies", isPositive: true, desc: "Emergency section 5 beds", icon: Activity, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Critical Stock Alerts", val: "2 alerts", change: "Syringes, gloves", isPositive: false, desc: "Resupply ordered", icon: AlertCircle, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Patient check-ins by departments</h4>
                <Charts data={MOCK_DATA.healthcare} dataKeys={["Outpatients", "Inpatients"]} colors={["#3b82f6", "#06b6d4"]} type="bar" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Doctor Schedules Today</h4>
                <div className="space-y-4">
                  {[
                    { doctor: "Dr. Gregory House", specialty: "Diagnostics", hours: "9:00 AM - 1:00 PM", status: "On Duty" },
                    { doctor: "Dr. John Watson", specialty: "General practice", hours: "1:00 PM - 5:00 PM", status: "On Duty" },
                    { doctor: "Dr. Stephen Strange", specialty: "Neurosurgeon", hours: "5:00 PM - 9:00 PM", status: "On Standby" },
                  ].map((doc, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-xs font-bold">{doc.doctor}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{doc.specialty} • {doc.hours}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${doc.status === "On Duty" ? "text-green-600 bg-green-50 dark:bg-green-950/20" : "text-slate-500 bg-slate-50 dark:bg-slate-800"}`}>{doc.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "operations":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "CPU Utilization", val: "42.8%", change: "Healthy load", isPositive: true, desc: "12 nodes clustering", icon: Cpu, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" },
                { title: "Memory Allocation", val: "18.4 GB / 32 GB", change: "Optimal usage", isPositive: true, desc: "Garbage collection OK", icon: Layers, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Server Ping Latency", val: "24ms", change: "Direct routes active", isPositive: true, desc: "Cloudflare CDN enabled", icon: Activity, color: "text-sky-500 bg-sky-50 dark:bg-sky-950/20" },
                { title: "Uptime (30 days)", val: "99.998%", change: "Zero incidents logs", isPositive: true, desc: "Maintenance completed", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Continuous Server Load metrics</h4>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Sessions", "Revenue"]} colors={["#3b82f6", "#ef4444"]} type="area" />
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Active CI/CD Deployments</h4>
                <div className="space-y-4">
                  {[
                    { repo: "Auralis UI App", build: "#1024", duration: "1m 12s", status: "Success" },
                    { repo: "Stitch Integrator", build: "#328", duration: "48s", status: "Success" },
                    { repo: "Marketing CRM API", build: "#89", duration: "2m 4s", status: "Running" },
                  ].map((dep, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-xs font-bold">{dep.repo}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Build {dep.build} • Duration {dep.duration}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${dep.status === "Success" ? "text-green-600 bg-green-50 dark:bg-green-950/20" : "text-amber-500 bg-amber-50 dark:bg-amber-950/20 animate-pulse"}`}>{dep.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "ai-saas":
      default:
        return (
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Monthly API Cost", val: "$1,280.45", change: "+12.5%", isPositive: true, desc: "vs last month", icon: DollarSign, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
                { title: "Active API Keys", val: "348 keys", change: "+4.1%", isPositive: true, desc: "12 created today", icon: Users, color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20" },
                { title: "Average Latency", val: "184ms", change: "-8.3%", isPositive: true, desc: "Faster processing", icon: Activity, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/20" },
                { title: "Error Rate", val: "0.14%", change: "+0.02%", isPositive: false, desc: "Under normal threshold", icon: AlertCircle, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20" },
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{c.title}</span>
                    <span className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="w-4 h-4" /></span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{c.val}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className={`text-xs font-bold flex items-center ${c.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {c.change}
                      </span>
                      <span className="text-[10px] text-slate-400">{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main request charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-base font-bold">Model Requests Volume</h4>
                    <p className="text-xs text-slate-400">Total requests parsed daily</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">Daily</button>
                    <button className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">Weekly</button>
                  </div>
                </div>
                <Charts data={MOCK_DATA.analytics} dataKeys={["Users", "Sessions"]} colors={["#6366f1", "#a855f7"]} type="area" />
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold mb-1">Quota Distribution</h4>
                  <p className="text-xs text-slate-400 mb-6">Tokens distributed by engine models</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Charts
                    data={[
                      { name: "GPT-4o", value: 45 },
                      { name: "Gemini 1.5 Pro", value: 30 },
                      { name: "Claude 3.5 Sonnet", value: 25 },
                    ]}
                    dataKeys={["value"]}
                    colors={["#6366f1", "#ec4899", "#10b981"]}
                    type="pie"
                    height={200}
                  />
                </div>
              </div>
            </div>

            {/* Table logs */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h4 className="text-base font-bold">API Transaction Ledger</h4>
                <Link href="/components/table-advanced" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <span>View Full Logs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 text-xs font-semibold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Transaction ID</th>
                      <th className="px-6 py-4">Engine Model</th>
                      <th className="px-6 py-4">User Identity</th>
                      <th className="px-6 py-4">Tokens Count</th>
                      <th className="px-6 py-4">Total Cost</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {[
                      { id: "tx_90184", engine: "Claude 3.5 Sonnet", user: "dev@company.com", tokens: "12,450 tokens", cost: "$0.037", status: "Success", statColor: "text-green-600 bg-green-50 dark:bg-green-950/20" },
                      { id: "tx_90183", engine: "GPT-4o Mini", user: "hr@company.com", tokens: "48,900 tokens", cost: "$0.073", status: "Success", statColor: "text-green-600 bg-green-50 dark:bg-green-950/20" },
                      { id: "tx_90182", engine: "Gemini Flash", user: "test@client.net", tokens: "2,100 tokens", cost: "$0.002", status: "Failed", statColor: "text-rose-600 bg-rose-50 dark:bg-rose-950/20" },
                      { id: "tx_90181", engine: "DALL-E 3 Image", user: "art@agency.org", tokens: "1 image", cost: "$0.040", status: "Success", statColor: "text-green-600 bg-green-50 dark:bg-green-950/20" },
                    ].map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/30">
                        <td className="px-6 py-4 font-mono font-semibold text-xs">{t.id}</td>
                        <td className="px-6 py-4">{t.engine}</td>
                        <td className="px-6 py-4">{t.user}</td>
                        <td className="px-6 py-4">{t.tokens}</td>
                        <td className="px-6 py-4">{t.cost}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${t.statColor}`}>{t.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
  };

  // 2. AI APPS RENDERER
  const renderAiApp = () => {
    switch (slug) {
      case "ai-chat":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm h-[calc(100vh-12rem)]">
            {/* Sidebar characters */}
            <div className="hidden lg:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/55 p-4 space-y-4">
              <h5 className="font-extrabold text-xs text-slate-400 uppercase tracking-widest px-2">Preset Personas</h5>
              <div className="space-y-1">
                {[
                  { name: "Auralis Default Assistant", desc: "Balanced and generic helper", active: true },
                  { name: "Senior Code Architect", desc: "Expert developer & refactoring guide", active: false },
                  { name: "SaaS Copywriter", desc: "Optimized marketing copy advisor", active: false },
                  { name: "Security Compliance Officer", desc: "Audit and safety metrics advisor", active: false },
                ].map((c, i) => (
                  <button
                    key={i}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                      c.active
                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <p className={`text-xs font-bold ${c.active ? "text-white" : ""}`}>{c.name}</p>
                    <p className={`text-[10px] truncate ${c.active ? "text-indigo-200" : "text-slate-400"}`}>{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat conversation area */}
            <div className="lg:col-span-3 flex flex-col h-full">
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-50 dark:bg-indigo-950 p-2.5 rounded-xl text-indigo-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm">Auralis Assistant Pro</h5>
                    <p className="text-[10px] text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span>Ready to assist</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Message Feed */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[75%] p-4 rounded-2xl text-xs leading-relaxed ${
                        m.role === "user"
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 rounded-br-none"
                          : "bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/50 dark:border-slate-700/50"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!chatInput.trim()) return;
                  const newUserMsg = { role: "user", content: chatInput };
                  setChatMessages((prev) => [...prev, newUserMsg]);
                  setChatInput("");
                  setTimeout(() => {
                    setChatMessages((prev) => [
                      ...prev,
                      { role: "assistant", content: `I received: "${chatInput}". As a static template, I'm ready to wire up with your dynamic backend api.` },
                    ]);
                  }, 600);
                }}
                className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-3 bg-slate-50/50 dark:bg-slate-900/50"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask any question or write prompts..."
                  className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/10"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        );
      case "ai-writer":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Configure Article Template</h5>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Select Template Style</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20">
                    <option>Blog Post Outline</option>
                    <option>SaaS Product Value Claims</option>
                    <option>SEO Optimisation Article</option>
                    <option>Email Newsletter Copy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Topic or Keyword Claims</label>
                  <input
                    type="text"
                    value={writerTopic}
                    onChange={(e) => setWriterTopic(e.target.value)}
                    placeholder="e.g. NextJS templates and seo tips..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Writing Tone</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20">
                    <option>Professional</option>
                    <option>Friendly & Engaging</option>
                    <option>Informative & Technical</option>
                    <option>Bold Marketing Copy</option>
                  </select>
                </div>
                <button
                  onClick={() => {
                    if (!writerTopic) return;
                    setWriting(true);
                    setTimeout(() => {
                      setGeneratedText(
                        `## Deep Dive on ${writerTopic}\n\nHere is a professionally structured marketing layout outline about **${writerTopic}** generated automatically. This Next.js framework simplifies standard copy construct configurations.\n\n### Core Value Claims\n1. Fully static template ready for rapid distribution.\n2. Built using Tailwind v4 and Next.js 16.\n3. Responsive and Light/Dark optimized out of the box.`
                      );
                      setWriting(false);
                    }, 1000);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/10 transition-all flex items-center justify-center gap-2"
                >
                  {writing ? (
                    <>
                      <RotateCw className="w-4 h-4 animate-spin" />
                      <span>Writing Copy...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-h-[400px]">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <h5 className="font-extrabold text-sm">Output Editor</h5>
                {generatedText && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedText);
                      alert("Copied to clipboard!");
                    }}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </button>
                )}
              </div>
              <div className="flex-1 bg-slate-50/50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 overflow-y-auto text-xs whitespace-pre-line leading-relaxed font-mono">
                {generatedText || (
                  <span className="text-slate-400 italic">Configure criteria on the left panel to output copy content templates.</span>
                )}
              </div>
            </div>
          </div>
        );
      case "image-generator":
        return (
          <div className="space-y-6">
            {/* Input Form */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">AI Image Generation</h5>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Describe the image you want to generate (e.g. A futuristic office workspace overlooking a neon skyline...)"
                  className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md shadow-indigo-600/10 shrink-0">
                  Generate Studio Assets
                </button>
              </div>
            </div>

            {/* Generated Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: "Neon Skyline Workspace", url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80" },
                { title: "Futuristic Meeting Room", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" },
                { title: "Glassmorphic AI Assistant UI", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" },
                { title: "Isometric Cloud Server Farm", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80" },
              ].map((img, i) => (
                <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-250">
                  <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-xs font-bold truncate max-w-[80%]">{img.title}</span>
                    <button className="p-2 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold">{page.title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">{page.description}</p>
            <div className="flex justify-center gap-2 mt-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-600/10">Configure integration</button>
              <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold transition">View code docs</button>
            </div>
          </div>
        );
    }
  };

  // 3. UI COMPONENTS AND DEMO PAGES RENDERER
  const renderComponentDemo = () => {
    switch (slug) {
      case "forms":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Basic Form Controls</h5>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-2">Username Input</label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2">Password Input</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="check1" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="check1" className="text-xs text-slate-500 dark:text-slate-400">Remember session credentials</label>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Toggles & Selections</h5>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-2">Workspace Category</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20">
                    <option>Engineering Team</option>
                    <option>Product Marketing</option>
                    <option>Finance Controls</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2">Budget Limit Range</label>
                  <input type="range" min="0" max="100" className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer" />
                </div>
                <button className="bg-indigo-600 text-white w-full py-2.5 rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10">Submit Parameters</button>
              </div>
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 gap-4">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-indigo-500" />
                <h5 className="font-extrabold text-base">Interactive Scheduler</h5>
              </div>
              <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-850 p-1 rounded-xl">
                {["Month", "Week", "Day"].map((view, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      i === 0 ? "bg-white dark:bg-slate-950 shadow-sm text-indigo-600" : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, idx) => {
                const dayNum = idx - 2;
                const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                const hasEvent = dayNum === 4 || dayNum === 14 || dayNum === 25;
                const eventText = dayNum === 4 ? "Sprint Kickoff" : dayNum === 14 ? "Client Demo" : "Releases Audit";

                return (
                  <div key={idx} className="bg-white dark:bg-slate-900 min-h-[100px] p-2 flex flex-col justify-between group">
                    <span className={`text-xs font-semibold ${isCurrentMonth ? "text-slate-800 dark:text-slate-200" : "text-slate-300 dark:text-slate-700"}`}>
                      {isCurrentMonth ? dayNum : ""}
                    </span>
                    {isCurrentMonth && hasEvent && (
                      <div className="bg-indigo-50 dark:bg-indigo-950/40 border-l-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 p-1 rounded text-[10px] font-bold leading-tight truncate">
                        {eventText}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "gallery":
        return (
          <div className="space-y-6">
            <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Media Showcase Lightbox</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
              ].map((url, i) => (
                <div key={i} className="group relative aspect-square bg-slate-100 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 cursor-zoom-in">
                  <img src={url} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-xl">View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "maps":
        return (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Vector Maps Embed Placeholder</h5>
            <div className="w-full aspect-video rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <MapPin className="w-12 h-12 text-indigo-500 animate-bounce" />
              <div>
                <h6 className="font-bold text-sm">Interactive Google Maps Portal</h6>
                <p className="text-xs text-slate-400 max-w-sm mt-1 mx-auto">
                  To keep the package static-friendly and avoid API key limits, we provide this container ready to load your Google Maps iframe or Leaflet vector configs.
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg text-[10px] font-mono text-left max-w-md w-full overflow-x-auto text-slate-500 border border-slate-200 dark:border-slate-800">
                {`<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`}
              </div>
            </div>
          </div>
        );
      case "file-uploader":
        return (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Dropzone File Uploader</h5>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFiles = Array.from(e.dataTransfer.files).map((f) => ({
                  name: f.name,
                  size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`,
                  type: f.type,
                }));
                setFiles((prev) => [...prev, ...droppedFiles]);
              }}
              className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-indigo-500/50 cursor-pointer bg-slate-50/50 dark:bg-slate-900/50 transition-colors"
            >
              <Upload className="w-10 h-10 text-slate-400 mb-4" />
              <p className="text-xs font-bold">Drag and drop file streams, or click to upload</p>
              <p className="text-[10px] text-slate-400 mt-1">Supports PDF, PNG, JPG and Markdown files (max 10MB)</p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2 mt-4">
                <p className="text-xs font-bold text-slate-500">Selected Files ({files.length})</p>
                {files.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span className="font-semibold truncate">{file.name}</span>
                      <span className="text-[10px] text-slate-400">({file.size})</span>
                    </div>
                    <button
                      onClick={() => setFiles((prev) => prev.filter((_, i) => i !== idx))}
                      className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-rose-500"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case "swiper-carousel":
        return (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Touch-Friendly Carousel</h5>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/40 to-indigo-600/40 mix-blend-multiply"></div>
              <img src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80" alt="Slide" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 text-white max-w-sm space-y-2">
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold">Featured Claim</span>
                <h6 className="font-extrabold text-base leading-tight">ThemeForest Multi-Purpose Next.js template</h6>
                <p className="text-[10px] text-white/80">Built utilizing tailwind classes for customizable grid alignments.</p>
              </div>
              <button className="absolute left-4 p-2 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-sm transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="absolute right-4 p-2 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-sm transition">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        );
      case "components":
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card variant 1 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="bg-indigo-50 dark:bg-indigo-950/40 p-2.5 rounded-xl text-indigo-500 w-fit">
                <Sparkles className="w-5 h-5" />
              </div>
              <h5 className="font-extrabold text-sm">Glassmorphic Card</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Card design that integrates with light and dark mode automatically.
              </p>
              <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <span>Explore actions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card variant 2 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded font-bold border border-slate-200/60 dark:border-slate-700">Badge Label</span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>
              <div>
                <h5 className="font-extrabold text-sm">Status Info Widget</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Useful for server stats monitoring.</p>
              </div>
            </div>

            {/* Card variant 3 */}
            <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 p-6 rounded-2xl text-white shadow-lg shadow-indigo-500/20 flex flex-col justify-between min-h-[160px]">
              <Sparkles className="w-6 h-6 text-indigo-200" />
              <div>
                <h5 className="font-extrabold text-sm text-white">Gradient Card</h5>
                <p className="text-xs text-indigo-100 mt-1">Useful to highlight pro subscription tiers and pricing plans.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  // 4. DOCUMENTATION PAGES RENDERER
  const renderDocs = () => {
    switch (slug) {
      case "docs-installation":
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm space-y-6">
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Installation & Setup Guide</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Get Auralis AI template set up and running on your local machine using standard NPM package workflows.
            </p>

            <h3 className="text-base font-bold mt-6">1. Extract files</h3>
            <p className="text-slate-500">Unpack the template ZIP folder into your project workspace path.</p>

            <h3 className="text-base font-bold mt-4">2. Install dependency tree</h3>
            <p className="text-slate-500">Run npm install inside the root directory where package.json sits:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
              npm install
            </pre>

            <h3 className="text-base font-bold mt-4">3. Start the local server</h3>
            <p className="text-slate-500">Initiate NextJS dev process:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
              npm run dev
            </pre>
            <p className="text-slate-500">Open your browser to <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-500">http://localhost:3000</code> to inspect pages.</p>
          </article>
        );
      default:
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm space-y-6">
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">{page.title}</h1>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Auralis AI is a premium ThemeForest standard Next.js template structured with TypeScript, Tailwind CSS and React 19.
              It uses dynamic params grids to mock up a massive list of 184+ routes without expanding codebase sizes unnecessarily,
              enabling quick static page exports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                <h5 className="font-bold text-sm">ThemeForest Grade features</h5>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs text-slate-500">
                  <li>No JQuery usage</li>
                  <li>Next.js static export compilation</li>
                  <li>Full RTL direction toggle support</li>
                  <li>Responsive layouts and modern icons assets</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                <h5 className="font-bold text-sm">Template configurations</h5>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Tailwind custom styling themes are managed in <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-500">src/app/globals.css</code>.
                  Theme switching states are saved in localStorage via custom client context providers.
                </p>
              </div>
            </div>
          </article>
        );
    }
  };

  // 5. AUTH PAGES RENDERER (Sign in, Sign up, error etc.)
  const renderAuth = () => {
    switch (slug) {
      case "error-404-simple":
      case "error-404-illustrated":
        return (
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh] space-y-6">
            <h1 className="text-8xl font-black bg-gradient-to-tr from-indigo-500 to-violet-500 bg-clip-text text-transparent">404</h1>
            <div>
              <h3 className="text-lg font-extrabold">Page Not Found</h3>
              <p className="text-xs text-slate-400 mt-1">The path you requested could not be located in our routing grids.</p>
            </div>
            <Link href="/" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10 transition">
              Return to Landing Demo
            </Link>
          </div>
        );
      case "error-500":
        return (
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh] space-y-6">
            <h1 className="text-8xl font-black bg-gradient-to-tr from-rose-500 to-orange-500 bg-clip-text text-transparent">500</h1>
            <div>
              <h3 className="text-lg font-extrabold">Server Connection Error</h3>
              <p className="text-xs text-slate-400 mt-1">We encountered an internal error compiling this static workspace module.</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <RotateCw className="w-4 h-4" />
              <span>Retry reloading page</span>
            </button>
          </div>
        );
      case "auth-signin-simple":
      case "auth-signin-split":
      default:
        return (
          <div className="max-w-md w-full mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-6 my-10">
            <div className="text-center">
              <h4 className="font-extrabold text-lg">Access Workspace Account</h4>
              <p className="text-xs text-slate-400 mt-1">Submit credentials to load your dashboards</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="admin@company.com"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert("Sign-in simulated successfully! This template runs as static. Integrate with your authentication APIs.");
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/10"
              >
                Access Control Panel
              </button>
            </div>
            <div className="text-center text-[10px] text-slate-400">
              By accessing the portal you agree to our Terms of Service.
            </div>
          </div>
        );
    }
  };

  // Main Page Body Selector
  const renderContentBody = () => {
    if (isDashboard) return renderDashboard();
    if (isAiApp) return renderAiApp();
    if (isComponentDemo) return renderComponentDemo();
    if (isDocs) return renderDocs();
    if (isAuth) return renderAuth();

    // Default fallback layout for CRM, ecommerce, LMS, HR, Finance, Healthcare
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-50 dark:bg-indigo-950/40 p-2.5 rounded-xl text-indigo-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-base">{page.title}</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{page.description}</p>
            </div>
          </div>
        </div>

        {/* Content detail wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active Workspace records</span>
              <button className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs font-bold flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5" />
                <span>Create record</span>
              </button>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { title: "Workspace Asset allocation update", date: "Jul 3, 2026", user: "Sarah C." },
                { title: "System check: database indexing completed", date: "Jul 2, 2026", user: "Ops System" },
                { title: "Invoice payments processed (Tx_8901)", date: "Jun 28, 2026", user: "Finance Automator" },
              ].map((rec, i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-500 cursor-pointer">{rec.title}</p>
                    <p className="text-[10px] text-slate-400 mt-1">Processed by {rec.user}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 shrink-0">{rec.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h5 className="font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">Department Statistics</h5>
            <Charts
              data={[
                { name: "Dev", value: 80 },
                { name: "Design", value: 65 },
                { name: "Mktg", value: 90 },
                { name: "Ops", value: 45 },
              ]}
              dataKeys={["value"]}
              colors={["#6366f1"]}
              type="bar"
              height={200}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      {!isAuth && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded">
                {group}
              </span>
              <span className="text-slate-300 dark:text-slate-800">|</span>
              <span className="text-[10px] font-semibold text-slate-400">Route: /{group}/{slug}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-1.5">{page.title}</h2>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold hover:bg-slate-50 transition shadow-sm">
              Actions log
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-600/10">
              Integrate module
            </button>
          </div>
        </div>
      )}

      {/* Main Content Layout Render */}
      {renderContentBody()}
    </div>
  );
}
