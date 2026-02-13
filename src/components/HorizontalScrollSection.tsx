import useEmblaCarousel from 'embla-carousel-react';
import { useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Minus, Target, BarChart3, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        id: 1,
        icon: Target,
        label: "PHASE 01 / CORE",
        title: "10 Absolute Essentials Every Business Owner NEEDS",
        description: "Before growth, before scale, these are the non-negotiables that keep the lights on and the engine running.",
        path: "/essentials/detail"
    },
    {
        id: 2,
        icon: BarChart3,
        label: "PHASE 02 / MOMENTUM",
        title: "10 Essential Next Steps After Your Foundation is Built",
        description: "You have stability. Now, how do you build momentum without breaking what's already working?",
        path: "/next-steps"
    },
    {
        id: 3,
        icon: Rocket,
        label: "PHASE 03 / SCALE",
        title: "10 Strategic Moves After Systems Are Running",
        description: "Optimization, expansion, and ensuring your systems can handle the weight of your ambition.",
        path: "/strategic-moves"
    },
];

export const HorizontalScrollSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false, skipSnaps: false });
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.blueprint-reveal',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section ref={sectionRef} className="pt-16 lg:pt-40 pb-12 lg:pb-24 px-6 sm:px-12 lg:px-24 border-t border-border bg-white relative overflow-hidden">
            {/* Background Structural Grid Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-slate-50 hidden lg:block" />
            <div className="absolute top-0 left-1/4 w-px h-full bg-slate-50 hidden lg:block" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-slate-50 hidden lg:block" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Tactical Header */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 lg:mb-32 gap-10 lg:gap-12">
                    <div className="max-w-3xl blueprint-reveal opacity-0 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <div className="h-0.5 w-12 bg-[#0CCEAF]" />
                            <div className="micro-label text-[#0CCEAF] tracking-[0.4em]">THE STRATEGIC PROGRESSION</div>
                        </div>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                            Engineering Growth <br className="hidden sm:block" />
                            From <span className="text-[#0CCEAF]">Phase Zero.</span>
                        </h2>
                    </div>

                    <div className="flex gap-3 lg:gap-4 blueprint-reveal opacity-0">
                        <button onClick={scrollPrev} className="group p-3 lg:p-4 bg-slate-50 hover:bg-[#0CCEAF] rounded-xl lg:rounded-2xl transition-all duration-300">
                            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-white" />
                        </button>
                        <button onClick={scrollNext} className="group p-3 lg:p-4 bg-slate-50 hover:bg-[#0CCEAF] rounded-xl lg:rounded-2xl transition-all duration-300">
                            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-white" />
                        </button>
                    </div>
                </div>

                {/* The Blueprint Slider */}
                <div className="overflow-hidden -mx-6 px-6 lg:-mx-0 lg:px-0" ref={emblaRef}>
                    <div className="flex gap-6 lg:gap-8">
                        {cards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.id} className="flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_40%] min-w-0 blueprint-reveal opacity-0">
                                    <Link to={card.path} className="block h-full group">
                                        <div className="h-full bg-white border-2 border-[#0CCEAF]/30 p-5 lg:p-8 rounded-[1rem] shadow-2xl shadow-slate-200/50 -translate-y-1 relative overflow-hidden transition-all duration-500 lg:group-hover:-translate-y-2">
                                            {/* Corner Markers */}
                                            <div className="absolute top-5 right-5 flex gap-1 transform rotate-90 opacity-100 transition-opacity">
                                                <div className="w-0.5 lg:w-1 h-2 lg:h-3 bg-[#0CCEAF]" />
                                                <div className="w-0.5 lg:w-1 h-0.5 lg:h-1 bg-[#0CCEAF]" />
                                            </div>

                                            <div className="relative z-10 h-full flex flex-col">
                                                <div className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-6">
                                                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#0CCEAF]/10 flex items-center justify-center text-[#0CCEAF] transition-all duration-500">
                                                        <Icon strokeWidth={1.5} size={18} className="lg:w-5 lg:h-5" />
                                                    </div>
                                                    <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-[#0CCEAF] uppercase">{card.label}</span>
                                                </div>

                                                <h3 className="text-base lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900 leading-tight">
                                                    {card.title}
                                                </h3>

                                                <p className="text-slate-500 leading-relaxed mb-5 lg:mb-6 text-[10px] sm:text-sm lg:text-base flex-grow">
                                                    {card.description}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                                    <div className="flex items-center gap-3 text-xs lg:text-sm font-bold text-[#0CCEAF] transition-colors">
                                                        <span className="tracking-widest uppercase text-[9px] lg:text-[10px]">Read Guide</span>
                                                        <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-2" />
                                                    </div>
                                                    <Minus className="w-5 h-5 lg:w-6 lg:h-6 text-[#0CCEAF] opacity-100 transform rotate-90 transition-all duration-500 translate-x-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* View More Button */}
                <div className="mt-16 lg:mt-24 flex justify-center blueprint-reveal opacity-0">
                    <Link
                        to="/essentials"
                        className="group relative flex items-center gap-4 px-10 py-5 bg-[#0CCEAF] hover:bg-slate-900 text-white rounded-xl transition-all duration-500 shadow-2xl hover:shadow-[#0CCEAF]/20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] relative z-10">Explore More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 relative z-10" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
