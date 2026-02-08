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
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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

    const navLinkClass = "text-sm text-white/50 hover:text-white transition-colors flex items-center";
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
            "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-between gap-4",
            "bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5",
            "pt-[calc(0.5rem+env(safe-area-inset-top,0px))]"
        )}>
            <Link to="/" className="text-base sm:text-lg font-semibold tracking-tight text-white shrink-0 min-w-0 truncate">Hemant Saini</Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks}
            </div>

            {/* Mobile menu */}
            <div className="flex md:hidden items-center gap-2 sm:gap-3 shrink-0">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <button
                            aria-label="Open menu"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors touch-manipulation"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[min(300px,85vw)] bg-[#0a0a0c] border-white/10 text-white [&>button]:text-white [&>button]:hover:text-white/80">
                        <SheetHeader className="border-b border-white/5 pb-6">
                            <SheetTitle className="text-white font-semibold">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 pt-6">
                            {navLinks}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn-primary w-full justify-center mt-2"
                            >
                                Book a call
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="btn-primary text-sm px-3 sm:px-4 py-2 touch-manipulation"
                >
                    Book a call
                </button>
            </div>

            {/* Desktop CTA */}
            <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:inline-flex btn-primary text-sm"
            >
                Book a call
            </button>
        </nav>
    );
};
