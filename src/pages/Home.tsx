
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail, Linkedin, Calendar, Minus } from 'lucide-react';
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
        <div className="relative bg-[#0a0a0c] text-white min-h-screen">
            <Header />

            {/* Section 1: Hero - Manifesto */}
            <section ref={heroRef} className="min-h-screen flex items-center pt-24 sm:pt-20 px-4 sm:px-6 lg:px-12">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="micro-label mb-8 hero-line opacity-0 mx-auto lg:mx-0">I Didn't Come Here to Sell Services</div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight mb-6 sm:mb-8">
                                <span className="hero-line block opacity-0">I came into this space</span>
                                <span className="hero-line block opacity-0">because I kept seeing</span>
                                <span className="hero-line block opacity-0">the same pattern:</span>
                            </h1>

                            {/* Mobile Profile Image */}
                            <div className="lg:hidden flex justify-center mb-10 hero-profile opacity-0">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border border-white/10">
                                        <img
                                            src="/upwork_profile_250x250.png"
                                            alt="Hemant Saini, Founder of Apparotech Innovation"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute -inset-4 rounded-full border border-white/5 pointer-events-none" />
                                    <div className="absolute -inset-8 rounded-full border border-white/[0.03] pointer-events-none" />
                                </div>
                            </div>

                            <p className="hero-subtitle text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-10 opacity-0 mx-auto lg:mx-0">
                                Businesses pouring time and money into technology that looked impressive on the surface but quietly failed where it actually mattered—<span className="text-white">adoption, operations, trust.</span>
                            </p>

                            <div className="hero-cta flex flex-col sm:flex-row gap-4 opacity-0 justify-center lg:justify-start">
                                <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto">
                                    Let's talk <ArrowUpRight className="w-4 h-4" />
                                </button>
                                <button onClick={() => {
                                    const element = document.getElementById('experience');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }} className="btn-outline w-full sm:w-auto">
                                    Read more
                                </button>
                            </div>
                        </div>

                        {/* Right Profile (Desktop Only) */}
                        <div className="hidden lg:flex hero-profile relative justify-end opacity-0">
                            <div className="relative">
                                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10">
                                    <img
                                        src="/upwork_profile_250x250.png"
                                        alt="Hemant Saini, Founder of Apparotech Innovation"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative ring */}
                                <div className="absolute -inset-4 rounded-full border border-white/5 pointer-events-none" />
                                <div className="absolute -inset-8 rounded-full border border-white/[0.03] pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: What Shaped How I Work */}
            <section ref={shapedRef} id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="micro-label mb-6 shaped-reveal opacity-0">What Shaped How I Work</div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-10 shaped-reveal opacity-0">
                        Over the years, I've worked with <span className="text-orange-500">12+ companies</span> across wildly different contexts.
                    </h2>

                    <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                        <p className="shaped-reveal opacity-0">
                            Travel platforms managing scale and coordination. Industrial firms with hundreds of staff navigating digital transformation. Law and finance practices where accuracy is non-negotiable. Wellness and retail brands driven by experience. Nonprofits operating under real constraints.
                        </p>

                        <p className="shaped-reveal opacity-0">
                            I've contributed to systems at <span className="text-white">CrossIndia Cruises Pvt. Ltd.</span>, where operational complexity is unavoidable. Advised <span className="text-white">Braintechh Engineers Pvt. Ltd.</span> on transformation that serves people, not disrupts them. Built precise, authority-driven digital presences for <span className="text-white">Abhay Bharadwaj Law Firm</span> and <span className="text-white">Nirmal CA Firm</span>, where trust is earned quietly and mistakes are expensive.
                        </p>

                        <p className="shaped-reveal opacity-0">
                            I've worked with real-estate platforms like <span className="text-white">TricityHome Solution</span>, retail and spiritual brands like <span className="text-white">Adhyatma</span> and <span className="text-white">Wardaa</span>, service businesses like <span className="text-white">Avenue Nails & Spa</span>, healthcare retail at <span className="text-white">Shreya Vision Care Pvt. Ltd.</span>, and nonprofits where efficiency directly affects impact.
                        </p>

                        <div className="pt-6 shaped-reveal opacity-0">
                            <p className="text-xl text-white font-medium">
                                What all of these taught me: Good systems aren't built by chasing trends—they're built by understanding reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 4: How I Think About Building */}
            <section ref={thinkRef} id="philosophy" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="micro-label mb-6 think-reveal opacity-0">How I Think About Building</div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-12 think-reveal opacity-0">
                        I don't believe in over-engineering, vanity features, or vague roadmaps.
                    </h2>

                    <div className="space-y-8">
                        <div className="think-reveal opacity-0">
                            <div className="flex items-start gap-4">
                                <Minus className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                                <p className="text-lg text-white/70 leading-relaxed">
                                    I believe in asking <span className="text-white">uncomfortable questions early.</span> Simplifying decisions. Designing systems that can survive real users, real pressure, and real growth.
                                </p>
                            </div>
                        </div>

                        <div className="think-reveal opacity-0">
                            <div className="flex items-start gap-4">
                                <Minus className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                                <p className="text-lg text-white/70 leading-relaxed">
                                    My approach blends <span className="text-white">technical judgment with market awareness</span>—because a product that can't be adopted, sold, or operated is just a well-designed liability.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/10">
                        <div className="micro-label mb-6 think-reveal opacity-0">How I Work</div>
                        <p className="text-xl text-white/80 leading-relaxed think-reveal opacity-0">
                            I usually work as a <span className="text-white">tech advisor, product thinker, and go-to-market partner</span>—not just someone who executes instructions. That means I'm involved in shaping direction, not just delivering outputs.
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed mt-6 think-reveal opacity-0">
                            Sometimes that includes saying no. Slowing things down. Removing features. Because clarity often creates more value than speed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 5: Who I Work Best With */}
            <section ref={partnerRef} id="partnership" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="micro-label mb-6 partner-reveal opacity-0">Who I Work Best With</div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-12 partner-reveal opacity-0">
                        Founders and teams who value:
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {[
                            { title: 'Honesty', subtitle: 'over hype' },
                            { title: 'Long-term thinking', subtitle: 'over shortcuts' },
                            { title: 'Execution', subtitle: 'that actually holds up after launch' },
                        ].map((item, i) => (
                            <div key={i} className="partner-reveal opacity-0">
                                <div className="text-2xl lg:text-3xl font-semibold text-white mb-1">{item.title}</div>
                                <div className="text-lg text-white/50">{item.subtitle}</div>
                            </div>
                        ))}
                    </div>

                    <div className="card-dark p-8 lg:p-10 partner-reveal opacity-0">
                        <p className="text-xl text-white/80 leading-relaxed">
                            If something doesn't create <span className="text-orange-500">trust</span>—for users, for teams, for the business—I don't consider it finished.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 6: Closing Statement */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
                        This Isn't About<br />
                        <span className="text-white/40">Building More Software</span>
                    </h2>
                    <p className="text-lg sm:text-2xl lg:text-3xl text-orange-500 font-medium">
                        It's about building systems that last.
                    </p>
                </div>
            </section>

            {/* Section 7: Let's Start With 0 */}
            <HorizontalScrollSection />

            {/* Section 8: Contact */}
            <section id="contact" ref={contactRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
                        {/* Left Info */}
                        <div>
                            <div className="micro-label mb-6 contact-reveal opacity-0">Get in Touch</div>
                            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight mb-6 contact-reveal opacity-0">
                                Let's talk about what you're building.
                            </h2>
                            <p className="text-lg text-white/60 mb-10 contact-reveal opacity-0">
                                I'll reply within 24 hours.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start sm:items-center gap-4 contact-reveal opacity-0">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <a href="mailto:hemant@apparotechinnovation.com" className="text-white/80 hover:text-white transition-colors break-all text-sm sm:text-base">
                                        hemant@apparotechinnovation.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 contact-reveal opacity-0">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <span className="text-white/80">Book a 30-min discovery call</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-10 contact-reveal opacity-0">
                                <a href="https://www.linkedin.com/in/hemant-saini-45359623a/" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="contact-reveal opacity-0">
                            <form className="card-dark p-6 sm:p-8 space-y-5">
                                <div>
                                    <label className="block text-sm text-white/50 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-white/30 border border-white/10 focus:border-orange-500/50 focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/50 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-white/30 border border-white/10 focus:border-orange-500/50 focus:outline-none transition-colors"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/50 mb-2">Company</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-white/30 border border-white/10 focus:border-orange-500/50 focus:outline-none transition-colors"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/50 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-white/30 border border-white/10 focus:border-orange-500/50 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <button type="submit" className="w-full btn-primary justify-center">
                                    Send message <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
