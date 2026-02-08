import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-12 border-t border-white/5 pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
                <div className="text-sm text-white/40 text-center sm:text-left order-2 sm:order-1">
                    © 2026 Hemant Saini. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/40 items-center order-1 sm:order-2">
                    <a href="/about-hemant-saini/" className="hover:text-white transition-colors min-h-[44px] flex items-center">About Hemant Saini</a>
                    <span className="hidden sm:inline">Apparotech Innovation</span>
                    <Link to="/blog" className="px-3 py-2 sm:py-1 text-xs bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white min-h-[44px] sm:min-h-0 flex items-center justify-center touch-manipulation">
                        Blog
                    </Link>
                    <Link to="/insights" className="px-3 py-2 sm:py-1 text-xs bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white min-h-[44px] sm:min-h-0 flex items-center justify-center touch-manipulation">
                        Business Insights
                    </Link>
                </div>
            </div>
        </footer>
    );
};
