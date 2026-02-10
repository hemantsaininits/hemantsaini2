
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
 ArrowLeft,
 FileText,
 Package,
 UserCheck,
 Handshake,
 RefreshCw,
 Gem,
 Bot,
 PieChart,
 Heart,
 Smile,
 Flag
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessStrategicMoves = () => {
 const moves = [
 {
 icon: <Package className="text-slate-900" size={32} />,
 title:"1. Productize Your Services",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Trading time for money has a ceiling. Productizing breaks that ceiling.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">The Shift:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li><strong>From:</strong>"We do whatever you need."</li>
 <li><strong>To:</strong>"We have a 4-step process that solves X."</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <UserCheck className="text-slate-900" size={32} />,
 title:"2. Build Founder Brand",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 People buy from people. Your personal brand is your company's biggest asset.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Post consistently on LinkedIn about your journey, learnings, and industry insights.</p>
 </div>
 </>
 )
 },
 {
 icon: <Handshake className="text-slate-900" size={32} />,
 title:"3. Strategic Partnerships",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Go where your customers already are.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Example:</h4>
 <p className="text-sm text-muted-foreground">If you sell web design, partner with SEO agencies. They refer you, you refer them.</p>
 </div>
 </>
 )
 },
 {
 icon: <RefreshCw className="text-slate-900" size={32} />,
 title:"4. Create Recurring Revenue Models",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 One-off projects are exhausting. Retainers build value.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Ideas:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li>Maintenance Contracts</li>
 <li>Monthly Consulting</li>
 <li>Subscription Access</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <Gem className="text-slate-900" size={32} />,
 title:"5. Move Up-Market (High Ticket)",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 It takes the same effort to sell a ₹50k project as a ₹5L project.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Identify what premium clients value (speed, certainty, convenience) and package it.</p>
 </div>
 </>
 )
 },
 {
 icon: <Bot className="text-slate-900" size={32} />,
 title:"6. Leverage AI & Automation",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Do more with less. Automate low-value tasks.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Use Cases:</h4>
 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
 <li>Content Generation Support</li>
 <li>Data Entry Automation</li>
 <li>Customer Support Chatbots</li>
 </ul>
 </div>
 </>
 )
 },
 {
 icon: <PieChart className="text-slate-900" size={32} />,
 title:"7. Data-Driven Decision Making",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Gut feelings are good. Data is better.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Track CAC (Customer Acquisition Cost) and LTV (Lifetime Value).</p>
 </div>
 </>
 )
 },
 {
 icon: <Heart className="text-slate-900" size={32} />,
 title:"8. Codify Company Culture",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Culture happens whether you plan it or not. Plan it.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">Core Values:</h4>
 <p className="text-sm text-muted-foreground">Define 3-5 non-negotiable behaviors (e.g.,"Radical Transparency","Speed Matters").</p>
 </div>
 </>
 )
 },
 {
 icon: <Smile className="text-slate-900" size={32} />,
 title:"9. Customer Success (Not Just Support)",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Support fixes problems. Success prevents them and drives growth.
 </p>
 <div className="bg-slate-900/10 border border-slate-900/20 p-4 rounded-lg">
 <p className="text-sm"><strong>Action Step:</strong> Implement Quarterly Business Reviews (QBRs) for top clients.</p>
 </div>
 </>
 )
 },
 {
 icon: <Flag className="text-slate-900" size={32} />,
 title:"10. Plan Your Exit (Even if You Don't Leave)",
 content: (
 <>
 <p className="mb-4 text-muted-foreground">
 Build a business that someone would want to buy.
 </p>
 <div className="bg-secondary p-4 rounded-lg mb-4">
 <h4 className="font-semibold mb-2">The Value Test:</h4>
 <p className="text-sm text-muted-foreground">If you left for a year, would the business grow, shrink, or die?</p>
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
 10 Strategic Moves After Systems Are Running: From Stability to Scale
 </h1>
 <p className="text-xl md:text-2xl text-slate-900 mb-8 border-l-4 border-slate-900 pl-6 py-2 font-medium">
 Insights from Building Apparotech Innovation in India
 </p>

 <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-16">
 <a
 href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/hemantsainipov1.pdf`}
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
 Stability is dangerous. It feels safe, but in business, if you aren't growing, you're dying.
 </p>
 <p>
 Once your foundations are solid and daily operations are smooth, it's time to shift gears. This isn't about working harder; it's about making strategic moves that multiply your output.
 </p>
 </div>

 {/* Content Grid */}
 <div className="grid grid-cols-1 gap-8 md:gap-12">
 {moves.map((item, index) => (
 <div key={index} className="bg-white border border-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-all shadow-sm">
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
 <div className="mt-20 bg-gradient-to-br from-slate-950 to-black border border-slate-900/30 rounded-3xl p-8 md:p-12 text-center"><h3 className="text-white text-2xl md:text-3xl font-bold mb-6">The Infinite Game</h3>
 <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
 Building a business is a marathon, not a sprint. These strategic moves are your hydration stations. Use them to go the distance.
 </p>

 <div className="pt-8 border-t border-white/10">
 <p className="text-white mb-6 font-medium">Ready to scale your vision?</p>
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

export default BusinessStrategicMoves;








