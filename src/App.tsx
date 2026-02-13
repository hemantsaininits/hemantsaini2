import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Blog from './pages/Blog';
import './App.css';

import BusinessInsights from './pages/BusinessInsights';
import IndustryInsight from './pages/IndustryInsight';
import BusinessEssentials from './pages/BusinessEssentials';
import BusinessNextSteps from './pages/BusinessNextSteps';
import BusinessStrategicMoves from './pages/BusinessStrategicMoves';
import ScrollToTop from './components/ScrollToTop';

import Roadmap from './pages/Roadmap';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/insights" element={<BusinessInsights />} />
        <Route path="/insights/:slug" element={<IndustryInsight />} />
        <Route path="/essentials" element={<Roadmap />} />
        <Route path="/essentials/detail" element={<BusinessEssentials />} />
        <Route path="/next-steps" element={<BusinessNextSteps />} />
        <Route path="/strategic-moves" element={<BusinessStrategicMoves />} />
        {/* <Route path="/roadmap" element={<Roadmap />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
