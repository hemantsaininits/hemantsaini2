
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
    ArrowLeft,
    FileText,
    FileSignature,
    Landmark,
    Calculator,
    Building2,
    Receipt,
    ScrollText,
    ShieldCheck,
    Award,
    Coins,
    Tags
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessEssentials = () => {
    const essentials = [
        {
            icon: <FileSignature className="text-orange-500" size={32} />,
            title: "1. Founder Agreement",
            subtitle: "(Even If You're Flying Solo)",
            content: (
                <>
                    <p className="mb-4"><strong>The Myth:</strong> "I'm the only founder. Why would I need an agreement with myself?"</p>
                    <p className="mb-4"><strong>The Reality:</strong> Today's solo founder is tomorrow's partnership disaster waiting to happen.</p>
                    <p className="mb-4 text-white/70">
                        Here's what happens without a founder agreement: Six months in, your college friend joins as a "co-founder" with a handshake deal. Fast forward 18 months—you've built something valuable, and suddenly there's a dispute about equity. Without a written agreement, you're stuck in a legal quagmire.
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Must Include:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-white/70">
                            <li>Equity distribution and vesting schedules</li>
                            <li>Roles and responsibilities</li>
                            <li>Decision-making processes</li>
                            <li>Exit mechanisms & IP ownership</li>
                        </ul>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Get a basic founder agreement drafted. Many startup-friendly lawyers offer templates for ₹10,000-25,000.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Landmark className="text-orange-500" size={32} />,
            title: "2. Separate Business Bank Account",
            subtitle: "The Line You Cannot Cross",
            content: (
                <>
                    <p className="mb-4">
                        Walk into any CA's office and ask them about their biggest client headaches. The answer will be: business owners who treat their current account like a personal ATM.
                    </p>
                    <p className="mb-4 text-white/70">
                        Nightmare scenario: Revenue flows through your personal savings. You pay vendors and buy groceries from the same pot. Then comes the income tax scrutiny.
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Open a current account in your business name immediately. HDFC, ICICI, and Axis have startup-specific programs.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Calculator className="text-orange-500" size={32} />,
            title: "3. Basic Accounting System",
            subtitle: "(Excel Is Not Your Friend)",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        There's a special place in entrepreneurial hell reserved for business owners who track finances in Excel. Proper software gives you automatic reconciliation, real-time cash flow visibility, and easy GST filing.
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Top Contenders:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-white/70">
                            <li><strong>Zoho Books:</strong> Affordable, GST-compliant (starts at ₹249/mo).</li>
                            <li><strong>Tally:</strong> The gold standard in India.</li>
                            <li><strong>QuickBooks:</strong> Great international option.</li>
                        </ul>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Choose one system this week. Link your bank account and start logging every transaction.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Building2 className="text-orange-500" size={32} />,
            title: "4. Legal Entity Registration",
            subtitle: "Stop Operating in the Shadows",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        Operating without proper registration is like driving without a license. It works until it doesn't.
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Decision Framework:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-white/70">
                            <li><strong>MSME/Proprietorship:</strong> Solo consultants, low cost, no liability protection.</li>
                            <li><strong>Private Limited:</strong> Startups seeking funding, scalable, high compliance.</li>
                            <li><strong>LLP:</strong> Professional services, limited liability, moderate compliance.</li>
                        </ul>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Assess where you want to be in 3 years and choose the entity that supports that vision.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Receipt className="text-orange-500" size={32} />,
            title: "5. GST Registration",
            subtitle: "The Compliance You Can't Ignore",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        GST isn't optional for B2B. Large clients won't work with non-GST vendors because they need input credit. No GST number = no business.
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> If you're targeting business clients, start GST registration now. Budget ₹15k-25k for a good CA.</p>
                    </div>
                </>
            )
        },
        {
            icon: <ScrollText className="text-orange-500" size={32} />,
            title: "6. Contracts & Service Agreements",
            subtitle: "Your First Line of Defense",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        "We had a verbal understanding" is a recipe for disaster. Contracts protect relationships and bank accounts.
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Must Include:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-white/70">
                            <li>Scope of Work & Timelines</li>
                            <li>Payment Terms</li>
                            <li>Revision Policy</li>
                            <li>Termination Clauses & IP Ownership</li>
                        </ul>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Create templates for common services. Have a lawyer review them once, then use them forever.</p>
                    </div>
                </>
            )
        },
        {
            icon: <ShieldCheck className="text-orange-500" size={32} />,
            title: "7. Professional Liability Insurance",
            subtitle: "The Safety Net",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        Insurance is cheaper than bankruptcy. One lawsuit can wipe you out. Professional indemnity insurance typically costs ₹15k-50k annually—a small price for survival.
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Talk to a commercial broker and get quotes. Budget it as a non-negotiable expense.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Award className="text-orange-500" size={32} />,
            title: "8. Trademark Your Brand Name",
            subtitle: "Protect Your Asset",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        Using a name doesn't give you ownership; registration does. Imagine building a brand for years only to receive a legal notice to stop using it.
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Do a preliminary trademark search. If available, apply immediately.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Coins className="text-orange-500" size={32} />,
            title: "9. Emergency Cash Reserve",
            subtitle: "Business Survival Fund",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        Cash flow kills more businesses than bad products. You need 3-6 months of operating costs in liquid cash—not inventory, not pending invoices.
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Calculate 3 months of fixed costs. Open a separate savings account and set up automatic transfers.</p>
                    </div>
                </>
            )
        },
        {
            icon: <Tags className="text-orange-500" size={32} />,
            title: "10. Clear Pricing & Payment Terms",
            subtitle: "Stop Leaving Money on the Table",
            content: (
                <>
                    <p className="mb-4 text-white/70">
                        "Well, it depends..." costs you money. Confident pricing builds trust.
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Clarity Framework:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-white/70">
                            <li>Know your costs + margin.</li>
                            <li>Have a standard rate card.</li>
                            <li>State prices confidently.</li>
                        </ul>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                        <p className="text-sm"><strong>Action Step:</strong> Create a simple pricing document this week. Practice saying numbers out loud.</p>
                    </div>
                </>
            )
        }
    ];

    return (
        <div className="relative bg-[#0a0a0c] text-white min-h-screen font-sans selection:bg-orange-500/30">
            <Header />

            {/* Hero Section */}
            <div className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    10 Non-Negotiables Every Business Owner Must Have
                </h1>
                <p className="text-xl md:text-2xl text-orange-500 mb-8 border-l-4 border-orange-500 pl-6 py-2 font-medium">
                    The Foundation That Separates Survivors from Failures
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-16">
                    <a
                        href="/hemantsainipov2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20"
                    >
                        <FileText size={20} />
                        <span>View PDF Version</span>
                    </a>
                    <span className="text-white/40 text-sm">Read offline or share with your team</span>
                </div>

                <div className="prose prose-lg prose-invert max-w-none text-white/80 leading-relaxed mb-16">
                    <p className="text-xl leading-relaxed text-white/90">
                        Starting a business in India is exciting. But here's the brutal truth most entrepreneurs discover too late: <span className="text-orange-400 font-semibold">excitement doesn't pay bills</span>, and passion doesn't protect you from legal nightmares.
                    </p>
                    <p>
                        After working with hundreds of startups and MSMEs, a clear pattern emerges. The businesses that scale get the boring stuff right from day one. Here are the 10 non-negotiables.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-8 md:gap-12">
                    {essentials.map((item, index) => (
                        <div key={index} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="bg-white/5 p-4 rounded-full w-fit h-fit shrink-0">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h2>
                                    {item.subtitle && <p className="text-lg text-orange-400/80 mb-6 font-medium">{item.subtitle}</p>}
                                    <div className="text-lg text-white/80 leading-relaxed space-y-4">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Section */}
                <div className="mt-20 bg-gradient-to-br from-orange-900/40 to-black border border-orange-500/30 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">The Pattern Most Entrepreneurs Miss</h3>
                    <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                        Notice what's absent? Growth hacking, viral marketing, AI tools. Those matter, but only after foundations are set. Building without these 10 items is like building a palace on sand.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left mb-12">
                        {[
                            { week: "Week 1", focus: "Legal Structure" },
                            { week: "Week 2", focus: "Financial Systems" },
                            { week: "Week 3", focus: "Compliance" },
                            { week: "Week 4", focus: "Commercial Clarity" }
                        ].map((week, i) => (
                            <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5">
                                <div className="text-orange-500 font-bold mb-1">{week.week}</div>
                                <div className="text-sm text-white/60">{week.focus}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <p className="text-white mb-6 font-medium">Need help implementing these foundations? I help founders navigate this transition.</p>
                        <a
                            href="mailto:hemant@apparotechinnovation.com"
                            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BusinessEssentials;
