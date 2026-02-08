import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Blog from './pages/Blog';
import './App.css';

import BusinessInsights from './pages/BusinessInsights';
import IndustryInsight from './pages/IndustryInsight';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/insights" element={<BusinessInsights />} />
        <Route path="/insights/:slug" element={<IndustryInsight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
