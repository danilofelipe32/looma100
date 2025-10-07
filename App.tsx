import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ComponentLibrary from './pages/ComponentLibrary';
import DeveloperGuide from './pages/DeveloperGuide';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 text-slate-800 dark:text-slate-200 flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<ComponentLibrary />} />
          <Route path="/dev-guide/*" element={<DeveloperGuide />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;