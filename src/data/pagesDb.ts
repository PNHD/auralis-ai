export interface PageInfo {
  slug: string;
  title: string;
  description: string;
  group: string;
  meta?: Record<string, any>;
}

// Marketing pages: 20+
export const MARKETING_PAGES: PageInfo[] = [
  { slug: "home", title: "Auralis AI - SaaS Landing Page", description: "Modern SaaS homepage with pricing and features.", group: "marketing" },
  { slug: "about", title: "About Us", description: "Learn about the mission and team behind Auralis.", group: "marketing" },
  { slug: "services", title: "Our Services", description: "Full suite of AI integration and SaaS services.", group: "marketing" },
  { slug: "features", title: "Features Overview", description: "Deep dive into Auralis AI capabilities.", group: "marketing" },
  { slug: "features-showcase", title: "Feature Showcase", description: "ThemeForest standard detailed features show.", group: "marketing" },
  { slug: "pricing-plans", title: "Pricing & Billing", description: "Flexible plans for teams of all sizes.", group: "marketing" },
  { slug: "contact-us", title: "Contact Sales & Support", description: "Get in touch with our team.", group: "marketing" },
  { slug: "careers", title: "Careers at Auralis", description: "Join our fast-growing global team.", group: "marketing" },
  { slug: "team", title: "Meet the Team", description: "The innovators, developers, and designers.", group: "marketing" },
  { slug: "partners", title: "Partners & Integrations", description: "Services and tools we work with.", group: "marketing" },
  { slug: "customers", title: "Customer Stories", description: "How enterprises scale using Auralis AI.", group: "marketing" },
  { slug: "press", title: "Press & Media Kit", description: "Latest news, logo packages, and press releases.", group: "marketing" },
  { slug: "blog-grid", title: "Blog Grid Layout", description: "Articles presented in a responsive grid.", group: "marketing" },
  { slug: "blog-list", title: "Blog List Layout", description: "Articles in a clean, chronological list layout.", group: "marketing" },
  { slug: "blog-post", title: "Single Blog Post", description: "Fully formatted rich article layout.", group: "marketing" },
  { slug: "faq", title: "Frequently Asked Questions", description: "Quick answers to popular inquiries.", group: "marketing" },
  { slug: "privacy-policy", title: "Privacy Policy", description: "How we collect, use, and store data.", group: "marketing" },
  { slug: "terms-of-service", title: "Terms of Service", description: "User agreement and operating rules.", group: "marketing" },
  { slug: "security", title: "Security Protocols", description: "Enterprise-grade data encryption and compliance.", group: "marketing" },
  { slug: "newsletter", title: "Newsletter Signup", description: "Subscribe for weekly AI insights and product updates.", group: "marketing" },
  { slug: "case-study-list", title: "Case Studies", description: "Detailed architectural overviews of AI success.", group: "marketing" },
  { slug: "case-study-single", title: "Case Study: Enterprise Scaling", description: "In-depth review of infrastructure optimization.", group: "marketing" }
];

// Dashboard pages: 12 (Core target layouts)
export const DASHBOARD_PAGES: PageInfo[] = [
  { slug: "ai-saas", title: "AI SaaS Dashboard", description: "Control panel for AI model API usage and subscription tiers.", group: "dashboard" },
  { slug: "analytics", title: "Advanced Analytics", description: "Charts, traffic statistics, and conversions performance.", group: "dashboard" },
  { slug: "crm-dashboard", title: "CRM Control Panel", description: "Leads tracking, sales pipeline activity, and deals history.", group: "dashboard" },
  { slug: "project-mgmt", title: "Project Management", description: "Sprints progress, team workload, and milestone deadlines.", group: "dashboard" },
  { slug: "ecommerce", title: "eCommerce Analytics", description: "Store sales, average order values, and inventory alerts.", group: "dashboard" },
  { slug: "lms", title: "LMS Learning Portal", description: "Courses enrolled, completion charts, and certificate tracker.", group: "dashboard" },
  { slug: "help-desk", title: "Help Desk Support", description: "Ticket status ratios, average response time, and active queues.", group: "dashboard" },
  { slug: "hr-mgmt", title: "HR & Employee Management", description: "Headcount ratios, leave balance requests, and hiring funnel.", group: "dashboard" },
  { slug: "marketing-dashboard", title: "Marketing Dashboard", description: "Ad campaign spend, ROAS, and lead source breakdown.", group: "dashboard" },
  { slug: "finance", title: "Finance Tracking", description: "Revenue streams, operational expenses, and profit margin analysis.", group: "dashboard" },
  { slug: "healthcare", title: "Healthcare Portal", description: "Patient queue stats, doctor schedules, and medical inventory.", group: "dashboard" },
  { slug: "operations", title: "Operations & DevOps", description: "Server load metrics, service uptime status, and deployments pipeline.", group: "dashboard" }
];

// AI App pages: 20+
export const AI_APP_PAGES: PageInfo[] = [
  { slug: "ai-chat", title: "AI Assistant Chat", description: "Interactive chat wrapper with preset characters.", group: "ai-apps" },
  { slug: "ai-writer", title: "AI Copywriter & Blog Writer", description: "Template-based long-form copy assistant.", group: "ai-apps" },
  { slug: "image-generator", title: "AI Text-to-Image Creator", description: "Prompt studio for image assets generation.", group: "ai-apps" },
  { slug: "speech-to-text", title: "Audio Speech Transcriber", description: "Convert podcasts and meetings files into text.", group: "ai-apps" },
  { slug: "text-to-speech", title: "AI Voiceover Engine", description: "High-fidelity text-to-speech voice selector.", group: "ai-apps" },
  { slug: "code-assistant", title: "AI Code Generator & Explainer", description: "Smart coding helper with refactoring prompts.", group: "ai-apps" },
  { slug: "smart-search", title: "Vector Search & Retrieval", description: "Knowledge base semantic semantic explorer.", group: "ai-apps" },
  { slug: "anomaly-detector", title: "AI Anomaly Detection", description: "Identify outlier logs and suspicious activities.", group: "ai-apps" },
  { slug: "sentiment-analyzer", title: "Sentiment Analysis Engine", description: "Batch customer feedback sentiment parser.", group: "ai-apps" },
  { slug: "grammar-fixer", title: "Grammar & Tone Editor", description: "Rewrite text to match specific tone requirements.", group: "ai-apps" },
  { slug: "summary-generator", title: "Document Summarizer", description: "Extract key takeaways from PDFs and large articles.", group: "ai-apps" },
  { slug: "seo-optimizer", title: "AI SEO Advisor", description: "Analyze pages for key terms and suggest improvements.", group: "ai-apps" },
  { slug: "prompt-library", title: "AI Prompt Library", description: "Browse curated community and workspace templates.", group: "ai-apps" },
  { slug: "translation-portal", title: "AI Language Translator", description: "Translate between 50+ languages with context awareness.", group: "ai-apps" },
  { slug: "image-upscaler", title: "AI Image Upscaler & Enhancer", description: "Smart resolution upscaler for image templates.", group: "ai-apps" },
  { slug: "chart-builder", title: "AI Auto-Chart Constructor", description: "Input raw data and let AI structure standard plots.", group: "ai-apps" },
  { slug: "video-generator", title: "AI Text-to-Video Studio", description: "Generate dynamic short animations from text.", group: "ai-apps" },
  { slug: "background-remover", title: "AI Object/Background Remover", description: "Extract subjects from visual images automatically.", group: "ai-apps" },
  { slug: "chat-bot-builder", title: "AI Agent & Bot Builder", description: "Orchestrate your own system instructions and tools.", group: "ai-apps" },
  { slug: "ai-audit-logs", title: "AI Safety & Audit Logs", description: "Monitor safety scores, tokens count, and compliance.", group: "ai-apps" }
];

// CRM pages: 15+
export const CRM_PAGES: PageInfo[] = [
  { slug: "crm-contacts", title: "Contacts & Lead Directory", description: "Full database of customers with interaction timelines.", group: "crm" },
  { slug: "crm-pipelines", title: "Deals & Sales Pipeline", description: "Drag-and-drop sales stage progression dashboard.", group: "crm" },
  { slug: "crm-leads", title: "Lead Ingestion Portal", description: "Leads inbox from web forms, ads, and email campaigns.", group: "crm" },
  { slug: "crm-accounts", title: "Enterprise Accounts", description: "Organize individual contacts under group business profiles.", group: "crm" },
  { slug: "crm-meetings", title: "Calendar & Schedule", description: "Track scheduled sales calls, demos, and action items.", group: "crm" },
  { slug: "crm-tasks", title: "Follow-up Tasks List", description: "Task reminders for outreach, follow-ups, and onboarding.", group: "crm" },
  { slug: "crm-deals-won", title: "Closed Deals History", description: "Archive of successful deals with contract breakdowns.", group: "crm" },
  { slug: "crm-proposals", title: "Client Proposals & Quotes", description: "Draft, review, and send quotes with PDF export option.", group: "crm" },
  { slug: "crm-email-campaigns", title: "Email Outreach Campaigns", description: "Monitor send rates, opens, and click-throughs.", group: "crm" },
  { slug: "crm-analytics", title: "Sales Revenue Performance", description: "Quota progress and sales representative performance.", group: "crm" },
  { slug: "crm-lead-scoring", title: "AI Lead Scoring System", description: "Predictive qualification ratings based on customer profiles.", group: "crm" },
  { slug: "crm-contracts-docs", title: "Contracts & Agreements", description: "Terms management, digital signatures, and renewals tracker.", group: "crm" },
  { slug: "crm-customer-profile", title: "Customer Profile Detail", description: "Individual lead logs, purchase history, and direct email notes.", group: "crm" },
  { slug: "crm-segments", title: "Audience Segmentation", description: "Group leads by geographic area, value tier, and industry.", group: "crm" },
  { slug: "crm-settings", title: "CRM Workspace Preferences", description: "Configure deal stages, custom attributes, and API hooks.", group: "crm" }
];

// Project management pages: 15+
export const PROJECT_PAGES: PageInfo[] = [
  { slug: "proj-list", title: "All Active Projects", description: "Card and list view of standard engineering sprints.", group: "project" },
  { slug: "proj-board", title: "Kanban Sprint Board", description: "Drag columns to update task completion states.", group: "project" },
  { slug: "proj-timeline", title: "Gantt Timeline Chart", description: "Horizontal schedules visualizing tasks and dependencies.", group: "project" },
  { slug: "proj-backlog", title: "Product Backlog & Epics", description: "Prioritize user stories and map them to releases.", group: "project" },
  { slug: "proj-details", title: "Project Overview", description: "Budget tracking, contributors list, and latest updates.", group: "project" },
  { slug: "proj-team", title: "Resource Allocation", description: "Visual guide of team workload and task weights.", group: "project" },
  { slug: "proj-milestones", title: "Roadmap Milestones", description: "Track key calendar dates and release dates.", group: "project" },
  { slug: "proj-issues", title: "Bug Tracker & Issues List", description: "Severity rankings, reporter details, and assignment tags.", group: "project" },
  { slug: "proj-wiki", title: "Project Wiki & Docs", description: "Central collaborative database for project specifications.", group: "project" },
  { slug: "proj-files", title: "Project Shared Drive", description: "Central folder for PDFs, design mockups, and spreadsheets.", group: "project" },
  { slug: "proj-reports", title: "Velocity & Burn-down Charts", description: "Sprint metrics highlighting speed and completeness.", group: "project" },
  { slug: "proj-timesheet", title: "Time Tracking Logs", description: "Hours spent per card categorized by team members.", group: "project" },
  { slug: "proj-discussions", title: "Sprint Comments & Chats", description: "Workspace discussions on features and bugs.", group: "project" },
  { slug: "proj-retrospective", title: "Sprint Retrospective Notes", description: "Action items to optimize subsequent sprint cycles.", group: "project" },
  { slug: "proj-settings", title: "Project Settings", description: "Manage tags, notification triggers, and user access levels.", group: "project" }
];

// eCommerce pages: 15+
export const ECOMMERCE_PAGES: PageInfo[] = [
  { slug: "shop-grid", title: "Products Shop Grid", description: "Grid view of store catalogue with sidebar filters.", group: "ecommerce" },
  { slug: "shop-list", title: "Products Shop List", description: "Linear view of catalogue showing quick summaries.", group: "ecommerce" },
  { slug: "product-details", title: "Premium Product Detail", description: "Images slider, color choice, and specs sheet.", group: "ecommerce" },
  { slug: "cart", title: "Your Shopping Cart", description: "Adjust counts, apply promo codes, and check totals.", group: "ecommerce" },
  { slug: "checkout", title: "Secure Checkout Portal", description: "Form fields for shipping info, coupons, and payment options.", group: "ecommerce" },
  { slug: "order-history", title: "Your Order History", description: "Timestamps and progress states for all user transactions.", group: "ecommerce" },
  { slug: "order-details", title: "Order Progress Detail", description: "Tracking codes, shipping carrier status, and receipt PDF.", group: "ecommerce" },
  { slug: "ecom-inventory", title: "Store Inventory Status", description: "Stock numbers, suppliers list, and low count alerts.", group: "ecommerce" },
  { slug: "ecom-customers", title: "Store Customer List", description: "Rank customers by spend, orders count, and sign-up date.", group: "ecommerce" },
  { slug: "ecom-reviews", title: "Product Reviews Hub", description: "View star ratings and manage customer testimonials.", group: "ecommerce" },
  { slug: "ecom-discounts", title: "Promo Codes & Discounts", description: "Generate custom codes and configure expiration times.", group: "ecommerce" },
  { slug: "ecom-sellers", title: "Sellers Marketplace", description: "Directory of third-party vendors and their metrics.", group: "ecommerce" },
  { slug: "ecom-revenue", title: "Store Sales Analytics", description: "Revenue charts by region, product type, and season.", group: "ecommerce" },
  { slug: "ecom-refunds", title: "Refunds & Claims Manager", description: "Review refund inquiries and process replacements.", group: "ecommerce" },
  { slug: "ecom-settings", title: "eCommerce Store Setup", description: "Configure currencies, taxes, and shipping rates.", group: "ecommerce" }
];

// LMS pages: 12+
export const LMS_PAGES: PageInfo[] = [
  { slug: "lms-courses", title: "Explore All Courses", description: "Catalogue of classes covering tech, business, and design.", group: "lms" },
  { slug: "course-details", title: "Course Curriculum Details", description: "Syllabus chapters lists, student counts, and video introduction.", group: "lms" },
  { slug: "lesson-viewer", title: "Interactive Lesson Player", description: "Sidebar navigation of modules alongside video view.", group: "lms" },
  { slug: "student-dashboard", title: "Student Learning Dashboard", description: "Progress percentage bar, metrics charts, and certificates.", group: "lms" },
  { slug: "instructor-panel", title: "Instructor Administration", description: "Track active courses, student lists, and monthly earnings.", group: "lms" },
  { slug: "lms-quizzes", title: "Quizzes & Exam Centre", description: "Timed multiple-choice layouts with prompt scores.", group: "lms" },
  { slug: "lms-grades", title: "Gradebook & Assignments", description: "Review files uploads, grade charts, and feedback.", group: "lms" },
  { slug: "lms-certificates", title: "Official Certificates", description: "Completed achievements gallery ready for sharing.", group: "lms" },
  { slug: "lms-live-classes", title: "Live Streaming Webinars", description: "Schedules of online events and direct meeting link placeholders.", group: "lms" },
  { slug: "lms-discussions", title: "Student Q&A Forums", description: "Public threads discussing curriculum questions and answers.", group: "lms" },
  { slug: "lms-pricing", title: "LMS Subscription Pricing", description: "Membership tiers for complete access to lessons database.", group: "lms" },
  { slug: "lms-settings", title: "LMS Admin Settings", description: "Configure course categories, access windows, and credentials.", group: "lms" }
];

// Help desk pages: 12+
export const HELPDESK_PAGES: PageInfo[] = [
  { slug: "hd-tickets", title: "Support Tickets Directory", description: "List of active support tickets sorted by status and urgency.", group: "help-desk" },
  { slug: "ticket-details", title: "Support Ticket Detail", description: "Discussion thread between customer and support agent.", group: "help-desk" },
  { slug: "hd-agents", title: "Support Agents Directory", description: "List of support team members and their ticket counts.", group: "help-desk" },
  { slug: "hd-help-center", title: "Help Center & FAQs", description: "Customer-facing articles detailing system features.", group: "help-desk" },
  { slug: "hd-knowledge-base", title: "Knowledge Base Creator", description: "Author articles to answer common support issues.", group: "help-desk" },
  { slug: "hd-chat", title: "Live Customer Support Chat", description: "Real-time communication window for active visitors.", group: "help-desk" },
  { slug: "hd-canned-responses", title: "Canned Snippets Manager", description: "Manage quick copy templates for common ticket questions.", group: "help-desk" },
  { slug: "hd-feedback", title: "CSAT Feedback Reviews", description: "Gather rating forms results and customer testimonials.", group: "help-desk" },
  { slug: "hd-sla-reports", title: "SLA Compliance Reports", description: "Track average wait times and resolution rates.", group: "help-desk" },
  { slug: "hd-automation", title: "Ticket Routing Rules", description: "Setup triggers to routing tickets automatically to specific groups.", group: "help-desk" },
  { slug: "hd-channels", title: "Support Channels Settings", description: "Integrate chat widgets on your sites, apps, and emails.", group: "help-desk" },
  { slug: "hd-settings", title: "Help Desk Admin System", description: "Workspace parameters, SLAs, and default tags.", group: "help-desk" }
];

// HR pages: 12+
export const HR_PAGES: PageInfo[] = [
  { slug: "hr-directory", title: "Employee Directory", description: "Directory of all team members with roles and contacts.", group: "hr" },
  { slug: "hr-org-chart", title: "Company Organizational Chart", description: "Tree layout mapping departments and management hierarchies.", group: "hr" },
  { slug: "hr-leaves", title: "Leave Balance & Requests", description: "Submit time-off requests and track team schedules.", group: "hr" },
  { slug: "hr-payroll", title: "Payroll & Payslips Dashboard", description: "Track basic salaries, deductions, and tax sheets.", group: "hr" },
  { slug: "hr-recruiting", title: "Recruiting Funnel & Jobs", description: "Track active jobs and candidate application statuses.", group: "hr" },
  { slug: "hr-onboarding", title: "Onboarding Checklists", description: "Configure documents, training, and accounts setup for new hires.", group: "hr" },
  { slug: "hr-performance", title: "Performance Reviews Hub", description: "Annual peer review questionnaires and feedback logs.", group: "hr" },
  { slug: "hr-benefits", title: "Employee Benefits Portfolio", description: "Explore insurance options, wellness perks, and gym plans.", group: "hr" },
  { slug: "hr-attendance", title: "Attendance & Clock Logs", description: "Daily logs tracking clock-in times and work hours.", group: "hr" },
  { slug: "hr-exp-claims", title: "Expense Claims Manager", description: "Process team requests for travel, software, and dining.", group: "hr" },
  { slug: "hr-training", title: "Compliance Training Center", description: "Monitor corporate security and safety training statuses.", group: "hr" },
  { slug: "hr-settings", title: "HR System Configuration", description: "Define holiday schedules, leave rules, and departments list.", group: "hr" }
];

// Finance pages: 10+
export const FINANCE_PAGES: PageInfo[] = [
  { slug: "fin-invoices", title: "Invoices Directory", description: "Draft, sent, and paid invoices directory.", group: "finance" },
  { slug: "fin-invoice-details", title: "Invoice Details Template", description: "Invoice receipt ready for print and sharing.", group: "finance" },
  { slug: "fin-transactions", title: "Transaction ledger", description: "Chronological bank transfers and credit entries.", group: "finance" },
  { slug: "fin-budgets", title: "Company Budgets Planner", description: "Allocate budgets to departments and track differences.", group: "finance" },
  { slug: "fin-expenses", title: "Expense Reports", description: "Breakdown of company spending by category.", group: "finance" },
  { slug: "fin-tax", title: "Taxes & Compliance Logs", description: "Monitor quarterly tax files and estimated metrics.", group: "finance" },
  { slug: "fin-assets", title: "Fixed Assets Registry", description: "Track deprecating items like hardware, vehicles, and properties.", group: "finance" },
  { slug: "fin-cards", title: "Corporate Cards Hub", description: "Issue and limit physical/virtual cards for team use.", group: "finance" },
  { slug: "fin-statements", title: "Profit & Loss Statement", description: "Income statements, balances sheet, and cash flow reports.", group: "finance" },
  { slug: "fin-settings", title: "Finance System Options", description: "Configure default accounts, tax rules, and fiscal calendar.", group: "finance" }
];

// Healthcare pages: 10+
export const HEALTHCARE_PAGES: PageInfo[] = [
  { slug: "hc-patients", title: "Patient Directory", description: "Full database of patients records and schedules.", group: "healthcare" },
  { slug: "hc-appointments", title: "Appointments Calendar", description: "Daily slots, booking lists, and schedules.", group: "healthcare" },
  { slug: "hc-doctors", title: "Doctor Directory", description: "List of staff, specialties, and hours.", group: "healthcare" },
  { slug: "hc-records", title: "Medical Record Archives", description: "Historical files, diagnoses, and digital prescriptions.", group: "healthcare" },
  { slug: "hc-billing", title: "Medical Billing & Insurance", description: "Invoices for patients and claim forms status.", group: "healthcare" },
  { slug: "hc-prescriptions", title: "Prescription Manager", description: "Issue and renew medication orders.", group: "healthcare" },
  { slug: "hc-wards", title: "Room & Ward Occupancy", description: "Live tracking of beds availability in departments.", group: "healthcare" },
  { slug: "hc-pharmacy", title: "Pharmacy Inventory Status", description: "Medicine stock levels and supply alerts.", group: "healthcare" },
  { slug: "hc-lab-results", title: "Lab Reports Portal", description: "Upload and view blood reports and scan files.", group: "healthcare" },
  { slug: "hc-settings", title: "Healthcare System Options", description: "Configure departments list, credentials, and notification templates.", group: "healthcare" }
];

// Tables, Forms & Component pages: 25+
export const COMPONENTS_PAGES: PageInfo[] = [
  { slug: "components", title: "Component Showcase", description: "Base UI cards, alerts, buttons, and progress elements.", group: "components" },
  { slug: "forms", title: "Forms Library", description: "Basic inputs, checkboxes, ranges, and validation elements.", group: "components" },
  { slug: "calendar", title: "Interactive Calendar", description: "Add events and toggle schedules views.", group: "components" },
  { slug: "gallery", title: "Media Gallery Grid", description: "Filterable image grid with lightbox view options.", group: "components" },
  { slug: "maps", title: "Maps Placeholders", description: "Map container using customizable styles.", group: "components" },
  { slug: "rtl", title: "RTL Mode Guide", description: "Preview components in RTL layout.", group: "components" },
  { slug: "dark-mode", title: "Theme Configuration Guide", description: "Configure variables for light and dark options.", group: "components" },
  { slug: "rich-text-editor", title: "Rich Text Editor UI", description: "A simulated rich text layout for text editing.", group: "components" },
  { slug: "file-uploader", title: "Dropzone File Uploader", description: "File upload container with drag-and-drop state indicators.", group: "components" },
  { slug: "swiper-carousel", title: "Swiper Carousel Slider", description: "Touch-friendly carousel slides using Swiper.", group: "components" },
  { slug: "date-time-picker", title: "Date and Time Pickers", description: "Inputs configurations for booking slots.", group: "components" },
  { slug: "table-basic", title: "Basic Data Tables", description: "Clean data tables for grids and analytics logs.", group: "components" },
  { slug: "table-advanced", title: "Advanced Data Tables", description: "Tables with filter bars, export options, and batch actions.", group: "components" },
  { slug: "accordions", title: "Accordions & Collapsibles", description: "Expandable content lists for FAQs and wikis.", group: "components" },
  { slug: "tabs-pills", title: "Tabs and Navigation Pills", description: "Horizontal and vertical tab menus.", group: "components" },
  { slug: "alerts-badges", title: "Alerts & Status Badges", description: "Design patterns for system logs and status alerts.", group: "components" },
  { slug: "buttons-groups", title: "Buttons & Action Groups", description: "Styles, icon button variations, and loaders.", group: "components" },
  { slug: "cards-layouts", title: "Cards & Grids Layouts", description: "Modern widgets and content wraps structures.", group: "components" },
  { slug: "modals-drawers", title: "Modals & Side Drawers", description: "Toggleable overlays for settings panels.", group: "components" },
  { slug: "progress-bars", title: "Progress & Steps Indicators", description: "Linear bars, radial circles, and checkout steps.", group: "components" },
  { slug: "tooltips-popovers", title: "Tooltips & Information Popovers", description: "Action triggers showing details on hover.", group: "components" },
  { slug: "charts-apexcharts", title: "ApexCharts Visualizer", description: "Bar, area, and donut analytics layouts.", group: "components" },
  { slug: "charts-recharts", title: "Recharts Visualizer", description: "Responsive line and area graphs.", group: "components" },
  { slug: "avatar-lists", title: "Avatars & Badges Gallery", description: "Group avatar pictures, sizing tiers, and status dots.", group: "components" },
  { slug: "timeline-activity", title: "Vertical Timelines logs", description: "Track actions and timestamps in a sequence.", group: "components" }
];

// Auth, error, utility: 20+
export const AUTH_PAGES: PageInfo[] = [
  { slug: "auth-signin-simple", title: "Sign In - Simple", description: "Classic login fields with labels.", group: "auth" },
  { slug: "auth-signin-split", title: "Sign In - Split Layout", description: "Form on one side, marketing image on the other.", group: "auth" },
  { slug: "auth-signup-simple", title: "Sign Up - Simple", description: "Register account form.", group: "auth" },
  { slug: "auth-signup-split", title: "Sign Up - Split Layout", description: "Register page with visual backdrop.", group: "auth" },
  { slug: "auth-forgot-password", title: "Forgot Password Form", description: "Submit email to receive reset code link.", group: "auth" },
  { slug: "auth-reset-password", title: "Reset Password Form", description: "Fields for choosing and verifying a new password.", group: "auth" },
  { slug: "auth-lockscreen", title: "Workspace Lockscreen", description: "Enter password to resume active session.", group: "auth" },
  { slug: "auth-otp-verify", title: "OTP Code Verification", description: "Input 6-digit confirmation code from email or phone.", group: "auth" },
  { slug: "error-404-simple", title: "404 Error - Page Not Found", description: "Simple error message with home button.", group: "auth" },
  { slug: "error-404-illustrated", title: "404 Error - Illustrated", description: "Creative page for missing files.", group: "auth" },
  { slug: "error-500", title: "500 Internal Server Error", description: "System failure message with refresh button.", group: "auth" },
  { slug: "util-maintenance", title: "System Maintenance Mode", description: "Countdowns and warnings of scheduled offline time.", group: "auth" },
  { slug: "util-offline", title: "Connection Offline Alert", description: "Detect and display offline status cleanly.", group: "auth" },
  { slug: "util-coming-soon", title: "Coming Soon Countdown", description: "Product placeholder with launch countdown.", group: "auth" },
  { slug: "util-pricing-table", title: "Feature Comparison Grid", description: "Detailed check grid comparing plans.", group: "auth" },
  { slug: "user-profile", title: "User Workspace Profile", description: "Avatar uploads, stats overview, and project contributions.", group: "auth" },
  { slug: "user-settings", title: "Profile Workspace Preferences", description: "Toggles for email, notifications, security, and theme.", group: "auth" },
  { slug: "util-pricing-billing", title: "Billing & Invoicing History", description: "View plans and invoices receipts list.", group: "auth" },
  { slug: "util-faqs-accordion", title: "Customer Support FAQs", description: "Expandable sections answering typical issues.", group: "auth" },
  { slug: "util-search-results", title: "System Search Results", description: "Displays results list with categories filters.", group: "auth" }
];

// Documentation pages: 10+
export const DOCS_PAGES: PageInfo[] = [
  { slug: "documentation", title: "Welcome & Introduction", description: "Start guide for Auralis AI template.", group: "docs" },
  { slug: "docs-installation", title: "Installation & Setup", description: "Get the project running locally.", group: "docs" },
  { slug: "docs-folder-structure", title: "Folder Layout Specs", description: "Details on what files are located where.", group: "docs" },
  { slug: "docs-routing", title: "Routing Setup Guides", description: "Adding and customizing pages routes.", group: "docs" },
  { slug: "docs-theme-customization", title: "Tailwind Theme customizer", description: "Setting colors and variables configurations.", group: "docs" },
  { slug: "docs-dark-mode", title: "Dark Mode Setup", description: "Configure next-themes provider.", group: "docs" },
  { slug: "docs-rtl-layout", title: "RTL Layout Configuration", description: "Set layout direction for Arabic/Hebrew.", group: "docs" },
  { slug: "docs-charts", title: "Using Data Charts", description: "Configure and update Recharts inputs.", group: "docs" },
  { slug: "docs-components-usage", title: "Reusable Components API", description: "How to use buttons, tabs, and input styles.", group: "docs" },
  { slug: "docs-deployment", title: "Deploying to Production", description: "Build and deploy on Netlify, Vercel, or Cloudflare.", group: "docs" }
];

// Combine all pages for routing mapping lookup
export const ALL_PAGES: PageInfo[] = [
  ...MARKETING_PAGES,
  ...DASHBOARD_PAGES,
  ...AI_APP_PAGES,
  ...CRM_PAGES,
  ...PROJECT_PAGES,
  ...ECOMMERCE_PAGES,
  ...LMS_PAGES,
  ...HELPDESK_PAGES,
  ...HR_PAGES,
  ...FINANCE_PAGES,
  ...HEALTHCARE_PAGES,
  ...COMPONENTS_PAGES,
  ...AUTH_PAGES,
  ...DOCS_PAGES
];

// Deduplicate slugs
const seen = new Set<string>();
export const UNIQUE_PAGES = ALL_PAGES.filter(page => {
  if (seen.has(page.slug)) {
    return false;
  }
  seen.add(page.slug);
  return true;
});
