
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail, Calendar, Minus, ArrowUp } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const shapedRef = useRef<HTMLDivElement>(null);
    const thinkRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const partnerRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance animation
            const heroTl = gsap.timeline({ delay: 0.3 });

            heroTl.fromTo('.hero-line',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
            )
                .fromTo('.hero-subtitle',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                    '-=0.4'
                )
                .fromTo('.hero-cta',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
                    '-=0.3'
                )
                .fromTo('.hero-profile',
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
                    '-=0.8'
                );

            // Section reveals
            const sections = [
                { ref: shapedRef, selector: '.shaped-' },
                { ref: thinkRef, selector: '.think-' },
                { ref: workRef, selector: '.work-' },
                { ref: partnerRef, selector: '.partner-' },
            ];

            sections.forEach(({ ref, selector }) => {
                if (ref.current) {
                    gsap.fromTo(`${selector}reveal`,
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: ref.current,
                                start: 'top 75%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }
            });

            // Contact section
            if (contactRef.current) {
                gsap.fromTo('.contact-reveal',
                    { y: 40, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: contactRef.current,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="relative bg-background text-foreground min-h-screen">
            <Header />

            {/* Section 1: Hero - Manifesto */}
            <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center bg-slate-50 overflow-hidden pt-10 sm:pt-12 lg:pt-0">
                <div className="w-full h-full flex flex-col lg:flex-row">
                    {/* Mobile Layout: Text → Photo → Text → Buttons */}
                    <div className="w-full lg:w-[55%] flex items-center px-4 sm:px-6 lg:px-12 lg:pl-24 lg:pr-10 py-2 sm:py-4 lg:py-0 relative z-20">
                        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 w-full">
                            {/* Text Above Photo (Mobile) */}
                            <div className="lg:hidden mb-4">
                                <div className="text-slate-600 text-xs sm:text-sm font-medium mb-1.5 hero-line opacity-0">
                                    Hello , I'm
                                </div>
                                <h1 className="text-2xl sm:text-3xl font-black leading-tight tracking-tighter mb-2 text-[#0CCEAF] uppercase italic hero-line opacity-0">
                                    Hemant Saini
                                </h1>
                                <div className="text-slate-900 text-base sm:text-lg font-bold hero-line opacity-0">
                                    Founder of Apparotech Innovation
                                </div>
                            </div>

                            {/* Circular Photo (Mobile - Center) */}
                            <div className="lg:hidden flex justify-center mb-4 hero-profile opacity-0">
                                <div className="relative">
                                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[3px] border-[#0CCEAF] shadow-xl ring-2 ring-[#0CCEAF]/20">
                                        <img
                                            src="/upwork_profile_250x250.png"
                                            alt="Hemant Saini"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Below Photo (Mobile) */}
                            <div className="lg:hidden space-y-3 mb-6">
                                <p className="text-slate-700 text-sm sm:text-base font-medium leading-snug hero-line opacity-0">
                                    I came into this space because I kept seeing the same pattern:
                                </p>
                                <p className="hero-subtitle text-xs sm:text-sm text-slate-500 leading-relaxed opacity-0">
                                    Businesses pouring time and money into technology that looked impressive on the surface but quietly failed where it actually mattered—<span className="text-slate-700 font-medium underline decoration-[#0CCEAF]">adoption, operations, trust.</span>
                                </p>
                            </div>

                            {/* Desktop Layout: Original Layout */}
                            <div className="hidden lg:block">
                                <div className="text-slate-600 text-sm sm:text-base font-medium mb-4 hero-line opacity-0">
                                    Hello , I'm
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tighter mb-6 text-[#0CCEAF] uppercase italic">
                                    <span className="hero-line block opacity-0">Hemant Saini</span>
                                </h1>

                                <div className="text-slate-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-10 hero-line opacity-0">
                                    Founder of Apparotech Innovation
                                </div>

                                <div className="space-y-6 max-w-xl mb-12 mx-auto lg:mx-0">
                                    <p className="text-slate-700 text-lg sm:text-xl font-medium leading-tight hero-line opacity-0">
                                        I came into this space because I kept seeing the same pattern:
                                    </p>

                                    <p className="hero-subtitle text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed opacity-0">
                                        Businesses pouring time and money into technology that looked impressive on the surface but quietly failed where it actually mattered—<span className="text-slate-700 font-medium underline decoration-[#0CCEAF]">adoption, operations, trust.</span>
                                    </p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="hero-cta flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start opacity-0">
                                <button
                                    onClick={scrollToContact}
                                    className="px-5 sm:px-7 py-2 sm:py-2.5 bg-[#0CCEAF] text-white font-bold uppercase tracking-wider rounded-md hover:bg-[#0bb9a1] transition-all duration-300 shadow-[0_0_15px_rgba(12,206,175,0.2)] text-xs sm:text-sm"
                                >
                                    Let's talk
                                </button>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('experience');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-5 sm:px-7 py-2 sm:py-2.5 border-2 border-[#0CCEAF] text-[#0CCEAF] font-bold uppercase tracking-wider rounded-md hover:bg-[#0CCEAF]/10 transition-all duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                                >
                                    Read more <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Slanted Background + Image Container (Desktop Only) */}
                    <div className="hidden lg:flex w-[45%] h-screen relative z-10 items-center justify-center hero-profile opacity-0">
                        <div className="absolute inset-0 bg-white overflow-hidden hero-slant">
                            {/* The Profile Image */}
                            <img
                                src="/upwork_profile_250x250.png"
                                alt="Hemant Saini"
                                className="w-full h-full object-cover object-top brightness-100 hover:grayscale-0 transition-all duration-1000 ease-out"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: What Shaped How I Work */}
            <section ref={shapedRef} id="experience" className="py-16 lg:py-40 px-6 sm:px-12 lg:px-24 border-t border-border bg-slate-50 relative overflow-hidden">
                {/* Visual Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
                    <img src="/images/capabilities_workspace.jpg" alt="Texture" className="w-full h-full object-cover" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="micro-label mb-8 shaped-reveal opacity-0 text-[#0CCEAF] text-center lg:text-left">What Shaped How I Work</div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                                    <div className="group relative overflow-hidden aspect-square shadow-xl shaped-reveal opacity-0 rounded-none border-2 border-[#0CCEAF]">
                                        <img src="/images/brain.png" alt="Industrial Tech" className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 lg:p-6">
                                            <p className="text-[#0CCEAF] text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5 lg:mb-1">Industrial</p>
                                            <h3 className="text-white text-xs lg:text-base font-semibold">Braintechh Engineers</h3>
                                        </div>
                                    </div>
                                    <div className="group relative overflow-hidden aspect-square shadow-xl shaped-reveal opacity-0 rounded-none border-2 border-[#0CCEAF]">
                                        <img src="/images/adhyatma.png" alt="Legal Presence" className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 lg:p-6">
                                            <p className="text-[#0CCEAF] text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5 lg:mb-1">Food</p>
                                            <h3 className="text-white text-xs lg:text-base font-semibold">QuickBite Qr</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3 sm:space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                                    <div className="group relative overflow-hidden aspect-square shadow-xl shaped-reveal opacity-0 rounded-none border-2 border-[#0CCEAF]">
                                        <img src="/images/crossindia.png" alt="Retail Experience" className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 lg:p-6">
                                            <p className="text-[#0CCEAF] text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5 lg:mb-1">Travel</p>
                                            <h3 className="text-white text-xs lg:text-base font-semibold">Crossindia Cruises</h3>
                                        </div>
                                    </div>
                                    <div className="group relative overflow-hidden aspect-square shadow-xl shaped-reveal opacity-0 rounded-none border-2 border-[#0CCEAF]">
                                        <img src="/images/abhay.png" alt="Strategy" className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 lg:p-6">
                                            <p className="text-[#0CCEAF] text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5 lg:mb-1">Legal</p>
                                            <h3 className="text-white text-xs lg:text-base font-semibold">Abhay Bharadwaj Firm</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12 shaped-reveal opacity-0 text-slate-900">
                                Over the years, I've worked with <span className="text-[#0CCEAF]">12+ companies</span> across wildly different contexts.
                            </h2>

                            <div className="grid grid-cols-2 lg:block gap-x-4 gap-y-8 lg:space-y-10 text-left">
                                <div className="shaped-reveal opacity-0 col-span-1">
                                    <div className="flex gap-2 lg:gap-4">
                                        <div className="mt-1 lg:mt-1.5 shrink-0"><Minus className="w-4 h-4 lg:w-5 lg:h-5 text-[#0CCEAF]" /></div>
                                        <p className="text-[10px] sm:text-xs lg:text-lg text-slate-600 leading-tight lg:leading-relaxed">
                                            Travel platforms managing scale and coordination. Industrial firms with hundreds of staff navigating digital transformation. Law and finance practices where accuracy is non-negotiable. Wellness and retail brands driven by experience. Nonprofits operating under real constraints.
                                        </p>
                                    </div>
                                </div>

                                <div className="shaped-reveal opacity-0 col-span-1">
                                    <div className="flex gap-2 lg:gap-4">
                                        <div className="mt-1 lg:mt-1.5 shrink-0"><Minus className="w-4 h-4 lg:w-5 lg:h-5 text-[#0CCEAF]" /></div>
                                        <p className="text-[10px] sm:text-xs lg:text-lg text-slate-600 leading-tight lg:leading-relaxed">
                                            I've contributed to systems at <span className="text-slate-900 font-semibold">CrossIndia Cruises Pvt. Ltd.</span>, where operational complexity is unavoidable. Advised <span className="text-slate-900 font-semibold">Braintechh Engineers Pvt. Ltd.</span> on transformation that serves people, not disrupts them. Built precise, authority-driven digital presences for <span className="text-slate-900 font-semibold">Abhay Bharadwaj Law Firm</span> and <span className="text-slate-900 font-semibold">Nirmal CA Firm</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="shaped-reveal opacity-0 col-span-2 lg:col-span-1 border-t border-slate-100 lg:border-none pt-6 lg:pt-0">
                                    <div className="flex gap-2 lg:gap-4">
                                        <div className="mt-1 lg:mt-1.5 shrink-0"><Minus className="w-4 h-4 lg:w-5 lg:h-5 text-[#0CCEAF]" /></div>
                                        <p className="text-[10px] sm:text-xs lg:text-lg text-slate-600 leading-tight lg:leading-relaxed">
                                            I've worked with real-estate platforms like <span className="text-slate-900 font-semibold">TricityHome Solution</span>, retail and spiritual brands like <span className="text-slate-900 font-semibold">Adhyatma</span> and <span className="text-slate-900 font-semibold">Wardaa</span>, service businesses like <span className="text-slate-900 font-semibold">Avenue Nails & Spa</span>, healthcare retail at <span className="text-slate-900 font-semibold">Shreya Vision Care Pvt. Ltd.</span>, and nonprofits where efficiency directly affects impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-16 pt-8 lg:pt-10 shaped-reveal opacity-0 border-t border-slate-100 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border-l-4 border-[#0CCEAF] text-center">
                            <p className="text-lg sm:text-2xl lg:text-3xl text-slate-900 font-medium italic leading-snug">
                                "What all of these taught me: Good systems aren't built by chasing trends—they're built by <span className="text-[#0CCEAF] not-italic">understanding reality.</span>"
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 4: How I Think About Building */}
            <section ref={thinkRef} id="philosophy" className="py-16 lg:py-32 px-6 sm:px-12 lg:px-24 border-t border-border bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="micro-label mb-10 lg:mb-16 think-reveal opacity-0 text-[#0CCEAF] text-center">How I Think About Building</div>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                        {/* Main Manifesto & Pillars (7 Columns) */}
                        <div className="lg:col-span-7 space-y-10 lg:space-y-16">
                            <div className="think-reveal opacity-0 text-center lg:text-left">
                                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                                    I don't believe in over-engineering, <span className="text-[#0CCEAF]">vanity features,</span> or vague roadmaps.
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4 lg:gap-10 pt-8 lg:pt-12 border-t border-slate-100">
                                <div className="think-reveal opacity-0 space-y-3 lg:space-y-6">
                                    <div className="w-8 lg:w-12 h-0.5 lg:h-1 bg-[#0CCEAF] mx-0" />
                                    <h3 className="text-xs lg:text-lg font-bold text-slate-900 uppercase tracking-wider text-left">Uncomfortable Clarity</h3>
                                    <p className="text-[10px] lg:text-base text-slate-600 leading-tight lg:leading-relaxed font-medium text-left">
                                        I believe in asking <span className="text-slate-900 lg:underline lg:decoration-[#0CCEAF]/30 lg:decoration-2">uncomfortable questions early.</span> Simplifying decisions. Designing systems that can survive real users, real pressure, and real growth.
                                    </p>
                                </div>
                                <div className="think-reveal opacity-0 space-y-3 lg:space-y-6">
                                    <div className="w-8 lg:w-12 h-0.5 lg:h-1 bg-[#0CCEAF] mx-0" />
                                    <h3 className="text-xs lg:text-lg font-bold text-slate-900 uppercase tracking-wider text-left">Market Awareness</h3>
                                    <p className="text-[10px] lg:text-base text-slate-600 leading-tight lg:leading-relaxed font-medium text-left">
                                        My approach blends <span className="text-slate-900 lg:underline lg:decoration-[#0CCEAF]/30 lg:decoration-2">technical judgment with market awareness</span>—because a product that can't be adopted, sold, or operated is just a well-designed liability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Process Sidebar (5 Columns) */}
                        <div className="lg:col-span-5 think-reveal opacity-0 self-start">
                            <div className="overflow-hidden shadow-2xl h-[200px] lg:h-[500px] group relative rounded-none">
                                <img src="/images/gtm_meeting.jpg" alt="Methodology" className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6 lg:p-10">
                                    <p className="text-white text-base lg:text-lg font-medium italic">"Execution is the only strategy that survives reality."</p>
                                </div>
                            </div>
                        </div>

                        {/* Integrated Partnership Footer (Full Width within Grid) */}
                        <div className="lg:col-span-12 think-reveal opacity-0 mt-4">
                            <div className="bg-slate-900 rounded-[1rem] lg:rounded-[2rem] p-6 lg:p-16 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-48 lg:w-96 h-48 lg:h-96 bg-[#0CCEAF]/10 blur-[40px] lg:blur-[100px] rounded-full -mr-24 lg:-mr-48 -mt-24 lg:-mt-48" />
                                <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                                    <div className="lg:col-span-7 text-center lg:text-left">
                                        <div className="micro-label text-[#0CCEAF] mb-3 lg:mb-8">How I Work</div>
                                        <p className="text-sm lg:text-2xl font-medium italic leading-relaxed">
                                            "I usually work as a <span className="text-[#0CCEAF] not-italic font-bold">tech advisor, product thinker, and go-to-market partner</span>—not just someone who executes instructions."
                                        </p>
                                    </div>
                                    <div className="lg:col-span-5 space-y-3 lg:space-y-6 lg:pl-12 lg:border-l border-white/10 text-center lg:text-left">
                                        <p className="text-[11px] lg:text-lg text-slate-400 leading-relaxed font-medium">
                                            That means I'm involved in shaping direction, not just delivering outputs. <span className="text-white underline decoration-[#0CCEAF]/30">Clarity often creates more value than speed.</span>
                                        </p>
                                        <p className="text-[11px] lg:text-lg text-slate-400 leading-relaxed font-medium">
                                            {/* <p className="text-base lg:text-lg text-slate-400 leading-relaxed font-medium lg:block"> */}
                                            Sometimes that includes saying no, slowing things down, or removing features to ensure <span className="text-white italic">long-term reliability.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Who I Work Best With */}
            <section ref={partnerRef} id="partnership" className="py-16 lg:py-24 px-6 sm:px-12 lg:px-24 border-t border-border bg-white relative overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-10 -left-10 text-[12rem] font-black text-slate-50/50 select-none leading-none pointer-events-none hidden lg:block">WHO</div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Editorial Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 lg:mb-14 gap-8">
                        <div className="max-w-2xl partner-reveal opacity-0 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                                <div className="h-0.5 w-12 bg-[#0CCEAF]" />
                                <div className="micro-label text-[#0CCEAF] tracking-[0.3em]">IDEAL PARTNERSHIP</div>
                            </div>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-0 lg:mb-14">
                                Founders and teams <br className="hidden sm:block" /> who value <span className="text-[#0CCEAF]">real results</span> over hype.
                            </h2>
                        </div>
                        <div className="max-w-sm partner-reveal opacity-0 hidden lg:block text-right">
                            <div className="flex items-center gap-3 justify-end mb-4">
                                <Minus className="w-5 h-5 text-[#0CCEAF]" />
                                <div className="micro-label text-[#0CCEAF]">THE PARTNERSHIP MANDATE</div>
                            </div>
                            <p className="text-sm sm:text-base text-slate-900 font-medium italic leading-relaxed mb-14">
                                "If something doesn't create <span className="text-[#0CCEAF] not-italic font-bold">trust</span>—for users, for teams, or for the business—I don't consider it finished."
                            </p>
                        </div>
                    </div>

                    {/* The Mosaic Stack */}
                    <div className="space-y-16 lg:space-y-48 mb-16 lg:mb-24">
                        <div className="relative flex flex-col lg:flex-row items-center">
                            <div className="w-full lg:w-7/12 partner-reveal opacity-0">
                                <div className="overflow-hidden shadow-2xl aspect-video relative group rounded-[1rem] border-r-2 lg:border-r-4 border-[#0CCEAF]">
                                    <img src="/images/capabilities_workspace.jpg" alt="Context" className="w-full h-full object-cover transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 lg:-ml-16 mt-[-2rem] lg:mt-0 px-4 lg:px-0 partner-reveal opacity-0 z-20">
                                <div className="bg-white p-6 lg:p-10 rounded-[1rem] shadow-2xl shadow-slate-200/60 border border-[#0CCEAF] relative group">
                                    <div className="absolute top-0 right-0 p-6 lg:p-8">
                                        <Minus className="w-6 h-6 lg:w-8 lg:h-8 text-[#0CCEAF] rotate-90" />
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 uppercase tracking-widest mb-3 lg:mb-4">Honesty</h3>
                                    <p className="text-base lg:text-lg text-slate-600 font-medium italic leading-relaxed mb-3 lg:mb-4">
                                        over hype
                                    </p>
                                    <div className="space-y-4 pt-4 border-t border-slate-50">
                                        <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">
                                            Growth happens when we stop ignoring the technical debt and start answering <span className="text-slate-900 font-semibold">uncomfortable questions.</span> I prioritize direct feedback because clarity is the fastest way to scale.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex flex-col lg:flex-row-reverse items-center">
                            <div className="w-full lg:w-7/12 partner-reveal opacity-0">
                                <div className="overflow-hidden shadow-2xl aspect-video relative group rounded-[1rem] border-l-2 lg:border-l-4 border-[#0CCEAF]">
                                    <img src="/images/build_craft.jpg" alt="Context" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 lg:-mr-20 mt-[-2rem] lg:mt-0 px-4 lg:px-0 partner-reveal opacity-0 z-20">
                                <div className="bg-slate-900 p-6 lg:p-10 rounded-[1rem] shadow-2xl relative overflow-hidden border-2 border-[#0CCEAF]">
                                    <div className="absolute top-0 left-0 w-0 h-full bg-[#0CCEAF]" />
                                    <h3 className="text-lg lg:text-xl font-bold text-[#0CCEAF] uppercase tracking-widest mb-3 lg:mb-4">Long-term thinking</h3>
                                    <p className="text-base lg:text-lg text-slate-300 font-medium italic leading-relaxed mb-3 lg:mb-4">
                                        over shortcuts
                                    </p>
                                    <p className="text-slate-400 text-xs lg:text-sm leading-relaxed mb-6">
                                        Building for "Version 10" while delivering "Version 1". I focus on creating <span className="text-white">resilient architectures</span> that don't need to be rewritten every six months.
                                    </p>
                                    <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/10 text-slate-500 text-[10px] lg:text-sm tracking-[0.2em] lg:tracking-widest uppercase font-bold text-center lg:text-left">
                                        Sustainability &gt; Speed
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 03 Execution - Centered Depth Card */}
                        <div className="max-w-4xl mx-auto partner-reveal opacity-0">
                            <div className="relative overflow-hidden shadow-2xl h-[320px] lg:aspect-[21/9] lg:h-auto group rounded-[1rem]">
                                <img src="/images/process_prototype.jpg" alt="Execution" className="w-full h-full object-cover transition-transform duration-[2000ms] lg:group-hover:scale-110 rounded-[1rem]" />
                                <div className="absolute inset-0 bg-slate-900/40 lg:group-hover:bg-slate-900/20 transition-all duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="bg-white p-5 lg:p-10 rounded-[1rem] shadow-2xl text-center max-w-[280px] sm:max-w-lg border border-slate-100 transform lg:group-hover:-translate-y-2 transition-transform duration-700">
                                        <div className="flex justify-center mb-4 lg:mb-8">
                                            <div className="w-10 lg:w-16 h-1 bg-[#0CCEAF]" />
                                        </div>
                                        <h3 className="text-base lg:text-xl font-bold text-slate-900 uppercase tracking-widest mb-3 lg:mb-6">Execution</h3>
                                        <p className="text-sm lg:text-lg text-slate-600 font-medium italic leading-relaxed mb-3 lg:mb-6">
                                            that actually holds up after launch
                                        </p>
                                        <p className="text-slate-500 text-[10px] lg:text-sm leading-relaxed">
                                            Strategy is useless without the ability to ship. I close the gap between <span className="text-slate-900 font-semibold">big ideas</span> and <span className="text-slate-900 font-semibold">stable production environments.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Closing Statement */}
            <section className="py-16 lg:py-40 px-6 sm:px-12 lg:px-24 border-t border-border bg-[#FBFBFB] relative overflow-hidden group/section">
                {/* Visual Background Depth */}
                <div className="absolute inset-0 opacity-[0.1] lg:opacity-[0.15] grayscale pointer-events-none transition-all duration-1000 group-hover/section:opacity-10 group-hover/section:grayscale-0">
                    <img src="/images/build_craft.jpg" alt="Background" className="w-full h-full object-cover" />
                </div>
                {/* Architectural Depth Lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-slate-200/50 hidden lg:block" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-slate-200/50 hidden lg:block" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center">
                        {/* Context Header */}
                        <div className="lg:col-span-7 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-10">
                                <div className="h-0.5 w-12 bg-[#0CCEAF]" />
                                <div className="micro-label text-[#0CCEAF] tracking-[0.3em]">THE STRATEGIC VERDICT</div>
                            </div>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-slate-900">
                                This Isn't About<br />
                                <span className="text-slate-400">Building More Software.</span>
                            </h2>
                        </div>

                        {/* Core Philosophy Card */}
                        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                            <div className="bg-white p-7 lg:p-14 rounded-[1rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative group">
                                <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-[#0CCEAF] flex items-center justify-center shadow-xl shadow-[#0CCEAF]/20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <Minus className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
                                </div>
                                <p className="text-base sm:text-2xl lg:text-3xl text-slate-900 font-medium italic leading-tight text-center lg:text-left">
                                    "It's about building <span className="text-[#0CCEAF] not-italic font-bold underline decoration-slate-900/10">systems that last.</span>"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Let's Start With 0 */}
            <HorizontalScrollSection />

            {/* Section 8: Contact */}
            <section id="contact" ref={contactRef} className="py-16 lg:py-40 px-6 sm:px-12 lg:px-24 bg-slate-950 relative overflow-hidden">
                {/* Visual Background Accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0CCEAF]/5 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#0CCEAF]/5 blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        {/* Left Info - Tactical Details */}
                        <div className="lg:col-span-5 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-10 contact-reveal opacity-0">
                                <div className="h-0.5 w-12 bg-[#0CCEAF]" />
                                <div className="micro-label text-[#0CCEAF] tracking-[0.4em]">INITIATE CONTACT</div>
                            </div>

                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6 lg:mb-8 contact-reveal opacity-0">
                                Let’s engineer <br className="hidden sm:block" /> your <span className="text-[#0CCEAF]">next evolution.</span>
                            </h2>

                            <p className="text-base lg:text-lg text-slate-400 mb-10 lg:mb-12 max-w-md mx-auto lg:mx-0 contact-reveal opacity-0">
                                Currently accepting select partnerships for 2026. Reach out to start a technical discovery.
                            </p>

                            <div className="grid grid-cols-2 lg:block lg:space-y-6 gap-3 contact-reveal opacity-0">
                                <div className="group flex flex-col lg:flex-row items-center gap-2 lg:gap-6 p-3 lg:p-4 hover:border-[#0CCEAF]/30 transition-all duration-500">
                                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-[#0CCEAF]/10 flex items-center justify-center text-[#0CCEAF] group-hover:scale-110 transition-transform">
                                        <Mail strokeWidth={1.5} size={18} className="lg:hidden" />
                                        <Mail strokeWidth={1.5} size={24} className="hidden lg:block" />
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <div className="text-[9px] lg:text-[10px] font-black tracking-widest text-slate-500 uppercase mb-0.5 lg:mb-1">Direct Email</div>
                                        <a href="mailto:hemant@apparotechinnovation.com" className="text-[10px] lg:text-base text-white hover:text-[#0CCEAF] transition-colors font-medium break-all">
                                            hemant@apparotechinnovation.com
                                        </a>
                                    </div>
                                </div>

                                <div className="group flex flex-col lg:flex-row items-center gap-2 lg:gap-6 p-3 lg:p-4 hover:border-[#0CCEAF]/30 transition-all duration-500">
                                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-[#0CCEAF]/10 flex items-center justify-center text-[#0CCEAF] group-hover:scale-110 transition-transform">
                                        <Calendar strokeWidth={1.5} size={18} className="lg:hidden" />
                                        <Calendar strokeWidth={1.5} size={24} className="hidden lg:block" />
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <div className="text-[9px] lg:text-[10px] font-black tracking-widest text-slate-500 uppercase mb-0.5 lg:mb-1">Office Hours</div>
                                        <span className="text-[10px] lg:text-base text-white font-medium">Book discovery</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form - Command Console */}
                        <div className="lg:col-span-7 contact-reveal opacity-0 mt-12 lg:mt-0">
                            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 lg:p-14 rounded-[1rem] shadow-2xl">
                                <form className="space-y-6 lg:space-y-8">
                                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-white/5 rounded-xl lg:rounded-2xl text-white placeholder:text-slate-600 border border-white/10 focus:border-[#0CCEAF]/50 focus:outline-none transition-all text-sm"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-1">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-white/5 rounded-xl lg:rounded-2xl text-white placeholder:text-slate-600 border border-white/10 focus:border-[#0CCEAF]/50 focus:outline-none transition-all text-sm"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-1">Company</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-white/5 rounded-xl lg:rounded-2xl text-white placeholder:text-slate-600 border border-white/10 focus:border-[#0CCEAF]/50 focus:outline-none transition-all text-sm"
                                            placeholder="Your organization"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-1">Message</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-white/5 rounded-xl lg:rounded-2xl text-white placeholder:text-slate-600 border border-white/10 focus:border-[#0CCEAF]/50 focus:outline-none transition-all resize-none text-sm"
                                            placeholder="Tell me about your project context..."
                                        />
                                    </div>

                                    <button type="submit" className="w-full py-4 lg:py-5 bg-[#0CCEAF] hover:bg-[#08b69e] text-slate-950 font-bold rounded-xl lg:rounded-2xl shadow-xl shadow-[#0CCEAF]/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] text-sm lg:text-base uppercase tracking-wider">
                                        SEND MESSAGE <ArrowUpRight size={18} className="lg:w-5 lg:h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-[100] p-3 lg:p-4 bg-[#0CCEAF] hover:bg-[#08b69e] text-slate-950 rounded-full shadow-[0_0_20px_rgba(12,206,175,0.3)] transition-all duration-500 ease-in-out transform hover:scale-110 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} className="lg:w-6 lg:h-6" strokeWidth={2.5} />
            </button>
        </div>
    );
};




