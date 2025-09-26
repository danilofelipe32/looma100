
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8 py-6 text-center text-slate-500 dark:text-slate-400">
        <p>
          <a 
            href="https://wa.me/5584999780963?text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition-colors"
          >
            Produzido por Danilo Arruda
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;