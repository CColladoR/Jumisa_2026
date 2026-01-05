import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatalogJumisa from './pages/CatalogJumisa';
import CatalogTabicesa from './pages/CatalogTabicesa';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jumisa" element={<CatalogJumisa />} />
            <Route path="/tabicesa" element={<CatalogTabicesa />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;