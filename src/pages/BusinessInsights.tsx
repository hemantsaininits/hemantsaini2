
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { industryInsights } from '../data/industryInsights';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BusinessInsights = () => {
 return (
 <div className="relative bg-background text-foreground min-h-screen">
 <Header />

 <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
 <div className="max-w-3xl mb-16">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">Business Insights</h1>
 <p className="text-xl text-white/60 mb-8">
 Lessons learned from digital transformation across 10 diverse industries.
 No theory, just field-tested observations on what works and what fails.
 </p>
 <a
 href="/hemantsaini.pdf"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
 >
 <span>View Full Document</span>
 <ArrowRight size={16} />
 </a>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
 {industryInsights.map((insight) => (
 <Link
 key={insight.id}
 to={`/insights/${insight.slug}`}
 className="group bg-white border border-border hover:border-slate-200 p-8 rounded-2xl transition-all hover:bg-slate-50 hover:shadow-sm flex flex-col"
 >
 <h2 className="text-xl font-medium mb-3 group-hover:text-slate-900 transition-colors">
 {insight.title}
 </h2>
 <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
 {insight.description}
 </p>
 <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors mt-auto">
 <span>Read Insights</span>
 <ArrowRight size={16} />
 </div>
 </Link>
 ))}
 </div>
 </div>

 <Footer />
 </div>
 );
};

export default BusinessInsights;




