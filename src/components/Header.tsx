import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);

        // Delay scroll to allow mobile menu closing animation and scroll-lock release
        setTimeout(() => {
            if (location.pathname !== '/') {
                navigate(`/#${id}`);
                return;
            }
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const navLinkClass = "text-sm text-[#0CCEAF] hover:text-slate-600 transition-colors flex items-center font-medium uppercase tracking-wider";
    const navButtonClass = `${navLinkClass} w-full md:w-auto text-left md:inline`;
    const navLinks = (
        <>
            <a href="/about-hemant-saini/" onClick={() => setMobileMenuOpen(false)} className={`${navLinkClass} py-3 md:py-0 min-h-[44px] md:min-h-0`}>About</a>
            <button onClick={() => scrollToSection('experience')} className={`${navButtonClass} py-3 md:py-0 min-h-[44px] md:min-h-0`}>Experience</button>
            <button onClick={() => scrollToSection('philosophy')} className={`${navButtonClass} py-3 md:py-0 min-h-[44px] md:min-h-0`}>Philosophy</button>
            <button onClick={() => scrollToSection('partnership')} className={`${navButtonClass} py-3 md:py-0 min-h-[44px] md:min-h-0`}>Partnership</button>
            <button onClick={() => scrollToSection('contact')} className={`${navButtonClass} py-3 md:py-0 min-h-[44px] md:min-h-0`}>Contact</button>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className={`${navLinkClass} py-3 md:py-0 min-h-[44px] md:min-h-0`}>Blog</Link>
        </>
    );

    return (
        <nav className={cn(
            "absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-6 sm:py-8 flex items-center gap-6 lg:gap-10 transition-all duration-300",
            "bg-transparent border-none",
            "pt-[calc(1rem+env(safe-area-inset-top,0px))]"
        )}>
            {/* Mobile Logo - Only visible on small screens */}
            <div className="flex md:hidden items-center">
                <Link to="/">
                    <img
                        src="/logos/logo.png"
                        alt="Logo"
                        className="h-12 w-auto object-contain rounded-full"
                    />
                </Link>
            </div>

            {/* Desktop nav - All Aligned Left */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks}
            </div>

            {/* Desktop CTA - Moved to Left after nav */}
            <div className="hidden md:block">
                <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-2 border-2 bg-[#0CCEAF] text-white font-bold uppercase tracking-wider rounded-md hover:bg-[#0CCEAF] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(12,206,175,0.1)] text-xs"
                >
                    Book a call
                </button>
            </div>

            {/* Mobile menu trigger - Still on right for usability */}
            <div className="flex flex-1 md:hidden justify-end items-center gap-3 shrink-0">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <button
                            aria-label="Open menu"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors touch-manipulation"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[min(300px,85vw)] bg-white border-slate-200 text-slate-900 [&>button]:text-slate-900">
                        <SheetHeader className="border-b border-slate-100 pb-6">
                            <SheetTitle className="text-slate-900 font-semibold">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6 pt-6 px-6">
                            <div className="flex flex-col gap-2 pl-4 border-l border-slate-100">
                                {navLinks}
                            </div>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-6 py-2 bg-[#0CCEAF] text-white font-bold uppercase tracking-wider rounded-md hover:bg-[#0bb9a1] transition-all duration-300 shadow-[0_0_15px_rgba(12,206,175,0.2)] w-full justify-center"
                            >
                                Book a call
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};
