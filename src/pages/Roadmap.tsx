
import { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Target, BarChart3, Rocket, ArrowRight, ChevronRight, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roadmapCards = [
    {
        id: 1,
        icon: Target,
        phase: "Phase 01",
        label: "CORE FOUNDATION",
        title: "10 Absolute Essentials Every Business Owner NEEDS",
        description: "Before growth, before scale, these are the non-negotiables that keep the lights on and the engine running. We dive deep into the bedrock of your operations, ensuring your fundamental systems are unbreakable.",
        highlights: ["Operational Integrity", "Cash Flow Stability", "Core Identity", "Essential Systems"],
        path: "/essentials/detail",
        color: "#0CCEAF",
        image: "/images/build_craft.jpg",
        tag: "Stability First"
    },
    {
        id: 2,
        icon: BarChart3,
        phase: "Phase 02",
        label: "MOMENTUM & VELOCITY",
        title: "10 Essential Next Steps After Your Foundation is Built",
        description: "You have stability. Now, how do you build momentum without breaking what's already working? This stage focuses on accelerating your progress and refining your market position.",
        highlights: ["Growth Acceleration", "Process Optimization", "Market Expansion", "Customer Retention"],
        path: "/next-steps",
        color: "#0CCEAF",
        image: "/images/process_prototype.jpg",
        tag: "Scale Momentum"
    },
    {
        id: 3,
        icon: Rocket,
        phase: "Phase 03",
        label: "SCALE & DOMINANCE",
        title: "10 Strategic Moves After Systems Are Running",
        description: "Optimization, expansion, and ensuring your systems can handle the weight of your ambition. This is where we turn a successful business into an industry-leading powerhouse.",
        highlights: ["Exponential Growth", "System Automation", "Legacy Building", "Strategic Exit Prep"],
        path: "/strategic-moves",
        color: "#0CCEAF",
        image: "/images/gtm_meeting.jpg",
        tag: "Industry Leadership"
    },
];

const Roadmap = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const phasesRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation - Coordinated Sequence
            const heroTl = gsap.timeline();
            heroTl.from('.hero-content > *', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power4.out'
            })
                .from('.hero-main-visual', {
                    scale: 0.9,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'expo.out'
                }, '-=0.8')
                .from('.hero-feature-card', {
                    x: 30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=1')
                .from('.hero-floating-stat', {
                    x: -30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=1');

            // Cards Animation
            roadmapCards.forEach((_, index) => {
                const card = cardsRef.current[index];
                const image = imagesRef.current[index];

                if (card) {
                    gsap.from(card, {
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                        duration: 1.2,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                }

                if (image) {
                    gsap.from(image, {
                        scale: 1.1,
                        opacity: 0,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: image,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                }
            });

            // Parallax effect on background elements
            gsap.to('.bg-element', {
                y: -100,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="roadmap-page relative bg-[#fcfcfc] text-slate-900 min-h-screen font-sans overflow-hidden">
            <Header />

            {/* Premium Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0CCEAF]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 bg-element" />
                <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#0CCEAF]/3 rounded-full blur-[100px] -translate-x-1/2 bg-element" />
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0CCEAF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <main className="relative z-10 pt-32 sm:pt-40 pb-24">
                {/* Modern Cinematic Hero Section */}
                <div className="relative w-full min-h-screen flex items-center overflow-hidden -mt-32 sm:-mt-40 mb-16 sm:mb-24 border-b border-slate-100">
                    {/* Background Layer with enhanced depth */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/hero_architecture.jpg"
                            alt="Strategic Architecture"
                            className="w-full h-full object-cover opacity-40 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfc] via-transparent to-[#fcfcfc]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/40 to-transparent" />

                        {/* Animated Grid Overlay */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0CCEAF 1px, transparent 1px), linear-gradient(90deg, #0CCEAF 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 hero-content">
                            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0CCEAF]/10 border border-[#0CCEAF]/20 rounded-full text-[#0CCEAF] mb-8">
                                <Zap size={14} className="fill-[#0CCEAF]" />
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase">The Architecture of Growth</span>
                            </div> */}

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1] hero-title mt-20">
                                Stop Guessing. <br />
                                Start <span className="text-[#0CCEAF] relative inline-block">
                                    Engineering.
                                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                                        <path d="M1 7C50 1.5 150 1.5 199 7" stroke="#0CCEAF" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-medium mb-12 pr-8 hero-description text-pretty">
                                We've deconstructed the journey from Phase Zero to Market Dominance into a repeatable high-performance system. No fluff, just results.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 hero-actions">
                                <div
                                    onClick={() => phasesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-slate-900/40 hover:bg-[#0CCEAF] hover:translate-y-[-4px] transition-all cursor-pointer flex items-center gap-3"
                                >
                                    Initialize Growth Path
                                    <ArrowRight size={16} />
                                </div>
                                <div className="flex items-center gap-3 px-8 py-5 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-sm hover:bg-white hover:border-[#0CCEAF]/30 transition-all cursor-pointer">
                                    <Shield size={18} className="text-[#0CCEAF]" />
                                    Proven Frameworks
                                </div>
                            </div>

                            <div className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8 opacity-60 hero-metrics">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-slate-900 leading-none">12.5%</span>
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Avg. Efficiency Increase</span>
                                </div>
                                <div className="w-px h-8 bg-slate-200" />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-slate-900 leading-none">3x</span>
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Scale Velocity</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 hidden lg:block relative">
                            <div className="hero-main-visual relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
                                <img
                                    src="/images/capabilities_workspace.jpg"
                                    alt="Visual Detail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>

                            {/* Floating Status */}
                            <div className="hero-floating-stat absolute -left-12 bottom-20 p-5 bg-slate-900 rounded-2xl shadow-2xl text-white z-20 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#0CCEAF] flex items-center justify-center">
                                    <Rocket size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 leading-none mb-1">STATUS UPDATE</div>
                                    <div className="text-sm font-black uppercase tracking-widest text-[#0CCEAF]">Growth Ready</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Vertical Text */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block rotate-90 origin-right translate-x-12 select-none pointer-events-none opacity-[0.03]">
                        <span className="text-[12rem] font-black text-slate-900 uppercase tracking-[0.3em]">ENGINEER</span>
                    </div>
                </div>

                {/* Growth Phases */}
                <div ref={phasesRef} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16 lg:space-y-24">
                    {roadmapCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.id}
                                className={`roadmap-phase-item flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div
                                    ref={el => { cardsRef.current[index] = el; }}
                                    className="flex-1 w-full"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black tracking-[0.4em] text-[#0CCEAF] uppercase mb-1">{card.phase}</span>
                                            <div className="h-1 w-12 bg-[#0CCEAF]" />
                                        </div>
                                        <div className="text-slate-100 text-6xl lg:text-8xl font-black select-none pointer-events-none opacity-50">
                                            0{card.id}
                                        </div>
                                    </div>

                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
                                        {card.title}
                                    </h2>

                                    <p className="text-slate-500 text-base lg:text-lg mb-10 leading-relaxed font-medium bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        {card.description}
                                    </p>

                                    <div className="roadmap-highlights grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                        {card.highlights.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#0CCEAF] shadow-sm transform transition-transform group-hover:scale-110 group-hover:bg-[#0CCEAF] group-hover:text-white roadmap-highlight-icon">
                                                    <ChevronRight size={18} />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700 tracking-tight roadmap-highlight-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center lg:justify-center">
                                        <Link
                                            to={card.path}
                                            className="group inline-flex items-center gap-4 px-6 py-3 bg-slate-900 text-white rounded-xl transition-all duration-500 hover:bg-[#0CCEAF] hover:translate-y-[-4px] shadow-lg hover:shadow-[#0CCEAF]/30"
                                        >
                                            <span className="font-bold uppercase tracking-widest text-[10px]">Deep Dive Phase {card.id}</span>
                                            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0CCEAF] transition-colors">
                                                <ArrowRight size={14} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div
                                    ref={el => { imagesRef.current[index] = el; }}
                                    className="roadmap-phase-image flex-1 w-full relative"
                                >
                                    <div className="relative z-10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white group">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                        {/* Floating Badge */}
                                        <div className="roadmap-floating-badge absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-between transform transition-transform group-hover:translate-y-[-10px]">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-[#0CCEAF] flex items-center justify-center text-white">
                                                    <Icon size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Focus Area</div>
                                                    <div className="text-base font-bold text-slate-900">{card.label}</div>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                                                <Zap size={10} className="text-[#0CCEAF]" />
                                                {card.tag}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative UI elements around image */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0CCEAF]/10 rounded-full blur-3xl -z-10" />
                                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-slate-200 rounded-3xl -z-10 rotate-12" />

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0CCEAF] rounded-tl-3xl -translate-x-4 -translate-y-4" />
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#0CCEAF] rounded-br-3xl translate-x-4 translate-y-4" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 mt-24 lg:mt-32">
                    <div className="roadmap-cta-box relative p-8 lg:p-16 bg-slate-900 rounded-[2rem] overflow-hidden text-center">
                        {/* Background Patterns */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0CCEAF 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        </div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0CCEAF]/20 rounded-full blur-3xl" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60 mb-6 backdrop-blur-md">
                                <Shield size={14} className="text-[#0CCEAF]" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">Proprietary Growth Engine</span>
                            </div>

                            <h2 className="text-2xl lg:text-4xl font-black text-white mb-6 tracking-tight">
                                Ready to <span className="text-[#0CCEAF]">Dominate</span> Your Sector?
                            </h2>
                            <p className="text-sm lg:text-base text-slate-400 mb-8 font-medium leading-relaxed">
                                We don't just provide advice; we engineer systems. Choose your entry point
                                and let's begin the acceleration process.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Mobile-only styles - does NOT affect desktop (lg: 1024px+) */}
            <style>{`
                @media (max-width: 1023px) {
                    .roadmap-page {
                        overflow-x: hidden;
                    }
                    .roadmap-hero-inner {
                        padding-top: 7rem !important;
                        padding-bottom: 5rem !important;
                    }
                    .roadmap-hero-inner .roadmap-hero-buttons {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 0.75rem;
                    }
                    .roadmap-hero-inner .roadmap-hero-buttons > div {
                        justify-content: center;
                        text-align: center;
                        padding: 0.875rem 1rem;
                        min-height: 48px;
                    }
                    .roadmap-phase-item {
                        gap: 1.5rem;
                    }
                    .roadmap-phase-item .flex-1 p {
                        padding: 1rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .roadmap-highlights {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.5rem;
                        margin-bottom: 1.5rem;
                    }
                    .roadmap-highlights .roadmap-highlight-icon {
                        width: 1.75rem;
                        height: 1.75rem;
                        border-radius: 0.5rem;
                        flex-shrink: 0;
                    }
                    .roadmap-highlights .roadmap-highlight-icon svg {
                        width: 10px;
                        height: 10px;
                    }
                    .roadmap-highlights .roadmap-highlight-text {
                        font-size: 0.6875rem;
                        line-height: 1.2;
                    }
                    .roadmap-highlights > div {
                        gap: 0.375rem;
                    }
                    .roadmap-phase-image {
                        overflow: visible;
                    }
                    .roadmap-phase-image .relative.z-10 {
                        border-width: 4px !important;
                        border-radius: 1.5rem !important;
                    }
                    .roadmap-phase-image .absolute.-top-10 {
                        width: 5rem;
                        height: 5rem;
                        top: -1rem;
                        right: -1rem;
                    }
                    .roadmap-phase-image .absolute.-bottom-12 {
                        width: 6rem;
                        height: 6rem;
                        bottom: -1.5rem;
                        left: -1rem;
                    }
                    .roadmap-phase-image .absolute.top-0.left-0.w-12,
                    .roadmap-phase-image .absolute.bottom-0.right-0.w-12 {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                    .roadmap-floating-badge {
                        bottom: 0.75rem !important;
                        left: 0.75rem !important;
                        right: 0.75rem !important;
                        padding: 0.75rem 1rem !important;
                        flex-direction: column;
                        gap: 0.5rem;
                        align-items: flex-start;
                    }
                    .roadmap-floating-badge > div:last-child {
                        width: 100%;
                        justify-content: flex-start;
                    }
                    .roadmap-floating-badge .w-12 {
                        width: 2.25rem;
                        height: 2.25rem;
                    }
                    .roadmap-floating-badge .w-12 svg {
                        width: 14px;
                        height: 14px;
                    }
                    .roadmap-cta-box {
                        padding: 1.5rem 1rem !important;
                        border-radius: 1.25rem !important;
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                    }
                }
                @media (max-width: 639px) {
                    .roadmap-hero-inner {
                        padding-top: 5.5rem !important;
                        padding-bottom: 4rem !important;
                    }
                    .roadmap-hero-inner h1 {
                        font-size: 1.75rem !important;
                        line-height: 1.2 !important;
                        margin-bottom: 1rem !important;
                    }
                    .roadmap-hero-inner p {
                        font-size: 0.9375rem !important;
                        padding-left: 1rem !important;
                        border-left-width: 3px !important;
                        margin-bottom: 1rem !important;
                    }
                    .roadmap-phase-item .flex.items-center.gap-4.mb-8 {
                        margin-bottom: 1rem !important;
                    }
                    .roadmap-phase-item h2 {
                        font-size: 1.125rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .roadmap-highlights {
                        gap: 0.375rem;
                    }
                    .roadmap-highlights .roadmap-highlight-text {
                        font-size: 0.625rem;
                    }
                    .roadmap-phase-image .relative.z-10 {
                        aspect-ratio: 4/3 !important;
                    }
                }
                @media (max-width: 374px) {
                    .roadmap-hero-inner h1 {
                        font-size: 1.5rem !important;
                    }
                    .roadmap-cta-box h2 {
                        font-size: 1.25rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Roadmap;
