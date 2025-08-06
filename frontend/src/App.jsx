import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndustryNews from "./components/IndustryNews";
import NewsDetail from "./pages/NewsDetail";
import AllNews from './pages/Allnews';
import AiChat from './components/ChatAi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AiChat />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

