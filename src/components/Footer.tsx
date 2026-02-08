import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="py-8 px-6 lg:px-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-white/40">
                    © 2026 Hemant Saini. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm text-white/40 items-center">
                    <a href="/about-hemant-saini/" className="hover:text-white transition-colors">About Hemant Saini</a>
                    <span>Apparotech Innovation</span>
                    <Link to="/blog" className="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                        Blog
                    </Link>
                </div>
            </div>
        </footer>
    );
};
