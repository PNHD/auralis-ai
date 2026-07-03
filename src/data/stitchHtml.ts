// Statically compiled Stitch HTML screen data
export interface StitchScreen {
  bodyClass: string;
  html: string;
}

export const STITCH_HTML: Record<string, StitchScreen> = {
  "marketing/about": {
    bodyClass: "bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar -->
<header class="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
<nav class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-20">
<div class="font-headline-md text-headline-md font-bold text-on-surface">Auralis AI</div>
<div class="hidden md:flex items-center gap-stack-lg">
<a class="font-label-md text-label-md text-on-surface-variant/80 hover:text-primary transition-colors" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant/80 hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant/80 hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-label-md text-label-md text-primary font-bold border-b-2 border-primary" href="#">Company</a>
</div>
<div class="flex items-center gap-stack-md">
<button class="hidden sm:block font-label-md text-label-md text-on-surface-variant px-4 py-2 hover:bg-surface-container-low/50 rounded-lg transition-all">Login</button>
<button class="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all ai-glow shadow-md">Get Started</button>
</div>
</nav>
</header>
<main>
<!-- Hero Section -->
<section class="relative overflow-hidden pt-24 pb-32 px-margin-desktop max-w-container-max mx-auto">
<div class="absolute top-0 right-0 -z-10 opacity-20">

</div>
<div class="max-w-3xl">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 border border-primary/20 rounded-full mb-stack-md">
<span class="signal-dot"></span>
<span class="text-primary font-label-sm uppercase tracking-wider">Democratizing Intelligence</span>
</div>
<h1 class="font-display-lg text-display-lg mb-stack-md text-on-surface">
                    Pioneering the <span class="text-primary">Intelligence Layer</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Our mission is to bridge the gap between complex AI architectures and real-world enterprise utility. We're building the infrastructure that allows every agency to operate with the speed of thought.
                </p>
</div>
</section>
<!-- Mission & Vision Cards -->
<section class="py-stack-lg px-margin-desktop max-w-container-max mx-auto">
<div class="grid md:grid-cols-2 gap-gutter">
<div class="bento-card p-stack-lg rounded-xl border-t-2 border-t-primary">
<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-stack-md">
<span class="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
</div>
<h3 class="font-headline-lg text-headline-lg mb-stack-sm">Our Mission</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        To empower every enterprise and agency with seamless AI integration, turning massive data streams into actionable intelligence without the technical friction.
                    </p>
</div>
<div class="bento-card p-stack-lg rounded-xl border-t-2 border-t-secondary-fixed-dim">
<div class="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center mb-stack-md">
<span class="material-symbols-outlined text-secondary-container text-3xl" style="font-variation-settings: 'FILL' 1;">visibility</span>
</div>
<h3 class="font-headline-lg text-headline-lg mb-stack-sm">Our Vision</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        A world where artificial intelligence is as ubiquitous and reliable as electricity—powering progress silently in the background of every successful business.
                    </p>
</div>
</div>
</section>
<!-- Metrics Section -->
<section class="bg-inverse-surface text-inverse-on-surface py-32 mt-stack-lg">
<div class="px-margin-desktop max-w-container-max mx-auto text-center">
<h2 class="font-headline-xl text-headline-xl mb-16">Auralis by the Numbers</h2>
<div class="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<div class="font-display-lg text-display-lg text-primary-fixed-dim mb-2">500+</div>
<div class="font-label-md text-label-md text-outline-variant uppercase tracking-widest">Agencies Integrated</div>
</div>
<div>
<div class="font-display-lg text-display-lg text-primary-fixed-dim mb-2">1M+</div>
<div class="font-label-md text-label-md text-outline-variant uppercase tracking-widest">Daily Automations</div>
</div>
<div class="col-span-2 md:col-span-1">
<div class="font-display-lg text-display-lg text-primary-fixed-dim mb-2">99.9%</div>
<div class="font-label-md text-label-md text-outline-variant uppercase tracking-widest">Uptime Performance</div>
</div>
</div>
</div>
</section>
<!-- Team Grid -->
<section class="py-32 px-margin-desktop max-w-container-max mx-auto">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-md">
<div class="max-w-xl">
<h2 class="font-headline-xl text-headline-xl mb-stack-sm text-on-surface">Built by Architects of Tomorrow</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Our multidisciplinary team combines decades of experience in distributed systems, machine learning, and enterprise design.</p>
</div>
<a class="font-label-md text-label-md text-primary flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    Join our team <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Team Member 1 -->
<div class="group">
<div class="aspect-square rounded-xl overflow-hidden mb-stack-md bento-card relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Professional headshot of a visionary tech CEO in a minimalist studio setting. Soft daylight from the side, wearing a sleek charcoal turtleneck. High-contrast, premium photography style, sharp focus, neutral background, looking confident and approachable. Auralis AI brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkY_sLJTWi9qXc6hk5c50OuZMLkDos20_4SDOzAaXVH0dumYls6FUVlLtiyyU1B866Si0inisK3aL-NlNd62sDFSVBRV6IXdONBWq99wkPBJn5p745r-2_2YVWwHX18rWNYgF7j9YPKOVCEwtSAz-uTGdqwVqQ9ZcgF4cRLbmT8uTRG3Np6tIDWdqIIMjYqMHawtk31IZl_N9Z7GaH3dx9u4QvARXMuHCQw0kKKWWo1cakAzn1_1FR"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
<a class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg" href="#"><span class="material-symbols-outlined text-sm">link</span></a>
</div>
</div>
<h4 class="font-headline-md text-headline-md">Dr. Elena Thorne</h4>
<p class="text-primary font-label-md mb-stack-sm">CEO &amp; Co-Founder</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Former DeepMind researcher obsessed with scalable neural architectures.</p>
</div>
<!-- Team Member 2 -->
<div class="group">
<div class="aspect-square rounded-xl overflow-hidden mb-stack-md bento-card relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Portrait of a modern CTO in a bright, tech-focused office environment. Features a man with short hair and glasses, smiling genuinely. The lighting is crisp and airy, emphasizing a light-mode workspace aesthetic. Sharp professional look, high-end commercial photography, deep primary accents in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkF0aH_8_xrmmBbSiuC9J7lcaQ4r8WPsjbh--g_MSfs8guNry3imdlFAggqbBLN7f-8BvM7Cc8fH6YiKr9QSOyDUQwDYm21UivpR0X2MHDipLFZ_YBnxyXzHYEffuVTGoTCUNj1S5WkCJJGRz06jisY3m_wzKGNieUcrfpJwkvM9rsvp8qS1BPkBNPHDTKFWJSrKuIOgu1PhhY9zqkM7ntPUmik_3WiLUrbmxRtPRr2XdfaL4GSnEi"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
<a class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg" href="#"><span class="material-symbols-outlined text-sm">link</span></a>
</div>
</div>
<h4 class="font-headline-md text-headline-md">Marcus Chen</h4>
<p class="text-primary font-label-md mb-stack-sm">CTO</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Mastermind behind our distributed low-latency processing engine.</p>
</div>
<!-- Team Member 3 -->
<div class="group">
<div class="aspect-square rounded-xl overflow-hidden mb-stack-md bento-card relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up portrait of a woman with a creative flair, high-end fashion tech aesthetic. Clean background with subtle geometric shadows. Vibrant lighting, professional corporate photography with a focus on human expression and intelligence. Muted colors with a singular electric cyan accent in her accessory." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNkWJKhnbsf1xImlyyXm2mOl9AMZvE2Pkm8mUbxISgcFXhcnO3lX4Du7CxCT05QIrbfvjmseDsVgkPly8FCpTn-791uSdiu8Sf_b8ButmecTeZL-EzkEuU0mICZ0lHYTM09vCMfQzY8DqMS7WOnHfyO9MoqLVYC9_R3gcskEX26Vflgs1uqZgGwq-ODlW1efF_vOEEO8mvQhiay7c0_LlddqOs0VLK99wcaz6Q2kobFuYeB5X_8WT"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
<a class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg" href="#"><span class="material-symbols-outlined text-sm">link</span></a>
</div>
</div>
<h4 class="font-headline-md text-headline-md">Sarah Jenkins</h4>
<p class="text-primary font-label-md mb-stack-sm">Head of Design</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Defining the tactile edge of AI interactions and enterprise dashboards.</p>
</div>
<!-- Team Member 4 -->
<div class="group">
<div class="aspect-square rounded-xl overflow-hidden mb-stack-md bento-card relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A portrait of a senior developer in a sleek high-contrast black and white style, with hints of electric cyan lighting. Sharp, clear features, modern office environment blurred in the background. High-performance professional look, suggesting technical excellence and speed. 8k resolution, commercial grade lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiy_bQbl-PblubigOkTU0xQjFFG1Q0nDGjCwnwEhhKGDSx67du96LoD6VJU49rqLZaqcoRkfqeFCV1LG_E-H3VqHuJ3yTaYZWDYoGOw2wSR1Q79FCI80CtxHLStppQH12am_yYAYrht76TyVkt5fDph0mtPEqxvKf9BOEh05MLs5DB8aDN3XKDhh0EcGLKBs_HMTRGnd11SYIkx08shpwz-uyjCBcgpvCVQmYbESIvQeIXNbDkFH7t"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
<a class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg" href="#"><span class="material-symbols-outlined text-sm">link</span></a>
</div>
</div>
<h4 class="font-headline-md text-headline-md">David Volkov</h4>
<p class="text-primary font-label-md mb-stack-sm">VP of Engineering</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Architecting secure, enterprise-grade AI deployment pipelines.</p>
</div>
</div>
</section>
<!-- Company Values -->
<section class="bg-surface-container-low py-32 px-margin-desktop">
<div class="max-w-container-max mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-xl text-headline-xl mb-4">Values that Drive Us</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision isn't just about code—it's how we approach every partnership and product.</p>
</div>
<div class="grid md:grid-cols-3 gap-gutter">
<div class="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant/30 flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-stack-md">
<span class="material-symbols-outlined text-secondary text-4xl">verified</span>
</div>
<h3 class="font-headline-md text-headline-md mb-stack-sm">Radical Precision</h3>
<p class="font-body-md text-body-md text-on-surface-variant">We believe in results that are measurable, verifiable, and consistently accurate down to the last token.</p>
</div>
<div class="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant/30 flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-stack-md">
<span class="material-symbols-outlined text-secondary text-4xl">bolt</span>
</div>
<h3 class="font-headline-md text-headline-md mb-stack-sm">High-Velocity Innovation</h3>
<p class="font-body-md text-body-md text-on-surface-variant">The AI landscape moves fast. We move faster, shipping improvements that keep our users ahead of the curve.</p>
</div>
<div class="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant/30 flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-stack-md">
<span class="material-symbols-outlined text-secondary text-4xl">shield_person</span>
</div>
<h3 class="font-headline-md text-headline-md mb-stack-sm">Ethical Stability</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Intelligence is nothing without integrity. We build systems that are as safe as they are sophisticated.</p>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-32 px-margin-desktop max-w-container-max mx-auto text-center">
<div class="bg-primary-container/10 border border-primary/20 rounded-3xl p-16 relative overflow-hidden">
<div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
<div class="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
<h2 class="font-headline-xl text-headline-xl mb-stack-md relative z-10">Ready to build the future?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl mx-auto relative z-10">Join 500+ forward-thinking agencies who have already deployed Auralis AI.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button class="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-xl hover:scale-105 transition-all shadow-xl ai-glow">Start Your Journey</button>
<button class="border-2 border-on-surface text-on-surface font-label-md text-label-md px-10 py-4 rounded-xl hover:bg-surface-container-high transition-all">Talk to Strategy</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant/20 py-stack-lg w-full">
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-1">
<div class="font-headline-sm text-headline-sm font-black text-on-surface mb-stack-md">Auralis AI</div>
<p class="font-body-md text-body-md text-on-surface-variant/80 mb-stack-lg">Precision in Intelligence. Built for the era of automation.</p>
<div class="flex gap-stack-sm">
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-sm">language</span></div>
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-sm">share</span></div>
</div>
</div>
<div>
<h5 class="font-label-md text-label-md text-on-surface font-bold mb-stack-md uppercase">Product</h5>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Features</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Enterprise</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-on-surface font-bold mb-stack-md uppercase">Company</h5>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-primary font-semibold hover:translate-x-1 transition-all inline-block" href="#">About Us</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Careers</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Newsroom</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-on-surface font-bold mb-stack-md uppercase">Legal</h5>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Privacy</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Security</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Terms</a></li>
</ul>
</div>
</div>
<div class="px-margin-desktop max-w-container-max mx-auto mt-16 pt-stack-lg border-t border-outline-variant/10 text-center">
<p class="font-label-sm text-label-sm text-on-surface-variant/60">© 2024 Auralis AI. Precision in Intelligence.</p>
</div>
</footer>
<script>
        // Simple Intersection Observer for scroll reveal animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.bento-card, .group').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
            observer.observe(el);
        });
    </script>
`
  },
  "marketing/agency": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden",
    html: `
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-margin-desktop py-4">
<a class="font-headline-md text-headline-md font-extrabold text-on-surface" href="#">Auralis AI</a>
<div class="hidden md:flex items-center gap-8">
<a class="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#features">Features</a>
<a class="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#pricing">Pricing</a>
<a class="text-primary border-b-2 border-primary pb-1 font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#agency">Agency</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden md:block px-6 py-2.5 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-full hover:scale-95 transition-transform duration-150">Get Started</button>
<button class="md:hidden text-on-surface">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</nav>
<main class="pt-24">
<!-- Hero Section -->
<section class="relative min-h-[819px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">

<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-stack-lg relative z-10 w-full">
<div class="flex flex-col justify-center">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-stack-md self-start">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span class="font-label-sm text-label-sm uppercase tracking-wider">Agency Infrastructure</span>
</div>
<h1 class="font-headline-xl text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md">
                        The Infrastructure for your <span class="text-primary italic">AI Agency.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
                        White-label AI solutions and automation services to deliver results for your clients, faster. Scale your agency with enterprise-grade technology.
                    </p>
<div class="flex flex-col sm:flex-row gap-4">
<button class="px-8 py-4 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-xl hover:shadow-lg transition-all duration-300">
                            Book your AI Strategy Consultation
                        </button>
<button class="px-8 py-4 border-1.5 border-on-surface text-on-surface font-label-md text-label-md rounded-xl hover:bg-surface-container-low transition-all duration-300">
                            View White-Label Suite
                        </button>
</div>
</div>
<div class="hidden lg:flex items-center justify-center">
<div class="relative w-full aspect-square max-w-lg">
<div class="absolute -inset-4 bg-primary-container/20 rounded-full blur-3xl"></div>
<div class="relative glass-card rounded-3xl p-8 shadow-xl ai-signal-border">
<div class="flex justify-between items-center mb-6">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-error"></div>
<div class="w-3 h-3 rounded-full bg-secondary-container"></div>
<div class="w-3 h-3 rounded-full bg-primary-container"></div>
</div>
<span class="font-label-sm text-label-sm text-outline">Terminal v4.2.0</span>
</div>
<div class="space-y-4 font-mono text-sm">
<p class="text-primary">&gt;<span class="text-on-surface"> initializing_agency_protocol...</span></p>
<p class="text-secondary">&gt;<span class="text-on-surface"> mounting_custom_ai_agents</span> [OK]</p>
<p class="text-secondary">&gt;<span class="text-on-surface"> workflow_consulting_ready</span> [OK]</p>
<p class="text-primary-fixed-dim">&gt;<span class="text-on-surface"> status: optimized_for_scale</span></p>
</div>
<div class="mt-8 pt-8 border-t border-outline-variant flex justify-between items-center">
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-full bg-surface-dim"></div>
<div class="w-24 h-2 bg-surface-container-highest rounded-full"></div>
</div>
<div class="w-12 h-6 bg-secondary-container rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Services Bento Grid -->
<section class="py-stack-lg bg-surface-container-lowest" id="features">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg mb-4">Core Agency Services</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Deploy sophisticated AI solutions under your own brand with our battle-tested infrastructure.</p>
</div>
<div class="grid md:grid-cols-3 gap-6">
<!-- Service Card 1 -->
<div class="glass-card p-8 rounded-3xl hover:border-primary-container transition-colors duration-300 group">
<div class="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary" data-icon="robot">robot</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3">Custom AI Agents</h3>
<p class="text-on-surface-variant mb-6">Autonomous agents tailored to specific industry niches, from real estate to complex finance workflows.</p>
<ul class="space-y-3">
<li class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-sm">check_circle</span> LLM Agnostic Deployments
                            </li>
<li class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Custom RAG Pipelines
                            </li>
</ul>
</div>
<!-- Service Card 2 -->
<div class="glass-card p-8 rounded-3xl hover:border-primary-container transition-colors duration-300 group md:translate-y-6">
<div class="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-secondary" data-icon="account_tree">account_tree</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3">Workflow Consulting</h3>
<p class="text-on-surface-variant mb-6">Expert architectural guidance to map out and automate intricate business processes for your clients.</p>
<ul class="space-y-3">
<li class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Process Mining &amp; Audits
                            </li>
<li class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Scalability Mapping
                            </li>
</ul>
</div>
<!-- Service Card 3 -->
<div class="glass-card p-8 rounded-3xl hover:border-primary-container transition-colors duration-300 group">
<div class="w-12 h-12 bg-tertiary-container/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-tertiary" data-icon="integration_instructions">integration_instructions</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3">Integration Services</h3>
<p class="text-on-surface-variant mb-6">Seamlessly connect AI models with existing legacy systems, CRMs, and custom API environments.</p>
<ul class="space-y-3">
<li class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-sm">check_circle</span> API Management
                            </li>
<li class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Legacy Modernization
                            </li>
</ul>
</div>
</div>
</div>
</section>
<!-- Process Timeline -->
<section class="py-24 overflow-hidden">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span class="font-label-md text-primary uppercase tracking-[0.2em] block mb-4">Methodology</span>
<h2 class="font-headline-lg text-headline-lg">Our Framework for Success</h2>
</div>
<div class="text-on-surface-variant max-w-sm">
                        A rigorous, three-stage process designed to move your agency clients from legacy friction to AI efficiency.
                    </div>
</div>
<div class="relative">
<!-- Horizontal Line -->
<div class="absolute top-1/2 left-0 w-full h-[2px] timeline-line hidden md:block"></div>
<div class="grid md:grid-cols-3 gap-12 relative z-10">
<!-- Step 1 -->
<div class="flex flex-col items-center text-center">
<div class="w-20 h-20 rounded-full bg-white border-4 border-primary flex items-center justify-center mb-8 shadow-lg ring-8 ring-background">
<span class="font-headline-md text-primary">01</span>
</div>
<h4 class="font-headline-md text-headline-md mb-4">Audit</h4>
<p class="text-on-surface-variant">Deep dive into existing workflows to identify high-ROI automation targets and data bottlenecks.</p>
</div>
<!-- Step 2 -->
<div class="flex flex-col items-center text-center">
<div class="w-20 h-20 rounded-full bg-white border-4 border-primary-container flex items-center justify-center mb-8 shadow-lg ring-8 ring-background">
<span class="font-headline-md text-primary">02</span>
</div>
<h4 class="font-headline-md text-headline-md mb-4">Build</h4>
<p class="text-on-surface-variant">Rapid prototyping and development of custom AI agents and integrations using the Auralis stack.</p>
</div>
<!-- Step 3 -->
<div class="flex flex-col items-center text-center">
<div class="w-20 h-20 rounded-full bg-white border-4 border-secondary-container flex items-center justify-center mb-8 shadow-lg ring-8 ring-background">
<span class="font-headline-md text-primary">03</span>
</div>
<h4 class="font-headline-md text-headline-md mb-4">Scale</h4>
<p class="text-on-surface-variant">Seamless deployment with white-labeled dashboards and continuous performance monitoring.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Case Studies -->
<section class="py-24 bg-surface-container">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg">Proven Agency Results</h2>
</div>
<div class="grid md:grid-cols-2 gap-stack-lg">
<!-- Case Study 1 -->
<div class="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
<div class="aspect-[16/9] overflow-hidden">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="A sophisticated data visualization dashboard showing geometric patterns and upward trends in vibrant cyan and dark ink black colors, representing high-performance fintech analytics in a clean modern interface." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBceCnPAXGD6DWtXfn0Vk9XQo97nKVjruOzUe0BKPqrqXzd8MLFPQ3V32NhxTlP7IND1RhqCjJxnr39c7fSqhc1bQKzB87XRK6Jr91vCTVeN4YSidQVTnzSx6CB7t6oP5Ev3t2R3sY_Scnpa44a0XQx0FwHdlECbXN8ffLyEGXaiuYFnm7wg_EhieMsUs98pqT3XpHInnRQREa5LB0YGG5-xyy_Kz4ApAiEp8hLVcNtCKLU5_J2-s2W')"></div>
</div>
<div class="p-8">
<div class="flex justify-between items-start mb-4">
<div>
<span class="font-label-sm text-label-sm text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">FinTech</span>
<h4 class="font-headline-md text-headline-md mt-4">10x Support Efficiency for FinTech Corp</h4>
</div>
<div class="text-right">
<span class="block text-headline-md font-bold text-secondary">85%</span>
<span class="text-label-sm text-on-surface-variant">Auto-Resolved</span>
</div>
</div>
<p class="text-on-surface-variant mb-6">Implemented an autonomous tier-1 support agent handling 10k+ monthly tickets with human-like precision.</p>
<a class="inline-flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all" href="#">Read Full Case <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
</div>
<!-- Case Study 2 -->
<div class="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
<div class="aspect-[16/9] overflow-hidden">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="A high-tech digital workspace with multiple floating transparent screens showing interconnected automation nodes and logic trees. The lighting is soft and professional with electric cyan accents against a minimalist grey background." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR5Kuv8aerBlI-i6RpA4Uz4vPILLbU-num4kgMP3ekQD72mhlKjK6_mNQN2KTvpr04KG1-DLKDe4OZOXhYqtIuNT_uvyOCdmBhwFy01NfAEx3-XXdWKuq7II5X_-tcLnRG_YRn4Yqn-_TGkIdDYILUYCcB91wrcurUmGwWH4i0Dy51VT_1_p3QBsjU3ytvZdELOX6UyoGvB8RfWAKfE4vrISoZ9UFkd9b1MTITR84qu9sMYicWCvHO')"></div>
</div>
<div class="p-8">
<div class="flex justify-between items-start mb-4">
<div>
<span class="font-label-sm text-label-sm text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">E-Commerce</span>
<h4 class="font-headline-md text-headline-md mt-4">Automated Product Cataloging</h4>
</div>
<div class="text-right">
<span class="block text-headline-md font-bold text-secondary">92%</span>
<span class="text-label-sm text-on-surface-variant">Time Saved</span>
</div>
</div>
<p class="text-on-surface-variant mb-6">Deployed a vision-based AI agent to auto-generate SEO descriptions and meta-data for 50k SKUs.</p>
<a class="inline-flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all" href="#">Read Full Case <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
</div>
</div>
</div>
</section>
<!-- Packages -->
<section class="py-24 px-margin-desktop" id="pricing">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg mb-4">Agency Partnership Models</h2>
<p class="text-on-surface-variant">Flexible pricing designed to align with your agency's project structure.</p>
</div>
<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<!-- Retainer Card -->
<div class="glass-card p-10 rounded-3xl border-2 border-transparent hover:border-primary transition-all duration-300 relative">
<h4 class="font-headline-md text-headline-md mb-2">Retainer-based</h4>
<p class="text-on-surface-variant mb-8">Ongoing automation support and evolution for your long-term clients.</p>
<div class="flex items-baseline gap-2 mb-8">
<span class="text-display-lg text-headline-lg font-extrabold text-on-surface">$2,499</span>
<span class="text-on-surface-variant">/month</span>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> 20 Dev Hours / Month</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> Priority Infrastructure Access</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> White-label Dashboard</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> Weekly Strategy Sync</li>
</ul>
<button class="w-full py-4 bg-on-surface text-white rounded-xl font-label-md hover:bg-primary transition-colors">Select Retainer</button>
</div>
<!-- Fixed Price Card -->
<div class="glass-card p-10 rounded-3xl border-2 border-primary-container bg-surface-container-low shadow-lg relative overflow-hidden">
<div class="absolute top-0 right-0 bg-primary-container text-on-primary-container px-6 py-1 font-label-sm rounded-bl-xl uppercase tracking-wider">Popular</div>
<h4 class="font-headline-md text-headline-md mb-2">Fixed-price builds</h4>
<p class="text-on-surface-variant mb-8">One-off deployments for specific client requirements and scoped tools.</p>
<div class="flex items-baseline gap-2 mb-8">
<span class="text-on-surface-variant">Starts from</span>
<span class="text-display-lg text-headline-lg font-extrabold text-on-surface">$4,999</span>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> Full Documentation</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> 3 Months Maintenance</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> Client Hand-off Package</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check</span> Custom API Development</li>
</ul>
<button class="w-full py-4 bg-primary text-white rounded-xl font-label-md hover:shadow-lg transition-all">Get a Quote</button>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-24 relative overflow-hidden">

<div class="max-w-4xl mx-auto px-margin-desktop relative z-10">
<div class="glass-card p-12 md:p-20 rounded-[3rem] text-center shadow-2xl ai-signal-border">
<h2 class="font-headline-xl text-headline-xl mb-6">Ready to scale your agency's output?</h2>
<p class="text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">Join the 50+ agencies leveraging Auralis AI infrastructure to deliver 10x more value to their clients.</p>
<div class="flex flex-col sm:flex-row gap-6 justify-center">
<button class="px-10 py-5 bg-primary text-white rounded-2xl font-headline-md hover:scale-105 transition-transform shadow-lg">
                            Book your AI Strategy Consultation
                        </button>
</div>
<p class="mt-8 text-label-sm text-outline flex items-center justify-center gap-2">
<span class="pulse-dot w-2 h-2 rounded-full bg-secondary"></span> 4 Slots available this month
                    </p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container py-16">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div class="col-span-2">
<span class="font-headline-md text-headline-md font-bold text-on-surface block mb-6">Auralis AI</span>
<p class="text-on-surface-variant max-w-xs mb-8">Professional AI infrastructure for modern agencies. Powered by Auralis Engine v4.</p>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-lg">share</span>
</a>
<a class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-lg">public</span>
</a>
</div>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary mb-6">Product</h5>
<ul class="space-y-4 font-label-sm text-label-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">AI Agents</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Dashboards</a></li>
<li><a class="hover:text-primary transition-colors" href="#">API Access</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary mb-6">Company</h5>
<ul class="space-y-4 font-label-sm text-label-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Our Team</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary mb-6">Support</h5>
<ul class="space-y-4 font-label-sm text-label-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Docs</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Resources</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary mb-6">Legal</h5>
<ul class="space-y-4 font-label-sm text-label-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Privacy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms</a></li>
<li><a class="hover:text-primary transition-colors" href="#">License</a></li>
</ul>
</div>
</div>
<div class="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<span class="text-label-sm text-on-surface-variant">© 2024 Auralis AI. All rights reserved.</span>
<div class="flex gap-8">
<a class="text-label-sm text-on-surface-variant hover:text-primary" href="#">System Status: <span class="text-secondary">Operational</span></a>
</div>
</div>
</div>
</footer>
<script>
        // Micro-interaction for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Simple visibility observer for animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.glass-card').forEach(el => observer.observe(el));
    </script>
`
  },
  "dashboard/marketing": {
    bodyClass: "bg-background text-on-surface font-body-md overflow-x-hidden",
    html: `
<!-- SideNavBar Shell -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-on-surface flex flex-col py-stack-md border-r border-outline z-50">
<div class="px-6 mb-8">
<h1 class="font-headline-md text-headline-md font-bold text-surface-container-lowest">Auralis AI</h1>
<p class="font-label-md text-label-md text-outline-variant opacity-70">Enterprise Admin</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container/10 text-on-primary-container border-r-4 border-primary-container transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span class="font-label-md text-label-md">Agents</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">account_tree</span>
<span class="font-label-md text-label-md">Workflows</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="font-label-md text-label-md">CRM</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">monitoring</span>
<span class="font-label-md text-label-md">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">extension</span>
<span class="font-label-md text-label-md">Integrations</span>
</a>
<div class="mt-auto pt-8">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-on-primary-fixed-variant transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-md text-label-md">Support</span>
</a>
</div>
</nav>
<div class="px-4 mt-6">
<button class="w-full py-3 px-4 bg-primary-container text-on-primary-container font-label-md rounded-xl font-bold hover:brightness-110 transition-all shadow-sm">
                Upgrade Plan
            </button>
</div>
</aside>
<!-- TopNavBar Shell -->
<header class="flex justify-between items-center h-16 px-margin-desktop ml-64 bg-surface/80 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant">
<div class="flex items-center gap-6 flex-1">
<div class="relative w-full max-w-md focus-within:ring-2 focus-within:ring-primary-container rounded-lg overflow-hidden">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none focus:ring-0 text-body-md font-body-md" placeholder="Search agents, models, or tasks..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">dark_mode</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">apps</span>
</button>
<div class="h-8 w-px bg-outline-variant mx-2"></div>
<div class="flex items-center gap-3 cursor-pointer">
<div class="w-8 h-8 rounded-full bg-primary-fixed overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up professional portrait of a tech executive in a clean, minimalist studio setting with soft lighting. They wear a high-tech obsidian black turtleneck against a warm, off-white background with a hint of vibrant cyan backlighting. The aesthetic is modern, high-contrast, and energetic, conveying professional intelligence and high-performance leadership." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrugqk6ugCrm-L7X502gnmzxwX9rxm6dccf7IjwX3V8wvtbDEjDxbWBFYUb0O1uQJboh3ND4Gab4I6iRRZwO5MMYP0cGDUvuNOHKelqnDG3uxbtufvfTub_q4TkaMEbrUbDOD1EuTA4osXHVDGeMyZwSY5VtuVIf3DvOtOes9HHxVFQJDpo5TNS4DYN5Z_NdU3R7df5Dk0mGRCreDmZebKFb1u1a691T-OVaS5dojpKoGrzURby43"/>
</div>
<span class="font-label-md text-label-md text-on-surface hidden lg:block">Admin User</span>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 p-margin-desktop min-h-screen">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Manage Agents</h2>
<p class="text-on-surface-variant font-body-md">Deploy, monitor, and scale your autonomous AI workforce.</p>
</div>
<button class="flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container font-label-md rounded-xl font-bold shadow-sm hover:translate-y-[-2px] transition-all duration-200" onclick="toggleEmptyState()">
<span class="material-symbols-outlined">add</span>
                Create New Agent
            </button>
</div>
<!-- Filter Bar -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-stack-lg flex flex-wrap items-center gap-gutter">
<div class="flex items-center gap-3">
<span class="text-label-md font-label-md text-on-surface-variant">Filter by:</span>
<select class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 font-label-md text-on-surface cyan-glow-focus transition-all">
<option>All Statuses</option>
<option>Online</option>
<option>Idle</option>
<option>Offline</option>
</select>
<select class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 font-label-md text-on-surface cyan-glow-focus transition-all">
<option>All Models</option>
<option>GPT-4o</option>
<option>Claude 3.5 Sonnet</option>
<option>Llama 3 70B</option>
</select>
<select class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 font-label-md text-on-surface cyan-glow-focus transition-all">
<option>All Categories</option>
<option>Customer Support</option>
<option>Data Processing</option>
<option>Workflow Automation</option>
</select>
</div>
<div class="ml-auto flex items-center bg-surface-container-low border border-outline-variant rounded-lg p-1">
<button class="p-1.5 rounded-md bg-white shadow-sm text-primary">
<span class="material-symbols-outlined">grid_view</span>
</button>
<button class="p-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-colors">
<span class="material-symbols-outlined">view_list</span>
</button>
</div>
</div>
<!-- Grid of Agent Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter" id="agents-grid">
<!-- Agent Card 1 -->
<div class="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-t-2 border-t-primary-container relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined text-[28px]">support_agent</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface leading-tight">Support Bot Alpha</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim signal-pulse"></span>
<span class="text-label-sm font-label-sm text-secondary">Online</span>
</div>
</div>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Model</span>
<span class="font-medium text-on-surface">GPT-4o</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Tasks Completed</span>
<span class="font-medium text-on-surface">12,450</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Efficiency</span>
<span class="font-medium text-on-primary-container bg-primary-container/20 px-2 py-0.5 rounded-full text-label-sm">98.2%</span>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 py-2 border-1.5 border-on-surface border rounded-lg font-label-md hover:bg-surface-container-low transition-colors">Edit</button>
<button class="flex-1 py-2 bg-on-surface text-surface rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors">
<span class="material-symbols-outlined text-sm">play_arrow</span>
                        Run
                    </button>
</div>
</div>
<!-- Agent Card 2 -->
<div class="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-t-2 border-t-primary-container relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined text-[28px]">query_stats</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface leading-tight">Market Analyzer</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim signal-pulse"></span>
<span class="text-label-sm font-label-sm text-secondary">Online</span>
</div>
</div>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Model</span>
<span class="font-medium text-on-surface">Claude 3.5 Sonnet</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Tasks Completed</span>
<span class="font-medium text-on-surface">8,920</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Efficiency</span>
<span class="font-medium text-on-primary-container bg-primary-container/20 px-2 py-0.5 rounded-full text-label-sm">96.5%</span>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 py-2 border-1.5 border-on-surface border rounded-lg font-label-md hover:bg-surface-container-low transition-colors">Edit</button>
<button class="flex-1 py-2 bg-on-surface text-surface rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors">
<span class="material-symbols-outlined text-sm">play_arrow</span>
                        Run
                    </button>
</div>
</div>
<!-- Agent Card 3 -->
<div class="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-t-2 border-t-outline-variant relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined text-[28px]">description</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface leading-tight">Doc Summarizer</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-label-sm font-label-sm text-on-surface-variant">Idle</span>
</div>
</div>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Model</span>
<span class="font-medium text-on-surface">Llama 3 70B</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Tasks Completed</span>
<span class="font-medium text-on-surface">42,100</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Efficiency</span>
<span class="font-medium text-on-primary-container bg-primary-container/20 px-2 py-0.5 rounded-full text-label-sm">99.1%</span>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 py-2 border-1.5 border-on-surface border rounded-lg font-label-md hover:bg-surface-container-low transition-colors">Edit</button>
<button class="flex-1 py-2 bg-on-surface text-surface rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors">
<span class="material-symbols-outlined text-sm">play_arrow</span>
                        Run
                    </button>
</div>
</div>
<!-- Agent Card 4 -->
<div class="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-t-2 border-t-primary-container relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[28px]">code</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface leading-tight">Code Reviewer</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim signal-pulse"></span>
<span class="text-label-sm font-label-sm text-secondary">Online</span>
</div>
</div>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Model</span>
<span class="font-medium text-on-surface">GPT-4o</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Tasks Completed</span>
<span class="font-medium text-on-surface">542</span>
</div>
<div class="flex justify-between text-body-md">
<span class="text-on-surface-variant">Efficiency</span>
<span class="font-medium text-on-primary-container bg-primary-container/20 px-2 py-0.5 rounded-full text-label-sm">94.8%</span>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 py-2 border-1.5 border-on-surface border rounded-lg font-label-md hover:bg-surface-container-low transition-colors">Edit</button>
<button class="flex-1 py-2 bg-on-surface text-surface rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors">
<span class="material-symbols-outlined text-sm">play_arrow</span>
                        Run
                    </button>
</div>
</div>
</div>
<!-- Empty State Container (Hidden by default) -->
<div class="hidden flex-col items-center justify-center py-24 text-center" id="empty-state">
<div class="relative mb-8">
<div class="w-64 h-64 bg-surface-container-low rounded-full flex items-center justify-center overflow-hidden">
<img class="w-48 h-48 object-contain" data-alt="A sophisticated 3D isometric illustration of a robotic workbench. In the center, a translucent, crystalline robotic core glows with soft electric cyan light, surrounded by floating mechanical parts and schematic holograms. The environment is a clean, hyper-modern digital lab with high-contrast obsidian and white tones, reflecting a premium enterprise AI management interface aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUu1E6i-kPXtAnJS4XUVynfM4FTY7D7-v_g8JQgol_KcOo29FOpX81Ku42FMCon4-HEbjVGnwocOtFuPdcJOnLuH9QQF9CyvXOqJIraLxklGMqhOM7gc0NtrXL9Vx9xXZUtNwc3GpVjiOQQixsjJYzGpxVxKMfLIKaskZnWHuhohBUUajceNOSiWDysTKpvHZfZ7y0_h_vHGj_QLL2hxJsq9PVryCydjhd7kxySPuAoEFIKIPzZMmR"/>
</div>
<div class="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-container rounded-full flex items-center justify-center shadow-lg animate-bounce">
<span class="material-symbols-outlined text-on-primary-container">psychology</span>
</div>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface mb-2">No Agents Found</h3>
<p class="text-on-surface-variant font-body-md max-w-md mx-auto mb-8">It looks like your workforce is currently empty. Create your first autonomous agent to start automating your enterprise workflows.</p>
<button class="px-8 py-3 bg-on-surface text-surface font-label-md rounded-xl font-bold flex items-center gap-2 hover:bg-on-surface-variant transition-all shadow-md">
<span class="material-symbols-outlined">add</span>
                Build Your First Agent
            </button>
</div>
</main>
<script>
        function toggleEmptyState() {
            const grid = document.getElementById('agents-grid');
            const empty = document.getElementById('empty-state');
            
            if (grid.classList.contains('hidden')) {
                grid.classList.remove('hidden');
                grid.classList.add('grid');
                empty.classList.add('hidden');
                empty.classList.remove('flex');
            } else {
                grid.classList.add('hidden');
                grid.classList.remove('grid');
                empty.classList.remove('hidden');
                empty.classList.add('flex');
            }
        }

        // Simple pulse animation sync
        document.querySelectorAll('.signal-pulse').forEach((pulse, i) => {
            pulse.style.animationDelay = \`\${i * 0.2}s\`;
        });
    </script>
`
  },
  "ai-apps/ai-chat": {
    bodyClass: "bg-background text-on-surface",
    html: `
<div class="scanlines"></div>
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full h-14 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-gutter z-50">
<div class="flex items-center gap-6">
<span class="font-headline-md text-headline-md text-primary tracking-tighter">SynthOS IDE</span>
<nav class="hidden md:flex gap-4">
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Deploy</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Run</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer active:scale-95" href="#">AI Sync</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">account_tree</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">settings</span>
</div>
<div class="w-8 h-8 rounded bg-surface-container-high border border-white/10 flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a software engineer with short hair, wearing a sleek black hoodie, in a dimly lit studio with subtle cyan and magenta neon rim lighting. High-end photography style, shallow depth of field, sharp focus on the eyes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZH_irkIdudSEAsGL-kpXwLkEBwjF2_s5V4XUc6TY4mNkeh4PSAxHg2NAXQ1Qaxm5nUy7ew-fj1eAMN633jcaI_23Q8-htktCc_7ZsCQKIscbyTmBmCk8bzoBs-hMbIKH_ah6r5ec6_uKf9bH9KmsFyztXhzJ4xPGqdPS_IC4SmXTFPd_2HFCw9XL2r0pG379uXRF27PWIYgwhevILzA2RjdEtBBdily58You371bcIIK-kt14S5A5"/>
</div>
</div>
</header>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 flex flex-col h-full z-40 bg-surface-container/80 backdrop-blur-xl border-r border-white/10 w-sidebar-width pt-14 pb-6">
<div class="px-4 py-4 mb-2">
<div class="flex items-center gap-3 mb-1">
<div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">terminal</span>
</div>
<div>
<h3 class="font-label-caps text-label-caps text-on-surface">Project Alpha</h3>
<p class="text-[10px] text-on-surface-variant uppercase tracking-widest">main branch</p>
</div>
</div>
<button class="w-full mt-4 py-2 border border-primary/30 text-primary font-label-caps text-label-caps hover:bg-primary/10 transition-all active:scale-95">New File</button>
</div>
<nav class="flex-1 overflow-y-auto">
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">folder_open</span>
<span class="font-label-caps text-label-caps">Explorer</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">search</span>
<span class="font-label-caps text-label-caps">Search</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">account_tree</span>
<span class="font-label-caps text-label-caps">Source Control</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">extension</span>
<span class="font-label-caps text-label-caps">Extensions</span>
</div>
<div class="flex items-center text-primary bg-primary/10 border-l-2 border-primary px-4 py-2 transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">smart_toy</span>
<span class="font-label-caps text-label-caps">AI Debug</span>
</div>
</nav>
<div class="mt-auto px-0">
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3 text-sm">settings</span>
<span class="font-label-caps text-label-caps">Settings</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3 text-sm">person</span>
<span class="font-label-caps text-label-caps">Account</span>
</div>
</div>
</aside>
<!-- Main Workspace -->
<main class="ml-sidebar-width pt-14 pb-6 flex h-screen overflow-hidden bg-[#0a0a0c]">
<!-- Code Editor Section -->
<section class="flex-1 flex flex-col border-r border-white/5 relative">
<!-- Tabs -->
<div class="h-10 flex border-b border-white/5 bg-surface-container-lowest">
<div class="flex items-center px-4 gap-2 bg-[#0a0a0c] border-r border-white/5 text-primary text-xs font-code-sm border-t-2 border-t-primary">
<span class="material-symbols-outlined text-[14px]">javascript</span>
                    useUserData.ts
                </div>
<div class="flex items-center px-4 gap-2 text-on-surface-variant text-xs font-code-sm hover:bg-white/5 cursor-pointer">
<span class="material-symbols-outlined text-[14px]">table_rows</span>
                    DataTable.tsx
                </div>
</div>
<!-- Editor Surface -->
<div class="flex-1 p-6 overflow-y-auto font-code-md text-code-md leading-relaxed selection:bg-primary/30">
<div class="flex gap-4">
<div class="text-right text-on-surface-variant/30 select-none pr-2">
                        1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15
                    </div>
<div class="flex-1">
<span class="text-secondary">import</span> { useEffect, useState } <span class="text-secondary">from</span> <span class="text-primary-container">'react'</span>;<br/>
<br/>
<span class="text-secondary">export const</span> useUserData = () =&gt; {<br/>
                          <span class="text-secondary">const</span> [data, setData] = useState([]);<br/>
                          <span class="text-secondary">const</span> [loading, setLoading] = useState(<span class="text-secondary">true</span>);<br/>
<br/>
                          useEffect(() =&gt; {<br/>
                            fetch(<span class="text-primary-container">'/api/user/profile'</span>)<br/>
                              .then(res =&gt; res.json())<br/>
                              .then(json =&gt; {<br/>
                                setData(json);<br/>
                                setLoading(<span class="text-secondary">false</span>);<br/>
                              });<br/>
                          }, []);<br/>
<br/>
                          <span class="text-on-surface-variant italic opacity-60">// AI Ghost: suggesting a mapping function for cleaner data structure</span><br/>
                          <span class="text-on-surface-variant/40 line-through">return { data, loading };</span><br/>
                          <span class="text-primary/70">const</span> <span class="text-primary/70">transformedData = data.map(item =&gt; ({</span><br/>
                            <span class="text-primary/70">id: item.uid,</span><br/>
                            <span class="text-primary/70">displayName: \`\${item.first} \${item.last}\`,</span><br/>
                            <span class="text-primary/70">active: item.status === 'active'</span><br/>
                          <span class="text-primary/70">}));</span><span class="code-cursor"></span><br/>
                          <span class="text-primary/70">return { data: transformedData, loading };</span><br/>
                        }
                    </div>
</div>
</div>
<!-- Diff Overlay (Subtle) -->
<div class="absolute inset-0 pointer-events-none border-2 border-primary/10 m-1 rounded-sm"></div>
</section>
<!-- AI Chat Interface Section -->
<section class="w-[400px] flex flex-col bg-surface-container-lowest/50 backdrop-blur-md">
<!-- AI Header -->
<div class="p-4 border-b border-white/10 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
<span class="font-headline-md text-body-md">SynthOS Assistant</span>
</div>
<span class="text-code-sm text-primary/60 px-2 py-0.5 bg-primary/10 rounded-full">v4.2.0</span>
</div>
<!-- Chat History -->
<div class="flex-1 overflow-y-auto p-4 space-y-6">
<!-- User Message -->
<div class="flex flex-col items-end gap-2">
<div class="bg-surface-container-high rounded-xl p-3 max-w-[85%] border border-white/5">
<p class="text-body-md text-on-surface">Refactor this logic to use TanStack Query.</p>
</div>
<span class="text-[10px] text-on-surface-variant uppercase font-code-sm">User • 2:41 PM</span>
</div>
<!-- AI Response -->
<div class="flex flex-col items-start gap-2">
<div class="bg-primary/5 rounded-xl p-4 max-w-[90%] border border-primary/20 neon-glow-purple">
<div class="flex items-center gap-2 mb-2 text-primary font-code-md">
<span class="material-symbols-outlined text-sm">smart_toy</span>
<span>Thinking...</span>
</div>
<p class="text-code-md text-on-surface-variant mb-4">I'll migrate your manual fetch logic to \`useQuery\`. This will handle caching, loading states, and error boundary integration automatically.</p>
<div class="bg-black/40 rounded p-3 border border-white/5 mb-3">
<pre class="text-xs font-code-sm text-primary-container leading-tight"><span class="text-secondary">import</span> { useQuery } <span class="text-secondary">from</span> <span class="text-primary-container">'@tanstack/react-query'</span>;

<span class="text-secondary">export const</span> useUserData = () =&gt; {
  <span class="text-secondary">return</span> useQuery({
    queryKey: [<span class="text-primary-container">'user-profile'</span>],
    queryFn: () =&gt; fetch(<span class="text-primary-container">'/api/user/profile'</span>).then(res =&gt; res.json())
  });
};</pre>
</div>
<div class="flex gap-2">
<button class="text-[10px] bg-primary text-black px-3 py-1 font-bold rounded-sm uppercase tracking-tighter hover:brightness-110 active:scale-95 transition-all">Apply to File</button>
<button class="text-[10px] border border-white/20 text-on-surface-variant px-3 py-1 font-bold rounded-sm uppercase tracking-tighter hover:bg-white/5 transition-all">Copy</button>
</div>
</div>
<span class="text-[10px] text-on-surface-variant uppercase font-code-sm">AI Agent • 2:41 PM</span>
</div>
</div>
<!-- Chat Input Area -->
<div class="p-4 border-t border-white/10 bg-surface">
<div class="relative group">
<textarea class="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-3 text-code-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all resize-none h-24 placeholder:text-on-surface-variant/30" placeholder="Ask the AI to refactor, debug, or write tests..."></textarea>
<div class="absolute bottom-2 right-2 flex gap-2">
<button class="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all border border-secondary/20">
<span class="material-symbols-outlined text-sm">attachment</span>
</button>
<button class="w-8 h-8 rounded bg-secondary flex items-center justify-center text-surface transition-all hover:neon-glow-purple">
<span class="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
</section>
</main>
<!-- Command Center (Footer) -->
<footer class="fixed bottom-0 left-0 w-full h-8 bg-surface-container-lowest border-t border-white/10 flex items-center justify-between px-4 z-50">
<div class="flex items-center gap-6 h-full">
<!-- Terminal Input -->
<div class="flex items-center gap-2 group">
<span class="text-primary font-code-sm text-[12px] opacity-70 group-focus-within:opacity-100 transition-opacity">λ</span>
<input class="bg-transparent border-none text-primary font-code-sm text-code-sm focus:ring-0 w-80 p-0 hover:text-primary transition-colors cursor-default" readonly="" type="text" value="npm run dev --trace-deprecation"/>
</div>
<div class="flex items-center gap-4 border-l border-white/5 pl-6 h-4">
<span class="text-on-surface-variant font-code-sm text-code-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">terminal</span>
                    TypeScript
                </span>
<span class="text-on-surface-variant font-code-sm text-code-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">translate</span>
                    UTF-8
                </span>
<span class="text-on-surface-variant font-code-sm text-code-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">account_tree</span>
                    Main branch
                </span>
</div>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 px-2 py-0.5 rounded bg-primary/5 border border-primary/10">
<div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
<span class="text-primary font-code-sm text-code-sm">System: Healthy</span>
</div>
<span class="text-on-surface-variant font-code-sm text-code-sm opacity-50">v1.2.4-stable</span>
</div>
</footer>
<!-- Interactive micro-effects script -->
<script>
        document.addEventListener('mousemove', (e) => {
            const sidebar = document.querySelector('aside');
            const rect = sidebar.getBoundingClientRect();
            if (e.clientX < rect.right && e.clientX > rect.left) {
                const y = e.clientY - rect.top;
                // Subtle lighting follow effect could go here
            }
        });

        // Simulating the AI Typing Effect
        function simulateTyping() {
            const ghostText = document.querySelector('.text-primary\\\\/70');
            if (ghostText) {
                ghostText.style.opacity = '0.4';
                setTimeout(() => { ghostText.style.opacity = '0.7'; }, 1000);
            }
        }
        setInterval(simulateTyping, 2000);
    </script>
`
  },
  "ai-apps/image-generator": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary/30 overflow-hidden",
    html: `
<div class="scanline-overlay"></div>
<!-- TopNavBar -->
<header class="bg-surface/80 backdrop-blur-xl text-primary font-headline-md text-headline-md border-b border-white/10 fixed top-0 left-0 w-full h-14 flex justify-between items-center px-gutter z-50">
<div class="flex items-center gap-6">
<span class="font-headline-md text-headline-md text-primary tracking-tighter">SynthOS IDE</span>
<nav class="hidden md:flex items-center gap-6">
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Deploy</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Run</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200 cursor-pointer active:scale-95" href="#">AI Sync</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center bg-surface-container rounded-lg px-3 py-1 gap-2">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
<input class="bg-transparent border-none focus:ring-0 text-code-sm font-code-sm text-on-surface w-48" placeholder="Search project..." type="text"/>
</div>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">account_tree</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">notifications</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">settings</button>
<div class="w-8 h-8 rounded-full overflow-hidden border border-white/10 ml-2">
<img class="w-full h-full object-cover" data-alt="A professional close-up of a software engineer portrait in a high-tech studio. The lighting is cinematic with cyan and magenta rim lights against a dark, moody background. The person has a focused expression, reflecting a high-competency technical professional in the futuristic SynthOS ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEhUThWI3Xfls30EWRrGTY8DhdtmiOgbD6sOdHI6ol2pYJuqK7yNcqsKvt4LJ11R697lLU97Du3lOxyzRp2xRs8GjkKp36n-jh02vT0tZK5KRFWwpANx3qFXfS2a9vo1GeooGZEXF0UAkJPubCJ5X_eafDDXHfHfUvfpbqEQnzdeSduhK6RSQTTcZLtZ7BD8u0dgMz960wQa5igS-vORlzqV7erXpfJmvlOD0RZgV38vaQRC-93FnK"/>
</div>
</div>
</header>
<div class="flex pt-14 h-screen">
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 flex flex-col h-full z-40 bg-surface-container/80 backdrop-blur-xl text-primary font-label-caps text-label-caps border-r border-white/10 w-sidebar-width pt-14">
<div class="p-4 flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">terminal</span>
</div>
<div>
<div class="font-headline-md text-[14px] leading-tight text-on-surface">Project Alpha</div>
<div class="text-[10px] text-on-surface-variant opacity-60">main branch</div>
</div>
</div>
<div class="flex-1 overflow-y-auto py-2">
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">folder_open</span>
<span>Explorer</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">search</span>
<span>Search</span>
</div>
<div class="flex items-center text-primary bg-primary/10 border-l-2 border-primary px-4 py-2 transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">account_tree</span>
<span>Source Control</span>
<span class="ml-auto bg-primary text-background text-[10px] px-1.5 rounded-full">3</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">extension</span>
<span>Extensions</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer">
<span class="material-symbols-outlined mr-3">smart_toy</span>
<span>AI Debug</span>
</div>
<div class="mt-6 px-4 mb-2 opacity-40 text-[10px] tracking-widest uppercase">Changed Files</div>
<div class="px-2">
<div class="flex items-center gap-2 p-2 rounded-lg bg-error-container/20 border border-error/20 group cursor-pointer hover:bg-error-container/30 transition-colors">
<span class="material-symbols-outlined text-error text-[18px]">javascript</span>
<span class="font-code-sm text-code-sm text-on-surface flex-1 truncate">auth_service.ts</span>
<span class="text-[10px] text-error font-bold">M</span>
</div>
<div class="flex items-center gap-2 p-2 rounded-lg group cursor-pointer hover:bg-white/5 transition-colors mt-1">
<span class="material-symbols-outlined text-primary text-[18px]">data_object</span>
<span class="font-code-sm text-code-sm text-on-surface-variant flex-1 truncate">config_loader.py</span>
<span class="text-[10px] text-primary font-bold">A</span>
</div>
</div>
</div>
<div class="p-4 mt-auto border-t border-white/5">
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer rounded-lg mb-1">
<span class="material-symbols-outlined mr-3">settings</span>
<span>Settings</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 cursor-pointer rounded-lg">
<span class="material-symbols-outlined mr-3">person</span>
<span>Account</span>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-sidebar-width flex-1 bg-surface relative overflow-hidden flex flex-col">
<!-- Diff Header -->
<div class="h-12 bg-surface-container-low border-b border-white/10 flex items-center justify-between px-6 shrink-0">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[18px]">history</span>
<span class="font-code-md text-code-md text-on-surface">Visual Diff: <span class="text-primary">auth_service.ts</span></span>
<span class="px-2 py-0.5 rounded bg-surface-container-highest text-[10px] text-on-surface-variant font-code-sm border border-white/10">Working Directory → AI Sync</span>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
<div class="w-2.5 h-2.5 rounded-sm bg-error/40 border border-error"></div>
<span>14 Removals</span>
</div>
<div class="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
<div class="w-2.5 h-2.5 rounded-sm bg-primary/40 border border-primary"></div>
<span>22 Additions</span>
</div>
</div>
</div>
<!-- Diff Content Grid -->
<div class="flex-1 grid grid-cols-2 gap-[1px] bg-white/5 overflow-hidden">
<!-- Left: Original Code -->
<div class="bg-surface h-full overflow-y-auto font-code-md text-code-md text-on-surface-variant p-4">
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">12</span>
<span class="text-on-tertiary">async function </span>
<span class="text-tertiary"> validateUser</span>
<span>(token: string) {</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">13</span>
<span class="pl-4">const user = await db.query(</span>
</div>
<div class="flex group diff-removed">
<span class="w-10 opacity-30 select-none text-right pr-4">14</span>
<span class="pl-8 text-on-surface">\`SELECT * FROM users WHERE token = '\${token}'\`</span>
</div>
<div class="flex group diff-removed">
<span class="w-10 opacity-30 select-none text-right pr-4">15</span>
<span class="pl-4 text-on-surface">);</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">16</span>
<span class="pl-4">if (!user) return false;</span>
</div>
<div class="flex group diff-removed">
<span class="w-10 opacity-30 select-none text-right pr-4">17</span>
<span class="pl-4 text-on-surface">return user.isActive;</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">18</span>
<span>}</span>
</div>
<div class="mt-4 opacity-20 italic text-[12px] pl-10 border-l border-white/10">... lines 19-42 hidden</div>
<div class="mt-4 flex group diff-removed">
<span class="w-10 opacity-30 select-none text-right pr-4">43</span>
<span class="text-on-surface">function legacyAuth() { /* insecure */ }</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">44</span>
<span class="text-on-tertiary">export default </span>
<span>validateUser;</span>
</div>
</div>
<!-- Right: Optimized Code (AI) -->
<div class="bg-surface-container-lowest h-full overflow-y-auto font-code-md text-code-md text-on-surface-variant p-4 relative">
<!-- AI Badge -->
<div class="absolute top-4 right-4 bg-primary/10 border border-primary/40 rounded-full px-3 py-1 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[14px]">bolt</span>
<span class="text-[10px] font-bold text-primary uppercase tracking-widest">AI Optimized</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">12</span>
<span class="text-on-tertiary">async function </span>
<span class="text-tertiary"> validateUser</span>
<span>(token: string) {</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">13</span>
<span class="pl-4">const user = await db.query(</span>
</div>
<div class="flex group diff-added">
<span class="w-10 opacity-30 select-none text-right pr-4">14</span>
<span class="pl-8 text-primary font-medium">"SELECT * FROM users WHERE token = $1", [token]</span>
</div>
<div class="flex group diff-added">
<span class="w-10 opacity-30 select-none text-right pr-4">15</span>
<span class="pl-4 text-primary font-medium">); // Fixed SQL Injection risk</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">16</span>
<span class="pl-4">if (!user) return false;</span>
</div>
<div class="flex group diff-added">
<span class="w-10 opacity-30 select-none text-right pr-4">17</span>
<span class="pl-4 text-primary font-medium">return user.isActive &amp;&amp; !user.isBanned;</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">18</span>
<span>}</span>
</div>
<div class="mt-4 opacity-20 italic text-[12px] pl-10 border-l border-white/10">... lines 19-42 synchronized</div>
<div class="mt-4 flex group bg-primary/5 italic opacity-50">
<span class="w-10 opacity-30 select-none text-right pr-4">43</span>
<span class="text-on-surface-variant">// Legacy removal authorized by security policy</span>
</div>
<div class="flex group hover:bg-white/5 transition-colors">
<span class="w-10 opacity-30 select-none text-right pr-4">44</span>
<span class="text-on-tertiary">export default </span>
<span>validateUser;</span>
</div>
</div>
</div>
<!-- Floating Action Button -->
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
<button class="bg-primary text-background font-bold font-headline-md text-[14px] px-8 py-3 rounded-full flex items-center gap-3 neon-glow-primary transition-all duration-200 hover:scale-105 active:scale-95 group">
<span class="material-symbols-outlined group-hover:rotate-12 transition-transform">published_with_changes</span>
                    Commit Changes
                </button>
</div>
</main>
</div>
<!-- Footer -->
<footer class="bg-surface-container-lowest text-primary font-code-sm text-code-sm border-t border-white/10 fixed bottom-0 left-0 w-full flex items-center justify-between px-4 h-6 z-50">
<div class="flex items-center gap-4">
<span class="text-on-surface-variant">v1.2.4-stable</span>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="text-on-surface-variant">System: Healthy</span>
</div>
</div>
<div class="flex items-center gap-6">
<span class="text-on-surface-variant hover:text-primary transition-colors cursor-default">TypeScript</span>
<span class="text-on-surface-variant hover:text-primary transition-colors cursor-default">UTF-8</span>
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[14px]">account_tree</span>
<span>Main branch</span>
</div>
</div>
</footer>
<!-- Background Decoration -->
<div class="fixed inset-0 pointer-events-none z-[-1] opacity-20">

</div>
<script>
        // Simple micro-interaction for diff highlighting
        document.querySelectorAll('.group').forEach(el => {
            el.addEventListener('mouseenter', () => {
                // Potential for synchronized scrolling or matching line highlights
            });
        });

        // Simulating some console activity for atmosphere
        console.log("%c SynthOS IDE v1.2.4 Active ", "background: #6bfb9a; color: #131315; font-weight: bold; padding: 2px 5px;");
        console.log("%c AI Diff visualization loaded for auth_service.ts ", "color: #bccabb; font-family: monospace;");
    </script>
`
  },
  "dashboard/analytics": {
    bodyClass: "font-body-md text-body-md bg-surface-container-lowest",
    html: `
<!-- SideNavBar Shell -->
<aside class="fixed left-0 top-0 h-full z-40 w-64 flex flex-col border-r border-outline-variant bg-surface-container-lowest shadow-sm">
<div class="px-6 py-8 flex flex-col gap-2">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-extrabold text-on-surface">Auralis AI</h1>
<p class="text-[10px] font-label-md uppercase tracking-wider text-outline">Premium Agency Hub</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl font-bold" href="#">
<span class="material-symbols-outlined" data-icon="monitoring" style="font-variation-settings: 'FILL' 1;">monitoring</span>
<span class="font-label-md">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-label-md">CRM</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all" href="#">
<span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
<span class="font-label-md">Workflows</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all" href="#">
<span class="material-symbols-outlined" data-icon="business_center">business_center</span>
<span class="font-label-md">Agency</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-md">Settings</span>
</a>
</nav>
<div class="p-4 mt-auto border-t border-outline-variant/30">
<button class="w-full py-3 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-98 active:opacity-80 transition-transform">
<span class="material-symbols-outlined text-[20px]">add</span>
<span>New Project</span>
</button>
<div class="mt-4 flex flex-col gap-1">
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-all text-sm" href="#">
<span class="material-symbols-outlined text-[18px]" data-icon="help">help</span>
<span>Help Center</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-all text-sm" href="#">
<span class="material-symbols-outlined text-[18px]" data-icon="account_circle">account_circle</span>
<span>Account</span>
</a>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-64 min-h-screen">
<!-- TopNavBar Shell -->
<header class="sticky top-0 right-0 w-full z-30 flex justify-between items-center px-margin-desktop h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div class="flex items-center gap-6">
<div class="relative w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all" placeholder="Search analytics..." type="text"/>
</div>
<nav class="hidden md:flex gap-6">
<a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Overview</a>
<a class="font-label-md text-primary font-bold border-b-2 border-primary pb-1" href="#">Metrics</a>
<a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pipeline</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
</button>
<div class="h-8 w-[1px] bg-outline-variant mx-1"></div>
<div class="flex items-center gap-3 pl-2">
<div class="text-right hidden lg:block">
<p class="font-label-md text-on-surface leading-tight">Alex Sterling</p>
<p class="text-[10px] text-outline font-bold uppercase tracking-tighter leading-tight">Admin</p>
</div>
<img class="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="A professional studio portrait of a technology executive, mid-30s, wearing a modern minimal black turtleneck, clean background with soft high-key lighting, modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0qK5AvVwPWZG9zlIkCS2WGdifxW7hXDkITXRaIXEVFT-0YTlquUpkQy5UVrFfZonYJDQjqmT2fkQa2otxW4kVOn8lLRTNoNC20kqG132ZWeIgF7IMow_wGymOiTjU6m7c2hs-lA_iXXbE9iq4D29ODuJ9i6tJ1G_Em2OjiEbX_f7mg6Cs2rth2A3dy4KqSSmm20vdJkajsxfSSrryDTYxpxLx6yDezAYi50eYaZnNuojhv1bzoKvc"/>
</div>
</div>
</header>
<!-- Canvas -->
<section class="p-margin-desktop max-w-[1400px] mx-auto space-y-stack-lg">
<!-- Breadcrumbs & Header Actions -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<nav class="flex items-center gap-2 text-outline font-label-sm mb-2">
<span>Dashboard</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-primary font-bold">Analytics</span>
</nav>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Platform Insights</h2>
</div>
<div class="flex flex-wrap items-center gap-stack-sm">
<div class="flex items-center bg-white border border-outline-variant rounded-xl p-1 shadow-sm">
<button class="px-4 py-1.5 text-sm font-bold bg-primary-container text-on-primary-container rounded-lg">Last 30 Days</button>
<button class="px-4 py-1.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container rounded-lg transition-all">Last 90 Days</button>
</div>
<button class="flex items-center gap-2 px-4 py-2.5 bg-white border border-outline-variant rounded-xl text-on-surface font-label-md shadow-sm hover:bg-surface-container transition-all">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
                        Custom Range
                    </button>
<button class="flex items-center gap-2 px-4 py-2.5 bg-secondary-fixed text-on-secondary-fixed rounded-xl font-bold shadow-sm hover:opacity-90 transition-all">
<span class="material-symbols-outlined text-[18px]">filter_list</span>
                        Segment
                    </button>
</div>
</div>
<!-- Bento Grid - Key Metrics -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div class="glass-card ai-signal-border p-6 rounded-2xl flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="font-label-md text-outline uppercase tracking-wider">Total Revenue</span>
<span class="bg-secondary-fixed/20 text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-extrabold">+12.4%</span>
</div>
<div class="mt-4">
<p class="font-headline-lg text-headline-lg">$128,430.00</p>
<div class="flex items-center gap-2 mt-2">
<div class="flex gap-1 h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div class="bg-primary w-3/4"></div>
</div>
</div>
</div>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="font-label-md text-outline uppercase tracking-wider">Token Usage</span>
<div class="flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-secondary pulse-green"></span>
<span class="text-[10px] text-secondary font-bold uppercase">Live</span>
</div>
</div>
<div class="mt-4">
<p class="font-headline-lg text-headline-lg">1.4B</p>
<p class="text-on-surface-variant font-label-sm mt-1">42% of monthly quota used</p>
</div>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="font-label-md text-outline uppercase tracking-wider">Avg Response Time</span>
<span class="bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px] font-extrabold">-24ms</span>
</div>
<div class="mt-4">
<p class="font-headline-lg text-headline-lg">342ms</p>
<p class="text-on-surface-variant font-label-sm mt-1">Global benchmark: 450ms</p>
</div>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="font-label-md text-outline uppercase tracking-wider">Active Agents</span>
<span class="bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[10px] font-extrabold">+5 new</span>
</div>
<div class="mt-4">
<p class="font-headline-lg text-headline-lg">842</p>
<p class="text-on-surface-variant font-label-sm mt-1">Across 12 workstreams</p>
</div>
</div>
</div>
<!-- Primary Charts Row -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div class="lg:col-span-2 glass-card p-6 rounded-2xl">
<div class="flex items-center justify-between mb-8">
<div>
<h3 class="font-headline-md text-headline-md">Token Usage & Performance</h3>
<p class="text-on-surface-variant font-body-md">Comparative analysis of model efficiency</p>
</div>
<div class="flex gap-4">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-primary"></span>
<span class="text-xs font-label-md">GPT-4o</span>
</div>
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-secondary-fixed-dim"></span>
<span class="text-xs font-label-md">Claude 3.5</span>
</div>
</div>
</div>
<!-- Chart Placeholder Simulation -->
<div class="relative h-64 w-full chart-gradient-cyan rounded-xl border border-outline-variant/30 overflow-hidden">
<svg class="absolute inset-0 w-full h-full" viewbox="0 0 800 256">
<path d="M0 200 Q 100 180, 200 150 T 400 120 T 600 80 T 800 40" fill="none" stroke="#006875" stroke-width="3"></path>
<path d="M0 220 Q 100 200, 200 190 T 400 160 T 600 140 T 800 120" fill="none" stroke="#27e199" stroke-dasharray="8 4" stroke-width="3"></path>
<circle cx="200" cy="150" fill="#006875" r="4"></circle>
<circle cx="400" cy="120" fill="#006875" r="4"></circle>
<circle cx="600" cy="80" fill="#006875" r="4"></circle>
</svg>
<div class="absolute bottom-0 w-full flex justify-between px-4 py-2 text-[10px] text-outline font-bold">
<span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
</div>
</div>
</div>
<div class="glass-card p-6 rounded-2xl">
<h3 class="font-headline-md text-headline-md mb-6">Revenue by Category</h3>
<div class="space-y-6">
<div class="space-y-2">
<div class="flex justify-between text-sm">
<span class="font-label-md">SaaS Subscriptions</span>
<span class="font-bold">$84k</span>
</div>
<div class="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 75%"></div>
</div>
</div>
<div class="space-y-2">
<div class="flex justify-between text-sm">
<span class="font-label-md">API Overages</span>
<span class="font-bold">$22k</span>
</div>
<div class="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-secondary-fixed-dim rounded-full" style="width: 45%"></div>
</div>
</div>
<div class="space-y-2">
<div class="flex justify-between text-sm">
<span class="font-label-md">Custom Models</span>
<span class="font-bold">$18k</span>
</div>
<div class="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-tertiary-fixed-dim rounded-full" style="width: 30%"></div>
</div>
</div>
<div class="space-y-2">
<div class="flex justify-between text-sm">
<span class="font-label-md">Enterprise Support</span>
<span class="font-bold">$4k</span>
</div>
<div class="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-outline rounded-full" style="width: 10%"></div>
</div>
</div>
</div>
<button class="w-full mt-8 py-2 text-sm font-bold text-primary hover:bg-primary-container/10 rounded-lg transition-all">View Revenue Breakdown</button>
</div>
</div>
<!-- Secondary Charts Row -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
<div class="glass-card p-6 rounded-2xl relative overflow-hidden">
<div class="flex items-center justify-between mb-8">
<div>
<h3 class="font-headline-md text-headline-md">Retention Funnel</h3>
<p class="text-on-surface-variant font-body-md">Conversion across journey stages</p>
</div>
<button class="p-2 hover:bg-surface-container rounded-lg transition-all">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<div class="flex flex-col gap-3 items-center">
<div class="w-full bg-primary h-12 rounded-lg flex items-center justify-between px-6 text-on-primary">
<span class="font-bold">Total Awareness</span>
<span class="text-sm font-label-md">100% (2.4M)</span>
</div>
<div class="w-[90%] bg-primary/80 h-12 rounded-lg flex items-center justify-between px-6 text-on-primary">
<span class="font-bold">Signed Up</span>
<span class="text-sm font-label-md">42% (1.0M)</span>
</div>
<div class="w-[75%] bg-primary/60 h-12 rounded-lg flex items-center justify-between px-6 text-on-primary">
<span class="font-bold">Active Usage</span>
<span class="text-sm font-label-md">28% (672k)</span>
</div>
<div class="w-[50%] bg-primary/40 h-12 rounded-lg flex items-center justify-between px-6 text-on-primary">
<span class="font-bold">Paid Tier</span>
<span class="text-sm font-label-md">12% (288k)</span>
</div>
</div>
</div>
<div class="glass-card p-6 rounded-2xl">
<div class="flex items-center justify-between mb-6">
<h3 class="font-headline-md text-headline-md">Geographic Hotspots</h3>
<div class="flex gap-2">
<button class="p-2 bg-surface-container rounded-lg text-primary"><span class="material-symbols-outlined text-[20px]">map</span></button>
<button class="p-2 hover:bg-surface-container rounded-lg"><span class="material-symbols-outlined text-[20px]">list</span></button>
</div>
</div>
<div class="h-56 w-full rounded-xl overflow-hidden relative border border-outline-variant/30">
<div class="w-full h-full bg-cover bg-center" data-alt="A stylized minimalist world map in light grey and slate tones, with neon electric cyan glowing pulses indicating heavy server usage in North America, Western Europe, and East Asia. Dark and high-contrast tech aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcq6lYOUAq2jWFDtoHVwqSpzznWdmcnN24y7PaJG_9MKkKroWtuIb4FY1jm4RFUH_vzYqj1TKQ6Dw48wNamj7mVSX6a6SjLVvaENQieoYNcgjqkEsyiQ2P8ygG-VlVDum5-ezgfJ5lar-_RQ9c_0uAIiKHBnJk6DUocWQe0X3AcytaDrYs-VbZDhTDZuTu1dj8dsQViOoKlXhG3Blwe8UZsWwgOq15U4r9xT7J5OkJZCfgjAmm88BP')"></div>
<!-- Hotspot Overlays -->
<div class="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full pulse-green shadow-[0_0_12px_rgba(0,104,117,0.8)]"></div>
<div class="absolute top-1/3 left-[45%] w-3 h-3 bg-primary rounded-full pulse-green shadow-[0_0_12px_rgba(0,104,117,0.8)]"></div>
<div class="absolute top-[40%] right-1/4 w-3 h-3 bg-primary rounded-full pulse-green shadow-[0_0_12px_rgba(0,104,117,0.8)]"></div>
</div>
</div>
</div>
<!-- Geographic Usage Detailed Table -->
<div class="glass-card rounded-2xl overflow-hidden mb-margin-desktop">
<div class="p-6 border-b border-outline-variant flex items-center justify-between">
<h3 class="font-headline-md text-headline-md">Geographic Usage Details</h3>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-xl text-sm font-bold hover:bg-surface-container transition-all">
<span class="material-symbols-outlined text-[18px]">download</span>
                            Export CSV
                        </button>
<button class="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-xl text-sm font-bold hover:bg-surface-container transition-all">
<span class="material-symbols-outlined text-[18px]">print</span>
                            Print
                        </button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low">
<tr>
<th class="px-6 py-4 font-label-md text-outline uppercase tracking-wider text-xs">Region</th>
<th class="px-6 py-4 font-label-md text-outline uppercase tracking-wider text-xs">Active Nodes</th>
<th class="px-6 py-4 font-label-md text-outline uppercase tracking-wider text-xs">Latency (Avg)</th>
<th class="px-6 py-4 font-label-md text-outline uppercase tracking-wider text-xs">Requests /s</th>
<th class="px-6 py-4 font-label-md text-outline uppercase tracking-wider text-xs">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/30">
<tr class="hover:bg-surface-container-lowest transition-all">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<span class="w-6 h-4 bg-surface-container-highest rounded text-[10px] flex items-center justify-center font-bold">US</span>
<span class="font-medium">North America (East)</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-sm">4,281</td>
<td class="px-6 py-4 text-sm">28ms</td>
<td class="px-6 py-4 text-sm">18.4k</td>
<td class="px-6 py-4">
<span class="px-2 py-1 rounded-full bg-secondary-fixed/20 text-on-secondary-container text-xs font-bold">Optimal</span>
</td>
</tr>
<tr class="hover:bg-surface-container-lowest transition-all">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<span class="w-6 h-4 bg-surface-container-highest rounded text-[10px] flex items-center justify-center font-bold">DE</span>
<span class="font-medium">Europe (Frankfurt)</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-sm">3,104</td>
<td class="px-6 py-4 text-sm">32ms</td>
<td class="px-6 py-4 text-sm">12.1k</td>
<td class="px-6 py-4">
<span class="px-2 py-1 rounded-full bg-secondary-fixed/20 text-on-secondary-container text-xs font-bold">Optimal</span>
</td>
</tr>
<tr class="hover:bg-surface-container-lowest transition-all">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<span class="w-6 h-4 bg-surface-container-highest rounded text-[10px] flex items-center justify-center font-bold">SG</span>
<span class="font-medium">Asia Pacific (Singapore)</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-sm">1,890</td>
<td class="px-6 py-4 text-sm">54ms</td>
<td class="px-6 py-4 text-sm">8.4k</td>
<td class="px-6 py-4">
<span class="px-2 py-1 rounded-full bg-secondary-fixed/20 text-on-secondary-container text-xs font-bold">Optimal</span>
</td>
</tr>
<tr class="hover:bg-surface-container-lowest transition-all">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<span class="w-6 h-4 bg-surface-container-highest rounded text-[10px] flex items-center justify-center font-bold">BR</span>
<span class="font-medium">South America (São Paulo)</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-sm">942</td>
<td class="px-6 py-4 text-sm">112ms</td>
<td class="px-6 py-4 text-sm">2.2k</td>
<td class="px-6 py-4">
<span class="px-2 py-1 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container text-xs font-bold">High Load</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
<!-- Micro-interaction Scripts -->
<script>
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', function() {
                this.classList.add('scale-95');
            });
            button.addEventListener('mouseup', function() {
                this.classList.remove('scale-95');
            });
            button.addEventListener('mouseleave', function() {
                this.classList.remove('scale-95');
            });
        });

        // Simple table hover effect enhancement
        const tableRows = document.querySelectorAll('tbody tr');
        tableRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.boxShadow = 'inset 4px 0 0 #006875';
            });
            row.addEventListener('mouseleave', () => {
                row.style.boxShadow = 'none';
            });
        });
    </script>
`
  },
  "ai-apps/voice-generator": {
    bodyClass: "selection:bg-primary/30 selection:text-primary",
    html: `
<div class="scanline-overlay"></div>
<!-- SIDE NAV BAR (Anchored from JSON) -->
<aside class="fixed left-0 top-0 flex flex-col h-full z-40 bg-surface-container/80 backdrop-blur-xl border-r border-white/10 w-sidebar-width transition-all duration-200 ease-in-out">
<div class="p-6">
<div class="flex items-center gap-3 mb-8">
<div class="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
<span class="material-symbols-outlined text-background font-bold" style="font-variation-settings: 'FILL' 1;">terminal</span>
</div>
<div>
<h1 class="font-headline-lg text-headline-lg text-primary leading-tight">Project Alpha</h1>
<p class="font-code-sm text-code-sm text-on-surface-variant opacity-60">main branch</p>
</div>
</div>
<button class="w-full py-2 mb-8 bg-primary/10 border border-primary/30 text-primary font-label-caps text-label-caps hover:bg-primary/20 transition-all cursor-pointer">
                + New File
            </button>
<nav class="space-y-1">
<a class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all group" href="#">
<span class="material-symbols-outlined mr-3 text-[20px]">folder_open</span>
<span class="font-label-caps text-label-caps">Explorer</span>
</a>
<a class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all group" href="#">
<span class="material-symbols-outlined mr-3 text-[20px]">search</span>
<span class="font-label-caps text-label-caps">Search</span>
</a>
<a class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all group" href="#">
<span class="material-symbols-outlined mr-3 text-[20px]">account_tree</span>
<span class="font-label-caps text-label-caps">Source Control</span>
</a>
<a class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all group" href="#">
<span class="material-symbols-outlined mr-3 text-[20px]">extension</span>
<span class="font-label-caps text-label-caps">Extensions</span>
</a>
<a class="flex items-center text-primary bg-primary/10 border-l-2 border-primary px-4 py-2 transition-all group relative" href="#">
<span class="material-symbols-outlined mr-3 text-[20px]">smart_toy</span>
<span class="font-label-caps text-label-caps">AI Debug</span>
</a>
</nav>
</div>
<div class="mt-auto p-6 border-t border-white/5">
<nav class="space-y-1">
<a class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all" href="#">
<span class="material-symbols-outlined mr-3 text-[18px]">settings</span>
<span class="font-label-caps text-label-caps text-[10px]">Settings</span>
</a>
<a class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all" href="#">
<span class="material-symbols-outlined mr-3 text-[18px]">person</span>
<span class="font-label-caps text-label-caps text-[10px]">Account</span>
</a>
</nav>
</div>
</aside>
<!-- MAIN CANVAS -->
<main class="ml-sidebar-width min-h-screen flex flex-col">
<!-- TOP NAV BAR (Anchored from JSON) -->
<header class="flex justify-between items-center px-gutter w-full h-14 bg-surface/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md text-primary tracking-tighter">SynthOS IDE</span>
<div class="hidden md:flex gap-6">
<a class="font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Deploy</a>
<a class="font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Run</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200 cursor-pointer active:scale-95" href="#">AI Sync</a>
</div>
</div>
<div class="flex items-center gap-4">
<div class="relative group">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all cursor-pointer">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
</div>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all cursor-pointer">account_tree</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all cursor-pointer">settings</span>
<div class="w-8 h-8 rounded-full border border-primary/30 overflow-hidden ml-2 ring-2 ring-primary/10">
<img class="w-full h-full object-cover" data-alt="A close-up high-definition portrait of a futuristic software engineer with holographic reflections on their face, set in a dark, high-tech command center environment. The lighting is dominated by deep blues and vibrant neon greens, following the terminal noir aesthetic. The person has a focused expression, representing the technical precision of the SynthOS project." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhDMyjs9VxlxG0IlkjxfFjBZDR9smNgVc5JxPs_bdDeJCO7OsPeF0tfEQftjuR7iXDTSXGYziXzzsotWK6DSXehqU8lIn2mDX01M8w00kAmJqJOaFCNXoEsIgg6riK_22c31RWFZqD_m2R6giAp5M60_lc2VkBwMdJ1yru3IG1sd6pLVrGeDKzvGHEaDZwDTTcGqnjLESSUTIynR0Hv5C7k5wuLzeClKSlKk375jA-ZkEITvz-4AUU"/>
</div>
</div>
</header>
<!-- CONTENT AREA -->
<div class="p-8 flex-1 bg-surface-dim">
<!-- Page Header -->
<div class="mb-10 flex justify-between items-end">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-1">API Transaction Ledger</h2>
<p class="font-body-md text-on-surface-variant opacity-70 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Monitoring active instance: synth-os-nexus-01
                    </p>
</div>
<div class="flex gap-2">
<button class="px-4 py-2 bg-surface-container border border-white/10 font-label-caps text-label-caps flex items-center gap-2 hover:bg-surface-container-high">
<span class="material-symbols-outlined text-[16px]">download</span> Export CSV
                    </button>
<button class="px-4 py-2 bg-primary text-background font-label-caps text-label-caps flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">refresh</span> Sync Ledger
                    </button>
</div>
</div>
<!-- DASHBOARD GRID -->
<div class="grid grid-cols-12 gap-6">
<!-- TOP ROW: Charts -->
<div class="col-span-12 lg:col-span-8 glass-panel p-6">
<div class="flex justify-between items-center mb-6">
<h3 class="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[14px]">show_chart</span> Token Consumption Trend (24h)
                        </h3>
<div class="flex gap-4">
<div class="flex items-center gap-2">
<div class="w-3 h-1 bg-primary"></div>
<span class="font-code-sm text-code-sm text-on-surface-variant">GPT-4o</span>
</div>
<div class="flex items-center gap-2">
<div class="w-3 h-1 bg-secondary"></div>
<span class="font-code-sm text-code-sm text-on-surface-variant">Claude 3.5</span>
</div>
</div>
</div>
<div class="chart-container flex items-end justify-between px-2 gap-1 border-b border-white/5 pb-4">
<!-- Mock Chart Bars/Lines -->
<div class="flex-1 bg-primary/20 h-[40%] relative group">
<div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="absolute -top-6 left-1/2 -translate-x-1/2 font-code-sm text-primary opacity-0 group-hover:opacity-100">12k</div>
<div class="w-full bg-secondary/30 h-[60%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[55%] relative group">
<div class="absolute -top-6 left-1/2 -translate-x-1/2 font-code-sm text-primary opacity-0 group-hover:opacity-100">15k</div>
<div class="w-full bg-secondary/30 h-[40%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[80%] relative group">
<div class="absolute -top-6 left-1/2 -translate-x-1/2 font-code-sm text-primary opacity-0 group-hover:opacity-100">24k</div>
<div class="w-full bg-secondary/30 h-[20%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[60%] relative group">
<div class="w-full bg-secondary/30 h-[70%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[45%] relative group">
<div class="w-full bg-secondary/30 h-[50%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[90%] relative group">
<div class="w-full bg-secondary/30 h-[10%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[75%] relative group">
<div class="w-full bg-secondary/30 h-[45%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[50%] relative group">
<div class="w-full bg-secondary/30 h-[80%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[65%] relative group">
<div class="w-full bg-secondary/30 h-[30%] absolute bottom-0 opacity-50"></div>
</div>
<div class="flex-1 bg-primary/20 h-[40%] relative group">
<div class="w-full bg-secondary/30 h-[60%] absolute bottom-0 opacity-50"></div>
</div>
</div>
<div class="flex justify-between mt-4 px-2">
<span class="font-code-sm text-code-sm text-on-surface-variant opacity-40">00:00</span>
<span class="font-code-sm text-code-sm text-on-surface-variant opacity-40">06:00</span>
<span class="font-code-sm text-code-sm text-on-surface-variant opacity-40">12:00</span>
<span class="font-code-sm text-code-sm text-on-surface-variant opacity-40">18:00</span>
<span class="font-code-sm text-code-sm text-on-surface-variant opacity-40">23:59</span>
</div>
</div>
<!-- RIGHT: Billing Summary -->
<div class="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div class="glass-panel p-6 border-l-4 border-l-secondary relative overflow-hidden">
<div class="absolute top-0 right-0 p-4 opacity-5">
<span class="material-symbols-outlined text-[120px]">account_balance_wallet</span>
</div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">Billing Summary</h3>
<div class="mb-6">
<p class="font-code-sm text-code-sm text-on-surface-variant mb-1">Current Balance</p>
<div class="flex items-baseline gap-2">
<span class="font-headline-lg text-[40px] text-on-surface leading-none">$142.84</span>
<span class="font-code-md text-primary text-code-md">USD</span>
</div>
</div>
<div class="space-y-3 mb-8">
<div class="flex justify-between text-code-sm font-code-sm">
<span class="text-on-surface-variant">Usage this month</span>
<span class="text-on-surface">$57.16</span>
</div>
<div class="w-full h-1 bg-white/10">
<div class="bg-primary h-full" style="width: 40%"></div>
</div>
<div class="flex justify-between text-code-sm font-code-sm">
<span class="text-on-surface-variant">Credits Remaining</span>
<span class="text-on-surface">60%</span>
</div>
</div>
<button class="w-full py-3 bg-secondary text-on-secondary font-label-caps text-label-caps hover:brightness-110 active:scale-95 transition-all mb-4">
                            Upgrade Tier
                        </button>
<p class="font-code-sm text-code-sm text-center text-on-surface-variant opacity-50">Next billing cycle: Oct 12, 2024</p>
</div>
<div class="glass-panel p-6 bg-primary/5 border border-primary/20">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-primary">auto_awesome</span>
<h4 class="font-label-caps text-label-caps text-primary">AI Sync Optimized</h4>
</div>
<p class="font-body-md text-on-surface-variant text-[14px] leading-relaxed">
                            Your current model switching logic saved <span class="text-primary font-bold">$12.40</span> in the last 24 hours.
                        </p>
</div>
</div>
<!-- BOTTOM: Transaction Table -->
<div class="col-span-12 glass-panel overflow-hidden">
<div class="p-6 border-b border-white/10 flex justify-between items-center">
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Transaction History</h3>
<div class="flex gap-4">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">filter_list</span>
<select class="bg-surface-container border border-white/10 pl-10 pr-8 py-1.5 font-code-sm text-code-sm appearance-none outline-none focus:border-primary transition-all">
<option>All Models</option>
<option>GPT-4o</option>
<option>Claude 3.5</option>
</select>
</div>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-white/5">
<th class="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant border-b border-white/10">ID / Hash</th>
<th class="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant border-b border-white/10">Timestamp</th>
<th class="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant border-b border-white/10">Model Instance</th>
<th class="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant border-b border-white/10">Tokens (In/Out)</th>
<th class="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant border-b border-white/10 text-right">Cost (USD)</th>
<th class="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant border-b border-white/10 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-white/5">
<tr class="hover:bg-white/2.5 transition-colors group">
<td class="px-6 py-4 font-code-sm text-code-sm text-primary">#tx_9a82f1...</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">2024-10-02 14:22:01</td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 font-code-sm text-[11px] uppercase">GPT-4o</span>
</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">1,240 / 482</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface text-right">$0.024</td>
<td class="px-6 py-4 text-center">
<span class="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#6bfb9a]"></span>
</td>
</tr>
<tr class="hover:bg-white/2.5 transition-colors">
<td class="px-6 py-4 font-code-sm text-code-sm text-primary">#tx_7b11e2...</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">2024-10-02 14:19:55</td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 font-code-sm text-[11px] uppercase">Claude 3.5</span>
</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">4,502 / 1,202</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface text-right">$0.086</td>
<td class="px-6 py-4 text-center">
<span class="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#6bfb9a]"></span>
</td>
</tr>
<tr class="hover:bg-white/2.5 transition-colors">
<td class="px-6 py-4 font-code-sm text-code-sm text-primary">#tx_0f32a8...</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">2024-10-02 14:15:20</td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 font-code-sm text-[11px] uppercase">GPT-4o</span>
</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">512 / 122</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface text-right">$0.008</td>
<td class="px-6 py-4 text-center">
<span class="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#6bfb9a]"></span>
</td>
</tr>
<tr class="hover:bg-white/2.5 transition-colors">
<td class="px-6 py-4 font-code-sm text-code-sm text-primary">#tx_4d22c1...</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">2024-10-02 14:10:04</td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 font-code-sm text-[11px] uppercase">GPT-4o</span>
</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">8,290 / 2,110</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface text-right">$0.145</td>
<td class="px-6 py-4 text-center">
<span class="inline-block w-2 h-2 rounded-full bg-error shadow-[0_0_8px_#ffb4ab]"></span>
</td>
</tr>
<tr class="hover:bg-white/2.5 transition-colors">
<td class="px-6 py-4 font-code-sm text-code-sm text-primary">#tx_11a3b8...</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">2024-10-02 13:58:12</td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 font-code-sm text-[11px] uppercase">Claude 3.5</span>
</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface-variant">124 / 45</td>
<td class="px-6 py-4 font-code-sm text-code-sm text-on-surface text-right">$0.002</td>
<td class="px-6 py-4 text-center">
<span class="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#6bfb9a]"></span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-4 border-t border-white/5 flex justify-center">
<button class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors py-2 flex items-center gap-2">
                            Load more transactions <span class="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</div>
</div>
</div>
<!-- FOOTER (Anchored from JSON) -->
<footer class="fixed bottom-0 left-0 w-full flex items-center justify-between px-4 z-50 bg-surface-container-lowest border-t border-white/10 h-6 font-code-sm text-code-sm">
<div class="flex items-center gap-4">
<span class="text-on-surface-variant hover:text-primary transition-colors cursor-default">v1.2.4-stable</span>
<span class="flex items-center gap-1 text-primary">
<span class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                    System: Healthy
                </span>
</div>
<div class="flex items-center gap-6">
<span class="text-on-surface-variant hover:text-primary transition-colors cursor-default">TypeScript</span>
<span class="text-on-surface-variant hover:text-primary transition-colors cursor-default">UTF-8</span>
<span class="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors cursor-default">
<span class="material-symbols-outlined text-[12px]">account_tree</span>
                    Main branch
                </span>
</div>
</footer>
</main>
<script>
        // Micro-interaction for table rows
        document.querySelectorAll('tbody tr').forEach(row => {
            row.addEventListener('click', () => {
                row.classList.add('bg-primary/10');
                setTimeout(() => row.classList.remove('bg-primary/10'), 300);
            });
        });

        // Atmospheric scanline flicker effect
        setInterval(() => {
            const overlay = document.querySelector('.scanline-overlay');
            if(Math.random() > 0.98) {
                overlay.style.opacity = '0.6';
                setTimeout(() => overlay.style.opacity = '1', 50);
            }
        }, 100);
    </script>
`
  },
  "marketing/features": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary-fixed-dim selection:text-on-primary-fixed",
    html: `
<!-- Top Navigation -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="font-display-lg text-headline-md font-extrabold text-on-surface tracking-tighter">
                Auralis AI
            </div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-primary font-bold border-b-2 border-primary-fixed-dim pb-1 font-body-md text-body-md" href="#">Features</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Pricing</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Agency</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">About Us</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Blog</a>
</div>
<div class="flex items-center gap-4">
<button class="text-on-surface-variant font-label-md px-4 py-2 hover:bg-surface-container-low transition-all duration-200">Login</button>
<button class="bg-primary-fixed-dim text-on-primary-fixed font-label-md px-6 py-2.5 rounded-lg font-bold shadow-sm active:scale-95 transition-all">Get Started</button>
</div>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative overflow-hidden py-24 md:py-32">
<div class="absolute inset-0 grid-mesh opacity-20 pointer-events-none"></div>
<div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed-dim/10 to-transparent blur-3xl -z-10"></div>
<div class="max-w-container-max mx-auto px-margin-desktop text-center">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-8">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span class="text-primary font-label-md uppercase tracking-widest text-[10px]">Premium Architecture</span>
</div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 tracking-tighter leading-tight">
                    Engineered for <br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">Infinite Performance</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                    Auralis AI isn't just another template. It's a high-performance foundation built on the cutting edge of modern web technologies, designed to scale with your ambition.
                </p>
<!-- Tech Stack Display -->
<div class="flex flex-wrap justify-center gap-gutter">
<div class="glass-card border border-outline-variant p-6 rounded-xl flex items-center gap-4 hover:shadow-lg transition-all animate-float">
<div class="w-12 h-12 bg-on-background flex items-center justify-center rounded-lg shadow-md">
<span class="material-symbols-outlined text-surface" style="font-variation-settings: 'FILL' 1;">deployed_code</span>
</div>
<div class="text-left">
<span class="block font-label-sm text-on-surface-variant">Framework</span>
<span class="font-headline-md text-on-surface">Next.js 14</span>
</div>
</div>
<div class="glass-card border border-outline-variant p-6 rounded-xl flex items-center gap-4 hover:shadow-lg transition-all animate-float" style="animation-delay: 0.2s;">
<div class="w-12 h-12 bg-primary flex items-center justify-center rounded-lg shadow-md">
<span class="material-symbols-outlined text-on-primary">data_object</span>
</div>
<div class="text-left">
<span class="block font-label-sm text-on-surface-variant">Language</span>
<span class="font-headline-md text-on-surface">TypeScript</span>
</div>
</div>
<div class="glass-card border border-outline-variant p-6 rounded-xl flex items-center gap-4 hover:shadow-lg transition-all animate-float" style="animation-delay: 0.4s;">
<div class="w-12 h-12 bg-primary-fixed-dim flex items-center justify-center rounded-lg shadow-md">
<span class="material-symbols-outlined text-on-primary-fixed">format_paint</span>
</div>
<div class="text-left">
<span class="block font-label-sm text-on-surface-variant">Styling</span>
<span class="font-headline-md text-on-surface">Tailwind CSS</span>
</div>
</div>
</div>
</div>
</section>
<!-- High-Density Feature Grid -->
<section class="py-24 bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-lg">
<div class="max-w-xl">
<h2 class="font-headline-xl text-headline-xl text-on-surface mb-4">Precision Components</h2>
<p class="text-on-surface-variant font-body-md">Every feature is meticulously crafted with accessibility, performance, and developer experience in mind. No fluff, just pure functional intelligence.</p>
</div>
<div class="flex gap-4">
<span class="font-label-md text-on-surface-variant">Showcasing 25+ Premium Modules</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
<!-- NEXT.JS (Duplicate for context, styled as a card) -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group top-signal-accent">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">bolt</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Next.js</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Server-side rendering and static site generation for peak SEO performance.</p>
</div>
<!-- TYPESCRIPT -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group top-signal-accent">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">terminal</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">TypeScript</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Type-safe development environment for robust, error-free production codebases.</p>
</div>
<!-- TAILWIND CSS -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group top-signal-accent">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">palette</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Tailwind CSS</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Utility-first styling for rapid prototyping and ultra-efficient production CSS.</p>
</div>
<!-- NO JQUERY -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group top-signal-accent">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">block</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">No jQuery</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Lightweight vanilla JavaScript architecture for maximum browser efficiency.</p>
</div>
<!-- NPM -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">package_2</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">npm</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Full compatibility with the npm ecosystem for seamless dependency management.</p>
</div>
<!-- RTL SUPPORT -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">format_textdirection_r_to_l</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">RTL Support</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Built-in support for Right-to-Left languages like Arabic and Hebrew.</p>
</div>
<!-- LIGHT/DARK MODE -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">contrast</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Light/Dark Mode</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Auto-detecting and toggleable themes for optimal user viewing experience.</p>
</div>
<!-- CHARTS -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">monitoring</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Charts</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Interactive data visualizations powered by high-performance rendering engines.</p>
</div>
<!-- CALENDAR -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">calendar_today</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Calendar</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Advanced event scheduling and date management interface built-in.</p>
</div>
<!-- FILE UPLOADER -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">upload_file</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">File Uploader</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Drag-and-drop file handling with real-time progress indicators.</p>
</div>
<!-- GALLERY -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">photo_library</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Gallery</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Responsive masonry grids and lightbox support for visual assets.</p>
</div>
<!-- RICH TEXT EDITOR -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">edit_note</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Rich Text Editor</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">A full-featured WYSIWYG editor for complex content creation.</p>
</div>
<!-- DATE/TIME PICKER -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">schedule</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Date/Time Picker</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Highly customizable date and time selection components.</p>
</div>
<!-- GOOGLE FONTS -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">text_fields</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Google Fonts</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Optimized font delivery for perfect typography on any device.</p>
</div>
<!-- GOOGLE MAPS -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">map</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Google Maps</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Seamless integration of interactive maps and location services.</p>
</div>
<!-- VALID HTML5 -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">html</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Valid HTML5</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Semantic, W3C compliant markup for maximum accessibility.</p>
</div>
<!-- VALID CSS -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">css</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Valid CSS</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Clean, standardized styles that pass all validation tests.</p>
</div>
<!-- CLEAN CODE -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">code</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Clean Code</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Expertly structured source files for easy reading and maintenance.</p>
</div>
<!-- FULLY RESPONSIVE -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">devices</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Fully Responsive</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Mobile-first design that looks stunning on every screen size.</p>
</div>
<!-- SMOOTH TRANSITIONS -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">shutter_speed</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Smooth Transitions</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Fluid animations and micro-interactions for a premium feel.</p>
</div>
<!-- BROWSER COMPATIBILITY -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">browser_updated</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Browser Compatibility</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Tested extensively across Chrome, Safari, Firefox, and Edge.</p>
</div>
<!-- EASY CUSTOMIZATION -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">settings_suggest</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Easy Customization</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Config-driven layout and theme adjustments with zero hassle.</p>
</div>
<!-- RETINA READY -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">high_quality</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Retina Ready</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Pixel-perfect assets for high-resolution 4K and 5K displays.</p>
</div>
<!-- DEVELOPER FRIENDLY -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">developer_mode</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Developer Friendly</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Intelligent architecture that makes coding a genuine pleasure.</p>
</div>
<!-- WELL DOCUMENTED -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 hover:shadow-xl transition-all group">
<div class="mb-4 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-lg">auto_stories</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2">Well Documented</h3>
<p class="text-on-surface-variant font-label-md leading-relaxed">Comprehensive guides covering every component and API.</p>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-24 max-w-container-max mx-auto px-margin-desktop">
<div class="relative overflow-hidden bg-primary rounded-3xl p-12 md:p-24 text-center">
<div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[100px]"></div>
<h2 class="relative z-10 font-headline-xl text-display-lg-mobile md:text-headline-xl text-on-primary mb-8">Ready to Build Something Incredible?</h2>
<div class="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
<button class="bg-primary-fixed-dim text-on-primary-fixed font-label-md px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary-fixed-dim/40 transition-all active:scale-95">
                        Purchase License
                    </button>
<button class="border-2 border-on-primary/30 text-on-primary font-label-md px-10 py-4 rounded-xl font-bold hover:bg-on-primary/10 transition-all">
                        View Live Demo
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant w-full py-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<div class="font-display-lg text-headline-sm font-bold text-on-surface mb-4">Auralis AI</div>
<p class="text-on-surface-variant text-label-md max-w-xs">Precision intelligence for the modern enterprise. Scale faster with our advanced React foundation.</p>
</div>
<div>
<h4 class="font-label-md text-on-surface mb-6 uppercase tracking-wider">Product</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Features</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Pricing</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-on-surface mb-6 uppercase tracking-wider">Company</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">About Us</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Careers</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-on-surface mb-6 uppercase tracking-wider">Legal</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Terms of Service</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-on-surface mb-6 uppercase tracking-wider">Support</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Contact</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Documentation</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">API</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-on-surface-variant text-label-md">© 2024 Auralis AI. All rights reserved. Precision Intelligence.</p>
<div class="flex gap-6">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">public</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">terminal</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">share</span>
</div>
</div>
</footer>
<script>
        // Micro-interaction for cards
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0px)';
            });
        });
    </script>
`
  },
  "finance/fin-invoices": {
    bodyClass: "bg-background text-on-surface font-body-md overflow-hidden",
    html: `
<!-- SideNavBar Integration -->
<aside class="flex flex-col h-full border-r border-outline-variant bg-surface-container-lowest shadow-sm h-screen w-64 fixed left-0 top-0 overflow-y-auto z-50 custom-scrollbar">
<div class="p-stack-lg flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Auralis AI</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant opacity-70">Enterprise Admin</p>
</div>
</div>
<nav class="flex-1 px-4 space-y-2 mt-6">
<!-- Navigation Items Mapping from JSON -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-surface-container-high text-on-surface-variant" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-surface-container-high text-on-surface-variant" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-label-md text-label-md">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-surface-container-high text-on-surface-variant" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-label-md text-label-md">Team Management</span>
</a>
<!-- Active State: Billing & Usage -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-transform active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">payments</span>
<span class="font-label-md text-label-md">Billing &amp; Usage</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-surface-container-high text-on-surface-variant" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">System Settings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-surface-container-high text-on-surface-variant" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-md text-label-md">Help Support</span>
</a>
</nav>
<div class="p-4 mt-auto">
<button class="w-full py-3 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-xl hover:opacity-90 transition-opacity active:scale-95">
                Upgrade Plan
            </button>
<a class="flex items-center gap-3 px-4 py-3 mt-4 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">logout</span>
<span class="font-label-md text-label-md">Log Out</span>
</a>
</div>
</aside>
<!-- Main Content Wrapper -->
<main class="pl-64 min-h-screen">
<!-- TopNavBar Integration -->
<header class="flex justify-between items-center w-full px-margin-desktop py-4 sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div class="flex items-center gap-8">
<h2 class="font-headline-sm text-headline-sm font-extrabold text-primary">Billing</h2>
<div class="hidden md:flex gap-6">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Docs</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">API</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Status</a>
</div>
</div>
<div class="flex items-center gap-6">
<div class="relative hidden lg:block">
<input class="bg-surface-container-low border border-outline-variant rounded-xl py-2 px-10 focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all w-64 text-sm" placeholder="Search invoices..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
</div>
<div class="flex items-center gap-4">
<button class="p-2 hover:bg-surface-container rounded-full transition-colors relative">
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</button>
<button class="p-2 hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">help_outline</span>
</button>
<div class="w-10 h-10 rounded-full border border-outline-variant overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Professional headshot of a senior technology administrator in a bright, modern studio. The lighting is clean and high-key with a soft grey background. The subject is wearing a professional charcoal blazer, projecting intelligence and corporate leadership. The aesthetic matches a high-end SaaS interface with precise focus and premium clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS8R_Lte2P8vaZQ-YmNj5Gdt3JayDLRPHRfhD7FOu8IpiOONffHENJHKxR_fLqxCKGK5-4kLxdrxq117gY4NRu7L0zFLBJdvjJ_SOTAwR9pM52mXumJbksooiULAdDW8lYxgMtUklDt9S8tlQ6ACgWbgM8sog20NR74zodpVRj8ClPJKkJoMTOVsOtaQu0OhVN4XXkgKVd2A1t10c9k6_0u8tpC-LyBWhzMY1r_X1JoFAxr7GlpzKE"/>
</div>
</div>
</div>
</header>
<!-- Page Content Canvas -->
<div class="px-margin-desktop py-stack-lg space-y-stack-lg max-w-container-max mx-auto">
<!-- Hero Stats / Plan Overview -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- Current Plan Card -->
<div class="lg:col-span-2 glass-card rounded-xl p-stack-md top-signal relative overflow-hidden group">
<div class="flex justify-between items-start mb-stack-md">
<div>
<span class="inline-block px-3 py-1 bg-primary-container/10 text-primary rounded-full font-label-sm text-label-sm mb-2 uppercase tracking-wider">Active Subscription</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Pro Plan</h3>
</div>
<div class="text-right">
<p class="font-headline-md text-headline-md text-primary">$199<span class="text-on-surface-variant text-body-md">/mo</span></p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Next billing: Oct 12, 2024</p>
</div>
</div>
<div class="mt-stack-lg">
<div class="flex justify-between text-label-md font-label-md mb-2">
<span class="text-on-surface">API Usage Tracker</span>
<span class="text-on-surface-variant">12,450 / 50,000 requests</span>
</div>
<div class="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden relative">
<div class="h-full bg-primary-container w-[25%] relative">
<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div class="mt-4 flex gap-4">
<button class="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">
                                Upgrade Plan
                            </button>
<button class="px-6 py-2 border-1.5 border-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">
                                View Detailed Metrics
                            </button>
</div>
</div>
<!-- Decorative Background Element -->
<div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-colors duration-500"></div>
</div>
<!-- Upcoming Bill Summary -->
<div class="glass-card rounded-xl p-stack-md flex flex-col justify-between">
<div>
<h4 class="font-label-md text-label-md text-on-surface-variant mb-4 uppercase">Upcoming Invoice</h4>
<div class="space-y-3">
<div class="flex justify-between">
<span class="text-on-surface-variant">Base Subscription</span>
<span class="font-bold">$199.00</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Overages (0)</span>
<span class="font-bold">$0.00</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Tax (EST)</span>
<span class="font-bold">$15.92</span>
</div>
<hr class="border-outline-variant"/>
<div class="flex justify-between pt-1">
<span class="font-bold text-on-surface">Total Due</span>
<span class="font-bold text-headline-sm text-primary">$214.92</span>
</div>
</div>
</div>
<div class="mt-stack-md pt-4 border-t border-outline-variant">
<div class="flex items-center gap-2 text-on-secondary-container">
<span class="material-symbols-outlined text-sm">event</span>
<span class="font-label-sm text-label-sm">Automatic renewal on Oct 12, 2024</span>
</div>
</div>
</div>
</div>
<!-- Payment Methods -->
<section class="glass-card rounded-xl p-stack-md">
<div class="flex justify-between items-center mb-6">
<h3 class="font-headline-md text-headline-md text-on-surface">Payment Methods</h3>
<button class="flex items-center gap-2 text-primary font-label-md hover:underline">
<span class="material-symbols-outlined text-sm">add</span>
                        Add New
                    </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 rounded-xl border border-primary bg-primary-container/5 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="w-12 h-8 bg-on-surface rounded flex items-center justify-center">
<span class="text-[10px] text-white font-bold italic">VISA</span>
</div>
<div>
<p class="font-label-md text-on-surface">Visa ending in 4242</p>
<p class="text-xs text-on-surface-variant">Expires 12/26 • <span class="text-primary font-bold">Primary</span></p>
</div>
</div>
<button class="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-variant">
<span class="material-symbols-outlined">edit</span>
</button>
</div>
<div class="p-4 rounded-xl border border-outline-variant hover:border-primary-container transition-colors flex items-center justify-between group">
<div class="flex items-center gap-4">
<div class="w-12 h-8 bg-surface-container-highest rounded flex items-center justify-center">
<span class="text-[10px] text-on-surface-variant font-bold">M/C</span>
</div>
<div>
<p class="font-label-md text-on-surface">Mastercard ending in 8812</p>
<p class="text-xs text-on-surface-variant">Expires 09/25</p>
</div>
</div>
<div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant"><span class="material-symbols-outlined text-sm">edit</span></button>
<button class="p-2 hover:bg-error-container/20 rounded-lg text-error"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
</div>
</section>
<!-- Invoice History Table -->
<section class="glass-card rounded-xl overflow-hidden">
<div class="p-stack-md border-b border-outline-variant flex justify-between items-center">
<h3 class="font-headline-md text-headline-md text-on-surface">Billing History</h3>
<div class="flex gap-2">
<button class="px-4 py-2 text-sm border border-outline-variant rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm">filter_list</span> Filter
                        </button>
<button class="px-4 py-2 text-sm border border-outline-variant rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm">download</span> Export CSV
                        </button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low">
<tr>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Invoice ID</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Date</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Amount</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Status</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant text-right">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-6 py-4 font-label-md">INV-2024-009</td>
<td class="px-6 py-4 text-on-surface-variant">Sep 12, 2024</td>
<td class="px-6 py-4 font-bold text-on-surface">$214.92</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full text-xs font-bold bg-secondary-container/20 text-secondary border border-secondary-container">Paid</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all" title="Download PDF">
<span class="material-symbols-outlined">file_download</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-6 py-4 font-label-md">INV-2024-008</td>
<td class="px-6 py-4 text-on-surface-variant">Aug 12, 2024</td>
<td class="px-6 py-4 font-bold text-on-surface">$214.92</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full text-xs font-bold bg-secondary-container/20 text-secondary border border-secondary-container">Paid</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all" title="Download PDF">
<span class="material-symbols-outlined">file_download</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-6 py-4 font-label-md">INV-2024-007</td>
<td class="px-6 py-4 text-on-surface-variant">Jul 12, 2024</td>
<td class="px-6 py-4 font-bold text-on-surface">$235.10</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full text-xs font-bold bg-secondary-container/20 text-secondary border border-secondary-container">Paid</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all" title="Download PDF">
<span class="material-symbols-outlined">file_download</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-6 py-4 font-label-md text-on-surface-variant opacity-60 italic">INV-2024-006 (Pending)</td>
<td class="px-6 py-4 text-on-surface-variant">Jun 12, 2024</td>
<td class="px-6 py-4 font-bold text-on-surface">$199.00</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/20 text-tertiary border border-tertiary-container">Pending</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-on-surface-variant opacity-30 cursor-not-allowed p-2">
<span class="material-symbols-outlined">file_download</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-4 bg-surface-container-low border-t border-outline-variant text-center">
<button class="text-primary font-label-md hover:underline">View All Invoices</button>
</div>
</section>
</div>
</main>
<!-- Success Feedback Notification (Hidden by Default) -->
<div class="fixed bottom-8 right-8 bg-inverse-surface text-inverse-on-surface px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 translate-y-24 opacity-0 transition-all duration-300 z-[100]" id="toast">
<span class="material-symbols-outlined text-secondary-fixed">check_circle</span>
<span class="font-label-md">Download started successfully.</span>
</div>
<script>
        // Micro-interaction for download buttons
        const downloadButtons = document.querySelectorAll('button[title="Download PDF"]');
        const toast = document.getElementById('toast');

        downloadButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Mock visual feedback
                toast.classList.remove('translate-y-24', 'opacity-0');
                
                setTimeout(() => {
                    toast.classList.add('translate-y-24', 'opacity-0');
                }, 3000);
            });
        });

        // Add shimmer effect animation
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        \`;
        document.head.appendChild(style);
    </script>
`
  },
  "marketing/blog": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar -->
<header class="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-20">
<div class="font-headline-md text-headline-md font-bold text-on-surface">Auralis AI</div>
<nav class="hidden md:flex items-center gap-stack-lg">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-label-md text-label-md text-primary font-bold border-b-2 border-primary py-1" href="#">Insights</a>
</nav>
<div class="flex items-center gap-stack-md">
<button class="hidden sm:block font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-2 transition-all duration-300 ease-in-out hover:scale-[1.02]">Login</button>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md font-bold shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02]">Get Started</button>
</div>
</div>
</header>
<main>
<!-- Section 1: Featured Article Hero -->
<section class="px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-gutter bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary-container transition-all group shadow-sm">
<div class="lg:col-span-7 h-[400px] lg:h-auto relative overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-tech cinematic wide shot of a futuristic data center with pulsing electric cyan lights and glowing glass panels. Soft volumetric lighting highlights the sleek, metallic textures of AI server racks. The aesthetic is ultra-modern and premium, using a palette of deep blacks and sharp cyan accents against a clean white light-mode background environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6QaOsQo186qpd_GpSqb-wgY-Yj0LGVIJ1je82PUwp440nqOBZjK8PcDfOaP-FDfvf3e6JVDhkeyyXroN65Exr-p2YrCSqauswCZdxs3QNCULifknWkoLCwNy2_mB5YhL0Nv5bIADUuyzqa2KqTJBbQHe2yfyJyopsnmqI6cumYpza08oRlXvk_MjlUxgT32BkV1yrzNPS94Vad4HOE_0xSyFKSTKqF0tHWbbhVqZT5CIyOWJmYFc7"/>
<div class="absolute top-6 left-6">
<span class="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-label-md text-label-md font-bold shadow-sm">Featured</span>
</div>
</div>
<div class="lg:col-span-5 p-stack-lg flex flex-col justify-center gap-stack-md">
<div class="flex items-center gap-stack-sm">
<span class="text-primary font-label-md text-label-md font-bold tracking-wider">AUTOMATION</span>
<span class="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span class="text-on-surface-variant font-label-sm text-label-sm">12 Min Read</span>
</div>
<h1 class="font-headline-xl text-headline-xl text-on-surface leading-tight">Neural Sync: The Future of Cross-Platform Intelligence</h1>
<p class="text-on-surface-variant font-body-lg text-body-lg">Explore how Auralis AI's new synchronization engine is redefining the boundaries between human intent and automated execution across global infrastructures.</p>
<div class="mt-stack-md flex items-center gap-stack-sm">
<div class="w-12 h-12 rounded-full border-2 border-primary-container overflow-hidden p-0.5">
<img class="w-full h-full object-cover rounded-full" data-alt="A professional studio portrait of a woman in her late 30s with a sharp, intelligent gaze, wearing modern corporate attire. The background is a clean, minimal white studio with soft lighting. The image conveys high performance, authority, and tech-sector expertise, aligning with a premium corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJJt9UpafuJGuaREqS8CgkvldXwHw0-elSFLTVNEZ_W18My97XUSJM9a8RmDF_OCIlHIFmJo70yqLnG4Hdwt8GHSddxeQ08ushY6MKjo7LFcuqlVGSt72MJ3k5iEAFnmjzf-KxvuBaJt4taysutYz8QfByceDNGR90aKTS0RmHqGuFGSlKX8EEwMI8thl9EiTX-Z8fAhte_TQEMUpDtR-rOCC9L_UNGM4QAR9dYqX5OG-x2ppnHAtT"/>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface font-bold">Dr. Elena Vance</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Chief Research Officer</p>
</div>
</div>
<div class="mt-stack-sm">
<button class="inline-flex items-center gap-2 text-primary font-bold font-label-md group/btn">
                            Read Full Article
                            <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
<!-- Section 2: Search & Filter -->
<section class="bg-surface-container-low/30 border-y border-outline-variant/10 py-stack-md sticky top-20 z-40 backdrop-blur-sm">
<div class="px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter items-center justify-between">
<div class="flex items-center gap-stack-sm overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
<button class="bg-primary text-on-primary px-5 py-2 rounded-full font-label-md text-label-md whitespace-nowrap">All Insights</button>
<button class="bg-white border border-outline-variant/30 text-on-surface-variant hover:border-primary px-5 py-2 rounded-full font-label-md text-label-md transition-colors whitespace-nowrap">Automation</button>
<button class="bg-white border border-outline-variant/30 text-on-surface-variant hover:border-primary px-5 py-2 rounded-full font-label-md text-label-md transition-colors whitespace-nowrap">Neural Nets</button>
<button class="bg-white border border-outline-variant/30 text-on-surface-variant hover:border-primary px-5 py-2 rounded-full font-label-md text-label-md transition-colors whitespace-nowrap">Agency Growth</button>
<button class="bg-white border border-outline-variant/30 text-on-surface-variant hover:border-primary px-5 py-2 rounded-full font-label-md text-label-md transition-colors whitespace-nowrap">Engineering</button>
</div>
<div class="relative w-full md:w-72">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input class="w-full pl-12 pr-4 py-2.5 rounded-xl border border-outline-variant bg-white text-on-surface focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 outline-none transition-all font-label-md" placeholder="Search insights..." type="text"/>
</div>
</div>
</section>
<!-- Section 3: Article Grid -->
<section class="px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<article class="flex flex-col bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden hover-lift group ai-top-signal">
<div class="h-56 overflow-hidden relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="An abstract visualization of a neural network composed of glowing nodes and electric cyan fiber-optic cables weaving through a dark digital space. The lighting is crisp and energetic, emphasizing movement and speed. The composition is balanced and elegant, fitting for a modern high-end AI blog thumbnail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPvH5v8DDc9gnUZA3Cpw0_A4q18PHlagSz-SZVmMyR6ftII-a3V5OLntJ2jLgfTm6KAjCTVtw7PK1GngPosRwN761YHG78h8P8vl-MtK4lDhfVJfX58CvZLpPPTXo65QCxw269CxUCUFlTlnDePvPAjNdpFYkAfd3zN06qrgRyWdi68LIH6MlTbt4EYWQfTT5G1lZA1BpPEDsOE9fZviYSnkXdTxWzQhn_nIVnvQuoXOFUZX1rBI2m"/>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Engineering</span>
</div>
</div>
<div class="p-stack-md flex flex-col flex-grow">
<div class="flex items-center justify-between mb-stack-sm">
<span class="text-on-surface-variant font-label-sm text-label-sm">8 Min Read</span>
<span class="text-outline font-label-sm text-label-sm">Oct 24, 2024</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-stack-sm group-hover:text-primary transition-colors">Optimizing LLM Latency for Enterprise Real-time Data</h3>
<p class="text-on-surface-variant font-body-md text-body-md line-clamp-3 mb-stack-md">A deep dive into the architectural shifts required to handle petabyte-scale data flows without compromising on response speed.</p>
<div class="mt-auto pt-stack-sm flex items-center gap-stack-sm">
<img class="w-8 h-8 rounded-full bg-surface-dim" data-alt="A portrait of a male tech professional in a minimal white studio. He has a thoughtful expression, glasses, and a neatly trimmed beard. The lighting is bright and clean, emphasizing professionalism and high-tech credibility. The color palette is neutral with soft grey and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuLNbXTClUyAETGAlK0HUBe4OP2QHqTnrSa1DP0kQi2L1gsupjgS0XypOBtyWIysU2tDuOZMKmLJD9S3Ii6ixku4ddWEN4ERljpJdpUK5xx1kXeBEFwCVWmwO_F_sqnqJYoOwGY_rknZkV1uxPcnUzYAbOKjrjp8nQnXM3lgkrdmKDpGxlku5VefBMrbk9glDmNOxI6fMAUGK4W3NJv8kg8mBjqchQD1MaFUWyGK2aHMMsAC5o9E0F"/>
<span class="font-label-md text-label-md text-on-surface">Mark Jenson</span>
</div>
</div>
</article>
<!-- Card 2 -->
<article class="flex flex-col bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden hover-lift group ai-top-signal">
<div class="h-56 overflow-hidden relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A sleek corporate office interior with glass walls and minimalist furniture, overlooking a futuristic city skyline at dusk. Electric cyan light accents highlight the modern geometry of the space. The scene is sophisticated and evokes a sense of global business intelligence and premium agency growth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzMzV6-pHJfCFGhTsJmjM_i-AF_8a4xvmwYwAQ6CI-D7g-VWA_GckJiDC36uiSVEJ5JnfNDY8gS-9IiJ1t4HNwmNjhoeV0Nm7KrkjvQDMeWiMlD_A0ll2Ta8Oi2QhgUCUGOYJ7Nd7bdBvv9BMcPk6Sj11URcQoHmG3z4WAPXOoIS-RKIaPdcWb84KIhTybX6yMIc6PeTX5hzHpZaPFAEkeLpzrsGcWhBozqebdXpZoNTtmJGviPmO"/>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Agency Growth</span>
</div>
</div>
<div class="p-stack-md flex flex-col flex-grow">
<div class="flex items-center justify-between mb-stack-sm">
<span class="text-on-surface-variant font-label-sm text-label-sm">5 Min Read</span>
<span class="text-outline font-label-sm text-label-sm">Oct 21, 2024</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-stack-sm group-hover:text-primary transition-colors">Scaling Your AI Agency from Zero to 7 Figures</h3>
<p class="text-on-surface-variant font-body-md text-body-md line-clamp-3 mb-stack-md">The blueprint for modern agencies to leverage Auralis AI for client automation and sustainable recurring revenue.</p>
<div class="mt-auto pt-stack-sm flex items-center gap-stack-sm">
<img class="w-8 h-8 rounded-full bg-surface-dim" data-alt="A professional headshot of a confident man with a warm smile, set against a blurred, high-end office background. He is wearing a dark, well-fitted blazer. The image style is polished corporate minimalism, with bright lighting and a clean, high-performance aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATrX5O8AScDYs3pA-Sxv-Q-50aHWar6D00SMh9-Eb44RGlFPS0jdqiy6Q4C6sNyQSmtdKqCx3jXwQDNPZBGbzGansFRKeanh0vEXelY7CclQZhRy_LOBcpr--nSArCJXLhkleXRGeh1K8Aj2KuXVaUC1-o9FgVFwVq5KROz8zeodfwWHKOO5LnigRSXGmdmQiAPoEBuCYarFVVgAdMhgPmNZrRzB9DMRRMgQeZuMJS8UKG99-7FK-"/>
<span class="font-label-md text-label-md text-on-surface">Sarah Chen</span>
</div>
</div>
</article>
<!-- Card 3 -->
<article class="flex flex-col bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden hover-lift group ai-top-signal">
<div class="h-56 overflow-hidden relative">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Macro photography of a sleek, brushed-metal computer chip with glowing cyan circuits. The depth of field is shallow, creating a beautiful bokeh effect with technical light sources. The image communicates precision, intelligence, and cutting-edge hardware-software integration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgPPOQaIVxrVq-1Z5IzcwxShBVvA9Ns9IjFYvEQvtwDfiQckzNfzCQiwSC10zsfQVL_DpQdsfjiKFqGrEreTjMh62bgMjv_kexezmdq3bZNeM6unm4sFzy0ecoLq-2DXv8RyKM_6aMKnn09sj6sX3IfAllb19IgaItES1MajcvrbuTLYbB9jWcDArC9KinVIUrkRT5No8cDhMnT2meukP1ny8Y8M26bYsb7ehL2pDMdwo-fsj_o9xm"/>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Neural Nets</span>
</div>
</div>
<div class="p-stack-md flex flex-col flex-grow">
<div class="flex items-center justify-between mb-stack-sm">
<span class="text-on-surface-variant font-label-sm text-label-sm">15 Min Read</span>
<span class="text-outline font-label-sm text-label-sm">Oct 18, 2024</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-stack-sm group-hover:text-primary transition-colors">Beyond Transformers: The Rise of Recursive Architectures</h3>
<p class="text-on-surface-variant font-body-md text-body-md line-clamp-3 mb-stack-md">Why the next generation of AI models will focus on iterative reasoning rather than simple pattern completion.</p>
<div class="mt-auto pt-stack-sm flex items-center gap-stack-sm">
<img class="w-8 h-8 rounded-full bg-surface-dim" data-alt="A studio portrait of a male researcher in his late 20s, wearing a minimalist black turtleneck. The lighting is sophisticated, with a rim light effect that separates him from the dark grey background. He looks focused and visionary, embodying the high-intelligence brand persona of Auralis AI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE6fa2HlOyAvYrpp75GEGPlscY55tiTqNbj0Ai7fS-dAmD4ftT0LpSM9jkVPmSNxXgtwXi8nfIw8LBGme1OAvEFj1kqiGNMYofr4WVQVqxSH64ueelDB4SetAnD9PFTM5g0Gcdj86yavCXUoNNKABcago87PwFzkCWudWuIEHX_wwin54OkdG34DwFce5WrkCt3GANh3lYGUkR7IBTWY49YpkT_fv3QLR37SEXJ-27WuRDDiwyEhV0"/>
<span class="font-label-md text-label-md text-on-surface">James Aris</span>
</div>
</div>
</article>
</div>
<div class="mt-stack-lg flex justify-center">
<button class="border-2 border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary px-8 py-3 rounded-xl font-label-md text-label-md font-bold transition-all">Load More Articles</button>
</div>
</section>
<!-- Section 4: Newsletter Signup -->
<section class="px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<div class="bg-primary-container rounded-[2rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-gutter border-2 border-primary/20">
<div class="relative z-10 max-w-lg">
<div class="flex items-center gap-stack-sm mb-stack-sm">
<span class="material-symbols-outlined text-on-primary-container fill-[1]" style="font-variation-settings: 'FILL' 1;">bolt</span>
<span class="text-on-primary-container font-headline-md text-headline-md font-extrabold tracking-tighter">THE PULSE</span>
</div>
<h2 class="font-headline-lg text-headline-lg text-on-primary-container mb-stack-sm">Join 10k+ visionaries leading the AI frontier.</h2>
<p class="text-on-primary-container/80 font-body-lg text-body-lg">Get curated insights on automation, neural networks, and agency scaling delivered to your inbox every Tuesday.</p>
</div>
<div class="relative z-10 w-full md:w-auto">
<form class="flex flex-col sm:flex-row gap-4 w-full">
<input class="bg-white/90 border-none rounded-full px-8 py-4 w-full sm:w-80 text-on-surface font-body-md focus:ring-4 focus:ring-on-primary-container/20 outline-none placeholder:text-on-surface-variant/50" placeholder="Enter your email" required="" type="email"/>
<button class="bg-on-primary-container text-white px-8 py-4 rounded-full font-label-md text-label-md font-black hover:scale-105 transition-transform shadow-lg" type="submit">Subscribe Now</button>
</form>
<p class="mt-4 text-on-primary-container/60 font-label-sm text-label-sm text-center sm:text-left">No spam. Just precision intelligence. Unsubscribe anytime.</p>
</div>
<!-- Abstract pulse background effect -->
<div class="absolute right-0 bottom-0 w-96 h-96 opacity-10 bg-white rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
<div class="absolute left-0 top-0 w-64 h-64 opacity-5 bg-on-primary-container rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2"></div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-stack-lg mt-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-1">
<div class="font-headline-sm text-headline-sm font-black text-on-surface mb-stack-sm">Auralis AI</div>
<p class="text-on-surface-variant/80 font-body-md text-body-md pr-8">Empowering agencies and enterprises with high-performance neural infrastructure.</p>
</div>
<div class="flex flex-col gap-stack-sm">
<h4 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Product</h4>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Features</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Integrations</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Enterprise</a>
</div>
<div class="flex flex-col gap-stack-sm">
<h4 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Resources</h4>
<a class="text-primary font-semibold transition-colors font-body-md text-body-md" href="#">Insights Blog</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Documentation</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Case Studies</a>
</div>
<div class="flex flex-col gap-stack-sm">
<h4 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Legal</h4>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy Policy</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Terms of Service</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-body-md text-body-md" href="#">Security</a>
</div>
</div>
<div class="mt-stack-lg pt-stack-md border-t border-outline-variant/10 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-sm">
<p class="text-on-surface-variant/60 font-label-sm text-label-sm">© 2024 Auralis AI. Precision in Intelligence.</p>
<div class="flex gap-stack-md">
<a class="text-on-surface-variant/60 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">public</span></a>
<a class="text-on-surface-variant/60 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">alternate_email</span></a>
<a class="text-on-surface-variant/60 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">group</span></a>
</div>
</div>
</footer>
<script>
        // Simple search interaction
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('scale-[1.01]');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('scale-[1.01]');
        });

        // Hover effect for filter buttons
        const filters = document.querySelectorAll('.scrollbar-hide button');
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                filters.forEach(b => {
                    b.classList.remove('bg-primary', 'text-on-primary');
                    b.classList.add('bg-white', 'border', 'border-outline-variant/30', 'text-on-surface-variant');
                });
                btn.classList.remove('bg-white', 'border', 'border-outline-variant/30', 'text-on-surface-variant');
                btn.classList.add('bg-primary', 'text-on-primary');
            });
        });
    </script>
`
  },
  "marketing/case-studies": {
    bodyClass: "bg-surface text-on-surface font-body-md",
    html: `
<!-- Navigation -->
<nav class="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30 h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="font-headline-md text-headline-md font-bold text-on-surface">Auralis AI</div>
<div class="hidden md:flex gap-8 items-center">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-label-md text-label-md text-primary font-bold border-b-2 border-primary" href="#">Agency</a>
<div class="flex gap-4 ml-4">
<button class="font-label-md text-label-md px-6 py-2 border-[1.5px] border-on-background rounded-lg hover:bg-surface-container-low transition-all">Login</button>
<button class="font-label-md text-label-md px-6 py-2 bg-primary-container text-on-primary-container rounded-lg font-bold shadow-sm hover:scale-[1.02] transition-all">Get Started</button>
</div>
</div>
<button class="md:hidden material-symbols-outlined">menu</button>
</div>
</nav>
<main class="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
<!-- Section 1: Header -->
<header class="mb-16 max-w-3xl">
<h1 class="font-display-lg text-display-lg mb-stack-md text-on-surface">Intelligence in Action</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                Explore how industry leaders are leveraging Auralis AI to automate complex workflows, gain predictive insights, and achieve unprecedented operational speed.
            </p>
</header>
<!-- Section 2: Horizontal Category Filter -->
<section class="mb-12 overflow-x-auto">
<div class="flex gap-stack-sm pb-4 min-w-max">
<button class="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm">All Industries</button>
<button class="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-md text-label-md">FinTech</button>
<button class="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-md text-label-md">E-commerce</button>
<button class="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-md text-label-md">Logistics</button>
<button class="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-md text-label-md">Healthcare</button>
</div>
</section>
<!-- Section 3: Featured Case Study -->
<section class="mb-16">
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col lg:flex-row top-signal-cyan">
<div class="lg:w-3/5 relative h-80 lg:h-auto overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="A sophisticated dashboard interface with high-fidelity data visualizations, sleek neon cyan charts, and a clean professional layout. The UI is displayed on a high-end monitor in a brightly lit, minimalist corporate setting with soft ambient light. The aesthetic is ultra-modern, high-performance, and precise, mirroring a premium tech brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP4W9vqdax8r8xK9DlYRMUeLwmc_zfxM377Juug8yJvUviojIi4mgjnXzQTKMepMTOiaAsrMJlAAe22_VV-HL4soDpAwpC8BZKMBXDfhzVh6OA9m4fP4dCyNei39nIrbSi993jSva9JcCE3RAKioPUzbXTSIR2eZiKIUIY-r5_r6FCx4YYYj4GF4m8liEip7psqzEKC96lbExIdt21yDA8JFl9O4xOH33gD8OKpMWJJZBTA6o3jQ91"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-background/20 to-transparent"></div>
</div>
<div class="lg:w-2/5 p-stack-lg flex flex-col justify-center">
<div class="mb-4">
<span class="inline-block px-3 py-1 rounded-full bg-primary-container/20 text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider">Featured / FinTech</span>
</div>
<h2 class="font-headline-lg text-headline-lg mb-4">Reinventing Global Transaction Security</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">
                        Learn how Neobank utilized our Auralis Core engine to reduce fraudulent transactions while maintaining a seamless user experience for over 12 million customers.
                    </p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
<div class="font-headline-md text-headline-md text-primary">85%</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Efficiency Gain</div>
</div>
<div class="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
<div class="font-headline-md text-headline-md text-secondary">0.2ms</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Latency Reduction</div>
</div>
</div>
<button class="w-full lg:w-max px-8 py-3 bg-on-background text-surface rounded-lg font-bold hover:bg-on-background/90 transition-all flex items-center justify-center gap-2 group">
                        Read Case Study
                        <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</section>
<!-- Section 4: Grid of Case Study cards -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-stack-md flex flex-col hover:shadow-md transition-all group">
<div class="h-12 w-12 bg-surface-container rounded mb-6 flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img class="w-8 h-8 object-contain" data-alt="A minimalist tech logo consisting of geometric abstract shapes in deep teal and white, centered perfectly on a neutral light grey background. Professional and corporate brand mark." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU5vt-K_2H322MeAl_tsxkIFq3RVTjMw4sFpIO_DyPc47ekhWfg207eRE5Cf8GbKohyCmbSvcn9frvNp759SMbqAl3oZjsJki0Q98J9OVIwz0JYBh1whTQSbcCFxlzqChozqltaildfslvaPjpYKkhLgNR7bAVQE3W8Hx5163PGX1VsZtkHpXgB6jkG0KKxYcyY5sfuImVNwjGJ-FEJzkxQude3GzDA36lofGRKnVjv1vncRXqhUsE"/>
</div>
<div class="mb-2">
<span class="text-primary font-label-sm text-label-sm">E-commerce</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">Omnichannel Inventory Optimization</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                    Predictive stock management reduced over-stock by 40% across 500+ retail locations using real-time demand forecasting.
                </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface font-bold group/link" href="#">
                    View Results
                    <span class="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">trending_up</span>
</a>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-stack-md flex flex-col hover:shadow-md transition-all group">
<div class="h-12 w-12 bg-surface-container rounded mb-6 flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img class="w-8 h-8 object-contain" data-alt="A professional logistics company logo featuring a sleek, minimalist arrow-shaped emblem in dark gray and electric green, presented on a clean white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQFJKjppeWsCyeAOcMNGrptP3vR3l20qvgA7M32arqg30mMShSTWO0TrNZRgbOfti_SpUbwME4YNFAp2KggslIRCUCyBSg-jIdrWja0k6AXaJY5bLfwwXM28Wv8N1p1ZV6pnP7RA-fe_7Ms5SQdxceeGVc1qV2Le-8EUnaotwnzraaldGxQ6mSLfh0TjhvM188qkJzT5_n3gRHSBeENDXiJ-0tMTvP5m29i-UAStfkeoRJeXoFBMWE"/>
</div>
<div class="mb-2">
<span class="text-primary font-label-sm text-label-sm">Logistics</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">Last-Mile Routing Intelligence</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                    Dynamic routing AI saved over 1.2 million liters of fuel annually by optimizing delivery paths in hyper-dense urban areas.
                </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface font-bold group/link" href="#">
                    View Results
                    <span class="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">trending_up</span>
</a>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-stack-md flex flex-col hover:shadow-md transition-all group">
<div class="h-12 w-12 bg-surface-container rounded mb-6 flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img class="w-8 h-8 object-contain" data-alt="A healthcare technology logo with a stylized, minimalist cross and pulse-line symbol in soft blue and white colors, symbolizing medical innovation and precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Sh_HICaqeyAKjKLZ4far6yB6vFSAa-32XrryfV3kriyQ51ETr6La5fL6uIFS5VEtovM3WS9OK3piU5A8rkwXQtcnE5gDqroguWS1d0DGsGwe93cGNmsSO5wqsgvkNAV2nDvFf_PhGXUz7yNHLHZxhBUls7JMzYzCVk52hor7ygAAyzccK39DlDtglguF9jaOf8iskT5HWdbh6yaaJPpU1__SGxqXVveJLrefTr4p3rBGgRrL1TlT"/>
</div>
<div class="mb-2">
<span class="text-primary font-label-sm text-label-sm">Healthcare</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">AI-Assisted Diagnostic Accuracy</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                    Partnering with HealthSync to implement vision-based AI, increasing early detection rates in medical imaging by 22%.
                </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface font-bold group/link" href="#">
                    View Results
                    <span class="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">trending_up</span>
</a>
</div>
<!-- Card 4 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-stack-md flex flex-col hover:shadow-md transition-all group">
<div class="h-12 w-12 bg-surface-container rounded mb-6 flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img class="w-8 h-8 object-contain" data-alt="A modern software-as-a-service logo design with abstract overlapping circles in shades of primary blue, clean and simple vector style on white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGenA2qHXLzRgN6iQAks3WIUhDl7kkSnMnSi1XMLP_3pd_d2DAQrjjEHtb18Mk8WzKbvF50Dzb4Kc5WOhQ3PO3Qa57dZc9NIZCRc2pADDGXUjAixrIPX9HFkUWSPrf7bFQ_euIVWDykaskhu9mMAGm9RaWEIuK2vwZtLtxjQH8m6l5PS8k2qctX2hDICRfTb6WMlkM0zRJkSqYzjhQvGMvyuQ-zBep6nduT8dXNY-I1mhVyZSviXo7"/>
</div>
<div class="mb-2">
<span class="text-primary font-label-sm text-label-sm">SaaS</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">Hyper-Personalized Content</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                    Increasing platform engagement by 310% through a custom NLP recommendation engine deployed at scale.
                </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface font-bold group/link" href="#">
                    View Results
                    <span class="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">trending_up</span>
</a>
</div>
<!-- Card 5 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-stack-md flex flex-col hover:shadow-md transition-all group">
<div class="h-12 w-12 bg-surface-container rounded mb-6 flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img class="w-8 h-8 object-contain" data-alt="An industrial manufacturing logo featuring a bold, minimalist gear icon with sharp edges in matte black and silver, conveying strength and precision engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1tfe7IhRpf6YZf9szqNlLee3yu0sH9wDdiv6XOAsYvCTt9zMHdzkOOQq2MeBgoby89EI4LAtP_rhE5cW4EM5qCEpqAe4hFI1Fani5aS8jYTs-uRH48cefRZZmkcKKcj0kZyzEY29drkS834DqjpthCLUjRVjOqvqccbYkTk5TGn_FG60VAS5FI7rQX1A9zqSx7elus_quElNMvJwvs89Apg-xMXMkksg2a4Qajsmt1tc_r124997a"/>
</div>
<div class="mb-2">
<span class="text-primary font-label-sm text-label-sm">Logistics</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">Predictive Asset Maintenance</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                    Reducing mechanical downtime by 65% for heavy machinery fleets using sensor-fused anomaly detection.
                </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface font-bold group/link" href="#">
                    View Results
                    <span class="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">trending_up</span>
</a>
</div>
<!-- Card 6 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-stack-md flex flex-col hover:shadow-md transition-all group">
<div class="h-12 w-12 bg-surface-container rounded mb-6 flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img class="w-8 h-8 object-contain" data-alt="A clean fintech logo with a stylized dollar sign made of digital circuit lines in cyan and navy blue, professional and innovative aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_rnlKJM1LprvmNog4VLjG9g28m-DNbT-l5qbfQNyCpHylChYuQLneQMNQA6d6DdN4Yn9KMS-JAjUpjKA59sF9iHtfE-H-kwcdIEzcfTLVQejn9LZL0lC23BPjYSrOgWRatUPUo9oYOX2oECH8NZHCGDpz-oMpauxUUMJSLcEy-NX_WD2U3o7FF5v8hFmyY94yfMsOlqWp7-u8AvD9KtNYFxYAXihzEjyZRXfJgtlSAsm74j2QRwP"/>
</div>
<div class="mb-2">
<span class="text-primary font-label-sm text-label-sm">FinTech</span>
</div>
<h3 class="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">Automated Underwriting Engine</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                    Reducing loan approval cycles from 3 days to 45 seconds while decreasing default risk by 12.5%.
                </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface font-bold group/link" href="#">
                    View Results
                    <span class="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">trending_up</span>
</a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant/20 mt-16">
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div>
<div class="font-headline-sm text-headline-sm font-black text-on-surface mb-6">Auralis AI</div>
<p class="font-body-md text-body-md text-on-surface-variant/80">Precision in Intelligence.</p>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-semibold mb-4">Product</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Features</a></li>
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Enterprise</a></li>
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-semibold mb-4">Company</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">About Us</a></li>
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Careers</a></li>
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-semibold mb-4">Legal</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant/80 hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div class="mt-12 text-center border-t border-outline-variant/10 pt-8">
<p class="font-label-sm text-label-sm text-on-surface-variant/60">© 2024 Auralis AI. Precision in Intelligence.</p>
</div>
</footer>
<script>
        // Simple filter interaction simulation
        document.querySelectorAll('button[class*="rounded-full"]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('button[class*="rounded-full"]').forEach(b => {
                    b.classList.remove('bg-primary', 'text-on-primary');
                    b.classList.add('bg-surface-container', 'text-on-surface-variant');
                });
                this.classList.remove('bg-surface-container', 'text-on-surface-variant');
                this.classList.add('bg-primary', 'text-on-primary');
            });
        });

        // Sticky nav scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    </script>
`
  },
  "marketing/changelog": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="flex items-center gap-2">
<span class="font-display-lg text-headline-md font-extrabold text-on-surface tracking-tighter">Auralis AI</span>
</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a>
<a class="font-body-md text-label-md text-primary font-bold border-b-2 border-primary-fixed-dim pb-1" href="#">Blog</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden sm:block font-label-md text-on-surface-variant px-4 py-2 rounded-lg hover:bg-surface-container-low transition-all duration-200 active:scale-95">Login</button>
<button class="bg-primary-container text-on-primary-container font-label-md px-6 py-2.5 rounded-lg hover:brightness-105 transition-all duration-200 active:scale-95 shadow-sm">Get Started</button>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="pt-32 pb-stack-lg">
<div class="max-w-container-max mx-auto px-margin-desktop">
<header class="mb-20 text-center max-w-3xl mx-auto">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
<span class="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
<span class="font-label-sm text-label-sm uppercase tracking-wider">Product Updates</span>
</div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">Precision Intelligence, <span class="text-primary italic">Evolved.</span></h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Stay updated with the latest improvements, fixes, and feature launches at Auralis AI. Our commitment to high-performance utility is reflected in every commit.</p>
</header>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
<!-- Left Column: Timeline -->
<div class="lg:col-span-8 space-y-20 relative">
<!-- The vertical line -->
<div class="absolute left-0 md:left-12 top-4 bottom-0 w-0.5 timeline-line hidden md:block"></div>
<!-- Entry: v2.4.0 -->
<section class="relative md:pl-28 transition-all duration-500 hover:translate-x-1 group">
<div class="absolute left-0 md:left-12 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background bg-primary-fixed-dim z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
<div class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl shadow-sm relative overflow-hidden group-hover:shadow-md transition-shadow">
<div class="absolute top-0 left-0 w-full h-1 bg-primary-fixed-dim"></div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest mb-1 block">Release</span>
<h2 class="font-headline-lg text-headline-lg">Auralis Pulse Engine v2.4.0</h2>
</div>
<div class="text-right">
<span class="font-label-md text-label-md bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant inline-block">March 14, 2024</span>
</div>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                                Our biggest update yet. Introducing the Pulse Engine—a foundational shift in how our AI models handle real-time streaming data with zero latency overhead.
                            </p>
<div class="space-y-6">
<div>
<div class="flex items-center gap-2 mb-3">
<span class="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase">New</span>
<h3 class="font-label-md text-label-md">Real-time Context Threading</h3>
</div>
<p class="font-body-md text-on-surface-variant mb-4">Neural threads now persist across session states, allowing for deep-memory recall during high-frequency data streams.</p>
<div class="bg-inverse-surface rounded-lg p-4 font-mono text-sm text-surface overflow-x-auto custom-scrollbar">
<code class="block text-primary-fixed-dim">// Initialize Pulse Thread</code>
<code class="block">const stream = await Auralis.pulse.connect({</code>
<code class="block">  persistence: "neural_thread_v2",</code>
<code class="block">  latency: "zero_ms"</code>
<code class="block">});</code>
</div>
</div>
<div>
<div class="flex items-center gap-2 mb-3">
<span class="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full uppercase">Improved</span>
<h3 class="font-label-md text-label-md">Vector Compression v4</h3>
</div>
<ul class="list-none space-y-2 text-on-surface-variant">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span>Reduced index memory footprint by 42% across all clusters.</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span>Enhanced retrieval accuracy for long-form technical documentation.</span>
</li>
</ul>
</div>
</div>
<div class="mt-8 pt-8 border-t border-outline-variant flex items-center gap-4">
<div class="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="A professional studio headshot of a female software engineer in a modern tech office setting, soft natural lighting, high-end corporate aesthetic, focused and intelligent expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8HjlJdkvOOuzuh80Kp63kHT-nSPbnl4WFjisNYqurCXvLCZO62GRlLGRubO2t-jNjrr5VLhzt9hf3zQfGFS-HIZwmB0wIhnBNee_1LvhuVciE92Zq_PylmiDAuWVmka2faQsTYWBxfd6VxAEGJlMcv8OX0w6Nb5UU3_DjydcCh8s6DXfBw_XpzENlE44g4ciqN6ginAsnTflZ03D7qKOKWChVVKJGS4-I5NFTXr7M_nlkFcfB2GLx"/>
</div>
<div>
<p class="font-label-md text-label-md">Elena Vance</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Lead Core Engineer</p>
</div>
</div>
</div>
</section>
<!-- Entry: v2.3.5 -->
<section class="relative md:pl-28 transition-all duration-500 hover:translate-x-1 group">
<div class="absolute left-0 md:left-12 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background bg-outline-variant z-10 hidden md:block group-hover:bg-primary-fixed-dim transition-colors"></div>
<div class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl shadow-sm relative overflow-hidden group-hover:shadow-md transition-shadow">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-widest mb-1 block">Maintenance</span>
<h2 class="font-headline-lg text-headline-lg">Optimization Patch v2.3.5</h2>
</div>
<div class="text-right">
<span class="font-label-md text-label-md bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant inline-block">February 28, 2024</span>
</div>
</div>
<div class="space-y-6">
<div>
<div class="flex items-center gap-2 mb-3">
<span class="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full uppercase">Fixed</span>
<h3 class="font-label-md text-label-md">Token Overflow Exception</h3>
</div>
<p class="font-body-md text-on-surface-variant">Resolved an edge-case where recursive API calls could trigger a memory leak in the WebSocket handshake. Performance stabilized for 24/7 uptime environments.</p>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="rounded-lg border border-outline-variant p-4 bg-surface-container-low">
<div class="text-primary font-bold text-xl mb-1">99.99%</div>
<div class="text-xs uppercase font-label-md text-on-surface-variant tracking-tighter">API Uptime</div>
</div>
<div class="rounded-lg border border-outline-variant p-4 bg-surface-container-low">
<div class="text-primary font-bold text-xl mb-1">-120ms</div>
<div class="text-xs uppercase font-label-md text-on-surface-variant tracking-tighter">Avg. Latency</div>
</div>
</div>
</div>
</div>
</section>
<!-- Entry: v2.3.0 -->
<section class="relative md:pl-28 transition-all duration-500 hover:translate-x-1 group">
<div class="absolute left-0 md:left-12 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background bg-outline-variant z-10 hidden md:block"></div>
<div class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl shadow-sm relative overflow-hidden group-hover:shadow-md transition-shadow">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest mb-1 block">New Features</span>
<h2 class="font-headline-lg text-headline-lg">The Agency Dashboard v2.3.0</h2>
</div>
<div class="text-right">
<span class="font-label-md text-label-md bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant inline-block">February 12, 2024</span>
</div>
</div>
<div class="w-full h-48 bg-cover bg-center rounded-lg border border-outline-variant mb-6 shadow-inner" data-alt="A clean, minimalist UI dashboard screenshot for an AI agency platform. Showing sleek charts, white backgrounds, electric cyan accents, and clear typography. High-resolution tech aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmNrsPeY_QEOqKe01QNZe6Vh8xiWPCUx8e1xfKebuYyOFgapt1Dhht8oDTnkyEagrLzYyT90znJThjs6LkWX73JjLBF8obc55E8zoPxNu011ZhnBIUWYR2xRpvFlKwAqRZ-Wnv82HavRmArbEEOaZbmyn1QKzOfxg_A3IQhQGqr4qpuX6HLWQxg4g8mpD0itjHDeFePC8Slok2_qHTW0Bo-Qp337iUNyxKiSWKAfeZpOB5SAWvJOll')"></div>
<div class="space-y-4">
<div class="flex items-center gap-2">
<span class="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase">New</span>
<h3 class="font-label-md text-label-md">Multi-tenant Project Workspace</h3>
</div>
<p class="font-body-md text-on-surface-variant">Agencies can now manage up to 50 independent clients under a single master dashboard with granular permission controls.</p>
</div>
</div>
</section>
</div>
<!-- Right Column: Sidebar CTA -->
<aside class="lg:col-span-4 h-fit sticky top-28 space-y-6">
<!-- Subscription Card -->
<div class="bg-surface-container-low border border-primary/20 p-stack-lg rounded-xl shadow-lg relative overflow-hidden">
<div class="absolute -right-8 -top-8 w-24 h-24 bg-primary-fixed-dim/20 rounded-full blur-2xl"></div>
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container">mail</span>
</div>
<h3 class="font-headline-md text-headline-md leading-tight">Stay Ahead of the Curve</h3>
</div>
<p class="font-body-md text-on-surface-variant mb-6">Get technical deep-dives and major release notes delivered directly to your inbox. No spam, just precision intelligence.</p>
<form class="space-y-3" onsubmit="event.preventDefault(); alert('Subscribed!')">
<input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed-dim/10 transition-all" placeholder="work@company.com" required="" type="email"/>
<button class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl hover:brightness-105 transition-all active:scale-[0.98] shadow-sm" type="submit">Subscribe to Updates</button>
</form>
<p class="text-[11px] text-on-surface-variant/60 mt-3 text-center uppercase tracking-widest font-label-sm">Joining 12,000+ engineers</p>
</div>
<!-- Category Filter -->
<div class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl">
<h4 class="font-label-md text-label-md mb-4 uppercase tracking-wider text-on-surface-variant">Categories</h4>
<div class="flex flex-wrap gap-2">
<a class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">All Updates</a>
<a class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">New Features</a>
<a class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">Improvements</a>
<a class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">Fixes</a>
<a class="px-4 py-2 bg-surface-container-high rounded-full font-label-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">Security</a>
</div>
</div>
<!-- RSS / Social -->
<div class="flex justify-between items-center px-4">
<a class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-lg">rss_feed</span>
<span class="font-label-md">RSS Feed</span>
</a>
<a class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-lg">terminal</span>
<span class="font-label-md">API Status</span>
</a>
</div>
</aside>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-stack-lg bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant mt-20">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<span class="font-display-lg text-headline-sm font-bold text-on-surface block mb-4">Auralis AI</span>
<p class="text-on-surface-variant font-body-md mb-6 max-w-xs">Pioneering the next frontier of precision autonomous intelligence for high-scale enterprise operations.</p>
</div>
<div>
<h5 class="font-label-md text-primary mb-4">Product</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Features</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Integrations</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-primary mb-4">Company</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">About Us</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Careers</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-primary mb-4">Legal</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Terms of Service</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-body-sm text-label-md" href="#">Security</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-on-surface-variant font-body-sm text-label-md">© 2024 Auralis AI. All rights reserved. Precision Intelligence.</p>
<div class="flex gap-4">
<a class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container transition-colors group" href="#">
<span class="material-symbols-outlined text-sm group-hover:text-on-primary-container">public</span>
</a>
<a class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container transition-colors group" href="#">
<span class="material-symbols-outlined text-sm group-hover:text-on-primary-container">alternate_email</span>
</a>
</div>
</div>
</footer>
<script>
        // Simple observer for scroll reveals
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
            observer.observe(section);
        });
    </script>
`
  },
  "components/components": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="font-display-lg text-headline-md font-extrabold text-on-surface dark:text-on-background tracking-tighter">
                Auralis AI
            </div>
<div class="hidden md:flex items-center gap-stack-lg">
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-label-md text-primary font-bold border-b-2 border-primary-fixed-dim pb-1" href="#">Components</a>
</div>
<div class="flex items-center gap-stack-md">
<button class="px-6 py-2 rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container-low transition-all">Login</button>
<button class="px-6 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md hover:opacity-90 active:scale-95 transition-all">Get Started</button>
</div>
</div>
</nav>
<main class="pt-28 pb-stack-lg px-margin-desktop max-w-container-max mx-auto">
<!-- Hero Section -->
<header class="mb-stack-lg">
<div class="flex items-center gap-2 mb-4">
<span class="pulse-dot"></span>
<span class="text-label-md font-semibold text-secondary">System v1.4.2 Online</span>
</div>
<h1 class="font-display-lg text-display-lg mb-4 text-on-surface">Components Showcase</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A definitive guide to Auralis AI's visual language. High-contrast, tactile, and engineered for high-performance intelligence.
            </p>
</header>
<!-- Section: Buttons -->
<section class="mb-stack-lg scroll-mt-28" id="buttons">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-stack-md">
<h2 class="font-headline-lg text-headline-lg">1. Buttons</h2>
<span class="text-label-md bg-primary/10 text-primary px-3 py-1 rounded-full">Foundation</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Light Mode Variants -->
<div class="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl">
<p class="text-label-sm uppercase tracking-widest text-outline mb-6">Standard (Light Mode)</p>
<div class="flex flex-wrap gap-4 items-center">
<button class="px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-label-md hover:shadow-lg transition-all active:translate-y-0.5">Primary Action</button>
<button class="px-6 py-3 border-1.5 border-on-surface text-on-surface rounded-lg font-label-md hover:bg-surface-container transition-all">Secondary</button>
<button class="px-6 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-label-md transition-all">Ghost Button</button>
</div>
<div class="flex flex-wrap gap-4 mt-8 items-center">
<button class="p-3 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined">add</span>
</button>
<button class="px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-label-md flex items-center gap-2">
<span>Processing</span>
<svg class="animate-spin h-4 w-4 text-on-primary-container" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path></svg>
</button>
</div>
</div>
<!-- Dark Mode Variants -->
<div class="bg-inverse-surface text-inverse-on-surface border border-outline/20 p-stack-md rounded-xl">
<p class="text-label-sm uppercase tracking-widest text-outline-variant/60 mb-6">Inverted (Dark Context)</p>
<div class="flex flex-wrap gap-4 items-center">
<button class="px-6 py-3 bg-primary-fixed-dim text-on-primary-fixed rounded-lg font-label-md hover:shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all">Primary Action</button>
<button class="px-6 py-3 border-1.5 border-primary-fixed-dim text-primary-fixed-dim rounded-lg font-label-md hover:bg-primary-fixed-dim/10 transition-all">Secondary</button>
<button class="px-6 py-3 text-surface-variant hover:bg-white/5 rounded-lg font-label-md transition-all">Ghost Button</button>
</div>
<div class="flex flex-wrap gap-4 mt-8 items-center">
<button class="p-3 bg-primary-fixed-dim text-on-primary-fixed rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined" data-weight="fill">bolt</span>
</button>
<button class="px-6 py-3 bg-primary-fixed-dim text-on-primary-fixed rounded-lg font-label-md flex items-center gap-2">
<span>AI Running</span>
<span class="pulse-dot bg-on-primary-fixed"></span>
</button>
</div>
</div>
</div>
</section>
<!-- Section: Forms -->
<section class="mb-stack-lg scroll-mt-28" id="forms">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-stack-md">
<h2 class="font-headline-lg text-headline-lg">2. Forms &amp; Controls</h2>
<span class="text-label-md bg-secondary/10 text-secondary px-3 py-1 rounded-full">Interactive</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
<!-- Text Input -->
<div class="space-y-2">
<label class="text-label-md text-on-surface font-semibold">Project Name</label>
<div class="relative">
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary-fixed-dim focus:border-primary outline-none transition-all pl-11" placeholder="e.g. Project Auralis" type="text"/>
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">rocket_launch</span>
</div>
</div>
<!-- Select Menu -->
<div class="space-y-2">
<label class="text-label-md text-on-surface font-semibold">Model Architecture</label>
<select class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary-fixed-dim focus:border-primary outline-none transition-all appearance-none cursor-pointer">
<option>Neural Engine v2</option>
<option>Quantum Core 4.0</option>
<option>Laminar Flow 1.2</option>
</select>
</div>
<!-- Toggles & Switches -->
<div class="space-y-4">
<label class="text-label-md text-on-surface font-semibold block">Preferences</label>
<div class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
<span class="text-body-md">Auto-optimization</span>
<button class="w-12 h-6 rounded-full bg-primary relative transition-colors" onclick="this.classList.toggle('bg-primary'); this.classList.toggle('bg-outline-variant')">
<span class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
</button>
</div>
<div class="flex items-center gap-3">
<input checked="" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary-container" type="checkbox"/>
<span class="text-body-md">Accept intelligence terms</span>
</div>
</div>
</div>
</div>
</section>
<!-- Section: Feedback & Navigation -->
<section class="mb-stack-lg scroll-mt-28" id="feedback">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
<!-- Feedback Elements -->
<div class="space-y-stack-md">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-4">
<h2 class="font-headline-lg text-headline-lg">3. Feedback</h2>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md space-y-4">
<!-- Badges -->
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-label-sm font-bold">STABLE</span>
<span class="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-label-sm font-bold">ACTIVE</span>
<span class="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-bold">URGENT</span>
</div>
<!-- Alert -->
<div class="flex items-start gap-4 p-4 bg-primary-container/20 rounded-xl border-l-4 border-primary">
<span class="material-symbols-outlined text-primary">info</span>
<div>
<p class="font-semibold text-on-surface">Update Available</p>
<p class="text-label-md text-on-surface-variant">Your node is running an outdated firmware. Click to refresh.</p>
</div>
</div>
</div>
</div>
<!-- Navigation Components -->
<div class="space-y-stack-md">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-4">
<h2 class="font-headline-lg text-headline-lg">4. Navigation</h2>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md space-y-8">
<!-- Tabs -->
<div class="flex border-b border-outline-variant">
<button class="px-6 py-3 text-primary border-b-2 border-primary font-bold">Overview</button>
<button class="px-6 py-3 text-on-surface-variant hover:text-primary transition-colors">Analytics</button>
<button class="px-6 py-3 text-on-surface-variant hover:text-primary transition-colors">Settings</button>
</div>
<!-- Breadcrumbs -->
<div class="flex items-center gap-2 text-label-sm text-outline">
<a class="hover:text-primary transition-colors" href="#">Dashboard</a>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Nodes</a>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-on-surface font-semibold">Active Node 04</span>
</div>
</div>
</div>
</div>
</section>
<!-- Section: Data Display (Bento Grid) -->
<section class="mb-stack-lg scroll-mt-28" id="data">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-stack-md">
<h2 class="font-headline-lg text-headline-lg">5. Data Display</h2>
<span class="text-label-md bg-tertiary/10 text-tertiary px-3 py-1 rounded-full">Complex Systems</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Stats Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md ai-glow-border shadow-sm group hover:shadow-md transition-all">
<div class="flex justify-between items-start mb-6">
<div class="p-2 bg-primary-container/20 rounded-lg text-primary">
<span class="material-symbols-outlined">analytics</span>
</div>
<span class="text-secondary text-label-sm font-bold">+12.5%</span>
</div>
<p class="text-label-md text-on-surface-variant mb-1">Network Throughput</p>
<h3 class="text-headline-lg font-extrabold text-on-surface">842.1 GB/s</h3>
</div>
<!-- Table Preview -->
<div class="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div class="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface">
<span class="font-semibold text-on-surface">Recent Intelligence Events</span>
<button class="text-primary text-label-md font-bold hover:underline">View All</button>
</div>
<table class="w-full text-left">
<thead class="bg-surface-container-low text-label-sm text-on-surface-variant uppercase tracking-wider">
<tr>
<th class="px-6 py-3 font-semibold">Target Node</th>
<th class="px-6 py-3 font-semibold">Status</th>
<th class="px-6 py-3 font-semibold">Uptime</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/30">
<tr>
<td class="px-6 py-4 font-label-md">Lambda-Alpha-9</td>
<td class="px-6 py-4">
<span class="flex items-center gap-2">
<span class="pulse-dot"></span>
<span class="text-label-md">Optimizing</span>
</span>
</td>
<td class="px-6 py-4 text-label-md text-on-surface-variant">99.9%</td>
</tr>
<tr>
<td class="px-6 py-4 font-label-md">Zeta-Kernel-01</td>
<td class="px-6 py-4">
<span class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-label-md">Idle</span>
</span>
</td>
<td class="px-6 py-4 text-label-md text-on-surface-variant">94.2%</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<!-- Section: Overlays & Modals -->
<section class="mb-stack-lg scroll-mt-28" id="overlays">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-stack-md">
<h2 class="font-headline-lg text-headline-lg">6. Overlays</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Modal Component -->
<div class="bg-surface-container-highest/30 border border-outline-variant border-dashed rounded-xl p-stack-lg flex items-center justify-center min-h-[300px] relative overflow-hidden">
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-2xl p-stack-md max-w-sm z-10">
<div class="flex justify-between items-center mb-4">
<h4 class="font-headline-md">Confirm Action</h4>
<span class="material-symbols-outlined text-outline cursor-pointer">close</span>
</div>
<p class="text-on-surface-variant mb-6">Are you sure you want to initialize the Quantum Core? This process cannot be reversed once started.</p>
<div class="flex gap-3 justify-end">
<button class="px-4 py-2 text-label-md font-semibold text-on-surface-variant">Cancel</button>
<button class="px-6 py-2 bg-primary text-on-primary rounded-lg text-label-md font-bold shadow-md">Initialize Core</button>
</div>
</div>
<!-- Background aesthetic blur -->
<div class="absolute inset-0 bg-primary/5 backdrop-blur-sm pointer-events-none"></div>
</div>
<!-- Drawer Component -->
<div class="bg-surface-container-highest/30 border border-outline-variant border-dashed rounded-xl p-stack-lg flex items-center justify-end min-h-[300px] relative overflow-hidden">
<div class="w-64 h-full bg-surface-container-lowest border-l border-outline-variant shadow-xl p-stack-md absolute right-0 top-0 z-10 translate-x-0 transition-transform">
<div class="mb-8">
<h4 class="font-headline-md mb-2">Filters</h4>
<p class="text-label-sm text-outline">Adjust your view parameters</p>
</div>
<div class="space-y-6">
<div class="space-y-2">
<span class="text-label-md font-bold block">Date Range</span>
<div class="p-2 border border-outline-variant rounded text-label-sm">Last 24 Hours</div>
</div>
<div class="space-y-2">
<span class="text-label-md font-bold block">Status</span>
<div class="space-y-2">
<div class="flex items-center gap-2 text-label-md">
<input checked="" class="rounded text-primary" type="checkbox"/>
<span>Active Nodes</span>
</div>
<div class="flex items-center gap-2 text-label-md">
<input class="rounded text-primary" type="checkbox"/>
<span>Maintenance</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Final Showcase Section: AI Processing States -->
<section class="mb-stack-lg">
<div class="bg-inverse-surface text-inverse-on-surface rounded-2xl p-stack-lg relative overflow-hidden">
<div class="relative z-10">
<h2 class="font-display-lg text-headline-xl mb-4">Tactile Intelligence</h2>
<p class="text-body-lg max-w-xl text-surface-variant opacity-80 mb-8">Experience micro-interactions designed for speed. Auralis AI uses motion and light to bridge the gap between human and machine.</p>
<div class="flex gap-4">
<div class="group relative cursor-pointer">
<div class="absolute inset-0 bg-primary-fixed-dim blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
<div class="relative bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20 font-bold tracking-tight">EXPLORE API</div>
</div>
<div class="group relative cursor-pointer">
<div class="relative bg-transparent px-8 py-4 rounded-xl border border-white/40 font-bold tracking-tight hover:border-white transition-colors">DOCUMENTATION</div>
</div>
</div>
</div>
<!-- Abstract visual element -->
<div class="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
<div class="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant w-full py-stack-lg mt-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<div class="font-display-lg text-headline-sm font-bold text-on-surface mb-4">Auralis AI</div>
<p class="text-label-md text-on-surface-variant max-w-xs mb-6">
                    Building the sensory layer for the next generation of artificial intelligence. Precision Intelligence.
                </p>
<div class="flex gap-4">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
</div></div></div></footer>`
  },
  "marketing/contact": {
    bodyClass: "font-body-md text-on-surface",
    html: `
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
<nav class="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">Auralis AI</span>
<div class="hidden md:flex gap-6">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
</div>
</div>
<div class="flex items-center gap-4">
<button class="hidden md:block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4 py-2">Login</button>
<button class="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2.5 rounded-full hover:scale-95 active:scale-90 transition-transform shadow-sm">Get Started</button>
</div>
</nav>
</header>
<main class="pt-32 pb-stack-lg px-margin-desktop max-w-container-max mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
<!-- Left Side: Contact Form -->
<section class="flex flex-col gap-stack-lg" id="contact-canvas">
<div class="max-w-xl">
<span class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full font-label-sm text-label-sm mb-4">
<span class="w-2 h-2 rounded-full bg-secondary pulse-dot"></span>
                        Available for Onboarding
                    </span>
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-4">Experience the future of AI workflows.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Fill out the form below to book a personalized product walkthrough or inquire about enterprise custom solutions.</p>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-sm transition-all duration-500" id="contact-form-container">
<form class="flex flex-col gap-stack-md" id="demo-form" onsubmit="event.preventDefault(); showSuccessState();">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="flex flex-col gap-2">
<label class="font-label-md text-label-md text-on-surface" for="name">Full Name</label>
<input class="bg-surface-container border border-outline-variant rounded-xl p-3 font-body-md cyan-glow-focus transition-all" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-md text-label-md text-on-surface" for="email">Work Email</label>
<input class="bg-surface-container border border-outline-variant rounded-xl p-3 font-body-md cyan-glow-focus transition-all" id="email" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-md text-label-md text-on-surface" for="company_size">Company Size</label>
<select class="bg-surface-container border border-outline-variant rounded-xl p-3 font-body-md cyan-glow-focus transition-all appearance-none" id="company_size">
<option value="1-10">1 - 10 Employees</option>
<option value="11-50">11 - 50 Employees</option>
<option value="51-200">51 - 200 Employees</option>
<option value="201-500">201 - 500 Employees</option>
<option value="500+">500+ Employees</option>
</select>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-md text-label-md text-on-surface" for="message">Tell us about your needs</label>
<textarea class="bg-surface-container border border-outline-variant rounded-xl p-3 font-body-md cyan-glow-focus transition-all resize-none" id="message" placeholder="Briefly describe what you're looking to solve..." rows="4"></textarea>
</div>
<button class="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-xl mt-4 hover:scale-[0.98] active:scale-95 transition-all shadow-md font-bold tracking-wide uppercase" type="submit">
                            Book My Demo
                        </button>
<p class="font-label-sm text-label-sm text-center text-on-surface-variant">By submitting, you agree to our <a class="underline" href="#">Privacy Policy</a>.</p>
</form>
<!-- Success State (Hidden by default) -->
<div class="hidden flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500" id="success-state">
<div class="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-on-secondary-container text-4xl">check_circle</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-2">Request Received!</h3>
<p class="font-body-md text-body-md text-on-surface-variant max-w-sm">One of our specialists will reach out to your work email within the next 4 hours to finalize your demo time.</p>
<button class="mt-8 text-primary font-label-md border-b border-primary hover:pb-1 transition-all" onclick="resetForm()">Send another request</button>
</div>
</div>
</section>
<!-- Right Side: Trust & Demo Preview -->
<section class="flex flex-col gap-stack-lg lg:pl-12">
<!-- Trust Header -->
<div class="flex flex-col gap-6">
<p class="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">Trusted by 500+ Teams</p>
<div class="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<!-- Logo Placeholders -->
<div class="h-8 w-24 bg-on-surface-variant/20 rounded-md"></div>
<div class="h-8 w-28 bg-on-surface-variant/20 rounded-md"></div>
<div class="h-8 w-20 bg-on-surface-variant/20 rounded-md"></div>
<div class="h-8 w-24 bg-on-surface-variant/20 rounded-md"></div>
</div>
</div>
<!-- Demo Calendar Preview -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden relative interactive-hover transition-all duration-300">
<div class="bg-primary-container/20 p-4 border-b border-outline-variant flex justify-between items-center">
<span class="font-label-md text-label-md text-on-primary-container">Live Availability</span>
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-error/20"></div>
<div class="w-3 h-3 rounded-full bg-secondary-container"></div>
<div class="w-3 h-3 rounded-full bg-primary/20"></div>
</div>
</div>
<div class="p-6">
<div class="flex justify-between items-center mb-6">
<h4 class="font-headline-md text-on-surface">September 2024</h4>
<div class="flex gap-2">
<button class="p-1 hover:bg-surface-container rounded transition-colors"><span class="material-symbols-outlined">chevron_left</span></button>
<button class="p-1 hover:bg-surface-container rounded transition-colors"><span class="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<div class="grid grid-cols-7 gap-2 mb-8 text-center text-on-surface-variant font-label-sm">
<span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
<div class="h-10 flex items-center justify-center rounded-lg opacity-20">28</div>
<div class="h-10 flex items-center justify-center rounded-lg opacity-20">29</div>
<div class="h-10 flex items-center justify-center rounded-lg opacity-20">30</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">1</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">2</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">3</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">4</div>
<div class="h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">5</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">6</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">7</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">8</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">9</div>
<div class="h-10 flex items-center justify-center rounded-lg bg-primary-container text-on-primary-container font-bold">10</div>
<div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-container/10 cursor-pointer">11</div>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface-variant mb-1">Recommended Timeslots (PDT)</span>
<div class="flex gap-2">
<button class="flex-1 border border-primary text-primary py-2 rounded-lg font-label-md hover:bg-primary/5 transition-colors">09:00 AM</button>
<button class="flex-1 border border-outline-variant text-on-surface-variant py-2 rounded-lg font-label-md opacity-40 cursor-not-allowed">10:30 AM</button>
<button class="flex-1 border border-primary text-primary py-2 rounded-lg font-label-md hover:bg-primary/5 transition-colors">02:00 PM</button>
</div>
</div>
</div>
<!-- Subtle Glass Overlay to denote "Preview" -->
<div class="absolute inset-0 bg-surface/10 backdrop-blur-[1px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
<span class="bg-surface px-4 py-2 rounded-full border border-outline-variant shadow-lg font-label-md text-on-surface">Interactive Preview</span>
</div>
</div>
<!-- Testimonial -->
<div class="mt-8 border-t border-outline-variant pt-8">
<div class="flex gap-1 mb-4">
<span class="material-symbols-outlined text-secondary fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<blockquote class="font-headline-md text-on-surface mb-6 italic">
                        "Auralis AI didn't just automate our reports; it transformed how we understand our data in real-time. The onboarding demo was the most professional tool walkthrough I've attended in a decade."
                    </blockquote>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
<img class="w-full h-full object-cover" data-alt="Professional headshot of a middle-aged male CTO with a friendly expression, set against a blurred modern office background with soft bokeh lighting. The style is crisp, corporate photography with high-contrast tech aesthetics and natural daylighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ib-CO06qZIDctHZ762x3xK2S6oChLfsKd7hElRF_CJiRZaTDGekFFGEAPdtzBkA7giwLJJ2zqgWpYRxrmvhHK7UBIUSpm-eIkLgS7gsLJi2bbjVNfFD0Xw103gjKY6j4zNvRWQ02ycjk-SuJ9eH7o0QTCnfLlBj7lrDwRVlAvxpSDO-FhT3mhN8_6gbWI83MQK-xIYsb99Jtn0YAs8QGaXJHiSA03gdatxJaDz2liz48dzKKwbil"/>
</div>
<div>
<p class="font-label-md text-on-surface">Marcus Thorne</p>
<p class="font-label-sm text-on-surface-variant">CTO at Nexus Dynamics</p>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant relative w-full mt-stack-lg">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<div class="flex flex-col gap-4">
<span class="font-headline-md text-headline-md font-black text-on-surface">Auralis AI</span>
<p class="font-body-md text-body-md text-on-surface-variant">The future of autonomous intelligence for high-growth agencies and engineering teams.</p>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-md text-label-md text-primary font-bold uppercase">Product</h5>
<nav class="flex flex-col gap-2">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Features</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Pricing</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Integrations</a>
</nav>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-md text-label-md text-primary font-bold uppercase">Company</h5>
<nav class="flex flex-col gap-2">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Agency</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Contact</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">About Us</a>
</nav>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-md text-label-md text-primary font-bold uppercase">Legal</h5>
<nav class="flex flex-col gap-2">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all" href="#">Privacy Policy</a>
</nav>
</div>
</div>
<div class="border-t border-outline-variant/30 py-6 px-margin-desktop max-w-container-max mx-auto flex justify-between items-center">
<span class="font-label-sm text-label-sm text-on-surface-variant opacity-60">© 2024 Auralis AI. All rights reserved.</span>
<div class="flex gap-4">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
</div>
</div>
</footer>
<script>
        function showSuccessState() {
            const form = document.getElementById('demo-form');
            const success = document.getElementById('success-state');
            form.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
            setTimeout(() => {
                form.classList.add('hidden');
                success.classList.remove('hidden');
            }, 300);
        }

        function resetForm() {
            const form = document.getElementById('demo-form');
            const success = document.getElementById('success-state');
            success.classList.add('hidden');
            form.classList.remove('hidden', 'opacity-0', 'pointer-events-none', 'scale-95');
            form.reset();
        }
    </script>
`
  },
  "lms/lms-courses": {
    bodyClass: "font-body-md text-body-md overflow-x-hidden",
    html: `
<!-- Top Navigation Anchor -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-20 bg-surface/60 dark:bg-surface/60 backdrop-blur-xl border-b border-white/10">
<div class="flex items-center gap-stack-md">
<span class="text-headline-md font-display-lg font-bold text-primary dark:text-primary">Auralis LMS</span>
</div>
<div class="hidden md:flex items-center gap-gutter">
<a class="text-primary font-bold border-b-2 border-primary py-2 font-body-md text-body-md" href="#">Courses</a>
<a class="text-on-surface-variant hover:bg-white/5 transition-colors px-3 py-2 rounded font-body-md text-body-md" href="#">My Learning</a>
<a class="text-on-surface-variant hover:bg-white/5 transition-colors px-3 py-2 rounded font-body-md text-body-md" href="#">Resources</a>
</div>
<div class="flex items-center gap-stack-md">
<button class="material-symbols-outlined text-primary p-2 hover:bg-white/5 rounded-full transition-colors" data-icon="notifications">notifications</button>
<div class="w-10 h-10 rounded-full border border-primary/30 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a high-tech corporate executive or instructor in a modern, glass-walled office at night. Soft blue ambient lighting illuminates the sharp features of the subject, creating a polished and authoritative aesthetic. The background features blurred digital displays and architectural lines, emphasizing a premium, tech-focused educational environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHWgyIBKkl1nizzmFF6mQbzkZkERpiV-bINiwWQv5EUcwhjrpgy7Oq4uKZDlArcUaG1lkfLLIMqezZv6MnfV8dnVva-1Z0l3GNShK3jgttsq9TssMxDXcO5scR6PFZMvXvPgRvijGRR1WXonHvoHO8MXaW0SV2fKQZn3cZfKOuzo8jz1DsBBhPsSL-H9ros-aqKCNSceJrA-M2LtfS4tPldtcr3qJrobnG6Bn8iwp2_qcIHo73K9C1"/>
</div>
</div>
</header>
<main class="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<!-- Course Header Section -->
<section class="relative mb-12">
<div class="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
<div class="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
<div class="flex flex-col md:flex-row md:items-end justify-between gap-stack-lg">
<div class="space-y-stack-md">
<div class="flex items-center gap-2 text-secondary-fixed-dim font-label-caps text-label-caps">
<span class="material-symbols-outlined text-[18px]" data-icon="auto_awesome">auto_awesome</span>
                        ADVANCED CERTIFICATION
                    </div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Advanced AI Architectures</h1>
<div class="flex flex-wrap items-center gap-gutter text-on-surface-variant">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-tertiary" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-mono-data text-mono-data text-on-surface">4.9</span>
<span class="text-sm">(2.4k reviews)</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined" data-icon="schedule">schedule</span>
<span class="font-mono-data text-mono-data">24h total duration</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
<span class="font-mono-data text-mono-data">Advanced Level</span>
</div>
</div>
</div>
<div class="flex flex-col sm:flex-row items-center gap-stack-md">
<button class="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2">
                        Enroll Now
                        <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button class="w-full sm:w-auto px-8 py-4 border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
                        Save
                    </button>
</div>
</div>
</section>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Left Column: Content & Instructor -->
<div class="lg:col-span-8 space-y-gutter">
<!-- About This Course -->
<div class="glass-card p-8 rounded-2xl">
<h2 class="font-headline-md text-headline-md text-on-surface mb-stack-md">About this Course</h2>
<p class="text-on-surface-variant leading-relaxed mb-6">
                        Dive deep into the structural foundations of state-of-the-art neural networks. This course explores the evolution from simple Transformers to complex multi-modal architectures and Mixture-of-Experts (MoE) models. You will learn the mathematical principles and engineering constraints that define modern AI systems.
                    </p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary-fixed-dim" data-icon="check_circle">check_circle</span>
<span class="text-sm">Design scalable transformer-based architectures from scratch.</span>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary-fixed-dim" data-icon="check_circle">check_circle</span>
<span class="text-sm">Implement efficient training loops for large-scale models.</span>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary-fixed-dim" data-icon="check_circle">check_circle</span>
<span class="text-sm">Master quantization and pruning techniques for deployment.</span>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary-fixed-dim" data-icon="check_circle">check_circle</span>
<span class="text-sm">Understand the legal and ethical frameworks of AI design.</span>
</div>
</div>
</div>
<!-- Course Modules (Curriculum) -->
<div class="space-y-stack-md">
<h2 class="font-headline-md text-headline-md text-on-surface px-2">Course Curriculum</h2>
<!-- Module 1 -->
<div class="module-item glass-card rounded-xl overflow-hidden group active">
<button class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onclick="toggleModule(this)">
<div class="flex items-center gap-stack-md">
<span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary font-mono-data text-xs">01</span>
<div>
<h3 class="font-bold text-on-surface">The Transformer Evolution</h3>
<p class="text-xs text-on-surface-variant">4 Lessons • 4h 20m</p>
</div>
</div>
<span class="material-symbols-outlined module-chevron transition-transform duration-300" data-icon="chevron_right">chevron_right</span>
</button>
<div class="module-content border-t border-white/5">
<div class="p-4 space-y-2">
<div class="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-sm" data-icon="play_circle">play_circle</span>
<span class="text-sm">Attention Mechanisms Revisited</span>
</div>
<span class="font-mono-data text-xs text-on-surface-variant">1h 15m</span>
</div>
<div class="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-sm" data-icon="description">description</span>
<span class="text-sm">Research Paper: Vaswani et al. (PDF)</span>
</div>
<span class="font-label-caps text-[10px] bg-secondary-container/20 text-secondary-fixed-dim px-2 py-0.5 rounded">RESOURCE</span>
</div>
<div class="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-sm" data-icon="quiz">quiz</span>
<span class="text-sm">Module 1 Knowledge Assessment</span>
</div>
<span class="font-mono-data text-xs text-on-surface-variant">15 Questions</span>
</div>
</div>
</div>
</div>
<!-- Module 2 -->
<div class="module-item glass-card rounded-xl overflow-hidden group">
<button class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onclick="toggleModule(this)">
<div class="flex items-center gap-stack-md">
<span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary font-mono-data text-xs">02</span>
<div>
<h3 class="font-bold text-on-surface">Scaling Laws &amp; Multi-Modal Fusion</h3>
<p class="text-xs text-on-surface-variant">6 Lessons • 5h 45m</p>
</div>
</div>
<span class="material-symbols-outlined module-chevron transition-transform duration-300" data-icon="chevron_right">chevron_right</span>
</button>
<div class="module-content border-t border-white/5">
<div class="p-4 space-y-2">
<div class="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-sm" data-icon="lock">lock</span>
<span class="text-sm opacity-50">Image-Text Embedding Alignment</span>
</div>
</div>
</div>
</div>
</div>
<!-- Module 3 -->
<div class="module-item glass-card rounded-xl overflow-hidden group">
<button class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onclick="toggleModule(this)">
<div class="flex items-center gap-stack-md">
<span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary font-mono-data text-xs">03</span>
<div>
<h3 class="font-bold text-on-surface">Mixture of Experts (MoE) Implementation</h3>
<p class="text-xs text-on-surface-variant">5 Lessons • 6h 10m</p>
</div>
</div>
<span class="material-symbols-outlined module-chevron transition-transform duration-300" data-icon="chevron_right">chevron_right</span>
</button>
<div class="module-content border-t border-white/5">
<div class="p-4">
<p class="text-xs text-on-surface-variant italic">Enroll to unlock module content</p>
</div>
</div>
</div>
<!-- Module 4 -->
<div class="module-item glass-card rounded-xl overflow-hidden group">
<button class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onclick="toggleModule(this)">
<div class="flex items-center gap-stack-md">
<span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary font-mono-data text-xs">04</span>
<div>
<h3 class="font-bold text-on-surface">Memory Efficient Fine-Tuning (LoRA/QLoRA)</h3>
<p class="text-xs text-on-surface-variant">3 Lessons • 3h 30m</p>
</div>
</div>
<span class="material-symbols-outlined module-chevron transition-transform duration-300" data-icon="chevron_right">chevron_right</span>
</button>
<div class="module-content border-t border-white/5">
<div class="p-4"></div>
</div>
</div>
<!-- Module 5 -->
<div class="module-item glass-card rounded-xl overflow-hidden group">
<button class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onclick="toggleModule(this)">
<div class="flex items-center gap-stack-md">
<span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary font-mono-data text-xs">05</span>
<div>
<h3 class="font-bold text-on-surface">The Future of AI Architecture</h3>
<p class="text-xs text-on-surface-variant">2 Lessons • 2h 15m</p>
</div>
</div>
<span class="material-symbols-outlined module-chevron transition-transform duration-300" data-icon="chevron_right">chevron_right</span>
</button>
<div class="module-content border-t border-white/5">
<div class="p-4"></div>
</div>
</div>
</div>
</div>
<!-- Right Column: Instructor & Sidebar -->
<div class="lg:col-span-4 space-y-gutter">
<!-- Video Preview Card -->
<div class="glass-card rounded-2xl overflow-hidden group">
<div class="relative aspect-video bg-surface-container cursor-pointer">
<img class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="A high-resolution cinematic video thumbnail showing a dark, futuristic laboratory filled with holographic neural network visualizations. Complex webs of light connect floating data nodes in vibrant indigo and cyan colors. The scene is dimly lit, focusing on the intricate complexity of the digital brain structure, designed to inspire awe and curiosity for advanced AI learning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsATyQOsYb5H3ry4m-pg4wq26JIXFKZSweWei08OzRPLVU0LO_WBF2r6dq_NWdGYQiPen7fQty4RF7yAHa3oT6rdB4ymrkJvTvVBifMAZr9g0iohlq9qPCzWI7-XE0jDfyTKp9ffIVu6MlD51_Wrzz3yfyx3rLRk5Bb15aJj2exgoHIlnkb3xZi5dc2WvINsxvOBIv7HjRcHvUHOTSO921cgnF7LpZB9gD4oYHfJjemyT1IL2nDsZk"/>
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
<span class="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<div class="absolute bottom-4 left-4 font-label-caps text-[10px] text-white/70 bg-black/40 px-2 py-1 rounded">PREVIEW COURSE</div>
</div>
<div class="p-6 space-y-stack-md">
<div class="flex justify-between items-center">
<span class="font-display-lg text-headline-md text-on-surface">$499.00</span>
<span class="text-sm line-through text-on-surface-variant">$850.00</span>
</div>
<p class="text-xs text-on-surface-variant">Includes lifetime access, completion certificate, and private community invite.</p>
<button class="w-full py-4 bg-primary text-on-primary font-bold rounded-xl transition-transform active:scale-95">Enroll Now</button>
<div class="flex items-center justify-center gap-4 text-xs text-on-surface-variant">
<div class="flex items-center gap-1"><span class="material-symbols-outlined text-sm" data-icon="description">description</span> 12 Resources</div>
<div class="flex items-center gap-1"><span class="material-symbols-outlined text-sm" data-icon="workspace_premium">workspace_premium</span> Certificate</div>
</div>
</div>
</div>
<!-- Instructor Profile -->
<div class="glass-card p-6 rounded-2xl">
<h3 class="font-bold text-on-surface mb-stack-md">Instructor</h3>
<div class="flex items-center gap-stack-md mb-4">
<div class="w-16 h-16 rounded-2xl border border-primary/30 overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="A portrait of a male computer scientist in his early 40s, wearing minimalist dark clothing and glasses. He has a calm, intelligent expression and is posed against a backdrop of a sophisticated server room with glowing blue indicator lights. The lighting is soft and focused, portraying a world-class expert in artificial intelligence and deep learning architectures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVCwuqbRX22mZiTxRZ69QO0Q-soWo2q5haiX_RsEGnWhu-aUnT4P82TCL5FU_GMcxUy2xWBDZ-woaokplpMnEO7Ydmj2Yf4jbIaIGhv5KpqY9i7t2EwBwH3tQaziO7peg0axipKKnumn6JAcjefsgAtt27kQyIw4MatGw46ivb37X_l31EteKeh4UOgnjtvuYFDu0rf5JEL9WrcxSKGCQ7zODmu5Rwf2JnGqHm7CFGWQO--RR7ZtXI"/>
</div>
<div>
<h4 class="font-headline-md text-body-lg font-bold text-on-surface">Dr. Aris Vance</h4>
<p class="text-xs text-secondary-fixed-dim">Chief AI Architect @ Auralis Labs</p>
</div>
</div>
<p class="text-sm text-on-surface-variant mb-6 line-clamp-3">
                        Dr. Vance has over 15 years of experience in deep learning research. He led the architecture team for the Helios LLM series and has published 40+ papers in NeurIPS and ICML.
                    </p>
<div class="flex items-center justify-between border-t border-white/5 pt-4">
<div class="text-center">
<p class="text-lg font-bold text-on-surface">4.9</p>
<p class="text-[10px] text-on-surface-variant font-label-caps">RATING</p>
</div>
<div class="text-center">
<p class="text-lg font-bold text-on-surface">15k</p>
<p class="text-[10px] text-on-surface-variant font-label-caps">STUDENTS</p>
</div>
<div class="text-center">
<p class="text-lg font-bold text-on-surface">12</p>
<p class="text-[10px] text-on-surface-variant font-label-caps">COURSES</p>
</div>
</div>
</div>
<!-- Statistics Sidebar Card -->
<div class="glass-card p-6 rounded-2xl">
<h3 class="font-bold text-on-surface mb-stack-md">Course Metrics</h3>
<div class="space-y-4">
<div class="flex justify-between items-center">
<span class="text-sm text-on-surface-variant">Enrollment Trend</span>
<span class="text-xs font-mono-data text-secondary-fixed-dim">+12% this week</span>
</div>
<!-- Simple Sparkline SVG via CSS Drawing -->
<div class="h-12 w-full flex items-end gap-1 px-1">
<div class="flex-1 bg-primary/20 rounded-t-sm" style="height: 40%"></div>
<div class="flex-1 bg-primary/20 rounded-t-sm" style="height: 60%"></div>
<div class="flex-1 bg-primary/20 rounded-t-sm" style="height: 50%"></div>
<div class="flex-1 bg-primary/20 rounded-t-sm" style="height: 80%"></div>
<div class="flex-1 bg-primary/40 rounded-t-sm" style="height: 70%"></div>
<div class="flex-1 bg-primary/60 rounded-t-sm" style="height: 90%"></div>
<div class="flex-1 bg-primary/80 rounded-t-sm" style="height: 100%"></div>
</div>
<div class="grid grid-cols-2 gap-4 pt-2">
<div class="p-3 bg-white/5 rounded-xl border border-white/5">
<p class="text-[10px] text-on-surface-variant font-label-caps">LAST UPDATE</p>
<p class="text-sm font-bold text-on-surface">Oct 2023</p>
</div>
<div class="p-3 bg-white/5 rounded-xl border border-white/5">
<p class="text-[10px] text-on-surface-variant font-label-caps">LANGUAGE</p>
<p class="text-sm font-bold text-on-surface">English</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer Space -->
<footer class="py-12 border-t border-white/5 text-center">
<p class="text-on-surface-variant text-sm">© 2024 Auralis LMS. All rights reserved.</p>
</footer>
<script>
        function toggleModule(button) {
            const moduleItem = button.parentElement;
            const isOpen = moduleItem.classList.contains('active');
            
            // Close all other modules
            document.querySelectorAll('.module-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current
            if (!isOpen) {
                moduleItem.classList.add('active');
            }
        }

        // Active State Logic for Navigation
        document.querySelectorAll('header a').forEach(link => {
            if (link.textContent.trim() === 'Courses') {
                link.className = "text-primary font-bold border-b-2 border-primary py-2 font-body-md text-body-md";
            } else {
                link.className = "text-on-surface-variant hover:bg-white/5 transition-colors px-3 py-2 rounded font-body-md text-body-md";
            }
        });
    </script>
`
  },
  "dashboard/crm-dashboard": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- SIDE NAV BAR -->
<aside class="fixed left-0 top-0 h-full z-40 bg-surface-container-lowest border-r border-outline-variant w-64 flex flex-col shadow-sm">
<div class="px-6 py-8">
<div class="flex items-center gap-3 mb-10">
<div class="w-10 h-10 bg-primary flex items-center justify-center rounded-xl text-on-primary">
<span class="material-symbols-outlined text-[24px]">auto_awesome</span>
</div>
<div>
<h1 class="font-display-lg text-headline-md font-extrabold text-on-surface">Auralis AI</h1>
<p class="font-label-sm text-on-surface-variant opacity-70">Premium Agency Hub</p>
</div>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined">monitoring</span>
<span class="font-label-md">Analytics</span>
</a>
<!-- Active Tab -->
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl font-bold" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
<span class="font-label-md">CRM</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined">auto_awesome</span>
<span class="font-label-md">Workflows</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined">business_center</span>
<span class="font-label-md">Agency</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md">Settings</span>
</a>
</nav>
</div>
<div class="mt-auto px-6 py-6 border-t border-outline-variant/30">
<button class="w-full py-3 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 scale-98 active:opacity-80 transition-transform mb-6">
<span class="material-symbols-outlined">add</span>
<span>New Project</span>
</button>
<div class="space-y-1">
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-md">Help Center</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">account_circle</span>
<span class="font-label-md">Account</span>
</a>
</div>
</div>
</aside>
<!-- TOP NAV BAR -->
<header class="sticky top-0 right-0 w-full z-30 flex justify-between items-center px-margin-desktop ml-64 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div class="flex items-center gap-4">
<div class="relative group">
<span class="absolute inset-y-0 left-3 flex items-center text-outline">
<span class="material-symbols-outlined text-[20px]">search</span>
</span>
<input class="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-container/50 w-64 transition-all" placeholder="Search leads, pipelines..." type="text"/>
</div>
<nav class="hidden md:flex items-center gap-6 ml-8">
<a class="text-on-surface-variant hover:text-on-surface font-label-md transition-colors" href="#">Overview</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-md" href="#">Metrics</a>
<a class="text-on-surface-variant hover:text-on-surface font-label-md transition-colors" href="#">Pipeline</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 pr-4 border-r border-outline-variant/50">
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">chat_bubble</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">apps</span>
</button>
</div>
<div class="flex items-center gap-3 pl-2">
<div class="text-right hidden lg:block">
<p class="font-label-md text-on-surface leading-tight">Alex Rivera</p>
<p class="font-label-sm text-on-surface-variant opacity-70">Senior Partner</p>
</div>
<div class="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary-container" data-alt="A professional headshot of a Hispanic male in his late 30s with a kind, intelligent expression, wearing a tailored navy blazer. The background is a blurred high-end corporate office with soft, warm lighting. The overall style is clean, sharp, and premium, fitting a luxury AI SaaS aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdMPwIRBfF016lR9OKvjQsFfvXmRPRKmu-4aPcBVmRZt_1BCeiVeG-k-taHRWsPyQ1it1Gjml_8Og4Q5yhkqUaMd6xLC26pUO5ZZdBMKUI1t4Au9YvrYBsfsF18BW7xwMtrfuBM9MLrfVQa0Hd-j6Ljt-Hgr5JBevnMW15soDr4dM3nKRFGsVmbg1T0Neiwclg-6rY2G9XeoZ5M99N4a-CMTbr5TuT5TYyYq-TN3s8CA9y9reiFBJF')"></div>
</div>
</div>
</header>
<!-- MAIN CONTENT -->
<main class="ml-64 p-margin-desktop space-y-stack-lg max-w-container-max mx-auto">
<!-- BREADCRUMBS & HEADER -->
<section class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<nav class="flex items-center gap-2 text-on-surface-variant font-label-sm mb-2">
<a class="hover:text-primary transition-colors" href="#">Dashboard</a>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-on-surface font-semibold">CRM</span>
</nav>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Client Relationship Management</h2>
</div>
<div class="flex gap-3">
<button class="px-5 py-2.5 bg-surface-container-lowest border border-outline-variant text-on-surface font-bold rounded-xl flex items-center gap-2 hover:bg-surface-container transition-all scale-98">
<span class="material-symbols-outlined">download</span>
<span>Export Report</span>
</button>
<button class="px-5 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center gap-2 hover:opacity-90 transition-all scale-98 shadow-sm">
<span class="material-symbols-outlined">person_add</span>
<span>Quick Add Lead</span>
</button>
</div>
</section>
<!-- PIPELINE OVERVIEW -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Discovery -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 top-signal shadow-soft">
<div class="flex justify-between items-center mb-4">
<span class="font-label-md text-on-surface-variant uppercase tracking-wider">Discovery</span>
<span class="bg-surface-container px-2 py-0.5 rounded-full font-label-sm">12 Leads</span>
</div>
<div class="flex items-baseline gap-2">
<p class="font-display-lg text-headline-lg text-on-surface">$24.5k</p>
<p class="text-secondary font-label-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span> 8%
                    </p>
</div>
<div class="mt-4 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 65%;"></div>
</div>
</div>
<!-- Proposal -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-soft">
<div class="flex justify-between items-center mb-4">
<span class="font-label-md text-on-surface-variant uppercase tracking-wider">Proposal</span>
<span class="bg-surface-container px-2 py-0.5 rounded-full font-label-sm">8 Leads</span>
</div>
<div class="flex items-baseline gap-2">
<p class="font-display-lg text-headline-lg text-on-surface">$112.0k</p>
<p class="text-secondary font-label-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span> 14%
                    </p>
</div>
<div class="mt-4 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 40%;"></div>
</div>
</div>
<!-- Negotiation -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-soft">
<div class="flex justify-between items-center mb-4">
<span class="font-label-md text-on-surface-variant uppercase tracking-wider">Negotiation</span>
<span class="bg-surface-container px-2 py-0.5 rounded-full font-label-sm">5 Leads</span>
</div>
<div class="flex items-baseline gap-2">
<p class="font-display-lg text-headline-lg text-on-surface">$89.2k</p>
<p class="text-error font-label-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">trending_down</span> 3%
                    </p>
</div>
<div class="mt-4 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 30%;"></div>
</div>
</div>
<!-- Closed -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-soft">
<div class="flex justify-between items-center mb-4">
<span class="font-label-md text-on-surface-variant uppercase tracking-wider">Closed</span>
<span class="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-label-sm">22 Won</span>
</div>
<div class="flex items-baseline gap-2">
<p class="font-display-lg text-headline-lg text-on-surface">$450.8k</p>
<p class="text-secondary font-label-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">stars</span> Target Reached
                    </p>
</div>
<div class="mt-4 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 100%;"></div>
</div>
</div>
</section>
<div class="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
<!-- LEADS TABLE (Bento Grid Main Area) -->
<div class="xl:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-soft">
<div class="px-6 py-5 border-b border-outline-variant flex items-center justify-between bg-surface-bright/50">
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Leads</h3>
<div class="flex gap-2">
<button class="p-2 hover:bg-surface-container rounded-lg transition-colors">
<span class="material-symbols-outlined">filter_list</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-lg transition-colors">
<span class="material-symbols-outlined">sort</span>
</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low border-b border-outline-variant">
<th class="px-6 py-4 font-label-md text-on-surface-variant">Name</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Company</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">AI Score</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Status</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant">Last Contact</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/30">
<!-- Lead 1 -->
<tr class="hover:bg-surface transition-colors cursor-pointer group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">SK</div>
<div>
<p class="font-label-md text-on-surface group-hover:text-primary transition-colors">Sarah Kincaid</p>
<p class="text-xs text-on-surface-variant">sarah.k@lumina.io</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-on-surface font-body-md">Lumina Tech</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full font-bold text-xs flex items-center gap-1 w-fit">
<span class="material-symbols-outlined text-[14px]">bolt</span> 98%
                                    </span>
</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full font-bold text-xs">Qualified</span>
</td>
<td class="px-6 py-5 text-on-surface-variant text-sm">2 hours ago</td>
</tr>
<!-- Lead 2 -->
<tr class="hover:bg-surface transition-colors cursor-pointer group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xs">MB</div>
<div>
<p class="font-label-md text-on-surface group-hover:text-primary transition-colors">Marcus Benning</p>
<p class="text-xs text-on-surface-variant">m.benning@vertex.com</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-on-surface font-body-md">Vertex Corp</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full font-bold text-xs flex items-center gap-1 w-fit">
<span class="material-symbols-outlined text-[14px]">bolt</span> 84%
                                    </span>
</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full font-bold text-xs">Contacted</span>
</td>
<td class="px-6 py-5 text-on-surface-variant text-sm">Yesterday</td>
</tr>
<!-- Lead 3 -->
<tr class="hover:bg-surface transition-colors cursor-pointer group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">AL</div>
<div>
<p class="font-label-md text-on-surface group-hover:text-primary transition-colors">Aria Lowery</p>
<p class="text-xs text-on-surface-variant">aria@nexus.design</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-on-surface font-body-md">Nexus Design</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-surface-container-low text-outline rounded-full font-bold text-xs flex items-center gap-1 w-fit">
<span class="material-symbols-outlined text-[14px]">bolt</span> 42%
                                    </span>
</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full font-bold text-xs">Lead</span>
</td>
<td class="px-6 py-5 text-on-surface-variant text-sm">3 days ago</td>
</tr>
<!-- Lead 4 -->
<tr class="hover:bg-surface transition-colors cursor-pointer group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">DO</div>
<div>
<p class="font-label-md text-on-surface group-hover:text-primary transition-colors">Daniel O'Connell</p>
<p class="text-xs text-on-surface-variant">dan@quantum.ai</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-on-surface font-body-md">Quantum AI</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full font-bold text-xs flex items-center gap-1 w-fit">
<span class="material-symbols-outlined text-[14px]">bolt</span> 91%
                                    </span>
</td>
<td class="px-6 py-5">
<span class="px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full font-bold text-xs">Qualified</span>
</td>
<td class="px-6 py-5 text-on-surface-variant text-sm">1 hour ago</td>
</tr>
</tbody>
</table>
</div>
<div class="px-6 py-4 border-t border-outline-variant bg-surface-bright/30 text-center">
<button class="text-primary font-bold text-sm hover:underline transition-all">View All CRM Records</button>
</div>
</div>
<!-- SIDE ACTIONS & TASKS -->
<div class="space-y-gutter">
<!-- Follow-up Task Cards -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-soft">
<div class="flex items-center justify-between mb-6">
<h3 class="font-headline-md text-headline-md text-on-surface">Action Items</h3>
<span class="bg-error-container text-on-error-container px-2 py-0.5 rounded font-label-sm">3 High</span>
</div>
<div class="space-y-4">
<!-- Task 1 -->
<div class="p-4 bg-surface rounded-xl border-l-4 border-error flex gap-4 hover:translate-x-1 transition-transform cursor-pointer">
<div class="flex-shrink-0 pt-1">
<span class="material-symbols-outlined text-error">assignment_late</span>
</div>
<div>
<p class="font-label-md text-on-surface">Send Proposal to Sarah K.</p>
<p class="text-xs text-on-surface-variant mt-1">Due today, 5:00 PM</p>
</div>
</div>
<!-- Task 2 -->
<div class="p-4 bg-surface rounded-xl border-l-4 border-primary flex gap-4 hover:translate-x-1 transition-transform cursor-pointer">
<div class="flex-shrink-0 pt-1">
<span class="material-symbols-outlined text-primary">call</span>
</div>
<div>
<p class="font-label-md text-on-surface">Discovery call with Vertex</p>
<p class="text-xs text-on-surface-variant mt-1">Tomorrow, 10:30 AM</p>
</div>
</div>
<!-- Task 3 -->
<div class="p-4 bg-surface rounded-xl border-l-4 border-outline-variant flex gap-4 hover:translate-x-1 transition-transform cursor-pointer opacity-70">
<div class="flex-shrink-0 pt-1">
<span class="material-symbols-outlined">schedule</span>
</div>
<div>
<p class="font-label-md text-on-surface">Nurture sequence: Nexus Design</p>
<p class="text-xs text-on-surface-variant mt-1">Scheduled for Friday</p>
</div>
</div>
</div>
<button class="w-full mt-6 py-3 border border-dashed border-outline-variant rounded-xl text-on-surface-variant font-label-md hover:bg-surface transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">add_task</span>
<span>Create Task</span>
</button>
</div>
<!-- AI Insights Card -->
<div class="bg-inverse-surface text-inverse-on-surface rounded-2xl p-6 shadow-xl relative overflow-hidden">
<!-- Subtle AI Glow -->
<div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
<div class="relative z-10">
<div class="flex items-center gap-2 mb-4">
<div class="pulse-dot"></div>
<span class="font-label-sm uppercase tracking-widest opacity-80">AI Insight Engine</span>
</div>
<p class="font-headline-sm text-headline-sm mb-2">High Conversion Probability</p>
<p class="text-sm opacity-70 mb-6">Quantum AI's engagement score increased by 40% this week. We suggest sending the 'Automated Workflow' case study now.</p>
<button class="px-4 py-2 bg-primary-container text-on-primary-container font-bold rounded-lg text-sm flex items-center gap-2 hover:brightness-110 transition-all">
                            Generate Message
                            <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
</button>
</div>
</div>
</div>
</div>
</main>
<!-- FAB (SUPPRESSED ON CRM DETAILS, BUT SHOWN ON DASHBOARD/MAIN CRM) -->
<button class="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
<span class="material-symbols-outlined text-[28px] group-hover:rotate-90 transition-transform duration-300">add</span>
</button>
<script>
        // Micro-interactions and effects
        document.querySelectorAll('tr').forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.boxShadow = 'inset 4px 0 0 0 #006875';
            });
            row.addEventListener('mouseleave', () => {
                row.style.boxShadow = 'none';
            });
        });

        // Simple Search Filter Simulation
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    </script>
`
  },
  "dashboard/home-mobile": {
    bodyClass: "flex flex-col min-h-screen",
    html: `
<!-- TopAppBar -->
<header class="fixed top-0 w-full bg-surface/80 backdrop-blur-md z-50 flex justify-between items-center px-4 h-16 border-b border-outline-variant/30 shadow-sm">
<div class="flex items-center gap-3">
<button class="active:scale-95 transition-transform">
<span class="material-symbols-outlined text-primary">menu</span>
</button>
<h1 class="font-headline-md text-headline-md font-bold text-on-background">Auralis AI</h1>
</div>
<div class="flex items-center gap-3">
<div class="flex items-center bg-secondary-container/20 px-2 py-1 rounded-full gap-2">
<div class="pulse-dot"></div>
<span class="font-label-sm text-[10px] font-bold text-secondary tracking-wider uppercase">Optimal</span>
</div>
<div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A clean, high-resolution portrait of a professional woman with a minimalist tech background. She is looking directly at the camera with a confident expression. The lighting is soft and neutral, fitting a light-mode corporate aesthetic. The background features subtle geometric shapes in soft blue and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGkewMlG4gBLSZX6gDCHOSuA40GsRRTemKl3q8CITr3QSnvatxx1OqYA-yxNncUNRF8BSsuL4IieeOLEIIctQFSF4QWT5QrY6AM6b3nZ4j0qseuOr_efkLaU-FFNlgDy6Z2UHYbezHiqiGoI2C2z09IoiKwrYqbrhb3vQ0SWAfQSTxejYzHUxtQgp5wuLWCW69Qvotk8EBjeRgnk2Pvy8eQBYilp-KF0Be-ecq7d6pN3DqUW6C8wId"/>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="flex-grow pt-20 pb-24 px-4 space-y-6 overflow-y-auto custom-scrollbar">
<!-- Welcome Message -->
<section class="space-y-1">
<p class="font-body-md text-on-surface-variant">Hello, Alex</p>
<h2 class="font-headline-lg text-headline-lg font-bold text-on-background">System Overview</h2>
</section>
<!-- Bento Grid Metrics -->
<section class="grid grid-cols-2 gap-4">
<!-- Token Usage Card -->
<div class="bento-card ai-signal-border p-4 flex flex-col justify-between aspect-square">
<div>
<span class="material-symbols-outlined text-primary mb-2">database</span>
<h3 class="font-label-md text-on-surface-variant">Token Usage</h3>
</div>
<div>
<p class="font-headline-md text-headline-md font-bold">1.2M</p>
<div class="flex items-center text-secondary gap-1 mt-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span>
<span class="font-label-sm text-[11px]">+12%</span>
</div>
</div>
</div>
<!-- Workflow Runs Card -->
<div class="bento-card p-4 flex flex-col justify-between aspect-square">
<div>
<span class="material-symbols-outlined text-primary mb-2">alt_route</span>
<h3 class="font-label-md text-on-surface-variant">Workflows</h3>
</div>
<div>
<p class="font-headline-md text-headline-md font-bold">842</p>
<p class="font-label-sm text-on-surface-variant text-[11px] mt-1">Last 24 hours</p>
</div>
</div>
<!-- Efficiency Card (Wide) -->
<div class="bento-card col-span-2 p-5 flex items-center justify-between">
<div class="space-y-1">
<h3 class="font-label-md text-on-surface-variant">Inference Latency</h3>
<p class="font-headline-md text-headline-md font-bold">240ms</p>
</div>
<div class="w-24 h-12 relative">
<!-- Simple visualization of a sparkline -->
<svg class="w-full h-full text-primary-container fill-none stroke-current stroke-2" viewbox="0 0 100 40">
<path d="M0 35 Q 20 10 40 25 T 100 5" stroke-linecap="round"></path>
</svg>
</div>
</div>
</section>
<!-- Recent Activity Section -->
<section class="space-y-4">
<div class="flex justify-between items-end">
<h2 class="font-headline-md text-headline-md font-bold text-on-background">Recent Tasks</h2>
<button class="font-label-md text-primary hover:opacity-80 transition-opacity">View All</button>
</div>
<div class="space-y-3">
<!-- Task Item 1 -->
<div class="bento-card p-4 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">smart_toy</span>
</div>
<div>
<p class="font-label-md text-on-surface font-semibold">Semantic Search Gen</p>
<p class="font-label-sm text-on-surface-variant text-[12px]">Agent #402 • 2m ago</p>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<div class="bg-secondary-container/10 px-2 py-0.5 rounded-full flex items-center gap-1">
<div class="w-1.5 h-1.5 bg-secondary rounded-full"></div>
<span class="font-label-sm text-[10px] font-bold text-secondary">SUCCESS</span>
</div>
<span class="font-label-sm text-[11px] text-on-surface-variant">0.4s</span>
</div>
</div>
<!-- Task Item 2 -->
<div class="bento-card p-4 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">summarize</span>
</div>
<div>
<p class="font-label-md text-on-surface font-semibold">PDF Batch Digest</p>
<p class="font-label-sm text-on-surface-variant text-[12px]">Agent #811 • 15m ago</p>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<div class="bg-secondary-container/10 px-2 py-0.5 rounded-full flex items-center gap-1">
<div class="w-1.5 h-1.5 bg-secondary rounded-full"></div>
<span class="font-label-sm text-[10px] font-bold text-secondary">SUCCESS</span>
</div>
<span class="font-label-sm text-[11px] text-on-surface-variant">2.1s</span>
</div>
</div>
<!-- Task Item 3 (Processing) -->
<div class="bento-card p-4 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary relative">
<span class="material-symbols-outlined">neurology</span>
</div>
<div>
<p class="font-label-md text-on-surface font-semibold">Vector Indexing</p>
<p class="font-label-sm text-on-surface-variant text-[12px]">Agent #229 • Active</p>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<div class="bg-primary-container/10 px-2 py-0.5 rounded-full flex items-center gap-1">
<span class="font-label-sm text-[10px] font-bold text-primary animate-pulse">PROCESSING</span>
</div>
</div>
</div>
</div>
</section>
<!-- System Intelligence Placeholder (Animated) -->
<section class="relative h-32 rounded-2xl overflow-hidden bg-on-background mt-4 group">

<div class="absolute inset-0 flex flex-col justify-center px-6 z-10 pointer-events-none">
<p class="font-label-sm text-primary-container uppercase tracking-widest font-bold">Auralis Neural Engine</p>
<p class="font-headline-md text-surface-bright font-bold">Self-Optimizing Flux</p>
</div>
<div class="absolute right-4 bottom-4 z-10">
<button class="bg-primary-container text-on-primary-container px-4 py-2 rounded-xl font-label-md font-bold shadow-lg active:scale-95 transition-all">
                    Settings
                </button>
</div>
</section>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-6 px-4 bg-surface/90 backdrop-blur-lg border-t border-outline-variant/20 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl">
<a class="flex flex-col items-center justify-center text-on-surface-variant transition-all hover:text-primary active:scale-90" href="#">
<span class="material-symbols-outlined mb-1">home</span>
<span class="font-label-sm text-[10px]">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold bg-primary-container/10 rounded-xl px-4 py-2 transition-all active:scale-90" href="#">
<span class="material-symbols-outlined mb-1">dashboard</span>
<span class="font-label-sm text-[10px]">Dash</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant transition-all hover:text-primary active:scale-90" href="#">
<span class="material-symbols-outlined mb-1">payments</span>
<span class="font-label-sm text-[10px]">Billing</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant transition-all hover:text-primary active:scale-90" href="#">
<span class="material-symbols-outlined mb-1">settings</span>
<span class="font-label-sm text-[10px]">Settings</span>
</a>
</nav>
<!-- Micro-interaction Script -->
<script>
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.bento-card');
            cards.forEach(card => {
                card.addEventListener('touchstart', () => {
                    card.style.backgroundColor = '#f8fafc';
                });
                card.addEventListener('touchend', () => {
                    card.style.backgroundColor = '#ffffff';
                });
            });
        });
    </script>
`
  },
  "docs/documentation": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar (Shared Component) -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<nav class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="flex items-center gap-8">
<a class="font-display-lg text-headline-md font-extrabold text-on-surface dark:text-on-background tracking-tighter" href="/">Auralis AI</a>
<div class="hidden md:flex items-center gap-6">
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-primary font-bold border-b-2 border-primary-fixed-dim pb-1" href="#">Documentation</a>
</div>
</div>
<div class="flex items-center gap-stack-md">
<button class="px-6 py-2.5 rounded-full font-label-md bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-surface-container-low transition-all">Login</button>
<button class="px-6 py-2.5 rounded-full font-label-md bg-primary-container text-on-primary-container shadow-sm hover:scale-[1.02] active:scale-95 transition-all">Get Started</button>
</div>
</nav>
</header>
<div class="pt-20 flex min-h-screen max-w-container-max mx-auto px-margin-desktop gap-gutter">
<!-- Sidebar Navigation -->
<aside class="hidden lg:flex flex-col w-72 shrink-0 border-r border-outline-variant/20 pt-stack-lg sticky top-20 h-[calc(100vh-80px)] pr-stack-md">
<!-- Search Bar -->
<div class="relative mb-stack-lg">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 pl-10 pr-4 font-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all" placeholder="Search documentation..." type="text"/>
</div>
<div class="sidebar-scroll overflow-y-auto flex-1 pb-stack-lg">
<div class="space-y-stack-lg">
<!-- Getting Started -->
<div>
<h4 class="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px] mb-4">Getting Started</h4>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-container/20 text-primary font-semibold" href="#">Introduction</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Quickstart</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Installation</a></li>
</ul>
</div>
<!-- Configuration -->
<div>
<h4 class="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px] mb-4">Configuration</h4>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Project Setup</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Environment Variables</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Deployment</a></li>
</ul>
</div>
<!-- Components -->
<div>
<h4 class="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px] mb-4">Components</h4>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Theming Cluster</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">AI Provider Wrappers</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Layout Shells</a></li>
</ul>
</div>
<!-- Advanced -->
<div>
<h4 class="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px] mb-4">Advanced</h4>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Custom Adapters</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Performance Tuning</a></li>
</ul>
</div>
<!-- Support -->
<div>
<h4 class="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px] mb-4">Support</h4>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Help Center</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">Community Discord</a></li>
</ul>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 pt-stack-lg pb-stack-lg overflow-x-hidden">
<section class="max-w-[800px]">
<!-- Breadcrumbs -->
<nav class="flex items-center gap-2 text-label-md text-on-surface-variant mb-6">
<span>Docs</span>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-primary font-semibold">Introduction</span>
</nav>
<!-- Introduction Section -->
<article class="mb-16" id="introduction">
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-6">Introduction</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                        Auralis AI is a high-performance framework designed for building enterprise-grade generative AI interfaces with speed and precision. We combine React's reactivity with optimized model-streaming architectures to deliver tactile user experiences.
                    </p>
<!-- Feature Claims -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
<div class="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl border-t-2 border-t-primary-container shadow-sm">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">bolt</span>
<h3 class="font-headline-md text-label-md text-on-surface">Zero-Latency Streaming</h3>
</div>
<p class="text-label-md text-on-surface-variant">Optimized Vercel AI SDK integration for real-time token delivery.</p>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl border-t-2 border-t-secondary-container shadow-sm">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">palette</span>
<h3 class="font-headline-md text-label-md text-on-surface">Atomic Design Tokens</h3>
</div>
<p class="text-label-md text-on-surface-variant">Theme-ready components with strict adherence to 8pt grid systems.</p>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl border-t-2 border-t-tertiary-container shadow-sm">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">security</span>
<h3 class="font-headline-md text-label-md text-on-surface">Enterprise Security</h3>
</div>
<p class="text-label-md text-on-surface-variant">Standardized middleware for OAuth2 and RBAC management.</p>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl border-t-2 border-t-primary shadow-sm">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">hub</span>
<h3 class="font-headline-md text-label-md text-on-surface">Multi-Model Agnostic</h3>
</div>
<p class="text-label-md text-on-surface-variant">Seamlessly switch between OpenAI, Anthropic, and Llama 3.</p>
</div>
</div>
</article>
<!-- Installation Section -->
<article class="mb-16" id="installation">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
<span class="w-10 h-10 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center font-display-lg text-[20px]">1</span>
                        Installation
                    </h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">
                        The easiest way to get started with Auralis AI is using our CLI tool which bootstraps a fully-configured Next.js environment.
                    </p>
<div class="code-block group mb-6">
<div class="absolute right-4 top-4 flex gap-2">
<button class="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" title="Copy code">
<span class="material-symbols-outlined text-[18px]">content_copy</span>
</button>
</div>
<pre><code><span class="token-comment"># Install via npm</span>
<span class="token-keyword">npm</span> install @auralis/core @auralis/ui

<span class="token-comment"># Or use our quickstart CLI</span>
<span class="token-keyword">npx</span> auralis-init my-agent-app --template default</code></pre>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">
                        Initialize the client-side provider in your root layout:
                    </p>
<div class="code-block group">
<pre><code><span class="token-keyword">import</span> { AuralisProvider } <span class="token-keyword">from</span> <span class="token-string">'@auralis/core'</span>;

<span class="token-keyword">export default function</span> <span class="token-function">RootLayout</span>({ children }) {
  <span class="token-keyword">return</span> (
    &lt;<span class="token-keyword">html</span>&gt;
      &lt;<span class="token-keyword">body</span>&gt;
        &lt;<span class="token-keyword">AuralisProvider</span> apiKey={process.env.AURALIS_KEY}&gt;
          {children}
        &lt;/<span class="token-keyword">AuralisProvider</span>&gt;
      &lt;/<span class="token-keyword">body</span>&gt;
    &lt;/<span class="token-keyword">html</span>&gt;
  );
}</code></pre>
</div>
</article>
<!-- Folder Structure Section -->
<article class="mb-16" id="folder-structure">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
<span class="w-10 h-10 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center font-display-lg text-[20px]">2</span>
                        Folder Structure
                    </h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">
                        Our recommended structure ensures separation of concerns between AI logic, presentation layers, and API routes.
                    </p>
<div class="bg-surface-container-low rounded-2xl p-stack-lg border border-outline-variant/50">
<div class="space-y-4">
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary mt-1">folder_open</span>
<div>
<span class="font-bold text-on-surface">src/app</span>
<p class="text-label-md text-on-surface-variant">Main Next.js App Router directory for pages and layouts.</p>
</div>
</div>
<div class="flex items-start gap-4 ml-8 border-l-2 border-outline-variant pl-6">
<span class="material-symbols-outlined text-secondary mt-1">folder</span>
<div>
<span class="font-bold text-on-surface">api/auralis</span>
<p class="text-label-md text-on-surface-variant">Route handlers for model interaction and streaming.</p>
</div>
</div>
<div class="flex items-start gap-4 ml-8 border-l-2 border-outline-variant pl-6">
<span class="material-symbols-outlined text-tertiary mt-1">folder</span>
<div>
<span class="font-bold text-on-surface">components/ai</span>
<p class="text-label-md text-on-surface-variant">Tactile UI components like ChatPanels, StreamInputs, and BentoGrids.</p>
</div>
</div>
<div class="flex items-start gap-4 ml-8 border-l-2 border-outline-variant pl-6">
<span class="material-symbols-outlined text-on-surface-variant mt-1">folder</span>
<div>
<span class="font-bold text-on-surface">lib/agents</span>
<p class="text-label-md text-on-surface-variant">Domain-specific agent logic and custom tool definitions.</p>
</div>
</div>
</div>
</div>
</article>
<!-- Next Steps Footer Callout -->
<div class="bg-primary text-on-primary rounded-3xl p-stack-lg flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
<!-- Subtle background decoration -->
<div class="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-20 blur-3xl -mr-16 -mt-16"></div>
<div class="z-10">
<h3 class="font-headline-md text-headline-md mb-2">Ready to go deeper?</h3>
<p class="font-body-md opacity-90">Explore our UI Library to start building beautiful interfaces.</p>
</div>
<a class="z-10 px-8 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl hover:shadow-lg transition-all active:scale-95" href="#">Explore Components</a>
</div>
</section>
</main>
<!-- Right Side: On This Page (Mini Nav) -->
<aside class="hidden xl:block w-56 shrink-0 pt-stack-lg sticky top-20 h-fit pl-stack-md">
<h4 class="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px] mb-6">On This Page</h4>
<nav class="space-y-4 text-label-md">
<a class="block text-primary font-semibold border-l-2 border-primary pl-4" href="#introduction">Introduction</a>
<a class="block text-on-surface-variant hover:text-on-surface transition-colors pl-4 border-l-2 border-transparent" href="#installation">Installation</a>
<a class="block text-on-surface-variant hover:text-on-surface transition-colors pl-4 border-l-2 border-transparent" href="#folder-structure">Folder Structure</a>
</nav>
<div class="mt-12 p-5 rounded-2xl bg-surface-container-high border border-outline-variant text-center">
<p class="text-label-md font-bold mb-3">Need help?</p>
<p class="text-label-sm text-on-surface-variant mb-4">Our engineering team is available 24/7 for Enterprise users.</p>
<button class="w-full py-2 bg-on-surface text-surface rounded-lg font-label-md">Contact Support</button>
</div>
</aside>
</div>
<!-- Footer (Shared Component) -->
<footer class="mt-20 w-full py-stack-lg bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<span class="font-display-lg text-headline-sm font-bold text-on-surface block mb-4">Auralis AI</span>
<p class="font-body-sm text-label-md text-on-surface-variant max-w-xs">
                    © 2024 Auralis AI. All rights reserved. Precision Intelligence.
                </p>
</div>
<div>
<h5 class="font-bold text-on-surface mb-4">Product</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Features</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Pricing</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Security</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-on-surface mb-4">Resources</h5>
<ul class="space-y-2">
<li><a class="text-primary font-semibold text-label-md" href="#">Documentation</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Blog</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-on-surface mb-4">Legal</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Terms of Service</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-on-surface mb-4">Contact</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Contact Us</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">Twitter</a></li>
<li><a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-label-md" href="#">GitHub</a></li>
</ul>
</div>
</div>
</footer>
<!-- Simple Interactivity Scripts -->
<script>
        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Search Input focus effect
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('scale-[1.01]');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('scale-[1.01]');
        });
    </script>
`
  },
  "docs/docs-installation": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar (Shared Component) -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20 flex justify-between items-center px-margin-desktop max-w-container-max mx-auto left-0 right-0">
<div class="flex items-center gap-stack-md">
<span class="font-display-lg text-headline-md font-extrabold text-on-surface dark:text-on-background tracking-tighter">Auralis AI</span>
</div>
<div class="hidden md:flex items-center gap-gutter">
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Blog</a>
</div>
<div class="flex items-center gap-stack-md">
<button class="font-label-md text-on-surface-variant hover:bg-surface-container-low px-4 py-2 rounded-lg transition-all">Login</button>
<button class="font-label-md bg-primary text-on-primary px-5 py-2 rounded-lg hover:scale-95 transition-transform">Get Started</button>
</div>
</nav>
<!-- Help Hero Section -->
<section class="relative pt-32 pb-24 overflow-hidden bg-surface-container-lowest">
<!-- Background Animation -->

<div class="relative z-10 max-w-4xl mx-auto px-margin-mobile text-center">
<h1 class="font-display-lg text-headline-xl md:text-display-lg text-on-surface mb-stack-md">Knowledge Base</h1>
<p class="font-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">Explore our extensive documentation and find the answers you need to master Auralis AI agents.</p>
<!-- Search-first Layout -->
<div class="relative max-w-2xl mx-auto group">
<div class="absolute inset-y-0 left-5 flex items-center pointer-events-none text-primary">
<span class="material-symbols-outlined">search</span>
</div>
<input class="w-full h-16 pl-14 pr-6 rounded-xl border border-outline-variant bg-white font-body-lg text-on-surface glow-input focus:border-primary-fixed-dim focus:ring-0 transition-all shadow-sm group-hover:shadow-md" placeholder="How can we help you today?" type="text"/>
<div class="absolute inset-y-0 right-4 flex items-center">
<kbd class="hidden sm:inline-flex items-center px-2 py-1 font-sans text-xs font-semibold text-on-surface-variant bg-surface-container rounded border border-outline-variant">
                        ⌘K
                    </kbd>
</div>
</div>
<!-- Quick Access Chips -->
<div class="flex flex-wrap justify-center gap-2 mt-stack-md">
<span class="font-label-sm text-on-surface-variant">Popular searches:</span>
<a class="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-colors" href="#">API Keys</a>
<a class="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-colors" href="#">Model Training</a>
<a class="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-colors" href="#">Billing</a>
</div>
</div>
</section>
<!-- Main Content Grid -->
<main class="max-w-container-max mx-auto px-margin-desktop py-stack-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
<!-- Sidebar Navigation -->
<aside class="lg:col-span-3">
<div class="sticky top-28 space-y-stack-lg">
<nav class="space-y-1">
<p class="font-label-sm text-outline px-4 mb-2 uppercase tracking-widest">Categories</p>
<a class="active-nav-item flex items-center gap-stack-sm px-4 py-3 rounded-lg transition-all group" href="#">
<span class="material-symbols-outlined text-[20px]">rocket_launch</span>
<span class="font-label-md">Getting Started</span>
</a>
<a class="flex items-center gap-stack-sm px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all group" href="#">
<span class="material-symbols-outlined text-[20px]">bolt</span>
<span class="font-label-md">Core Engine</span>
</a>
<a class="flex items-center gap-stack-sm px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all group" href="#">
<span class="material-symbols-outlined text-[20px]">smart_toy</span>
<span class="font-label-md">AI Agents</span>
</a>
<a class="flex items-center gap-stack-sm px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all group" href="#">
<span class="material-symbols-outlined text-[20px]">security</span>
<span class="font-label-md">Security &amp; Privacy</span>
</a>
<a class="flex items-center gap-stack-sm px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all group" href="#">
<span class="material-symbols-outlined text-[20px]">code</span>
<span class="font-label-md">API Reference</span>
</a>
</nav>
<div class="p-stack-md bg-surface-container-low border border-outline-variant/30 rounded-xl">
<p class="font-label-md text-on-surface mb-2">Need a demo?</p>
<p class="font-label-sm text-on-surface-variant mb-stack-sm">Book a call with our technical solutions team.</p>
<button class="w-full py-2 bg-on-surface text-surface rounded-lg font-label-md hover:opacity-90 transition-opacity">Schedule Call</button>
</div>
</div>
</aside>
<!-- Content Area -->
<div class="lg:col-span-9 space-y-stack-lg">
<!-- Breadcrumbs -->
<nav class="flex items-center gap-2 text-on-surface-variant font-label-md">
<a class="hover:text-primary" href="#">Docs</a>
<span class="material-symbols-outlined text-sm">chevron_right</span>
<span class="text-on-surface font-semibold">Home</span>
</nav>
<!-- Popular Articles Grid -->
<div>
<h2 class="font-display-lg text-headline-lg text-on-surface mb-stack-md">Popular Articles</h2>
<div class="bento-grid">
<!-- Article Card -->
<a class="group p-stack-md bg-white border border-outline-variant rounded-xl hover:shadow-lg hover:border-primary-fixed-dim transition-all relative overflow-hidden" href="#">
<div class="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
<div class="flex items-start justify-between mb-stack-sm">
<span class="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">key</span>
<span class="font-label-sm text-on-surface-variant">5 min read</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">Authentication Guide</h3>
<p class="font-body-md text-on-surface-variant">Learn how to securely authenticate your applications using OAuth 2.0 and API keys.</p>
</a>
<a class="group p-stack-md bg-white border border-outline-variant rounded-xl hover:shadow-lg hover:border-primary-fixed-dim transition-all relative overflow-hidden" href="#">
<div class="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
<div class="flex items-start justify-between mb-stack-sm">
<span class="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">psychology</span>
<span class="font-label-sm text-on-surface-variant">12 min read</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">Prompt Engineering</h3>
<p class="font-body-md text-on-surface-variant">Master the art of crafting high-performance prompts for Auralis LLMs.</p>
</a>
<a class="group p-stack-md bg-white border border-outline-variant rounded-xl hover:shadow-lg hover:border-primary-fixed-dim transition-all relative overflow-hidden" href="#">
<div class="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
<div class="flex items-start justify-between mb-stack-sm">
<span class="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">hub</span>
<span class="font-label-sm text-on-surface-variant">8 min read</span>
</div>
<h3 class="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">Workflow Automation</h3>
<p class="font-body-md text-on-surface-variant">Connect Auralis to over 1,000+ apps via our native integration engine.</p>
</a>
</div>
</div>
<!-- Recently Updated List -->
<div class="pt-stack-md">
<div class="flex items-center justify-between mb-stack-md">
<h2 class="font-display-lg text-headline-lg text-on-surface">Recently Updated</h2>
<a class="text-primary font-label-md hover:underline flex items-center gap-1" href="#">
                        View Changelog <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div class="space-y-stack-sm">
<div class="flex items-center gap-stack-md p-stack-md bg-white border border-outline-variant rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
<div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container/10 text-secondary">
<span class="material-symbols-outlined">update</span>
</div>
<div class="flex-grow">
<h4 class="font-label-md text-on-surface">V2 Engine Documentation - Agent Memory</h4>
<p class="font-label-sm text-on-surface-variant">Updated yesterday • Documentation</p>
</div>
<span class="px-2 py-1 bg-surface-container text-on-surface-variant rounded font-label-sm">v2.4.0</span>
</div>
<div class="flex items-center gap-stack-md p-stack-md bg-white border border-outline-variant rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
<div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-container/10 text-primary">
<span class="material-symbols-outlined">shield</span>
</div>
<div class="flex-grow">
<h4 class="font-label-md text-on-surface">Data Sovereignty &amp; GDPR Compliance</h4>
<p class="font-label-sm text-on-surface-variant">Updated 3 days ago • Security</p>
</div>
<span class="px-2 py-1 bg-surface-container text-on-surface-variant rounded font-label-sm">Privacy</span>
</div>
<div class="flex items-center gap-stack-md p-stack-md bg-white border border-outline-variant rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
<div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-tertiary-container/10 text-tertiary">
<span class="material-symbols-outlined">api</span>
</div>
<div class="flex-grow">
<h4 class="font-label-md text-on-surface">Python SDK Getting Started Guide</h4>
<p class="font-label-sm text-on-surface-variant">Updated 1 week ago • SDK</p>
</div>
<span class="px-2 py-1 bg-surface-container text-on-surface-variant rounded font-label-sm">Code</span>
</div>
</div>
</div>
<!-- Support CTA Section -->
<div class="mt-stack-lg p-stack-lg bg-on-surface text-surface rounded-2xl flex flex-col md:flex-row items-center justify-between gap-stack-lg">
<div class="text-center md:text-left">
<h3 class="font-headline-lg mb-2">Still need help?</h3>
<p class="font-body-md opacity-80 max-w-md">Our support engineers are available 24/7 to assist with your technical integration and troubleshooting.</p>
</div>
<div class="flex flex-col sm:flex-row gap-stack-sm w-full md:w-auto">
<button class="px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md hover:scale-105 transition-transform flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">chat_bubble</span>
                        Contact Support
                    </button>
<button class="px-8 py-3 bg-white/10 text-white rounded-xl font-label-md hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        Community Forum
                    </button>
</div>
</div>
</div>
</main>
<!-- Footer (Shared Component) -->
<footer class="w-full py-stack-lg bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant mt-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-4 lg:col-span-1">
<span class="font-display-lg text-headline-sm font-bold text-on-surface">Auralis AI</span>
</div>
<div class="flex flex-col gap-2">
<p class="font-label-md text-primary mb-2">Company</p>
<a class="font-label-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="font-label-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Terms of Service</a>
</div>
<div class="flex flex-col gap-2">
<p class="font-label-md text-primary mb-2">Resources</p>
<a class="font-label-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Cookie Policy</a>
<a class="font-label-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Security</a>
</div>
<div class="flex flex-col gap-2">
<p class="font-label-md text-primary mb-2">Connect</p>
<a class="font-label-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Contact</a>
<a class="font-label-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Careers</a>
</div>
<div class="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col justify-end">
<p class="font-label-md text-on-surface-variant">© 2024 Auralis AI. All rights reserved. Precision Intelligence.</p>
</div>
</div>
</footer>
<!-- Interactive script for demo -->
<script>
        // Micro-interaction for search bar shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.querySelector('input').focus();
            }
        });

        // Simple active state toggle for sidebar
        const navItems = document.querySelectorAll('aside nav a');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                navItems.forEach(i => i.classList.remove('active-nav-item', 'text-primary', 'font-semibold'));
                navItems.forEach(i => i.classList.add('text-on-surface-variant'));
                item.classList.add('active-nav-item');
                item.classList.remove('text-on-surface-variant');
            });
        });
    </script>
`
  },
  "marketing/features-list": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- Top Navigation Shell -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-margin-desktop py-4">
<div class="font-headline-md text-headline-md font-extrabold text-on-surface">Auralis AI</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Agency</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold shadow-sm active:scale-95 transition-transform duration-150">
                Get Started
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="relative pt-32 pb-20 overflow-hidden">

<div class="max-w-7xl mx-auto px-margin-desktop relative z-10">
<div class="max-w-3xl">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-6">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">bolt</span>
<span class="font-label-sm text-label-sm">NEXT GEN AI PLATFORM</span>
</div>
<h1 class="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-on-surface mb-8 tracking-tight">
                    Powerful tools for the <span class="text-primary italic">AI-first era.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
                    Deploy intelligent agents, automate complex workflows, and gain deep operational insights with a high-performance infrastructure designed for modern enterprises.
                </p>
<div class="flex flex-wrap gap-4">
<button class="bg-on-background text-surface px-8 py-4 rounded-full font-label-md text-label-md font-bold hover:shadow-lg transition-all">Explore Platform</button>
<button class="border-1.5 border-on-background text-on-background px-8 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-surface-container transition-all">Documentation</button>
</div>
</div>
</div>
</section>
<!-- Sticky Sub-Nav -->
<div class="sticky top-[72px] z-40 bg-surface/90 backdrop-blur-md border-y border-outline-variant/30">
<div class="max-w-7xl mx-auto px-margin-desktop py-4 overflow-x-auto">
<div class="flex items-center gap-8 min-w-max">
<a class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#agents">AI Agents</a>
<a class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#automation">Automation Builder</a>
<a class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#integrations">Integrations</a>
<a class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#analytics">Analytics</a>
<a class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#security">Security</a>
</div>
</div>
</div>
<!-- Features Content -->
<main class="py-stack-lg space-y-32">
<!-- AI Agents Section -->
<section class="max-w-7xl mx-auto px-margin-desktop" id="agents">
<div class="grid lg:grid-cols-2 gap-gutter items-center">
<div class="space-y-stack-md">
<h2 class="font-headline-lg text-headline-lg">Autonomous AI Agents</h2>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Deploy specialized digital employees that handle repetitive tasks, customer inquiries, and data entry with human-like precision but machine efficiency.
                    </p>
<ul class="space-y-4 pt-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary">check_circle</span>
<div>
<span class="font-label-md text-label-md block">Context-Aware Memory</span>
<span class="text-sm text-on-surface-variant">Agents remember past interactions for seamless long-term continuity.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary">check_circle</span>
<div>
<span class="font-label-md text-label-md block">Multi-Model Switching</span>
<span class="text-sm text-on-surface-variant">Automatically uses the most efficient LLM for the specific task at hand.</span>
</div>
</li>
</ul>
</div>
<div class="relative group">
<div class="absolute -inset-4 bg-primary-fixed/30 blur-3xl rounded-full group-hover:bg-primary-fixed/50 transition-colors"></div>
<div class="relative bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md shadow-lg top-signal">
<!-- UI Snippet: Agent Card -->
<div class="flex items-center justify-between mb-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
</div>
<div>
<h4 class="font-label-md text-label-md">Support Agent #402</h4>
<span class="text-[10px] text-secondary flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span> ACTIVE
                                    </span>
</div>
</div>
<span class="material-symbols-outlined text-outline">more_vert</span>
</div>
<div class="space-y-3">
<div class="bg-surface-container-low p-3 rounded-lg text-sm text-on-surface-variant italic">
                                "Analyzing customer ticket #9283. Suggesting refund based on policy 4.2..."
                            </div>
<div class="flex justify-end">
<div class="bg-primary text-on-primary p-3 rounded-lg text-sm max-w-[80%]">
                                    Approved. Initiating refund and sending confirmation email.
                                </div>
</div>
</div>
<div class="mt-6 pt-4 border-t border-outline-variant flex justify-between items-center text-xs text-outline">
<span>Processing speed: 1.2s</span>
<span>Token usage: 420</span>
</div>
</div>
</div>
</div>
</section>
<!-- Automation Builder Section (Large Composition) -->
<section class="bg-surface-container py-24" id="automation">
<div class="max-w-7xl mx-auto px-margin-desktop text-center mb-16">
<h2 class="font-headline-lg text-headline-lg mb-4">The Logic Engine</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                    Design complex, multi-step automations using our visual node-based editor. No coding required, just pure logic.
                </p>
</div>
<div class="max-w-5xl mx-auto px-margin-desktop">
<div class="relative bg-surface-container-lowest rounded-2xl border border-outline-variant p-8 shadow-2xl overflow-hidden min-h-[400px]">
<div class="absolute inset-0 bg-[radial-gradient(#e2e9eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
<!-- Visual Node Mockup -->
<div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<!-- Node 1 -->
<div class="glass-card p-4 rounded-xl shadow-md border-l-4 border-primary z-10">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary text-sm">mail</span>
<span class="font-label-sm text-label-sm">Incoming Email</span>
</div>
<div class="h-2 w-full bg-surface-container rounded mb-2"></div>
<div class="h-2 w-2/3 bg-surface-container rounded"></div>
</div>
<!-- Connector (Visual only) -->
<div class="hidden md:flex justify-center items-center pointer-events-none">
<svg class="text-outline-variant" fill="none" height="40" viewbox="0 0 200 40" width="100%">
<path d="M0 20 H200" stroke="currentColor" stroke-dasharray="4 4" stroke-width="2"></path>
<circle cx="100" cy="20" fill="currentColor" r="4"></circle>
</svg>
</div>
<!-- Node 2 -->
<div class="glass-card p-4 rounded-xl shadow-md border-l-4 border-secondary-container z-10">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-secondary text-sm">psychology</span>
<span class="font-label-sm text-label-sm">AI Classification</span>
</div>
<div class="flex gap-1 mb-2">
<div class="px-2 py-0.5 bg-secondary-container/20 text-on-secondary-container text-[10px] rounded">Urgent</div>
<div class="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] rounded">Billing</div>
</div>
</div>
<!-- Mobile Spacing -->
<div class="md:hidden"></div>
<!-- Node 3 -->
<div class="md:col-start-2 glass-card p-4 rounded-xl shadow-md border-l-4 border-tertiary-container z-10 md:mt-8">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-tertiary text-sm">stack</span>
<span class="font-label-sm text-label-sm">Post to Slack</span>
</div>
<div class="h-2 w-full bg-surface-container rounded"></div>
</div>
</div>
<div class="absolute bottom-6 right-6">
<button class="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-sm">play_arrow</span> Run Workflow
                        </button>
</div>
</div>
</div>
</section>
<!-- Integrations (Logo Cloud) -->
<section class="max-w-7xl mx-auto px-margin-desktop" id="integrations">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg mb-4">Plays well with others</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Native connectors for over 500+ enterprise applications.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">hub</span>
</div>
<span class="font-label-sm text-label-sm">Salesforce</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">terminal</span>
</div>
<span class="font-label-sm text-label-sm">GitHub</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">description</span>
</div>
<span class="font-label-sm text-label-sm">Notion</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">chat</span>
</div>
<span class="font-label-sm text-label-sm">Slack</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">storage</span>
</div>
<span class="font-label-sm text-label-sm">PostgreSQL</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">mail_outline</span>
</div>
<span class="font-label-sm text-label-sm">Gmail</span>
</div>
</div>
</section>
<!-- Analytics Section (Bento Grid) -->
<section class="max-w-7xl mx-auto px-margin-desktop" id="analytics">
<div class="mb-12">
<h2 class="font-headline-lg text-headline-lg mb-2">Deep Performance Analytics</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Measure everything. Optimize everywhere.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Main Chart Card -->
<div class="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
<div class="flex justify-between items-center mb-8">
<div>
<h4 class="font-label-md text-label-md">Efficiency Gain</h4>
<p class="text-xs text-outline">Last 30 days vs previous</p>
</div>
<div class="text-2xl font-bold text-secondary">+24.8%</div>
</div>
<div class="h-48 w-full flex items-end gap-2 px-2">
<!-- Mockup Bars -->
<div class="flex-1 bg-primary/10 rounded-t-sm h-[30%]"></div>
<div class="flex-1 bg-primary/10 rounded-t-sm h-[45%]"></div>
<div class="flex-1 bg-primary/10 rounded-t-sm h-[40%]"></div>
<div class="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
<div class="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
<div class="flex-1 bg-primary/40 rounded-t-sm h-[80%]"></div>
<div class="flex-1 bg-primary rounded-t-sm h-[95%]"></div>
</div>
</div>
<!-- Mini Stats -->
<div class="space-y-gutter">
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
<span class="material-symbols-outlined text-primary mb-2">schedule</span>
<h4 class="font-label-sm text-label-sm text-on-surface-variant">Avg Response Time</h4>
<div class="text-xl font-bold">1.2s</div>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
<span class="material-symbols-outlined text-secondary mb-2">savings</span>
<h4 class="font-label-sm text-label-sm text-on-surface-variant">Estimated Savings</h4>
<div class="text-xl font-bold">$12,400</div>
</div>
</div>
</div>
</section>
<!-- Security Section -->
<section class="bg-on-background text-surface py-24" id="security">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="grid lg:grid-cols-2 gap-16 items-center">
<div class="order-2 lg:order-1">
<div class="grid grid-cols-2 gap-6">
<div class="p-6 border border-surface/10 rounded-xl hover:border-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary-fixed mb-4" style="font-variation-settings: 'FILL' 1;">verified_user</span>
<h5 class="font-label-md text-label-md mb-2">SOC2 Type II</h5>
<p class="text-xs text-surface-variant">Certified security protocols for enterprise data.</p>
</div>
<div class="p-6 border border-surface/10 rounded-xl hover:border-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary-fixed mb-4" style="font-variation-settings: 'FILL' 1;">lock</span>
<h5 class="font-label-md text-label-md mb-2">AES-256 Encryption</h5>
<p class="text-xs text-surface-variant">Bank-grade encryption for all data at rest.</p>
</div>
<div class="p-6 border border-surface/10 rounded-xl hover:border-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary-fixed mb-4" style="font-variation-settings: 'FILL' 1;">privacy_tip</span>
<h5 class="font-label-md text-label-md mb-2">GDPR Compliant</h5>
<p class="text-xs text-surface-variant">Respecting regional data sovereignty and privacy.</p>
</div>
<div class="p-6 border border-surface/10 rounded-xl hover:border-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary-fixed mb-4" style="font-variation-settings: 'FILL' 1;">history</span>
<h5 class="font-label-md text-label-md mb-2">Audit Logs</h5>
<p class="text-xs text-surface-variant">Full transparency into every AI action taken.</p>
</div>
</div>
</div>
<div class="order-1 lg:order-2 space-y-6">
<h2 class="font-headline-lg text-headline-lg text-primary-fixed">Enterprise-Grade Trust</h2>
<p class="font-body-md text-body-md text-surface-variant">
                            We take security as seriously as performance. Auralis AI is built on a foundation of zero-trust architecture, ensuring your proprietary data never leaks into global training models.
                        </p>
<button class="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-label-md text-label-md font-bold">Security Whitepaper</button>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom CTA Section -->
<section class="py-stack-lg bg-surface relative overflow-hidden">
<div class="max-w-5xl mx-auto px-margin-desktop text-center py-20 bg-primary-container/10 rounded-3xl border border-primary-container/20">
<h2 class="font-headline-xl text-headline-xl mb-6">Ready to scale your intelligence?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
                Join 2,000+ companies already leveraging Auralis AI to outpace the competition.
            </p>
<div class="flex flex-col sm:flex-row justify-center gap-4">
<button class="bg-primary text-on-primary px-10 py-5 rounded-full font-headline-md text-headline-md shadow-xl hover:-translate-y-1 transition-all">See it in action - Book a demo</button>
</div>
</div>
</section>
<!-- Footer Shell -->
<footer class="bg-surface-container py-stack-lg">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter mb-16">
<div class="col-span-2">
<div class="font-headline-md text-headline-md font-bold text-on-surface mb-4">Auralis AI</div>
<p class="text-on-surface-variant text-sm max-w-xs">Building the intelligent infrastructure for the next generation of business.</p>
</div>
<div>
<h6 class="font-label-md text-label-md mb-4">Product</h6>
<ul class="space-y-2">
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Integrations</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Enterprise</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Solutions</a></li>
</ul>
</div>
<div>
<h6 class="font-label-md text-label-md mb-4">Company</h6>
<ul class="space-y-2">
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h6 class="font-label-md text-label-md mb-4">Support</h6>
<ul class="space-y-2">
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Docs</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">API Reference</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h6 class="font-label-md text-label-md mb-4">Legal</h6>
<ul class="space-y-2">
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a></li>
<li><a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div class="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<div class="text-label-sm font-label-sm text-on-surface-variant opacity-80">© 2024 Auralis AI. All rights reserved.</div>
<div class="flex gap-6">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.89 3.55-.7 0-1.36-.21-1.94-.53v.05c0 2.05 1.45 3.77 3.39 4.16-.36.1-.74.15-1.13.15-.27 0-.54-.02-.8-.08.54 1.68 2.1 2.9 3.95 2.93-1.44 1.13-3.27 1.81-5.25 1.81-.34 0-.68-.02-1.01-.06 1.87 1.2 4.1 1.9 6.5 1.9 7.81 0 12.07-6.47 12.07-12.07 0-.18 0-.37-.01-.55.83-.59 1.54-1.33 2.1-2.17z"></path></svg>
</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
</div>
</footer>
<script>
        // Micro-interactions for scrolling
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('main > section');
            const navLinks = document.querySelectorAll('.sticky a');

            window.addEventListener('scroll', () => {
                let current = "";
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('text-primary', 'font-bold');
                    if (link.getAttribute('href').includes(current)) {
                        link.classList.add('text-primary', 'font-bold');
                    }
                });
            });
        });
    </script>
`
  },
  "ai-apps/ai-writer": {
    bodyClass: "h-screen flex flex-col",
    html: `
<div class="scanlines"></div>
<!-- TopNavBar -->
<header class="bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-gutter w-full h-14 z-50 fixed top-0">
<div class="flex items-center gap-8">
<div class="font-headline-md text-headline-md text-primary tracking-tighter">SynthOS IDE</div>
<nav class="hidden md:flex gap-6">
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Deploy</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Run</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200 cursor-pointer active:scale-95" href="#">AI Sync</a>
</nav>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">account_tree</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">notifications</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">settings</span>
<div class="w-8 h-8 rounded-full overflow-hidden border border-primary/30">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a software engineer with a neutral expression, set against a dark, tech-oriented background with subtle green and purple ambient lighting. The style is crisp and cinematic, matching a modern developer profile aesthetic with sharp focus and clean edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9FuX6taUIBUezhgUcfeVKTF2YGtITM81-Ezyx4rtRGXptdxsbLG4n2kE-TfBPJYUh72mJHKwsbOAelK1FpcjX-4pdK0zT2vhF2Bm2YLywBl6tRSyr1q2I8MeOdvYka9Tbx4sVTtPRBwGHd-uxB-ajucpYbRFa8wdrFzU-Kfpyx2idKLzM4WI-cNlwzPK2S0hXBc9uIXfESBPoKoeif_l00IH0_Vz23hbt_ezaWfxINl_yv9tF2Qg9"/>
</div>
</div>
</header>
<div class="flex flex-1 pt-14 pb-6 overflow-hidden">
<!-- SideNavBar -->
<aside class="fixed left-0 top-14 flex flex-col h-[calc(100vh-80px)] z-40 bg-surface-container/80 backdrop-blur-xl border-r border-white/10 w-sidebar-width">
<div class="p-4 border-b border-white/5">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">terminal</span>
</div>
<div>
<div class="font-label-caps text-label-caps text-on-surface">Project Alpha</div>
<div class="text-[10px] text-on-surface-variant font-code-sm opacity-60 uppercase tracking-widest">main branch</div>
</div>
</div>
</div>
<nav class="flex-1 overflow-y-auto py-2">
<div class="flex items-center text-primary bg-primary/10 border-l-2 border-primary px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer">
<span class="material-symbols-outlined mr-3 text-[20px]">folder_open</span>
<span class="font-label-caps text-label-caps uppercase">Explorer</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 ease-in-out cursor-pointer">
<span class="material-symbols-outlined mr-3 text-[20px]">search</span>
<span class="font-label-caps text-label-caps uppercase">Search</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 ease-in-out cursor-pointer">
<span class="material-symbols-outlined mr-3 text-[20px]">account_tree</span>
<span class="font-label-caps text-label-caps uppercase">Source Control</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 ease-in-out cursor-pointer">
<span class="material-symbols-outlined mr-3 text-[20px]">extension</span>
<span class="font-label-caps text-label-caps uppercase">Extensions</span>
</div>
<div class="flex items-center text-on-surface-variant px-4 py-2 hover:bg-white/5 hover:text-on-surface transition-all duration-200 ease-in-out cursor-pointer">
<span class="material-symbols-outlined mr-3 text-[20px]">smart_toy</span>
<span class="font-label-caps text-label-caps uppercase">AI Debug</span>
</div>
<!-- File Tree -->
<div class="mt-4 px-2">
<div class="font-code-sm text-[11px] text-on-surface-variant/40 px-2 mb-2 uppercase tracking-tighter">File Tree</div>
<div class="space-y-0.5">
<div class="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer group">
<span class="material-symbols-outlined text-[16px] text-yellow-500/70">folder</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">src</span>
</div>
<div class="pl-4 space-y-0.5 border-l border-white/5 ml-3">
<div class="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer group">
<span class="material-symbols-outlined text-[16px] text-blue-400/70">folder</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">components</span>
</div>
<div class="pl-4 space-y-0.5 border-l border-white/5 ml-3">
<div class="flex items-center gap-2 px-2 py-1 bg-primary/5 rounded cursor-pointer relative group">
<div class="active-file-indicator"></div>
<span class="material-symbols-outlined text-[16px] text-primary">javascript</span>
<span class="font-code-sm text-code-sm text-primary">Editor.tsx</span>
</div>
<div class="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer group">
<span class="material-symbols-outlined text-[16px] text-on-surface-variant/60">javascript</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">Sidebar.tsx</span>
</div>
</div>
<div class="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer group">
<span class="material-symbols-outlined text-[16px] text-blue-400/70">folder</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">lib</span>
</div>
<div class="pl-4 space-y-0.5 border-l border-white/5 ml-3">
<div class="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer group">
<span class="material-symbols-outlined text-[16px] text-on-surface-variant/60">api</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">api.ts</span>
</div>
</div>
</div>
<div class="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer group">
<span class="material-symbols-outlined text-[16px] text-blue-300">description</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">package.json</span>
</div>
</div>
</div>
</nav>
<div class="p-4 mt-auto border-t border-white/5 space-y-2">
<button class="w-full bg-primary text-background font-label-caps text-[12px] py-2 px-4 rounded-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all">
<span class="material-symbols-outlined text-[18px]">add</span>
                    New File
                </button>
<div class="flex items-center text-on-surface-variant px-2 py-1 hover:text-on-surface cursor-pointer text-code-sm font-code-sm">
<span class="material-symbols-outlined mr-2 text-[18px]">settings</span>
                    Settings
                </div>
<div class="flex items-center text-on-surface-variant px-2 py-1 hover:text-on-surface cursor-pointer text-code-sm font-code-sm">
<span class="material-symbols-outlined mr-2 text-[18px]">person</span>
                    Account
                </div>
</div>
</aside>
<!-- Main Content (Code Editor) -->
<main class="flex-1 ml-sidebar-width mr-[300px] bg-background flex flex-col relative">
<!-- Tab Bar -->
<div class="h-10 bg-surface-container flex items-center border-b border-white/5">
<div class="bg-background border-r border-white/10 px-4 h-full flex items-center gap-2 group cursor-pointer border-t-2 border-t-primary">
<span class="material-symbols-outlined text-[16px] text-primary">javascript</span>
<span class="font-code-sm text-code-sm text-on-surface">Editor.tsx</span>
<span class="material-symbols-outlined text-[14px] text-on-surface-variant/50 hover:text-on-surface">close</span>
</div>
<div class="px-4 h-full flex items-center gap-2 group cursor-pointer hover:bg-white/5">
<span class="material-symbols-outlined text-[16px] text-on-surface-variant">api</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">api.ts</span>
</div>
</div>
<!-- Editor Surface -->
<div class="flex-1 code-editor p-6 overflow-y-auto font-code-md text-code-md leading-relaxed relative">
<div class="absolute left-0 top-0 w-12 h-full bg-black/20 border-r border-white/5 flex flex-col items-center pt-6 text-[12px] text-on-surface-variant/30 select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
</div>
<div class="pl-10">
<div class="flex gap-2">
<span class="text-secondary italic">import</span>
<span class="text-on-surface">React, { useState }</span>
<span class="text-secondary italic">from</span>
<span class="text-primary">'react'</span><span class="text-on-surface">;</span>
</div>
<div class="mt-1 flex gap-2">
<span class="text-secondary italic">import</span>
<span class="text-on-surface">{ Sidebar }</span>
<span class="text-secondary italic">from</span>
<span class="text-primary">'./Sidebar'</span><span class="text-on-surface">;</span>
</div>
<div class="mt-4"><span class="text-on-surface">/**</span></div>
<div class="flex gap-2"><span class="text-on-surface-variant/60"> * SynthOS Editor Component</span></div>
<div class="flex gap-2"><span class="text-on-surface-variant/60"> * Responsible for high-fidelity code rendering and AI sync</span></div>
<div class="flex gap-2"><span class="text-on-surface"> */</span></div>
<div class="mt-4 flex gap-2">
<span class="text-secondary italic">export const</span>
<span class="text-tertiary">Editor</span>
<span class="text-on-surface">= () =&gt; {</span>
</div>
<div class="mt-1 pl-4 flex gap-2">
<span class="text-secondary italic">const</span>
<span class="text-on-surface">[code, setCode] =</span>
<span class="text-tertiary">useState</span><span class="text-on-surface">(</span><span class="text-primary">''</span><span class="text-on-surface">);</span>
</div>
<div class="mt-4 pl-4 flex gap-2">
<span class="text-secondary italic">return</span>
<span class="text-on-surface">(</span>
</div>
<div class="mt-1 pl-8 flex gap-2">
<span class="text-on-surface">&lt;</span><span class="text-secondary">main</span>
<span class="text-tertiary">className</span><span class="text-on-surface">=</span><span class="text-primary">"synth-canvas"</span><span class="text-on-surface">&gt;</span>
</div>
<div class="mt-1 pl-12 flex gap-2">
<span class="text-on-surface">&lt;</span><span class="text-secondary">Sidebar</span><span class="text-on-surface"> /&gt;</span>
</div>
<div class="mt-1 pl-12 flex gap-2 bg-primary/5 rounded-sm neon-glow-primary border-l-2 border-primary">
<span class="text-on-surface">&lt;</span><span class="text-secondary">CodeViewport</span>
<span class="text-tertiary">value</span><span class="text-on-surface">={code} /&gt;</span>
</div>
<div class="mt-1 pl-8 flex gap-2">
<span class="text-on-surface">&lt;/</span><span class="text-secondary">main</span><span class="text-on-surface">&gt;</span>
</div>
<div class="mt-1 pl-4 flex gap-2">
<span class="text-on-surface">);</span>
</div>
<div class="mt-1 flex gap-2">
<span class="text-on-surface">};</span>
</div>
<!-- Subtle Code Glow Decoration -->
<div class="mt-10 p-6 rounded-xl border border-secondary/20 bg-secondary/5 backdrop-blur-sm">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-secondary">bolt</span>
<h3 class="font-headline-md text-body-md text-secondary uppercase tracking-widest">Editor Suggestion</h3>
</div>
<p class="font-body-md text-on-surface-variant text-sm mb-4">AI detected a missing dependency in your useEffect hook. Should I optimize this for performance?</p>
<div class="flex gap-4">
<button class="bg-secondary/20 border border-secondary text-secondary font-label-caps text-[10px] px-3 py-1.5 rounded hover:bg-secondary/30 transition-all neon-glow-secondary">Apply Fix</button>
<button class="text-on-surface-variant font-label-caps text-[10px] px-3 py-1.5 hover:text-on-surface transition-all">Dismiss</button>
</div>
</div>
</div>
</div>
</main>
<!-- Right Panel: Prompt Library -->
<aside class="fixed right-0 top-14 w-[300px] h-[calc(100vh-80px)] bg-surface-container-low/80 backdrop-blur-xl border-l border-white/10 z-40 p-4 overflow-y-auto">
<div class="flex items-center justify-between mb-6">
<h2 class="font-headline-md text-body-md text-on-surface">Prompt Library</h2>
<span class="material-symbols-outlined text-primary text-[20px] cursor-pointer">auto_awesome</span>
</div>
<div class="space-y-4">
<!-- Prompt Card 1 -->
<div class="p-4 rounded-lg bg-surface-container-high border border-white/5 hover:border-primary/40 transition-all cursor-pointer group active:scale-[0.98]">
<div class="flex items-center gap-3 mb-2">
<div class="p-2 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary text-[18px]">rule</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface">Add Unit Test</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">Generates a comprehensive Jest test suite with mock providers for the current React component.</p>
</div>
<!-- Prompt Card 2 -->
<div class="p-4 rounded-lg bg-surface-container-high border border-white/5 hover:border-error/40 transition-all cursor-pointer group active:scale-[0.98]">
<div class="flex items-center gap-3 mb-2">
<div class="p-2 rounded bg-error/10 group-hover:bg-error/20 transition-colors">
<span class="material-symbols-outlined text-error text-[18px]">bug_report</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface">Fix Bug</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">Analyzes the current file for common logical errors, null pointers, or async race conditions.</p>
</div>
<!-- Prompt Card 3 -->
<div class="p-4 rounded-lg bg-surface-container-high border border-white/5 hover:border-secondary/40 transition-all cursor-pointer group active:scale-[0.98]">
<div class="flex items-center gap-3 mb-2">
<div class="p-2 rounded bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
<span class="material-symbols-outlined text-secondary text-[18px]">speed</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface">Optimise Performance</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">Suggests useMemo/useCallback wrappings and identifies unnecessary re-renders in your UI.</p>
</div>
<!-- Bento Style Detail Box -->
<div class="mt-8 p-5 rounded-xl bg-gradient-to-br from-surface-container-highest to-background border border-white/10">
<div class="w-full h-24 mb-4 rounded bg-surface overflow-hidden relative border border-white/5">

</div>
<div class="text-[10px] text-primary font-code-sm mb-1 uppercase tracking-widest">System Health</div>
<div class="flex items-center gap-2 mb-3">
<div class="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[78%]"></div>
</div>
<span class="text-[10px] font-code-sm text-on-surface-variant">78%</span>
</div>
<div class="text-[11px] text-on-surface-variant/80 font-body-md italic leading-tight">"Neural engine warm-up complete. Ready for synchronous sync on branch Alpha."</div>
</div>
</div>
</aside>
</div>
<!-- Footer -->
<footer class="fixed bottom-0 left-0 w-full flex items-center justify-between px-4 z-50 bg-surface-container-lowest border-t border-white/10 h-6">
<div class="flex items-center gap-6">
<div class="font-code-sm text-code-sm text-on-surface-variant">v1.2.4-stable</div>
<div class="flex items-center gap-4">
<span class="text-on-surface-variant font-code-sm text-code-sm hover:text-primary transition-colors cursor-default">TypeScript</span>
<span class="text-on-surface-variant font-code-sm text-code-sm hover:text-primary transition-colors cursor-default">UTF-8</span>
<span class="text-on-surface-variant font-code-sm text-code-sm hover:text-primary transition-colors cursor-default flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">account_tree</span> Main branch
                </span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-primary font-code-sm text-code-sm uppercase tracking-tighter">System: Healthy</span>
</div>
<span class="material-symbols-outlined text-[14px] text-on-surface-variant">dns</span>
</div>
</footer>
<script>
        // Micro-interaction for code lines
        document.querySelectorAll('.code-editor div').forEach(line => {
            line.addEventListener('mouseenter', () => {
                line.style.backgroundColor = 'rgba(107, 251, 154, 0.03)';
            });
            line.addEventListener('mouseleave', () => {
                line.style.backgroundColor = 'transparent';
            });
        });

        // Toggle folder state (visual only)
        document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
            if(icon.innerText === 'folder') {
                icon.parentElement.addEventListener('click', () => {
                    icon.innerText = icon.innerText === 'folder' ? 'folder_open' : 'folder';
                });
            }
        });
    </script>
`
  },
  "marketing/case-study-details": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container/30",
    html: `
<!-- TopNavBar -->
<header class="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
<nav class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-20">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md font-bold text-on-surface">Auralis AI</span>
<div class="hidden md:flex gap-6">
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-label-md text-label-md" href="#">Features</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-label-md text-label-md" href="#">Pricing</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-colors font-label-md text-label-md" href="#">Agency</a>
</div>
</div>
<div class="flex items-center gap-4">
<button class="px-6 py-2 rounded-full font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-all">Login</button>
<button class="px-6 py-2 rounded-full font-label-md text-label-md bg-primary-container text-on-primary-container hover:scale-[1.02] transition-all shadow-sm">Get Started</button>
</div>
</nav>
</header>
<main>
<!-- Section 1: Hero Section -->
<section class="relative pt-stack-lg pb-24 overflow-hidden">
<div class="absolute inset-0 z-0 opacity-40">

</div>
<div class="relative z-10 px-margin-desktop max-w-container-max mx-auto">
<div class="flex flex-col items-start gap-stack-md max-w-3xl">
<span class="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider">Logistics &amp; Supply Chain</span>
<h1 class="font-headline-xl text-headline-xl text-on-surface">Streamlining Global Operations for NexaFreight</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">How Auralis AI automated 92% of documentation workflows, saving thousands of manual hours per week.</p>
</div>
<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="glass-card p-8 rounded-xl ai-signal-border flex flex-col gap-2">
<span class="text-on-surface-variant font-label-md text-label-md">Efficiency Gain</span>
<span class="font-headline-xl text-[64px] leading-none text-primary font-extrabold">+420%</span>
<p class="text-on-surface-variant font-body-md mt-2">Increase in weekly throughput</p>
</div>
<div class="col-span-1 md:col-span-2 relative rounded-xl overflow-hidden min-h-[300px]">
<div class="absolute inset-0 bg-cover bg-center" data-alt="A futuristic, high-tech logistics control center with glowing digital maps, holographic shipping data, and professional personnel monitoring complex global supply chain networks. The lighting is crisp and modern with electric cyan accents against a clean, premium white environment, reflecting a sophisticated corporate AI aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsqGyePY9QfOiPdM6ve5heS7WefrG7ZEGcGEvSv-Jm8fMuIEHA8NHWyJMLsopFAZ_6grwsrC-ilWqe2f8Q0tCFGmkqZ7LBNz8W8RLQLaQfpTZRdv4_NUTtZsnxBYwKHFOjCSAK4AZjedyxQjVgYDyBtzAJ8Q3b5YwxxJePgw526O_B-oeFw1Xlu54q8Xnh336UAAca8-V93AXwcUJ-AekfbBE037hPTw3_xNUR_w6qA1iycXAQLWKD')"></div>
</div>
</div>
</div>
</section>
<!-- Section 2: Challenge vs Solution -->
<section class="py-24 bg-surface-container-lowest">
<div class="px-margin-desktop max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div class="space-y-stack-md">
<div class="flex items-center gap-3 text-error">
<span class="material-symbols-outlined">warning</span>
<h2 class="font-headline-lg text-headline-lg">The Challenge</h2>
</div>
<p class="font-body-lg text-body-lg text-on-surface-variant">NexaFreight was drowning in manual data entry for international shipping manifests. Errors in transcription led to 15% customs delays, costing the firm $2.4M annually in penalties and storage fees. Their team spent 40+ hours per week on repetitive PDF verification tasks.</p>
<ul class="space-y-4 pt-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-error/60 mt-1">close</span>
<span class="text-on-surface">Inefficient manual verification bottlenecks</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-error/60 mt-1">close</span>
<span class="text-on-surface">High error rates in customs documentation</span>
</li>
</ul>
</div>
<div class="space-y-stack-md">
<div class="flex items-center gap-3 text-secondary">
<span class="material-symbols-outlined">auto_awesome</span>
<h2 class="font-headline-lg text-headline-lg">The Auralis Solution</h2>
</div>
<p class="font-body-lg text-body-lg text-on-surface-variant">We deployed Auralis AI's precision extraction engine, which uses proprietary vision-language models to process unstructured manifests. The system identifies discrepancies in real-time, auto-populating ERP systems with 99.9% accuracy.</p>
<ul class="space-y-4 pt-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary/60 mt-1">check_circle</span>
<span class="text-on-surface">Automated OCR &amp; validation pipeline</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary/60 mt-1">check_circle</span>
<span class="text-on-surface">Seamless integration with existing ERP/TMS</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<!-- Section 3: The Workflow Visual -->
<section class="py-24 bg-surface grid-bg relative overflow-hidden">
<div class="px-margin-desktop max-w-container-max mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg">The Auralis Intelligent Workflow</h2>
<p class="text-on-surface-variant mt-4">Precision-engineered automation mapping for NexaFreight</p>
</div>
<div class="relative glass-card rounded-2xl p-12 overflow-hidden border-outline-variant/20 shadow-xl">
<!-- Workflow Diagram Placeholder -->
<div class="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
<div class="flex flex-col items-center gap-4 w-48 text-center group">
<div class="w-16 h-16 rounded-xl bg-white border border-outline-variant/30 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">upload_file</span>
</div>
<span class="font-label-md text-label-md">Ingest Manifests</span>
<div class="text-xs text-on-surface-variant">PDF, JPG, EDI</div>
</div>
<div class="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative">
<div class="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-primary node-pulse"></div>
</div>
<div class="flex flex-col items-center gap-4 w-64 text-center group">
<div class="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative">
<span class="material-symbols-outlined text-4xl">psychology</span>
<div class="absolute -top-2 -right-2 px-2 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] rounded-full font-bold">AI Core</div>
</div>
<span class="font-label-md text-label-md">Extraction &amp; Validation</span>
<div class="text-xs text-on-surface-variant">Multi-Modal Analysis</div>
</div>
<div class="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative">
<div class="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-primary node-pulse"></div>
</div>
<div class="flex flex-col items-center gap-4 w-48 text-center group">
<div class="w-16 h-16 rounded-xl bg-white border border-outline-variant/30 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">terminal</span>
</div>
<span class="font-label-md text-label-md">ERP Export</span>
<div class="text-xs text-on-surface-variant">Automated Entry</div>
</div>
</div>
<div class="mt-12 pt-12 border-t border-outline-variant/10 grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="flex gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary-container">speed</span>
</div>
<div>
<h4 class="font-label-md text-label-md">Latency Reduction</h4>
<p class="text-sm text-on-surface-variant mt-1">Documents processed in &lt;1.2 seconds, down from 15 minutes of manual labor.</p>
</div>
</div>
<div class="flex gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary-container">shield_lock</span>
</div>
<div>
<h4 class="font-label-md text-label-md">Human-in-the-Loop</h4>
<p class="text-sm text-on-surface-variant mt-1">Flagged edge cases routed to human experts for 0-error assurance.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 4: Key Results Grid -->
<section class="py-24 bg-surface-container-lowest">
<div class="px-margin-desktop max-w-container-max mx-auto">
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div class="text-center p-8 glass-card rounded-xl border-outline-variant/10">
<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">timer</span>
</div>
<div class="font-headline-md text-headline-md font-bold">92%</div>
<div class="text-sm text-on-surface-variant font-medium mt-1">Manual Reduction</div>
</div>
<div class="text-center p-8 glass-card rounded-xl border-outline-variant/10">
<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/5 text-secondary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">currency_exchange</span>
</div>
<div class="font-headline-md text-headline-md font-bold">$1.8M</div>
<div class="text-sm text-on-surface-variant font-medium mt-1">OpEx Savings</div>
</div>
<div class="text-center p-8 glass-card rounded-xl border-outline-variant/10">
<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<div class="font-headline-md text-headline-md font-bold">12x</div>
<div class="text-sm text-on-surface-variant font-medium mt-1">Faster Processing</div>
</div>
<div class="text-center p-8 glass-card rounded-xl border-outline-variant/10">
<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tertiary/5 text-tertiary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">task_alt</span>
</div>
<div class="font-headline-md text-headline-md font-bold">99.9%</div>
<div class="text-sm text-on-surface-variant font-medium mt-1">Accuracy Rate</div>
</div>
</div>
</div>
</section>
<!-- Section 5: Client Testimonial -->
<section class="py-24 bg-primary text-white overflow-hidden relative">
<div class="absolute inset-0 opacity-10">

</div>
<div class="px-margin-desktop max-w-container-max mx-auto relative z-10">
<div class="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
<span class="material-symbols-outlined text-6xl opacity-30">format_quote</span>
<blockquote class="font-headline-lg text-headline-lg leading-snug">
                        "Auralis AI didn't just give us a tool; they redefined our entire operational backbone. The level of precision we're seeing in document automation was previously unthinkable in our industry. It's the most impactful technology investment we've made in a decade."
                    </blockquote>
<div class="flex flex-col items-center gap-4">
<div class="w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden shadow-xl">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female logistics executive in her late 40s. She has a confident, warm expression and is wearing a dark navy corporate blazer. The background is a blurred office setting with high-key lighting, maintaining the clean, professional, and premium aesthetic of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCitPEt9kaxAqNYBYhPxLHzPyw0_LrOtGJXTYOT9-Ns-e83E2xe2ovee9MySmXZa1lZWUIp6YIPp2HWj7UJWWkLebErZ_004h1BqDcuh7X7ZkuAPWiaRTLWdZRy-1-ioWgRKL6lfhNfdgAxTjJdovPc9HuVjDKY0TLEmXhvvLf4YPcRwT8bhmH0Fdf6bLEmvCOF8nDkTeIClRbyEx09jHjb1dGsm62yI4O7pX9zztD5EyNJUqOoW9to"/>
</div>
<div class="text-center">
<div class="font-label-md text-label-md font-bold">Sarah Chen</div>
<div class="text-sm opacity-80 uppercase tracking-widest mt-1">Chief Operations Officer, NexaFreight</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 6: CTA Section -->
<section class="py-24 bg-surface">
<div class="px-margin-desktop max-w-container-max mx-auto">
<div class="glass-card rounded-3xl p-16 flex flex-col items-center text-center gap-8 shadow-2xl relative overflow-hidden">
<div class="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<span class="material-symbols-outlined text-[200px]">rocket_launch</span>
</div>
<h2 class="font-headline-xl text-headline-xl text-on-surface max-w-2xl">Ready to see similar results in your organization?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Join hundreds of global enterprises using Auralis AI to turn operational bottlenecks into competitive advantages.</p>
<div class="flex flex-col sm:flex-row gap-4 mt-4">
<button class="px-10 py-4 rounded-full font-label-md text-label-md bg-primary text-on-primary hover:scale-105 transition-all shadow-lg">Schedule a Demo</button>
<button class="px-10 py-4 rounded-full font-label-md text-label-md border-2 border-on-surface text-on-surface hover:bg-on-surface/5 transition-all">Download Full Case Study</button>
</div>
<div class="flex items-center gap-8 mt-8 grayscale opacity-50">
<span class="font-bold text-lg">Trusted By:</span>
<div class="flex gap-8 items-center">
<span class="font-black">FORBES 500</span>
<span class="font-black">TECH-CORP</span>
<span class="font-black">LOGIS-SYS</span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-1">
<span class="font-headline-sm text-headline-sm font-black text-on-surface">Auralis AI</span>
<p class="mt-4 text-on-surface-variant/80 font-body-md">Precision in Intelligence.</p>
</div>
<div class="flex flex-col gap-4">
<span class="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider">Product</span>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">Features</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">Enterprise</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">API Docs</a>
</div>
<div class="flex flex-col gap-4">
<span class="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider">Company</span>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">About Us</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">Case Studies</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">Careers</a>
</div>
<div class="flex flex-col gap-4">
<span class="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider">Connect</span>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">LinkedIn</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">Twitter</a>
<a class="text-on-surface-variant/80 hover:text-primary transition-transform hover:translate-x-1 font-body-md text-body-md" href="#">Contact</a>
</div>
</div>
<div class="mt-12 pt-8 border-t border-outline-variant/10 text-center px-margin-desktop">
<p class="text-on-surface-variant/60 font-body-md">© 2024 Auralis AI. Precision in Intelligence.</p>
</div>
</footer>
<script>
        // Simple scroll reveal interaction
        const observerOptions = {
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
            observer.observe(el);
        });
    </script>
`
  },
  "components/forms": {
    bodyClass: "bg-background text-on-background font-body-md min-h-screen selection:bg-primary-container/30",
    html: `
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="flex items-center gap-8">
<span class="font-display-lg text-headline-md font-extrabold text-on-surface dark:text-on-background tracking-tighter">Auralis AI</span>
<div class="hidden lg:flex items-center gap-6">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
</div>
</div>
<div class="flex items-center gap-4">
<button class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Login</button>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md transition-all hover:scale-[1.02] active:scale-95 shadow-sm">Get Started</button>
</div>
</div>
</nav>
<main class="pt-24 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-stack-lg">
<!-- Header Section -->
<header class="py-stack-lg">
<div class="flex flex-col gap-2">
<span class="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm w-fit">
                    Components Library
                </span>
<h1 class="font-headline-xl text-headline-xl text-on-surface">Forms &amp; Editors</h1>
<p class="text-on-surface-variant max-w-2xl font-body-lg text-body-lg">
                    Build high-performance internal tools and user dashboards with our precise form components and rich data editors.
                </p>
</div>
</header>
<!-- Main Grid Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Column 1: Profile & File Uploads -->
<div class="lg:col-span-8 space-y-gutter">
<!-- Profile Form Card -->
<section class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl form-shadow ai-active-border">
<div class="flex items-center justify-between mb-stack-md">
<h2 class="font-headline-md text-headline-md">Personal Information</h2>
<span class="material-symbols-outlined text-primary">person</span>
</div>
<form class="space-y-stack-md">
<div class="flex flex-col md:flex-row items-start md:items-center gap-stack-lg py-4 border-b border-outline-variant/20 mb-4">
<div class="relative group">
<div class="w-24 h-24 rounded-full border-2 border-primary-container bg-surface-container-high overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional studio portrait of a young tech professional with a friendly smile, soft natural lighting, set against a clean minimalist office background, capturing a premium and energetic corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmZdhBKGpEsIbMJx_e-bvxgNU5kNXZnVJovLcG4Xdi3toU9MXIS-1KSa8GOyP-TP8IUUzAmXgJgD1SXtSROUibuURYt6G0SvVvH6ySza1zEmZY-0uh35fVLRn-6G7hJuOtQswwyg9DmcKSRr-jZ-QQ_pvpXdIs-xVfw2jaJKqt05ACUmzRcbt0sbrSp42tXu64KOA3XvR--9dEsPoQWFMF2UhyXyEDLiYmrRyxql1euqBVIsBx0cr"/>
</div>
<button class="absolute bottom-0 right-0 p-1.5 bg-primary text-on-primary rounded-full shadow-lg hover:scale-110 transition-transform" type="button">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
<div>
<h3 class="font-label-md text-label-md text-on-surface">Profile Photo</h3>
<p class="text-label-sm text-on-surface-variant mt-1">Update your photo to help your team recognize you. JPG or PNG. Max 2MB.</p>
<div class="mt-3 flex gap-2">
<button class="text-label-sm px-4 py-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors" type="button">Upload new</button>
<button class="text-label-sm px-4 py-2 text-error hover:bg-error-container/20 rounded-lg transition-colors" type="button">Remove</button>
</div>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">First Name <span class="text-error">*</span></label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest font-body-md" type="text" value="Julian"/>
</div>
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">Last Name</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest font-body-md" type="text" value="Aura"/>
</div>
</div>
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">Email Address</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
<input class="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest font-body-md" type="email" value="julian@auralis.ai"/>
</div>
</div>
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">Bio</label>
<textarea class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest font-body-md resize-none" placeholder="Tell us about yourself..." rows="4">Lead Product Designer at Auralis AI focusing on precision intelligence interfaces and premium generative assets.</textarea>
<p class="text-[12px] text-on-surface-variant text-right">0/300 characters</p>
</div>
</form>
</section>
<!-- File Uploader -->
<section class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl form-shadow">
<h2 class="font-headline-md text-headline-md mb-stack-md">Project Assets</h2>
<div class="border-2 border-dashed border-outline-variant rounded-xl p-stack-lg bg-surface-container-low/30 hover:bg-surface-container-low transition-colors group cursor-pointer text-center">
<span class="material-symbols-outlined text-4xl text-primary/50 group-hover:text-primary transition-colors mb-4">cloud_upload</span>
<p class="font-label-md text-on-surface">Click to upload or drag and drop</p>
<p class="text-label-sm text-on-surface-variant mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
</div>
<div class="mt-stack-md space-y-3">
<!-- Upload Item 1 -->
<div class="flex items-center gap-4 p-3 border border-outline-variant rounded-lg bg-white">
<div class="p-2 bg-primary-container rounded text-primary">
<span class="material-symbols-outlined">image</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-end mb-1">
<span class="text-label-md">brand_guide_2024.pdf</span>
<span class="text-label-sm text-primary">85%</span>
</div>
<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 85%"></div>
</div>
</div>
<button class="text-on-surface-variant hover:text-error"><span class="material-symbols-outlined">close</span></button>
</div>
<!-- Upload Item 2 (Success) -->
<div class="flex items-center gap-4 p-3 border border-outline-variant rounded-lg bg-white">
<div class="p-2 bg-secondary-container rounded text-secondary">
<span class="material-symbols-outlined">description</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-end mb-1">
<span class="text-label-md">quarterly_report.xlsx</span>
<span class="text-label-sm text-secondary">Complete</span>
</div>
<div class="h-1.5 w-full bg-secondary-container/30 rounded-full overflow-hidden">
<div class="h-full bg-secondary rounded-full" style="width: 100%"></div>
</div>
</div>
<button class="text-secondary"><span class="material-symbols-outlined">check_circle</span></button>
</div>
</div>
</section>
<!-- Rich Text Editor Mockup -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl form-shadow overflow-hidden">
<div class="bg-surface-container-low border-b border-outline-variant p-2 flex flex-wrap items-center gap-1">
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">format_bold</span></button>
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">format_italic</span></button>
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">format_underlined</span></button>
<div class="h-6 w-px bg-outline-variant mx-1"></div>
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">format_list_numbered</span></button>
<div class="h-6 w-px bg-outline-variant mx-1"></div>
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">link</span></button>
<button class="p-2 hover:bg-white rounded transition-colors"><span class="material-symbols-outlined text-[20px]">image</span></button>
<div class="h-6 w-px bg-outline-variant mx-1"></div>
<button class="p-2 bg-primary/10 text-primary rounded px-3 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">auto_awesome</span>
<span class="text-label-sm">AI Rewrite</span>
</button>
</div>
<div class="p-stack-lg min-h-[300px] font-body-md text-on-surface-variant focus:outline-none" contenteditable="true">
<h2 class="text-headline-md font-bold text-on-surface mb-4">The Future of Generative UI</h2>
<p class="mb-4">Welcome to the <b>Auralis AI</b> content editor. This interface is designed for high-density information management and creative output. You can edit this text directly.</p>
<p class="mb-4">Precision Intelligence is not just about the output, but the <i>experience</i> of the process. Our forms and editors leverage tactile depth and high-contrast aesthetics to keep users focused and efficient.</p>
<ul class="list-disc ml-5 space-y-2 mb-4">
<li>Multi-threaded processing indicators</li>
<li>Real-time collaborative editing anchors</li>
<li>Context-aware AI completions</li>
</ul>
</div>
<div class="px-stack-lg py-3 border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
<span class="text-label-sm text-on-surface-variant">142 words</span>
<div class="flex gap-2">
<span class="inline-flex items-center gap-1.5 text-label-sm text-secondary">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                Saved to Cloud
                            </span>
</div>
</div>
</section>
</div>
<!-- Column 2: Billing & Pickers -->
<div class="lg:col-span-4 space-y-gutter">
<!-- Billing Form -->
<section class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl form-shadow">
<h2 class="font-headline-md text-headline-md mb-stack-md">Billing Details</h2>
<form class="space-y-stack-md">
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">Cardholder Name</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="Jane Doe" type="text"/>
</div>
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">Card Number</label>
<div class="relative">
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="0000 0000 0000 0000" type="text"/>
<div class="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
<div class="w-8 h-5 bg-surface-container rounded-sm border border-outline-variant"></div>
<div class="w-8 h-5 bg-surface-container rounded-sm border border-outline-variant"></div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-stack-md">
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">Expiry Date</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="MM/YY" type="text"/>
</div>
<div class="space-y-1.5">
<label class="text-label-md text-on-surface">CVV</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="***" type="password"/>
</div>
</div>
<div class="pt-4">
<button class="w-full bg-on-background text-surface py-3.5 rounded-xl font-label-md shadow-sm hover:opacity-90 transition-all">
                                Update Billing Information
                            </button>
</div>
</form>
</section>
<!-- Date/Time Picker -->
<section class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl form-shadow">
<h2 class="font-headline-md text-headline-md mb-stack-md">Schedule</h2>
<div class="space-y-stack-md">
<div class="p-4 bg-surface-container-low rounded-xl">
<div class="flex justify-between items-center mb-4">
<button class="p-1 hover:bg-white rounded-full transition-colors"><span class="material-symbols-outlined">chevron_left</span></button>
<span class="font-label-md">October 2024</span>
<button class="p-1 hover:bg-white rounded-full transition-colors"><span class="material-symbols-outlined">chevron_right</span></button>
</div>
<div class="grid grid-cols-7 gap-1 text-center mb-2">
<span class="text-[10px] text-on-surface-variant font-bold">MO</span>
<span class="text-[10px] text-on-surface-variant font-bold">TU</span>
<span class="text-[10px] text-on-surface-variant font-bold">WE</span>
<span class="text-[10px] text-on-surface-variant font-bold">TH</span>
<span class="text-[10px] text-on-surface-variant font-bold">FR</span>
<span class="text-[10px] text-on-surface-variant font-bold">SA</span>
<span class="text-[10px] text-on-surface-variant font-bold">SU</span>
</div>
<div class="grid grid-cols-7 gap-1">
<!-- Calendar Days (Simulated) -->
<button class="aspect-square flex items-center justify-center text-label-sm text-on-surface-variant/40">30</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">1</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">2</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">3</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">4</button>
<button class="aspect-square flex items-center justify-center text-label-sm bg-primary text-on-primary rounded-lg font-bold">5</button>
<button class="aspect-square flex items-center justify-center text-label-sm bg-primary-container text-on-primary-container">6</button>
<button class="aspect-square flex items-center justify-center text-label-sm bg-primary-container text-on-primary-container">7</button>
<button class="aspect-square flex items-center justify-center text-label-sm bg-primary-container text-on-primary-container">8</button>
<button class="aspect-square flex items-center justify-center text-label-sm bg-primary-container text-on-primary-container">9</button>
<button class="aspect-square flex items-center justify-center text-label-sm bg-primary text-on-primary rounded-lg font-bold">10</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">11</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">12</button>
<button class="aspect-square flex items-center justify-center text-label-sm hover:bg-white rounded-lg">13</button>
</div>
</div>
<div class="flex items-center gap-3">
<div class="flex-1 space-y-1">
<label class="text-label-sm text-on-surface-variant">Start Time</label>
<select class="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest text-label-sm">
<option>09:00 AM</option>
<option>10:00 AM</option>
</select>
</div>
<div class="flex-1 space-y-1">
<label class="text-label-sm text-on-surface-variant">End Time</label>
<select class="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest text-label-sm">
<option>05:00 PM</option>
<option>06:00 PM</option>
</select>
</div>
</div>
</div>
</section>
<!-- Validation States Showroom -->
<section class="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl form-shadow">
<h2 class="font-headline-md text-headline-md mb-stack-md">Input Validation</h2>
<div class="space-y-stack-md">
<!-- Error State -->
<div class="space-y-1.5">
<label class="text-label-md text-error">API Endpoint</label>
<div class="relative">
<input class="w-full px-4 py-3 rounded-xl border border-error bg-error-container/5 text-error" type="text" value="invalid-url"/>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-error">error</span>
</div>
<p class="text-label-sm text-error">Please enter a valid https URL.</p>
</div>
<!-- Success State -->
<div class="space-y-1.5">
<label class="text-label-md text-secondary">Username</label>
<div class="relative">
<input class="w-full px-4 py-3 rounded-xl border border-secondary bg-secondary-container/5" type="text" value="auralis_founder"/>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<p class="text-label-sm text-secondary">Username is available.</p>
</div>
<!-- Disabled/Required State -->
<div class="space-y-1.5 opacity-60">
<label class="text-label-md text-on-surface">Organization ID (Read Only)</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low cursor-not-allowed" disabled="" type="text" value="ORG-992384-B"/>
</div>
</div>
</section>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-dim w-full py-stack-lg border-t border-outline-variant mt-20">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<span class="font-display-lg text-headline-sm font-bold text-on-surface mb-4 block">Auralis AI</span>
<p class="text-on-surface-variant font-body-sm text-label-md pr-8">
                    © 2024 Auralis AI. All rights reserved. Precision Intelligence. High-performance design for future-thinking teams.
                </p>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Product</span>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Terms of Service</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Resources</span>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Cookie Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Security</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Company</span>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Contact</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Careers</a>
</div>
</div>
</footer>
<!-- FAB for AI Assistance -->
<button class="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50">
<span class="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">auto_awesome</span>
</button>
<script>
        // Micro-interaction for form highlighting
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                const card = input.closest('section');
                if(card) {
                    // Subtle enhancement when interacting with a section
                    // card.style.borderColor = 'rgba(0, 218, 243, 0.4)';
                }
            });
            input.addEventListener('blur', () => {
                const card = input.closest('section');
                if(card) {
                    // card.style.borderColor = '#E9E9EF';
                }
            });
        });

        // Toggle mobile nav (placeholder logic)
        console.log("Auralis AI Design System Loaded.");
    </script>
`
  },
  "marketing/home": {
    bodyClass: "font-body-md text-on-surface",
    html: `
<!-- TopNavBar (Shared Component) -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-margin-desktop py-4">
<div class="font-headline-md text-headline-md font-extrabold text-on-surface dark:text-on-primary-fixed">Auralis AI</div>
<nav class="hidden md:flex gap-8">
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Agency</a>
</nav>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-md text-label-md scale-95 transition-transform duration-150 hover:scale-100 active:scale-90 font-bold">
                Get Started
            </button>
</div>
</header>
<main class="pt-24">
<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-margin-desktop py-stack-lg text-center relative overflow-hidden">
<div class="relative z-10 max-w-4xl mx-auto">
<span class="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 text-primary rounded-full font-label-sm text-label-sm mb-6">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
                    Next-Gen AI Automation Platform
                </span>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
                    Automate your AI workflows with <span class="text-primary underline decoration-primary-container decoration-4">surgical precision.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
                    The all-in-one platform for teams and agencies to build, deploy, and scale AI agents without the technical overhead.
                </p>
<div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
<button class="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline-md text-headline-md font-bold shadow-lg glow-on-hover transition-all">
                        Start your free trial
                    </button>
<button class="bg-transparent border-2 border-on-surface px-8 py-4 rounded-xl font-headline-md text-headline-md font-bold hover:bg-surface-container transition-all">
                        Book a demo
                    </button>
</div>
</div>
<!-- UI Mockup / Dashboard Preview -->
<div class="relative max-w-5xl mx-auto mt-12 rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-2xl overflow-hidden ai-card-border p-4">
<div class="flex items-center gap-2 mb-4 px-2">
<div class="w-3 h-3 rounded-full bg-error/20"></div>
<div class="w-3 h-3 rounded-full bg-secondary-container/50"></div>
<div class="w-3 h-3 rounded-full bg-primary-container/50"></div>
<div class="ml-4 h-6 w-48 bg-surface-container rounded-full"></div>
</div>
<div class="grid grid-cols-12 gap-4 h-[500px]">
<div class="col-span-3 border border-outline-variant rounded-xl p-4 flex flex-col gap-3">
<div class="h-8 w-full bg-surface-container rounded-lg"></div>
<div class="h-24 w-full bg-surface-container/50 rounded-lg flex items-center justify-center border-dashed border-2 border-outline-variant">
<span class="material-symbols-outlined text-outline">add_circle</span>
</div>
<div class="flex-1 space-y-3 mt-4">
<div class="h-4 w-3/4 bg-surface-container rounded"></div>
<div class="h-4 w-1/2 bg-surface-container rounded"></div>
<div class="h-4 w-5/6 bg-surface-container rounded"></div>
</div>
</div>
<div class="col-span-9 relative border border-outline-variant rounded-xl overflow-hidden bg-white">
<div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#6b7a7d 0.5px, transparent 0.5px); background-size: 20px 20px;"></div>
<!-- Automation Nodes Mockup -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center gap-16">
<div class="w-32 h-20 bg-primary-container/20 border-2 border-primary rounded-lg flex flex-col items-center justify-center shadow-md relative z-10">
<span class="material-symbols-outlined text-primary mb-1">input</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Trigger</span>
</div>
<div class="w-48 h-32 bg-white border border-outline-variant rounded-xl shadow-xl flex flex-col p-3 relative z-10">
<div class="flex justify-between items-center mb-2">
<span class="text-[10px] font-bold text-primary">GPT-4o Agent</span>
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
</div>
<div class="space-y-2">
<div class="h-2 w-full bg-surface-container rounded"></div>
<div class="h-2 w-3/4 bg-surface-container rounded"></div>
<div class="h-2 w-full bg-surface-container rounded"></div>
</div>
<div class="mt-auto flex justify-between">
<div class="w-3 h-3 rounded bg-outline-variant"></div>
<div class="w-3 h-3 rounded bg-primary"></div>
</div>
</div>
<div class="w-32 h-20 bg-secondary-container/20 border-2 border-secondary rounded-lg flex flex-col items-center justify-center shadow-md relative z-10">
<span class="material-symbols-outlined text-secondary mb-1">send</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Webhook</span>
</div>
<!-- Connector Lines -->
<svg class="absolute inset-0 w-full h-full pointer-events-none">
<path class="node-path" d="M 330 250 L 450 250" fill="none" stroke="#006875" stroke-width="2"></path>
<path class="node-path" d="M 645 250 L 750 250" fill="none" stroke="#006c46" stroke-width="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>
<!-- Social Proof -->
<section class="max-w-7xl mx-auto px-margin-desktop py-12 border-y border-outline-variant/30">
<p class="text-center font-label-md text-label-md text-on-surface-variant mb-8">Trusted by 500+ innovative AI teams</p>
<div class="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-on-surface"></div><span class="font-bold">VELOCITY</span></div>
<div class="flex items-center gap-2"><div class="w-8 h-8 rounded bg-primary"></div><span class="font-bold">LUMINA</span></div>
<div class="flex items-center gap-2"><div class="w-10 h-6 rounded-sm bg-secondary"></div><span class="font-bold">QUANTUM</span></div>
<div class="flex items-center gap-2"><div class="w-8 h-8 rotate-45 bg-on-surface-variant"></div><span class="font-bold">SYNAPSE</span></div>
<div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full border-4 border-primary"></div><span class="font-bold">NEXUS</span></div>
</div>
</section>
<!-- Features Grid -->
<section class="max-w-7xl mx-auto px-margin-desktop py-stack-lg">
<div class="grid md:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<div class="p-8 bg-white border border-outline-variant rounded-2xl hover:shadow-xl transition-all group ai-card-border">
<div class="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-md" style="font-variation-settings: 'FILL' 1;">hub</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4">Agent Orchestration</h3>
<p class="text-on-surface-variant">Connect multiple LLMs and tools into cohesive multi-step workflows that handle complex logic and decision making.</p>
</div>
<!-- Card 2 -->
<div class="p-8 bg-white border border-outline-variant rounded-2xl hover:shadow-xl transition-all group ai-card-border">
<div class="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-md" style="font-variation-settings: 'FILL' 1;">integration_instructions</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4">Seamless Integrations</h3>
<p class="text-on-surface-variant">Native connectors for 200+ enterprise apps. Deploy your agents to Slack, Discord, WhatsApp, or any custom API in seconds.</p>
</div>
<!-- Card 3 -->
<div class="p-8 bg-white border border-outline-variant rounded-2xl hover:shadow-xl transition-all group ai-card-border">
<div class="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-headline-md" style="font-variation-settings: 'FILL' 1;">analytics</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4">Real-time Analytics</h3>
<p class="text-on-surface-variant">Monitor token usage, performance latency, and agent accuracy through a sleek dashboard designed for enterprise scale.</p>
</div>
</div>
</section>
<!-- Workflow Preview (Asymmetric Layout) -->
<section class="max-w-7xl mx-auto px-margin-desktop py-stack-lg flex flex-col lg:flex-row items-center gap-16">
<div class="flex-1">
<h2 class="font-headline-xl text-headline-xl mb-6">Build smarter agents <br/>in half the time.</h2>
<div class="space-y-8">
<div class="flex gap-4">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-on-surface text-white flex items-center justify-center font-bold">1</div>
<div>
<h4 class="font-bold text-body-lg mb-1">Define your persona</h4>
<p class="text-on-surface-variant">Describe your agent's role, tone, and specific knowledge base using our intuitive prompt editor.</p>
</div>
</div>
<div class="flex gap-4">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-on-surface text-white flex items-center justify-center font-bold">2</div>
<div>
<h4 class="font-bold text-body-lg mb-1">Chain tools &amp; actions</h4>
<p class="text-on-surface-variant">Drag and drop capabilities like web searching, database querying, or image generation into the workflow.</p>
</div>
</div>
<div class="flex gap-4">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-on-surface text-white flex items-center justify-center font-bold">3</div>
<div>
<h4 class="font-bold text-body-lg mb-1">Deploy anywhere</h4>
<p class="text-on-surface-variant">One-click deployment to a public URL, a chat widget, or your own application's backend.</p>
</div>
</div>
</div>
</div>
<div class="flex-1 w-full">
<div class="relative bg-surface-container rounded-3xl p-8 aspect-square flex items-center justify-center">
<div class="w-full h-full rounded-2xl bg-cover bg-center shadow-lg" data-alt="A sophisticated 3D isometric laboratory scene with glowing glass containers, holographic interfaces, and clean architectural lines. The lighting is crisp and cool, featuring electric cyan and deep ink black highlights. The overall mood is high-performance technology and laboratory precision in a futuristic light-mode setting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFgAekaAyXzWG4sh4CsMbaFuCQ-_sBBCF2Oyjs9jX8nKynB83Jq9ZkEnYJfuN0E937IlyxJ2RUAsVuCs1W3hDMz9wN4rvDZBq9byLPsl8shz2hS3kjeAkCGA_SMIaXcuhXssfjvoCmMsA5w-bX9EgrKHI0mDGjovaXf2s7FJulNz4HvbKlpVH3m1PW_gU6OBg-Y1NVUEWDx-cUeshuzZ-_MoR2DDxk1PPMlMprO4eKGwsQepEBxbhL')"></div>
</div>
</div>
</section>
<!-- Pricing Teaser -->
<section class="bg-surface-container-low py-stack-lg">
<div class="max-w-7xl mx-auto px-margin-desktop">
<div class="text-center mb-12">
<h2 class="font-headline-xl text-headline-xl mb-4">Scalable pricing for every team</h2>
<p class="text-on-surface-variant">From startups to enterprise agencies.</p>
</div>
<div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
<!-- Starter -->
<div class="p-10 bg-white border border-outline-variant rounded-2xl flex flex-col">
<div class="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Growth</div>
<div class="flex items-baseline gap-1 mb-6">
<span class="text-4xl font-bold font-headline-xl">$49</span>
<span class="text-on-surface-variant">/month</span>
</div>
<ul class="space-y-4 mb-10 flex-1">
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary">check_circle</span> 50 Active Agents</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary">check_circle</span> Unlimited Executions</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary">check_circle</span> Standard Analytics</li>
</ul>
<button class="w-full py-4 rounded-xl border-2 border-on-surface font-bold hover:bg-surface-container transition-all">Get Started</button>
</div>
<!-- Pro -->
<div class="p-10 bg-on-surface text-white border-2 border-primary rounded-2xl flex flex-col relative overflow-hidden">
<div class="absolute top-4 right-4 px-3 py-1 bg-primary text-on-primary rounded-full text-[10px] font-bold">POPULAR</div>
<div class="font-label-md text-label-md text-primary-fixed mb-2 uppercase tracking-widest">Professional</div>
<div class="flex items-baseline gap-1 mb-6 text-white">
<span class="text-4xl font-bold font-headline-xl">$199</span>
<span class="text-primary-fixed/60">/month</span>
</div>
<ul class="space-y-4 mb-10 flex-1">
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary-fixed">check_circle</span> Unlimited Agents</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary-fixed">check_circle</span> Priority Infrastructure</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary-fixed">check_circle</span> Advanced AI Observability</li>
<li class="flex items-center gap-3"><span class="material-symbols-outlined text-secondary-fixed">check_circle</span> Dedicated Support</li>
</ul>
<button class="w-full py-4 rounded-xl bg-primary-container text-on-primary-container font-bold hover:scale-[1.02] transition-all">Start Free Trial</button>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="max-w-7xl mx-auto px-margin-desktop py-stack-lg">
<div class="bg-primary-container/10 rounded-3xl p-16 text-center border border-primary/20 relative overflow-hidden">
<div class="relative z-10">
<h2 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Ready to scale your intelligence?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
                        Join 500+ teams automating their growth with Auralis AI. No credit card required to start.
                    </p>
<button class="bg-primary-container text-on-primary-container px-12 py-5 rounded-xl font-headline-md text-headline-md font-bold shadow-xl hover:shadow-primary-container/20 transition-all">
                        Start your free trial
                    </button>
</div>
<!-- Abstract Background Elements -->
<div class="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
<div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
</div>
</section>
</main>
<!-- Footer (Shared Component) -->
<footer class="bg-surface-container dark:bg-surface-container-highest w-full mt-24">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter max-w-7xl mx-auto px-margin-desktop py-stack-lg">
<div class="col-span-2">
<div class="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-primary-fixed mb-4">Auralis AI</div>
<p class="text-on-surface-variant font-body-md text-body-md max-w-xs mb-6">Building the foundation for autonomous AI agent infrastructure.</p>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
</div>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-6">Product</h4>
<ul class="space-y-3 font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Features</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Pricing</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Integrations</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Agents</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-6">Company</h4>
<ul class="space-y-3 font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">About</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-6">Support</h4>
<ul class="space-y-3 font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Documentation</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Help Center</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-6">Legal</h4>
<ul class="space-y-3 font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Privacy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div class="max-w-7xl mx-auto px-margin-desktop py-8 border-t border-outline-variant/30 text-center md:text-left">
<p class="font-label-sm text-label-sm text-on-surface-variant opacity-80">© 2024 Auralis AI. All rights reserved.</p>
</div>
</footer>
<script>
        // Simple scroll effect for Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.remove('shadow-sm');
            } else {
                header.classList.add('shadow-sm');
                header.classList.remove('shadow-md');
            }
        });

        // Click interaction feedback
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = '', 150);
            });
        });
    </script>
`
  },
  "marketing/home-mobile": {
    bodyClass: "bg-background text-on-background",
    html: `
<!-- Top Navigation -->
<header class="fixed top-0 w-full bg-surface/80 dark:bg-on-background/80 backdrop-blur-md z-50 border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile h-16 shadow-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-2xl" data-weight="fill">bolt</span>
<span class="font-headline-md text-headline-md font-bold text-on-background">Auralis AI</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant">search</span>
<div class="w-8 h-8 rounded-full bg-primary-fixed-dim border border-outline-variant/30 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up professional studio headshot of a diverse female executive with a confident expression, set against a clean, minimal light grey background. The lighting is soft and high-key, reflecting a premium and high-tech corporate aesthetic consistent with a modern AI agency's visual identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh3Etny6d-JFD8231-nt08FBFdxiazjd45F0QV2joUvb7rmrKTcLJ_-Q9GcOlJ1JiSS93PfUMuPdpzsQ0GMWIfAf7XGURgcnifSpcoDRh7HshMXVkHJ31I2xd_74z7dmrRz5OgFzamEcx2ks89eP712AKPC6QnDXPI8QK4eggd4ynnIFhfsEsZlOeJ3o4iDDmROaC02JLlzMIwEU9Q8E1_qJ6pR-Qt8qzIHHnp-37kZxzQk8fyAc10"/>
</div>
</div>
</header>
<main class="pt-16 pb-32">
<!-- Hero Section -->
<section class="px-margin-mobile pt-10 pb-6 relative overflow-hidden">
<div class="relative z-10">
<div class="inline-flex items-center gap-2 bg-secondary-container/20 border border-secondary/20 px-3 py-1 rounded-full mb-4">
<span class="w-2 h-2 rounded-full bg-secondary pulse-indicator"></span>
<span class="text-secondary font-label-sm text-label-sm-mobile font-bold tracking-wider uppercase">v2.4 Live Now</span>
</div>
<h1 class="font-display-lg-mobile text-display-lg-mobile text-on-background mb-4">
                    Automate your AI workflows with <span class="text-primary">surgical precision</span>
</h1>
<p class="font-body-md text-body-md-mobile text-on-surface-variant mb-8 max-w-[90%]">
                    Deploy enterprise-grade intelligence across your entire stack. Fast, secure, and obsessively accurate.
                </p>
<div class="flex flex-col gap-3">
<button class="bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary-container/20 active:scale-95 transition-transform text-center">
                        Start Free Trial
                    </button>
<button class="bg-transparent border-2 border-on-background text-on-background font-label-md text-label-md px-8 py-4 rounded-xl font-bold active:scale-95 transition-transform text-center">
                        Book Demo
                    </button>
</div>
</div>
<!-- Abstract Background Element -->
<div class="absolute -top-20 -right-20 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full"></div>
</section>
<!-- Product Preview Mockup -->
<section class="px-margin-mobile mb-12">
<div class="relative rounded-2xl border border-outline-variant/50 bg-white p-2 shadow-2xl overflow-hidden">
<!-- UI Header -->
<div class="flex items-center justify-between p-3 border-b border-outline-variant/20 mb-2">
<div class="flex gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-error/20"></div>
<div class="w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
<div class="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
</div>
<div class="bg-surface-container px-3 py-0.5 rounded-full">
<span class="text-[10px] text-on-surface-variant font-medium">auralis.ai/dashboard</span>
</div>
</div>
<!-- UI Content Canvas -->
<div class="aspect-[9/12] bg-surface-container-lowest rounded-lg p-4 overflow-hidden relative">
<div class="flex flex-col gap-4">
<div class="h-6 w-1/2 bg-surface-container-high rounded-md animate-pulse"></div>
<div class="grid grid-cols-2 gap-3">
<div class="h-20 bg-primary-container/10 border border-primary-container/30 rounded-xl flex flex-col items-center justify-center gap-2">
<span class="material-symbols-outlined text-primary">analytics</span>
<div class="h-2 w-10 bg-primary/20 rounded"></div>
</div>
<div class="h-20 bg-surface-container rounded-xl"></div>
</div>
<div class="h-32 bg-white border border-outline-variant/20 rounded-xl p-3 flex flex-col gap-2">
<div class="h-3 w-3/4 bg-surface-container rounded"></div>
<div class="h-3 w-1/2 bg-surface-container rounded"></div>
<div class="mt-auto flex justify-between items-center">
<div class="h-6 w-20 bg-primary-container rounded-full"></div>
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full bg-surface-variant border border-white"></div>
<div class="w-6 h-6 rounded-full bg-primary-fixed border border-white"></div>
</div>
</div>
</div>
<div class="h-24 bg-on-background rounded-xl p-3">
<div class="h-2 w-full bg-surface-variant/20 rounded mb-2"></div>
<div class="h-2 w-2/3 bg-surface-variant/20 rounded mb-4"></div>
<div class="h-8 w-full bg-primary-container rounded-lg"></div>
</div>
</div>
<!-- Glow effect -->
<div class="absolute bottom-0 right-0 w-32 h-32 bg-primary-container/20 blur-2xl"></div>
</div>
<!-- AI Processing Signal -->
<div class="absolute top-0 left-0 w-full h-[2px] bg-primary-container"></div>
</div>
</section>
<!-- Features List -->
<section class="px-margin-mobile mb-16">
<h2 class="font-headline-lg text-headline-lg mb-8">Performance focused tools</h2>
<div class="space-y-4">
<div class="glass-card p-5 rounded-2xl flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-3xl">bolt</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-background mb-1">Ultra-Low Latency</h3>
<p class="text-on-surface-variant font-body-md text-body-md-mobile">Sub-100ms response times for real-time customer experiences.</p>
</div>
</div>
<div class="glass-card p-5 rounded-2xl flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary shrink-0">
<span class="material-symbols-outlined text-3xl" data-weight="fill">verified_user</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-background mb-1">Encrypted Logic</h3>
<p class="text-on-surface-variant font-body-md text-body-md-mobile">Zero-trust architecture ensuring your training data stays yours.</p>
</div>
</div>
<div class="glass-card p-5 rounded-2xl flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary shrink-0">
<span class="material-symbols-outlined text-3xl">hub</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-background mb-1">Native Integrations</h3>
<p class="text-on-surface-variant font-body-md text-body-md-mobile">One-click connect to 200+ enterprise SaaS platforms.</p>
</div>
</div>
</div>
</section>
<!-- Pricing Teaser -->
<section class="px-margin-mobile mb-16">
<div class="text-center mb-8">
<h2 class="font-headline-lg text-headline-lg mb-2">Scale as you grow</h2>
<p class="text-on-surface-variant font-body-md text-body-md-mobile">Simple usage-based pricing.</p>
</div>
<div class="flex flex-col gap-6">
<!-- Active Pricing Card -->
<div class="bg-on-background text-white p-8 rounded-[2rem] relative shadow-xl">
<div class="absolute -top-3 right-8 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Popular</div>
<span class="text-primary-container font-label-md uppercase tracking-widest mb-2 block">Professional</span>
<div class="flex items-baseline gap-1 mb-6">
<span class="text-4xl font-bold">$99</span>
<span class="text-surface-variant/60 font-body-md">/mo</span>
</div>
<ul class="space-y-4 mb-8">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-container text-xl">check_circle</span>
<span class="text-surface-variant text-sm">Up to 50k monthly requests</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-container text-xl">check_circle</span>
<span class="text-surface-variant text-sm">Advanced Prompt Engineering</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-container text-xl">check_circle</span>
<span class="text-surface-variant text-sm">Priority Support Access</span>
</li>
</ul>
<button class="w-full bg-primary-container text-on-primary-container font-bold py-4 rounded-xl active:scale-95 transition-transform">
                        Choose Pro
                    </button>
</div>
<!-- Secondary Pricing Card -->
<div class="bg-white border border-outline-variant p-8 rounded-[2rem]">
<span class="text-on-surface-variant font-label-md uppercase tracking-widest mb-2 block">Starter</span>
<div class="flex items-baseline gap-1 mb-6">
<span class="text-4xl font-bold">$29</span>
<span class="text-on-surface-variant/60 font-body-md">/mo</span>
</div>
<button class="w-full border-2 border-on-background text-on-background font-bold py-4 rounded-xl active:scale-95 transition-transform">
                        Start for Free
                    </button>
</div>
</div>
</section>
<!-- Testimonials Swipe -->
<section class="mb-16">
<h2 class="px-margin-mobile font-headline-lg text-headline-lg mb-6">Trusted by innovators</h2>
<div class="flex overflow-x-auto no-scrollbar gap-4 px-margin-mobile snap-x snap-mandatory">
<!-- Testimonial 1 -->
<div class="min-w-[300px] bg-surface-container p-6 rounded-2xl snap-center border border-outline-variant/30">
<div class="flex gap-1 mb-4">
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
</div>
<p class="font-body-md text-on-surface mb-6 italic">"The precision of Auralis's automation layer reduced our operational overhead by nearly 40% in just two months."</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional close-up of a creative director in a high-tech studio environment. The subject has short, styled hair and is wearing a modern black turtleneck. The background features soft bokeh lights in cool blue and white tones, suggesting a premium, technologically advanced workspace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_uZFOHMiNQCYe32Yq4WfQxNljrxO9RVl-1Dx9yTkHvqyUUtRIeB7SYY9OKycWHNY1cWp9Hw0ny5Kj8Cuw7vEktLsnJG-UKq5IishcrIr-891C4Jll4qgfuiElRKCo0EE7igwmivGH82H3zUywSWKKXjvi3ZRV8ir1hnUnONQnyI2wlM4GQfD8su6P_N_ctodrjjuaMREOeiHPx6_CTAPFv9HM4uEeJRDphU4dBjsCdbvDRXsA_3lw"/>
</div>
<div>
<p class="font-bold text-sm">Marcus Chen</p>
<p class="text-xs text-on-surface-variant">CTO at Velocity</p>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div class="min-w-[300px] bg-surface-container p-6 rounded-2xl snap-center border border-outline-variant/30">
<div class="flex gap-1 mb-4">
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-primary-container text-sm" data-weight="fill">star</span>
</div>
<p class="font-body-md text-on-surface mb-6 italic">"Integrating their API was seamless. It's the most stable AI infrastructure we've tested to date."</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up portrait of a female software engineer in a modern workspace. She has a focused yet friendly expression, wearing minimalist tech-wear. The lighting is bright and clean with accents of electric cyan reflecting off glass surfaces in the background, matching a high-end AI brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWvfOwfJcmBwTTaW3-BuOKRIQ1FfyodX4Ofcm756V6NINZleqeSesOES7eBL1gsDMa63yxxfW08-NzweNnwJWzrfFIVBhFSy7EQcjKK9BMknPL22WralyQ7Dmpy0BKwFShTOO6AKUDVozT8KoKT2-7OANcRW-ypfCGLNPtkP9IPkYjKG1mVhOAUqo0serukBTdv04WQqPL8AtOvzXpEkO_q39hz1yaVgCAApWh_O_oHWawHCS_HYj"/>
</div>
<div>
<p class="font-bold text-sm">Sarah Jenkins</p>
<p class="text-xs text-on-surface-variant">Lead Eng at Neos</p>
</div>
</div>
</div>
</div>
<!-- Swipe Indicator -->
<div class="flex justify-center gap-2 mt-6">
<div class="w-8 h-1 rounded-full bg-on-background"></div>
<div class="w-2 h-1 rounded-full bg-outline-variant"></div>
<div class="w-2 h-1 rounded-full bg-outline-variant"></div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 w-full z-50 bg-surface/90 dark:bg-on-background/90 backdrop-blur-lg border-t border-outline-variant/20 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center pt-2 pb-6 px-4">
<a class="flex flex-col items-center justify-center text-primary dark:text-primary-container font-bold bg-primary-container/10 rounded-xl px-3 py-1 active:scale-90 transition-all" href="#">
<span class="material-symbols-outlined" data-weight="fill">home</span>
<span class="font-label-sm text-label-sm-mobile">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:text-primary active:scale-90 transition-all" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-sm text-label-sm-mobile">Dash</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:text-primary active:scale-90 transition-all" href="#">
<span class="material-symbols-outlined">payments</span>
<span class="font-label-sm text-label-sm-mobile">Billing</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:text-primary active:scale-90 transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-sm text-label-sm-mobile">Settings</span>
</a>
</nav>
<!-- Sticky CTA Overlay -->
<div class="fixed bottom-24 left-margin-mobile right-margin-mobile z-40 md:hidden">
<div class="bg-on-background/95 text-white p-4 rounded-2xl flex items-center justify-between shadow-2xl backdrop-blur-sm border border-white/10">
<div class="flex flex-col">
<span class="text-[10px] font-bold text-primary-container uppercase tracking-wider">Limited Offer</span>
<span class="text-sm font-semibold">Start 14-day free trial</span>
</div>
<button class="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold text-sm active:scale-95 transition-transform">
                Claim Now
            </button>
</div>
</div>
<script>
        // Micro-interactions for horizontal scroll
        const testimonialScroll = document.querySelector('.no-scrollbar');
        const indicators = document.querySelectorAll('.flex.justify-center.gap-2 div');

        testimonialScroll.addEventListener('scroll', () => {
            const scrollPercent = testimonialScroll.scrollLeft / (testimonialScroll.scrollWidth - testimonialScroll.clientWidth);
            const activeIndex = Math.round(scrollPercent * (indicators.length - 1));
            
            indicators.forEach((dot, idx) => {
                if(idx === activeIndex) {
                    dot.className = 'w-8 h-1 rounded-full bg-on-background transition-all duration-300';
                } else {
                    dot.className = 'w-2 h-1 rounded-full bg-outline-variant transition-all duration-300';
                }
            });
        });
    </script>
`
  },
  "dashboard/lms": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary/30 selection:text-primary min-h-screen",
    html: `
<!-- Top App Bar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-20 bg-surface/60 dark:bg-surface/60 backdrop-blur-xl border-b border-white/10">
<div class="flex items-center gap-stack-md">
<span class="text-headline-md font-display-lg font-bold text-primary">Auralis LMS</span>
</div>
<div class="hidden md:flex flex-1 max-w-xl mx-gutter">
<div class="relative w-full group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-2 pl-10 pr-4 focus:ring-1 focus:ring-secondary-fixed-dim outline-none transition-all text-body-md placeholder:text-outline-variant" placeholder="Search analytics, students, or courses..." type="text"/>
</div>
</div>
<div class="flex items-center gap-gutter">
<button class="relative p-2 rounded-full hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-primary">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full border border-surface"></span>
</button>
<div class="flex items-center gap-stack-sm cursor-pointer group">
<div class="w-10 h-10 rounded-full border border-primary/20 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female instructor with glasses and a friendly smile, set against a blurred academic office background with soft bokeh. The lighting is warm and cinematic, emphasizing a high-end educational environment with deep indigo and cyan accents in the periphery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1XxYdhtgkaoRcR02OPQQXLKMdpwXe9-9j5gdm3Zi0gxLnvnH7PAyk11V6f73wHxIFUqatK5W5DA334bIEeGOHYOaMhaPdKuTq6cQhAWZwKl4yKnJqgX5CKvwWNMvfBMJbU2CBsNh9CyC0E7gzue-SHJT_dOfZlKloMbeBR3vS5B1K1KsH8bhQPCUJVkabYEETvaLXU6hVRddSW4G-jHH04coVFrxS1afignJxtCLQKYy9lOsWzAKd"/>
</div>
<div class="hidden md:block">
<p class="font-body-md text-on-surface font-bold">Dr. Elena Vance</p>
<p class="text-label-caps text-outline-variant uppercase">Senior Instructor</p>
</div>
</div>
</div>
</header>
<!-- Sidebar Navigation -->
<aside class="fixed left-0 top-0 h-full w-sidebar-width z-40 flex flex-col pt-24 pb-8 bg-surface-container-low/60 dark:bg-surface-container-low/60 backdrop-blur-2xl border-r border-white/10 hidden md:flex">
<div class="px-6 mb-stack-lg">
<p class="text-label-caps text-primary/70 uppercase tracking-widest font-bold mb-4">Instructor Portal</p>
</div>
<nav class="flex-1 space-y-2 px-3">
<a class="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-white/5" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-white/5" href="#">
<span class="material-symbols-outlined" data-icon="school">school</span>
<span class="font-body-md">Courses</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-white/5" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-body-md">Students</span>
</a>
<!-- Active State -->
<a class="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 bg-primary/10 text-primary border-l-4 border-primary shadow-[inset_0_0_10px_rgba(192,193,255,0.05)]" href="#">
<span class="material-symbols-outlined" data-icon="analytics" style="font-variation-settings: 'FILL' 1;">analytics</span>
<span class="font-body-md font-bold">Analytics</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-white/5" href="#">
<span class="material-symbols-outlined" data-icon="assignment">assignment</span>
<span class="font-body-md">Assignments</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-white/5" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-body-md">Settings</span>
</a>
</nav>
<div class="mt-auto px-6">
<div class="p-4 rounded-2xl bg-primary-container/10 border border-primary/20 relative overflow-hidden group">
<div class="relative z-10">
<p class="font-headline-md text-primary font-bold mb-1">Upgrade</p>
<p class="text-mono-data text-on-surface-variant text-xs mb-3">Get advanced AI Proctoring</p>
<button class="bg-primary text-on-primary font-bold py-2 px-4 rounded-xl text-xs active:scale-95 transition-transform">Learn More</button>
</div>
<div class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-6xl" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="pt-28 md:pl-sidebar-width min-h-screen">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg">
<!-- Page Header -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-stack-lg">
<div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">Performance Dashboard</h1>
<p class="font-body-lg text-on-surface-variant max-w-2xl">Visualize your course metrics, student engagement, and revenue growth in real-time.</p>
</div>
<div class="flex items-center gap-stack-sm">
<button class="px-4 py-2 bg-surface-container-high rounded-xl text-body-md border border-outline-variant/30 hover:bg-white/5 transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="calendar_month">calendar_month</span>
                        Last 30 Days
                    </button>
<button class="px-6 py-2 bg-primary text-on-primary font-bold rounded-xl active:scale-95 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-sm" data-icon="download">download</span>
                        Export Report
                    </button>
</div>
</div>
<!-- Bento Grid Metrics -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
<!-- Revenue Card -->
<div class="glass-card p-6 rounded-3xl relative overflow-hidden group">
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim">
<span class="material-symbols-outlined" data-icon="payments">payments</span>
</div>
<span class="text-secondary-fixed-dim text-xs font-mono-data bg-secondary-fixed-dim/10 px-2 py-1 rounded-full">+12.5%</span>
</div>
<p class="text-label-caps text-outline-variant mb-1 uppercase">Total Revenue</p>
<h2 class="font-headline-md text-3xl font-bold text-on-surface">$42,850.00</h2>
<div class="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-secondary-fixed-dim w-[70%]" style="box-shadow: 0 0 10px #00daf3"></div>
</div>
</div>
<!-- Active Students Card -->
<div class="glass-card p-6 rounded-3xl group">
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="groups">groups</span>
</div>
<span class="text-primary text-xs font-mono-data bg-primary/10 px-2 py-1 rounded-full">+8.2%</span>
</div>
<p class="text-label-caps text-outline-variant mb-1 uppercase">Active Students</p>
<h2 class="font-headline-md text-3xl font-bold text-on-surface">1,284</h2>
<div class="mt-4 flex gap-1">
<div class="h-1 flex-1 bg-primary/40 rounded-full"></div>
<div class="h-1 flex-1 bg-primary/40 rounded-full"></div>
<div class="h-1 flex-1 bg-primary/40 rounded-full"></div>
<div class="h-1 flex-1 bg-white/5 rounded-full"></div>
</div>
</div>
<!-- Avg Completion Rate -->
<div class="glass-card p-6 rounded-3xl group">
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined" data-icon="verified">verified</span>
</div>
<span class="text-tertiary text-xs font-mono-data bg-tertiary/10 px-2 py-1 rounded-full">+4.1%</span>
</div>
<p class="text-label-caps text-outline-variant mb-1 uppercase">Completion Rate</p>
<h2 class="font-headline-md text-3xl font-bold text-on-surface">86.4%</h2>
<div class="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-tertiary w-[86%]"></div>
</div>
</div>
<!-- New Enrollments -->
<div class="glass-card p-6 rounded-3xl group">
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-2xl bg-outline-variant/10 flex items-center justify-center text-on-surface">
<span class="material-symbols-outlined" data-icon="person_add">person_add</span>
</div>
<span class="text-error text-xs font-mono-data bg-error/10 px-2 py-1 rounded-full">-2.4%</span>
</div>
<p class="text-label-caps text-outline-variant mb-1 uppercase">New Enrollments</p>
<h2 class="font-headline-md text-3xl font-bold text-on-surface">156</h2>
<p class="mt-4 text-xs text-outline-variant">Target: 200/mo</p>
</div>
</div>
<!-- Revenue Trend Chart -->
<div class="glass-card rounded-3xl p-gutter mb-stack-lg relative overflow-hidden">
<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-stack-lg gap-4">
<div>
<h3 class="font-headline-md text-on-surface">Revenue &amp; Enrollment Trends</h3>
<p class="text-body-md text-outline-variant">Year-over-year comparison of financial performance.</p>
</div>
<div class="flex items-center gap-stack-sm bg-surface-container-high p-1 rounded-xl">
<button class="px-4 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold transition-all">Revenue</button>
<button class="px-4 py-1.5 rounded-lg text-outline-variant hover:text-on-surface text-xs font-bold transition-all">Enrollments</button>
</div>
</div>
<!-- Custom SVG Chart Simulation -->
<div class="h-[300px] w-full relative group">
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<!-- Grid Lines -->
<line stroke="rgba(255,255,255,0.05)" stroke-width="1" x1="0" x2="1000" y1="0" y2="0"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-width="1" x1="0" x2="1000" y1="100" y2="100"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-width="1" x1="0" x2="1000" y1="200" y2="200"></line>
<!-- Area Gradient -->
<defs>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#c0c1ff" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#c0c1ff" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,250 C100,220 200,280 300,180 C400,100 500,140 600,80 C700,50 800,120 900,100 L1000,150 V300 H0 Z" fill="url(#areaGradient)"></path>
<!-- Line Path -->
<path class="drop-shadow-[0_0_8px_rgba(192,193,255,0.5)]" d="M0,250 C100,220 200,280 300,180 C400,100 500,140 600,80 C700,50 800,120 900,100 L1000,150" fill="none" stroke="#c0c1ff" stroke-linecap="round" stroke-width="3"></path>
<!-- Data Points -->
<circle cx="300" cy="180" fill="#c0c1ff" r="5"></circle>
<circle cx="600" cy="80" fill="#c0c1ff" r="5"></circle>
<circle cx="900" cy="100" fill="#c0c1ff" r="5"></circle>
</svg>
<!-- Hover Tooltip Simulation -->
<div class="absolute top-[80px] left-[60%] -translate-x-1/2 -translate-y-full glass-card p-3 rounded-xl border-primary/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
<p class="text-xs font-mono-data text-primary mb-1">June 12, 2024</p>
<p class="text-lg font-bold text-on-surface">$14,240.00</p>
<div class="w-full h-0.5 bg-primary/20 mt-1"></div>
</div>
</div>
<div class="flex justify-between mt-4 text-label-caps text-outline-variant font-mono-data">
<span>JAN</span>
<span>FEB</span>
<span>MAR</span>
<span>APR</span>
<span>MAY</span>
<span>JUN</span>
<span>JUL</span>
<span>AUG</span>
<span>SEP</span>
<span>OCT</span>
<span>NOV</span>
<span>DEC</span>
</div>
</div>
<!-- Student Performance Table -->
<div class="glass-card rounded-3xl overflow-hidden">
<div class="p-gutter border-b border-white/5 flex justify-between items-center bg-white/2">
<div>
<h3 class="font-headline-md text-on-surface">Student Performance Leaderboard</h3>
<p class="text-body-md text-outline-variant">Top engaging students across all currently active modules.</p>
</div>
<button class="text-primary hover:underline text-body-md font-bold">View Full List</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-surface-container-highest/30 border-b border-white/5 text-label-caps text-outline-variant font-bold uppercase tracking-wider">
<th class="px-gutter py-4">Student</th>
<th class="px-gutter py-4">Progress</th>
<th class="px-gutter py-4">Avg. Score</th>
<th class="px-gutter py-4">Status</th>
<th class="px-gutter py-4 text-right">Activity</th>
</tr>
</thead>
<tbody class="divide-y divide-white/5">
<!-- Row 1 -->
<tr class="hover:bg-white/2 transition-colors group">
<td class="px-gutter py-5">
<div class="flex items-center gap-stack-md">
<div class="w-10 h-10 rounded-full border border-primary/20 overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="A portrait of a male student wearing a minimalist navy blue hoodie, looking focused, against a soft-focus tech lab background with vibrant cyan lighting highlights. High-end modern photography style, sharp focus on eyes, cool color grade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCygUuqYpusp8wYMP5-aigLrfTzm1qDyyr87g4CL94vAXmaxFMoOIULEIvo1AgwGIVWgLldwGnjfHrzwwkKhCDWga0ke0D00kkzaP4Q6488amdPbg4lO1H5KOCl8hWYePiYLfhQ6cHkcpqf-bFGWeYBFkqEuM02JVhc1uPIANinHYLyGrqw0Js3b5dk5BGZOEPsqOm0D_6eh4VVr3vvuJ8LRwNxZj_2X7G04bO0Dnd5JFW9OMZTCo2"/>
</div>
<div>
<p class="font-bold text-on-surface group-hover:text-primary transition-colors">Alex Rivera</p>
<p class="text-xs text-outline-variant">Advanced React Patterns</p>
</div>
</div>
</td>
<td class="px-gutter py-5">
<div class="w-32">
<div class="flex justify-between text-xs font-mono-data mb-1">
<span>92%</span>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-secondary-fixed-dim w-[92%] shadow-[0_0_10px_#00daf3]"></div>
</div>
</div>
</td>
<td class="px-gutter py-5">
<span class="font-mono-data text-on-surface text-lg">98.5</span>
</td>
<td class="px-gutter py-5">
<span class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-secondary-fixed-dim/10 text-secondary-fixed-dim text-xs font-bold uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim"></span>
                                        Top Tier
                                    </span>
</td>
<td class="px-gutter py-5 text-right">
<p class="text-xs text-outline-variant">Active 2m ago</p>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-white/2 transition-colors group">
<td class="px-gutter py-5">
<div class="flex items-center gap-stack-md">
<div class="w-10 h-10 rounded-full border border-primary/20 overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="A portrait of a female student with sleek dark hair and a professional blazer, smiling warmly in a bright, modern architectural space with glass walls and hints of indigo interior design. Crisp, clear, high-resolution lifestyle photography with shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_4dISjQdJJepI_cWQB5Qg-tHPqcvUcyASJK6PARn8LbgWiZlBrDlNcUm2jfcLdi0U72py4_eg03Ge2fNZ5JFxy71yVG70cYi56LMVFTm2b8QBamS26twpwh78mCVH9GuEMELguoCIYZTqodfnSeZMsPWrwvdKU-8jMIc0Sn7A8-O2HCXqxlkMQYYnIKZAS3CtQT6ZeAzsxz32oqhskwN7en8ajK-TMKUuubHBCW3OS8UaMpISUl-"/>
</div>
<div>
<p class="font-bold text-on-surface group-hover:text-primary transition-colors">Maya Singh</p>
<p class="text-xs text-outline-variant">UI/UX Masterclass</p>
</div>
</div>
</td>
<td class="px-gutter py-5">
<div class="w-32">
<div class="flex justify-between text-xs font-mono-data mb-1">
<span>84%</span>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[84%]"></div>
</div>
</div>
</td>
<td class="px-gutter py-5">
<span class="font-mono-data text-on-surface text-lg">94.2</span>
</td>
<td class="px-gutter py-5">
<span class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Consistent
                                    </span>
</td>
<td class="px-gutter py-5 text-right">
<p class="text-xs text-outline-variant">Active 15m ago</p>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-white/2 transition-colors group">
<td class="px-gutter py-5">
<div class="flex items-center gap-stack-md">
<div class="w-10 h-10 rounded-full border border-primary/20 overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="A candid portrait of a male student wearing high-end noise-canceling headphones, looking thoughtfully at a computer screen that reflects soft blue light onto his face. The background is a sophisticated co-working space with dark wood and industrial accents. Cinematic moody lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU2f9h_irGtrpGtd1QtnFecpVvHXcYc_s6oTk_Y_WUtkoxuIjrxk5R63EeslILz_Lr60jrlrFQNnCEsCF5P22T2VwE9ZqpoMDmE-vhKxfzHldMHo8X_FsI_Z5hck2V04Ia2i6cRnLUg_u50Vq5ywqqeqsJDK_g7OoKUvojnx5v6qSMnpKN_gbsLHyDne898iMw-GdMTf3yFPZenLKa2u_kGnz4_E3KxT4BNBnfpqgvckkwunwi5Iw6"/>
</div>
<div>
<p class="font-bold text-on-surface group-hover:text-primary transition-colors">Jordan Lee</p>
<p class="text-xs text-outline-variant">Data Systems Architecture</p>
</div>
</div>
</td>
<td class="px-gutter py-5">
<div class="w-32">
<div class="flex justify-between text-xs font-mono-data mb-1">
<span>71%</span>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-tertiary-container w-[71%]"></div>
</div>
</div>
</td>
<td class="px-gutter py-5">
<span class="font-mono-data text-on-surface text-lg">89.8</span>
</td>
<td class="px-gutter py-5">
<span class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        Fast Learner
                                    </span>
</td>
<td class="px-gutter py-5 text-right">
<p class="text-xs text-outline-variant">Active 1h ago</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
<!-- FAB for Quick Actions (Suppressed per logic, but adding a specialized contextual one) -->
<div class="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
<div class="hidden flex-col items-end gap-3 mb-2 translate-y-4 opacity-0 transition-all duration-300" id="quick-actions">
<button class="bg-surface-container-high text-on-surface px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-sm">mail</span>
                Announce to All
            </button>
<button class="bg-surface-container-high text-on-surface px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-sm">add_circle</span>
                New Course
            </button>
</div>
<button class="w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all" onclick="toggleActions()">
<span class="material-symbols-outlined text-3xl" id="fab-icon">add</span>
</button>
</div>
<!-- Background Decoration -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div class="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] bg-primary/10 blur-[120px] rounded-full opacity-30"></div>
<div class="absolute -bottom-[10%] -right-[5%] w-[40%] h-[50%] bg-secondary-fixed-dim/10 blur-[100px] rounded-full opacity-20"></div>
</div>
<script>
        function toggleActions() {
            const menu = document.getElementById('quick-actions');
            const icon = document.getElementById('fab-icon');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                setTimeout(() => {
                    menu.classList.remove('translate-y-4', 'opacity-0');
                    icon.innerHTML = 'close';
                }, 10);
            } else {
                menu.classList.add('translate-y-4', 'opacity-0');
                icon.innerHTML = 'add';
                setTimeout(() => {
                    menu.classList.add('hidden');
                }, 300);
            }
        }
        
        // Simple entry animation for cards
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.glass-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            });
        });
    </script>
`
  },
  "marketing/integrations": {
    bodyClass: "bg-background text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- Top Navigation Shell -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="flex items-center gap-12">
<a class="font-display-lg text-headline-md font-extrabold text-on-surface dark:text-on-background tracking-tighter" href="#">Auralis AI</a>
<div class="hidden lg:flex items-center gap-8">
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
</div>
</div>
<div class="flex items-center gap-stack-md">
<button class="hidden md:block px-6 py-2 rounded-xl font-label-md transition-colors hover:bg-surface-container-low text-on-surface-variant">Login</button>
<button class="px-6 py-2 rounded-xl font-label-md btn-primary">Get Started</button>
</div>
</div>
</nav>
<main class="pt-32 pb-stack-lg">
<!-- Hero Section -->
<header class="max-w-container-max mx-auto px-margin-desktop mb-stack-lg">
<div class="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-stack-lg md:p-20 border border-outline-variant/30 text-center">
<!-- Atmospheric Background Shader -->

<div class="relative z-10 flex flex-col items-center">
<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary font-label-md mb-stack-md">
<span class="w-2 h-2 rounded-full bg-secondary pulse-green"></span>
                        New v3.0 Integrations Live
                    </span>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-stack-md">
                        Power your workflows with <span class="text-primary italic">native</span> integrations.
                    </h1>
<p class="font-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
                        Connect Auralis AI to the tools your team already uses. Seamless data synchronization, automated triggers, and unified intelligence across your entire stack.
                    </p>
<!-- Search & Filter Bar -->
<div class="w-full max-w-2xl">
<div class="flex flex-col md:flex-row gap-stack-sm p-2 bg-surface-container-low rounded-2xl border border-outline-variant/50">
<div class="flex-1 flex items-center px-4 gap-3 bg-surface rounded-xl border border-outline-variant/20 focus-within:border-primary-fixed-dim focus-within:ring-2 focus-within:ring-primary-fixed-dim/15 transition-all">
<span class="material-symbols-outlined text-outline">search</span>
<input class="w-full py-3 bg-transparent border-none focus:ring-0 font-body-md text-on-surface placeholder:text-outline-variant" placeholder="Search 50+ integrations..." type="text"/>
</div>
<button class="px-8 py-3 rounded-xl font-label-md btn-primary whitespace-nowrap">Explore All</button>
</div>
</div>
</div>
</div>
</header>
<!-- Category Filters -->
<section class="max-w-container-max mx-auto px-margin-desktop mb-stack-lg">
<div class="flex items-center gap-stack-sm overflow-x-auto pb-stack-sm no-scrollbar">
<button class="px-5 py-2.5 rounded-full font-label-md chip-active whitespace-nowrap">All Integrations</button>
<button class="px-5 py-2.5 rounded-full font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors whitespace-nowrap">Communication</button>
<button class="px-5 py-2.5 rounded-full font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors whitespace-nowrap">Productivity</button>
<button class="px-5 py-2.5 rounded-full font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors whitespace-nowrap">CRM &amp; Sales</button>
<button class="px-5 py-2.5 rounded-full font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors whitespace-nowrap">Marketing</button>
<button class="px-5 py-2.5 rounded-full font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors whitespace-nowrap">Engineering</button>
<button class="px-5 py-2.5 rounded-full font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors whitespace-nowrap">Analytics</button>
</div>
</section>
<!-- Integration Grid -->
<section class="max-w-container-max mx-auto px-margin-desktop mb-stack-lg">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Slack -->
<div class="glass-card ai-top-signal rounded-2xl p-stack-md flex flex-col h-full group hover:shadow-lg transition-all duration-300">
<div class="flex items-start justify-between mb-stack-md">
<div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm overflow-hidden">
<img class="w-10 h-10 object-contain" data-alt="Minimalist colorful Slack logo icon with bright geometric segments on a clean white background, representative of professional communication software." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp4YFIGNqY5PPFhtvHml_o_gi9i0uy-hUX9Am7gJBL-FTNJXCKJ7FMpacemZkt6CnGxWySHq9pTll_XBDO_69F0zUSjTjuhrKrc7rk95f_mN-sN6dz4wAMskXYAU2Qh6vKLJ4Exu404ZsZFd0GPcGOebKtLlO0JFF-v5V7T91A1cWqVfDKYwBw8ewv_0e3QW-Qrn7a3KdA69XhVZ81qgdj8qjkN-xoplu4QoWKaglwNowt57YuUurN"/>
</div>
<span class="px-3 py-1 rounded-full bg-secondary-container/10 text-secondary text-label-sm font-label-sm">Communication</span>
</div>
<h3 class="font-headline-md text-on-surface mb-stack-sm">Slack</h3>
<p class="font-body-md text-on-surface-variant flex-grow mb-stack-lg">Push real-time AI insights, alerts, and automated reports directly into your team channels.</p>
<div class="flex gap-stack-sm">
<button class="flex-1 py-2.5 rounded-xl font-label-md btn-primary">Connect</button>
<button class="px-4 py-2.5 rounded-xl font-label-md btn-secondary border-outline-variant/40">
<span class="material-symbols-outlined">description</span>
</button>
</div>
</div>
<!-- Notion -->
<div class="glass-card rounded-2xl p-stack-md flex flex-col h-full group hover:shadow-lg transition-all duration-300">
<div class="flex items-start justify-between mb-stack-md">
<div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm overflow-hidden">
<img class="w-10 h-10 object-contain" data-alt="Minimalist black and white Notion logo icon with a simple stylized N, representing productivity and knowledge management in a clean tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-0U8vZ29RfE5QLxNSVE3zC40UlIKGj05IiHMVYe351Mt4t-uvq3AqhwWPczqWROcR5mdUY0_RgWht3POcn2Iw959nesX31_TVyfjcBxCL_4zZT__1Ecjd3OD_T1PtbWXU23UPfK0z9U8ehMhOIdGPrMazgKnsz3RqLfG2ifwIWgvdyP73kW71mbvC5ybrSLdL3-s_kCAoaUDXWYYs8f_cOQA1KSCM3GhJdzoauqQJWo8FIgtjGs9s"/>
</div>
<span class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">Productivity</span>
</div>
<h3 class="font-headline-md text-on-surface mb-stack-sm">Notion</h3>
<p class="font-body-md text-on-surface-variant flex-grow mb-stack-lg">Sync your AI-generated summaries and documentation directly to your workspace databases.</p>
<div class="flex gap-stack-sm">
<button class="flex-1 py-2.5 rounded-xl font-label-md btn-primary">Connect</button>
<button class="px-4 py-2.5 rounded-xl font-label-md btn-secondary border-outline-variant/40">
<span class="material-symbols-outlined">description</span>
</button>
</div>
</div>
<!-- HubSpot -->
<div class="glass-card ai-top-signal rounded-2xl p-stack-md flex flex-col h-full group hover:shadow-lg transition-all duration-300">
<div class="flex items-start justify-between mb-stack-md">
<div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm overflow-hidden">
<img class="w-10 h-10 object-contain" data-alt="Minimalist HubSpot logo featuring its distinctive orange sprocket design, clean and modern for a sales and marketing CRM integration display." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALmXfZkHcUoE5pIgzcpaHUiQHMVq7O-gNC0tB35mNuZPEqZrJEoGKFaohwbVim6XTmUnhQAju6Ce__4TdW65Vx6Mdv0WdXcCZ8ewOHjYzrMc6C9nEij5xw4xZqWizEBtb2JjmRHELD4FO1RcW6Vy7Aoiz7so2NOD1g1yLOdtiq2A4y7xm1280uAFRaKWPUb4w3AYkWGA1aXwzfBJU5j7H1lZM6dzWBL86qjIIz83M4fKF48Zk_ehEW"/>
</div>
<span class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">CRM</span>
</div>
<h3 class="font-headline-md text-on-surface mb-stack-sm">HubSpot</h3>
<p class="font-body-md text-on-surface-variant flex-grow mb-stack-lg">Enrich your lead profiles with Auralis AI behavioral data and predictive scoring automatically.</p>
<div class="flex gap-stack-sm">
<button class="flex-1 py-2.5 rounded-xl font-label-md btn-primary">Connect</button>
<button class="px-4 py-2.5 rounded-xl font-label-md btn-secondary border-outline-variant/40">
<span class="material-symbols-outlined">description</span>
</button>
</div>
</div>
<!-- Gmail -->
<div class="glass-card rounded-2xl p-stack-md flex flex-col h-full group hover:shadow-lg transition-all duration-300">
<div class="flex items-start justify-between mb-stack-md">
<div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm overflow-hidden">
<img class="w-10 h-10 object-contain" data-alt="Modern Gmail envelope icon with red, blue, yellow, and green accents on a pure white background, illustrating professional email communication tools." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdKNgrje76X1aIwqnq1EHcjiRQP0Yh4WFrBEbH1NxlzNReecVnGPmaQ-hKxrCBP6bq6k5dJux0kW_d1nVgvioTyozbcsU0eT0ijVb8SNZYJTTtEShF8QyVAf_8crNm_56BoYwVW8KpdMuIrZM1gOGyjC1B8s_7VppYgJoYO3j_0211yTYHnfskPSzKy2toZNGn2yGEPgWiMmi4zbyf_XY1KW26fedIZ7zjqT3wTbrmv_x5tHuPV_G"/>
</div>
<span class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">Marketing</span>
</div>
<h3 class="font-headline-md text-on-surface mb-stack-sm">Gmail</h3>
<p class="font-body-md text-on-surface-variant flex-grow mb-stack-lg">Automate email outreach and draft responses based on AI-analyzed customer interactions.</p>
<div class="flex gap-stack-sm">
<button class="flex-1 py-2.5 rounded-xl font-label-md btn-primary">Connect</button>
<button class="px-4 py-2.5 rounded-xl font-label-md btn-secondary border-outline-variant/40">
<span class="material-symbols-outlined">description</span>
</button>
</div>
</div>
<!-- Google Sheets -->
<div class="glass-card rounded-2xl p-stack-md flex flex-col h-full group hover:shadow-lg transition-all duration-300">
<div class="flex items-start justify-between mb-stack-md">
<div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm overflow-hidden">
<img class="w-10 h-10 object-contain" data-alt="Green Google Sheets spreadsheet logo icon, minimalist and clean design representing data management and analysis tools in a corporate environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaO23-TKO0Z23sQsgGRBRzjITgRjMoAbXkJ1aKZo-C7rB3Mx36xwYPb1CeBDF7cjAAW8tSw6NhWx1lo7Y5XcOxnK_tSLT2bYidxZWhu6b0saSsyBtNzIEeNZMv2ZX6TSdRWK64sjMAWmxA5MOL8nuXMBByYw9rOQsvw81eeNY6Ox5kuBLnzFtXb-01-4p8cBFCmzBpOpt7UiM80S3xfvQjokSKdBwK4r0lE5zxjvkwT7ZDjLtyeJj-"/>
</div>
<span class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">Analytics</span>
</div>
<h3 class="font-headline-md text-on-surface mb-stack-sm">Google Sheets</h3>
<p class="font-body-md text-on-surface-variant flex-grow mb-stack-lg">Export raw AI data and analytics directly to spreadsheets for custom reporting and visualization.</p>
<div class="flex gap-stack-sm">
<button class="flex-1 py-2.5 rounded-xl font-label-md btn-primary">Connect</button>
<button class="px-4 py-2.5 rounded-xl font-label-md btn-secondary border-outline-variant/40">
<span class="material-symbols-outlined">description</span>
</button>
</div>
</div>
<!-- Custom API -->
<div class="glass-card ai-top-signal rounded-2xl p-stack-md flex flex-col h-full group hover:shadow-lg transition-all duration-300">
<div class="flex items-start justify-between mb-stack-md">
<div class="w-14 h-14 rounded-xl bg-on-background flex items-center justify-center border border-outline-variant/30 shadow-sm overflow-hidden">
<span class="material-symbols-outlined text-primary-fixed-dim scale-150">code</span>
</div>
<span class="px-3 py-1 rounded-full bg-primary-container/20 text-on-primary-container text-label-sm font-label-sm">Developer</span>
</div>
<h3 class="font-headline-md text-on-surface mb-stack-sm">Custom API</h3>
<p class="font-body-md text-on-surface-variant flex-grow mb-stack-lg">Build bespoke workflows with our robust REST API and comprehensive webhooks library.</p>
<div class="flex gap-stack-sm">
<button class="flex-1 py-2.5 rounded-xl font-label-md btn-primary">View Docs</button>
<button class="px-4 py-2.5 rounded-xl font-label-md btn-secondary border-outline-variant/40">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="max-w-container-max mx-auto px-margin-desktop">
<div class="bg-on-background rounded-3xl p-stack-lg md:p-16 flex flex-col md:flex-row items-center justify-between gap-stack-lg overflow-hidden relative">
<div class="absolute -right-20 -top-20 w-80 h-80 bg-primary opacity-20 blur-[100px] pointer-events-none"></div>
<div class="relative z-10 max-w-xl text-center md:text-left">
<h2 class="font-display-lg text-headline-lg md:text-headline-xl text-white mb-stack-sm">Can't find what you need?</h2>
<p class="font-body-md text-surface-variant mb-0">Our engineers are constantly adding new integrations. Tell us what you're missing, and we'll bump it up the roadmap.</p>
</div>
<div class="relative z-10 flex flex-col sm:flex-row gap-stack-md w-full md:w-auto">
<button class="px-8 py-3.5 rounded-xl font-label-md btn-primary">Request Integration</button>
<button class="px-8 py-3.5 rounded-xl font-label-md text-white border-1.5 border-outline-variant/30 hover:bg-white/10 transition-all">Talk to Sales</button>
</div>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant w-full py-stack-lg mt-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2 lg:col-span-2">
<a class="font-display-lg text-headline-sm font-bold text-on-surface mb-stack-sm block" href="#">Auralis AI</a>
<p class="font-body-sm text-on-surface-variant max-w-xs">Precision intelligence for modern enterprises. Powering the next generation of automated decision making.</p>
</div>
<div>
<h4 class="font-label-md text-primary mb-stack-sm">Product</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Features</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Integrations</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-primary mb-stack-sm">Resources</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Documentation</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">API Reference</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-primary mb-stack-sm">Company</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">About Us</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Careers</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-primary mb-stack-sm">Legal</h4>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop pt-stack-lg mt-stack-lg border-t border-outline-variant/10 text-center">
<p class="font-body-sm text-label-md text-on-surface-variant">© 2024 Auralis AI. All rights reserved. Precision Intelligence.</p>
</div>
</footer>
<script>
        // Micro-interactions for filtering
        const filterButtons = document.querySelectorAll('.chip-active, button[class*="rounded-full"]');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                filterButtons.forEach(b => {
                    b.classList.remove('chip-active');
                    b.classList.add('text-on-surface-variant', 'bg-surface-container-low');
                });
                this.classList.add('chip-active');
                this.classList.remove('text-on-surface-variant', 'bg-surface-container-low');
                
                // Add scale interaction
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });

        // Hover effect for integration cards
        const cards = document.querySelectorAll('.glass-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    </script>
`
  },
  "finance/fin-transactions": {
    bodyClass: "antialiased selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- Sidebar Navigation -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant flex flex-col py-stack-md z-50">
<div class="px-6 mb-8">
<h1 class="font-headline-md text-headline-md font-bold text-on-surface">Auralis AI</h1>
<p class="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Enterprise Admin</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span class="font-label-md text-label-md">Agents</span>
</a>
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">account_tree</span>
<span class="font-label-md text-label-md">Workflows</span>
</a>
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="font-label-md text-label-md">CRM</span>
</a>
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">monitoring</span>
<span class="font-label-md text-label-md">Analytics</span>
</a>
<!-- Active State: Integrations -->
<a class="flex items-center gap-3 px-6 py-3 bg-primary-container/10 text-on-primary-container border-r-4 border-primary-container transition-colors" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">extension</span>
<span class="font-label-md text-label-md">Integrations</span>
</a>
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
<a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-md text-label-md">Support</span>
</a>
</nav>
<div class="px-4 mt-auto">
<button class="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-xl shadow-sm hover:brightness-95 transition-all">
                Upgrade Plan
            </button>
</div>
</aside>
<!-- Top Navigation Bar -->
<header class="flex justify-between items-center h-16 px-margin-desktop ml-64 bg-surface/80 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant">
<div class="flex items-center flex-1 max-w-xl">
<div class="relative w-full glow-cyan">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-primary-container text-body-md font-body-md transition-all" placeholder="Search integrations, keys, or logs..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4">
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">dark_mode</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">apps</span>
</button>
</div>
<div class="h-8 w-px bg-outline-variant"></div>
<div class="flex items-center gap-3 cursor-pointer">
<div class="text-right">
<p class="text-label-md font-label-md text-on-surface">Alex Rivera</p>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Admin</p>
</div>
<img class="w-10 h-10 rounded-full border border-outline-variant object-cover" data-alt="A professional headshot of a modern software administrator in a brightly lit, minimalist office. The subject is wearing a sleek grey tech jacket. The lighting is crisp and cool, consistent with a high-contrast corporate AI software theme. Shallow depth of field with a blurred tech background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM2VG2-Hpw7evx0gR96DltT4_wouPE7i5oBbPYxUZHTgB_oaxEO0PfMBrIb4zRtSWvf1CADkYO-TUzUWg1f9Y5_4XGnm-Uk72v5Avjjpn_t7U5295ezZK8itmQWSrXnQljfq_7eURs2O4pBcVHqX15_Q0p-kO-2Xxuw_aFP652IDA5oWiIlXQCG59YhxPoqoCW8DLxJO97XUnPfCS3lwHjprBF9xqU7lc6aoxpnbR-mDW6GB_uicu1"/>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 p-margin-desktop space-y-stack-lg max-w-[1600px]">
<!-- Welcome Header -->
<section class="flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Integrations Hub</h2>
<p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Connect Auralis AI to your existing tech stack to automate workflows and unify enterprise data streams.</p>
</div>
<div class="flex gap-stack-sm">
<button class="px-6 py-2 border-1.5 border-on-surface rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all">
                    Documentation
                </button>
<button class="px-6 py-2 bg-primary-container text-on-primary-container rounded-xl font-label-md text-label-md flex items-center gap-2 shadow-sm">
<span class="material-symbols-outlined text-[18px]">add</span>
                    Custom Integration
                </button>
</div>
</section>
<!-- Connected Apps Bento Grid -->
<section class="space-y-stack-md">
<div class="flex items-center justify-between">
<h3 class="font-headline-md text-headline-md text-on-surface">Connected Apps</h3>
<span class="text-label-md font-label-md text-primary bg-primary-container/10 px-3 py-1 rounded-full">3 Active</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Slack Card -->
<div class="bg-surface-container-lowest border border-outline-variant border-t-2 border-t-primary-container rounded-xl p-6 card-lift">
<div class="flex justify-between items-start mb-4">
<div class="p-3 bg-surface-container rounded-lg">
<span class="material-symbols-outlined text-on-surface text-3xl">chat</span>
</div>
<div class="flex items-center gap-2 px-2 py-1 bg-secondary-container/10 text-on-secondary-container rounded-full border border-secondary-container/20">
<span class="pulse-dot"></span>
<span class="text-[10px] font-bold uppercase tracking-wide">Connected</span>
</div>
</div>
<h4 class="font-headline-md text-[18px] text-on-surface mb-1">Slack Enterprise</h4>
<p class="text-label-sm font-label-sm text-on-surface-variant mb-6">Real-time AI notifications &amp; agent triggers.</p>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-label-sm font-label-sm">
<span class="text-on-surface-variant">Usage this month</span>
<span class="text-on-surface">12,402 msgs</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-primary-container h-full w-[65%]"></div>
</div>
</div>
<button class="w-full py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-label-md font-label-md transition-colors">Manage</button>
</div>
<!-- Gmail Card -->
<div class="bg-surface-container-lowest border border-outline-variant border-t-2 border-t-primary-container rounded-xl p-6 card-lift">
<div class="flex justify-between items-start mb-4">
<div class="p-3 bg-surface-container rounded-lg">
<span class="material-symbols-outlined text-on-surface text-3xl">mail</span>
</div>
<div class="flex items-center gap-2 px-2 py-1 bg-secondary-container/10 text-on-secondary-container rounded-full border border-secondary-container/20">
<span class="pulse-dot"></span>
<span class="text-[10px] font-bold uppercase tracking-wide">Connected</span>
</div>
</div>
<h4 class="font-headline-md text-[18px] text-on-surface mb-1">Gmail Workspace</h4>
<p class="text-label-sm font-label-sm text-on-surface-variant mb-6">Automated email parsing &amp; response drafts.</p>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-label-sm font-label-sm">
<span class="text-on-surface-variant">Drafts Generated</span>
<span class="text-on-surface">843 docs</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-primary-container h-full w-[30%]"></div>
</div>
</div>
<button class="w-full py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-label-md font-label-md transition-colors">Manage</button>
</div>
<!-- Google Sheets Card -->
<div class="bg-surface-container-lowest border border-outline-variant border-t-2 border-t-primary-container rounded-xl p-6 card-lift">
<div class="flex justify-between items-start mb-4">
<div class="p-3 bg-surface-container rounded-lg">
<span class="material-symbols-outlined text-on-surface text-3xl">table_chart</span>
</div>
<div class="flex items-center gap-2 px-2 py-1 bg-secondary-container/10 text-on-secondary-container rounded-full border border-secondary-container/20">
<span class="pulse-dot"></span>
<span class="text-[10px] font-bold uppercase tracking-wide">Connected</span>
</div>
</div>
<h4 class="font-headline-md text-[18px] text-on-surface mb-1">Google Sheets</h4>
<p class="text-label-sm font-label-sm text-on-surface-variant mb-6">Sync AI insights directly to live spreadsheets.</p>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-label-sm font-label-sm">
<span class="text-on-surface-variant">Cells Updated</span>
<span class="text-on-surface">45,000+</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-primary-container h-full w-[85%]"></div>
</div>
</div>
<button class="w-full py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-label-md font-label-md transition-colors">Manage</button>
</div>
</div>
</section>
<!-- Two Column: API Keys & Webhooks -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
<!-- API Key Panel -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col h-full">
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-primary">key</span>
<h3 class="font-headline-md text-headline-md text-on-surface">API Keys</h3>
</div>
<p class="text-body-md font-body-md text-on-surface-variant mb-8">Manage access tokens for programmatic interaction with Auralis AI services. Keep these safe.</p>
<div class="space-y-4 flex-1">
<div class="p-4 border border-outline-variant rounded-xl bg-surface-container-low flex items-center justify-between">
<div>
<p class="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Production Key</p>
<code class="font-mono text-sm text-on-surface">au_live_••••••••••••••••3a9b</code>
</div>
<div class="flex gap-2">
<button class="p-2 hover:bg-surface-container-high rounded-lg transition-colors" title="Copy Key">
<span class="material-symbols-outlined text-[20px]">content_copy</span>
</button>
<button class="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-error" title="Rotate Key">
<span class="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>
<div class="p-4 border border-outline-variant rounded-xl bg-surface-container-low flex items-center justify-between">
<div>
<p class="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Sandbox Key</p>
<code class="font-mono text-sm text-on-surface">au_test_••••••••••••••••f291</code>
</div>
<div class="flex gap-2">
<button class="p-2 hover:bg-surface-container-high rounded-lg transition-colors" title="Copy Key">
<span class="material-symbols-outlined text-[20px]">content_copy</span>
</button>
<button class="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-error" title="Rotate Key">
<span class="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant flex justify-end">
<button class="text-primary font-label-md text-label-md hover:underline flex items-center gap-2">
                        View API Reference <span class="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
</div>
</div>
<!-- Webhook Settings -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 overflow-hidden">
<div class="flex items-center justify-between mb-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">webhook</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Webhooks</h3>
</div>
<button class="text-label-md font-label-md text-primary hover:bg-primary-container/10 px-4 py-2 rounded-lg transition-all">Add Endpoint</button>
</div>
<div class="overflow-x-auto -mx-8">
<table class="w-full text-left">
<thead>
<tr class="border-b border-outline-variant bg-surface-container-low/50">
<th class="px-8 py-3 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Endpoint</th>
<th class="px-8 py-3 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Events</th>
<th class="px-8 py-3 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Success</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-8 py-4">
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">analytics-prod.auralis.io</span>
<span class="text-label-sm text-on-surface-variant">HTTPS POST</span>
</div>
</td>
<td class="px-8 py-4">
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">agent.complete</span>
<span class="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">+2</span>
</div>
</td>
<td class="px-8 py-4 text-right">
<span class="text-label-md font-label-md text-on-secondary-container bg-secondary-container/10 px-2 py-1 rounded">99.8%</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-8 py-4">
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">zapier-hook.com/392k1s</span>
<span class="text-label-sm text-on-surface-variant">HTTPS POST</span>
</div>
</td>
<td class="px-8 py-4">
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">data.export</span>
</div>
</td>
<td class="px-8 py-4 text-right">
<span class="text-label-md font-label-md text-on-secondary-container bg-secondary-container/10 px-2 py-1 rounded">100%</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-8 py-4">
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">staging-test.internal</span>
<span class="text-label-sm text-on-surface-variant">HTTPS POST</span>
</div>
</td>
<td class="px-8 py-4">
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">all_events</span>
</div>
</td>
<td class="px-8 py-4 text-right">
<span class="text-label-md font-label-md text-on-error-container bg-error-container/10 px-2 py-1 rounded">72.1%</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<!-- Available Apps Gallery -->
<section class="space-y-stack-md">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Available Integrations</h3>
<div class="flex items-center gap-4 bg-surface-container-low border border-outline-variant px-4 py-2 rounded-xl focus-within:ring-2 focus-within:ring-primary-container">
<span class="material-symbols-outlined text-on-surface-variant text-[20px]">filter_list</span>
<select class="bg-transparent border-none focus:ring-0 text-label-md font-label-md text-on-surface-variant cursor-pointer">
<option>All Categories</option>
<option>Productivity</option>
<option>CRM</option>
<option>Dev Tools</option>
</select>
</div>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
<!-- Generic Placeholder Apps -->
<div class="bg-surface border border-outline-variant rounded-xl p-6 text-center hover:bg-surface-container transition-all cursor-pointer group">
<div class="w-12 h-12 bg-on-surface rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-surface text-2xl">database</span>
</div>
<p class="font-label-md text-label-md text-on-surface mb-1">Airtable</p>
<p class="text-[10px] uppercase font-bold text-on-surface-variant">Database</p>
</div>
<div class="bg-surface border border-outline-variant rounded-xl p-6 text-center hover:bg-surface-container transition-all cursor-pointer group">
<div class="w-12 h-12 bg-[#000000] rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-2xl">terminal</span>
</div>
<p class="font-label-md text-label-md text-on-surface mb-1">GitHub</p>
<p class="text-[10px] uppercase font-bold text-on-surface-variant">Dev Tools</p>
</div>
<div class="bg-surface border border-outline-variant rounded-xl p-6 text-center hover:bg-surface-container transition-all cursor-pointer group">
<div class="w-12 h-12 bg-[#00a1e0] rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-2xl">cloud</span>
</div>
<p class="font-label-md text-label-md text-on-surface mb-1">Salesforce</p>
<p class="text-[10px] uppercase font-bold text-on-surface-variant">CRM</p>
</div>
<div class="bg-surface border border-outline-variant rounded-xl p-6 text-center hover:bg-surface-container transition-all cursor-pointer group">
<div class="w-12 h-12 bg-[#ff4500] rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-2xl">event</span>
</div>
<p class="font-label-md text-label-md text-on-surface mb-1">Notion</p>
<p class="text-[10px] uppercase font-bold text-on-surface-variant">Productivity</p>
</div>
<div class="bg-surface border border-outline-variant rounded-xl p-6 text-center hover:bg-surface-container transition-all cursor-pointer group">
<div class="w-12 h-12 bg-[#611f69] rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-2xl">campaign</span>
</div>
<p class="font-label-md text-label-md text-on-surface mb-1">HubSpot</p>
<p class="text-[10px] uppercase font-bold text-on-surface-variant">Marketing</p>
</div>
<div class="bg-surface border border-outline-variant rounded-xl p-6 text-center hover:bg-surface-container transition-all cursor-pointer group">
<div class="w-12 h-12 bg-[#0052cc] rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-2xl">task_alt</span>
</div>
<p class="font-label-md text-label-md text-on-surface mb-1">Jira</p>
<p class="text-[10px] uppercase font-bold text-on-surface-variant">Dev Tools</p>
</div>
</div>
</section>
<!-- Footer Help Section -->
<footer class="mt-12 py-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center text-on-surface-variant">
<p class="text-label-sm font-label-sm">Auralis AI Integrations Engine v4.2.0-stable</p>
<div class="flex gap-6 mt-4 md:mt-0">
<a class="text-label-sm font-label-sm hover:text-primary transition-colors" href="#">API Logs</a>
<a class="text-label-sm font-label-sm hover:text-primary transition-colors" href="#">Security Audit</a>
<a class="text-label-sm font-label-sm hover:text-primary transition-colors" href="#">Developer Portal</a>
</div>
</footer>
</main>
<script>
        // Micro-interactions for the Dashboard
        document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
            if(icon.textContent === 'content_copy') {
                icon.parentElement.addEventListener('click', function() {
                    const original = this.innerHTML;
                    this.innerHTML = '<span class="material-symbols-outlined text-secondary text-[20px]">check</span>';
                    setTimeout(() => {
                        this.innerHTML = original;
                    }, 2000);
                });
            }
        });

        // Simple search highlight simulation
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.grid > div').forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.opacity = '1';
                    card.style.filter = 'grayscale(0)';
                } else {
                    card.style.opacity = '0.4';
                    card.style.filter = 'grayscale(1)';
                }
            });
        });
    </script>
`
  },
  "project/proj-board": {
    bodyClass: "bg-background text-on-background font-body-md min-h-screen overflow-x-hidden",
    html: `
<!-- Side Navigation Shell -->
<aside class="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50 py-stack-md px-4">
<div class="flex items-center gap-3 px-2 mb-8">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
</div>
<div>
<h2 class="font-headline-md text-label-md text-primary">Sales HQ</h2>
<p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Global Division</p>
</div>
</div>
<button class="mb-6 w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
<span class="material-symbols-outlined text-sm">add</span>
            New Deal
        </button>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">view_kanban</span>
                Pipeline
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined">group</span>
                Clients
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined">assignment</span>
                Tasks
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined">leaderboard</span>
                Reports
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined">diversity_3</span>
                Team
            </a>
</nav>
<div class="mt-auto pt-4 border-t border-outline-variant space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined">help</span>
                Help
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md" href="#">
<span class="material-symbols-outlined text-error">logout</span>
                Logout
            </a>
</div>
</aside>
<!-- Main Content Area -->
<main class="md:ml-64 flex flex-col min-h-screen">
<!-- Top Navigation Shell -->
<header class="bg-surface w-full h-16 border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop z-40 sticky top-0">
<div class="flex items-center gap-8">
<h1 class="text-headline-md font-headline-md text-primary">Auralis CRM</h1>
<nav class="hidden lg:flex items-center gap-6">
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="font-body-md text-primary border-b-2 border-primary pb-1" href="#">Deals</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Leads</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Analytics</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
<input class="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-label-md focus:ring-2 focus:ring-primary-container outline-none w-64 transition-all" placeholder="Search deals..." type="text"/>
</div>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95">
<span class="material-symbols-outlined">settings</span>
</button>
<img class="w-8 h-8 rounded-full object-cover border border-outline-variant cursor-pointer" data-alt="Professional headshot of a female executive in business casual attire, soft studio lighting, clean background, high-end photography style consistent with a modern corporate tool." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEiNBPrfnu7389t8Rf10r8gk7sacg_gXC_6RofkC8h7JR5RPSjCBEeJHUd5b0nlFAgnUOkf8B6bowJRwUrYJlBlK_i_3QpfsuLRWUzht7wWRNkiMPFsHjeCTM-bfmvjd2hURO5p2Xtd3ajR0uz5zovnS6Y93w-4ptKuOBRp5zO2e6AyUSRm7TfbNZJ9pCQUK7luRPIIyGXyhrd7jrFHuZ2f34N3rJcxhqWDQ0YsP3sxHGi7t1y88DD"/>
</div>
</header>
<!-- Kanban View Controls -->
<div class="px-margin-desktop py-stack-md flex flex-col gap-6">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Deal Pipeline</h2>
<p class="text-on-surface-variant text-body-md">Managing 42 active opportunities worth $1.4M</p>
</div>
<div class="flex items-center gap-3">
<div class="flex bg-surface-container-high p-1 rounded-xl">
<button class="px-4 py-2 bg-white shadow-sm rounded-lg text-label-md text-primary flex items-center gap-2">
<span class="material-symbols-outlined text-sm">view_kanban</span>
                            Board
                        </button>
<button class="px-4 py-2 text-on-surface-variant text-label-md flex items-center gap-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">list</span>
                            List
                        </button>
</div>
<button class="px-4 py-2 border border-outline-variant rounded-xl text-label-md hover:bg-surface-variant transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">filter_list</span>
                        Filters
                    </button>
</div>
</div>
<!-- Kanban Board -->
<div class="flex gap-gutter overflow-x-auto pb-8 scroll-hide -mx-margin-desktop px-margin-desktop">
<!-- Leads Column -->
<div class="kanban-column flex flex-col gap-4">
<div class="flex items-center justify-between px-2">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<h3 class="font-label-md text-on-surface uppercase tracking-wider">Leads</h3>
<span class="bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px] font-bold text-on-surface-variant">12</span>
</div>
<span class="text-label-sm text-outline">$240k</span>
</div>
<div class="flex flex-col gap-3">
<!-- Card 1 -->
<div class="bento-card bg-white p-4 rounded-xl border border-outline-variant cursor-grab active:cursor-grabbing border-t-2 border-t-primary-container">
<div class="flex justify-between items-start mb-3">
<span class="bg-primary-container/10 text-primary px-2 py-1 rounded-full text-[10px] font-bold">INBOUND</span>
<span class="material-symbols-outlined text-outline text-lg">more_vert</span>
</div>
<h4 class="font-headline-md text-label-md text-on-surface mb-1">Nexus Logic Inc.</h4>
<p class="text-headline-lg text-primary text-lg font-bold mb-4">$45,000</p>
<div class="flex items-center justify-between">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white object-cover" data-alt="Close up face of a male business manager, friendly expression, natural lighting, high-end commercial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJBtPlUUUzhV3xKA77Nd40SGLcU6Y95lVxSxUJsrsx2g3N6QsN8iGBFepH1JE14YSPbOKaw9FUiCW_w-ZIBLCH_hEdMvO7B4lPGEYDmVStzNyYQ9PAp3CygPEVzMJbklrEUCKGuJaL5w0VBNDZmD_PwxExCrmf8OfutWOgaBKUK-k-of4UdxcvoIVKNpl7mOVoDAk2WCRLOLtdV_UvxpvLV1Mu-tNPuJErj8Km0y1-cOkZnZvJ-8vK"/>
</div>
<div class="flex items-center gap-1 text-tertiary font-label-sm">
<span class="material-symbols-outlined text-xs">schedule</span>
                                    Follow up today
                                </div>
</div>
</div>
<!-- Card 2 -->
<div class="bento-card bg-white p-4 rounded-xl border border-outline-variant cursor-grab">
<div class="flex justify-between items-start mb-3">
<span class="bg-secondary-container/10 text-secondary px-2 py-1 rounded-full text-[10px] font-bold">PARTNER</span>
<span class="material-symbols-outlined text-outline text-lg">more_vert</span>
</div>
<h4 class="font-headline-md text-label-md text-on-surface mb-1">Quantum Stream</h4>
<p class="text-headline-lg text-primary text-lg font-bold mb-4">$12,800</p>
<div class="flex items-center justify-between">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white object-cover" data-alt="Portrait of a young professional woman, smiling, modern office background with soft bokeh, high-quality lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc231tKmktYRhEdOJrUPlnh3ime-llVJ4YC711m-WlxckXoq2a-h30SgpACuM2RDS4tVR-KD6kHtro7pO9-CIlAbyKnZxNelH_75HCl9R-AsseHjFMmSbFxRvSRWgG67lIQt1msO4iSGfCVwsVCdBb5-eNRgR7l0Xo_bBRx1DUfWccVcIHEAoKMNctXjYafyFR1zrtumV_fdo3W_zhhZ_DpjxXa36WmorDP9tRdxi2gzv9WgC1aZfU"/>
</div>
<div class="flex items-center gap-1 text-outline font-label-sm">
<span class="material-symbols-outlined text-xs">history</span>
                                    2 days ago
                                </div>
</div>
</div>
</div>
</div>
<!-- Contacted Column -->
<div class="kanban-column flex flex-col gap-4">
<div class="flex items-center justify-between px-2">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<h3 class="font-label-md text-on-surface uppercase tracking-wider">Contacted</h3>
<span class="bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px] font-bold text-on-surface-variant">8</span>
</div>
<span class="text-label-sm text-outline">$185k</span>
</div>
<div class="flex flex-col gap-3">
<div class="bento-card bg-white p-4 rounded-xl border border-outline-variant border-t-2 border-t-secondary cursor-grab">
<div class="flex justify-between items-start mb-3">
<span class="bg-secondary-container/10 text-secondary px-2 py-1 rounded-full text-[10px] font-bold">RE-ENGAGED</span>
<span class="material-symbols-outlined text-outline text-lg">more_vert</span>
</div>
<h4 class="font-headline-md text-label-md text-on-surface mb-1">Skyline Labs</h4>
<p class="text-headline-lg text-primary text-lg font-bold mb-4">$62,000</p>
<div class="flex items-center justify-between">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white object-cover" data-alt="Close up face of a male executive, confident and professional, soft daylight, corporate branding environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ysNzJN3raYTZ4tO2rF_xcNReRyVm4h4Cd-0_TxwU3yMh-XCmh30UhA1kCiq3DUzYdilPfzsv_GwIzz2GZ_Cp6Kt2FxqsxojT2hHggUDdwpo7GMxjNTAChXsQVX0C0_ILgtqIYIDhYn2FlMkBR_AdIDoqbE7SQbYc_nF8Tx7urIoQxQR3g8IKPimqSBuuVAzwyU_gxUC3svrnOncn3Kb-DZzivjJuYCHvTNdnUTkziBQD7q8bYBlM"/>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span class="font-label-sm text-secondary">Active</span>
</div>
</div>
</div>
</div>
</div>
<!-- Demo Scheduled Column -->
<div class="kanban-column flex flex-col gap-4">
<div class="flex items-center justify-between px-2">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary-container"></span>
<h3 class="font-label-md text-on-surface uppercase tracking-wider">Demo Scheduled</h3>
<span class="bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px] font-bold text-on-surface-variant">5</span>
</div>
<span class="text-label-sm text-outline">$410k</span>
</div>
<div class="flex flex-col gap-3">
<div class="bento-card bg-white p-4 rounded-xl border border-outline-variant cursor-grab">
<div class="flex justify-between items-start mb-3">
<span class="bg-primary-container/10 text-primary px-2 py-1 rounded-full text-[10px] font-bold">URGENT</span>
<span class="material-symbols-outlined text-outline text-lg">more_vert</span>
</div>
<h4 class="font-headline-md text-label-md text-on-surface mb-1">Global Tech Hub</h4>
<p class="text-headline-lg text-primary text-lg font-bold mb-4">$125,000</p>
<div class="flex items-center justify-between">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white object-cover" data-alt="Business portrait of a diverse team member, professional attire, modern tech office aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdM6CMjBdJRyoJMV2lyWd5Yp3OjkMdYLyjsOCSRCNRave_f0xO9rvVMB9mdDyYm7qDKau198hQcSdy1H912WmEqVFV_gTMbrZmTBFaHczsTfqRuM8R6CAmgz2ntLV9L3IBv7Rx_7NsDVSV0vpzYVppcuVMQ6vXlAEF0Eq8uyNPV-XHH-4Vk_jYUndyMk6IYVf3w4MdQzr919rBG2MCiAi6qmMS3BRgKwU6gHA00oEW4YdWj8HdRrH6"/>
</div>
<div class="flex items-center gap-1 text-tertiary font-label-sm">
<span class="material-symbols-outlined text-xs">event</span>
                                    Tomorrow 10:30 AM
                                </div>
</div>
</div>
</div>
</div>
<!-- Proposal Sent Column -->
<div class="kanban-column flex flex-col gap-4">
<div class="flex items-center justify-between px-2">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
<h3 class="font-label-md text-on-surface uppercase tracking-wider">Proposal Sent</h3>
<span class="bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px] font-bold text-on-surface-variant">4</span>
</div>
<span class="text-label-sm text-outline">$320k</span>
</div>
<div class="flex flex-col gap-3">
<div class="bento-card bg-white p-4 rounded-xl border border-outline-variant cursor-grab border-t-2 border-t-secondary-fixed">
<div class="flex justify-between items-start mb-3">
<span class="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold">FINAL STAGE</span>
<span class="material-symbols-outlined text-outline text-lg">more_vert</span>
</div>
<h4 class="font-headline-md text-label-md text-on-surface mb-1">Vertex Media</h4>
<p class="text-headline-lg text-primary text-lg font-bold mb-4">$88,000</p>
<div class="flex items-center justify-between">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white object-cover" data-alt="Corporate headshot of an older male executive, sophisticated gray suit, neutral backdrop, professional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGK1uwot8U-QCYDH-EVMpEL983TfMK7p4yTuntLWea6sNfgiul9innOR8UsGefQV_f_g92p6qPHuQbmWA3Lg1NpEvtffvNRUl0Y9KCLlrKSrrUvJB4InlecrVb6sRiMurBEMqzDbG-3KU1Bub0OUVpAcutIiwKKNlmEVqqvUae6oH0VD84BGODbWQ913IxfKhxqDJ_F2BTUDBBgyo_-w1iHrf1jsXUGmFp0aagEJDXC4sKbYwh3EZN"/>
</div>
<div class="flex items-center gap-1 text-on-surface-variant font-label-sm">
<span class="material-symbols-outlined text-xs">description</span>
                                    v2_revised.pdf
                                </div>
</div>
</div>
</div>
</div>
<!-- Won Column -->
<div class="kanban-column flex flex-col gap-4">
<div class="flex items-center justify-between px-2">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<h3 class="font-label-md text-on-surface uppercase tracking-wider">Won</h3>
<span class="bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px] font-bold text-on-surface-variant">13</span>
</div>
<span class="text-label-sm text-outline">$250k</span>
</div>
<div class="flex flex-col gap-3">
<div class="bento-card bg-white p-4 rounded-xl border border-outline-variant opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-grab">
<div class="flex justify-between items-start mb-3">
<span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold">COMPLETED</span>
<span class="material-symbols-outlined text-outline text-lg">check_circle</span>
</div>
<h4 class="font-headline-md text-label-md text-on-surface mb-1">Aria Logistics</h4>
<p class="text-headline-lg text-secondary text-lg font-bold mb-4">$34,500</p>
<div class="flex items-center justify-between">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white object-cover" data-alt="High quality professional portrait of a woman in an office setting, smiling broadly, soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ZHgbl0ADJ59g1PEDZGTkQ7Rq55RGwbWvue71iN8pcNAGMQxvDk_mnHFYEfW9OX5Z75I-4SGYU-gQNFhzjAPlpoVgwsIuZRuJ8DKPFkikcWju9jpCnfKJ5Z9zFDMkbfrNfEjz_4VPCS8bJ4rF0-SWSRJkSwpFNs5ncaibVyjzKpInKgFyrF_VIMmThUSstSASzDf7oXnIZdmRNLhY9_PUgof5WxHCnV-7XFGvcAe_Y0tEVjU30Mvr"/>
</div>
<div class="text-secondary font-label-sm font-bold">Closed Oct 12</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="bg-surface-container-lowest py-4 border-t border-outline-variant flex justify-between items-center px-margin-desktop w-full mt-auto">
<p class="text-on-surface-variant font-label-sm">© 2024 Auralis AI. All rights reserved.</p>
<div class="flex gap-6">
<a class="text-on-surface-variant font-label-sm hover:text-primary transition-opacity" href="#">Privacy Policy</a>
<a class="text-on-surface-variant font-label-sm hover:text-primary transition-opacity" href="#">Terms of Service</a>
<a class="text-on-surface-variant font-label-sm hover:text-primary transition-opacity" href="#">API Status</a>
</div>
</footer>
</main>
<!-- Micro-interactions Script -->
<script>
        // Simple drag feedback simulation
        document.querySelectorAll('.bento-card').forEach(card => {
            card.addEventListener('mousedown', () => {
                card.style.transform = 'scale(1.02) rotate(1deg)';
                card.style.boxShadow = '0px 15px 30px rgba(0,0,0,0.1)';
            });
            card.addEventListener('mouseup', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });

        // Search bar focus effect
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('ring-2', 'ring-primary-container');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('ring-2', 'ring-primary-container');
        });
    </script>
`
  },
  "crm/crm-leads": {
    bodyClass: "font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- Side Navigation Bar -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-stack-md px-4 z-50">
<div class="mb-stack-lg px-2">
<h1 class="font-headline-md text-headline-md text-primary">Sales HQ</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant opacity-70">Global Division</p>
</div>
<button class="mb-stack-lg w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm">
<span class="material-symbols-outlined">add</span>
            New Deal
        </button>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">view_kanban</span> Pipeline
            </a>
<a class="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">group</span> Leads
            </a>
<a class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">assignment</span> Tasks
            </a>
<a class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">leaderboard</span> Reports
            </a>
<a class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">diversity_3</span> Team
            </a>
</nav>
<div class="mt-auto border-t border-outline-variant pt-4 space-y-1">
<a class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">help</span> Help
            </a>
<a class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">logout</span> Logout
            </a>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-64 flex flex-col min-h-screen">
<!-- Top App Bar -->
<header class="w-full h-16 bg-surface border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop sticky top-0 z-40">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container rounded-xl border border-outline-variant focus:outline-none focus:border-primary-fixed-dim focus:ring-2 focus:ring-primary-fixed/20 font-body-md text-body-md" placeholder="Search leads, companies..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex gap-4">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
<div class="h-8 w-8 rounded-full bg-primary-fixed overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional studio portrait of a corporate executive with a friendly smile, high-key studio lighting, soft shadows, clean minimalist background, neutral color palette, modern digital photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUcZJs9uGCpcJtPrs_994uWtqz2RGjoAPEceSsLT6_uskAmZemfOmcqQ6TOuIX3AxBZpyBlWPLvqmvwD_B4iCjbx0pEtkLVte1gzlQZSde2lPVLLIXrRSDB_4igM2Xa1R__6003MFC8jSQ-M_QsWVLWpKaEESFmSBkM1y31WbvTc7vll_28RdEp1txPhjCJIHmPJKAo24NT04LCrhDKniT6QNYL9If5ly2bvKG5vH9sLG2RoeMEcym"/>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-margin-desktop flex-1">
<!-- Header Section -->
<div class="flex justify-between items-end mb-stack-lg">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">Leads Ingestion</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Real-time lead processing and qualification dashboard.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-4 py-2 border-1.5 border-on-surface-variant rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all">
<span class="material-symbols-outlined">filter_list</span> Filters
                    </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:opacity-90 transition-all shadow-sm">
<span class="material-symbols-outlined">upload</span> Import Leads
                    </button>
</div>
</div>
<!-- Stats Bar (Bento-lite) -->
<div class="grid grid-cols-4 gap-gutter mb-stack-lg">
<div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-1">Total Leads</p>
<p class="font-headline-md text-headline-md">12,842</p>
<span class="text-secondary font-label-sm">+12% this week</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm border-t-2 border-t-primary-container">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-1">Processing (AI)</p>
<div class="flex items-center gap-2">
<p class="font-headline-md text-headline-md">142</p>
<div class="w-2 h-2 rounded-full bg-secondary-fixed-dim status-pulse"></div>
</div>
<span class="text-on-surface-variant opacity-60 font-label-sm">Active scanning</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-1">Hot Leads</p>
<p class="font-headline-md text-headline-md">864</p>
<span class="text-tertiary font-label-sm">High conversion potential</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-1">Conversion Rate</p>
<p class="font-headline-md text-headline-md">24.2%</p>
<div class="w-full bg-surface-container rounded-full h-1 mt-2">
<div class="bg-primary h-1 rounded-full w-[24%]"></div>
</div>
</div>
</div>
<!-- Table Container -->
<div class="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
<!-- Bulk Actions Bar -->
<div class="px-4 py-3 bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
<div class="flex items-center gap-4">
<input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/>
<div class="flex gap-2 invisible group-active:visible" id="bulk-actions">
<button class="px-3 py-1.5 font-label-md text-label-md border border-outline-variant rounded-lg hover:bg-surface transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-sm">edit</span> Assign
                            </button>
<button class="px-3 py-1.5 font-label-md text-label-md border border-outline-variant rounded-lg hover:bg-surface transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-sm">mail</span> Email
                            </button>
<button class="px-3 py-1.5 font-label-md text-label-md border border-outline-variant rounded-lg hover:bg-surface transition-colors text-error flex items-center gap-1">
<span class="material-symbols-outlined text-sm">delete</span> Delete
                            </button>
</div>
<span class="font-label-md text-label-md text-on-surface-variant ml-2">24 leads selected</span>
</div>
<div class="flex gap-2">
<button class="p-2 hover:bg-surface-variant rounded-lg transition-colors"><span class="material-symbols-outlined">refresh</span></button>
<button class="p-2 hover:bg-surface-variant rounded-lg transition-colors"><span class="material-symbols-outlined">more_vert</span></button>
</div>
</div>
<!-- High Density Grid Table -->
<div class="overflow-x-auto custom-scrollbar">
<table class="w-full border-collapse text-left">
<thead>
<tr class="bg-surface-container-low border-b border-outline-variant">
<th class="p-4 w-12"><input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/></th>
<th class="p-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Company</th>
<th class="p-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Contact</th>
<th class="p-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Source</th>
<th class="p-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th class="p-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Date Added</th>
<th class="p-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1 -->
<tr class="hover:bg-surface-container transition-colors group">
<td class="p-4"><input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/></td>
<td class="p-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary font-bold">N</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Nexcore Systems</p>
<p class="text-[12px] text-on-surface-variant">Cloud Infrastructure</p>
</div>
</div>
</td>
<td class="p-4 font-body-md text-body-md">Sarah Jenkins</td>
<td class="p-4">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary-container/20 text-primary uppercase">LinkedIn</span>
</td>
<td class="p-4">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary-fixed-dim"></div>
<span class="font-label-md text-label-md">Hot</span>
</div>
</td>
<td class="p-4 font-body-md text-body-md text-on-surface-variant">Oct 24, 2024</td>
<td class="p-4 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-variant rounded-lg"><span class="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container transition-colors group">
<td class="p-4"><input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/></td>
<td class="p-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary font-bold">V</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Vantage Group</p>
<p class="text-[12px] text-on-surface-variant">Real Estate Tech</p>
</div>
</div>
</td>
<td class="p-4 font-body-md text-body-md">Michael Chen</td>
<td class="p-4">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container/20 text-secondary uppercase">Web Form</span>
</td>
<td class="p-4">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary-fixed"></div>
<span class="font-label-md text-label-md">New</span>
</div>
</td>
<td class="p-4 font-body-md text-body-md text-on-surface-variant">Oct 23, 2024</td>
<td class="p-4 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-variant rounded-lg"><span class="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container transition-colors group">
<td class="p-4"><input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/></td>
<td class="p-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary font-bold">P</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Polaris FinTech</p>
<p class="text-[12px] text-on-surface-variant">Asset Management</p>
</div>
</div>
</td>
<td class="p-4 font-body-md text-body-md">Elena Rodriguez</td>
<td class="p-4">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-tertiary-container/20 text-tertiary uppercase">Referral</span>
</td>
<td class="p-4">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-outline-variant"></div>
<span class="font-label-md text-label-md">Cold</span>
</div>
</td>
<td class="p-4 font-body-md text-body-md text-on-surface-variant">Oct 21, 2024</td>
<td class="p-4 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-variant rounded-lg"><span class="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container transition-colors group">
<td class="p-4"><input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/></td>
<td class="p-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary font-bold">A</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Arcadia Digital</p>
<p class="text-[12px] text-on-surface-variant">eCommerce Platform</p>
</div>
</div>
</td>
<td class="p-4 font-body-md text-body-md">David Miller</td>
<td class="p-4">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary-container/20 text-primary uppercase">LinkedIn</span>
</td>
<td class="p-4">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary-fixed-dim"></div>
<span class="font-label-md text-label-md">Hot</span>
</div>
</td>
<td class="p-4 font-body-md text-body-md text-on-surface-variant">Oct 20, 2024</td>
<td class="p-4 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-variant rounded-lg"><span class="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container transition-colors group">
<td class="p-4"><input class="rounded border-outline text-primary focus:ring-primary-container" type="checkbox"/></td>
<td class="p-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary font-bold">S</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Summit Labs</p>
<p class="text-[12px] text-on-surface-variant">Biotechnology</p>
</div>
</div>
</td>
<td class="p-4 font-body-md text-body-md">Laura Grant</td>
<td class="p-4">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container/20 text-secondary uppercase">Conference</span>
</td>
<td class="p-4">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary-fixed"></div>
<span class="font-label-md text-label-md">New</span>
</div>
</td>
<td class="p-4 font-body-md text-body-md text-on-surface-variant">Oct 19, 2024</td>
<td class="p-4 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-variant rounded-lg"><span class="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination Footer -->
<div class="p-4 bg-surface-container-low flex justify-between items-center border-t border-outline-variant">
<p class="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 5 of 12,842 results</p>
<div class="flex items-center gap-1">
<button class="p-2 hover:bg-surface-variant rounded-lg disabled:opacity-30" disabled="">
<span class="material-symbols-outlined">first_page</span>
</button>
<button class="p-2 hover:bg-surface-variant rounded-lg disabled:opacity-30" disabled="">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<div class="flex gap-1 px-2">
<button class="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-md text-label-md">1</button>
<button class="w-8 h-8 rounded-lg hover:bg-surface-variant font-label-md text-label-md transition-colors">2</button>
<button class="w-8 h-8 rounded-lg hover:bg-surface-variant font-label-md text-label-md transition-colors">3</button>
<span class="px-1 text-outline">...</span>
<button class="w-8 h-8 rounded-lg hover:bg-surface-variant font-label-md text-label-md transition-colors">2568</button>
</div>
<button class="p-2 hover:bg-surface-variant rounded-lg">
<span class="material-symbols-outlined">chevron_right</span>
</button>
<button class="p-2 hover:bg-surface-variant rounded-lg">
<span class="material-symbols-outlined">last_page</span>
</button>
</div>
</div>
</div>
</div>
<!-- Global Footer -->
<footer class="w-full py-4 flex justify-between items-center px-margin-desktop mt-auto bg-surface-container-lowest border-t border-outline-variant">
<p class="font-label-sm text-label-sm text-on-surface-variant">© 2024 Auralis AI. All rights reserved.</p>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">API Status</a>
</div>
</footer>
</main>
<script>
        // Simple row selection toggle logic
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const row = this.closest('tr');
                if (row) {
                    if (this.checked) {
                        row.classList.add('bg-primary-container/10');
                    } else {
                        row.classList.remove('bg-primary-container/10');
                    }
                }
            });
        });

        // Toggle bulk action visibility when header checkbox is clicked
        const masterCheckbox = document.querySelector('thead input[type="checkbox"]');
        const bulkActions = document.getElementById('bulk-actions');
        
        masterCheckbox.addEventListener('change', function() {
            const allCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
            allCheckboxes.forEach(cb => {
                cb.checked = this.checked;
                const row = cb.closest('tr');
                if (this.checked) {
                    row.classList.add('bg-primary-container/10');
                } else {
                    row.classList.remove('bg-primary-container/10');
                }
            });
        });
    </script>
`
  },
  "lms/course-details": {
    bodyClass: "bg-background text-on-surface font-body-md min-h-screen overflow-hidden",
    html: `
<!-- Blurred Background (The Lesson Player) -->
<main class="fixed inset-0 flex flex-col blur-2xl opacity-40 pointer-events-none">
<!-- Top Nav -->
<header class="h-20 bg-surface/60 border-b border-white/10 flex items-center justify-between px-gutter">
<div class="text-headline-md font-display-lg font-bold text-primary">Auralis LMS</div>
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container"></div>
</div>
</header>
<div class="flex flex-1 overflow-hidden">
<!-- Content Area -->
<div class="flex-1 p-gutter space-y-gutter overflow-y-auto">
<div class="aspect-video w-full rounded-xl bg-surface-container-high relative overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional high-tech educational video interface showing complex neural network diagrams and attention mechanism visualizations. The scene is bathed in a futuristic deep blue and indigo lighting, with glowing neon cyan accents representing data pathways. The cinematic shot focuses on a sleek 4k display in a darkened modern laboratory setting, emphasizing deep focus and high-end technological sophistication." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD43J14W2UY_e-ZCAcEI0kVE_7ywr2Pc20DifWXx2h2_7ZcK1b9Owelbg1yNDbC-1IJvecfolMKr-o2LwhF0D1WhSQbYrgB21TpqPZk0iYLhS43uFAe_q1PmtVMSabIorlQmAai5gzDFdTOSRD2wNyv4xl75luTOPTSq6xBFbJLmEKExUQDvbXgE_BKkG10JVj8--4teEmIosj95-W5Td4gxEYoxy2XUE-gJkvPZuhyLBxycfbOOnqA"/>
</div>
<div class="space-y-4">
<div class="h-12 w-2/3 bg-surface-container rounded-lg"></div>
<div class="h-4 w-full bg-surface-container rounded-lg"></div>
<div class="h-4 w-5/6 bg-surface-container rounded-lg"></div>
</div>
</div>
<!-- Side Nav (Right) -->
<aside class="w-sidebar-width bg-surface-container/60 border-l border-white/10 p-6 flex flex-col gap-4">
<div class="h-8 w-full bg-surface-container-high rounded-lg"></div>
<div class="space-y-2">
<div class="h-12 w-full bg-primary/10 rounded-lg"></div>
<div class="h-12 w-full bg-surface-container rounded-lg"></div>
<div class="h-12 w-full bg-surface-container rounded-lg"></div>
<div class="h-12 w-full bg-surface-container rounded-lg"></div>
</div>
</aside>
</div>
</main>
<!-- Modal Overlay -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="quiz-modal">
<!-- Backdrop Backdrop (Darkening layer) -->
<div class="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
<!-- Animated Shader Background for Modal Glow -->

<!-- Modal Content -->
<div class="modal-glass w-full max-w-2xl rounded-xl overflow-hidden relative z-10 flex flex-col">
<!-- Modal Header -->
<div class="px-8 py-6 border-b border-white/5 flex items-center justify-between">
<div>
<span class="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-widest block mb-1">Knowledge Check</span>
<h2 class="font-headline-md text-headline-md text-on-surface">Module 2: Attention &amp; Transformers</h2>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">close</span>
</button>
</div>
<!-- Quiz Body -->
<div class="px-8 py-10 flex-1 overflow-y-auto">
<p class="font-body-lg text-body-lg text-on-surface mb-8 leading-relaxed">
                    What is the primary function of a transformer attention mechanism?
                </p>
<div class="grid gap-4" id="options-container">
<!-- Option 1 -->
<label class="option-card group relative flex items-start p-5 rounded-xl border border-white/10 transition-all cursor-pointer">
<input class="hidden" name="quiz-option" type="radio" value="1"/>
<div class="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center mr-4 mt-0.5 group-aria-checked:border-primary group-aria-checked:bg-primary">
<div class="w-2 h-2 rounded-full bg-on-primary scale-0 group-aria-checked:scale-100 transition-transform"></div>
</div>
<div class="flex-1">
<p class="text-on-surface group-aria-checked:text-primary transition-colors">To reduce the total number of parameters in the deep learning model.</p>
</div>
</label>
<!-- Option 2 -->
<label class="option-card group relative flex items-start p-5 rounded-xl border border-white/10 transition-all cursor-pointer">
<input class="hidden" name="quiz-option" type="radio" value="2"/>
<div class="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center mr-4 mt-0.5 group-aria-checked:border-primary group-aria-checked:bg-primary">
<div class="w-2 h-2 rounded-full bg-on-primary scale-0 group-aria-checked:scale-100 transition-transform"></div>
</div>
<div class="flex-1">
<p class="text-on-surface group-aria-checked:text-primary transition-colors">To allow the model to weigh the importance of different parts of the input data differently.</p>
</div>
</label>
<!-- Option 3 -->
<label class="option-card group relative flex items-start p-5 rounded-xl border border-white/10 transition-all cursor-pointer">
<input class="hidden" name="quiz-option" type="radio" value="3"/>
<div class="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center mr-4 mt-0.5 group-aria-checked:border-primary group-aria-checked:bg-primary">
<div class="w-2 h-2 rounded-full bg-on-primary scale-0 group-aria-checked:scale-100 transition-transform"></div>
</div>
<div class="flex-1">
<p class="text-on-surface group-aria-checked:text-primary transition-colors">To replace the need for backpropagation during the training phase.</p>
</div>
</label>
<!-- Option 4 -->
<label class="option-card group relative flex items-start p-5 rounded-xl border border-white/10 transition-all cursor-pointer">
<input class="hidden" name="quiz-option" type="radio" value="4"/>
<div class="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center mr-4 mt-0.5 group-aria-checked:border-primary group-aria-checked:bg-primary">
<div class="w-2 h-2 rounded-full bg-on-primary scale-0 group-aria-checked:scale-100 transition-transform"></div>
</div>
<div class="flex-1">
<p class="text-on-surface group-aria-checked:text-primary transition-colors">To exclusively handle the conversion of text into numerical vectors.</p>
</div>
</label>
</div>
</div>
<!-- Modal Footer -->
<div class="px-8 py-6 bg-surface-container-lowest border-t border-white/5 flex items-center justify-between">
<button class="flex items-center gap-2 px-6 py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-white/5 transition-all">
<span class="material-symbols-outlined text-[20px]">arrow_back</span>
<span>Previous</span>
</button>
<div class="flex items-center gap-4">
<span class="font-mono-data text-mono-data text-on-surface-variant">Question 4 of 12</span>
<button class="primary-glow px-8 py-3 rounded-lg bg-primary text-on-primary font-bold transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" id="submit-btn">
                        Submit Answer
                    </button>
</div>
</div>
</div>
</div>
<!-- Success Feedback Overlay (Hidden by Default) -->
<div class="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md hidden transition-all duration-500 opacity-0" id="success-overlay">
<div class="text-center space-y-6">
<div class="w-24 h-24 rounded-full bg-secondary-container/20 flex items-center justify-center mx-auto border-2 border-secondary-fixed-dim">
<span class="material-symbols-outlined text-[48px] text-secondary-fixed-dim" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<div class="space-y-2">
<h3 class="font-display-lg text-headline-md text-on-surface">Correct!</h3>
<p class="text-on-surface-variant max-w-xs mx-auto">The attention mechanism allows the model to selectively focus on relevant parts of the input sequence.</p>
</div>
<button class="px-8 py-3 rounded-lg bg-secondary-fixed-dim text-on-secondary font-bold hover:brightness-110 transition-all">
                Continue to Next Lesson
            </button>
</div>
</div>
<script>
        const options = document.querySelectorAll('.option-card');
        const submitBtn = document.getElementById('submit-btn');
        const successOverlay = document.getElementById('success-overlay');

        options.forEach(option => {
            option.addEventListener('click', () => {
                // Clear previous selection
                options.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.setAttribute('aria-checked', 'false');
                });
                
                // Set new selection
                option.classList.add('selected');
                option.setAttribute('aria-checked', 'true');
                
                const input = option.querySelector('input');
                input.checked = true;
            });
        });

        submitBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
            
            if (selectedOption) {
                // Mock validation: Option 2 is correct
                if (selectedOption.value === "2") {
                    successOverlay.classList.remove('hidden');
                    setTimeout(() => {
                        successOverlay.classList.remove('opacity-0');
                    }, 10);
                } else {
                    // Flash error state on the selected option
                    const activeOption = selectedOption.closest('.option-card');
                    activeOption.classList.add('border-error-container', 'bg-error-container/10');
                    setTimeout(() => {
                        activeOption.classList.remove('border-error-container', 'bg-error-container/10');
                    }, 1000);
                }
            }
        });

        // Close overlay mock logic
        successOverlay.addEventListener('click', (e) => {
            if (e.target === successOverlay) {
                successOverlay.classList.add('opacity-0');
                setTimeout(() => {
                    successOverlay.classList.add('hidden');
                }, 500);
            }
        });
    </script>
`
  },
  "help-desk/hd-agents": {
    bodyClass: "bg-background font-body-md text-on-background min-h-screen flex flex-col overflow-hidden",
    html: `
<!-- Top Navigation -->
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-[1440px] mx-auto px-margin-desktop py-4">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md font-extrabold text-on-surface">Auralis AI</span>
<nav class="hidden md:flex gap-6">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Live Chat</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 bg-secondary-container px-3 py-1.5 rounded-full text-on-secondary-container font-label-sm">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
                    Live Portal Active
                </div>
<button class="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md hover:opacity-90 transition-all">Get Started</button>
</div>
</div>
</header>
<main class="flex-1 mt-20 p-6 flex gap-6 overflow-hidden max-w-[1600px] mx-auto w-full">
<!-- Left Column: Active Sessions -->
<aside class="w-80 flex flex-col gap-4">
<div class="glass-panel rounded-2xl p-4 flex flex-col h-full overflow-hidden">
<div class="flex justify-between items-center mb-4">
<h2 class="font-headline-md text-headline-md text-on-surface">Active Sessions</h2>
<span class="bg-primary-container text-on-primary-container text-xs px-2 py-0.5 rounded-full font-bold">12</span>
</div>
<div class="relative mb-4">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input class="w-full bg-surface-container border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Search sessions..." type="text"/>
</div>
<div class="flex-1 overflow-y-auto space-y-2 pr-2">
<!-- Session Item (Active) -->
<div class="p-3 rounded-xl bg-primary-container/30 border-l-4 border-primary cursor-pointer transition-all">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm">Alex Thompson</span>
<span class="text-[10px] text-outline">2m ago</span>
</div>
<p class="text-xs text-on-surface-variant truncate">How do I integrate the API into my React app?</p>
</div>
<!-- Session Item -->
<div class="p-3 rounded-xl hover:bg-surface-container cursor-pointer border border-transparent transition-all">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm">Sarah Jenkins</span>
<span class="text-[10px] text-outline">15m ago</span>
</div>
<p class="text-xs text-on-surface-variant truncate">The dashboard isn't loading properly.</p>
</div>
<!-- Session Item -->
<div class="p-3 rounded-xl hover:bg-surface-container cursor-pointer border border-transparent transition-all">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm">Marcus V.</span>
<span class="text-[10px] text-outline">1h ago</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Pricing inquiry for enterprise.</p>
</div>
<!-- Session Item -->
<div class="p-3 rounded-xl hover:bg-surface-container cursor-pointer border border-transparent transition-all">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm">Elena Rodriguez</span>
<span class="text-[10px] text-outline">3h ago</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Thanks for the help yesterday!</p>
</div>
</div>
</div>
</aside>
<!-- Center Panel: Live Conversation -->
<section class="flex-1 flex flex-col gap-4 overflow-hidden">
<div class="glass-panel rounded-2xl flex flex-col h-full overflow-hidden">
<!-- Chat Header -->
<div class="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-inverse-primary flex items-center justify-center text-white font-bold">AT</div>
<div>
<h3 class="font-bold text-on-surface leading-tight">Alex Thompson</h3>
<p class="text-xs text-secondary flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Online
                            </p>
</div>
</div>
<div class="flex items-center gap-2">
<button class="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors">
<span class="material-symbols-outlined">call</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors">
<span class="material-symbols-outlined">videocam</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Messages Area -->
<div class="flex-1 overflow-y-auto p-6 space-y-6">
<div class="flex justify-center">
<span class="text-[10px] uppercase tracking-wider font-bold text-outline bg-surface-container-low px-3 py-1 rounded-full">Today</span>
</div>
<!-- Customer Message -->
<div class="flex flex-col items-start gap-1 max-w-[80%]">
<div class="user-bubble p-4 rounded-2xl rounded-tl-none">
<p class="text-sm">Hi there! I'm having trouble with the screenshot export feature in the Auralis Dashboard. Every time I click save, it throws a 404 error. Here's what I see.</p>
</div>
<span class="text-[10px] text-outline ml-1">10:24 AM</span>
</div>
<!-- Screenshot Attachment -->
<div class="flex flex-col items-start gap-1 max-w-[60%]">
<div class="rounded-2xl border-2 border-white shadow-md overflow-hidden relative group">
<div class="w-full h-40 bg-surface-container relative">
<img class="w-full h-full object-cover" data-alt="A clean, high-resolution screenshot of a modern SaaS dashboard showing data visualizations and an error modal. The UI is minimalist with a white background and sharp electric cyan accents. Soft natural lighting suggests a professional office workspace. The aesthetic is high-tech and corporate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5pxtDqPoKI8ycfddAH9kBgcUYbTkteRcA6i3n3blG-2WBDgRaMUuULyzQVfvL5TAzlbq89w0_iPF6_lFftqy7H7ExIqLjGToqn5R7tyrbIbbxElzZPt7xj8u1YTlstmmfszJsLeWwnxaDFSH0mlKky94a48sNA3MhP4gpqUV-4-bgtyOUQYWC_CVo28nYthKIoyyoiPtsniI_m_QOSB0ngfMQQfVldIvjbGyLggNKVti1myMQfAoT"/>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span class="material-symbols-outlined text-white text-3xl">zoom_in</span>
</div>
</div>
<div class="bg-white p-3 flex items-center justify-between">
<span class="text-xs font-medium">dashboard_error_log.png</span>
<span class="text-[10px] text-outline">1.2 MB</span>
</div>
</div>
</div>
<!-- Agent Message -->
<div class="flex flex-col items-end gap-1 ml-auto max-w-[80%]">
<div class="agent-bubble p-4 rounded-2xl rounded-tr-none">
<p class="text-sm">Hello Alex! I'm looking into this for you right now. It seems like the export endpoint might be misconfigured for your specific region. Let me run a quick diagnostic.</p>
</div>
<span class="text-[10px] text-outline mr-1">10:26 AM</span>
</div>
<!-- Typing Indicator -->
<div class="flex items-center gap-2">
<div class="flex gap-1 items-center bg-surface-container-high px-4 py-2 rounded-full">
<span class="text-xs text-on-surface-variant font-medium">Alex is typing</span>
<div class="flex gap-1">
<span class="typing-dot w-1 h-1 bg-outline rounded-full"></span>
<span class="typing-dot w-1 h-1 bg-outline rounded-full"></span>
<span class="typing-dot w-1 h-1 bg-outline rounded-full"></span>
</div>
</div>
</div>
</div>
<!-- Input Area -->
<div class="p-6 pt-0">
<!-- AI Suggestions -->
<div class="flex gap-2 mb-4 overflow-x-auto pb-2">
<button class="whitespace-nowrap px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold hover:bg-secondary/20 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">auto_awesome</span>
                            Suggest fix for 404
                        </button>
<button class="whitespace-nowrap px-4 py-2 bg-surface-container rounded-full text-on-surface-variant text-xs font-bold hover:bg-surface-container-high transition-all">
                            Send documentation
                        </button>
<button class="whitespace-nowrap px-4 py-2 bg-surface-container rounded-full text-on-surface-variant text-xs font-bold hover:bg-surface-container-high transition-all">
                            Escalate to technical
                        </button>
</div>
<div class="glass-panel rounded-2xl p-2 flex flex-col gap-2">
<textarea class="w-full bg-transparent border-none focus:ring-0 text-sm resize-none h-12 p-3" placeholder="Type your message here..." rows="1"></textarea>
<div class="flex justify-between items-center px-2 pb-2">
<div class="flex gap-1">
<button class="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors" title="Emoji">
<span class="material-symbols-outlined">mood</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors" title="Attach file">
<span class="material-symbols-outlined">attach_file</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors" title="Screenshot">
<span class="material-symbols-outlined">screenshot</span>
</button>
</div>
<button class="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md flex items-center gap-2 hover:shadow-lg transition-all">
                                Send
                                <span class="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- Right Sidebar: CRM & Recent -->
<aside class="w-80 flex flex-col gap-6">
<!-- CRM Details -->
<div class="glass-panel rounded-2xl p-5">
<h4 class="font-bold text-on-surface mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">person_search</span>
                    Client Details
                </h4>
<div class="space-y-4">
<div class="flex justify-between text-xs">
<span class="text-outline">Organization</span>
<span class="font-bold text-on-surface">TechFlow Systems</span>
</div>
<div class="flex justify-between text-xs">
<span class="text-outline">Plan</span>
<span class="bg-inverse-primary/20 text-on-primary-container px-2 py-0.5 rounded font-bold">Enterprise</span>
</div>
<div class="flex justify-between text-xs">
<span class="text-outline">Location</span>
<span class="font-bold text-on-surface">San Francisco, CA</span>
</div>
<div class="flex justify-between text-xs">
<span class="text-outline">Status</span>
<span class="text-secondary font-bold">Healthy (88)</span>
</div>
</div>
<button class="w-full mt-6 py-2.5 border border-outline-variant rounded-xl text-xs font-bold hover:bg-surface-container transition-all">
                    View Full CRM Profile
                </button>
</div>
<!-- Recent Sessions -->
<div class="glass-panel rounded-2xl p-5 flex-1 overflow-hidden flex flex-col">
<h4 class="font-bold text-on-surface mb-4">Recent Sessions</h4>
<div class="flex-1 overflow-y-auto space-y-4 pr-1">
<div class="flex gap-3 items-center p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
<div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-sm">history</span>
</div>
<div>
<p class="text-xs font-bold leading-none">Billing Inquiry</p>
<p class="text-[10px] text-outline mt-1">Oct 12, 2024</p>
</div>
</div>
<div class="flex gap-3 items-center p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
<div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-sm">history</span>
</div>
<div>
<p class="text-xs font-bold leading-none">API Setup Help</p>
<p class="text-[10px] text-outline mt-1">Sep 28, 2024</p>
</div>
</div>
<div class="flex gap-3 items-center p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
<div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-sm">history</span>
</div>
<div>
<p class="text-xs font-bold leading-none">Onboarding Call</p>
<p class="text-[10px] text-outline mt-1">Sep 15, 2024</p>
</div>
</div>
</div>
</div>
</aside>
</main>
<script>
        // Micro-interactions for buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => btn.classList.add('scale-95'));
            btn.addEventListener('mouseup', () => btn.classList.remove('scale-95'));
            btn.addEventListener('mouseleave', () => btn.classList.remove('scale-95'));
        });

        // Simple input focus behavior
        const textarea = document.querySelector('textarea');
        const inputContainer = textarea.parentElement;
        textarea.addEventListener('focus', () => {
            inputContainer.classList.add('border-primary');
            inputContainer.classList.add('shadow-lg');
            inputContainer.style.borderColor = '#006875';
        });
        textarea.addEventListener('blur', () => {
            inputContainer.classList.remove('border-primary');
            inputContainer.classList.remove('shadow-lg');
            inputContainer.style.borderColor = '#E9E9EF';
        });
    </script>
`
  },
  "auth/auth-signin-simple": {
    bodyClass: "min-h-screen flex flex-col font-body-md text-body-md bg-mesh",
    html: `
<!-- TopNavBar Suppression: Hidden for transactional page as per mandate -->
<main class="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg relative overflow-hidden">
<!-- Atmospheric Background Element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-[600px] opacity-20 pointer-events-none">

</div>
<!-- Centered Login Card -->
<div class="relative w-full max-w-[440px] z-10">
<div class="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.05)] p-stack-lg md:p-10">
<!-- Brand Anchor -->
<div class="text-center mb-stack-lg">
<h1 class="font-headline-md text-headline-md font-extrabold text-primary tracking-tight mb-2">Auralis AI</h1>
<p class="font-body-md text-on-surface-variant">Precision performance for your workflow.</p>
</div>
<!-- Login Form -->
<form class="space-y-stack-md" onsubmit="event.preventDefault();">
<!-- Email Field (Error State) -->
<div class="space-y-2">
<label class="block font-label-md text-on-surface" for="email">Email Address</label>
<div class="relative">
<input class="w-full h-12 px-4 rounded-xl border-2 border-error bg-surface focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-on-surface" id="email" placeholder="name@company.com" type="email" value="user@example.com"/>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-error text-[20px]">error</span>
</div>
<p class="text-error font-label-sm flex items-center gap-1">
                            Invalid credentials. Please try again.
                        </p>
</div>
<!-- Password Field -->
<div class="space-y-2">
<div class="flex justify-between items-center">
<label class="block font-label-md text-on-surface" for="password">Password</label>
<a class="text-primary hover:underline font-label-sm transition-all" href="#">Forgot password?</a>
</div>
<div class="relative">
<input class="w-full h-12 px-4 rounded-xl border border-outline-variant/50 bg-surface focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-on-surface" id="password" placeholder="••••••••" type="password"/>
<button class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<!-- CTA Button -->
<button class="w-full h-12 bg-primary-container text-on-primary-container font-label-md rounded-xl hover:shadow-[0_4px_12px_rgba(0,229,255,0.3)] active:scale-[0.98] transition-all duration-300 mt-stack-md">
                        Sign In
                    </button>
<!-- Divider -->
<div class="relative flex items-center py-4">
<div class="flex-grow border-t border-outline-variant/30"></div>
<span class="flex-shrink mx-4 font-label-sm text-on-surface-variant">or continue with</span>
<div class="flex-grow border-t border-outline-variant/30"></div>
</div>
<!-- Social Logins -->
<div class="grid grid-cols-2 gap-stack-md">
<button class="flex items-center justify-center gap-2 h-12 border border-outline-variant/50 rounded-xl hover:bg-surface-container-high/50 active:scale-[0.98] transition-all duration-200 group">
<img class="w-5 h-5" data-alt="A clean, minimalist vector icon of the Google logo on a white circular background, soft lighting, professional SaaS aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSL1OjkUMubsJCijuf_xIGBVT8TsBGHDoe9soagDnQH7_wM1cpWCLKSEusq-T-3MtnIbb6CPQx5aUjqhhaMv5-buF0ICJLHrG9MeP7Kj7JZqS8q26mOyzy-7BNssjpyDhVEyzgTD7bqyvmP2pISyeX5qJo591Q6o3tkXmP4nOMck7OZx0vTRZaDoDJyLAoWB1QdCGMLj5Xf4LrNCDacqjeBeqzkiWTuPxDAfowO8meYMlydC4EQbt-"/>
<span class="font-label-md text-on-surface">Google</span>
</button>
<button class="flex items-center justify-center gap-2 h-12 border border-outline-variant/50 rounded-xl hover:bg-surface-container-high/50 active:scale-[0.98] transition-all duration-200 group">
<img class="w-5 h-5" data-alt="A clean, minimalist vector icon of the GitHub Octocat logo in deep charcoal black, professional tech style, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgGfVRJ1bX_EiaEOQoYYsyn7lS37z5HZNYhk_FlITdH5WhV_Lq0onSUu6ztAobXpxyMvp45YAgveAvjOn8A0HtU2hJX2rwqRVXBpKCs_5VHVTKJ8gpjPiWZz5jFmvTromtiDiWwlEz4zyVck2FciZS9Nj4KJb1lPcauC9Y8gJGat5b8Gb8kIsgFXmYCRrzmEw4IhG_f7ftVIs2ApX18R5NnpRe_-cJ7bgSRgg9P_9mqnSNDSR2wT7R"/>
<span class="font-label-md text-on-surface">GitHub</span>
</button>
</div>
</form>
<!-- Footer Sign Up -->
<div class="mt-stack-lg text-center">
<p class="font-body-md text-on-surface-variant">
                        Don't have an account? 
                        <a class="text-primary font-semibold hover:underline transition-all" href="#">Sign Up</a>
</p>
</div>
</div>
<!-- Subtle Trust Elements -->
<div class="mt-stack-lg flex justify-center gap-stack-lg opacity-40 grayscale contrast-125">
<img class="h-6" data-alt="A minimalist tech logo for a fictional company named Nexus, sharp geometry, monochrome white, professional branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9dI6eJ49jFyuhaI_rTqD5pNXALHpcyofGwXCBERV2uAPTftnjMgrF3H9db_8g2zTGiDXn_KIBYhHAgP5xLc6gBRHVQ3Fk6nOmfJNQ98BvkKkh-o5Zo60_FRluNckThaPekDCBaci2qtGYt1mwYQ8dy30_daX00PmA_tgQGI_oCjBX0MueOea04ZJElYQBNf-andU4bwniIunw5pRaOxA1pp1i8FeLhhqTIYqh7VIFHVTEgjE4y6Pd"/>
<img class="h-6" data-alt="A minimalist corporate logo for a fictional venture capital firm named Zenith, sleek typography, monochrome white, premium aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMW3WvlPDVo0x8mKLvBIJx46UZZu_lqAovSzyz1ydFw2L-PWJGNprMSxEnYuPVfdgaHzv2MMwOJct9sYTIBPOTt9XuQIAmKbJUDtQTK3ueDcRAw024Zr1oVbfkF_UaXfBikBhK4a3IkxFLJ09azIIggaq9XtUHRMrWq2xPNepDF3t45QbyRp9uiY1oZI67jN5PguO3CKijO46j6G41gDWkXpbEpXQaGcP4beRIl_hYNG3lcDhme8JC"/>
<img class="h-6" data-alt="A minimalist abstract geometric logo for a global software house, high-contrast black and white, clean lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIShJkEOWR-fWhg14d9op9XXc85JTi38idEnsgDdSGVQjEuE3yfTuIFKxIf0_BCy_szGILQs6jrforO3WN54WGXFoeh954t5rchnx7JFDKmhwXuY55m9OS2B-7MJUKL-s0l0UqTBuIqGULke5R7HFm1HcUhCuXO186d4uNdsgmirDPEtZlK_GgnVeirNFnJ25qexy72wIzDFv1HuMm7OMprmFkfYpAPHI---XOKvTmFKFEvHiq9MPU"/>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant/30 py-stack-md px-margin-desktop">
<div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-sm">
<span class="font-label-sm text-on-surface-variant">© 2024 Auralis AI. All rights reserved.</span>
<div class="flex gap-stack-md">
<a class="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
<script>
        // Simple micro-interaction for password visibility toggle
        const toggleBtn = document.querySelector('button .material-symbols-outlined');
        const passwordInput = document.getElementById('password');
        
        if (toggleBtn && passwordInput) {
            toggleBtn.parentElement.addEventListener('click', () => {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                toggleBtn.textContent = isPassword ? 'visibility_off' : 'visibility';
            });
        }
    </script>
`
  },
  "dashboard/ai-saas": {
    bodyClass: "font-body-md text-body-md antialiased overflow-x-hidden",
    html: `
<!-- Navigation Shell -->
<aside class="fixed left-0 top-0 h-screen w-64 flex flex-col border-r border-outline-variant bg-surface-container-lowest z-40">
<!-- Brand Section -->
<div class="px-6 py-8 flex flex-col gap-1">
<span class="font-display-lg text-headline-md font-extrabold text-on-surface">Auralis AI</span>
<span class="font-label-sm text-on-surface-variant uppercase tracking-widest">Premium Agency Hub</span>
</div>
<!-- Main Nav -->
<nav class="flex-1 px-4 flex flex-col gap-2">
<!-- Active Tab: Dashboard -->
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl font-bold transition-transform scale-98 active:opacity-80" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">monitoring</span>
<span class="font-label-md text-label-md">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-label-md text-label-md">CRM</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">auto_awesome</span>
<span class="font-label-md text-label-md">Workflows</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">business_center</span>
<span class="font-label-md text-label-md">Agency</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<!-- CTA & Footer -->
<div class="p-4 mt-auto border-t border-outline-variant flex flex-col gap-4">
<button class="w-full py-3 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all">
<span class="material-symbols-outlined">add</span>
                New Project
            </button>
<div class="flex flex-col gap-1">
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-md text-label-md">Help Center</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">account_circle</span>
<span class="font-label-md text-label-md">Account</span>
</a>
</div>
</div>
</aside>
<!-- Main Canvas -->
<main class="ml-64 min-h-screen">
<!-- Top Nav Bar -->
<header class="sticky top-0 right-0 w-full z-30 flex justify-between items-center px-margin-desktop h-16 glass-header border-b border-outline-variant">
<div class="flex items-center gap-8">
<div class="relative w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container focus:outline-none transition-all" placeholder="Search operations..." type="text"/>
</div>
<nav class="hidden md:flex gap-6">
<a class="text-primary font-bold border-b-2 border-primary pb-1" href="#">Overview</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Metrics</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Pipeline</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">chat_bubble</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">apps</span>
</button>
<div class="h-8 w-8 rounded-full overflow-hidden border border-outline-variant ml-2">
<img class="w-full h-full object-cover" data-alt="A clean, minimalist profile portrait of a modern executive in a bright studio environment. The style is sharp, corporate, and premium with high-contrast lighting and a neutral background. The subject is wearing professional attire, and the overall mood is confident and authoritative, matching a high-end AI platform aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJHVjhqdzmc717TwUpxWAbbkKtwxZ62jBjSfGVjnmpfZ6GHV5PxxV4-ZkxpngNkM4wHnVgrSRsmpRq5FQI3XnyD0iu43CWCrn-EqcrCsMo5WB9CvZ4c5ovTUi8acltpNWYqLf2Xmk5GoIA604FkcO2_etltauVXAoUFofVQpXSuafF-P20n38YAsu96NSUjnQQtBFNXcAsecx6en8b6aC5YcJiFzi0-ztSUW5rPfT_M9-cs-Umd6dM"/>
</div>
</div>
</header>
<!-- Dashboard Content -->
<div class="p-margin-desktop space-y-stack-lg">
<!-- Welcome Header -->
<div class="flex justify-between items-end">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-surface">Agency Dashboard</h1>
<p class="text-on-surface-variant">Welcome back. Your AI agents are performing at 98.2% efficiency today.</p>
</div>
<div class="flex gap-3">
<button class="px-6 py-2.5 border-1.5 border-on-surface font-semibold text-on-surface rounded-xl hover:bg-surface-container transition-all">
                        Export Report
                    </button>
<button class="px-6 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all">
                        Launch Campaign
                    </button>
</div>
</div>
<!-- Metrics Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Revenue -->
<div class="bento-card p-6 rounded-2xl flex flex-col justify-between h-32 relative overflow-hidden">
<div class="flex justify-between items-start z-10">
<span class="font-label-md text-on-surface-variant">Total Revenue</span>
<span class="material-symbols-outlined text-primary">payments</span>
</div>
<div class="flex items-baseline gap-2 z-10">
<span class="font-headline-md text-headline-md text-on-surface">$124,000</span>
<span class="text-secondary font-bold text-label-sm">+12%</span>
</div>
<!-- Subtle background decoration -->
<div class="absolute -right-4 -bottom-4 opacity-5">
<span class="material-symbols-outlined text-9xl">trending_up</span>
</div>
</div>
<!-- AI Agents -->
<div class="bento-card p-6 rounded-2xl flex flex-col justify-between h-32 ai-active-border">
<div class="flex justify-between items-start">
<span class="font-label-md text-on-surface-variant">Active AI Agents</span>
<span class="material-symbols-outlined text-primary">smart_toy</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-headline-md text-on-surface">42</span>
<span class="px-2 py-0.5 bg-secondary-fixed-dim/10 text-secondary-fixed-dim text-label-sm rounded-full">All Systems Normal</span>
</div>
</div>
<!-- Workflow Runs -->
<div class="bento-card p-6 rounded-2xl flex flex-col justify-between h-32">
<div class="flex justify-between items-start">
<span class="font-label-md text-on-surface-variant">Workflow Runs</span>
<span class="material-symbols-outlined text-primary">bolt</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-headline-md text-on-surface">12,402</span>
<span class="text-on-surface-variant/60 font-medium text-label-sm">Last 24h</span>
</div>
</div>
<!-- Conversion -->
<div class="bento-card p-6 rounded-2xl flex flex-col justify-between h-32">
<div class="flex justify-between items-start">
<span class="font-label-md text-on-surface-variant">Conversion Rate</span>
<span class="material-symbols-outlined text-primary">target</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-headline-md text-on-surface">3.4%</span>
<span class="text-error font-bold text-label-sm">-0.2%</span>
</div>
</div>
</div>
<!-- Main Charts & Table Area -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- System Health Chart -->
<div class="lg:col-span-2 bento-card rounded-2xl p-6 flex flex-col gap-6 min-h-[400px]">
<div class="flex justify-between items-center">
<h3 class="font-headline-md text-headline-md">System Health &amp; Latency</h3>
<div class="flex gap-2">
<button class="px-3 py-1 bg-surface-container rounded-lg text-label-sm">Hourly</button>
<button class="px-3 py-1 text-on-surface-variant text-label-sm">Daily</button>
</div>
</div>
<!-- Simplified Visual Chart Placeholder with JS logic later -->
<div class="flex-1 w-full bg-surface-container-low rounded-xl relative overflow-hidden flex items-end px-4 py-8 gap-2">
<!-- CSS-only dynamic bar logic -->
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[40%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[55%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[45%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[70%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[85%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[60%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[75%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[90%] ai-active-border"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[80%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[65%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[50%]"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary-container transition-all cursor-pointer rounded-t-lg h-[55%]"></div>
<!-- Overlay Legend -->
<div class="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 border-dashed border-t"></div>
</div>
<div class="flex justify-between text-on-surface-variant font-label-sm">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
<span>23:59</span>
</div>
</div>
<!-- Recent Activity Feed -->
<div class="bento-card rounded-2xl p-6 flex flex-col h-full">
<div class="flex justify-between items-center mb-6">
<h3 class="font-headline-md text-headline-md">Recent Activity</h3>
<span class="text-primary text-label-sm cursor-pointer hover:underline">View all</span>
</div>
<div class="flex-1 overflow-y-auto space-y-6 pr-2">
<!-- Activity Item -->
<div class="flex gap-4">
<div class="w-2 h-2 rounded-full bg-secondary pulse-green mt-2"></div>
<div>
<p class="font-label-md text-on-surface">Agent 'Nexus-7' completed crawl</p>
<span class="text-label-sm text-on-surface-variant">2 minutes ago • 1.2k rows processed</span>
</div>
</div>
<div class="flex gap-4">
<div class="w-2 h-2 rounded-full bg-secondary pulse-green mt-2"></div>
<div>
<p class="font-label-md text-on-surface">Payout of $14,200 successful</p>
<span class="text-label-sm text-on-surface-variant">14 minutes ago • Stripe Transfer</span>
</div>
</div>
<div class="flex gap-4">
<div class="w-2 h-2 rounded-full bg-tertiary-fixed-dim mt-2"></div>
<div>
<p class="font-label-md text-on-surface">Workflow 'Email Outbound' paused</p>
<span class="text-label-sm text-on-surface-variant">1 hour ago • Rate limit reached</span>
</div>
</div>
<div class="flex gap-4">
<div class="w-2 h-2 rounded-full bg-secondary pulse-green mt-2"></div>
<div>
<p class="font-label-md text-on-surface">New AI Agent 'LeadGen_V2' deployed</p>
<span class="text-label-sm text-on-surface-variant">3 hours ago • Production</span>
</div>
</div>
<div class="flex gap-4">
<div class="w-2 h-2 rounded-full bg-primary mt-2"></div>
<div>
<p class="font-label-md text-on-surface">Database backup completed</p>
<span class="text-label-sm text-on-surface-variant">6 hours ago • Cloud Storage</span>
</div>
</div>
</div>
</div>
</div>
<!-- Task Queue Table & Quick Action -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-gutter pb-stack-lg">
<!-- Task Queue Table -->
<div class="lg:col-span-3 bento-card rounded-2xl overflow-hidden">
<div class="px-6 py-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 class="font-headline-md text-headline-md">Real-time Task Queue</h3>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-secondary pulse-green"></span>
                                Live Syncing
                            </div>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer">filter_list</span>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-surface-container-low/50">
<tr>
<th class="px-6 py-4 font-label-md text-on-surface-variant border-b border-outline-variant">Task Name</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant border-b border-outline-variant">AI Agent</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant border-b border-outline-variant">Progress</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant border-b border-outline-variant">Status</th>
<th class="px-6 py-4 font-label-md text-on-surface-variant border-b border-outline-variant">ETA</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/30">
<tr class="hover:bg-surface-container/30 transition-colors">
<td class="px-6 py-4 font-medium text-on-surface">Data Normalization Pipeline</td>
<td class="px-6 py-4 text-on-surface-variant">LogicEngine-1</td>
<td class="px-6 py-4">
<div class="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-primary h-full w-[84%]"></div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full text-xs font-bold uppercase tracking-wider">Processing</span>
</td>
<td class="px-6 py-4 text-on-surface-variant text-label-sm">45s</td>
</tr>
<tr class="hover:bg-surface-container/30 transition-colors">
<td class="px-6 py-4 font-medium text-on-surface">User Sentiment Analysis</td>
<td class="px-6 py-4 text-on-surface-variant">Nexus-7</td>
<td class="px-6 py-4">
<div class="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-primary h-full w-[42%]"></div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full text-xs font-bold uppercase tracking-wider">In Queue</span>
</td>
<td class="px-6 py-4 text-on-surface-variant text-label-sm">2m 12s</td>
</tr>
<tr class="hover:bg-surface-container/30 transition-colors">
<td class="px-6 py-4 font-medium text-on-surface">Cross-Platform Sync</td>
<td class="px-6 py-4 text-on-surface-variant">MasterHub</td>
<td class="px-6 py-4">
<div class="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div class="bg-secondary h-full w-[100%]"></div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-secondary-fixed-dim/10 text-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">Completed</span>
</td>
<td class="px-6 py-4 text-on-surface-variant text-label-sm">Finished</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Quick Action Panel -->
<div class="bento-card rounded-2xl p-6 bg-inverse-surface flex flex-col justify-between text-on-primary relative overflow-hidden">
<div class="z-10">
<h3 class="font-headline-md text-headline-md text-white mb-2">Build New Agent</h3>
<p class="text-white/70 font-label-md mb-6">Scale your agency's operations instantly with custom logic.</p>
<div class="space-y-3">
<div class="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
<span class="material-symbols-outlined text-primary-container">psychology</span>
<div class="flex flex-col">
<span class="text-label-md text-white">Advanced LLM</span>
<span class="text-[10px] text-white/50 uppercase">Claude 3.5 Sonnet</span>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
<span class="material-symbols-outlined text-primary-container">automation</span>
<div class="flex flex-col">
<span class="text-label-md text-white">Zapier Bridge</span>
<span class="text-[10px] text-white/50 uppercase">5,000+ Integrations</span>
</div>
</div>
</div>
</div>
<button class="w-full mt-6 py-4 bg-primary-container text-on-primary-container font-extrabold rounded-xl shadow-lg hover:shadow-primary-container/20 hover:scale-[1.03] active:scale-95 transition-all z-10">
                        Create Agent
                    </button>
<!-- Abstract decorative element -->
<div class="absolute -right-10 -bottom-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full"></div>
</div>
</div>
</div>
</main>
<!-- FAB for quick AI query (Contextual) -->
<div class="fixed bottom-8 right-8 z-50">
<button class="group flex items-center gap-3 bg-on-surface text-white p-4 rounded-full shadow-2xl hover:pr-6 transition-all duration-300">
<span class="material-symbols-outlined group-hover:rotate-12 transition-transform">auto_awesome</span>
<span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Ask Auralis AI</span>
</button>
</div>
<script>
        // Micro-interactions and simple reactive states
        document.querySelectorAll('.bento-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Potential for more complex animations
            });
        });

        // Simulating real-time updates for the "Live Syncing" indicator
        setInterval(() => {
            const dots = document.querySelectorAll('.pulse-green');
            dots.forEach(dot => {
                dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
            });
        }, 1000);

        // Simple search focus effect
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('ring-2', 'ring-primary-container');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('ring-2', 'ring-primary-container');
        });
    </script>
`
  },
  "components/calendar": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-20">
<div class="flex items-center gap-stack-sm">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">explore</span>
<span class="font-display-lg text-headline-md font-extrabold text-on-surface tracking-tighter">Auralis AI</span>
</div>
<div class="hidden lg:flex items-center gap-gutter">
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a>
<a class="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Blog</a>
</div>
<div class="flex items-center gap-stack-md">
<button class="px-6 py-2 rounded-full border-1.5 border-on-surface font-label-md hover:bg-surface-container-low transition-all">Login</button>
<button class="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md hover:shadow-lg active:scale-95 transition-all">Get Started</button>
</div>
</div>
</nav>
<main class="pt-24 pb-stack-lg">
<!-- Hero Carousel Section -->
<section class="px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
<div class="relative overflow-hidden rounded-xl h-[500px] group">
<div class="flex transition-transform duration-700 ease-in-out h-full w-full" id="hero-slider">
<div class="min-w-full h-full relative">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div class="absolute bottom-12 left-12 z-20 text-white max-w-2xl">
<span class="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-label-sm mb-4">Featured Solution</span>
<h1 class="font-headline-xl text-white mb-4">Precision Intelligence in Real-Time</h1>
<p class="font-body-lg text-white/80">Experience the future of spatial data visualization with Auralis AI's high-fidelity mapping engine.</p>
</div>
<div class="w-full h-full bg-cover bg-center" data-alt="A futuristic cityscape at twilight, seen from a high-altitude aerial perspective. The urban environment is rendered in a sleek, high-contrast tech aesthetic with deep blue shadows and glowing cyan digital highlights that trace the infrastructure. The lighting is crisp and modern, reflecting off glass skyscrapers, creating a sense of high-performance utility and energetic precision." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6sbTKtz-YjyDGaq3gJPodUTpTEq745OAG7AreRRfBAtF-XIexhqehf0sIh2BoTpMu6CpqmLMxhElCj9iEdV0Y0shWKE9IVbTlWB8bPMuYf-ehI-MtwntEjv7b5Tanra6G2Kn9gK98OQCB21ccb6OXch3tmqy6KdK5h5Laa9yGr1mNIMXk0qfIenaC_I08Kpa1_twBaQw5lHIVb0iO5IV-d8q6UXPCP-Hr7XR9iepCpAiPhkaJwOM')"></div>
</div>
</div>
<!-- Controls -->
<button class="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100">
<span class="material-symbols-outlined">chevron_right</span>
</button>
<!-- Dots -->
<div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
<div class="w-2 h-2 rounded-full bg-white"></div>
<div class="w-2 h-2 rounded-full bg-white/40"></div>
<div class="w-2 h-2 rounded-full bg-white/40"></div>
</div>
</div>
</section>
<!-- Maps & Calendar Bento Section -->
<section class="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg">
<!-- Map Section -->
<div class="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-md flex flex-col h-[600px] bento-card">
<div class="flex justify-between items-center mb-stack-md">
<div class="flex items-center gap-stack-sm">
<span class="material-symbols-outlined text-primary">location_on</span>
<h2 class="font-headline-md">Global Operations</h2>
</div>
<div class="flex items-center gap-2">
<div class="flex h-2 w-2 relative">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</div>
<span class="text-label-md text-on-surface-variant">Live Tracking Active</span>
</div>
</div>
<div class="relative flex-grow rounded-lg overflow-hidden bg-surface-container-highest">
<div class="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-60" data-alt="A highly detailed, minimalist vector-style map of a major tech hub like San Francisco or London. The map uses a sophisticated color palette of off-whites, cool grays, and electric cyan lines for transit routes. Subtle glowing markers indicating active data nodes are scattered across the grid, creating a sense of professional technological depth." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpnmydrJ0I-abFtcddQLtqSh1VLRZDkUpuTs3tL9adnPBO_uNkO37sIVgaWYWusDgsWJ9y-njeXwXpoD9je-GuulgefaH_hzQezmbRd29xoo4EEeMT52VMCJAtwZ1rjUTlrmOFFAj9Gq_ltognFTWtxPZKSD9wPSceh1HRXMZ7PoaKSatmNDETpwDab5DMkK-9aF5xrrQMmAmu_m9dxB_wN3dmvf9LIsSHjKMlAo_TxHI85XEGvhMp')"></div>
<!-- Search Overlay -->
<div class="absolute top-6 left-6 right-6 z-10">
<div class="glass-panel rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
<span class="material-symbols-outlined text-on-surface-variant">search</span>
<input class="bg-transparent border-none focus:ring-0 w-full text-body-md placeholder:text-on-surface-variant/60" placeholder="Search satellite data or node locations..." type="text"/>
<button class="bg-primary text-white p-2 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
<!-- Custom Markers -->
<div class="absolute top-1/2 left-1/3 z-10 cursor-pointer group">
<div class="w-8 h-8 bg-primary rounded-full border-2 border-white shadow-xl flex items-center justify-center animate-bounce group-hover:scale-125 transition-transform">
<span class="material-symbols-outlined text-white text-[16px]">memory</span>
</div>
<div class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-label-sm py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            AI Node: Alpha-9
                        </div>
</div>
<div class="absolute bottom-6 right-6 z-10 flex flex-col gap-2">
<button class="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-low"><span class="material-symbols-outlined">add</span></button>
<button class="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-low"><span class="material-symbols-outlined">remove</span></button>
</div>
</div>
</div>
<!-- Calendar Section -->
<div class="lg:col-span-5 bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-md flex flex-col h-[600px] bento-card">
<div class="flex justify-between items-center mb-stack-md">
<h2 class="font-headline-md">Training Calendar</h2>
<button class="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-label-md hover:shadow-md transition-all active:scale-95" id="newEventTrigger">
<span class="material-symbols-outlined text-[18px]">add</span>
                        New Event
                    </button>
</div>
<div class="grid grid-cols-7 gap-1 mb-2">
<div class="text-center py-2 text-label-sm text-on-surface-variant">MO</div>
<div class="text-center py-2 text-label-sm text-on-surface-variant">TU</div>
<div class="text-center py-2 text-label-sm text-on-surface-variant">WE</div>
<div class="text-center py-2 text-label-sm text-on-surface-variant">TH</div>
<div class="text-center py-2 text-label-sm text-on-surface-variant">FR</div>
<div class="text-center py-2 text-label-sm text-on-surface-variant">SA</div>
<div class="text-center py-2 text-label-sm text-on-surface-variant">SU</div>
</div>
<div class="grid grid-cols-7 gap-1 flex-grow">
<!-- Calendar Days Loop Placeholder -->
<div class="text-center py-4 rounded-lg bg-surface-container-low/50 text-on-surface-variant/40">28</div>
<div class="text-center py-4 rounded-lg bg-surface-container-low/50 text-on-surface-variant/40">29</div>
<div class="text-center py-4 rounded-lg bg-surface-container-low/50 text-on-surface-variant/40">30</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">1</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">2</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">3</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">4</div>
<!-- Row 2 -->
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium relative overflow-hidden">
                        5
                        <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></div>
</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">6</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">7</div>
<div class="text-center py-4 rounded-lg bg-primary-container text-on-primary-container font-bold shadow-md">8</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">9</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">10</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">11</div>
<!-- More days... (omitted for brevity but visual balance maintained) -->
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">12</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium relative">
                        13
                        <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-error"></div>
</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">14</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">15</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">16</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">17</div>
<div class="text-center py-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer font-medium">18</div>
</div>
<div class="mt-stack-md pt-stack-md border-t border-outline-variant">
<h3 class="text-label-md text-on-surface-variant mb-2">Upcoming Today</h3>
<div class="space-y-2 max-h-[120px] overflow-y-auto pr-2 hide-scrollbar">
<div class="p-3 bg-surface-container rounded-lg flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-1 h-8 rounded-full bg-primary"></div>
<div>
<p class="text-label-md font-bold">Neural Sync V2</p>
<p class="text-label-sm text-on-surface-variant">14:00 - 15:30</p>
</div>
</div>
<span class="material-symbols-outlined text-primary">check_circle</span>
</div>
</div>
</div>
</div>
</section>
<!-- Gallery Grid Section -->
<section class="px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-stack-md mb-stack-lg">
<div>
<h2 class="font-headline-lg text-on-surface mb-2">Multimedia Vault</h2>
<p class="text-body-lg text-on-surface-variant max-w-2xl">Browse through AI-generated architectural visualizations and environmental mapping captures.</p>
</div>
<div class="flex gap-stack-sm">
<button class="px-6 py-2 rounded-full border border-outline font-label-md hover:bg-surface-container-low transition-all">Export All</button>
<button class="px-6 py-2 rounded-full bg-on-surface text-surface font-label-md hover:shadow-lg transition-all">Upload New</button>
</div>
</div>
<!-- Gallery Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div class="space-y-gutter">
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant">
<img class="w-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of intricate fiber-optic cables glowing with soft amber and blue light within a dark, high-tech server room environment. The composition focuses on depth and texture, with a shallow depth of field highlighting the delicate digital connections. The lighting is sophisticated and moody, conveying a sense of high-performance precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt8YB97fMrU5IZlrBh4EaCjEQVVJcyQuQhz_W0rOE_eIAhl3S3gLSnjHbsOKwDquu8AWOg1CGjbLviInWfO4PNlZsUf97UxZLWa55DMMly51CX3iKooQlKdADIi8Cmf9X9MpM6sfKhpSeID56MgryvnNLbChACDuorn_zfUYr87NYQ3Qns5s2gsKTJbSoeRA4Uxeq2oqtScXefd8uC4ERxCt1DwW6tBh8i9UNYtKhOlx_vWNZfdbrv"/>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<p class="text-white text-label-md font-bold">Core Infrastructure</p>
<p class="text-white/70 text-label-sm">4K Visualization</p>
</div>
</div>
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant h-64">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist 3D rendering of a futuristic data center hallway. The walls are smooth, matte white, and the floors are polished light gray. Symmetrical lines of recessed blue neon lighting define the architecture. The space feels calm, sterile, and advanced, reflecting a light-mode modern aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTQivRWe09dHX1eOEOIWBtPXR7nr_bROLtedx5pOOxCkFU_PzSN9ZSGqWe8R_bi9xAI1klgt1Cl_CKD5mGEIrLZt0w0350kFAOF-5K5oLitHw341TDrWW5Jxn5UvADAApKu_hLw11zCVdwnmokv7HY8JkCeycYOUz0SVyMbLk30WDEcaBvk3UgVmqRbHaIMIeVvKAuVwc9a8by1v8L8tTwy2I_ivJIvKz_2v9_9CE1IKKiQw_88LFh')"></div>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span class="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
</div>
</div>
<div class="space-y-gutter pt-8">
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant h-[400px]">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="An abstract visualization of a neural network, where points of light are interconnected by delicate, glowing filaments. The color palette consists of a pristine white background with vibrant electric cyan and deep navy connections. The overall aesthetic is ethereal yet structured, conveying complex intelligence through a minimalist lens." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_Vd26NVPwN2sv2J09OPOuuNVk-8KqLkJ2Sj65gboeghWHVCQRCg2TcbrsTK94S_6hd7vPOroJMJcDtCdk5A1XQ5-RMGzwTZj4t-grEuTvNl7ZJYCBx3qHN83-ijwrmdnXc4ErufcvWoCfrL78ufY3AJGg29sMNkzS-qYO-rnB75pJxCUCA9hHSnKp9_vrFEdMr3O5iroWk55ykektfsLaEqgxqqXzSNEi90xURK7-zBy-pNTx_uIj')"></div>
<div class="absolute top-4 right-4 bg-primary text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold">New</div>
</div>
</div>
<div class="space-y-gutter">
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant h-80">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="A professional architectural photograph of a modern office interior with floor-to-ceiling glass windows and exposed concrete pillars. The furniture is minimalist and ergonomic in shades of gray and black. High-key natural lighting floods the space, creating a bright, energetic atmosphere consistent with a premium corporate tech identity." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYVMZPikcKHgC183ShnqomCK1jzFqG8r4qd07BRgsdpOzhwFDCgl0gGxfZ3m-4t_0D6c_UqHSofxwrqVbCKgF-o2QqyyGJOA6wIyfVoMD2fkzBYGDoZ6Ynbi4pPLl6pVQhlhPmflmdUfgLlTrVyqyIxIRpFkizR5tyUM8oT8ScmuOBZR00VBNy1w1j4NK13YaYYVADqYnG3ZGNVHK_Be5sEhsFUs5ZKXRagoZr5dRwE_FPXtzTt2-G')"></div>
</div>
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant">
<img class="w-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A close-up view of a sleek, dark metallic drone with glowing green status indicators, hovering against a softly blurred urban park background at sunrise. The lighting is warm and directional, creating long shadows and highlighting the drone's aerodynamic contours. The image represents the tactile edge of AI technology in action." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMVANbrP3HTIMV-5zBDKd8sSwy26EtKg_9sUqPXl6Hr5-870Y7fvBKwj9rUtpxolaVNyfJfc1JXmEzKb6BzYvrYJFZXcWyMnr-HIzZWGfVwIlUZkNXFLBoRktC4B9pi2KAst8kbLkMud8nVdx3awWG1Y2--ZJjsA1Hf1kTMLiHKfg_fqy1IJGGJcNHZbmL0GD8Xuq-y7vUPDX7iTUq4tBCVNMSO-_jkZg-lxYC8hKrcfuqQ7B9jbWP"/>
</div>
</div>
<div class="space-y-gutter pt-12">
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant h-64 bg-surface-container flex items-center justify-center">
<!-- Loading State Example -->
<div class="flex flex-col items-center gap-4">
<div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
<p class="text-label-sm text-on-surface-variant animate-pulse">Syncing Library...</p>
</div>
</div>
<div class="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant h-80 bg-secondary/10 flex items-center justify-center p-8 text-center">
<!-- Success State Example -->
<div class="flex flex-col items-center gap-4">
<div class="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">cloud_done</span>
</div>
<p class="text-label-md font-bold text-secondary">Export Successful</p>
<p class="text-label-sm text-on-surface-variant">2.4GB of assets ready for download.</p>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant w-full py-stack-lg mt-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">explore</span>
<span class="font-display-lg text-headline-sm font-bold text-on-surface">Auralis AI</span>
</div>
<p class="text-on-surface-variant max-w-xs mb-6">Empowering global enterprises with high-precision artificial intelligence and spatial intelligence solutions.</p>
<p class="text-label-md text-on-surface-variant font-body-sm">© 2024 Auralis AI. All rights reserved. Precision Intelligence.</p>
</div>
<div>
<h4 class="font-bold text-on-surface mb-4">Product</h4>
<ul class="space-y-2 text-label-md">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">API Reference</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-on-surface mb-4">Company</h4>
<ul class="space-y-2 text-label-md">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-on-surface mb-4">Legal</h4>
<ul class="space-y-2 text-label-md">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-on-surface mb-4">Social</h4>
<div class="flex gap-4">
<a class="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-all" href="#">
<span class="material-symbols-outlined text-[20px]">share</span>
</a>
<a class="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-all" href="#">
<span class="material-symbols-outlined text-[20px]">link</span>
</a>
</div>
</div>
</div>
</footer>
<!-- New Event Modal (Hidden by default) -->
<div class="fixed inset-0 bg-black/50 z-[100] hidden flex items-center justify-center p-4" id="modalBackdrop">
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant w-full max-w-md p-stack-md shadow-2xl scale-95 transition-transform" id="modalContainer">
<div class="flex justify-between items-center mb-stack-md">
<h3 class="font-headline-md">New AI Training Event</h3>
<button class="p-2 hover:bg-surface-container rounded-full" id="closeModal"><span class="material-symbols-outlined">close</span></button>
</div>
<div class="space-y-4">
<div>
<label class="text-label-sm block mb-1">Event Name</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="e.g. Model Synthesis 4.0" type="text"/>
</div>
<div class="grid grid-cols-2 gap-4">
<div>
<label class="text-label-sm block mb-1">Date</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant outline-none" type="date"/>
</div>
<div>
<label class="text-label-sm block mb-1">Time</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant outline-none" type="time"/>
</div>
</div>
<button class="w-full py-3 bg-primary text-white rounded-xl font-label-md hover:shadow-lg transition-all active:scale-95">Create Event</button>
</div>
</div>
</div>
<script>
        // Modal Logic
        const modal = document.getElementById('modalBackdrop');
        const modalContainer = document.getElementById('modalContainer');
        const trigger = document.getElementById('newEventTrigger');
        const close = document.getElementById('closeModal');

        trigger.addEventListener('click', () => {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modalContainer.classList.remove('scale-95');
                modalContainer.classList.add('scale-100');
            }, 10);
        });

        close.addEventListener('click', () => {
            modalContainer.classList.remove('scale-100');
            modalContainer.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 200);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) close.click();
        });

        // Simple Slider Logic
        const slider = document.getElementById('hero-slider');
        let currentSlide = 0;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % 3;
            slider.style.transform = \`translateX(-\${currentSlide * 0}%)\`; // Mocking behavior for static page
        }, 5000);
    </script>
`
  },
  "marketing/pricing": {
    bodyClass: "bg-background text-on-surface font-body-md text-body-md overflow-x-hidden",
    html: `
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-margin-desktop py-4">
<div class="font-headline-md text-headline-md font-extrabold text-on-surface dark:text-on-primary-fixed">
                Auralis AI
            </div>
<nav class="hidden md:flex items-center gap-8">
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Features</a>
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Agency</a>
</nav>
<div class="flex items-center gap-4">
<button class="bg-primary-container text-on-primary-fixed font-label-md text-label-md px-6 py-2 rounded-full scale-95 hover:scale-100 transition-transform duration-150">Get Started</button>
</div>
</div>
</header>
<main class="pt-32 pb-stack-lg bg-gradient-mesh min-h-screen">
<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-margin-desktop text-center mb-16">
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tight">
                Transparent pricing for every <span class="text-primary">stage of growth.</span>
</h1>
<p class="max-w-2xl mx-auto text-on-surface-variant font-body-lg text-body-lg mb-12">
                Predictable costs, high-performance intelligence. Choose the plan that fuels your next breakthrough.
            </p>
<!-- Pricing Toggle -->
<div class="flex items-center justify-center gap-4 mb-16">
<span class="font-label-md text-label-md text-on-surface-variant">Monthly</span>
<button class="relative w-14 h-8 bg-surface-container-highest rounded-full p-1 transition-colors duration-300" id="billing-toggle">
<div class="w-6 h-6 bg-primary rounded-full transition-transform duration-300 transform translate-x-0" id="toggle-circle"></div>
</button>
<span class="font-label-md text-label-md text-on-surface">Yearly</span>
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Save 20%</span>
</div>
<!-- Pricing Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Starter -->
<div class="pricing-card bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl flex flex-col items-start text-left">
<div class="mb-6">
<h3 class="font-headline-md text-headline-md mb-2">Starter</h3>
<p class="text-on-surface-variant font-label-sm text-label-sm">Essential tools for individuals</p>
</div>
<div class="mb-8">
<span class="font-display-lg text-[40px] tracking-tight">$29</span>
<span class="text-on-surface-variant font-label-md text-label-md">/mo</span>
</div>
<ul class="space-y-4 mb-12 w-full">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">5,000 AI Credits</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">Standard Latency</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">1 Team Seat</span>
</li>
</ul>
<button class="mt-auto w-full py-4 border-2 border-on-surface font-label-md text-label-md rounded-xl hover:bg-on-surface hover:text-surface transition-colors">Start Free Trial</button>
</div>
<!-- Pro -->
<div class="pricing-card bg-surface-container-lowest border-2 border-primary-container p-stack-lg rounded-xl flex flex-col items-start text-left relative overflow-hidden">
<div class="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label-sm text-label-sm px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                    </div>
<div class="mb-6">
<h3 class="font-headline-md text-headline-md mb-2">Pro</h3>
<p class="text-on-surface-variant font-label-sm text-label-sm">Advanced scale for power users</p>
</div>
<div class="mb-8">
<span class="font-display-lg text-[40px] tracking-tight">$99</span>
<span class="text-on-surface-variant font-label-md text-label-md">/mo</span>
</div>
<ul class="space-y-4 mb-12 w-full">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">50,000 AI Credits</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">Priority Performance</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">5 Team Seats</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">Custom Workflow Nodes</span>
</li>
</ul>
<button class="mt-auto w-full py-4 bg-primary-container text-on-primary-fixed font-label-md text-label-md rounded-xl shadow-lg hover:shadow-xl transition-shadow">Get Pro Access</button>
</div>
<!-- Team -->
<div class="pricing-card bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl flex flex-col items-start text-left">
<div class="mb-6">
<h3 class="font-headline-md text-headline-md mb-2">Team</h3>
<p class="text-on-surface-variant font-label-sm text-label-sm">High-performance enterprise scale</p>
</div>
<div class="mb-8">
<span class="font-display-lg text-[40px] tracking-tight">$249</span>
<span class="text-on-surface-variant font-label-md text-label-md">/mo</span>
</div>
<ul class="space-y-4 mb-12 w-full">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">Unlimited Credits*</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">Dedicated Compute</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary font-bold text-[20px]" style="font-variation-settings: 'wght' 700;">check</span>
<span class="text-on-surface font-body-md text-body-md">Unlimited Seats</span>
</li>
</ul>
<button class="mt-auto w-full py-4 border-2 border-on-surface font-label-md text-label-md rounded-xl hover:bg-on-surface hover:text-surface transition-colors">Contact for Team</button>
</div>
</div>
<!-- Enterprise Banner -->
<div class="mt-12 p-8 bg-surface-container rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant">
<div class="text-left">
<h4 class="font-headline-md text-headline-md mb-1">Need something custom?</h4>
<p class="text-on-surface-variant">Bespoke integrations and white-glove support for global enterprises.</p>
</div>
<button class="px-8 py-3 bg-on-surface text-surface font-label-md text-label-md rounded-full hover:opacity-90 transition-opacity">Contact sales</button>
</div>
</section>
<!-- Comparison Table -->
<section class="max-w-7xl mx-auto px-margin-desktop py-stack-lg">
<h2 class="font-headline-xl text-headline-xl text-center mb-16">Feature Breakdown</h2>
<div class="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant bg-surface-container-low">
<th class="p-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Features</th>
<th class="p-6 font-headline-md text-headline-md">Starter</th>
<th class="p-6 font-headline-md text-headline-md text-primary">Pro</th>
<th class="p-6 font-headline-md text-headline-md">Team</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr>
<td class="p-6 font-label-md text-label-md">Monthly AI Credits</td>
<td class="p-6 text-on-surface-variant">5,000</td>
<td class="p-6 text-on-surface-variant">50,000</td>
<td class="p-6 text-on-surface-variant">Unlimited*</td>
</tr>
<tr>
<td class="p-6 font-label-md text-label-md">Concurrent Processes</td>
<td class="p-6 text-on-surface-variant">2</td>
<td class="p-6 text-on-surface-variant">10</td>
<td class="p-6 text-on-surface-variant">Unlimited</td>
</tr>
<tr>
<td class="p-6 font-label-md text-label-md">API Access</td>
<td class="p-6"><span class="material-symbols-outlined text-outline-variant">close</span></td>
<td class="p-6"><span class="material-symbols-outlined text-secondary font-bold">check</span></td>
<td class="p-6"><span class="material-symbols-outlined text-secondary font-bold">check</span></td>
</tr>
<tr>
<td class="p-6 font-label-md text-label-md">Security Isolation</td>
<td class="p-6 text-on-surface-variant">Shared</td>
<td class="p-6 text-on-surface-variant">Sandboxed</td>
<td class="p-6 text-on-surface-variant">Private Cluster</td>
</tr>
<tr>
<td class="p-6 font-label-md text-label-md">Response Time</td>
<td class="p-6 text-on-surface-variant">&lt; 1s</td>
<td class="p-6 text-on-surface-variant">&lt; 200ms</td>
<td class="p-6 text-on-surface-variant">&lt; 50ms</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- FAQ Section -->
<section class="max-w-3xl mx-auto px-margin-desktop py-stack-lg">
<h2 class="font-headline-xl text-headline-xl text-center mb-12">Frequently Asked Questions</h2>
<div class="space-y-4">
<!-- FAQ 1 -->
<div class="accordion-item border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden">
<button class="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors" onclick="toggleAccordion(this)">
<span class="font-label-md text-label-md text-on-surface">Can I change my plan later?</span>
<span class="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
</button>
<div class="accordion-content px-6">
<p class="pb-6 text-on-surface-variant font-body-md text-body-md">Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, the change is immediate and pro-rated. If you downgrade, the changes take effect at the start of your next billing cycle.</p>
</div>
</div>
<!-- FAQ 2 -->
<div class="accordion-item border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden">
<button class="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors" onclick="toggleAccordion(this)">
<span class="font-label-md text-label-md text-on-surface">Is my data secure and private?</span>
<span class="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
</button>
<div class="accordion-content px-6">
<p class="pb-6 text-on-surface-variant font-body-md text-body-md">Privacy is our priority. We employ SOC 2 Type II compliant protocols and end-to-end encryption. Your data is never used to train our models without your explicit, written consent.</p>
</div>
</div>
<!-- FAQ 3 -->
<div class="accordion-item border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden">
<button class="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors" onclick="toggleAccordion(this)">
<span class="font-label-md text-label-md text-on-surface">What counts as an "AI Credit"?</span>
<span class="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
</button>
<div class="accordion-content px-6">
<p class="pb-6 text-on-surface-variant font-body-md text-body-md">One AI credit typically corresponds to one high-resolution analysis or approximately 1,000 tokens of generated content. Detailed usage logs are available in your dashboard.</p>
</div>
</div>
<!-- FAQ 4 -->
<div class="accordion-item border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden">
<button class="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors" onclick="toggleAccordion(this)">
<span class="font-label-md text-label-md text-on-surface">Do you offer discounts for non-profits?</span>
<span class="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
</button>
<div class="accordion-content px-6">
<p class="pb-6 text-on-surface-variant font-body-md text-body-md">Yes, we support innovation in the public interest. Eligible non-profit organizations can receive up to 50% off our Pro and Team plans.</p>
</div>
</div>
<!-- FAQ 5 -->
<div class="accordion-item border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden">
<button class="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors" onclick="toggleAccordion(this)">
<span class="font-label-md text-label-md text-on-surface">How does billing work?</span>
<span class="material-symbols-outlined accordion-icon transition-transform duration-300">expand_more</span>
</button>
<div class="accordion-content px-6">
<p class="pb-6 text-on-surface-variant font-body-md text-body-md">We accept all major credit cards and wire transfers for Team accounts. Billing is handled monthly or annually based on your selection during signup.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container dark:bg-surface-container-highest w-full py-stack-lg">
<div class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
<div class="col-span-2">
<div class="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-primary-fixed mb-4">Auralis AI</div>
<p class="text-on-surface-variant font-body-md text-body-md max-w-xs mb-8">Pioneering the next wave of high-performance intelligence for teams who demand precision.</p>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-4">Product</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Features</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Solutions</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-4">Company</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">About</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">News</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-4">Support</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Docs</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Community</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed font-bold mb-4">Legal</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Privacy</a></li>
<li><a class="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div class="max-w-7xl mx-auto px-margin-desktop border-t border-outline-variant mt-12 pt-8 text-center md:text-left">
<span class="text-on-surface-variant font-label-sm text-label-sm">© 2024 Auralis AI. All rights reserved.</span>
</div>
</footer>
<script>
        // Billing Toggle Logic
        const toggleBtn = document.getElementById('billing-toggle');
        const circle = document.getElementById('toggle-circle');
        let isYearly = false;

        toggleBtn.addEventListener('click', () => {
            isYearly = !isYearly;
            circle.style.transform = isYearly ? 'translateX(1.5rem)' : 'translateX(0)';
            toggleBtn.classList.toggle('bg-primary-container', isYearly);
            // In a real app, this would update the price strings dynamically
        });

        // FAQ Accordion Logic
        function toggleAccordion(btn) {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        }

        // Micro-interaction for buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.96)';
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'scale(1)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
    </script>
`
  },
  "marketing/pricing-mobile": {
    bodyClass: "text-on-background antialiased overflow-x-hidden",
    html: `
<!-- Top Navigation Bar (Shared Component) -->
<header class="fixed top-0 w-full bg-surface/80 backdrop-blur-md text-primary font-headline-md text-headline-md border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-mobile h-16 z-50">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant">menu</span>
<h1 class="font-headline-md text-headline-md font-bold text-on-background">Auralis AI</h1>
</div>
<div class="w-8 h-8 rounded-full bg-surface-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A clean, professional headshot of a young tech executive with a soft focus background. High-contrast studio lighting, minimal aesthetic, following the white and electric cyan color palette of a high-end AI SaaS platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQOCn3T1WpRoAASTzf-48nQa8cpT2xYCrGYsuyjxlErQ10fLGWXAVhwfyuOD0LHeF1kv7DT6-g0uM61yO0gSrmjO4dMYx_hcu0uoWrnshQDyuPX9gRt1XyPv550TPL_d_71QnvtXX02ykp30mHdz7CunELcqRlERgFWhp-fQuoUNufFfvP90K5NOq_Bo9CtRI1wJORjuXj5f4NUnGn2pKLjlvgwhGwkHTWLi11VhKsxoCiNeMFo4Av"/>
</div>
</header>
<main class="pt-24 pb-32 px-margin-mobile">
<!-- Hero Section -->
<section class="mb-stack-lg text-center">
<div class="inline-flex items-center bg-primary-container/10 px-3 py-1 rounded-full mb-stack-sm">
<span class="pulse-dot"></span>
<span class="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">Summer Release v2.4</span>
</div>
<h2 class="font-display-lg-mobile text-display-lg-mobile mb-4">Pricing for every stage.</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
                Select a plan that matches your project velocity. Scale instantly as your AI needs grow.
            </p>
</section>
<!-- Toggle Switch -->
<section class="flex justify-center mb-stack-lg">
<div class="bg-surface-container p-1 rounded-xl flex items-center gap-1">
<button class="px-6 py-2 font-label-md text-label-md rounded-lg active-toggle transition-all duration-200" id="monthly-btn" onclick="updatePricing('monthly')">Monthly</button>
<button class="px-6 py-2 font-label-md text-label-md text-on-surface-variant transition-all duration-200" id="yearly-btn" onclick="updatePricing('yearly')">Yearly <span class="text-secondary font-bold">-20%</span></button>
</div>
</section>
<!-- Pricing Cards Stack -->
<section class="space-y-stack-md">
<!-- Starter Plan -->
<div class="glass-card rounded-xl p-6 relative overflow-hidden transition-transform active:scale-[0.98]">
<div class="mb-6">
<h3 class="font-headline-md text-headline-md mb-1">Starter</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant">For individuals &amp; side projects.</p>
</div>
<div class="flex items-baseline gap-1 mb-6">
<span class="font-headline-xl text-headline-xl">$</span>
<span class="font-display-lg-mobile text-display-lg-mobile" id="price-starter">29</span>
<span class="font-body-md text-body-md text-on-surface-variant">/mo</span>
</div>
<button class="w-full py-4 bg-transparent border-[1.5px] border-on-background rounded-xl font-label-md text-label-md mb-8 hover:bg-surface-container-low transition-colors">Start for free</button>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
<span class="font-body-md text-body-md">5,000 API requests / mo</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
<span class="font-body-md text-body-md">Basic model access</span>
</li>
<li class="flex items-start gap-3 text-on-surface-variant/50">
<span class="material-symbols-outlined text-sm">cancel</span>
<span class="font-body-md text-body-md line-through">Priority support</span>
</li>
</ul>
</div>
<!-- Pro Plan (Most Popular) -->
<div class="bg-surface-container-lowest border-[2px] border-primary-container rounded-xl p-6 relative shadow-xl transition-transform active:scale-[0.98]">
<div class="absolute top-0 left-0 w-full h-[2px] bg-primary-container"></div>
<div class="flex justify-between items-start mb-6">
<div>
<h3 class="font-headline-md text-headline-md mb-1">Pro</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant">For scaling startups.</p>
</div>
<span class="bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm font-bold uppercase tracking-tighter">Most Popular</span>
</div>
<div class="flex items-baseline gap-1 mb-6">
<span class="font-headline-xl text-headline-xl text-primary">$</span>
<span class="font-display-lg-mobile text-display-lg-mobile text-primary" id="price-pro">79</span>
<span class="font-body-md text-body-md text-on-surface-variant">/mo</span>
</div>
<button class="w-full py-4 bg-primary-container text-on-background rounded-xl font-label-md text-label-md font-bold mb-8 shadow-[0_2px_8px_rgba(0,229,255,0.3)] active:translate-y-[2px] transition-all">Go Pro Now</button>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-body-md text-body-md font-semibold">Unlimited API requests</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-body-md text-body-md font-semibold">GPT-4 Turbo access</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-body-md text-body-md font-semibold">24/7 Priority support</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-body-md text-body-md font-semibold">Custom fine-tuning</span>
</li>
</ul>
</div>
<!-- Team Plan -->
<div class="glass-card rounded-xl p-6 relative overflow-hidden transition-transform active:scale-[0.98]">
<div class="mb-6">
<h3 class="font-headline-md text-headline-md mb-1">Team</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant">Collaboration &amp; governance.</p>
</div>
<div class="flex items-baseline gap-1 mb-6">
<span class="font-headline-xl text-headline-xl">$</span>
<span class="font-display-lg-mobile text-display-lg-mobile" id="price-team">199</span>
<span class="font-body-md text-body-md text-on-surface-variant">/mo</span>
</div>
<button class="w-full py-4 bg-transparent border-[1.5px] border-on-background rounded-xl font-label-md text-label-md mb-8 hover:bg-surface-container-low transition-colors">Contact Sales</button>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
<span class="font-body-md text-body-md">Up to 10 seats included</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
<span class="font-body-md text-body-md">Team usage analytics</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
<span class="font-body-md text-body-md">SAML SSO &amp; Security</span>
</li>
</ul>
</div>
</section>
<!-- FAQ Section -->
<section class="mt-stack-lg">
<h2 class="font-headline-lg text-headline-lg mb-6 text-center">Frequently Asked</h2>
<div class="space-y-4">
<div class="accordion-item bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm" onclick="toggleAccordion(this)">
<div class="p-4 flex justify-between items-center cursor-pointer select-none">
<span class="font-label-md text-label-md pr-4">Can I cancel anytime?</span>
<span class="material-symbols-outlined text-on-surface-variant chevron transition-transform">expand_more</span>
</div>
<div class="accordion-content">
<p class="p-4 pt-0 font-body-md text-body-md text-on-surface-variant">Yes, you can cancel your subscription at any time from your billing dashboard. You will retain access until the end of your billing cycle.</p>
</div>
</div>
<div class="accordion-item bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm" onclick="toggleAccordion(this)">
<div class="p-4 flex justify-between items-center cursor-pointer select-none">
<span class="font-label-md text-label-md pr-4">What happens to my data?</span>
<span class="material-symbols-outlined text-on-surface-variant chevron transition-transform">expand_more</span>
</div>
<div class="accordion-content">
<p class="p-4 pt-0 font-body-md text-body-md text-on-surface-variant">We prioritize data sovereignty. Your prompts and fine-tuned models belong to you and are never used to train our base models without explicit consent.</p>
</div>
</div>
<div class="accordion-item bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm" onclick="toggleAccordion(this)">
<div class="p-4 flex justify-between items-center cursor-pointer select-none">
<span class="font-label-md text-label-md pr-4">Do you offer educational discounts?</span>
<span class="material-symbols-outlined text-on-surface-variant chevron transition-transform">expand_more</span>
</div>
<div class="accordion-content">
<p class="p-4 pt-0 font-body-md text-body-md text-on-surface-variant">Absolutely! Verified students and non-profit researchers are eligible for a 50% discount on the Pro plan. Contact our support team for verification.</p>
</div>
</div>
</div>
</section>
<!-- Final CTA Banner -->
<section class="mt-stack-lg bg-on-background rounded-3xl p-8 text-white relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 blur-3xl rounded-full"></div>
<div class="relative z-10">
<h3 class="font-headline-lg text-headline-lg mb-4">Still undecided?</h3>
<p class="font-body-md text-body-md text-surface-variant/80 mb-6">Speak with one of our AI architects to build a custom implementation for your enterprise needs.</p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-primary-container group" href="#">
                    Book a consultation
                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</section>
</main>
<!-- Bottom Navigation Bar (Shared Component) -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-safe px-4 bg-surface/90 backdrop-blur-lg border-t border-outline-variant/20 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl h-20">
<div class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all active:scale-90">
<span class="material-symbols-outlined">home</span>
<span class="font-label-sm text-label-sm-mobile">Home</span>
</div>
<div class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all active:scale-90">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-sm text-label-sm-mobile">Dash</span>
</div>
<div class="flex flex-col items-center justify-center text-primary font-bold bg-primary-container/10 rounded-xl px-3 py-1 transition-all active:scale-90">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">payments</span>
<span class="font-label-sm text-label-sm-mobile">Billing</span>
</div>
<div class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all active:scale-90">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-sm text-label-sm-mobile">Settings</span>
</div>
</nav>
<script>
        function updatePricing(type) {
            const starter = document.getElementById('price-starter');
            const pro = document.getElementById('price-pro');
            const team = document.getElementById('price-team');
            const monthlyBtn = document.getElementById('monthly-btn');
            const yearlyBtn = document.getElementById('yearly-btn');

            if (type === 'yearly') {
                starter.innerText = '23';
                pro.innerText = '63';
                team.innerText = '159';
                yearlyBtn.classList.add('active-toggle');
                yearlyBtn.classList.remove('text-on-surface-variant');
                monthlyBtn.classList.remove('active-toggle');
                monthlyBtn.classList.add('text-on-surface-variant');
            } else {
                starter.innerText = '29';
                pro.innerText = '79';
                team.innerText = '199';
                monthlyBtn.classList.add('active-toggle');
                monthlyBtn.classList.remove('text-on-surface-variant');
                yearlyBtn.classList.remove('active-toggle');
                yearlyBtn.classList.add('text-on-surface-variant');
            }
        }

        function toggleAccordion(element) {
            const allItems = document.querySelectorAll('.accordion-item');
            const isOpen = element.classList.contains('accordion-open');
            
            allItems.forEach(item => {
                item.classList.remove('accordion-open');
            });

            if (!isOpen) {
                element.classList.add('accordion-open');
            }
        }
    </script>
`
  },
  "dashboard/project-mgmt": {
    bodyClass: "bg-background min-h-screen overflow-x-hidden",
    html: `
<!-- SideNavBar (Execution from JSON) -->
<aside class="fixed left-0 top-0 h-full z-40 bg-surface-container-lowest w-64 flex flex-col border-r border-outline-variant shadow-sm">
<div class="p-stack-lg">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<div>
<h1 class="font-display-lg text-headline-md font-extrabold text-on-surface">Auralis AI</h1>
<p class="font-label-sm text-on-surface-variant opacity-70">Premium Agency Hub</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-2 mt-4">
<!-- Active Tab: Dashboard -->
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl font-bold transition-transform scale-98 active:opacity-80" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="monitoring">monitoring</span>
<span class="font-label-md text-label-md">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-label-md text-label-md">CRM</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="auto_awesome" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
<span class="font-label-md text-label-md">Workflows</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="business_center">business_center</span>
<span class="font-label-md text-label-md">Agency</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="px-4 py-6 border-t border-outline-variant">
<button class="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-sm">
<span class="material-symbols-outlined">add</span>
<span class="font-label-md text-label-md">New Project</span>
</button>
</div>
<footer class="p-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
<span class="font-label-md text-label-md text-sm">Help Center</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span class="font-label-md text-label-md text-sm">Account</span>
</a>
</footer>
</aside>
<!-- Main Content Area -->
<div class="ml-64 flex flex-col min-h-screen">
<!-- TopNavBar (Execution from JSON) -->
<header class="sticky top-0 right-0 w-full z-30 flex justify-between items-center px-margin-desktop h-16 bg-surface/80 backdrop-blur-md">
<div class="flex items-center gap-8">
<div class="relative w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline scale-90">search</span>
<input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-2 font-body-md text-sm focus:ring-2 focus:ring-primary-container focus:outline-none transition-all" placeholder="Search automations..." type="text"/>
</div>
<nav class="hidden md:flex gap-6">
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md" href="#">Overview</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">Metrics</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">Pipeline</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
</button>
<div class="h-8 w-px bg-outline-variant mx-1"></div>
<div class="flex items-center gap-3 cursor-pointer p-1 hover:bg-surface-container rounded-xl transition-all">
<img class="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A professional headshot of a modern software engineer in a high-tech studio environment, with soft cinematic lighting and a neutral grey background. The style is clean, corporate, and premium, consistent with a high-end AI SaaS platform branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo84ybofiFZmVoXs37h3sZGU2bhxLmfC9E5ZWfRnSvU6ZfKBPy9PXESK5GfQDa_v5jushQAzLJgYIYs-gGnakhIAMo0DEOavtPy2Q7ehVYqnHNgQ7K4KBN91IBDQNilTDGq2zN2zwrNpqJZXtwxyF17uv2h5mJSwI47YF61Lb20J5FYe8E_xkQ5w9Opbza4SQNl4fdnm0EnfbjDkssm8HqlvcINSgdOmsiXZ_jafA7Qv0e-LXJYJBv"/>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="apps">apps</span>
</div>
</div>
</header>
<!-- Page Content -->
<main class="flex-1 p-margin-desktop grid grid-cols-12 gap-gutter">
<!-- Breadcrumbs & Header -->
<div class="col-span-12 mb-stack-md flex justify-between items-end">
<div>
<nav class="flex items-center gap-2 text-on-surface-variant mb-2">
<span class="font-label-sm">Dashboard</span>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<span class="font-label-sm text-primary font-bold">Automation</span>
</nav>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Automation Hub</h2>
</div>
<div class="flex gap-3">
<button class="px-4 py-2 border border-outline-variant text-on-surface-variant rounded-xl font-label-md hover:bg-surface-container-low transition-all">
                        View History
                    </button>
<button class="px-4 py-2 bg-primary text-on-primary rounded-xl font-label-md hover:opacity-90 shadow-sm transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">rocket_launch</span>
                        Run All
                    </button>
</div>
</div>
<!-- Dashboard Grid Layout -->
<div class="col-span-12 lg:col-span-9 space-y-gutter">
<!-- Section: Active Projects -->
<section>
<div class="flex items-center justify-between mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Active Projects</h3>
<a class="text-primary font-label-md hover:underline" href="#">See all</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-stack-md">
<!-- Project Card 1 -->
<div class="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl hover:shadow-md transition-shadow ai-border-signal group">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 bg-primary-container/30 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">analytics</span>
</div>
<span class="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-secondary-fixed-dim rounded-full pulse-signal"></span>
                                    Running
                                </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Nexus Data Pipeline</h4>
<p class="text-on-surface-variant text-sm mb-4 line-clamp-1">ETL Automation for Global E-commerce</p>
<div class="space-y-2 mb-4">
<div class="flex justify-between text-xs font-medium">
<span class="text-on-surface-variant">Progress</span>
<span class="text-on-surface">78%</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-primary-container h-full rounded-full transition-all duration-1000" style="width: 78%"></div>
</div>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white" data-alt="Close up avatar of a professional designer with a modern, high-tech aesthetic, brightly lit and set against a minimalist clean workspace background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXUSE1Ie_Mb5N8RD5CFCxpixk616J8_-4Z7NGBBLTdxvOL7fLU3UGD1zQU-etUbmL3l0Btuk0pZIGYqOuApOOFRqyp1FQqLhGMqfPHCvS4-eIArpiXXedgJyv5v8QahH7IuaYrWuJ0f7au1R5-Vq8T_YRECkaMOsdpmGXeG_f7t6k9SzdDvp3kGdACfmWld2kl_TDD99mGVPKvcQjcwvCJ9EZZG8Yt2OPzArYxyzwEGPP6BL3YUVfg"/>
<div class="w-6 h-6 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[10px] font-bold">+3</div>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</div>
</div>
<!-- Project Card 2 -->
<div class="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl hover:shadow-md transition-shadow group">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 bg-tertiary-container/30 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
</div>
<span class="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-outline rounded-full"></span>
                                    Paused
                                </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Bot Support Tier 2</h4>
<p class="text-on-surface-variant text-sm mb-4 line-clamp-1">AI Agent training and deployment</p>
<div class="space-y-2 mb-4">
<div class="flex justify-between text-xs font-medium">
<span class="text-on-surface-variant">Progress</span>
<span class="text-on-surface">42%</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-tertiary h-full rounded-full transition-all duration-1000" style="width: 42%"></div>
</div>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white" data-alt="Modern close-up avatar of a woman with glasses, smiling professionally, clean studio lighting with vibrant electric cyan accent lights in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2IW5ZlD5pHrL0DmqbL33fx8IdqL39yFPpb0eNq_hCLSxX2rCpBbKCORtYpp-JhUW7jwJghjkS02uCs_SsLtjzoAQPPJeaHx8YTEn97rz9Q7SIeGJ30sygOVQQGohgAubK5J3EFkEqrpnUdAiYIgV2PhsXBs37w-W5JrLLetzA0OZoor49GuKUo-dWJd_bOrD5stESuVGlhhPD4zjAxL9ww4ym4cnRoV4WqgxbYcWDPkHTmUDLD6RI"/>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</div>
</div>
<!-- Project Card 3 -->
<div class="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl hover:shadow-md transition-shadow group">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 bg-secondary-container/30 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">cloud_sync</span>
</div>
<span class="bg-secondary-container/40 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-xs">check_circle</span>
                                    Completed
                                </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Sync Engine v2</h4>
<p class="text-on-surface-variant text-sm mb-4 line-clamp-1">Legacy DB migration automation</p>
<div class="space-y-2 mb-4">
<div class="flex justify-between text-xs font-medium">
<span class="text-on-surface-variant">Progress</span>
<span class="text-on-surface">100%</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full transition-all duration-1000" style="width: 100%"></div>
</div>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30">
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border-2 border-white" data-alt="Professional studio portrait of a man in tech, clean lighting, high contrast white background, high-end corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDq4UBdkvDFALr1OpogLLsvX1t2jsw57W65yjasLjBsz0KOyuV_0WQP5PvX7hdW9dYXetxi4fNzvlYKpbwdYwT7BxnA_f8KvcYh-Q8DQJ4F04T6WI9H1Tslky4rW3yB94aW6a09DgvtHfrIaQlb2nvioYLtOdhutDlA_o87yu-PEuvXeo9toPUp3bxjKNETOWBkm08hQ_uvagN0B5_g_YhPUefRPCCzmF3pUlPmP1bDvAyLkg-57mX"/>
<img class="w-6 h-6 rounded-full border-2 border-white" data-alt="Professional close-up of a female software developer with a focused expression, high-key lighting, modern tech studio aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-RjyALSMcezB4ksEJV60m2HgVfi-jdojx9Ok5h58npvgfYw8ybglZGRvpltXfN4KDPG_NHNFTOXijiTPSErz2lj7uQbBg00oQkYH6VZLe8dKmAW2KVNnsHdxCzb2wHtCf2zNWccZj7SY9nc7wJwNcuHPJLId2_uCNkDkVpjxEogwkYGy4q3hvKms3J0g3YXS4q2FLKKA4dS4bFiEyYo1957oNNAdwxUX59Afhu27IGX_rBPy3vZmc"/>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</div>
</div>
</div>
</section>
<!-- Section: Workflow Timeline & Team Workload (Asymmetric Bento Grid) -->
<div class="grid grid-cols-12 gap-stack-md">
<!-- Workflow Timeline -->
<div class="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl">
<div class="flex items-center justify-between mb-stack-lg">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Workflow Timeline</h3>
<p class="text-on-surface-variant font-body-md text-sm">Live automation schedule</p>
</div>
<button class="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm">calendar_month</span>
</button>
</div>
<div class="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
<!-- Timeline Item 1 -->
<div class="relative pl-8 group">
<div class="absolute left-0 top-1 w-6 h-6 bg-primary-container rounded-full flex items-center justify-center z-10 shadow-sm border-4 border-white">
<span class="material-symbols-outlined text-[12px] text-on-primary-container font-bold">check</span>
</div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-3 bg-surface-container-low rounded-xl border border-transparent group-hover:border-primary/20 transition-all cursor-pointer">
<div>
<h4 class="font-label-md text-on-surface">Data Cleansing Node</h4>
<p class="text-xs text-on-surface-variant">Batch processing #9421 completed</p>
</div>
<div class="text-right">
<span class="text-xs font-bold text-primary">Success</span>
<p class="text-[10px] text-outline">09:12 AM</p>
</div>
</div>
</div>
<!-- Timeline Item 2 -->
<div class="relative pl-8 group">
<div class="absolute left-0 top-1 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center z-10 shadow-sm border-4 border-white">
<span class="material-symbols-outlined text-[12px] text-on-secondary-container font-bold pulse-signal">sync</span>
</div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-3 bg-white rounded-xl border border-outline-variant group-hover:border-primary/20 transition-all cursor-pointer glow-cyan">
<div>
<h4 class="font-label-md text-on-surface">Model Retraining</h4>
<p class="text-xs text-on-surface-variant">Processing deep-learning weights...</p>
</div>
<div class="text-right">
<span class="text-xs font-bold text-secondary">Active</span>
<p class="text-[10px] text-outline">In Progress</p>
</div>
</div>
</div>
<!-- Timeline Item 3 -->
<div class="relative pl-8 group">
<div class="absolute left-0 top-1 w-6 h-6 bg-surface-variant rounded-full flex items-center justify-center z-10 shadow-sm border-4 border-white">
<span class="material-symbols-outlined text-[12px] text-outline font-bold">schedule</span>
</div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-3 bg-white rounded-xl border border-outline-variant opacity-60 group-hover:opacity-100 transition-all cursor-pointer">
<div>
<h4 class="font-label-md text-on-surface">Client Report Generation</h4>
<p class="text-xs text-on-surface-variant">Trigger scheduled for EOD</p>
</div>
<div class="text-right">
<span class="text-xs font-bold text-on-surface-variant">Pending</span>
<p class="text-[10px] text-outline">05:00 PM</p>
</div>
</div>
</div>
</div>
</div>
<!-- Team Workload -->
<div class="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl">
<h3 class="font-headline-md text-headline-md text-on-surface mb-stack-lg">Team Workload</h3>
<div class="space-y-6">
<!-- Team Member 1 -->
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="Professional avatar of a senior automation engineer, close-up, high-end studio lighting, clean tech-inspired background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzMAZoPntPlvS41ctScdLq5b-LmKAnX491v8RfYly_5Sjwj5bP48XlO2mWlBtMWLrJrCBXo5gMVhAhX-ijUMYXdHBoncSSwjz9XBUKmB2NTJtH_cShJz9hxTWlOr5Y8xwyf13d0q74fB_VgImd8z5lEnIPijPOitr5euZpirid8sSL3DBB2pazLhaxi295vj9bGOKpT3zC1pAV3vVQFijd_FrDnfCfXJ57r0P3LAGsCyc66a9_02jg"/>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<p class="font-label-md text-on-surface truncate">Alex Rivera</p>
<span class="text-[10px] font-bold text-error">95%</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full">
<div class="bg-error h-full rounded-full" style="width: 95%"></div>
</div>
</div>
</div>
<!-- Team Member 2 -->
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="Close up profile of a modern tech product manager, studio lighting, professional and minimal aesthetic with soft cool tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYUbuot_MiBpDwrrTXNOE7zlPCbUsZTLIA0JPFi4XFHVlrEMTJkFq-d3thzX6BAgTJlKJLZTgvobyIPOSV1X5mW-1tk0s4dvOMNf3wGDcn_RBsM59M7-KR__vApHXk3F_l-FoNZD4U2A26-_sTKxdngCU0gFBnXv0Sv_ohOfwiCOcfmM_m3sRiQIr0HRGjcKN-KfA_k-rcLRwvCBITzMHl3P9P8yxxwe4x75jx09vhJElmrXWcm_R0"/>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<p class="font-label-md text-on-surface truncate">Sarah Chen</p>
<span class="text-[10px] font-bold text-secondary">62%</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full">
<div class="bg-secondary h-full rounded-full" style="width: 62%"></div>
</div>
</div>
</div>
<!-- Team Member 3 -->
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="Portrait of a young energetic developer, high-contrast tech aesthetic, vibrant electric cyan background glow, professional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_B4EfeUYPj2tl4VVTSlK6Dp7HAi_jDD54oN79kPzC47dOGq2cDuVthjPFtu8jyMWiaCI749RlSw9SVJSeCrbne_vU5WWP-Zj6u2RIVOyqYkJxQxaOCitpNx0QWVbrFxpbsIGKkU3LbaVALR8FZDdwLKFwOdEl0vdjCyBqFYwUTfXa0wK0QjvqNmdb_WZMn0QcKChHf0LQK1gfqsRB73mDLU_QfJ3Ad_mMClBi0826Gs8TYWRORebL"/>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<p class="font-label-md text-on-surface truncate">Jordan Smith</p>
<span class="text-[10px] font-bold text-primary">28%</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full">
<div class="bg-primary h-full rounded-full" style="width: 28%"></div>
</div>
</div>
</div>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant">
<div class="bg-primary-container/10 p-4 rounded-xl border border-primary-container/30">
<p class="text-xs text-primary font-bold mb-1">Manager Note</p>
<p class="text-xs text-on-surface-variant leading-relaxed italic">"Project Alpha needs re-allocation. Alex is at capacity."</p>
</div>
</div>
</div>
</div>
</div>
<!-- AI Suggestions Sidebar Panel -->
<aside class="col-span-12 lg:col-span-3">
<div class="bg-inverse-surface text-inverse-on-surface p-stack-lg rounded-2xl h-full shadow-lg relative overflow-hidden">
<!-- Background Decoration -->
<div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
<div class="relative z-10">
<div class="flex items-center gap-2 mb-stack-lg">
<span class="material-symbols-outlined text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
<h3 class="font-headline-md text-headline-md">AI Suggestions</h3>
</div>
<div class="space-y-gutter">
<!-- Suggestion 1 -->
<div class="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-primary-fixed-dim text-sm">trending_up</span>
</div>
<div>
<h4 class="font-label-md mb-1 group-hover:text-primary-fixed-dim transition-colors">Optimization Tip</h4>
<p class="text-xs text-outline-variant leading-relaxed">Latency on Nexus Pipeline is 12% above benchmark. Consolidate AWS regions to reduce hop counts.</p>
</div>
</div>
<div class="mt-3 flex justify-end">
<button class="text-[10px] font-bold uppercase tracking-wider text-primary-fixed-dim hover:underline">Apply Now</button>
</div>
</div>
<!-- Suggestion 2 -->
<div class="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-lg bg-secondary-fixed/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-secondary-fixed text-sm">savings</span>
</div>
<div>
<h4 class="font-label-md mb-1 group-hover:text-secondary-fixed transition-colors">Cost Efficiency</h4>
<p class="text-xs text-outline-variant leading-relaxed">Model training for Bot Tier 2 can be moved to spot instances, saving approx. $420/month.</p>
</div>
</div>
<div class="mt-3 flex justify-end">
<button class="text-[10px] font-bold uppercase tracking-wider text-secondary-fixed hover:underline">View Plan</button>
</div>
</div>
<!-- Suggestion 3 -->
<div class="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-lg bg-error-container/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-error text-sm">security</span>
</div>
<div>
<h4 class="font-label-md mb-1 group-hover:text-error transition-colors">Security Alert</h4>
<p class="text-xs text-outline-variant leading-relaxed">Detected 3 unencrypted API calls in Sync Engine. Update credential wrapper immediately.</p>
</div>
</div>
<div class="mt-3 flex justify-end">
<button class="text-[10px] font-bold uppercase tracking-wider text-error hover:underline">Fix Vulnerability</button>
</div>
</div>
</div>
<!-- Upgrade CTA -->
<div class="mt-stack-lg p-stack-md bg-primary-container rounded-xl">
<h4 class="text-on-primary-container font-headline-sm text-sm font-bold mb-1">Auralis Pro AI</h4>
<p class="text-on-primary-container/80 text-[11px] leading-tight mb-3">Unlock predictive maintenance and automated error recovery.</p>
<button class="w-full py-2 bg-inverse-surface text-inverse-on-surface rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                                Upgrade Plan
                            </button>
</div>
</div>
</div>
</aside>
</main>
</div>
<!-- Micro-interaction Scripts -->
<script>
        // Simple interactivity for demonstration
        document.querySelectorAll('button, a').forEach(el => {
            el.addEventListener('mousedown', () => {
                el.classList.add('scale-95');
            });
            el.addEventListener('mouseup', () => {
                el.classList.remove('scale-95');
            });
            el.addEventListener('mouseleave', () => {
                el.classList.remove('scale-95');
            });
        });

        // Simulating live updates
        setInterval(() => {
            const dots = document.querySelectorAll('.pulse-signal');
            dots.forEach(dot => {
                dot.style.opacity = Math.random() > 0.5 ? '1' : '0.6';
            });
        }, 1500);
    </script>
`
  },
  "dashboard/finance": {
    bodyClass: "bg-background text-on-surface",
    html: `
<!-- Sidebar Navigation -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-stack-md px-4 z-50">
<div class="mb-stack-lg px-2">
<h1 class="font-headline-md text-headline-md text-primary">Sales HQ</h1>
<p class="font-label-md text-label-md text-on-surface-variant">Global Division</p>
</div>
<button class="mb-stack-lg bg-primary text-on-primary py-3 px-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm">
<span class="material-symbols-outlined">add</span>
            New Deal
        </button>
<nav class="flex-1 space-y-2">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">view_kanban</span> Pipeline
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">group</span> Clients
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">assignment</span> Tasks
            </a>
<a class="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">leaderboard</span> Reports
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">diversity_3</span> Team
            </a>
</nav>
<div class="mt-auto space-y-2 pt-stack-md border-t border-outline-variant">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#">
<span class="material-symbols-outlined">help</span> Help
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#">
<span class="material-symbols-outlined">logout</span> Logout
            </a>
</div>
</aside>
<!-- Main Content Wrapper -->
<div class="ml-64 min-h-screen flex flex-col">
<!-- Top Navigation -->
<header class="w-full h-16 bg-surface border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop sticky top-0 z-40">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md text-primary">Auralis CRM</span>
<nav class="hidden md:flex gap-6">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Deals</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Leads</a>
<a class="text-primary border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Analytics</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden sm:block">
<input class="bg-surface-container rounded-full px-4 py-2 pl-10 text-body-md outline-none focus:ring-2 focus:ring-primary-container border-none transition-all w-64" placeholder="Search analytics..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant">search</span>
</div>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined">settings</span>
</button>
<img class="w-10 h-10 rounded-full border-2 border-primary-container shadow-sm object-cover" data-alt="A close-up portrait of a professional sales manager with a friendly expression, captured in high-detail studio lighting. The background is a clean, minimalist office environment with soft teal and white tones that match the corporate CRM aesthetic. The lighting is bright and airy, emphasizing a modern light-mode interface feel with premium clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgjyT9rddBzXNlvSxZw5aGKO6PjLgoOdCRcN5Jz664IiRVmJhmR4BADVfwVl89g4fQUh-5v2IB8vR1P-3MOJJXdNoDXS2teS0bCgXjUAuVCYL-nJYnf6NMqs8BFPgpnOGRLyV3v_gMbGz-D9scN3ImTydYLuXLh8D724u4BsFBpgv8nkTYXsCtCGRHBHTFsHAy6TVEwqizkDMdBJFlhC_OnAQfnWsSV2jeXJNYyI6vdxNPgYkDAStX"/>
</div>
</header>
<!-- Main Dashboard Canvas -->
<main class="flex-1 p-margin-desktop max-w-container-max w-full mx-auto space-y-stack-lg">
<!-- Dashboard Header & Controls -->
<section class="flex flex-col md:flex-row justify-between items-start md:items-end gap-stack-md">
<div>
<h2 class="font-headline-xl text-headline-xl text-on-surface">Quota Performance</h2>
<div class="flex items-center gap-2 mt-1">
<div class="w-3 h-3 rounded-full bg-secondary pulse-dot"></div>
<p class="text-on-surface-variant font-body-md text-body-md">Live sync with Pipeline Data</p>
</div>
</div>
<div class="flex flex-wrap gap-stack-sm w-full md:w-auto">
<div class="flex items-center gap-2 bg-white border border-outline-variant rounded-lg px-4 py-2">
<span class="material-symbols-outlined text-on-surface-variant">calendar_today</span>
<span class="font-label-md text-label-md">Oct 1, 2023 - Dec 31, 2023</span>
</div>
<button class="flex items-center gap-2 border border-outline-variant rounded-lg px-4 py-2 hover:bg-surface-variant transition-colors font-label-md text-label-md">
<span class="material-symbols-outlined">filter_list</span>
                        Filter
                    </button>
<button class="flex items-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-2 transition-transform active:scale-95 font-label-md text-label-md">
<span class="material-symbols-outlined">download</span>
                        Export PDF
                    </button>
</div>
</section>
<!-- Key Metrics (Bento Style) -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<!-- Stat Card 1 -->
<div class="glass-card p-stack-md rounded-xl ai-signal-border">
<p class="text-on-surface-variant font-label-md text-label-md">Total Quota Revenue</p>
<h3 class="text-headline-lg font-headline-lg mt-2">$2,450,000</h3>
<div class="flex items-center gap-1 mt-2 text-secondary font-label-sm text-label-sm">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>12.5% vs last Q</span>
</div>
</div>
<!-- Stat Card 2 -->
<div class="glass-card p-stack-md rounded-xl">
<p class="text-on-surface-variant font-label-md text-label-md">Avg. Deal Size</p>
<h3 class="text-headline-lg font-headline-lg mt-2">$42,800</h3>
<div class="flex items-center gap-1 mt-2 text-secondary font-label-sm text-label-sm">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>4.2% increase</span>
</div>
</div>
<!-- Stat Card 3 -->
<div class="glass-card p-stack-md rounded-xl">
<p class="text-on-surface-variant font-label-md text-label-md">Quota Attainment</p>
<h3 class="text-headline-lg font-headline-lg mt-2">88.4%</h3>
<div class="w-full bg-surface-container rounded-full h-1.5 mt-4 overflow-hidden">
<div class="bg-primary h-full w-[88%] rounded-full"></div>
</div>
</div>
<!-- Stat Card 4 -->
<div class="glass-card p-stack-md rounded-xl">
<p class="text-on-surface-variant font-label-md text-label-md">Active Reps</p>
<h3 class="text-headline-lg font-headline-lg mt-2">24 / 28</h3>
<div class="flex -space-x-2 mt-4">
<img class="w-6 h-6 rounded-full border border-white" data-alt="Close-up headshot of a diverse sales team member, vibrant professional lighting, soft focus office background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoOVcUA8uh_Umm8rq8Ej6Cjglz_M79v6xWI2eHsXKCv7dylOCtgfD9V9DMS_azGzkRFR6RDQuYsSZKyRXOGvdTt_Wd20odQg0a15tNT5VOKq04t472eIg3bVGiL2PgnhkMAw74exInngUf0jzZHDCQrzbVP0BSWZKf9jU0j1mOg2ojdZ_SEf3ihtR3VOe0EEmxeXNjv6QkIu1OzqcJLgPdSP_XI8WKoBaji1B0CwvmX1i0iRDXWgK"/>
<img class="w-6 h-6 rounded-full border border-white" data-alt="Close-up headshot of a smiling female executive, crisp lighting, high contrast tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUFpg9GHl__FySpS8Nsv0z0f2WSRNCfh7M3LZSey4QDdHx0XI4pRt-RZoEeNKSXQ6A_N79FJiFNPU3jz0Q2PWb_PN1Krdr2p0EQRGeSgslys4d3YwtML9McetHm1LWYvuTcpbG5dIpBNyje2cySpCwM30JhKBcjJLfa5pXqpbrC0oMGEfhjZbFvXv8bDxR8apietqe79qh9d6ajoEx8obcsJyXLpb1KRYwWovdGg-iVvdGXVSXqaIi"/>
<img class="w-6 h-6 rounded-full border border-white" data-alt="Professional avatar of a young male entrepreneur, clean minimal background with cyan accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0TGCp4g0agRbV37zNzSc2qzHlPv6tZSZp2vcpt88SNeiDTPXwx-f9FnR19s7LzjtDzLsR_WhEvAjshWfKrXy4b-jeFoOuCWcmFGmnXYeU18uvEdox8znVN-2EitG04OXdQrsNW3n2yEnzM3kfd18by4yzRbmaFMbQ3pPAraP0VxMKSD3P_6lmIr7UksEP5sdZw1Gf1dAiaxSVPhx3quWTWc2WLOnl6g6DPcCU7-u7O7uAfFpT1XEf"/>
<div class="w-6 h-6 rounded-full bg-primary-container text-on-primary-container text-[10px] flex items-center justify-center font-bold border border-white">+20</div>
</div>
</div>
</div>
<!-- Visual Analytics Section -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- Main Comparison Chart -->
<div class="lg:col-span-2 glass-card p-stack-lg rounded-xl flex flex-col">
<div class="flex justify-between items-center mb-stack-lg">
<h4 class="font-headline-md text-headline-md">Monthly Targets vs Actuals</h4>
<div class="flex gap-4">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-sm bg-primary"></span>
<span class="text-label-sm font-label-sm">Actuals</span>
</div>
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-sm bg-primary-container"></span>
<span class="text-label-sm font-label-sm">Target</span>
</div>
</div>
</div>
<!-- Mock Bar Chart -->
<div class="flex-1 flex items-end justify-between gap-4 h-64 mt-4">
<div class="flex-1 flex flex-col justify-end items-center gap-2 group">
<div class="w-full flex justify-center items-end gap-1">
<div class="w-4 md:w-8 bg-primary rounded-t-sm h-48 transition-all hover:opacity-80"></div>
<div class="w-4 md:w-8 bg-primary-container rounded-t-sm h-56 transition-all hover:opacity-80"></div>
</div>
<span class="text-label-sm font-label-sm">Jul</span>
</div>
<div class="flex-1 flex flex-col justify-end items-center gap-2 group">
<div class="w-full flex justify-center items-end gap-1">
<div class="w-4 md:w-8 bg-primary rounded-t-sm h-52 transition-all hover:opacity-80"></div>
<div class="w-4 md:w-8 bg-primary-container rounded-t-sm h-44 transition-all hover:opacity-80"></div>
</div>
<span class="text-label-sm font-label-sm">Aug</span>
</div>
<div class="flex-1 flex flex-col justify-end items-center gap-2 group">
<div class="w-full flex justify-center items-end gap-1">
<div class="w-4 md:w-8 bg-primary rounded-t-sm h-60 transition-all hover:opacity-80"></div>
<div class="w-4 md:w-8 bg-primary-container rounded-t-sm h-52 transition-all hover:opacity-80"></div>
</div>
<span class="text-label-sm font-label-sm">Sep</span>
</div>
<div class="flex-1 flex flex-col justify-end items-center gap-2 group">
<div class="w-full flex justify-center items-end gap-1">
<div class="w-4 md:w-8 bg-primary rounded-t-sm h-32 transition-all hover:opacity-80"></div>
<div class="w-4 md:w-8 bg-primary-container rounded-t-sm h-48 transition-all hover:opacity-80"></div>
</div>
<span class="text-label-sm font-label-sm">Oct</span>
</div>
<div class="flex-1 flex flex-col justify-end items-center gap-2 group">
<div class="w-full flex justify-center items-end gap-1">
<div class="w-4 md:w-8 bg-primary rounded-t-sm h-56 transition-all hover:opacity-80"></div>
<div class="w-4 md:w-8 bg-primary-container rounded-t-sm h-60 transition-all hover:opacity-80"></div>
</div>
<span class="text-label-sm font-label-sm">Nov</span>
</div>
<div class="flex-1 flex flex-col justify-end items-center gap-2 group">
<div class="w-full flex justify-center items-end gap-1">
<div class="w-4 md:w-8 bg-primary rounded-t-sm h-64 transition-all hover:opacity-80"></div>
<div class="w-4 md:w-8 bg-primary-container rounded-t-sm h-40 transition-all hover:opacity-80"></div>
</div>
<span class="text-label-sm font-label-sm text-primary font-bold">Dec</span>
</div>
</div>
</div>
<!-- Leaderboard Section -->
<div class="glass-card p-stack-lg rounded-xl">
<div class="flex justify-between items-center mb-stack-md">
<h4 class="font-headline-md text-headline-md">Top Performers</h4>
<span class="material-symbols-outlined text-primary cursor-pointer">more_horiz</span>
</div>
<div class="space-y-4">
<!-- Top Performer 1 -->
<div class="flex items-center gap-4 p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
<div class="relative">
<img class="w-12 h-12 rounded-full object-cover" data-alt="A professional headshot of a top-tier sales representative, lighting is sharp and detailed, neutral office environment, corporate chic aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsZzsvGwDZkjVyYIZmmrNBJCu9Tqpn3FDXOEwQNszGNuGJlSrpD9vEhB2mSG_SqpOPdqdpQSppjd0o3cAtBqjIMLk7kG3VgOp8U1VRsg3sC_WOqCsiy8jcH9mWhKucNk9urhCX_6sQLOWOt_Zm2iDAlkAvEpuTIHaqbyyEfAJo9JJQkMaUJxlX19eNWbRyKYlJ3F73QBnm6cYRRdvkSx9Tw7Mjt2QSeGUdiAXFgUcHckRrgj3AyH0R"/>
<div class="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary-fixed text-on-secondary-fixed text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">1</div>
</div>
<div class="flex-1">
<h5 class="font-label-md text-label-md">Alex Rivera</h5>
<p class="text-on-surface-variant font-label-sm text-label-sm">$480k reached</p>
</div>
<div class="text-right">
<p class="text-primary font-bold text-label-md">112%</p>
<span class="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">Quota Met</span>
</div>
</div>
<!-- Top Performer 2 -->
<div class="flex items-center gap-4 p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
<div class="relative">
<img class="w-12 h-12 rounded-full object-cover" data-alt="Professional studio portrait of a woman in a business suit, soft professional lighting, modern clean-cut digital background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI6v-af5udhYEQxKTJUkW3osT6d9ucgXYh92YfzTIsKwIpzB4cfqdcnYhrPvhVbkmA_TL-ZCJ70w88Qm4Q-VzuXH54FTIGPln-JKQ1bJ0NbFN04-zVa11U5uiRb4RLLJFMDrwxcI0pAM06_ZE52BexbJWdlBh_OWhrYwqqB8CiAJxoMhgQLC8h9iI0CwqPuV7w-vUMHTNCM6ZfFcusiIsmpzuija1xNbNBeG18SwXzJNSy8AqF1jMh"/>
<div class="absolute -bottom-1 -right-1 w-5 h-5 bg-surface-container-highest text-on-surface text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">2</div>
</div>
<div class="flex-1">
<h5 class="font-label-md text-label-md">Sarah Chen</h5>
<p class="text-on-surface-variant font-label-sm text-label-sm">$410k reached</p>
</div>
<div class="text-right">
<p class="text-primary font-bold text-label-md">98%</p>
<span class="text-[10px] bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-full">On Track</span>
</div>
</div>
<!-- Top Performer 3 -->
<div class="flex items-center gap-4 p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
<div class="relative">
<img class="w-12 h-12 rounded-full object-cover" data-alt="Medium shot of a male sales professional in a light-colored polo shirt, bright daylight lighting, modern high-tech office background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfvuxkPMKcaNeMyQZ_II9IrHlUzmeAgffsrXMEvV9AQnSDpAWHaZ4zT819z5Ga2NjLc9BKGiR0hhmR3qBftdlS6ICAUtOv__mxdV0c1uzuyucSP_AJG0ubJthwDUbfWpntPsDoJapAWf-NoDf0viKIuxo3es4d1peC2UUgxXY-58LRNxUQ1cSbsME0wMRW2_2gVs0zvrGw2CtequaG5IwbgM1_wufHKh2FxmF86CecNMB9dvLCg_zO"/>
<div class="absolute -bottom-1 -right-1 w-5 h-5 bg-surface-container-highest text-on-surface text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">3</div>
</div>
<div class="flex-1">
<h5 class="font-label-md text-label-md">Mark Foster</h5>
<p class="text-on-surface-variant font-label-sm text-label-sm">$395k reached</p>
</div>
<div class="text-right">
<p class="text-primary font-bold text-label-md">94%</p>
<span class="text-[10px] bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-full">On Track</span>
</div>
</div>
<button class="w-full text-center py-2 text-primary font-label-md text-label-md hover:underline">View Full Leaderboard</button>
</div>
</div>
</div>
<!-- Radial Progress Individual Gauges -->
<section class="space-y-stack-md">
<h4 class="font-headline-md text-headline-md">Regional Quota Distribution</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Gauge 1 -->
<div class="glass-card p-stack-md rounded-xl flex flex-col items-center text-center">
<div class="relative w-32 h-32 flex items-center justify-center mb-4">
<svg class="w-full h-full -rotate-90">
<circle cx="64" cy="64" fill="none" r="58" stroke="#e8eff1" stroke-width="8"></circle>
<circle cx="64" cy="64" fill="none" r="58" stroke="#006875" stroke-dasharray="364.4" stroke-dashoffset="91.1" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-headline-md font-headline-md">75%</span>
<span class="text-[10px] text-on-surface-variant uppercase font-bold">North America</span>
</div>
</div>
<p class="font-label-md text-label-md text-on-surface-variant">Ahead by $45k</p>
</div>
<!-- Gauge 2 -->
<div class="glass-card p-stack-md rounded-xl flex flex-col items-center text-center">
<div class="relative w-32 h-32 flex items-center justify-center mb-4">
<svg class="w-full h-full -rotate-90">
<circle cx="64" cy="64" fill="none" r="58" stroke="#e8eff1" stroke-width="8"></circle>
<circle cx="64" cy="64" fill="none" r="58" stroke="#00daf3" stroke-dasharray="364.4" stroke-dashoffset="182.2" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-headline-md font-headline-md">50%</span>
<span class="text-[10px] text-on-surface-variant uppercase font-bold">Europe</span>
</div>
</div>
<p class="font-label-md text-label-md text-on-surface-variant">On-track for Q4</p>
</div>
<!-- Gauge 3 -->
<div class="glass-card p-stack-md rounded-xl flex flex-col items-center text-center">
<div class="relative w-32 h-32 flex items-center justify-center mb-4">
<svg class="w-full h-full -rotate-90">
<circle cx="64" cy="64" fill="none" r="58" stroke="#e8eff1" stroke-width="8"></circle>
<circle cx="64" cy="64" fill="none" r="58" stroke="#ae2f34" stroke-dasharray="364.4" stroke-dashoffset="273.3" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-headline-md font-headline-md">25%</span>
<span class="text-[10px] text-on-surface-variant uppercase font-bold">APAC</span>
</div>
</div>
<p class="font-label-md text-label-md text-tertiary">Behind by $120k</p>
</div>
<!-- Gauge 4 -->
<div class="glass-card p-stack-md rounded-xl flex flex-col items-center text-center">
<div class="relative w-32 h-32 flex items-center justify-center mb-4">
<svg class="w-full h-full -rotate-90">
<circle cx="64" cy="64" fill="none" r="58" stroke="#e8eff1" stroke-width="8"></circle>
<circle cx="64" cy="64" fill="none" r="58" stroke="#27e199" stroke-dasharray="364.4" stroke-dashoffset="36.4" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-headline-md font-headline-md">90%</span>
<span class="text-[10px] text-on-surface-variant uppercase font-bold">Latin Am.</span>
</div>
</div>
<p class="font-label-md text-label-md text-on-surface-variant">Target nearly met</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-4 bg-surface-container-lowest border-t border-outline-variant mt-auto px-margin-desktop flex justify-between items-center">
<span class="font-label-sm text-label-sm text-on-surface-variant">© 2024 Auralis AI. All rights reserved.</span>
<div class="flex gap-6">
<a class="text-on-surface-variant hover:text-primary transition-opacity font-label-sm text-label-sm" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-opacity font-label-sm text-label-sm" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary transition-opacity font-label-sm text-label-sm" href="#">API Status</a>
</div>
</footer>
</div>
<!-- Micro-interaction Scripts -->
<script>
        // Simple search highlighting
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('ring-2', 'ring-primary-container');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('ring-2', 'ring-primary-container');
        });

        // Toggle Export Dropdown logic (Placeholder)
        const exportBtn = document.querySelector('button:contains("Export")');
        if(exportBtn) {
            exportBtn.onclick = () => {
                alert("Preparing detailed quota analytics report for download...");
            };
        }

        // Active State Navigation Simulation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                // In a real SPA we would handle routing here
                console.log('Navigating to:', e.target.innerText);
            });
        });
    </script>
`
  },
  "auth/auth-signup-simple": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar (Shared Component) -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-sm border-b border-outline-variant/30">
<div class="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
<div class="font-headline-md text-headline-md font-extrabold text-primary dark:text-primary-fixed-dim tracking-tight">
                Auralis AI
            </div>
<div class="hidden md:flex gap-gutter items-center">
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Features</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Agency</a>
</div>
<div class="flex gap-4 items-center">
<button class="font-label-md text-label-md px-6 py-2.5 rounded-xl border-1.5 border-on-surface text-on-surface hover:bg-surface-container-high transition-all">Login</button>
<button class="font-label-md text-label-md px-6 py-2.5 rounded-xl bg-primary-container text-on-primary-container hover:shadow-lg transition-all scale-95 active:scale-90">Get Started</button>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="pt-24 pb-stack-lg min-h-screen px-margin-mobile md:px-margin-desktop">
<div class="max-w-container-max mx-auto">
<!-- Progress Stepper -->
<div class="w-full max-w-3xl mx-auto mb-stack-lg">
<div class="flex items-center justify-between mb-4">
<span class="text-label-sm font-label-sm text-primary uppercase tracking-widest">Step 1 of 3</span>
<span class="text-label-sm font-label-sm text-on-surface-variant">Account Setup</span>
</div>
<div class="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-1/3 transition-all duration-700 ease-out"></div>
</div>
</div>
<!-- Bento Onboarding Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<!-- Left: Form Section -->
<div class="lg:col-span-7 bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm relative overflow-hidden">
<!-- Top Signal Decoration -->
<div class="absolute top-0 left-0 w-full h-[2px] bg-primary-container"></div>
<header class="mb-stack-lg">
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-2">Let's build your workspace</h1>
<p class="text-body-lg text-on-surface-variant">Enter your details to begin your journey with Auralis AI's high-performance engine.</p>
</header>
<form class="space-y-6">
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface" for="full_name">Full Name</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 transition-all outline-none" id="full_name" placeholder="Alex Rivera" type="text"/>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface" for="email">Work Email</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 transition-all outline-none" id="email" placeholder="alex@company.com" type="email"/>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface" for="password">Password</label>
<div class="relative">
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 transition-all outline-none" id="password" placeholder="••••••••" type="password"/>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
<p class="text-label-sm font-label-sm text-on-surface-variant mt-1">Minimum 8 characters with a mix of letters and numbers.</p>
</div>
<div class="pt-4">
<button class="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group" type="submit">
                                Continue to Workspace Selection
                                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</form>
<footer class="mt-stack-lg flex items-center justify-center gap-4 text-label-sm font-label-sm text-on-surface-variant">
<div class="flex -space-x-2">
<div class="w-8 h-8 rounded-full border-2 border-surface-container-lowest overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a confident tech founder in a bright, modern office with soft daylight and a clean corporate aesthetic. High resolution, professional studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyZJM7xxbGBi1HS3tmL2B3er8PCmpbdDwrdF23U3essJtnY0QbHnwvRKJZGYUGglCA2lFsAqZyDAS4rdHL8XIKp2znAJgCpM3TyX-MZbnLbYFFHAsunVi8SxiGB3aw4r21BvpntIFul1qP2PQZ44_Zmc1HfrVb-dbHniKmpJC7CzzzeEShNcCHiOJDHhAhK5EbGtf-UNVCIg_d5xPOO9s-AVmUZCmoo0H1lBGl3j80ekAdUlKTuHmI"/>
</div>
<div class="w-8 h-8 rounded-full border-2 border-surface-container-lowest overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close up portrait of a digital architect in a minimalist workspace. Soft focus background showing high-end tech equipment. Clean, bright, and modern light mode vibes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADEx_ojfpNO1yLvZjOTsWDtIor0GJnK3FsT3Qkm5LJtNkAlWyEkvd3vwVcGcQzgHlZT1GDSkLRRl6T2A07lWpOSBK0j4EgoLwLm8GgiZdKzkdrRhkRvPcJkTxDzQm9HupZEhkHY5p3GU0lzDotKd89_Xfodfu6X656X67JI03tMcS7uB82GOJ4-kYaxZagI_0LglW5kDts-KFWbtG7KYl2MV4tZr8Ve9figr4NZpF90RI3sw6XddBl"/>
</div>
</div>
<span>Joined by 2,000+ founders this month</span>
</footer>
</div>
<!-- Right: Preview Section -->
<div class="lg:col-span-5 space-y-gutter">
<!-- Preview Card 1: Workspace Selection -->
<div class="bg-surface-container-high/50 border border-outline-variant rounded-xl p-stack-md opacity-60 grayscale-[0.5] transition-all hover:grayscale-0 hover:opacity-100">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center border border-outline-variant">
<span class="text-label-sm font-bold text-on-surface-variant">2</span>
</div>
<h3 class="font-headline-md text-headline-md">Workspace Selection</h3>
</div>
<div class="grid grid-cols-1 gap-3">
<div class="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant flex items-center gap-3">
<span class="material-symbols-outlined text-primary">code</span>
<div>
<p class="font-label-md text-label-md">Developer</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">API access &amp; SDKs</p>
</div>
</div>
<div class="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant flex items-center gap-3">
<span class="material-symbols-outlined text-primary">rocket_launch</span>
<div>
<p class="font-label-md text-label-md">Founder</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">Scale your vision</p>
</div>
</div>
</div>
</div>
<!-- Preview Card 2: Goal Setting -->
<div class="bg-surface-container-high/50 border border-outline-variant rounded-xl p-stack-md opacity-40 grayscale-[0.8] transition-all">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center border border-outline-variant">
<span class="text-label-sm font-bold text-on-surface-variant">3</span>
</div>
<h3 class="font-headline-md text-headline-md">Goal Setting</h3>
</div>
<div class="space-y-3">
<div class="h-10 bg-surface-container-lowest rounded-lg border border-outline-variant flex items-center px-3">
<div class="w-4 h-4 rounded-full border border-outline-variant mr-3"></div>
<div class="h-2 w-32 bg-surface-variant rounded-full"></div>
</div>
<div class="h-10 bg-surface-container-lowest rounded-lg border border-outline-variant flex items-center px-3">
<div class="w-4 h-4 rounded-full border border-outline-variant mr-3"></div>
<div class="h-2 w-24 bg-surface-variant rounded-full"></div>
</div>
</div>
</div>
<!-- Decorative AI Graphic -->
<div class="relative h-48 rounded-xl overflow-hidden border border-outline-variant group">

<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-4">
<p class="text-label-sm font-label-sm text-on-surface italic">"Auralis automated 40% of our support flow in week one."</p>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer (Shared Component) -->
<footer class="relative w-full mt-stack-lg bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<div class="col-span-1 md:col-span-1">
<div class="font-headline-md text-headline-md font-black text-on-surface dark:text-surface-bright mb-4">Auralis AI</div>
<p class="font-label-sm text-label-sm text-on-surface-variant mb-4">Precision-engineered intelligence for the modern enterprise.</p>
</div>
<div class="flex flex-col gap-2">
<h4 class="font-label-md text-label-md text-primary mb-2">Product</h4>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary hover:translate-x-1 transition-transform" href="#">Features</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary hover:translate-x-1 transition-transform" href="#">Pricing</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary hover:translate-x-1 transition-transform" href="#">Agency</a>
</div>
<div class="flex flex-col gap-2">
<h4 class="font-label-md text-label-md text-primary mb-2">Legal</h4>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary hover:translate-x-1 transition-transform" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary hover:translate-x-1 transition-transform" href="#">Privacy Policy</a>
</div>
<div class="flex flex-col gap-2">
<h4 class="font-label-md text-label-md text-primary mb-2">Support</h4>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary hover:translate-x-1 transition-transform" href="#">Contact</a>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-4">© 2024 Auralis AI. All rights reserved.</p>
</div>
</div>
</footer>
<script>
        // Simple micro-interaction for form focus
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.querySelector('label').classList.add('text-primary');
            });
            input.addEventListener('blur', () => {
                input.parentElement.querySelector('label').classList.remove('text-primary');
            });
        });

        // Form submission simulation
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Validating Credentials...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Success! Moving to Step 2...';
                btn.classList.replace('bg-primary-container', 'bg-secondary-container');
                btn.classList.replace('text-on-primary-container', 'text-on-secondary-container');
            }, 1500);
        });
    </script>
`
  },
  "dashboard/help-desk": {
    bodyClass: "bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar Shell -->
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
<div class="flex justify-between items-center max-w-7xl mx-auto px-margin-desktop py-4">
<div class="flex items-center gap-stack-md">
<span class="font-headline-md text-headline-md font-extrabold text-on-surface">Auralis AI</span>
<nav class="hidden md:flex items-center gap-stack-lg ml-stack-lg">
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Agency</a>
</nav>
</div>
<div class="flex items-center gap-stack-md">
<button class="material-symbols-outlined p-2 hover:bg-surface-container-low rounded-full transition-colors">notifications</button>
<button class="bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all scale-95 active:scale-90 duration-150 shadow-sm">Get Started</button>
</div>
</div>
</header>
<main class="pt-24 pb-stack-lg max-w-7xl mx-auto px-margin-desktop space-y-stack-lg">
<!-- Header Section -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
<div class="space-y-1">
<h1 class="font-headline-lg text-headline-lg text-on-surface">SLA Compliance Dashboard</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Real-time performance monitoring and adherence metrics.</p>
</div>
<div class="flex items-center gap-stack-sm bg-surface-container-lowest border border-outline-variant p-1 rounded-lg">
<button class="px-4 py-2 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-md shadow-sm">Last 30 Days</button>
<button class="px-4 py-2 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors rounded-md">Last 7 Days</button>
</div>
</div>
<!-- Top Row: Key Metrics -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Avg Response Time -->
<div class="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-primary-container transition-colors">
<div class="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
<div class="flex justify-between items-start mb-stack-md">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Response Time</span>
<span class="material-symbols-outlined text-primary">schedule</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-xl text-headline-xl">12m</span>
<span class="text-secondary font-label-md text-label-md flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">arrow_downward</span> 2m
                    </span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-2">Target: &lt; 15 minutes</p>
</div>
<!-- Resolution Rate -->
<div class="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-secondary transition-colors">
<div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
<div class="flex justify-between items-start mb-stack-md">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Resolution Rate</span>
<span class="material-symbols-outlined text-secondary">task_alt</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-xl text-headline-xl">94%</span>
<span class="text-secondary font-label-md text-label-md flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">trending_up</span> 1.4%
                    </span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-2">Target: &gt; 92%</p>
</div>
<!-- CSAT -->
<div class="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-tertiary-container transition-colors">
<div class="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
<div class="flex justify-between items-start mb-stack-md">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">CSAT Score</span>
<span class="material-symbols-outlined text-tertiary">star_rate</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-xl text-headline-xl">4.8/5</span>
<span class="text-secondary font-label-md text-label-md flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">check</span> Stable
                    </span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-2">Based on 1,240 ratings</p>
</div>
</div>
<!-- Main Area: Large Area Chart -->
<div class="glass-card p-stack-lg rounded-xl shadow-sm">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-lg gap-stack-md">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface">Compliance Trends</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Percentage of tickets meeting SLA requirements</p>
</div>
<div class="flex items-center gap-stack-md">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-tertiary"></span>
<span class="font-label-sm text-label-sm">Compliance %</span>
</div>
</div>
</div>
<div class="relative h-[350px] w-full">
<!-- SVG Chart Mockup -->
<svg class="w-full h-full preserve-3d" preserveaspectratio="none" viewbox="0 0 1000 350">
<defs>
<lineargradient id="roseGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ae2f34" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#ae2f34" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Grid Lines -->
<line stroke="#E9E9EF" stroke-dasharray="4" stroke-width="1" x1="0" x2="1000" y1="0" y2="0"></line>
<line stroke="#E9E9EF" stroke-dasharray="4" stroke-width="1" x1="0" x2="1000" y1="87.5" y2="87.5"></line>
<line stroke="#E9E9EF" stroke-dasharray="4" stroke-width="1" x1="0" x2="1000" y1="175" y2="175"></line>
<line stroke="#E9E9EF" stroke-dasharray="4" stroke-width="1" x1="0" x2="1000" y1="262.5" y2="262.5"></line>
<line stroke="#E9E9EF" stroke-width="2" x1="0" x2="1000" y1="350" y2="350"></line>
<!-- Area Path -->
<path d="M0,350 L0,120 C100,110 200,160 300,140 C400,120 500,40 600,60 C700,80 800,100 900,50 L1000,70 L1000,350 Z" fill="url(#roseGradient)"></path>
<!-- Line Path -->
<path d="M0,120 C100,110 200,160 300,140 C400,120 500,40 600,60 C700,80 800,100 900,50 L1000,70" fill="none" stroke="#ae2f34" stroke-linecap="round" stroke-width="3"></path>
<!-- Data Points -->
<circle cx="300" cy="140" fill="#ffffff" r="4" stroke="#ae2f34" stroke-width="2"></circle>
<circle cx="600" cy="60" fill="#ffffff" r="4" stroke="#ae2f34" stroke-width="2"></circle>
<circle cx="900" cy="50" fill="#ffffff" r="4" stroke="#ae2f34" stroke-width="2"></circle>
</svg>
<!-- Y-Axis Labels -->
<div class="absolute left-0 top-0 h-full flex flex-col justify-between py-1 text-[10px] font-label-sm text-on-surface-variant pointer-events-none">
<span>100%</span>
<span>75%</span>
<span>50%</span>
<span>25%</span>
<span>0%</span>
</div>
</div>
<!-- X-Axis Labels -->
<div class="flex justify-between mt-stack-md px-2 text-[10px] font-label-sm text-on-surface-variant">
<span>Nov 1</span>
<span>Nov 7</span>
<span>Nov 14</span>
<span>Nov 21</span>
<span>Nov 28</span>
<span>Dec 1</span>
</div>
</div>
<!-- Bottom Area: Table Performance by Agent -->
<div class="glass-card rounded-xl overflow-hidden">
<div class="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
<h2 class="font-headline-md text-headline-md text-on-surface">Performance by Agent</h2>
<button class="flex items-center gap-1 text-primary font-label-md text-label-md hover:underline">
                    View All <span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
<tr>
<th class="px-6 py-4 font-semibold">Agent Name</th>
<th class="px-6 py-4 font-semibold">Tickets Closed</th>
<th class="px-6 py-4 font-semibold">Compliance %</th>
<th class="px-6 py-4 font-semibold">Avg Rating</th>
<th class="px-6 py-4 font-semibold text-right">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Agent 1 -->
<tr class="hover:bg-surface-container-lowest transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full border border-outline-variant bg-surface-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female support agent with a friendly expression, soft studio lighting, clean tech company aesthetic, wearing a navy blazer, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADoDQUZp1A4jfn_ZfPihkRoCrnqz8RMn23w-hosxNMpZtrm43Ist1cyFqI8C8Jfe9Cll3hE8yPyoIg6QSFtP3LGyUPCAU6--Wd2uIKg5It4Y8ucuQHtdIQHCLBXpy7UkcMIBKWZIiiEOM1k3clhvH4U97wfSiqn_Vm6MAgXMN9e-Ay6qTrEbNwbNl9RbzHsleS6LQSCkdM_XCl7azo_BAViyQ-IQ_Nx2w_OPYJjEpjGzVtdDfWP9KU"/>
</div>
<div>
<div class="font-label-md text-label-md text-on-surface">Elena Vance</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Senior Specialist</div>
</div>
</div>
</td>
<td class="px-6 py-4 font-body-md text-body-md">248</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="flex-1 h-1.5 w-24 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[98%]"></div>
</div>
<span class="font-label-sm text-label-sm">98%</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center text-tertiary gap-0.5">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md">4.9</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">more_vert</button>
</td>
</tr>
<!-- Agent 2 -->
<tr class="hover:bg-surface-container-lowest transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full border border-outline-variant bg-surface-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a male support engineer, tech casual style with a grey sweater, neutral background, bright workspace lighting, high-end commercial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaSseue0NjL99CwCTk_E4ds7WbXk9IKjggpXpdxJl9kp6-CwjX-kvBuxxhL6wAkNiPtOhXE0bjxHhIMR2b7dTutq55gq3r7FUofijxX39njPfFk7DimOo6nNFM8d4dIts8v3P0S0QBV8eBbXIh9ua09MasSpkitDeQYh_JcCDKwzFp8_dzCwIGf0QQGmlnhv8vm5HMPOeqe9K147QLmKSxYxxHAwW8FeSu4m5y4AEc0hGQPBKeZk7h"/>
</div>
<div>
<div class="font-label-md text-label-md text-on-surface">Marcus Thorne</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Support Tier 2</div>
</div>
</div>
</td>
<td class="px-6 py-4 font-body-md text-body-md">192</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="flex-1 h-1.5 w-24 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[92%]"></div>
</div>
<span class="font-label-sm text-label-sm">92%</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center text-tertiary gap-0.5">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md">4.7</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">more_vert</button>
</td>
</tr>
<!-- Agent 3 -->
<tr class="hover:bg-surface-container-lowest transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full border border-outline-variant bg-surface-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Professional corporate headshot of a middle-aged woman with glasses, confident smile, clean white studio background, bright soft lighting, high-performance tech team aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA81nqNqN9CmT0SPohOMOeniz_Of57K5RH_g_fsL1B2DPSHtWg9resMI5fZ1DJS_FeKUbnll0fbpm34ej_flRnjIzhNMKq6uKqPo1g89lnVGvjycdhO0Z_Bh1xZ7njjcuDYtOh4dWtxwEl_it6CfM_sdsUB-W2wQ_Z6qIs1oydPFx6KTdaiS4RggbwAXtEkKF6o9SX3ymnjxoi6IX1iOox_wYjBI5Y-9nEB068D6Z2iK5jYyn3HuK3H"/>
</div>
<div>
<div class="font-label-md text-label-md text-on-surface">Sarah Jenkins</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Customer Advocate</div>
</div>
</div>
</td>
<td class="px-6 py-4 font-body-md text-body-md">156</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="flex-1 h-1.5 w-24 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary w-[89%]"></div>
</div>
<span class="font-label-sm text-label-sm">89%</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center text-tertiary gap-0.5">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md">4.6</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
<!-- Footer Shell -->
<footer class="bg-surface-container py-stack-lg border-t border-outline-variant/30 mt-stack-lg">
<div class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
<div class="col-span-2">
<span class="font-headline-md text-headline-md font-bold text-on-surface mb-stack-md block">Auralis AI</span>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Empowering intelligent decision making through advanced data compliance and AI monitoring.</p>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-bold mb-4">Product</h4>
<ul class="space-y-2 font-label-sm text-label-sm text-on-surface-variant">
<li class="hover:text-primary transition-colors cursor-pointer">Dashboards</li>
<li class="hover:text-primary transition-colors cursor-pointer">Integrations</li>
<li class="hover:text-primary transition-colors cursor-pointer">SLA Tracker</li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-bold mb-4">Company</h4>
<ul class="space-y-2 font-label-sm text-label-sm text-on-surface-variant">
<li class="hover:text-primary transition-colors cursor-pointer">About Us</li>
<li class="hover:text-primary transition-colors cursor-pointer">Careers</li>
<li class="hover:text-primary transition-colors cursor-pointer">Blog</li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-bold mb-4">Support</h4>
<ul class="space-y-2 font-label-sm text-label-sm text-on-surface-variant">
<li class="hover:text-primary transition-colors cursor-pointer">Help Center</li>
<li class="hover:text-primary transition-colors cursor-pointer">Contact</li>
<li class="hover:text-primary transition-colors cursor-pointer">API</li>
</ul>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary font-bold mb-4">Legal</h4>
<ul class="space-y-2 font-label-sm text-label-sm text-on-surface-variant">
<li class="hover:text-primary transition-colors cursor-pointer">Privacy</li>
<li class="hover:text-primary transition-colors cursor-pointer">Terms</li>
</ul>
</div>
</div>
<div class="max-w-7xl mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-outline-variant/30 text-center md:text-left">
<span class="font-label-sm text-label-sm text-on-surface-variant">© 2024 Auralis AI. All rights reserved.</span>
</div>
</footer>
<!-- Modern Lucide-style Icon Navigation Grid (Bottom Mobile/Desktop Sidebar) -->
<div class="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-stack-sm bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-full shadow-2xl z-50">
<button class="p-2 hover:bg-white/10 rounded-lg transition-all group relative">
<span class="material-symbols-outlined">dashboard</span>
<span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dashboard</span>
</button>
<button class="p-2 hover:bg-white/10 rounded-lg transition-all group relative">
<span class="material-symbols-outlined">analytics</span>
<span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Analytics</span>
</button>
<button class="p-2 bg-primary-fixed text-on-primary-fixed rounded-lg transition-all group relative">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">query_stats</span>
<span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">SLA Compliance</span>
</button>
<div class="w-px h-6 bg-white/20 mx-1"></div>
<button class="p-2 hover:bg-white/10 rounded-lg transition-all group relative">
<span class="material-symbols-outlined">group</span>
<span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Agents</span>
</button>
<button class="p-2 hover:bg-white/10 rounded-lg transition-all group relative">
<span class="material-symbols-outlined">settings</span>
<span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Settings</span>
</button>
</div>
<script>
        // Simple micro-interaction for hover states on data points
        document.querySelectorAll('circle').forEach(circle => {
            circle.addEventListener('mouseenter', () => {
                circle.setAttribute('r', '7');
                circle.style.cursor = 'pointer';
            });
            circle.addEventListener('mouseleave', () => {
                circle.setAttribute('r', '4');
            });
        });
    </script>
`
  },
  "dashboard/healthcare": {
    bodyClass: "bg-background text-on-background font-body-md min-h-screen",
    html: `
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 overflow-y-auto flex flex-col border-r border-outline-variant bg-surface-container-lowest shadow-sm z-50">
<div class="p-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container">data_exploration</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Auralis AI</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant">Enterprise Admin</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 py-4 space-y-2">
<a class="flex items-center gap-3 px-4 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl" href="#">
<span class="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a class="flex items-center gap-3 px-4 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl" href="#">
<span class="material-symbols-outlined">analytics</span> Analytics
            </a>
<a class="flex items-center gap-3 px-4 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl" href="#">
<span class="material-symbols-outlined">group</span> Team Management
            </a>
<a class="flex items-center gap-3 px-4 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl" href="#">
<span class="material-symbols-outlined">payments</span> Billing &amp; Usage
            </a>
<a class="flex items-center gap-3 px-4 py-3 font-label-md text-label-md text-primary font-bold border-r-4 border-primary bg-primary-container/10 rounded-xl transition-transform active:scale-95" href="#">
<span class="material-symbols-outlined">help</span> Help Support
            </a>
<a class="flex items-center gap-3 px-4 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl" href="#">
<span class="material-symbols-outlined">settings</span> System Settings
            </a>
</nav>
<div class="p-4 mt-auto">
<button class="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity">
                Upgrade Plan
            </button>
<button class="w-full mt-4 flex items-center justify-center gap-2 py-3 text-on-surface-variant hover:text-error transition-colors font-label-md text-label-md">
<span class="material-symbols-outlined">logout</span> Log Out
            </button>
</div>
</aside>
<!-- Main Workspace -->
<main class="pl-64 h-screen flex flex-col overflow-hidden">
<!-- TopNavBar -->
<header class="sticky top-0 z-40 w-full flex justify-between items-center px-margin-desktop py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div class="flex items-center gap-8">
<h2 class="font-headline-sm text-headline-sm font-extrabold text-primary">Auralis Support</h2>
<nav class="hidden md:flex gap-6">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Docs</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">API</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Status</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="relative w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary-container/30 text-body-md font-body-md" placeholder="Search tickets..." type="text"/>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">help_outline</span>
</button>
<div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a corporate administrator, wearing a smart charcoal suit, captured in a brightly lit modern office environment with soft bokeh background. The lighting is crisp and energetic, reflecting a high-performance tech ecosystem. Professional, confident, and clean aesthetic with a focus on enterprise reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf6r0_G75Jz08RaaI7UcxvmUecHqgnx65jNVUghl3c4W6k9ZorrMudEdRlSXDwZTuTNwqyWrPOCMtiJnDLOZGMf8o1DFIuAknCFCD23fSXmnuXvkJzMpXkVy0xd1b2Unw8kXICuKpcS4bZAVAQtLTJVqPxrPshXuuObZTpMUf9R9wl7PJE4IJx-6NVcFDRopOuvmB0g8K4GH0XJ8R1zUCHkC_uKxU6cLHgkHodxCpdqw1jBysvroGF"/>
</div>
</div>
</div>
</header>
<!-- Inbox Three-Pane Layout -->
<div class="flex-1 flex overflow-hidden">
<!-- Pane 1: Ticket List -->
<section class="w-80 border-r border-outline-variant bg-surface-container-low flex flex-col">
<div class="p-4 border-b border-outline-variant">
<div class="flex gap-2 p-1 bg-surface-container-high rounded-lg mb-4">
<button class="flex-1 py-1.5 text-label-sm font-label-sm bg-surface-container-lowest shadow-sm rounded-md text-primary">Open</button>
<button class="flex-1 py-1.5 text-label-sm font-label-sm text-on-surface-variant hover:bg-surface-container-lowest/50 rounded-md transition-colors">Pending</button>
<button class="flex-1 py-1.5 text-label-sm font-label-sm text-on-surface-variant hover:bg-surface-container-lowest/50 rounded-md transition-colors">Resolved</button>
</div>
</div>
<div class="flex-1 overflow-y-auto custom-scrollbar">
<!-- Ticket Items -->
<div class="p-4 border-b border-outline-variant bg-primary-container/5 hover:bg-primary-container/10 cursor-pointer border-l-4 border-primary transition-colors">
<div class="flex justify-between items-start mb-1">
<span class="text-[10px] uppercase font-bold tracking-wider text-primary">API Integration</span>
<span class="text-label-sm font-label-sm text-on-surface-variant">14:20</span>
</div>
<h4 class="font-label-md text-label-md text-on-surface mb-1 truncate">Endpoint Timeout Issue</h4>
<p class="text-label-sm font-label-sm text-on-surface-variant line-clamp-2">"We are experiencing consistent 504 Gateway Timeouts when calling the /analyze endpoint..."</p>
</div>
<div class="p-4 border-b border-outline-variant hover:bg-surface-container-high cursor-pointer transition-colors">
<div class="flex justify-between items-start mb-1">
<span class="text-[10px] uppercase font-bold tracking-wider text-tertiary">Billing</span>
<span class="text-label-sm font-label-sm text-on-surface-variant">11:05</span>
</div>
<h4 class="font-label-md text-label-md text-on-surface mb-1 truncate">Seat Upgrade Request</h4>
<p class="text-label-sm font-label-sm text-on-surface-variant line-clamp-2">"I need to add 50 more seats to our enterprise plan by EOD tomorrow."</p>
</div>
<div class="p-4 border-b border-outline-variant hover:bg-surface-container-high cursor-pointer transition-colors">
<div class="flex justify-between items-start mb-1">
<span class="text-[10px] uppercase font-bold tracking-wider text-secondary">General</span>
<span class="text-label-sm font-label-sm text-on-surface-variant">Yesterday</span>
</div>
<h4 class="font-label-md text-label-md text-on-surface mb-1 truncate">Onboarding Workflow</h4>
<p class="text-label-sm font-label-sm text-on-surface-variant line-clamp-2">"Can you provide a more detailed guide on setting up the custom AI weights?"</p>
</div>
</div>
</section>
<!-- Pane 2: Conversation Panel -->
<section class="flex-1 flex flex-col bg-surface-container-lowest">
<!-- Chat Header -->
<div class="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
<div>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface">Endpoint Timeout Issue</h3>
<p class="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            Live Support Session • Ticket #AR-8821
                        </p>
</div>
<div class="flex gap-2">
<button class="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">archive</span>
</button>
<button class="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
</div>
<!-- Chat History -->
<div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
<!-- Date Separator -->
<div class="flex justify-center">
<span class="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Today</span>
</div>
<!-- User Message -->
<div class="flex items-end gap-3 max-w-[80%]">
<div class="w-8 h-8 rounded-full bg-surface-variant flex-shrink-0">
<img class="w-full h-full rounded-full object-cover" data-alt="A portrait of a male tech lead with glasses, featuring high-contrast lighting that emphasizes a focused, professional expression. The background is a sleek, dark office setting with subtle cyan backlighting. The aesthetic is modern, crisp, and aligns with high-end corporate AI dashboard standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4xymAcvEsaSjFtEvroSaXfMr4Ja9LinXoJBlRyIyaRQdmi92tn_FWsK8LMslB6AwHXXE9cv_CMlO_glzmy047eITBYH2_o_bfnPbd_IZeDRKKxcmTbLSV5dBQK1umubpi9tiGN5VfHzU3uestrdJefWTf2bA38Q3yevNYHrLuKXF300NHFrNboT15qksNsQMhg02buiuLVavzLCK_aHBYmWe9ReV4LVVpoHaC8ixEZ-Fzen54xDrH"/>
</div>
<div class="user-bubble p-4 text-body-md font-body-md shadow-sm">
                            Hello Auralis Support, our team is seeing significant latency and occasional 504 errors on the enterprise analysis endpoint. Can you check if there are ongoing service disruptions?
                        </div>
</div>
<!-- Agent Message -->
<div class="flex items-end gap-3 flex-row-reverse max-w-[80%] ml-auto">
<div class="w-8 h-8 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container text-sm">support_agent</span>
</div>
<div class="agent-bubble p-4 text-body-md font-body-md shadow-sm glow-cyan">
                            Hi there! I'm checking the infrastructure logs right now. I do see a spike in concurrent requests from your API key range. Give me a moment to verify the throughput limits on your current cluster.
                        </div>
</div>
<!-- User Message -->
<div class="flex items-end gap-3 max-w-[80%]">
<div class="w-8 h-8 rounded-full bg-surface-variant flex-shrink-0">
<img class="w-full h-full rounded-full object-cover" data-alt="A portrait of a male tech lead with glasses, featuring high-contrast lighting that emphasizes a focused, professional expression. The background is a sleek, dark office setting with subtle cyan backlighting. The aesthetic is modern, crisp, and aligns with high-end corporate AI dashboard standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBbfldBUN9qYu8L07uj2aBfz2LLEDqduME9QsHm0RTe4-elc3sVYHFSiB5IEuoQDqjd8BlHpSVuPFzlIP9V4cwHBecqBB9vt365DLS9rSlLGeZiIqqDhIz8eYx1EDFWZeFJb4yUO-11vW6XflyaSxRdrPQDw-WhPcRanutMMz1HqcAfxyYLLhiGFmC2a4an3DSK929tdehvsq9okMH5CklVaLIBU0ioTYm7IolAlhYzM6plHg3Eqnq"/>
</div>
<div class="user-bubble p-4 text-body-md font-body-md shadow-sm">
                            Thanks. We did ramp up our batch processing today for a quarterly report. If it's a rate limit, please let us know how we can temporarily increase it.
                        </div>
</div>
</div>
<!-- AI Composer Area -->
<div class="p-6 border-t border-outline-variant bg-surface-container-lowest">
<!-- AI Suggestion Box -->
<div class="mb-4 p-4 bg-primary-container/10 border border-primary-container rounded-xl top-signal relative">
<div class="flex justify-between items-center mb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
<span class="text-label-sm font-label-sm text-primary uppercase tracking-wider">Suggested by Auralis</span>
</div>
<button class="bg-primary text-on-primary px-3 py-1 rounded-lg text-label-sm font-label-sm hover:opacity-90 transition-opacity">Apply</button>
</div>
<p class="text-body-md font-body-md text-on-surface-variant italic">
                            "I've identified that your cluster is reaching its peak IOPS. I can temporarily enable 'Burst Mode' for your account to handle the batch processing. Shall I proceed with this adjustment?"
                        </p>
</div>
<!-- Input Box -->
<div class="relative bg-surface-container rounded-2xl p-4 border border-outline-variant focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/20 transition-all">
<textarea class="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md resize-none h-24 placeholder:text-outline" placeholder="Type your message..."></textarea>
<div class="flex justify-between items-center mt-2">
<div class="flex gap-2">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">attach_file</span></button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">sentiment_satisfied</span></button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">image</span></button>
</div>
<button class="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95">
                                Send <span class="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
</section>
<!-- Pane 3: Customer Details -->
<section class="w-72 border-l border-outline-variant bg-surface-container-low p-6 overflow-y-auto custom-scrollbar">
<div class="flex flex-col items-center mb-8">
<div class="w-20 h-20 rounded-full bg-surface-container-highest border-2 border-primary-container p-1 mb-4">
<img class="w-full h-full rounded-full object-cover" data-alt="A portrait of a male tech lead with glasses, featuring high-contrast lighting that emphasizes a focused, professional expression. The background is a sleek, dark office setting with subtle cyan backlighting. The aesthetic is modern, crisp, and aligns with high-end corporate AI dashboard standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD06_p02hx-z30ZVu4OHuhR8GipXtfSWljqlGgVC6l9SIWMGhHNQRIduCMgab3mCDXY0hPaUL4Mh0EUyyh_XTHXGB1--II86CtSIi2ni3VcxgZxfCMt8QSOqSGYiBKoN8FnZ8nO78_OaQO1AKlJgQRI1T_UmNOvxl0wC2FA9rExirnjmYKDgWk4U7EQ2BjB7bjQOdYMYLiL9uwQbYpB-JcnqQFYxv3oIPGlqFOO3AJOGNpL0fVI8Rex"/>
</div>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface">Alex Rivera</h3>
<p class="text-label-sm font-label-sm text-on-surface-variant">CTO, NexaCorp</p>
<div class="mt-4 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm">Enterprise Plan</div>
</div>
<div class="space-y-6">
<div>
<h4 class="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-3">Customer Info</h4>
<div class="space-y-3">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-base">mail</span>
<span class="text-label-md font-label-md text-on-surface">alex@nexacorp.io</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-base">location_on</span>
<span class="text-label-md font-label-md text-on-surface">San Francisco, CA</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant text-base">schedule</span>
<span class="text-label-md font-label-md text-on-surface">14:45 local time</span>
</div>
</div>
</div>
<div class="pt-6 border-t border-outline-variant">
<h4 class="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-3">Recent Activity</h4>
<ul class="space-y-4">
<li class="flex gap-3">
<div class="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
<div>
<p class="text-label-md font-label-md text-on-surface">API Limit Warning</p>
<p class="text-[11px] text-on-surface-variant">2 hours ago</p>
</div>
</li>
<li class="flex gap-3">
<div class="w-2 h-2 rounded-full bg-outline mt-1.5 flex-shrink-0"></div>
<div>
<p class="text-label-md font-label-md text-on-surface">Dashboard Login</p>
<p class="text-[11px] text-on-surface-variant">4 hours ago</p>
</div>
</li>
<li class="flex gap-3">
<div class="w-2 h-2 rounded-full bg-outline mt-1.5 flex-shrink-0"></div>
<div>
<p class="text-label-md font-label-md text-on-surface">Invoice Paid</p>
<p class="text-[11px] text-on-surface-variant">2 days ago</p>
</div>
</li>
</ul>
</div>
<div class="pt-6 border-t border-outline-variant">
<button class="w-full py-2 bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-xl hover:bg-outline-variant transition-colors flex items-center justify-center gap-2">
                            View Full Profile <span class="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
</section>
</div>
</main>
<!-- Micro-interaction Scripts -->
<script>
        // Example interaction for applying AI suggestion
        document.querySelector('.bg-primary.text-on-primary.px-3.py-1').addEventListener('click', function() {
            const suggestion = document.querySelector('.italic').innerText;
            const textarea = document.querySelector('textarea');
            textarea.value = suggestion.replace(/"/g, '');
            textarea.focus();
            
            // Subtle feedback
            this.innerText = 'Applied!';
            this.classList.remove('bg-primary');
            this.classList.add('bg-secondary');
            setTimeout(() => {
                this.innerText = 'Apply';
                this.classList.add('bg-primary');
                this.classList.remove('bg-secondary');
            }, 2000);
        });

        // Tab switching logic
        const filterButtons = document.querySelectorAll('.bg-surface-container-high button');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-surface-container-lowest', 'shadow-sm', 'text-primary');
                    b.classList.add('text-on-surface-variant');
                });
                btn.classList.add('bg-surface-container-lowest', 'shadow-sm', 'text-primary');
                btn.classList.remove('text-on-surface-variant');
            });
        });
    </script>
`
  },
  "help-desk/hd-tickets": {
    bodyClass: "bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- Header / TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-margin-desktop py-4">
<div class="flex items-center gap-stack-md">
<div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" data-icon="waves">waves</span>
</div>
<h1 class="font-headline-md text-headline-md font-extrabold text-on-surface">Auralis AI</h1>
</div>
<nav class="hidden md:flex items-center gap-stack-lg">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Agency</a>
</nav>
<div class="flex items-center gap-stack-md">
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors" data-icon="search">search</button>
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors" data-icon="notifications">notifications</button>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-95 transition-transform">Get Started</button>
</div>
</div>
</header>
<!-- Main Content Layout -->
<main class="pt-24 pb-12 min-h-screen">
<div class="max-w-[1440px] mx-auto px-margin-desktop h-[calc(100vh-140px)] flex gap-gutter">
<!-- Left Column: Ticket Queue -->
<section class="w-1/4 flex flex-col bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
<div class="p-stack-md border-b border-outline-variant bg-surface-container-low">
<div class="flex items-center justify-between mb-4">
<h2 class="font-headline-md text-headline-md text-on-surface">Inbox</h2>
<button class="material-symbols-outlined text-primary" data-icon="add_circle">add_circle</button>
</div>
<div class="flex gap-2 p-1 bg-surface-container-high rounded-lg">
<button class="flex-1 py-1.5 text-label-sm font-label-sm rounded-md bg-surface-container-lowest text-primary shadow-sm">All</button>
<button class="flex-1 py-1.5 text-label-sm font-label-sm rounded-md text-on-surface-variant hover:bg-surface-container-highest transition-colors">My Tickets</button>
<button class="flex-1 py-1.5 text-label-sm font-label-sm rounded-md text-on-surface-variant hover:bg-surface-container-highest transition-colors">Unassigned</button>
</div>
</div>
<div class="flex-1 overflow-y-auto custom-scrollbar p-stack-sm space-y-stack-sm">
<!-- Ticket Card 1 -->
<div class="ticket-card p-4 bg-surface rounded-lg border border-outline-variant cursor-pointer transition-all border-l-4 border-l-accent-rose">
<div class="flex justify-between items-start mb-1">
<span class="font-label-md text-label-md text-on-surface">Marcus Chen</span>
<span class="text-[10px] text-on-surface-variant font-medium">10m ago</span>
</div>
<p class="text-label-sm font-semibold text-on-surface-variant truncate">Urgent: API Authentication failing on staging</p>
<div class="flex gap-2 mt-3">
<span class="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-wider">High</span>
<span class="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-medium italic">#Tech</span>
</div>
</div>
<!-- Ticket Card 2 -->
<div class="ticket-card p-4 bg-primary/5 rounded-lg border-2 border-primary cursor-pointer transition-all relative">
<div class="absolute right-4 top-4 w-2 h-2 rounded-full bg-primary pulse-live"></div>
<div class="flex justify-between items-start mb-1">
<span class="font-label-md text-label-md text-on-surface">Sarah Jenkins</span>
<span class="text-[10px] text-on-surface-variant font-medium">24m ago</span>
</div>
<p class="text-label-sm font-semibold text-on-surface-variant truncate">Billing discrepancy on monthly invoice</p>
<div class="flex gap-2 mt-3">
<span class="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-wider">Medium</span>
<span class="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-medium italic">#Billing</span>
</div>
</div>
<!-- Ticket Card 3 -->
<div class="ticket-card p-4 bg-surface rounded-lg border border-outline-variant cursor-pointer transition-all">
<div class="flex justify-between items-start mb-1">
<span class="font-label-md text-label-md text-on-surface">Alex Rivera</span>
<span class="text-[10px] text-on-surface-variant font-medium">1h ago</span>
</div>
<p class="text-label-sm font-semibold text-on-surface-variant truncate">Feature Request: Dark mode for dashboard</p>
<div class="flex gap-2 mt-3">
<span class="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wider">Low</span>
<span class="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-medium italic">#Product</span>
</div>
</div>
<!-- Additional Placeholder Cards for UI balance -->
<div class="ticket-card p-4 bg-surface rounded-lg border border-outline-variant cursor-pointer opacity-60">
<div class="flex justify-between items-start mb-1">
<span class="font-label-md text-label-md">Elena Sokolov</span>
<span class="text-[10px]">3h ago</span>
</div>
<p class="text-label-sm truncate">Subscription cancellation help</p>
</div>
</div>
</section>
<!-- Center Column: Selected Ticket Preview -->
<section class="flex-1 flex flex-col bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
<div class="p-6 border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed-dim">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a woman with a friendly expression, set against a soft blurred office background with warm natural lighting and cool corporate tones, high-resolution photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr9HvjqhJQstoh7NJKAItz05yvJk6QMfo-HUhYgiU3aYEtHj0lKWz2lLxu4lceuKcWZ1Q7ZnLcrJVHbvyK6JXYeo82G_jmRfwvpbHdvlDXQvrVJqjbsVrWRjtXIxwzIm1Z8EKW6-zL-fwqyLEEfEgrictz6nb5ba5GtDoYqNG2u3uSDYTfEDyGwrwDO5RPuD9JLdlZPw_qiU8l-0BC8EUgYtFSJeNgOm0EAzPJ8lw_5pSCMC7e-Oh8"/>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Sarah Jenkins</h3>
<p class="text-label-sm text-on-surface-variant">sarah.j@enterprise-flow.io • Enterprise Plan</p>
</div>
</div>
<div class="flex items-center gap-stack-md">
<span class="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md border border-primary/20 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
                            Open
                        </span>
<button class="material-symbols-outlined p-2 hover:bg-surface-container-high rounded-full" data-icon="more_vert">more_vert</button>
</div>
</div>
<div class="flex-1 p-8 overflow-y-auto custom-scrollbar">
<div class="max-w-2xl mx-auto space-y-stack-lg">
<div class="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30">
<h4 class="font-headline-md text-headline-md mb-4 text-primary">Billing discrepancy on monthly invoice</h4>
<p class="text-body-lg text-on-surface-variant leading-relaxed">
                                Hi Support Team,<br/><br/>
                                I noticed that our last invoice (INV-2024-008) shows a charge for 15 additional seats, but we only added 3 new team members this month. Could you please look into this and adjust the balance for our next billing cycle? <br/><br/>
                                Appreciate the quick help as always!<br/><br/>
                                Best regards,<br/>
                                Sarah
                            </p>
<div class="mt-8 flex gap-4">
<div class="flex items-center gap-2 p-3 bg-surface rounded-xl border border-outline-variant cursor-pointer hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="description">description</span>
<div>
<p class="text-label-sm font-semibold">invoice_aug_24.pdf</p>
<p class="text-[10px] text-on-surface-variant">2.4 MB • PDF</p>
</div>
</div>
</div>
</div>
<div class="flex justify-center">
<div class="h-px bg-outline-variant w-full relative">
<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-container-lowest text-label-sm text-on-surface-variant font-medium">History</span>
</div>
</div>
<div class="flex gap-4">
<div class="w-8 h-8 rounded-full bg-accent-violet flex items-center justify-center text-white text-[10px] font-bold">AI</div>
<div class="flex-1 p-4 bg-surface-variant/20 rounded-xl border border-accent-violet/10">
<p class="text-label-sm font-semibold text-accent-violet mb-2">Auralis Intelligence Suggestion</p>
<p class="text-body-md text-on-surface-variant">I've verified the logs. The 15 seats represent a legacy plan transition that wasn't prorated correctly. You should apply a credit of $240.00 to their account.</p>
<div class="mt-4 flex gap-2">
<button class="px-3 py-1 bg-accent-violet text-white text-[10px] font-bold rounded-lg hover:brightness-110 transition-all">Apply Fix</button>
<button class="px-3 py-1 border border-accent-violet/30 text-accent-violet text-[10px] font-bold rounded-lg hover:bg-accent-violet/5">Edit Draft</button>
</div>
</div>
</div>
</div>
</div>
<div class="p-6 bg-surface border-t border-outline-variant">
<div class="relative">
<textarea class="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent resize-none min-h-[100px]" placeholder="Write a response..."></textarea>
<button class="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-xl hover:scale-105 transition-transform flex items-center justify-center">
<span class="material-symbols-outlined" data-icon="send">send</span>
</button>
</div>
<div class="flex gap-4 mt-3">
<button class="text-label-sm font-medium text-on-surface-variant flex items-center gap-1 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[18px]" data-icon="attach_file">attach_file</span>
                            Attach
                        </button>
<button class="text-label-sm font-medium text-on-surface-variant flex items-center gap-1 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[18px]" data-icon="bolt">bolt</span>
                            Macros
                        </button>
</div>
</div>
</section>
<!-- Right Sidebar: Stats & Filters -->
<section class="w-1/5 flex flex-col gap-gutter">
<!-- Team Availability -->
<div class="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm">
<h4 class="font-label-md text-label-md text-on-surface mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="group">group</span>
                        Team Status
                    </h4>
<div class="space-y-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="relative">
<div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-[10px]">JD</div>
<div class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-white"></div>
</div>
<span class="text-label-sm font-medium">Jordan (You)</span>
</div>
<span class="text-[10px] text-secondary font-bold">Online</span>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="relative">
<div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-[10px]">MT</div>
<div class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-white"></div>
</div>
<span class="text-label-sm font-medium">Maria T.</span>
</div>
<span class="text-[10px] text-secondary font-bold">Online</span>
</div>
<div class="flex items-center justify-between opacity-50">
<div class="flex items-center gap-3">
<div class="relative">
<div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-[10px]">SK</div>
<div class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-outline border-2 border-white"></div>
</div>
<span class="text-label-sm font-medium">Sam K.</span>
</div>
<span class="text-[10px] text-on-surface-variant font-bold">Offline</span>
</div>
</div>
</div>
<!-- Quick Filters / Tags -->
<div class="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm flex-1">
<h4 class="font-label-md text-label-md text-on-surface mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="sell">sell</span>
                        Quick Filters
                    </h4>
<div class="flex flex-wrap gap-2">
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all">Billing</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all">Technical</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all">Enterprise</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all">Feature Request</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all">API Help</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all">Security</button>
</div>
<div class="mt-8">
<h5 class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-4">Response Stats</h5>
<div class="space-y-4">
<div>
<div class="flex justify-between text-[10px] font-bold mb-1">
<span>Today's Resolved</span>
<span>12/15</span>
</div>
<div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary w-[80%] rounded-full"></div>
</div>
</div>
<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-3 bg-surface rounded-lg border border-outline-variant">
<p class="text-[10px] font-medium text-on-surface-variant">Avg Res.</p>
<p class="text-headline-md font-bold text-primary">14m</p>
</div>
<div class="p-3 bg-surface rounded-lg border border-outline-variant">
<p class="text-[10px] font-medium text-on-surface-variant">Satisfaction</p>
<p class="text-headline-md font-bold text-secondary">98%</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container w-full">
<div class="max-w-7xl mx-auto px-margin-desktop py-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
<div class="col-span-2">
<h3 class="font-headline-md text-headline-md font-bold text-on-surface mb-4">Auralis AI</h3>
<p class="text-body-md text-on-surface-variant opacity-80 max-w-xs">Building the future of autonomous intelligence for high-performance enterprise teams.</p>
</div>
<div class="flex flex-col gap-stack-sm">
<span class="font-label-md text-label-md text-primary font-bold">Product</span>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Changelog</a>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Documentation</a>
</div>
<div class="flex flex-col gap-stack-sm">
<span class="font-label-md text-label-md text-primary font-bold">Company</span>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">About Us</a>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Careers</a>
</div>
<div class="flex flex-col gap-stack-sm">
<span class="font-label-md text-label-md text-primary font-bold">Support</span>
<a class="text-label-sm text-on-surface-variant font-bold text-primary" href="#">Help Center</a>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Contact</a>
</div>
<div class="flex flex-col gap-stack-sm">
<span class="font-label-md text-label-md text-primary font-bold">Legal</span>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Privacy</a>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Terms</a>
</div>
</div>
<div class="mt-stack-lg pt-stack-md border-t border-outline-variant flex justify-between items-center">
<p class="text-label-sm text-on-surface-variant opacity-80">© 2024 Auralis AI. All rights reserved.</p>
<div class="flex gap-4">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="public">public</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="hub">hub</span>
</div>
</div>
</div>
</footer>
<script>
        // Simple interactivity for ticket selection
        const cards = document.querySelectorAll('.ticket-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => {
                    c.classList.remove('border-2', 'border-primary', 'bg-primary/5');
                    c.classList.add('border', 'border-outline-variant', 'bg-surface');
                    const pulse = c.querySelector('.pulse-live');
                    if(pulse) pulse.style.display = 'none';
                });
                card.classList.remove('border', 'border-outline-variant', 'bg-surface');
                card.classList.add('border-2', 'border-primary', 'bg-primary/5');
            });
        });
    </script>
`
  },
  "help-desk/ticket-details": {
    bodyClass: "bg-surface font-body-md text-on-surface overflow-hidden h-screen flex flex-col",
    html: `
<!-- Top Navigation Anchor -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-[1600px] mx-auto px-margin-desktop py-4">
<div class="flex items-center gap-gutter">
<span class="font-headline-md text-headline-md font-extrabold text-on-surface">Auralis AI</span>
<div class="hidden md:flex items-center gap-6">
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Features</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Pricing</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Agency</a>
</div>
</div>
<div class="flex items-center gap-stack-md">
<button class="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container rounded-full transition-colors">notifications</button>
<div class="h-8 w-[1px] bg-outline-variant mx-2"></div>
<button class="bg-primary px-6 py-2 rounded-full font-label-md text-on-primary hover:scale-95 transition-transform duration-150">Get Started</button>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="pt-[72px] flex flex-1 h-full overflow-hidden">
<!-- Left Column: Ticket Queue -->
<aside class="w-80 lg:w-96 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full">
<div class="p-stack-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h2 class="font-headline-md text-[18px]">Ticket Queue</h2>
<span class="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full text-label-sm">24 Active</span>
</div>
<div class="p-stack-md">
<div class="relative">
<input class="w-full bg-surface-container rounded-xl border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20 pl-10 text-body-md py-2 transition-all" placeholder="Search tickets..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
</div>
</div>
<div class="flex-1 overflow-y-auto">
<!-- Active Ticket -->
<div class="p-stack-md border-l-4 border-accent-rose bg-accent-rose/5 cursor-pointer hover:bg-accent-rose/10 transition-colors">
<div class="flex justify-between items-start mb-2">
<span class="text-label-sm font-bold text-accent-rose">#TK-2941</span>
<span class="text-label-sm text-on-surface-variant">2m ago</span>
</div>
<h3 class="font-headline-md text-[16px] mb-1 truncate">API Integration Failure in Production</h3>
<p class="text-body-md text-[14px] text-on-surface-variant line-clamp-2">The endpoint is returning 500 errors consistently for the /v1/analyze-voice request...</p>
<div class="mt-3 flex items-center gap-2">
<span class="bg-error-container text-on-error-container px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">High Priority</span>
<span class="text-label-sm text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">person</span> Julian V.</span>
</div>
</div>
<!-- Other Tickets -->
<div class="p-stack-md border-b border-outline-variant cursor-pointer hover:bg-surface-container transition-colors">
<div class="flex justify-between items-start mb-2">
<span class="text-label-sm font-bold text-on-surface-variant">#TK-2940</span>
<span class="text-label-sm text-on-surface-variant">15m ago</span>
</div>
<h3 class="font-headline-md text-[16px] mb-1 truncate">Billing mismatch on Pro Plan</h3>
<p class="text-body-md text-[14px] text-on-surface-variant line-clamp-2">I was charged $49.00 instead of the promotional $39.00 I was promised...</p>
<div class="mt-3 flex items-center gap-2">
<span class="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Medium</span>
<span class="text-label-sm text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">person</span> Sarah K.</span>
</div>
</div>
<div class="p-stack-md border-b border-outline-variant cursor-pointer hover:bg-surface-container transition-colors">
<div class="flex justify-between items-start mb-2">
<span class="text-label-sm font-bold text-on-surface-variant">#TK-2939</span>
<span class="text-label-sm text-on-surface-variant">42m ago</span>
</div>
<h3 class="font-headline-md text-[16px] mb-1 truncate">Voice synthesis lag on mobile</h3>
<p class="text-body-md text-[14px] text-on-surface-variant line-clamp-2">The synthesis is taking more than 5 seconds on iOS devices during peaks...</p>
<div class="mt-3 flex items-center gap-2">
<span class="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Low</span>
<span class="text-label-sm text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">person</span> Marcus L.</span>
</div>
</div>
</div>
</aside>
<!-- Center Panel: Timeline View -->
<section class="flex-1 bg-surface flex flex-col h-full relative overflow-hidden">
<header class="p-stack-md bg-surface border-b border-outline-variant flex justify-between items-center">
<div>
<h1 class="font-headline-lg text-[20px] text-on-surface">API Integration Failure in Production</h1>
<nav class="flex gap-4 mt-1">
<span class="text-label-sm text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">calendar_today</span> Oct 12, 10:45 AM</span>
<span class="text-label-sm text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">folder</span> API Support</span>
</nav>
</div>
<div class="flex items-center gap-3">
<button class="bg-surface border border-outline-variant px-4 py-2 rounded-lg font-label-md hover:bg-surface-container transition-colors">Close Ticket</button>
<button class="bg-primary px-4 py-2 rounded-lg font-label-md text-on-primary hover:opacity-90 transition-opacity">Escalate</button>
</div>
</header>
<div class="flex-1 overflow-y-auto p-stack-lg space-y-gutter relative">
<!-- Timeline Vertical Line -->
<div class="absolute left-[52px] top-stack-lg bottom-stack-lg w-0.5 bg-outline-variant/30"></div>
<!-- Event: Ticket Created -->
<div class="relative flex gap-gutter items-start group">
<div class="z-10 w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[20px] text-primary">add_circle</span>
</div>
<div class="flex-1 pt-1">
<div class="flex items-center gap-3 mb-1">
<span class="text-label-md font-bold">System Event</span>
<span class="text-label-sm text-on-surface-variant">10:45 AM</span>
</div>
<p class="text-body-md text-on-surface-variant">Ticket #TK-2941 created by <span class="text-primary font-medium">Julian V.</span> via Dashboard Web Interface.</p>
</div>
</div>
<!-- Event: Agent Assigned -->
<div class="relative flex gap-gutter items-start">
<div class="z-10 w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[20px] text-secondary">assignment_ind</span>
</div>
<div class="flex-1 pt-1">
<div class="flex items-center gap-3 mb-1">
<span class="text-label-md font-bold">System Event</span>
<span class="text-label-sm text-on-surface-variant">10:46 AM</span>
</div>
<p class="text-body-md text-on-surface-variant">Ticket automatically assigned to <span class="text-primary font-medium">Support Agent Alpha (AI Core)</span>.</p>
</div>
</div>
<!-- Event: Customer Message -->
<div class="relative flex gap-gutter items-start">
<div class="z-10 w-10 h-10 rounded-full bg-surface overflow-hidden border-2 border-accent-rose">
<img class="w-full h-full object-cover" data-alt="A professional studio portrait of a technology executive, Julian V., with soft warm lighting, clear high-contrast features, a modern tech-professional background, styled in a minimalist digital aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwmsptMBUBHiUc3s3uO34OG5ld7MWwwa6g4XEj728E18uA0Nas9c2Daa_6CD_EXeH_0Gslkf_WIDleCLRiDLIfWwMzPUm2xPCXPPGJOb3g83_-ruEeD2_4a9Kf4FO-M7mQFOYwk5XwgBJzz1je-Y7sx8Bp-BEnh313x6XwROjqarbfs7md_XYii9hInZ5k42hZxvpgzk2EsOkG6lRkn9ls2Cbh8P43rzvaKoq5JpFQ4NCKfxMojTHT"/>
</div>
<div class="flex-1 bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant shadow-sm max-w-2xl">
<div class="flex justify-between items-center mb-2">
<span class="text-label-md font-bold text-accent-rose">Julian V. (Customer)</span>
<span class="text-label-sm text-on-surface-variant">10:48 AM</span>
</div>
<p class="text-body-md">We are seeing 500 Internal Server Errors for about 40% of our voice processing requests. This started roughly 10 minutes ago. It's affecting our live broadcast system.</p>
</div>
</div>
<!-- Event: Internal Note -->
<div class="relative flex gap-gutter items-start">
<div class="z-10 w-10 h-10 rounded-full bg-yellow-100 border-2 border-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[20px] text-yellow-700">lock</span>
</div>
<div class="flex-1 bg-yellow-50 p-stack-md rounded-2xl border border-yellow-200 internal-note-shadow max-w-2xl">
<div class="flex justify-between items-center mb-2">
<span class="text-label-md font-bold text-yellow-800 flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">visibility_off</span> Internal Note
                            </span>
<span class="text-label-sm text-yellow-600">10:52 AM</span>
</div>
<p class="text-body-md text-yellow-900">Checked server logs for Cluster B-4. Seems like a memory leak in the synthesis engine. Notifying the DevOps team for a hotfix deployment.</p>
</div>
</div>
<!-- Event: Agent Message -->
<div class="relative flex gap-gutter items-start">
<div class="z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-surface">
<span class="material-symbols-outlined text-on-primary">support_agent</span>
</div>
<div class="flex-1 bg-primary/5 p-stack-md rounded-2xl border border-primary/20 shadow-sm max-w-2xl">
<div class="flex justify-between items-center mb-2">
<span class="text-label-md font-bold text-primary">Support Agent Alpha</span>
<span class="text-label-sm text-on-surface-variant">10:55 AM</span>
</div>
<p class="text-body-md">Hello Julian, we've identified the issue in Cluster B-4. Our engineering team is currently deploying a patch. You should see recovery within the next 5-10 minutes. Thank you for your patience.</p>
</div>
</div>
</div>
<!-- Footer: Reply Box -->
<footer class="p-stack-md bg-surface border-t border-outline-variant">
<div class="flex items-center gap-3 mb-2 px-2">
<button class="text-label-sm px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors">Reply to Customer</button>
<button class="text-label-sm px-3 py-1 rounded-full text-on-surface-variant hover:bg-yellow-100 transition-colors">Internal Note</button>
</div>
<div class="flex items-end gap-3 bg-surface-container-lowest border border-outline-variant p-3 rounded-2xl">
<textarea class="flex-1 border-none focus:ring-0 bg-transparent resize-none h-24 text-body-md" placeholder="Type your response here..."></textarea>
<div class="flex flex-col gap-2">
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">attach_file</button>
<button class="bg-primary text-on-primary p-2 rounded-lg hover:scale-105 transition-transform">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</footer>
</section>
<!-- Right Sidebar: CRM Summary -->
<aside class="w-80 lg:w-96 bg-surface-container-low border-l border-outline-variant flex flex-col h-full">
<div class="p-stack-md border-b border-outline-variant bg-surface-container-high flex justify-between items-center">
<h2 class="font-label-md uppercase tracking-wider text-on-surface-variant">Customer Profile</h2>
<button class="material-symbols-outlined text-on-surface-variant">more_horiz</button>
</div>
<div class="p-stack-lg flex flex-col items-center text-center">
<div class="relative mb-4">
<div class="w-24 h-24 rounded-full border-4 border-surface shadow-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A close-up professional headshot of an entrepreneur in his early 40s, Julian V., with friendly and confident expression, wearing a navy polo, with a clean office background blur, illuminated by soft studio lighting, high resolution and sharp detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbDBCZPQulViTj9lY6cNmiaqEhJFwcVbcjeJSqG9CYi1FzNKnJbRqHRx5Y0SG2ziLqFWTXtsTxuZoWB5iVBi6Jyei4IVKhI0eI4oPfnCPf5vMzQ0Gy4ZtSpPuAU9jfdzhQVOlpyW3WqnRNz8By_XLavU4eFNPzSvAeILHj9KctXkRCRi7S-kMwYngIra-ZRZzUbju6-UW-bkJjhbvzt3MJuzXTtZ2-wQDCvJte7LUcHOGJRa51bve-"/>
</div>
<div class="absolute -bottom-1 -right-1 bg-secondary w-6 h-6 rounded-full border-2 border-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[14px] text-white">verified</span>
</div>
</div>
<h3 class="font-headline-md text-[20px]">Julian Vance</h3>
<p class="text-on-surface-variant text-body-md mb-2">julian.vance@vortexcloud.io</p>
<div class="flex gap-2">
<span class="bg-accent-violet/10 text-accent-violet px-3 py-1 rounded-full text-label-sm font-bold border border-accent-violet/20">Pro Plan</span>
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">VIP Status</span>
</div>
</div>
<div class="px-stack-lg space-y-stack-lg">
<!-- SLA Timer -->
<div class="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant">
<div class="flex justify-between items-center mb-2">
<span class="text-label-sm text-on-surface-variant">SLA Response Goal</span>
<span class="material-symbols-outlined text-error pulse-red text-[20px]">timer</span>
</div>
<div class="text-[32px] font-bold font-display-lg text-on-surface flex items-baseline gap-1">
                        02:45 <span class="text-label-sm font-normal text-on-surface-variant">remaining</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-full mt-3 overflow-hidden">
<div class="bg-error w-3/4 h-full"></div>
</div>
</div>
<!-- Deal History -->
<div>
<h4 class="text-label-sm uppercase tracking-widest text-on-surface-variant mb-3">Revenue & Deals</h4>
<div class="grid grid-cols-2 gap-stack-md">
<div class="bg-surface-container-highest p-3 rounded-xl text-center">
<span class="text-label-sm block text-on-surface-variant">Total Value</span>
<span class="font-bold text-headline-md text-primary">$12,400</span>
</div>
<div class="bg-surface-container-highest p-3 rounded-xl text-center">
<span class="text-label-sm block text-on-surface-variant">Deals</span>
<span class="font-bold text-headline-md text-primary">08</span>
</div>
</div>
</div>
<!-- Activity Stats -->
<div>
<h4 class="text-label-sm uppercase tracking-widest text-on-surface-variant mb-3">Contextual Info</h4>
<ul class="space-y-3">
<li class="flex items-center justify-between">
<span class="text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">location_on</span> Region
                            </span>
<span class="font-medium">North America</span>
</li>
<li class="flex items-center justify-between">
<span class="text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">hub</span> Integration
                            </span>
<span class="font-medium">Python SDK v2.4</span>
</li>
<li class="flex items-center justify-between">
<span class="text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">history</span> Customer Since
                            </span>
<span class="font-medium">Jan 2023</span>
</li>
</ul>
</div>
<!-- Quick Actions -->
<div class="pt-stack-md">
<button class="w-full bg-accent-violet text-white py-3 rounded-xl font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined">analytics</span> View Full CRM Profile
                    </button>
</div>
</div>
</aside>
</main>
<!-- Micro-interaction Scripts -->
<script>
        // Simple mock for SLA timer decrement
        let time = 165; // 2:45 in seconds
        const timerElement = document.querySelector('.font-display-lg');
        
        setInterval(() => {
            if(time > 0) {
                time--;
                const mins = Math.floor(time / 60);
                const secs = time % 60;
                timerElement.innerHTML = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')} <span class="text-label-sm font-normal text-on-surface-variant">remaining</span>\`;
            }
        }, 1000);

        // Active state switching for queue
        const queueItems = document.querySelectorAll('aside .p-stack-md.cursor-pointer');
        queueItems.forEach(item => {
            item.addEventListener('click', () => {
                queueItems.forEach(i => {
                    i.classList.remove('border-l-4', 'border-accent-rose', 'bg-accent-rose/5');
                    i.classList.add('border-b', 'border-outline-variant');
                });
                item.classList.add('border-l-4', 'border-accent-rose', 'bg-accent-rose/5');
                item.classList.remove('border-b', 'border-outline-variant');
            });
        });
    </script>
`
  },
  "rtl": {
    bodyClass: "bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container",
    html: `
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
<div class="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
<div class="flex items-center gap-stack-md">
<span class="font-display-lg text-headline-md font-extrabold text-on-surface dark:text-on-background tracking-tighter">Auralis AI</span>
<span class="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 rounded-full font-bold tracking-widest uppercase">DevKit</span>
</div>
<div class="hidden md:flex items-center gap-stack-lg">
<a class="text-primary font-bold border-b-2 border-primary-fixed-dim pb-1 font-body-md text-body-md" href="#">Features</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Pricing</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Agency</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">About Us</a>
</div>
<div class="flex items-center gap-stack-md">
<button class="p-2 rounded-full hover:bg-surface-container-low transition-all" id="theme-toggle">
<span class="material-symbols-outlined text-primary">dark_mode</span>
</button>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md text-label-md hover:scale-95 transition-transform active:scale-90">
                    Get Started
                </button>
</div>
</div>
</nav>
<main class="pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Hero Header -->
<header class="mb-20 text-center max-w-3xl mx-auto">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 rounded-full mb-6 border border-secondary-container/30">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
<span class="text-secondary font-label-md text-label-md">Production Ready V2.0</span>
</div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">UI Foundation & Architecture</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Explore a comprehensive showcase of modern UI patterns, dark mode orchestration, and global RTL support—built for performance and accessibility.</p>
</header>
<!-- Section 1: RTL vs LTR Dual View -->
<section class="mb-24">
<div class="flex items-center justify-between mb-stack-lg">
<h2 class="font-headline-lg text-headline-lg">Global Bidirectional Support</h2>
<div class="flex p-1 bg-surface-container-high rounded-xl">
<button class="px-4 py-2 rounded-lg bg-surface-container-lowest shadow-sm text-primary font-label-md" id="toggle-ltr">LTR</button>
<button class="px-4 py-2 rounded-lg text-on-surface-variant font-label-md" id="toggle-rtl">RTL (Arabic/Hebrew)</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter" id="direction-container">
<!-- LTR Card -->
<div class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 flex flex-col gap-6" dir="ltr">
<div class="flex items-start gap-4">
<div class="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl">
<span class="material-symbols-outlined text-primary">language</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md">Left-to-Right Flow</h3>
<p class="text-on-surface-variant">Standard alignment for English, Spanish, and French interfaces.</p>
</div>
</div>
<div class="flex gap-2">
<button class="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md flex items-center gap-2">
                            Next Step <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<button class="border border-outline px-4 py-2 rounded-lg font-label-md">Cancel</button>
</div>
</div>
<!-- RTL Card -->
<div class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 flex flex-col gap-6" dir="rtl">
<div class="flex items-start gap-4">
<div class="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-xl">
<span class="material-symbols-outlined text-secondary">translate</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md">دعم الكتابة من اليمين</h3>
<p class="text-on-surface-variant">دعم كامل للغة العربية واللغات التي تبدأ من اليمين إلى اليسار.</p>
</div>
</div>
<div class="flex gap-2">
<button class="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md flex items-center gap-2">
                            الخطوة التالية <span class="material-symbols-outlined text-sm rtl-flip">arrow_forward</span>
</button>
<button class="border border-outline px-4 py-2 rounded-lg font-label-md">إلغاء</button>
</div>
</div>
</div>
</section>
<!-- Section 2: Theme Engine (Bento Grid) -->
<section class="mb-24">
<h2 class="font-headline-lg text-headline-lg mb-stack-lg">Theme Engine Component Previews</h2>
<div class="bento-grid">
<!-- Buttons & State -->
<div class="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-2xl p-stack-lg border border-outline-variant shadow-sm relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
<h3 class="font-headline-md text-headline-md mb-6">Interactive States</h3>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<button class="bg-primary text-on-primary px-6 py-4 rounded-xl font-label-md hover:opacity-90 transition-all">Primary</button>
<button class="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl font-label-md">Secondary</button>
<button class="border-1.5 border-on-surface text-on-surface px-6 py-4 rounded-xl font-label-md hover:bg-surface-container-low transition-colors">Outline</button>
<button class="text-primary px-6 py-4 rounded-xl font-label-md hover:bg-primary-container/10">Ghost</button>
</div>
<div class="mt-8 flex flex-wrap gap-3">
<span class="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-label-md">Processing</span>
<span class="px-4 py-1.5 bg-tertiary/10 text-tertiary rounded-full font-label-md">Urgent</span>
<span class="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-label-md">Success</span>
</div>
</div>
<!-- Input Showcase -->
<div class="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-stack-lg border border-outline-variant shadow-sm">
<h3 class="font-headline-md text-headline-md mb-6">Themed Inputs</h3>
<div class="space-y-4">
<div class="space-y-1">
<label class="font-label-sm text-on-surface-variant">Email Address</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-primary-container focus:border-primary transition-all outline-none" placeholder="name@auralis.ai" type="text"/>
</div>
<div class="space-y-1">
<label class="font-label-sm text-on-surface-variant">Search Workspace</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface outline-none" type="text"/>
</div>
</div>
</div>
</div>
<!-- Modal Preview (Mockup) -->
<div class="col-span-12 bg-surface-container rounded-2xl p-12 border border-outline-variant overflow-hidden flex items-center justify-center">
<div class="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl p-stack-lg border border-outline-variant transform hover:scale-105 transition-transform duration-500">
<div class="flex justify-between items-start mb-4">
<h4 class="font-headline-md text-headline-md">Confirm Action</h4>
<span class="material-symbols-outlined text-outline cursor-pointer">close</span>
</div>
<p class="text-on-surface-variant mb-8">Are you sure you want to initialize the production deploy? This action cannot be undone.</p>
<div class="flex justify-end gap-3">
<button class="px-5 py-2.5 rounded-lg text-on-surface font-label-md">Discard</button>
<button class="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md shadow-lg shadow-primary/20">Confirm Deploy</button>
</div>
</div>
</div>
</div>
</section>
<!-- Section 3: Data Visualizations (Recharts Style) -->
<section class="mb-24">
<div class="mb-stack-lg">
<h2 class="font-headline-lg text-headline-lg">Performance Metrics</h2>
<p class="text-on-surface-variant">SVG-based data visualizations optimized for light and dark environments.</p>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-stack-lg h-96 relative flex items-end justify-between px-12 group">
<!-- Simplified Mock Chart using Tailwind -->
<div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-12 bg-primary/20 rounded-t-lg transition-all duration-700 h-[30%] group-hover:h-[45%]"></div>
<span class="font-label-sm text-on-surface-variant">Mon</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-12 bg-primary/40 rounded-t-lg transition-all duration-700 h-[60%] group-hover:h-[75%]"></div>
<span class="font-label-sm text-on-surface-variant">Tue</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-12 bg-primary rounded-t-lg transition-all duration-700 h-[45%] group-hover:h-[60%] shadow-lg shadow-primary/10"></div>
<span class="font-label-sm text-on-surface-variant">Wed</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-12 bg-primary-fixed-dim rounded-t-lg transition-all duration-700 h-[85%] group-hover:h-[95%]"></div>
<span class="font-label-sm text-on-surface-variant">Thu</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-12 bg-secondary rounded-t-lg transition-all duration-700 h-[40%] group-hover:h-[50%]"></div>
<span class="font-label-sm text-on-surface-variant">Fri</span>
</div>
<!-- Grid Lines -->
<div class="absolute inset-x-0 bottom-12 border-b border-outline-variant/30 pointer-events-none"></div>
<div class="absolute inset-x-0 bottom-32 border-b border-outline-variant/30 pointer-events-none"></div>
<div class="absolute inset-x-0 bottom-52 border-b border-outline-variant/30 pointer-events-none"></div>
<!-- Tooltip Mockup -->
<div class="absolute top-10 right-10 bg-on-surface text-surface px-4 py-2 rounded-lg text-sm flex items-center gap-2 animate-bounce">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                    Peak Usage: +142%
                </div>
</div>
</section>
<!-- Section 4: Advanced Inputs -->
<section class="mb-24">
<h2 class="font-headline-lg text-headline-lg mb-stack-lg">Advanced Inputs & Forms</h2>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- File Uploader -->
<div class="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
<h4 class="font-headline-md text-headline-md mb-4">File Uploader</h4>
<div class="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors mb-2">cloud_upload</span>
<p class="font-body-md text-on-surface mb-1">Click or drag to upload</p>
<p class="text-xs text-on-surface-variant">SVG, PNG, JPG (Max 5MB)</p>
</div>
</div>
<!-- Date Picker UI -->
<div class="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
<h4 class="font-headline-md text-headline-md mb-4">Date & Time</h4>
<div class="space-y-4">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
<input class="w-full pl-10 pr-4 py-2.5 border border-outline-variant rounded-xl bg-surface" type="date"/>
</div>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">schedule</span>
<input class="w-full pl-10 pr-4 py-2.5 border border-outline-variant rounded-xl bg-surface" type="time"/>
</div>
</div>
</div>
<!-- Rich Text Mockup -->
<div class="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
<h4 class="font-headline-md text-headline-md mb-4">Rich Text Editor</h4>
<div class="border border-outline-variant rounded-xl overflow-hidden">
<div class="bg-surface-container p-2 border-b border-outline-variant flex gap-2">
<button class="p-1.5 hover:bg-surface-container-high rounded"><span class="material-symbols-outlined text-sm">format_bold</span></button>
<button class="p-1.5 hover:bg-surface-container-high rounded"><span class="material-symbols-outlined text-sm">format_italic</span></button>
<button class="p-1.5 hover:bg-surface-container-high rounded"><span class="material-symbols-outlined text-sm">format_list_bulleted</span></button>
<button class="p-1.5 hover:bg-surface-container-high rounded"><span class="material-symbols-outlined text-sm">link</span></button>
</div>
<div class="p-4 min-h-[100px] text-on-surface-variant font-body-md bg-surface">
                            Start writing your documentation...
                        </div>
</div>
</div>
</div>
</section>
<!-- Section 5: "No jQuery" Clean JS Showcase -->
<section class="bg-on-surface text-surface rounded-3xl p-stack-lg md:p-16 mb-24 overflow-hidden relative">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary blur-[120px] opacity-20"></div>
<div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 class="font-headline-xl text-headline-xl mb-6">Lean Framework, <br/>Zero Dependencies.</h2>
<p class="text-surface-variant/80 text-body-lg mb-8">Our core components are written in native Vanilla JavaScript and CSS. No jQuery, no bloated libraries. Experience instant interaction and sub-millisecond response times.</p>
<div class="flex flex-col gap-4">
<div class="flex items-center gap-4">
<div class="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">check</span>
</div>
<span class="font-label-md">Direct DOM Manipulation</span>
</div>
<div class="flex items-center gap-4">
<div class="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">check</span>
</div>
<span class="font-label-md">CSS Custom Properties (Variables)</span>
</div>
</div>
</div>
<div class="bg-surface-container-highest/10 p-4 rounded-2xl font-mono text-sm backdrop-blur-md border border-surface/10">
<div class="flex items-center gap-2 mb-4">
<div class="w-3 h-3 rounded-full bg-error"></div>
<div class="w-3 h-3 rounded-full bg-secondary"></div>
<div class="w-3 h-3 rounded-full bg-primary-container"></div>
</div>
<pre class="text-secondary-fixed-dim"><code>// Production-ready event handler
document.querySelectorAll('[data-toggle]')
  .forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.toggle;
      document.querySelector(target).classList.toggle('active');
      console.log('⚡ UI Updated instantly');
    });
  });</code></pre>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant w-full py-stack-lg">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2">
<span class="font-display-lg text-headline-sm font-bold text-on-surface">Auralis AI</span>
<p class="text-on-surface-variant font-body-sm mt-4">Precision Intelligence for modern ecosystems.</p>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Resources</span>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/features/showcase</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/components</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/documentation</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Layouts</span>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/rtl</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/dark-mode</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/forms</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Apps</span>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/calendar</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/gallery</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">/maps</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-label-md text-on-surface">Legal</span>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-outline-variant/30 text-on-surface-variant font-body-sm">
            © 2024 Auralis AI. All rights reserved. Precision Intelligence.
        </div>
</footer>
<script>
        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        themeBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            themeBtn.querySelector('.material-symbols-outlined').textContent = isDark ? 'light_mode' : 'dark_mode';
        });

        // Direction Toggle Logic
        const toggleLtr = document.getElementById('toggle-ltr');
        const toggleRtl = document.getElementById('toggle-rtl');
        const dirContainer = document.getElementById('direction-container');

        toggleRtl.addEventListener('click', () => {
            toggleRtl.classList.add('bg-surface-container-lowest', 'shadow-sm', 'text-primary');
            toggleRtl.classList.remove('text-on-surface-variant');
            toggleLtr.classList.remove('bg-surface-container-lowest', 'shadow-sm', 'text-primary');
            toggleLtr.classList.add('text-on-surface-variant');
            // This is just a demo of state change
        });

        toggleLtr.addEventListener('click', () => {
            toggleLtr.classList.add('bg-surface-container-lowest', 'shadow-sm', 'text-primary');
            toggleLtr.classList.remove('text-on-surface-variant');
            toggleRtl.classList.remove('bg-surface-container-lowest', 'shadow-sm', 'text-primary');
            toggleRtl.classList.add('text-on-surface-variant');
        });

        // Micro-interactions for components
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = '';
            });
        });
    </script>
`
  },
  "dashboard/hr-mgmt": {
    bodyClass: "font-body-md text-on-surface",
    html: `
<!-- SideNavBar (Authority: JSON) -->
<aside class="flex flex-col h-full border-r border-outline-variant dark:border-outline h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-surface-container-lowest dark:bg-inverse-surface shadow-sm custom-scrollbar z-50">
<div class="px-6 py-8">
<div class="flex items-center gap-3 mb-10">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Auralis AI</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Enterprise Admin</p>
</div>
</div>
<nav class="space-y-1">
<!-- Dashboard -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant/20 transition-colors Active: scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<!-- Analytics -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant/20 transition-colors Active: scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined">analytics</span>
<span>Analytics</span>
</a>
<!-- Team Management (Active) -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold border-r-4 border-primary dark:border-primary-fixed-dim bg-primary-container/10 transition-colors Active: scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
<span>Team Management</span>
</a>
<!-- Billing & Usage -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant/20 transition-colors Active: scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined">payments</span>
<span>Billing &amp; Usage</span>
</a>
<!-- System Settings -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant/20 transition-colors Active: scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined">settings</span>
<span>System Settings</span>
</a>
<!-- Help Support -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-on-surface-variant/20 transition-colors Active: scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined">help</span>
<span>Help Support</span>
</a>
</nav>
</div>
<div class="mt-auto px-6 py-8 border-t border-outline-variant">
<button class="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 rounded-xl mb-6 hover:opacity-90 transition-opacity">
                Upgrade Plan
            </button>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-error-container/20 hover:text-error transition-colors" href="#">
<span class="material-symbols-outlined">logout</span>
<span>Log Out</span>
</a>
</div>
</aside>
<!-- TopNavBar (Authority: JSON) -->
<header class="flex justify-between items-center w-full px-margin-desktop py-4 pl-72 docked full-width top-0 sticky z-40 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md shadow-sm">
<div class="flex items-center gap-8">
<h2 class="font-headline-sm text-headline-sm font-extrabold text-primary dark:text-primary-fixed-dim">Team</h2>
<nav class="hidden md:flex items-center gap-6">
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary dark:border-primary-fixed-dim pb-1" href="#">Docs</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">API</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Status</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden lg:block">
<input class="bg-surface-container-low border border-outline-variant rounded-full px-4 py-2 pl-10 text-body-md w-64 focus:outline-none focus:border-primary transition-all" placeholder="Search team members..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
</div>
<div class="flex items-center gap-2">
<button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined">help_outline</span>
</button>
</div>
<div class="h-8 w-[1px] bg-outline-variant mx-2"></div>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="Professional headshot of a female technology executive with sharp focus, wearing a modern dark suit, set against a soft bokeh background of a high-tech office. The lighting is crisp and cool, emphasizing a professional and intelligent aura, aligned with a premium enterprise design aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmjpRnZ9qgOrVzppD8wotJfgFA_wB0aemB0Wwyu3425euFhC6kiNVa0fbVir1sUsaGTV28YervqoaNPj7t30rYeehKvhlbruGsPV8WaMIEOO_ybv7En7WAkDjc52hRbHDUjEcQtXHVAHHBOKnMLoqE2Fnwjm5OWytww9w3PcdK1gj9eHUMmlnxDy66RMkGS5Q1MWOo-nlSVrsQZ7hRbr9XAbtWZNm03YrtcADA8gV0dCkxQ6VfE3u"/>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="ml-64 p-margin-desktop min-h-screen">
<!-- Dashboard Header -->
<div class="flex justify-between items-end mb-stack-lg">
<div>
<nav class="flex gap-2 text-label-sm text-on-surface-variant mb-2">
<span>Admin</span>
<span>/</span>
<span class="text-primary font-bold">Team Management</span>
</nav>
<h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">Team Management</h1>
<p class="text-body-lg text-on-surface-variant max-w-2xl mt-2">Manage your organizational hierarchy, invite new collaborators, and define granular access controls for Auralis AI resources.</p>
</div>
<button class="bg-primary text-white font-label-md text-label-md px-6 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all" onclick="openInviteModal()">
<span class="material-symbols-outlined">person_add</span>
                Invite User
            </button>
</div>
<div class="grid grid-cols-12 gap-gutter">
<!-- User Table Section -->
<div class="col-span-12 lg:col-span-8 space-y-stack-md">
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<!-- Filters & Search Mobile -->
<div class="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
<div class="flex gap-4">
<button class="flex items-center gap-2 px-3 py-1.5 bg-white border border-outline-variant rounded-lg text-label-sm hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-sm">filter_list</span>
                                Filter
                            </button>
<button class="flex items-center gap-2 px-3 py-1.5 bg-white border border-outline-variant rounded-lg text-label-sm hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-sm">sort</span>
                                Sort
                            </button>
</div>
<span class="text-label-sm text-on-surface-variant">Showing 24 users</span>
</div>
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low/30 border-b border-outline-variant">
<th class="px-6 py-4 font-label-md text-label-md text-on-surface-variant">User</th>
<th class="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Role</th>
<th class="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Status</th>
<th class="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Last Active</th>
<th class="px-6 py-4"></th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- User Row 1 -->
<tr class="hover:bg-surface-container-low/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold">JD</div>
<div>
<div class="font-label-md text-label-md text-on-surface">Jordan Davids</div>
<div class="text-label-sm text-on-surface-variant">jordan@auralis.ai</div>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full bg-primary-container/10 text-primary text-label-sm border border-primary/20">Admin</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim signal-pulse"></span>
<span class="text-label-sm text-on-surface">Active</span>
</div>
</td>
<td class="px-6 py-4 text-label-sm text-on-surface-variant">2 mins ago</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- User Row 2 -->
<tr class="hover:bg-surface-container-low/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A close-up portrait of a male data scientist with glasses, looking focused and calm. He is wearing a minimalist tech-wear vest. The background is a clean white digital workspace with subtle blue and cyan lighting accents, reflecting a high-contrast corporate tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTKtDhLtuuSN8fuyYpKUPI782C4gPAcmAHpmJfvb8I3Ktt47mXjCq_wWEkVzVytNa1iXrIoDudBf6SpoeaApLX-Kqeejceshp9du3mz2AlBb-LcQ6Ge3xH-qtAEfkNau5o8xEkpF-qMCPoKgvNl-Lt45WNjqXgfhZyRTRb_FQOtbRCP7F8iGyb2Ha6yBxQXjoqRIKVmgl3J-_9Zque8bCJ_AlFyqVAAJHHWh2YM91zWT5FgAfJpnO9"/>
</div>
<div>
<div class="font-label-md text-label-md text-on-surface">Sarah Chen</div>
<div class="text-label-sm text-on-surface-variant">s.chen@auralis.ai</div>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm border border-outline-variant">Editor</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary-fixed-dim signal-pulse"></span>
<span class="text-label-sm text-on-surface">Active</span>
</div>
</td>
<td class="px-6 py-4 text-label-sm text-on-surface-variant">1 hour ago</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- User Row 3 -->
<tr class="hover:bg-surface-container-low/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary font-bold">MK</div>
<div>
<div class="font-label-md text-label-md text-on-surface">Marcus Knight</div>
<div class="text-label-sm text-on-surface-variant">m.knight@auralis.ai</div>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm border border-outline-variant">Viewer</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-outline-variant"></span>
<span class="text-label-sm text-on-surface-variant">Away</span>
</div>
</td>
<td class="px-6 py-4 text-label-sm text-on-surface-variant">4 days ago</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
<div class="p-6 bg-surface-container-low/30 flex justify-between items-center">
<div class="flex items-center gap-2">
<button class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant bg-white disabled:opacity-50" disabled="">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-label-sm">1</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant bg-white text-label-sm hover:bg-surface-container-high transition-colors">2</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant bg-white text-label-sm hover:bg-surface-container-high transition-colors">3</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant bg-white">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
<p class="text-label-sm text-on-surface-variant">Showing 3 of 24 members</p>
</div>
</div>
</div>
<!-- Permissions Summary Sidebar -->
<div class="col-span-12 lg:col-span-4 space-y-gutter">
<div class="bg-inverse-surface text-white p-8 rounded-xl relative overflow-hidden shadow-xl border border-white/10">
<div class="relative z-10">
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">security</span>
<h3 class="font-headline-md text-headline-md font-bold">Permissions Guide</h3>
</div>
<div class="space-y-6">
<div class="flex gap-4">
<div class="shrink-0 w-8 h-8 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary-fixed-dim text-sm" style="font-variation-settings: 'FILL' 1;">grade</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary-fixed-dim mb-1">Administrator</p>
<p class="text-label-sm text-surface-variant leading-relaxed">Full system access, billing management, user provisioning, and high-level security configuration.</p>
</div>
</div>
<div class="flex gap-4">
<div class="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
<span class="material-symbols-outlined text-white text-sm">edit</span>
</div>
<div>
<p class="font-label-md text-label-md text-white mb-1">Editor</p>
<p class="text-label-sm text-surface-variant leading-relaxed">Can create/delete projects, manage API keys, and configure processing pipelines.</p>
</div>
</div>
<div class="flex gap-4">
<div class="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
<span class="material-symbols-outlined text-white text-sm">visibility</span>
</div>
<div>
<p class="font-label-md text-label-md text-white mb-1">Viewer</p>
<p class="text-label-sm text-surface-variant leading-relaxed">Read-only access to analytics, reports, and system logs. Cannot modify configurations.</p>
</div>
</div>
</div>
<div class="mt-10 p-4 rounded-lg bg-primary-container/10 border border-primary-container/20">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary-fixed-dim text-sm">info</span>
<span class="font-label-sm text-label-sm text-primary-fixed-dim">Custom Roles</span>
</div>
<p class="text-label-sm text-surface-variant">Need more granular control? Contact Enterprise Support to set up custom permission sets.</p>
</div>
</div>
<!-- Abstract Background Decorative Elements -->
<div class="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
<h3 class="font-label-md text-label-md text-on-surface-variant mb-4 flex items-center justify-between">
                        Recent Activity
                        <span class="material-symbols-outlined text-sm">history</span>
</h3>
<div class="space-y-4">
<div class="flex gap-3">
<div class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
<div>
<p class="text-label-sm text-on-surface">Jordan invited <span class="font-bold">Alex Rivera</span></p>
<p class="text-xs text-on-surface-variant">2 hours ago</p>
</div>
</div>
<div class="flex gap-3">
<div class="w-2 h-2 rounded-full bg-secondary-fixed-dim mt-1.5 shrink-0"></div>
<div>
<p class="text-label-sm text-on-surface">Sarah updated permissions for <span class="font-bold">Billing Service</span></p>
<p class="text-xs text-on-surface-variant">5 hours ago</p>
</div>
</div>
<div class="flex gap-3">
<div class="w-2 h-2 rounded-full bg-error mt-1.5 shrink-0"></div>
<div>
<p class="text-label-sm text-on-surface">System revoked access for <span class="font-bold">Legacy Bot 2</span></p>
<p class="text-xs text-on-surface-variant">Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Invite Modal (Overlay Style) -->
<div class="fixed inset-0 z-[100] flex items-center justify-center hidden" id="invite-modal">
<!-- Backdrop -->
<div class="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" onclick="closeInviteModal()"></div>
<!-- Modal Content -->
<div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
<div class="p-8 border-b border-outline-variant flex justify-between items-center">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface">Invite New User</h2>
<p class="text-label-sm text-on-surface-variant">Add collaborators to your Auralis AI environment.</p>
</div>
<button class="p-2 hover:bg-surface-container-high rounded-full transition-colors" onclick="closeInviteModal()">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="p-8 space-y-6">
<div>
<label class="block font-label-md text-label-md text-on-surface mb-2">Email Address</label>
<input class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-body-md outline-none" placeholder="colleague@company.com" type="email"/>
</div>
<div>
<label class="block font-label-md text-label-md text-on-surface mb-2">Assign Role</label>
<div class="grid grid-cols-1 gap-2">
<label class="flex items-center gap-3 p-3 border border-outline-variant rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary-container/5">
<input class="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="role" type="radio" value="admin"/>
<div>
<div class="font-label-md text-label-md text-on-surface">Administrator</div>
<div class="text-xs text-on-surface-variant">Full system &amp; billing access</div>
</div>
</label>
<label class="flex items-center gap-3 p-3 border border-outline-variant rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary-container/5">
<input checked="" class="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="role" type="radio" value="editor"/>
<div>
<div class="font-label-md text-label-md text-on-surface">Editor</div>
<div class="text-xs text-on-surface-variant">Can manage resources &amp; pipelines</div>
</div>
</label>
<label class="flex items-center gap-3 p-3 border border-outline-variant rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary-container/5">
<input class="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="role" type="radio" value="viewer"/>
<div>
<div class="font-label-md text-label-md text-on-surface">Viewer</div>
<div class="text-xs text-on-surface-variant">Read-only monitoring access</div>
</div>
</label>
</div>
</div>
<div class="pt-4 flex gap-4">
<button class="flex-1 px-4 py-3 rounded-xl border border-outline-variant font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors" onclick="closeInviteModal()">
                        Cancel
                    </button>
<button class="flex-1 px-4 py-3 rounded-xl bg-primary text-white font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                        Send Invitation
                    </button>
</div>
</div>
<div class="bg-surface-container-low/50 p-4 text-center">
<p class="text-xs text-on-surface-variant flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-sm">lock</span>
                    All invites are logged for security auditing.
                </p>
</div>
</div>
</div>
<script>
        function openInviteModal() {
            const modal = document.getElementById('invite-modal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeInviteModal() {
            const modal = document.getElementById('invite-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeInviteModal();
        });
    </script>
`
  },
  "lms/lesson-viewer": {
    bodyClass: "font-body-md text-body-md min-h-screen",
    html: `
<!-- Top AppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-20 bg-surface/60 backdrop-blur-xl border-b border-white/10">
<div class="flex items-center gap-4">
<span class="text-headline-md font-display-lg font-bold text-primary">Auralis LMS</span>
<div class="hidden md:flex items-center bg-surface-container-highest rounded-full px-4 py-1.5 border border-white/5 ml-4">
<span class="material-symbols-outlined text-primary text-sm mr-2" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 text-body-md w-48 placeholder:text-on-surface-variant/50" placeholder="Search lessons..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<button class="relative text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute -top-1 -right-1 w-2 h-2 bg-secondary-fixed-dim rounded-full"></span>
</button>
<div class="flex items-center gap-3 bg-white/5 rounded-full pl-1 pr-4 py-1 border border-white/10">
<img class="w-8 h-8 rounded-full object-cover" data-alt="A professional headshot of a student with a soft indigo lighting rim, minimalist futuristic background, high-end educational photography style, deep blue and neutral grey tones, sharp focus, 8k resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKGYQ4_nVajxhVtP-DuYVaDMrPsubhqpm31fjrlmkECDNAc11XrFrsDkfB7uulErpfTcWF0pNCVqgNBG41fxLlAFF54BVXgYxBwgIQnxNmiH4-NH9IyRHrRLrWOkpXA6xFGJRkk_UEKse9-og7wAOdu0YYO2IfFiXSbr7JKnmjtomOczLX4b1MyMnKlVxZ_uWl25Pk6-71eOdy3g4yT18i4Ehbvn8xFgX5OrRc4-nWosg2FN8TJAAL"/>
<span class="text-label-caps tracking-wider text-on-surface">Alex Mercer</span>
</div>
</div>
</header>
<main class="pt-20 h-screen flex overflow-hidden">
<!-- Left Sidebar: Course Curriculum -->
<aside class="fixed left-0 top-0 h-full w-sidebar-width z-40 flex flex-col pt-24 pb-8 bg-surface-container-low/60 backdrop-blur-2xl border-r border-white/10 hidden xl:flex">
<div class="px-6 mb-8">
<h2 class="font-display-lg text-headline-md text-primary mb-1">Foundations of UX</h2>
<p class="text-label-caps text-secondary-fixed-dim">Instructor: Sarah Chen</p>
</div>
<nav class="flex-1 overflow-y-auto custom-scrollbar px-2">
<div class="space-y-1">
<!-- Module 1 -->
<div class="mb-4">
<div class="flex items-center gap-2 px-4 py-2 text-on-surface font-bold text-label-caps">
<span class="material-symbols-outlined text-sm" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
                            MODULE 1: FOUNDATIONS
                        </div>
<div class="space-y-1">
<button class="w-full flex items-center gap-3 px-6 py-3 bg-primary/10 text-primary border-l-4 border-primary transition-all">
<span class="material-symbols-outlined text-sm" data-icon="play_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">play_circle</span>
<span class="text-body-md text-left truncate">1.1 Introduction to Design</span>
</button>
<button class="w-full flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-white/5 transition-all group">
<span class="material-symbols-outlined text-sm group-hover:text-primary" data-icon="check_circle">check_circle</span>
<span class="text-body-md text-left truncate">1.2 History of Interfaces</span>
</button>
<button class="w-full flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-white/5 transition-all group">
<span class="material-symbols-outlined text-sm group-hover:text-primary" data-icon="check_circle">check_circle</span>
<span class="text-body-md text-left truncate">1.3 Cognitive Psychology</span>
</button>
</div>
</div>
<!-- Module 2 -->
<div class="mb-4 opacity-70">
<div class="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-bold text-label-caps">
<span class="material-symbols-outlined text-sm" data-icon="keyboard_arrow_right">keyboard_arrow_right</span>
                            MODULE 2: RESEARCH
                        </div>
</div>
<!-- Module 3 -->
<div class="mb-4 opacity-70">
<div class="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-bold text-label-caps">
<span class="material-symbols-outlined text-sm" data-icon="lock">lock</span>
                            MODULE 3: PROTOTYPING
                        </div>
</div>
</div>
</nav>
<div class="mt-auto px-6 pt-6 border-t border-white/5">
<div class="bg-surface-container-highest rounded-xl p-4 border border-white/5">
<div class="flex justify-between items-center mb-2">
<span class="text-label-caps text-on-surface-variant">YOUR PROGRESS</span>
<span class="text-label-caps text-primary">12%</span>
</div>
<div class="w-full h-1.5 bg-background rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 12%"></div>
</div>
</div>
</div>
</aside>
<!-- Main Content Area: Video Player -->
<section class="flex-1 xl:ml-sidebar-width xl:mr-sidebar-width p-gutter overflow-y-auto custom-scrollbar">
<div class="max-w-container-max mx-auto space-y-gutter">
<!-- Video Container -->
<div class="relative group rounded-2xl overflow-hidden aspect-video glass-panel shadow-2xl border border-white/10 indigo-glow">
<!-- Placeholder for Lesson Video -->
<div class="absolute inset-0 bg-cover bg-center" data-alt="A cinematic, high-definition frame of a professional UX design tutorial showing a clean digital interface workspace. Soft ambient lighting, shallow depth of field focusing on a hand using a stylus on a tablet. Modern studio aesthetic, deep blues and indigo color palette, 8k resolution." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2uqnY_zhtzVyyEfXH0CsiTn6DA70uq9zFOA9OBauXQC-xih-7ZNjT9qom6ser0Z_X8-t_HSamZOnV3Ta2MigZql-tDGeLFzs2P8itWOO_D9SdawY49_wKmXa2MXpJ-5B9LUq16pCSpW4kN8cZ2T3x4hzRdJv3KrjsTOsXBctZuJ2tj-WDCWK78eWn6ShoTVieHmIaV0Ptja5oQR9tlU8JXAVMuAFc6OzS0v_8ImLy3yc0tVjgoxFG')"></div>
<!-- Gradient Overlay -->
<div class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<!-- Custom Controls -->
<div class="absolute bottom-0 left-0 w-full p-6 space-y-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<!-- Progress Bar -->
<div class="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden">
<div class="absolute top-0 left-0 h-full bg-primary w-2/5"></div>
<div class="absolute top-0 left-[40%] w-3 h-3 -mt-0.5 bg-white rounded-full shadow-lg"></div>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-6">
<button class="text-white hover:text-primary transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="play_arrow" data-weight="fill" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
<div class="flex items-center gap-4 text-white">
<span class="material-symbols-outlined hover:text-primary cursor-pointer" data-icon="replay_10">replay_10</span>
<span class="material-symbols-outlined hover:text-primary cursor-pointer" data-icon="forward_10">forward_10</span>
</div>
<div class="flex items-center gap-3 group/vol">
<span class="material-symbols-outlined text-white" data-icon="volume_up">volume_up</span>
<div class="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
<div class="h-full bg-white w-3/4"></div>
</div>
</div>
<span class="text-mono-data text-white/80">08:24 / 22:15</span>
</div>
<div class="flex items-center gap-6">
<button class="px-3 py-1 glass-card rounded-md text-label-caps text-white hover:bg-white/10">1.25x</button>
<span class="material-symbols-outlined text-white hover:text-primary cursor-pointer" data-icon="closed_caption">closed_caption</span>
<span class="material-symbols-outlined text-white hover:text-primary cursor-pointer" data-icon="settings">settings</span>
<span class="material-symbols-outlined text-white hover:text-primary cursor-pointer" data-icon="fullscreen">fullscreen</span>
</div>
</div>
</div>
</div>
<!-- Lesson Info & CTA -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 glass-panel rounded-2xl p-8">
<div class="space-y-2">
<div class="flex items-center gap-3">
<span class="px-2 py-1 bg-primary/20 text-primary text-label-caps rounded">CURRENT LESSON</span>
<span class="text-on-surface-variant font-mono-data text-sm">#1.1</span>
</div>
<h1 class="font-display-lg text-headline-md text-on-surface">Introduction to User-Centered Design Principles</h1>
<p class="text-on-surface-variant max-w-2xl">Discover why user empathy is the core of every successful product. In this lesson, we break down the fundamental framework of UCD.</p>
</div>
<button class="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg transition-all active:scale-95 group">
                        Next Lesson
                        <span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<!-- Description & Files Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="md:col-span-2 glass-panel p-8 rounded-2xl space-y-6">
<h3 class="font-display-lg text-headline-md text-on-surface">About this Lesson</h3>
<div class="prose prose-invert max-w-none text-on-surface-variant leading-relaxed">
<p>In this comprehensive overview, Sarah Chen walks through the foundational concepts of user-centered design. We will cover:</p>
<ul class="list-disc pl-5 mt-4 space-y-2">
<li>Defining the user persona and pain points</li>
<li>The iterative design loop: Research, Ideate, Test</li>
<li>Real-world case studies of UCD in action at Scale</li>
</ul>
</div>
</div>
<div class="glass-panel p-8 rounded-2xl space-y-6">
<h3 class="font-display-lg text-headline-md text-on-surface">Lesson Resources</h3>
<div class="space-y-3">
<div class="flex items-center justify-between p-3 glass-card rounded-xl border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="description">description</span>
<span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Lecture_Slides.pdf</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="download">download</span>
</div>
<div class="flex items-center justify-between p-3 glass-card rounded-xl border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="link">link</span>
<span class="text-body-md text-on-surface group-hover:text-primary transition-colors">UCD Framework Link</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="open_in_new">open_in_new</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Right Sidebar: Interactive Panel -->
<aside class="fixed right-0 top-0 h-full w-sidebar-width z-40 flex flex-col pt-24 bg-surface-container/60 backdrop-blur-2xl border-l border-white/10 hidden lg:flex">
<!-- Tabs -->
<div class="flex px-4 gap-2 mb-4">
<button class="flex-1 py-2 text-label-caps border-b-2 border-primary text-primary font-bold transition-all">CHAT</button>
<button class="flex-1 py-2 text-label-caps text-on-surface-variant/70 hover:text-on-surface transition-all">Q&amp;A</button>
</div>
<!-- Chat Content -->
<div class="flex-1 flex flex-col overflow-hidden">
<div class="flex-1 overflow-y-auto custom-scrollbar px-6 space-y-6 py-4">
<!-- Message -->
<div class="space-y-1.5">
<div class="flex items-center justify-between">
<span class="text-label-caps text-secondary-fixed-dim">Jordan Riley</span>
<span class="text-[10px] text-on-surface-variant/50">12:45 PM</span>
</div>
<div class="glass-card p-3 rounded-2xl rounded-tl-none">
<p class="text-sm text-on-surface">The point about empathy maps really clicked for me. Anyone have templates?</p>
</div>
</div>
<!-- Message (Self) -->
<div class="space-y-1.5 flex flex-col items-end">
<div class="flex items-center justify-between w-full">
<span class="text-[10px] text-on-surface-variant/50">12:47 PM</span>
<span class="text-label-caps text-primary">Me</span>
</div>
<div class="bg-primary/20 border border-primary/20 p-3 rounded-2xl rounded-tr-none">
<p class="text-sm text-on-surface">I think Sarah linked some in the resources sidebar!</p>
</div>
</div>
<!-- Message -->
<div class="space-y-1.5">
<div class="flex items-center justify-between">
<span class="text-label-caps text-secondary-fixed-dim">Sarah Chen (Instructor)</span>
<span class="text-[10px] text-on-surface-variant/50">12:50 PM</span>
</div>
<div class="glass-card p-3 border-l-2 border-secondary-fixed-dim rounded-2xl rounded-tl-none bg-secondary/5">
<p class="text-sm text-on-surface">Spot on! Check the PDF "UCD Framework" for 3 distinct persona templates.</p>
</div>
</div>
</div>
<!-- Input -->
<div class="p-6 border-t border-white/10">
<div class="relative">
<textarea class="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary resize-none pr-12 custom-scrollbar" placeholder="Send a message..." rows="1"></textarea>
<button class="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform">
<span class="material-symbols-outlined" data-icon="send">send</span>
</button>
</div>
<p class="text-[10px] text-on-surface-variant/40 mt-3 text-center uppercase tracking-widest">Live with 42 others</p>
</div>
</div>
</aside>
</main>
<!-- Mobile Bottom Navigation -->
<nav class="md:hidden fixed bottom-0 left-0 w-full glass-panel z-50 flex justify-around items-center h-16 border-t border-white/5">
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined" data-icon="menu_book" data-weight="fill" style="font-variation-settings: 'FILL' 1;">menu_book</span>
<span class="text-[10px] font-bold">Curriculum</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="text-[10px]">Chat</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
<span class="text-[10px]">Q&amp;A</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="text-[10px]">Profile</span>
</button>
</nav>
<script>
        // Micro-interactions and UI Logic
        document.querySelectorAll('button, a').forEach(elem => {
            elem.addEventListener('mousedown', () => {
                elem.classList.add('scale-95');
            });
            elem.addEventListener('mouseup', () => {
                elem.classList.remove('scale-95');
            });
            elem.addEventListener('mouseleave', () => {
                elem.classList.remove('scale-95');
            });
        });

        // Simple Tab Switching Mockup
        const tabs = document.querySelectorAll('aside[class*="right-0"] .flex.px-4.gap-2 button');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('border-primary', 'text-primary', 'font-bold');
                    t.classList.add('text-on-surface-variant/70');
                });
                tab.classList.add('border-primary', 'text-primary', 'font-bold');
                tab.classList.remove('text-on-surface-variant/70');
            });
        });
    </script>
`
  },
  "crm/crm-pipelines": {
    bodyClass: "bg-background text-on-surface overflow-hidden h-screen font-body-md selection:bg-primary-container/30",
    html: `
<!-- Global App Shell Layout -->
<div class="flex h-screen w-full relative">
<!-- Side Navigation (Immutable Source: SideNavBar JSON) -->
<aside class="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-surface-container-lowest z-50 flex flex-col py-stack-md shadow-sm">
<div class="px-6 mb-8">
<h1 class="font-headline-md text-headline-md font-bold text-on-surface">Auralis AI</h1>
<p class="text-on-surface-variant font-label-sm text-label-sm">Enterprise Admin</p>
</div>
<nav class="flex-1 space-y-1">
<!-- Dashboard -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<!-- Agents -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span class="font-label-md text-label-md">Agents</span>
</a>
<!-- Workflows (ACTIVE) -->
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container/10 text-on-primary-container border-r-4 border-primary-container transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_tree</span>
<span class="font-label-md text-label-md">Workflows</span>
</a>
<!-- CRM -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="font-label-md text-label-md">CRM</span>
</a>
<!-- Analytics -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">monitoring</span>
<span class="font-label-md text-label-md">Analytics</span>
</a>
<!-- Integrations -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">extension</span>
<span class="font-label-md text-label-md">Integrations</span>
</a>
<!-- Settings -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="px-4 mt-auto">
<button class="w-full py-3 px-4 bg-primary text-on-primary font-label-md text-label-md rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95">
                    Upgrade Plan
                </button>
</div>
</aside>
<!-- Top Navigation Bar (Immutable Source: TopNavBar JSON) -->
<header class="flex justify-between items-center h-16 px-margin-desktop ml-64 bg-surface/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 border-b border-outline-variant shadow-sm">
<div class="flex items-center flex-1 max-w-xl">
<div class="relative w-full group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all" placeholder="Search workflow components..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2">
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">dark_mode</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined">apps</span>
</button>
</div>
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a senior technology administrator for Auralis AI, wearing modern business attire in a bright, clean, high-contrast office setting. The lighting is soft and professional, emphasizing a modern corporate aesthetic with a shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4OwT5o4JPkU-31rODopLmPIs8Hnxow7TjWfSJ0y5WTrZfOMAImFToT-Cj3VgBdiTXjg5TpxENVyXgYNqT-R7oxbneg2axbCTfN2TrXx7Dzy9TG6sWQ9OCPhUacVdusHCUgRk-OLtnQ0379ooHln4qJGKL1nvqeV-BspA-u4nFnwsqVualJLalGxLpuYtuWELDANut4wndvNxKITk0PjGbYzE5SWm6n2FozG-oOJYDC7O0Pw8CTg29"/>
</div>
</div>
</header>
<!-- Main Builder Canvas Area -->
<main class="flex-1 ml-64 mt-16 flex overflow-hidden relative">
<!-- Node Library (Left Sidebar) -->
<aside class="w-72 glass-panel border-r border-outline-variant h-full flex flex-col z-30">
<div class="p-stack-md border-b border-outline-variant">
<h3 class="font-headline-md text-headline-md text-on-surface">Node Library</h3>
<p class="text-on-surface-variant text-label-sm">Drag and drop components</p>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-6">
<!-- Triggers Section -->
<div>
<span class="text-label-sm text-outline uppercase tracking-widest font-bold mb-3 block">Triggers</span>
<div class="grid grid-cols-1 gap-2">
<div class="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-sm cursor-grab transition-all group">
<div class="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">webhook</span>
</div>
<div>
<p class="text-label-md">Webhook</p>
<p class="text-[11px] text-on-surface-variant">External API Trigger</p>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-sm cursor-grab transition-all group">
<div class="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">schedule</span>
</div>
<div>
<p class="text-label-md">Scheduled</p>
<p class="text-[11px] text-on-surface-variant">Time-based trigger</p>
</div>
</div>
</div>
</div>
<!-- Actions Section -->
<div>
<span class="text-label-sm text-outline uppercase tracking-widest font-bold mb-3 block">Actions</span>
<div class="grid grid-cols-1 gap-2">
<div class="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-sm cursor-grab transition-all group">
<div class="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">mail</span>
</div>
<div>
<p class="text-label-md">Email</p>
<p class="text-[11px] text-on-surface-variant">Send custom response</p>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-sm cursor-grab transition-all group border-t-2 border-t-primary-container">
<div class="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">psychology</span>
</div>
<div>
<p class="text-label-md font-bold">AI Analysis</p>
<p class="text-[11px] text-on-surface-variant">Auralis Intelligence</p>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-sm cursor-grab transition-all group">
<div class="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">database</span>
</div>
<div>
<p class="text-label-md">DB Update</p>
<p class="text-[11px] text-on-surface-variant">Modify record</p>
</div>
</div>
</div>
</div>
<!-- Conditions Section -->
<div>
<span class="text-label-sm text-outline uppercase tracking-widest font-bold mb-3 block">Conditions</span>
<div class="grid grid-cols-1 gap-2">
<div class="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary-container hover:shadow-sm cursor-grab transition-all group">
<div class="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined">call_split</span>
</div>
<div>
<p class="text-label-md">Logic Branch</p>
<p class="text-[11px] text-on-surface-variant">If/Else statements</p>
</div>
</div>
</div>
</div>
</div>
</aside>
<!-- Center Infinite Canvas -->
<section class="flex-1 relative overflow-hidden workflow-grid bg-background">
<!-- SVG Connections Layer -->
<svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
<path class="node-connector" d="M420 220 C 500 220, 500 220, 580 220"></path>
<path class="node-connector" d="M780 220 C 860 220, 860 220, 940 220"></path>
<path class="node-connector" d="M1140 220 C 1220 220, 1220 220, 1300 220"></path>
</svg>
<!-- Sample Nodes -->
<div class="absolute inset-0 flex items-center p-12 overflow-visible">
<!-- Node 1: Trigger -->
<div class="absolute left-60 top-40 w-64 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg z-10 hover:border-primary transition-all">
<div class="px-4 py-2 bg-on-surface text-surface rounded-t-xl flex justify-between items-center">
<span class="text-label-sm">TRIGGER</span>
<span class="material-symbols-outlined text-[16px]">more_vert</span>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined">input</span>
</div>
<p class="font-bold text-on-surface">Incoming Lead</p>
</div>
<div class="p-2 bg-surface-container rounded-lg text-label-sm text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[14px]">link</span>
                                api.auralis.ai/v1/hook...
                            </div>
</div>
<div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-surface-container-lowest cursor-pointer"></div>
</div>
<!-- Node 2: Condition -->
<div class="absolute left-[540px] top-40 w-64 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg z-10 hover:border-primary transition-all">
<div class="px-4 py-2 bg-tertiary text-on-tertiary rounded-t-xl flex justify-between items-center">
<span class="text-label-sm">CONDITION</span>
<span class="material-symbols-outlined text-[16px]">more_vert</span>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined">filter_alt</span>
</div>
<p class="font-bold text-on-surface">Score &gt; 80</p>
</div>
<div class="flex items-center gap-1">
<span class="px-2 py-1 bg-secondary-container/20 text-secondary rounded-full text-[10px] font-bold">TRUE</span>
<span class="px-2 py-1 bg-error-container text-on-error-container rounded-full text-[10px] font-bold">FALSE</span>
</div>
</div>
<div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-outline border-2 border-surface-container-lowest"></div>
<div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-surface-container-lowest cursor-pointer"></div>
</div>
<!-- Node 3: AI Action (Selected) -->
<div class="absolute left-[900px] top-32 w-64 bg-surface-container-lowest border-2 border-primary-container rounded-xl shadow-2xl z-20 ai-glow">
<div class="px-4 py-2 bg-primary-container text-on-primary-container rounded-t-[10px] flex justify-between items-center">
<span class="text-label-sm font-bold">AI ACTION</span>
<span class="material-symbols-outlined text-[16px]">bolt</span>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary-container">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<p class="font-bold text-on-surface">Draft Response</p>
</div>
<div class="h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-[75%] animate-pulse"></div>
</div>
<p class="text-[11px] text-on-surface-variant italic text-center">Processing with GPT-4 Omni...</p>
</div>
<div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-outline border-2 border-surface-container-lowest"></div>
<div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-surface-container-lowest cursor-pointer"></div>
</div>
<!-- Node 4: Slack Action -->
<div class="absolute left-[1260px] top-40 w-64 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg z-10 hover:border-primary transition-all">
<div class="px-4 py-2 bg-on-surface text-surface rounded-t-xl flex justify-between items-center">
<span class="text-label-sm">NOTIFY</span>
<span class="material-symbols-outlined text-[16px]">more_vert</span>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">forum</span>
</div>
<p class="font-bold text-on-surface">Slack Notify</p>
</div>
<p class="text-label-sm text-on-surface-variant">Channel: #leads-high-prio</p>
</div>
<div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-outline border-2 border-surface-container-lowest"></div>
</div>
</div>
<!-- Floating Canvas Controls -->
<div class="absolute bottom-10 left-10 flex gap-2 glass-panel p-2 rounded-2xl border border-outline-variant shadow-lg z-40">
<button class="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-primary-container/20 text-on-surface transition-all">
<span class="material-symbols-outlined">add</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-primary-container/20 text-on-surface transition-all">
<span class="material-symbols-outlined">remove</span>
</button>
<div class="w-px bg-outline-variant mx-1"></div>
<button class="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-primary-container/20 text-on-surface transition-all">
<span class="material-symbols-outlined">undo</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-primary-container/20 text-on-surface transition-all">
<span class="material-symbols-outlined">redo</span>
</button>
<div class="w-px bg-outline-variant mx-1"></div>
<button class="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-primary-container/20 text-on-surface transition-all">
<span class="material-symbols-outlined">center_focus_weak</span>
</button>
</div>
<!-- Publish Button Floating -->
<div class="absolute bottom-10 right-10 z-40">
<button class="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-2xl shadow-[0_8px_30px_rgb(0,229,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
<span class="material-symbols-outlined">publish</span>
                        Publish Workflow
                    </button>
</div>
</section>
<!-- Settings Panel (Right Sidebar) -->
<aside class="w-80 glass-panel border-l border-outline-variant h-full flex flex-col z-30">
<div class="p-stack-md border-b border-outline-variant flex justify-between items-center">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Node Settings</h3>
<p class="text-on-surface-variant text-label-sm italic">Draft Response (AI Action)</p>
</div>
<button class="p-2 text-on-surface-variant hover:text-error transition-all">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
<div class="flex-1 overflow-y-auto p-stack-md space-y-6">
<!-- General -->
<div class="space-y-3">
<label class="block text-label-md font-bold text-on-surface">Node Name</label>
<input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 text-body-md focus:ring-2 focus:ring-primary-container outline-none transition-all" type="text" value="Draft Response"/>
</div>
<!-- AI Model -->
<div class="space-y-3">
<label class="block text-label-md font-bold text-on-surface">Model Provider</label>
<div class="relative">
<select class="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 text-body-md focus:ring-2 focus:ring-primary-container outline-none transition-all">
<option>GPT-4 Omni (Auralis-optimized)</option>
<option>Claude 3.5 Sonnet</option>
<option>Llama 3 70B</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>
</div>
<!-- System Prompt -->
<div class="space-y-3">
<div class="flex justify-between items-center">
<label class="block text-label-md font-bold text-on-surface">Intelligence Context</label>
<span class="text-[10px] bg-secondary-container/20 text-secondary px-2 rounded-full font-bold">SMART TOKENIZER</span>
</div>
<textarea class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 text-body-md focus:ring-2 focus:ring-primary-container outline-none transition-all resize-none" rows="6">You are a lead qualifying assistant for Auralis AI. Draft a professional, enthusiastic response to {{lead_name}}. Focus on their interest in {{interest_area}}. Keep it under 100 words.</textarea>
</div>
<!-- Advanced Settings -->
<div class="pt-4 border-t border-outline-variant">
<button class="w-full flex justify-between items-center text-label-md text-on-surface-variant hover:text-primary group">
<span>Advanced Configuration</span>
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</div>
<!-- Footer Actions -->
<div class="p-6 bg-surface-container-low flex gap-3">
<button class="flex-1 py-3 border border-outline-variant rounded-xl text-label-md font-bold hover:bg-surface transition-all">
                        Reset
                    </button>
<button class="flex-1 py-3 bg-on-surface text-surface rounded-xl text-label-md font-bold hover:opacity-90 transition-all">
                        Apply
                    </button>
</div>
</aside>
</main>
</div>
<!-- Micro-interaction Script for Infinite Canvas Panning Simulation -->
<script>
        const canvas = document.querySelector('.workflow-grid');
        let isDragging = false;
        let startX, startY, scrollLeft, scrollTop;

        // Simple visual feedback for interaction
        document.querySelectorAll('.cursor-grab').forEach(el => {
            el.addEventListener('mousedown', () => el.style.cursor = 'grabbing');
            el.addEventListener('mouseup', () => el.style.cursor = 'grab');
        });

        // Toggle Right Panel Focus
        const nodes = document.querySelectorAll('.absolute.w-64');
        nodes.forEach(node => {
            node.addEventListener('click', () => {
                nodes.forEach(n => {
                    n.classList.remove('border-primary-container', 'ai-glow', 'border-2', 'z-20');
                    n.classList.add('border', 'z-10');
                });
                node.classList.remove('border', 'z-10');
                node.classList.add('border-2', 'border-primary-container', 'ai-glow', 'z-20');
            });
        });
    </script>
`
  },
  "dashboard/operations": {
    bodyClass: "font-body-md text-on-surface",
    html: `
<!-- SideNavBar Anchor -->
<aside class="h-screen w-64 fixed left-0 top-0 overflow-y-auto flex flex-col border-r border-outline-variant bg-surface-container-lowest shadow-sm z-50">
<div class="p-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container">auto_awesome</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Auralis AI</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant">Enterprise Admin</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-1">
<a class="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">analytics</span> Analytics
            </a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">group</span> Team Management
            </a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">payments</span> Billing &amp; Usage
            </a>
<!-- Active State: System Settings -->
<a class="flex items-center gap-3 px-3 py-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-primary-container/10 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">settings</span> System Settings
            </a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">help</span> Help Support
            </a>
</nav>
<div class="p-4 mt-auto">
<div class="bg-primary/5 rounded-xl p-4 mb-4 border border-primary/10">
<p class="font-label-sm text-label-sm text-primary font-bold mb-2">Upgrade Plan</p>
<p class="text-xs text-on-surface-variant leading-tight">Unlock advanced AI models and priority processing.</p>
</div>
<button class="flex items-center gap-3 px-3 py-3 w-full rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md">
<span class="material-symbols-outlined">logout</span> Log Out
            </button>
</div>
</aside>
<!-- Main Content Area -->
<main class="pl-64 min-h-screen">
<!-- TopNavBar Anchor -->
<header class="sticky top-0 z-40 w-full px-margin-desktop py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center">
<div class="flex items-center gap-4">
<h2 class="font-headline-sm text-headline-sm font-extrabold text-primary">Settings</h2>
</div>
<div class="flex items-center gap-6">
<div class="relative">
<input class="w-64 pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/50" placeholder="Search settings..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-sm">search</span>
</div>
<div class="flex items-center gap-4">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">Docs</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">API</a>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">notifications</button>
<div class="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-container">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female technology administrator in a high-tech office environment. She is smiling confidently, wearing modern glasses. The lighting is bright and clean, characteristic of a high-contrast tech SaaS interface. The background features soft bokeh of server lights and glass partitions, emphasizing a premium corporate AI setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMrpKMbA7b13WX30hHEpGPTF3DnOJwdr7raJKvRUFWdn6u9rYJ1bhHhBNAqMCXD_bcQhy1kD6Rfo9lDylP-I7o8Ghv-KMhW3IGCUtl0klE_tQ2YAD931QAavzV3gEqmU7VjG2QEGo37aYHdRYHnFDG2tQDFIXhmCHp2ka0ZaYQncH_FCvDyFDOvzprQvkKi4q9c8AMRTg_vglgOe12dFcWnLrtJHDAM_E61CwtoArAT9M29_yDU7VX"/>
</div>
</div>
</div>
</header>
<!-- Settings Canvas -->
<div class="p-stack-lg max-w-6xl mx-auto">
<div class="flex gap-stack-lg">
<!-- Vertical Tab Navigation -->
<nav class="w-64 shrink-0 space-y-1">
<button class="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant group active-tab-indicator transition-all" onclick="showTab('general')">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span class="font-label-md text-label-md text-primary font-bold">General</span>
</div>
<span class="material-symbols-outlined text-xs text-primary">chevron_right</span>
</button>
<button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant group" onclick="showTab('security')">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined group-hover:text-primary transition-colors">security</span>
<span class="font-label-md text-label-md">Security</span>
</div>
</button>
<button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant group" onclick="showTab('notifications')">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined group-hover:text-primary transition-colors">notifications</span>
<span class="font-label-md text-label-md">Notifications</span>
</div>
</button>
<button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant group" onclick="showTab('api')">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined group-hover:text-primary transition-colors">api</span>
<span class="font-label-md text-label-md">API Keys</span>
</div>
</button>
</nav>
<!-- Settings Forms Container -->
<div class="flex-1 space-y-stack-lg">
<!-- Section: Workspace Settings -->
<section class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden" id="general-section">
<div class="p-6 border-b border-outline-variant flex items-center justify-between">
<div>
<h3 class="font-headline-md text-headline-md">Workspace Settings</h3>
<p class="font-body-md text-label-sm text-on-surface-variant">Manage your organization's core identity and regional preferences.</p>
</div>
<span class="px-3 py-1 bg-primary-container/20 text-primary rounded-full font-label-sm text-xs">Production Environment</span>
</div>
<div class="p-8 space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<!-- Workspace Name -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface">Workspace Name</label>
<input class="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container outline-none transition-all" type="text" value="Auralis Global Core"/>
</div>
<!-- Timezone -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface">Timezone</label>
<select class="w-full px-4 py-3 bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container outline-none appearance-none transition-all">
<option>UTC (Coordinated Universal Time)</option>
<option selected="">PST (Pacific Standard Time) - Los Angeles</option>
<option>EST (Eastern Standard Time) - New York</option>
<option>CET (Central European Time) - Berlin</option>
</select>
</div>
</div>
<!-- Brand Logo Upload -->
<div class="space-y-3">
<label class="font-label-md text-label-md text-on-surface">Brand Logo</label>
<div class="flex items-center gap-6">
<div class="w-24 h-24 rounded-2xl bg-surface-container flex items-center justify-center border-2 border-dashed border-outline-variant">
<img class="w-16 h-16 object-contain" data-alt="A minimalist tech logo consisting of abstract geometric nodes connected by fine lines, rendered in electric cyan on a dark slate background. The style is clean, modern, and symbolic of neural networks or data flow. High-contrast, sleek professional aesthetic for an AI company." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT03fS3ABdIlR5bTktKpf6SXX9Qazl4Po09xOdEk9A8ARSu1U63HxVK_5djES9yIR6tS2ZHTXbP87XQWgwYKhcmRaVSLeFEZbLLIO8dVr9gArHOmSIxGbkZnI0oHc6ldaN93NtWzERB6W2R1CfZid6D9hAiqIncpckDe9WWTf5PFKm-luDNWKZYTEhkqEw4RHxb_edGTrDKrCyH2hjUW_hgBEABp61kZwvq_ssm0jwwyF2I7W1KTiP"/>
</div>
<div class="space-y-2">
<div class="flex gap-3">
<button class="px-4 py-2 bg-primary text-white font-label-md text-label-md rounded-lg hover:bg-surface-tint transition-all">Replace Logo</button>
<button class="px-4 py-2 border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-all">Remove</button>
</div>
<p class="text-xs text-on-surface-variant">JPG, PNG or SVG. Max size 2MB. Recommended 512x512px.</p>
</div>
</div>
</div>
</div>
<div class="px-8 py-4 bg-surface-container-low flex justify-end">
<button class="px-6 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-sm">Save Changes</button>
</div>
</section>
<!-- Section: Security Settings -->
<section class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden border-t-2 border-primary-container" id="security-section">
<div class="p-6 border-b border-outline-variant">
<h3 class="font-headline-md text-headline-md flex items-center gap-2">
<span class="material-symbols-outlined text-primary">verified_user</span>
                                Security &amp; Authentication
                            </h3>
</div>
<div class="p-8 space-y-10">
<!-- Two Factor Auth -->
<div class="flex items-center justify-between">
<div class="max-w-md">
<h4 class="font-label-md text-label-md text-on-surface mb-1">Two-Factor Authentication (2FA)</h4>
<p class="text-sm text-on-surface-variant">Add an extra layer of security to your account by requiring more than just a password to log in.</p>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer custom-toggle" type="checkbox"/>
<div class="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:bg-primary-container transition-all toggle-bg relative">
<div class="toggle-dot absolute left-[2px] top-[2px] bg-white border border-outline-variant rounded-full h-5 w-5 transition-all"></div>
</div>
</label>
</div>
<hr class="border-outline-variant/30"/>
<!-- Session Management -->
<div class="space-y-4">
<h4 class="font-label-md text-label-md text-on-surface">Active Sessions</h4>
<div class="space-y-3">
<!-- Session Card 1 -->
<div class="flex items-center justify-between p-4 bg-background rounded-xl border border-outline-variant">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined">laptop_mac</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-label-md text-label-md">MacBook Pro 16" - Chrome</span>
<span class="text-[10px] px-1.5 py-0.5 bg-secondary-container/20 text-on-secondary-container font-bold rounded">CURRENT</span>
</div>
<p class="text-xs text-on-surface-variant">San Francisco, USA • 192.168.1.1</p>
</div>
</div>
<button class="text-xs font-bold text-error hover:underline">Revoke</button>
</div>
<!-- Session Card 2 -->
<div class="flex items-center justify-between p-4 bg-background rounded-xl border border-outline-variant">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined">smartphone</span>
</div>
<div>
<span class="font-label-md text-label-md">iPhone 15 Pro - Safari</span>
<p class="text-xs text-on-surface-variant">New York, USA • 172.20.10.4 • 2 hours ago</p>
</div>
</div>
<button class="text-xs font-bold text-error hover:underline">Revoke</button>
</div>
</div>
</div>
<hr class="border-outline-variant/30"/>
<!-- Change Password -->
<div class="flex items-center justify-between p-6 rounded-2xl ink-black-container shadow-xl">
<div>
<h4 class="font-label-md text-label-md mb-1">Account Password</h4>
<p class="text-sm opacity-70">Update your login credentials regularly to maintain security.</p>
</div>
<button class="px-6 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-xl hover:bg-primary-container/90 transition-all active:scale-95">Change Password</button>
</div>
</div>
</section>
<!-- Section: Notification Settings -->
<section class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden" id="notifications-section">
<div class="p-6 border-b border-outline-variant">
<h3 class="font-headline-md text-headline-md">Notification Preferences</h3>
</div>
<div class="p-0">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low border-b border-outline-variant">
<tr>
<th class="px-8 py-4 font-label-md text-label-md">System Event</th>
<th class="px-4 py-4 text-center font-label-md text-label-md">Email</th>
<th class="px-4 py-4 text-center font-label-md text-label-md">Slack</th>
<th class="px-4 py-4 text-center font-label-md text-label-md">In-app</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/30">
<!-- Event 1 -->
<tr class="hover:bg-background transition-colors">
<td class="px-8 py-5">
<div class="font-label-md text-label-md">Critical System Errors</div>
<div class="text-xs text-on-surface-variant">Alerts when AI nodes fail or exceed latency thresholds.</div>
</td>
<td class="px-4 py-5 text-center">
<input checked="" class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
<td class="px-4 py-5 text-center">
<input checked="" class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
<td class="px-4 py-5 text-center">
<input checked="" class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
</tr>
<!-- Event 2 -->
<tr class="hover:bg-background transition-colors">
<td class="px-8 py-5">
<div class="font-label-md text-label-md">Monthly Usage Reports</div>
<div class="text-xs text-on-surface-variant">Summary of API consumption and token allocation.</div>
</td>
<td class="px-4 py-5 text-center">
<input checked="" class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
<td class="px-4 py-5 text-center">
<input class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
<td class="px-4 py-5 text-center">
<input checked="" class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
</tr>
<!-- Event 3 -->
<tr class="hover:bg-background transition-colors">
<td class="px-8 py-5">
<div class="font-label-md text-label-md">New Feature Updates</div>
<div class="text-xs text-on-surface-variant">Announcements about new models and capabilities.</div>
</td>
<td class="px-4 py-5 text-center">
<input class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
<td class="px-4 py-5 text-center">
<input class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
<td class="px-4 py-5 text-center">
<input checked="" class="w-5 h-5 rounded-md text-primary focus:ring-primary-container border-outline-variant" type="checkbox"/>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
</div>
<!-- Footer Help -->
<footer class="p-8 text-center text-on-surface-variant/60 text-xs">
            © 2024 Auralis AI Systems. All rights reserved. Version 2.4.0-stable
        </footer>
</main>
<script>
        function showTab(tabId) {
            // This is a mockup script to demonstrate interaction
            // In a real app, this would handle routing or state management
            const tabs = ['general', 'security', 'notifications', 'api'];
            
            // Logic to visually update navigation (for demo only)
            const navButtons = document.querySelectorAll('nav.shrink-0 button');
            navButtons.forEach(btn => {
                btn.classList.remove('bg-surface-container-lowest', 'shadow-sm', 'border', 'border-outline-variant', 'active-tab-indicator');
                btn.classList.add('hover:bg-surface-container-high', 'text-on-surface-variant');
                btn.querySelector('span:not(.material-symbols-outlined)').classList.remove('text-primary', 'font-bold');
            });
            
            // Note: This script assumes buttons are in order. In real code use IDs.
            // Let's just highlight the clicked one for effect
            const eventTarget = window.event.currentTarget;
            eventTarget.classList.add('bg-surface-container-lowest', 'shadow-sm', 'border', 'border-outline-variant', 'active-tab-indicator');
            eventTarget.classList.remove('hover:bg-surface-container-high', 'text-on-surface-variant');
            eventTarget.querySelector('span:not(.material-symbols-outlined)').classList.add('text-primary', 'font-bold');
        }
    </script>
`
  },
};

// Alias mappings for additional route coverage
export const STITCH_ALIASES: Record<string, string> = {
  "auth/auth-signin-split": "auth/auth-signin-simple",
  "auth/auth-signin-social": "auth/auth-signin-simple",
  "auth/auth-signin-illustration": "auth/auth-signin-simple",
  "auth/auth-signin-basic": "auth/auth-signin-simple",
  "auth/auth-signup-split": "auth/auth-signup-simple",
  "auth/auth-signup-social": "auth/auth-signup-simple",
  "auth/auth-signup-illustration": "auth/auth-signup-simple",
  "auth/auth-signup-basic": "auth/auth-signup-simple",
  "auth/auth-forgot-password": "auth/auth-signin-simple",
  "auth/auth-reset-password": "auth/auth-signin-simple",
  "auth/auth-lockscreen": "auth/auth-signin-simple",
  "auth/auth-otp-verify": "auth/auth-signin-simple",
  "auth/error-404-simple": "auth/auth-signin-simple",
  "auth/error-404-illustrated": "auth/auth-signin-simple",
  "auth/error-500": "auth/auth-signin-simple",
  "auth/util-maintenance": "auth/auth-signin-simple",
  "auth/util-offline": "auth/auth-signin-simple",
  "auth/util-coming-soon": "auth/auth-signin-simple",
  "auth/util-pricing-table": "marketing/pricing",
  "marketing/home": "marketing/home",
  "marketing/about": "marketing/about",
  "marketing/services": "marketing/integrations",
  "marketing/features": "marketing/features",
  "marketing/features-showcase": "marketing/features",
  "marketing/pricing-plans": "marketing/pricing",
  "marketing/contact-us": "marketing/contact",
  "marketing/careers": "marketing/about",
  "marketing/team": "marketing/about",
  "marketing/partners": "marketing/integrations",
  "marketing/customers": "marketing/case-studies",
  "marketing/press": "marketing/changelog",
  "marketing/blog-grid": "marketing/blog",
  "marketing/blog-list": "marketing/blog",
  "marketing/blog-post": "marketing/blog",
  "marketing/faq": "docs/documentation",
  "marketing/terms": "docs/documentation",
  "marketing/privacy": "docs/documentation",
  "ai-apps/speech-to-text": "ai-apps/ai-chat",
  "ai-apps/text-to-speech": "ai-apps/ai-chat",
  "ai-apps/code-assistant": "ai-apps/ai-writer",
  "ai-apps/smart-search": "ai-apps/ai-chat",
  "ai-apps/anomaly-detector": "ai-apps/ai-writer",
  "ai-apps/sentiment-analyzer": "ai-apps/ai-writer",
  "ai-apps/grammar-fixer": "ai-apps/ai-writer",
  "ai-apps/summary-generator": "ai-apps/ai-writer",
  "ai-apps/seo-optimizer": "ai-apps/ai-writer",
  "ai-apps/prompt-library": "ai-apps/ai-chat",
  "ai-apps/translation-portal": "ai-apps/ai-writer",
  "ai-apps/image-upscaler": "ai-apps/image-generator",
  "ai-apps/video-generator": "ai-apps/image-generator",
  "ai-apps/music-generator": "ai-apps/image-generator",
  "ai-apps/voice-clone": "ai-apps/ai-chat",
  "ai-apps/avatar-creator": "ai-apps/image-generator",
  "crm/crm-contacts": "crm/crm-leads",
  "crm/crm-accounts": "crm/crm-leads",
  "crm/crm-meetings": "dashboard/operations",
  "crm/crm-tasks": "dashboard/operations",
  "crm/crm-deals-won": "crm/crm-pipelines",
  "crm/crm-proposals": "crm/crm-pipelines",
  "crm/crm-email-campaigns": "crm/crm-pipelines",
  "crm/crm-analytics": "crm/crm-pipelines",
  "crm/crm-lead-scoring": "crm/crm-pipelines",
  "crm/crm-contracts-docs": "crm/crm-pipelines",
  "crm/crm-customer-profile": "crm/crm-leads",
  "crm/crm-segments": "crm/crm-leads",
  "crm/crm-settings": "dashboard/operations",
  "project/proj-list": "project/proj-board",
  "project/proj-timeline": "dashboard/project-mgmt",
  "project/proj-backlog": "project/proj-board",
  "project/proj-details": "dashboard/project-mgmt",
  "project/proj-team": "dashboard/project-mgmt",
  "project/proj-milestones": "dashboard/project-mgmt",
  "project/proj-issues": "project/proj-board",
  "project/proj-wiki": "dashboard/operations",
  "project/proj-files": "dashboard/operations",
  "project/proj-reports": "dashboard/project-mgmt",
  "project/proj-timesheet": "dashboard/operations",
  "project/proj-discussions": "project/proj-board",
  "project/proj-retrospective": "dashboard/operations",
  "project/proj-settings": "dashboard/operations",
  "ecommerce/shop-grid": "components/calendar",
  "ecommerce/shop-list": "components/calendar",
  "ecommerce/product-details": "marketing/features-list",
  "ecommerce/cart": "finance/fin-invoices",
  "ecommerce/checkout": "finance/fin-invoices",
  "ecommerce/order-history": "finance/fin-invoices",
  "ecommerce/order-details": "finance/fin-invoices",
  "ecommerce/ecom-inventory": "dashboard/crm-dashboard",
  "ecommerce/ecom-customers": "dashboard/crm-dashboard",
  "ecommerce/ecom-reviews": "dashboard/crm-dashboard",
  "ecommerce/ecom-discounts": "dashboard/crm-dashboard",
  "ecommerce/ecom-sellers": "dashboard/crm-dashboard",
  "ecommerce/ecom-revenue": "dashboard/crm-dashboard",
  "ecommerce/ecom-refunds": "dashboard/crm-dashboard",
  "ecommerce/ecom-settings": "dashboard/operations",
  "lms/student-dashboard": "dashboard/lms",
  "lms/instructor-panel": "dashboard/lms",
  "lms/lms-quizzes": "lms/course-details",
  "lms/lms-grades": "dashboard/lms",
  "lms/lms-certificates": "lms/lesson-viewer",
  "lms/lms-live-classes": "lms/lesson-viewer",
  "lms/lms-discussions": "lms/course-details",
  "lms/lms-pricing": "marketing/pricing",
  "lms/lms-settings": "dashboard/operations",
  "help-desk/hd-help-center": "docs/documentation",
  "help-desk/hd-knowledge-base": "docs/documentation",
  "help-desk/hd-chat": "help-desk/hd-agents",
  "help-desk/hd-canned-responses": "help-desk/hd-agents",
  "help-desk/hd-feedback": "dashboard/help-desk",
  "help-desk/hd-sla-reports": "dashboard/help-desk",
  "help-desk/hd-automation": "dashboard/help-desk",
  "help-desk/hd-channels": "dashboard/help-desk",
  "help-desk/hd-settings": "dashboard/operations",
  "hr/hr-payroll": "dashboard/hr-mgmt",
  "hr/hr-recruiting": "dashboard/hr-mgmt",
  "hr/hr-onboarding": "dashboard/hr-mgmt",
  "hr/hr-performance": "dashboard/hr-mgmt",
  "hr/hr-benefits": "dashboard/hr-mgmt",
  "hr/hr-attendance": "hr/hr-leaves",
  "hr/hr-exp-claims": "hr/hr-leaves",
  "hr/hr-training": "dashboard/hr-mgmt",
  "hr/hr-settings": "dashboard/operations",
  "finance/fin-invoice-details": "finance/fin-invoices",
  "finance/fin-budgets": "dashboard/finance",
  "finance/fin-expenses": "dashboard/finance",
  "finance/fin-tax": "dashboard/finance",
  "finance/fin-assets": "dashboard/finance",
  "finance/fin-cards": "dashboard/finance",
  "finance/fin-statements": "dashboard/finance",
  "finance/fin-settings": "dashboard/operations",
  "healthcare/hc-records": "dashboard/healthcare",
  "healthcare/hc-billing": "dashboard/healthcare",
  "healthcare/hc-prescriptions": "dashboard/healthcare",
  "healthcare/hc-wards": "dashboard/healthcare",
  "healthcare/hc-pharmacy": "dashboard/healthcare",
  "healthcare/hc-lab-results": "dashboard/healthcare",
  "healthcare/hc-settings": "dashboard/operations",
  "components/gallery": "components/calendar",
  "components/maps": "components/calendar",
  "components/rtl": "rtl",
  "components/dark-mode": "rtl",
  "components/rich-text-editor": "components/forms",
  "components/file-uploader": "components/forms",
  "components/swiper-carousel": "components/calendar",
  "components/date-time-picker": "components/forms",
  "components/table-basic": "crm/crm-leads",
  "components/table-advanced": "crm/crm-leads",
  "components/accordions": "components/forms",
  "components/tabs-pills": "components/forms",
  "docs/docs-folder-structure": "docs/documentation",
  "docs/docs-routing": "docs/documentation",
  "docs/docs-theme-customization": "docs/documentation",
  "docs/docs-dark-mode": "docs/documentation",
  "docs/docs-rtl-layout": "docs/documentation",
  "docs/docs-charts": "docs/documentation",
  "docs/docs-components-usage": "docs/documentation",
  "docs/docs-deployment": "docs/documentation"
};
