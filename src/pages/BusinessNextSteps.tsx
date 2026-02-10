
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
 ArrowLeft,
 FileText,
 Target,
 Magnet,
 ClipboardList,
 Zap,
 Users,
 Layers,
 Share2,
 BookOpen,
 BarChart2,
 UserPlus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessNextSteps = () => {
 const steps = [
 {
 icon: <Target className="text-slate-900" size={32} />,
 title:"1. Define Your Ideal Customer Profile (ICP)",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Most Indian businesses fail because they try to serve everyone."Saying yes to everyone" dilutes your focus.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">ICP Framework:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li><strong>Industry Vertical:</strong> Where do you have proof of results?</li>
 <li><strong>Company Size:</strong> 10-50 employees? Large enterprise?</li>
 <li><strong>Decision-Maker:</strong> Founder? Ops Head?</li>
 <li><strong>Pain Points:</strong> Specific problems they face.</li>
 </ul>
 </div>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Write down your ideal client profile with brutal specificity today.</p>
 </div>
 </>
 )
 },
 {
 icon: <Magnet className="text-slate-900" size={32} />,
 title:"2. Build a Simple Lead Generation System",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Revenue inconsistency kills startups. If you rely on random referrals, you have a hobby, not a business.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Pick ONE System:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li><strong>LinkedIn Outreach:</strong> 50 personalized requests weekly.</li>
 <li><strong>SEO Content:</strong> Solve specific problems for your ICP.</li>
 <li><strong>Systematic Referrals:</strong> Incentivize existing clients.</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <ClipboardList className="text-slate-900" size={32} />,
 title:"3. Create Standard Operating Procedures (SOPs)",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Could your business run for two weeks without you? If no, you have an exhausting job.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Start Here:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li>Client Onboarding Checklist</li>
 <li>Project Delivery Steps</li>
 <li>Invoicing & Follow-up</li>
 </ul>
 </div>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Document one core process this week using Loom or Google Docs.</p>
 </div>
 </>
 )
 },
 {
 icon: <Zap className="text-slate-900" size={32} />,
 title:"4. Automated Invoicing and Follow-up",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Chasing payments is soul-crushing. Automation reduces payment time significantly.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">The Setup:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li><strong>Tools:</strong> Zoho Invoice, QuickBooks, or Razorpay.</li>
 <li><strong>Sequence:</strong> Auto-emails 7 days before, on due date, and overdue reminders.</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <Users className="text-slate-900" size={32} />,
 title:"5. Build a Basic CRM",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Stop managing relationships in your head. Opportunities slip through cracks without a system.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Use HubSpot (free) or a Google Sheet. Log every conversation and set next follow-up dates.</p>
 </div>
 </>
 )
 },
 {
 icon: <Layers className="text-slate-900" size={32} />,
 title:"6. Clear Service Packages & Tiers",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Custom quoting every project creates chaos. Tiered pricing makes decision-making easier for clients.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">3-Tier Framework:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li><strong>Starter:</strong> Entry point, core deliverables.</li>
 <li><strong>Growth:</strong> Ideal fit, best value.</li>
 <li><strong>Premium:</strong> High-touch, priority support.</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <Share2 className="text-slate-900" size={32} />,
 title:"7. Create a Referral Program",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Systematize word-of-mouth. Clients won't refer unless you make it easy and rewarding.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Create a forwardable email template and offer ₹5k-15k credits for successful referrals.</p>
 </div>
 </>
 )
 },
 {
 icon: <BookOpen className="text-slate-900" size={32} />,
 title:"8. Build Core Content Assets",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Content is pre-selling. It builds trust before the first call.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Priority Assets:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li>3 Detailed Case Studies (Proof over promises)</li>
 <li>Comprehensive FAQ Page (Handle objections)</li>
 <li>Monthly Blog Content (Target specific intent)</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <BarChart2 className="text-slate-900" size={32} />,
 title:"9. Implement Financial Dashboards",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Stop driving blind. Track where you are, not just where you've been.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Weekly Metrics:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li>Current Cash Balance (Actual)</li>
 <li>Revenue & Expenses (MTD vs Projected)</li>
 <li>Outstanding Invoices & Pipeline Value</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <UserPlus className="text-slate-900" size={32} />,
 title:"10. Hire Your First Leverage Role",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 You've hit the productivity ceiling. The only way forward is leverage.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Hire a VA, junior associate, or freelance marketer. Buy back your time for strategy.</p>
 </div>
 </>
 )
 }
 ];

 return (
 <div className="relative bg-background text-foreground min-h-screen font-sans selection:bg-slate-900/30">
 <Header />

 <div className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
 <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm group">
 <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
 <span>Back to Home</span>
 </Link>

 <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ">
 Essential Next Steps After Your Business Foundation is Built
 </h1>
 <p className="text-xl md:text-2xl text-slate-900 mb-8 border-l-4 border-slate-900 pl-6 py-2 font-medium">
 Insights from Building Apparotech Innovation in India
 </p>

 <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-16">
 <a
 href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/hemantsainipov.pdf`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg shadow-teal-950/20"
 >
 <FileText size={20} />
 <span>View PDF Version</span>
 </a>
 <span className="text-muted-foreground text-sm">Read offline or share with your team</span>
 </div>

 <div className="prose prose-lg prose max-w-none text-slate-700 leading-relaxed mb-16">
 <p className="text-xl leading-relaxed text-foreground/90">
 You've built the foundation. You're officially an entrepreneur. But something feels off. Growth feels unpredictable.
 </p>
 <p>
 This is the gap most Indian entrepreneurs fall into. The gap between a business that exists on paper and one that runs like a machine. Here are the 10 critical steps to cross that gap.
 </p>
 </div>

 {/* Content Grid */}
 <div className="grid grid-cols-1 gap-8 md:gap-12">
 {steps.map((item, index) => (
 <div key={index} className="bg-white/[0.02] border border-border rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors">
 <div className="flex flex-col sm:flex-row gap-6">
 <div className="bg-secondary p-4 rounded-full w-fit h-fit shrink-0">
 {item.icon}
 </div>
 <div className="flex-1">
 <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
 <div className="text-lg text-slate-700 leading-relaxed space-y-4">
 {item.content}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Closing Section */}
 <div className="mt-20 bg-gradient-to-br from-slate-950/40 to-black border border-slate-900/30 rounded-3xl p-8 md:p-12 text-center"><h3 className="text-white text-2xl md:text-3xl font-bold mb-6">The Phase Change</h3>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
 <strong>Phase 1:</strong> Survival. <strong>Phase 2:</strong> Predictability and Leverage. <br />
 Don't try to do it all at once. Pick ONE step to focus on this week.
 </p>

 <div className="pt-8 border-t border-border">
 <p className="text-foreground mb-6 font-medium">Need help navigating from hustle to scale?</p>
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

export default BusinessNextSteps;








