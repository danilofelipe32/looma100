import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkStyles = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkStyles = "bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400";
  const inactiveLinkStyles = "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50";


  return (
    <header 
      className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-700/80 transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md dark:shadow-slate-800' : 'shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38zM12 5.394L8.23 11H12v2.606L15.77 8H12V5.394z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-slate-900 dark:text-slate-50">Looma</span>
            </div>
             <nav className="hidden md:flex items-center space-x-2">
              <NavLink to="/" end className={({isActive}) => `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`}>
                Componentes
              </NavLink>
              <NavLink to="/dev-guide" className={({isActive}) => `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`}>
                Guia do Desenvolvedor
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;