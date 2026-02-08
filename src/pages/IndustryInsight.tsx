
import { useParams, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { industryInsights } from '../data/industryInsights';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustryInsight = () => {
    const { slug } = useParams<{ slug: string }>();
    const insight = industryInsights.find(i => i.slug === slug);

    if (!insight) {
        return <Navigate to="/insights" replace />;
    }

    return (
        <div className="relative bg-[#0a0a0c] text-white min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
                <Link to="/insights" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm">
                    <ArrowLeft size={16} />
                    <span>Back to Insights</span>
                </Link>

                <h1 className="text-3xl sm:text-5xl font-semibold mb-6">{insight.title}</h1>
                <p className="text-xl text-white/60 mb-12 border-l-2 border-orange-500 pl-6 py-1">
                    {insight.description}
                </p>

                <div
                    className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6 [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-white [&>h3]:mt-12 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mb-6"
                    dangerouslySetInnerHTML={{ __html: insight.content as string }}
                />

                <div className="mt-20 pt-8 border-t border-white/10">
                    <h3 className="text-white font-medium mb-4">Interested in discussing this further?</h3>
                    <p className="text-white/60 mb-6">
                        I help founders and teams navigate these specific challenges.
                    </p>
                    <a
                        href="mailto:hemant@apparotechinnovation.com"
                        className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default IndustryInsight;
