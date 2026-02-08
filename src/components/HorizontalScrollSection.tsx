
import useEmblaCarousel from 'embla-carousel-react';
import { useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        id: 1,
        step: "01",
        title: "10 Absolute Essentials Every Business Owner NEEDS",
        description: "Before growth, before scale, these are the non-negotiables that keep the lights on and the engine running.",
    },
    {
        id: 2,
        step: "02",
        title: "10 Essential Next Steps After Your Business Foundation is Built",
        description: "You have stability. Now, how do you build momentum without breaking what's already working?",
    },
    {
        id: 3,
        step: "03",
        title: "10 Strategic Moves After Systems Are Running",
        description: "Optimization, expansion, and ensuring your systems can handle the weight of your ambition.",
    },
];

export const HorizontalScrollSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.scroll-card-reveal',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
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
        <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/5 bg-[#0a0a0c]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 scroll-card-reveal opacity-0">
                    <div className="max-w-2xl">
                        <div className="micro-label mb-6">The Roadmap</div>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                            Let's Start With <span className="text-orange-500">0</span>
                        </h2>
                    </div>

                    <div className="flex gap-4 mt-8 md:mt-0 hidden sm:flex">
                        <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-0 lg:px-0 scroll-card-reveal opacity-0" ref={emblaRef}>
                    <div className="flex gap-4 sm:gap-6">
                        {cards.map((card) => (
                            <div key={card.id} className="flex-[0_0_84%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0">
                                {card.id === 1 ? (
                                    <Link to="/essentials" className="h-full block">
                                        <div className="h-full bg-white/5 border border-white/5 p-6 sm:p-8 rounded-2xl hover:border-white/10 transition-colors flex flex-col group cursor-pointer hover:bg-white/10 touch-manipulation">
                                            <div className="text-4xl font-bold text-white/10 mb-6 group-hover:text-orange-500/20 transition-colors">{card.step}</div>
                                            <h3 className="text-xl font-semibold mb-4 leading-snug">{card.title}</h3>
                                            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                                                {card.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                                                <span>Read Guide</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </Link>
                                ) : card.id === 2 ? (
                                    <Link to="/next-steps" className="h-full block">
                                        <div className="h-full bg-white/5 border border-white/5 p-6 sm:p-8 rounded-2xl hover:border-white/10 transition-colors flex flex-col group cursor-pointer hover:bg-white/10 touch-manipulation">
                                            <div className="text-4xl font-bold text-white/10 mb-6 group-hover:text-orange-500/20 transition-colors">{card.step}</div>
                                            <h3 className="text-xl font-semibold mb-4 leading-snug">{card.title}</h3>
                                            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                                                {card.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                                                <span>Read Guide</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <Link to="/strategic-moves" className="h-full block">
                                        <div className="h-full bg-white/5 border border-white/5 p-6 sm:p-8 rounded-2xl hover:border-white/10 transition-colors flex flex-col group cursor-pointer hover:bg-white/10 touch-manipulation">
                                            <div className="text-4xl font-bold text-white/10 mb-6 group-hover:text-orange-500/20 transition-colors">{card.step}</div>
                                            <h3 className="text-xl font-semibold mb-4 leading-snug">{card.title}</h3>
                                            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                                                {card.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                                                <span>Read Guide</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
