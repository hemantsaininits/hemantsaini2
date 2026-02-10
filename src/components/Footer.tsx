import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-12 border-t border-border pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
                <div className="text-sm text-muted-foreground text-center sm:text-left order-2 sm:order-1">
                    © 2026 Hemant Saini. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-foreground/60 items-center order-1 sm:order-2">
                    <a href="/about-hemant-saini/" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">About Hemant Saini</a>
                    <span className="hidden lg:inline text-slate-300">|</span>
                    <span className="hidden sm:inline">Apparotech Innovation</span>
                    <div className="flex items-center gap-4">
                        <Link to="/blog" className="px-4 py-2 text-xs bg-slate-50 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hover:text-slate-900 flex items-center justify-center">
                            Blog
                        </Link>
                        <Link to="/insights" className="px-4 py-2 text-xs bg-slate-50 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hover:text-slate-900 flex items-center justify-center">
                            Business Insights
                        </Link>
                        <a href="https://www.linkedin.com/in/hemant-saini-45359623a/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-[#0CCEAF] transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
