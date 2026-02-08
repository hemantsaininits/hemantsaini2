import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
            <Link to="/" className="text-lg font-semibold tracking-tight text-white">Hemant Saini</Link>
            <div className="hidden md:flex items-center gap-8">
                <a href="/about-hemant-saini/" className="text-sm text-white/50 hover:text-white transition-colors">About</a>
                <button onClick={() => scrollToSection('experience')} className="text-sm text-white/50 hover:text-white transition-colors">Experience</button>
                <button onClick={() => scrollToSection('philosophy')} className="text-sm text-white/50 hover:text-white transition-colors">Philosophy</button>
                <button onClick={() => scrollToSection('partnership')} className="text-sm text-white/50 hover:text-white transition-colors">Partnership</button>
                <button onClick={() => scrollToSection('contact')} className="text-sm text-white/50 hover:text-white transition-colors">Contact</button>
                <Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors">Blog</Link>
            </div>
            <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">
                Book a call
            </button>
        </nav>
    );
};
