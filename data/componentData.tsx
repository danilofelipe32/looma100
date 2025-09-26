
import React, { useState, useEffect, useMemo } from 'react';
import { ComponentCategory } from '../types';

// Example Components

// START: "Estrutura & Layout" Components
const ContainerExample: React.FC = () => (
  <div className="w-full bg-slate-200 dark:bg-slate-700/50 p-4 rounded-lg">
    <div className="container mx-auto bg-white dark:bg-slate-800 shadow-md p-4 rounded text-center">
      <p className="text-sm dark:text-slate-300">Este conteúdo está centralizado.</p>
    </div>
  </div>
);

const SectionExample: React.FC = () => (
  <section className="w-full bg-white dark:bg-slate-800 shadow-md p-4 sm:p-6 rounded-lg border-l-4 border-teal-500 transition-shadow hover:shadow-lg">
    <h3 className="font-bold text-lg mb-2 dark:text-slate-200">Título da Seção</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm">Este é um bloco de conteúdo temático.</p>
  </section>
);

const HeaderExample: React.FC = () => (
  <header className="w-full bg-white dark:bg-slate-800 shadow-md p-4 rounded-lg flex justify-between items-center">
    <div className="font-bold text-teal-500">Logo</div>
    <nav className="flex space-x-4 text-sm text-slate-800 dark:text-slate-300">
      <a href="#" className="hover:text-teal-500 transition-colors">Link 1</a>
      <a href="#" className="hover:text-teal-500 transition-colors">Link 2</a>
    </nav>
  </header>
);

const NavbarExample: React.FC = () => (
  <nav className="w-full bg-teal-500 p-3 rounded-lg flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
    <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Início</a>
    <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Sobre</a>
    <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Contato</a>
  </nav>
);

const SidebarExample: React.FC = () => (
  <div className="w-full h-auto md:h-56 flex flex-col md:flex-row rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md">
    <aside className="w-full md:w-1/3 bg-slate-800 p-4 flex flex-col">
      <div className="flex items-center mb-6 shrink-0">
         <div className="w-8 h-8 bg-teal-500 rounded-md mr-3 flex items-center justify-center text-white font-bold text-lg">L</div>
         <span className="text-white font-semibold">Looma</span>
      </div>
      <nav className="flex flex-col space-y-2">
        <a href="#" className="flex items-center p-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Painel
        </a>
        <a href="#" className="flex items-center p-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Perfil
        </a>
        <a href="#" className="flex items-center p-2 bg-slate-900 text-white rounded-md text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Ajustes
        </a>
      </nav>
    </aside>
    <main className="w-full md:w-2/3 p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-900 min-h-[120px]">
      <p className="text-sm text-slate-600 dark:text-slate-400">Conteúdo principal.</p>
    </main>
  </div>
);

const FooterExample: React.FC = () => (
  <footer className="w-full bg-slate-800 text-white p-4 rounded-lg text-center">
    <p className="text-sm">&copy; 2024 Meu Site. Todos os direitos reservados.</p>
  </footer>
);

const GridFlexboxExample: React.FC = () => (
  <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
    <div className="bg-teal-100 dark:bg-teal-900/50 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 dark:text-teal-200 transition-transform hover:scale-105 cursor-pointer">1</div>
    <div className="bg-teal-100 dark:bg-teal-900/50 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 dark:text-teal-200 transition-transform hover:scale-105 cursor-pointer">2</div>
    <div className="bg-teal-100 dark:bg-teal-900/50 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 dark:text-teal-200 transition-transform hover:scale-105 cursor-pointer">3</div>
    <div className="bg-teal-100 dark:bg-teal-900/50 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 dark:text-teal-200 transition-transform hover:scale-105 cursor-pointer col-span-2 sm:col-span-1">4</div>
    <div className="bg-teal-100 dark:bg-teal-900/50 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 dark:text-teal-200 transition-transform hover:scale-105 cursor-pointer">5</div>
     <div className="bg-teal-100 dark:bg-teal-900/50 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 dark:text-teal-200 transition-transform hover:scale-105 cursor-pointer">6</div>
  </div>
);

const HeroExample: React.FC = () => (
    <div className="w-full text-center bg-slate-200 dark:bg-slate-800 p-6 sm:p-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold dark:text-slate-200">Hero Title</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Descrição atrativa aqui.</p>
      <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition-transform hover:scale-105 shadow-md hover:shadow-lg">Call to Action</button>
    </div>
);

const CardExample: React.FC = () => (
  <div className="w-full max-w-xs bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
    <h4 className="font-bold text-lg dark:text-slate-200">Título do Card</h4>
    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Este é um bloco de conteúdo encapsulado.</p>
  </div>
);
// END: "Estrutura & Layout" Components


// START: "Navegação & Organização" Components
const BreadcrumbExample: React.FC = () => (
  <nav aria-label="breadcrumb">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
      <li><a href="#" className="hover:text-teal-500">Início</a></li>
      <li><span className="select-none">&gt;</span></li>
      <li><a href="#" className="hover:text-teal-500">Categoria</a></li>
      <li><span className="select-none">&gt;</span></li>
      <li className="font-semibold text-slate-700 dark:text-slate-200" aria-current="page">Página Atual</li>
    </ol>
  </nav>
);

const PaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const pages = [1, 2, 3];
  return(
    <nav className="flex flex-wrap justify-center items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300">Previous</button>
        {pages.map(p => (
            <button key={p} onClick={() => setCurrentPage(p)} className={`w-8 h-8 rounded-md dark:text-slate-300 ${currentPage === p ? 'bg-teal-500 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}>{p}</button>
        ))}
        <span className="px-2 dark:text-slate-300">...</span>
        <button className="px-3 py-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300">Next</button>
    </nav>
  );
};


const TabsExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className="w-full max-w-sm">
      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="-mb-px flex flex-wrap space-x-4" aria-label="Tabs">
          <button onClick={() => setActiveTab(1)} className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 1 ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'}`}>Aba 1</button>
          <button onClick={() => setActiveTab(2)} className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 2 ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'}`}>Aba 2</button>
          <button onClick={() => setActiveTab(3)} className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 3 ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'}`}>Aba 3</button>
        </nav>
      </div>
      <div className="pt-4 text-slate-600 dark:text-slate-400 text-sm">
        {activeTab === 1 && <p>Conteúdo da Aba 1.</p>}
        {activeTab === 2 && <p>Conteúdo da Aba 2.</p>}
        {activeTab === 3 && <p>Conteúdo da Aba 3.</p>}
      </div>
    </div>
  );
};

const AccordionExample: React.FC = () => {
  const [open, setOpen] = useState(1);
  const toggle = (id: number) => setOpen(open === id ? 0 : id);
  return (
    <div className="w-full max-w-md">
      {[1, 2].map(id => (
        <div key={id} className="border-b dark:border-slate-700">
          <button onClick={() => toggle(id)} className="w-full flex justify-between items-center py-3 text-left font-semibold dark:text-slate-200">
            <span>Seção {id}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${open === id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <p className="pb-3 text-sm text-slate-600 dark:text-slate-400">Conteúdo detalhado da seção {id}.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const DropdownExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md border border-slate-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
        Opções
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10">
          <div className="py-1" role="menu">
            <a href="#" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">Item 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">Item 2</a>
          </div>
        </div>
      )}
    </div>
  );
};

const SubmenuExample: React.FC = () => (
  <nav className="w-full bg-slate-800 p-3 rounded-lg flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
    <a href="#" className="text-white font-semibold px-3 py-1">Início</a>
    <div className="relative group">
       <button className="text-white font-semibold px-3 py-1 flex items-center">
        Serviços
        <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <a href="#" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">Web Design</a>
        <a href="#" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">Marketing</a>
      </div>
    </div>
    <a href="#" className="text-white font-semibold px-3 py-1">Contato</a>
  </nav>
);

const ExpandableSidebarExample: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const ToggleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {isExpanded ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );

  return (
    <div className="w-full h-48 flex rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md">
      <aside className={`bg-slate-800 text-slate-100 flex flex-col transition-all duration-300 ${isExpanded ? 'w-48' : 'w-20'}`}>
        <div className={`p-4 flex items-center border-b border-slate-700 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
          {isExpanded && <span className="font-bold text-lg">Menu</span>}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-500 group"
            aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
          >
            <ToggleIcon />
          </button>
        </div>
        
        <nav className="flex-1 p-2 space-y-1">
          <a href="#" title="Painel" className={`flex items-center p-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors ${isExpanded ? '' : 'justify-center'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            {isExpanded && <span className="ml-3 text-sm font-medium">Painel</span>}
          </a>
          <a href="#" title="Ajustes" className={`flex items-center p-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors ${isExpanded ? '' : 'justify-center'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {isExpanded && <span className="ml-3 text-sm font-medium">Ajustes</span>}
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-900"><p className="text-sm text-slate-600 dark:text-slate-400">Conteúdo principal.</p></main>
    </div>
  );
};


const SearchBarExample: React.FC = () => (
    <div className="relative w-full max-w-sm">
        <input type="search" placeholder="Buscar..." className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white rounded-full focus:ring-teal-500 focus:border-teal-500" />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
        </div>
    </div>
);

const FilterSortExample: React.FC = () => (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex-1">
            <label htmlFor="sort" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ordenar por</label>
            <select id="sort" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                <option>Relevância</option>
                <option>Preço</option>
            </select>
        </div>
        <div className="flex-1">
            <label htmlFor="filter" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Filtrar</label>
            <select id="filter" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                <option>Categoria A</option>
                <option>Categoria B</option>
            </select>
        </div>
    </div>
);
// END: "Navegação & Organização" Components


// START: "Conteúdo & Interatividade" Components
const ModalExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors">Abrir Modal</button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold dark:text-slate-200">Título do Modal</h3>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-2xl">&times;</button>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Este é o conteúdo dentro do modal. Você pode colocar qualquer coisa aqui.</p>
            <div className="text-right mt-4">
                <button onClick={() => setIsOpen(false)} className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 py-2 px-4 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TooltipExample: React.FC = () => (
  <div className="relative group inline-block">
    <button className="bg-slate-200 dark:bg-slate-700 dark:text-slate-200 py-2 px-4 rounded-lg">Passe o mouse</button>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Esta é uma dica!
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
    </div>
  </div>
);

const PopoverExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors">
        {isOpen ? 'Fechar Popover' : 'Abrir Popover'}
      </button>
      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white dark:bg-slate-700 rounded-lg shadow-lg border dark:border-slate-600 p-4 z-10">
          <h4 className="font-bold dark:text-slate-200">Título do Popover</h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Este popover tem conteúdo mais rico e é ativado por clique.</p>
        </div>
      )}
    </div>
  );
};

const sliderSlides = ['Slide 1', 'Slide 2', 'Slide 3'];
const SliderExample: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c === sliderSlides.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? sliderSlides.length - 1 : c - 1));
  return (
    <div className="relative w-full max-w-sm h-32 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-inner">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {sliderSlides.map((s) => (
          <div key={s} className="w-full h-32 flex-shrink-0 flex items-center justify-center text-xl font-bold text-slate-700 dark:text-slate-300">{s}</div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-slate-900/50 rounded-full p-1 hover:bg-white dark:hover:bg-slate-900 text-lg leading-none">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-slate-900/50 rounded-full p-1 hover:bg-white dark:hover:bg-slate-900 text-lg leading-none">›</button>
    </div>
  );
};

const galleryImages = [
  'https://placehold.co/150x150/14b8a6/ffffff?text=Img+1',
  'https://placehold.co/150x150/3b82f6/ffffff?text=Img+2',
  'https://placehold.co/150x150/16a34a/ffffff?text=Img+3',
];
const GalleryExample: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [image, setImage] = useState(0);
  
  const openLightbox = (index: number) => { setImage(index); setLightboxOpen(true); };
  return (
    <>
      <div className="flex space-x-2">
        {galleryImages.map((src, i) => (
          <img key={src} src={src} alt={`Thumbnail ${i+1}`} className="w-16 h-16 rounded-md cursor-pointer hover:opacity-75 transition-opacity" onClick={() => openLightbox(i)} />
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setLightboxOpen(false)}>
          <img src={galleryImages[image].replace('150x150', '600x600')} alt="Enlarged view" className="max-w-[90vw] max-h-[90vh] rounded-lg" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

const TimelineExample: React.FC = () => (
  <div className="relative w-full p-4">
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
    {[1, 2, 3].map(item => (
      <div key={item} className={`relative mb-8 flex items-center w-full ${item % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 md:px-4">
          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md ml-8 md:ml-0">
            <h4 className="font-bold dark:text-slate-200">Evento {item}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Breve descrição do evento que ocorreu nesta data.</p>
          </div>
        </div>
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-2 border-white dark:border-slate-900 z-10"></div>
      </div>
    ))}
  </div>
);

const stepsData = [1, 2, 3];
const StepsExample: React.FC = () => {
  const [step, setStep] = useState(2);
  return (
    <div className="w-full max-w-sm">
      <nav className="flex items-center justify-between">
        {stepsData.map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= s ? 'bg-teal-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>{s}</div>
              <p className={`text-xs mt-1 transition-colors ${step >= s ? 'text-teal-600 font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>Etapa {s}</p>
            </div>
            {i < stepsData.length - 1 && <div className={`flex-1 h-0.5 mx-2 transition-colors ${step > s ? 'bg-teal-500' : 'bg-slate-200 dark:bg-slate-700'}`}></div>}
          </React.Fragment>
        ))}
      </nav>
      <div className="mt-6 flex justify-between">
        <button onClick={() => setStep(s => Math.max(1, s - 1))} className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 py-1 px-3 rounded text-sm hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50" disabled={step === 1}>Anterior</button>
        <button onClick={() => setStep(s => Math.min(stepsData.length, s + 1))} className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 py-1 px-3 rounded text-sm hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50" disabled={step === stepsData.length}>Próximo</button>
      </div>
    </div>
  );
};

const faqsData = [
  {
    id: 1,
    question: "Qual é a primeira pergunta frequente?",
    answer: "Esta é a resposta para a primeira pergunta. Respostas detalhadas ajudam o usuário a resolver suas dúvidas rapidamente.",
  },
  {
    id: 2,
    question: "Como funciona o segundo item?",
    answer: "O segundo item funciona de forma similar ao primeiro. Ao clicar na pergunta, a resposta é revelada. Clicar novamente irá ocultá-la.",
  },
  {
    id: 3,
    question: "Qual o benefício deste componente?",
    answer: "O principal benefício é a organização da informação, permitindo apresentar muito conteúdo de forma compacta e amigável.",
  },
];
const FAQExample: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {faqsData.map((faq) => (
        <div key={faq.id} className="border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full flex justify-between items-center py-3 text-left font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-600 transition-colors"
            aria-expanded={openId === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <span>{faq.question}</span>
            <span className={`text-xl font-light transition-transform duration-300 ${openId === faq.id ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div
            id={`faq-answer-${faq.id}`}
            className={`grid transition-all duration-300 ease-in-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p className="pb-3 text-sm text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
// END: "Conteúdo & Interatividade" Components

// START: "Formulários & Inputs" Components
const FormExample: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full max-w-sm bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Acesse sua conta</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Bem-vindo de volta!</p>
      </div>
      
      <div>
        <label htmlFor="form-example-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input 
            type="email" 
            id="form-example-email" 
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="voce@exemplo.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-example-password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Senha
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="form-example-password" 
            className="block w-full pl-10 pr-10 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="Sua senha"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>
              {showPassword ? (
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 dark:border-slate-500 rounded" />
          <label htmlFor="remember-me" className="ml-2 block text-slate-700 dark:text-slate-300">
            Lembrar-me
          </label>
        </div>
        <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
          Esqueceu a senha?
        </a>
      </div>

      <div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
          Entrar
        </button>
      </div>

       <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          Não tem uma conta?{' '}
          <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
             Cadastre-se
          </a>
       </div>
    </form>
  );
};

const InputExample: React.FC = () => (
    <div className="w-full max-w-xs">
        <label htmlFor="input-component-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
        <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            </div>
            <input 
                type="email" 
                name="email" 
                id="input-component-email" 
                className="block w-full rounded-md border border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white pl-10 pr-3 py-2 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm" 
                placeholder="voce@exemplo.com" 
            />
        </div>
    </div>
);

const TextareaExample: React.FC = () => {
    const [message, setMessage] = useState('');
    const maxLength = 200;

    return (
        <div className="w-full max-w-sm">
            <label htmlFor="message-textarea-example" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Sua Mensagem
            </label>
            <div className="relative">
                <textarea
                    id="message-textarea-example"
                    name="message"
                    rows={4}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-md p-2 resize-y transition-colors"
                    placeholder="Deixe um comentário..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={maxLength}
                    aria-describedby="char-count-example"
                />
                <div id="char-count-example" className={`text-right text-xs mt-1 pr-1 transition-colors ${message.length > maxLength ? 'text-red-600 font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
                    <span>{message.length}</span> / <span>{maxLength}</span>
                </div>
            </div>
        </div>
    );
};

const CheckboxExample: React.FC = () => {
    const [checked, setChecked] = useState(true);
    return (
        <div className="relative flex items-start">
            <div className="flex items-center h-5">
                <input id="accept" name="accept" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="h-4 w-4 text-teal-600 border-slate-300 dark:border-slate-600 rounded focus:ring-teal-500" />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="accept" className="font-medium text-slate-700 dark:text-slate-300 cursor-pointer">Aceito os termos</label>
            </div>
        </div>
    );
};

const RadioButtonExample: React.FC = () => {
    const [selection, setSelection] = useState('option1');
    return (
        <fieldset>
            <legend className="text-sm font-medium text-slate-900 dark:text-slate-200">Opções</legend>
            <div className="mt-2 space-y-2">
                <div className="flex items-center">
                    <input id="option1" name="notification-method" type="radio" checked={selection === 'option1'} onChange={() => setSelection('option1')} className="h-4 w-4 text-teal-600 border-slate-300 dark:border-slate-600 focus:ring-teal-500"/>
                    <label htmlFor="option1" className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">Opção 1</label>
                </div>
                <div className="flex items-center">
                    <input id="option2" name="notification-method" type="radio" checked={selection === 'option2'} onChange={() => setSelection('option2')} className="h-4 w-4 text-teal-600 border-slate-300 dark:border-slate-600 focus:ring-teal-500"/>
                    <label htmlFor="option2" className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">Opção 2</label>
                </div>
            </div>
        </fieldset>
    );
};

const SelectExample: React.FC = () => (
    <div className="w-full max-w-xs">
        <label htmlFor="country" className="block text-sm font-medium text-slate-700 dark:text-slate-300">País</label>
        <select id="country" name="country" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
            <option>Brasil</option>
            <option>Portugal</option>
            <option>Angola</option>
        </select>
    </div>
);

const SwitchToggleExample: React.FC = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <button onClick={() => setEnabled(!enabled)} className={`${enabled ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-700'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
        </button>
    );
};

const RangeSliderExample: React.FC = () => {
    const [value, setValue] = useState(50);
    return (
        <div className="w-full max-w-xs">
            <label htmlFor="volume" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Volume: {value}</label>
            <input type="range" id="volume" name="volume" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"/>
        </div>
    );
};

const DateTimePickerExample: React.FC = () => {
  const [pickerType, setPickerType] = useState<'date' | 'time'>('date');
  const [date, setDate] = useState('2024-07-26');
  const [hour, setHour] = useState('09');
  const [minute, setMinute] = useState('45');
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Data e Hora do Evento</label>
      
      <div className="flex w-full p-1 bg-slate-200 dark:bg-slate-700 rounded-lg mb-3">
        <button 
          onClick={() => setPickerType('date')}
          className={`w-1/2 rounded-md py-1 text-sm font-semibold transition-all duration-200 ${
            pickerType === 'date' ? 'bg-white dark:bg-slate-800 shadow-sm text-teal-600 dark:text-teal-400 ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-600/70'
          }`}
          aria-pressed={pickerType === 'date'}
        >
          Data
        </button>
        <button 
          onClick={() => setPickerType('time')}
          className={`w-1/2 rounded-md py-1 text-sm font-semibold transition-all duration-200 ${
            pickerType === 'time' ? 'bg-white dark:bg-slate-800 shadow-sm text-teal-600 dark:text-teal-400 ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-600/70'
          }`}
          aria-pressed={pickerType === 'time'}
        >
          Hora
        </button>
      </div>
      
      {pickerType === 'date' ? (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full rounded-md border border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white pr-10 py-2 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
            <input 
                type="text" 
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="w-1/3 text-center rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white py-2 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-lg font-mono"
                placeholder="HH"
                maxLength={2}
                aria-label="Hora"
            />
            <span className="font-bold text-slate-400 pb-1">:</span>
            <input 
                type="text" 
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="w-1/3 text-center rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white py-2 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-lg font-mono"
                placeholder="MM"
                maxLength={2}
                aria-label="Minuto"
            />
            <div className="flex-1 flex flex-col items-stretch bg-slate-200 dark:bg-slate-700 rounded-md overflow-hidden">
                <button 
                    onClick={() => setPeriod('AM')}
                    className={`p-1 text-xs font-semibold transition-colors ${
                        period === 'AM' ? 'bg-teal-500 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                    aria-pressed={period === 'AM'}
                >AM</button>
                <button 
                    onClick={() => setPeriod('PM')}
                    className={`p-1 text-xs font-semibold transition-colors ${
                        period === 'PM' ? 'bg-teal-500 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                    aria-pressed={period === 'PM'}
                >PM</button>
            </div>
        </div>
      )}
    </div>
  );
};

const FileUploadExample: React.FC = () => (
    <div className="w-full max-w-xs">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Upload de Arquivo</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-slate-600 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-slate-600 dark:text-slate-400">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-transparent rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none">
                        <span>Carregar um arquivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">PNG, JPG, GIF até 10MB</p>
            </div>
        </div>
    </div>
);

const CaptchaExample: React.FC = () => (
    <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-md flex items-center justify-between w-full max-w-xs">
        <div className="flex items-center">
            <input type="checkbox" className="h-6 w-6 rounded border-slate-400 dark:border-slate-500"/>
            <span className="ml-3 text-sm text-slate-800 dark:text-slate-200">Não sou um robô</span>
        </div>
        <div className="text-xs text-center text-slate-500 dark:text-slate-400">
            <p>reCAPTCHA</p>
            <a href="#" className="underline">Privacidade</a> - <a href="#" className="underline">Termos</a>
        </div>
    </div>
);

const SubmitResetButtonExample: React.FC = () => (
    <div className="flex space-x-4">
        <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg">Enviar</button>
        <button type="reset" className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold py-2 px-4 rounded-lg">Limpar</button>
    </div>
);
// END: "Formulários & Inputs" Components


// START: "Feedback & Estado" Components
const AlertExample: React.FC = () => (
  <div className="w-full max-w-md bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-500/50 text-green-700 dark:text-green-300 px-4 py-3 rounded-md relative" role="alert">
    <strong className="font-bold">Sucesso!</strong>
    <span className="block sm:inline ml-2">Sua ação foi completada com êxito.</span>
  </div>
);

const ToastExample: React.FC = () => {
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="relative w-full h-24">
            <button onClick={handleShowToast} className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors">
                Exibir Toast
            </button>
            {showToast && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm py-2 px-4 rounded-md shadow-lg transition-opacity duration-300 animate-fade-in-up">
                    Notificação temporária!
                </div>
            )}
        </div>
    );
};

const BadgeExample: React.FC = () => (
    <div className="flex items-center space-x-4 dark:text-slate-200">
        <span className="text-lg">Caixa de Entrada</span>
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">99+</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
            Novo
        </span>
    </div>
);

const SkeletonLoaderExample: React.FC = () => (
    <div className="border border-slate-200 dark:border-slate-700 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    </div>
);

const ProgressBarExample: React.FC = () => {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(75), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-sm">
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                <div
                    className="bg-teal-500 h-4 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
             <p className="text-center text-sm mt-2 text-slate-600 dark:text-slate-400">{progress}% completo</p>
        </div>
    );
};

const EmptyStateExample: React.FC = () => (
    <div className="text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg w-full max-w-sm">
        <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-200">Nenhum projeto</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Comece criando um novo projeto.</p>
        <div className="mt-6">
            <button type="button" className="inline-flex items-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600">
                Criar Projeto
            </button>
        </div>
    </div>
);
// END: "Feedback & Estado" Components


// START: "Tipografia & Elementos de Texto" Components
const HeadingsExample: React.FC = () => (
    <div className="w-full text-left space-y-2">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Heading 1</h1>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Heading 2</h2>
      <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">Heading 3</h3>
      <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Heading 4</h4>
      <h5 className="text-lg font-semibold text-slate-600 dark:text-slate-400">Heading 5</h5>
      <h6 className="font-semibold text-slate-600 dark:text-slate-400">Heading 6</h6>
    </div>
);

const ParagraphExample: React.FC = () => (
    <p className="text-slate-600 dark:text-slate-400 max-w-prose leading-relaxed text-sm text-left">
      Este é um parágrafo de exemplo para demonstrar o texto corrido. Ele deve ter um espaçamento e altura de linha adequados para garantir uma boa legibilidade. A tipografia é a base da comunicação em qualquer interface web, e um bom estilo de parágrafo é fundamental.
    </p>
);

const ListsExample: React.FC = () => (
    <div className="w-full text-left text-sm text-slate-600 dark:text-slate-400 space-y-4">
      <div>
        <h4 className="font-semibold mb-1 text-slate-800 dark:text-slate-200">Lista Não Ordenada (ul)</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Item com marcador</li>
          <li>Outro item com marcador</li>
          <li>Sub-item
            <ul className="list-['-_'] list-inside ml-4">
                <li>Nível 2</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-1 text-slate-800 dark:text-slate-200">Lista Ordenada (ol)</h4>
        <ol className="list-decimal list-inside space-y-1">
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
        </ol>
      </div>
       <div>
        <h4 className="font-semibold mb-1 text-slate-800 dark:text-slate-200">Lista de Definição (dl)</h4>
        <dl>
          <dt className="font-semibold text-slate-800 dark:text-slate-200">HTML</dt>
          <dd className="ml-4">HyperText Markup Language</dd>
          <dt className="font-semibold text-slate-800 dark:text-slate-200 mt-1">CSS</dt>
          <dd className="ml-4">Cascading Style Sheets</dd>
        </dl>
      </div>
    </div>
);

const BlockquoteExample: React.FC = () => (
     <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-4 bg-slate-100 dark:bg-slate-800 w-full">
      <p className="text-slate-700 dark:text-slate-300 italic">"O design não é apenas o que parece e o que se sente. O design é como funciona."</p>
      <footer className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-right">— Steve Jobs</footer>
    </blockquote>
);

const CodeExample: React.FC = () => (
    <div className="w-full text-left text-sm space-y-4">
      <p className="text-slate-600 dark:text-slate-400">
        Use o elemento <code className="bg-slate-200 dark:bg-slate-700 text-teal-700 dark:text-teal-400 font-mono px-1 py-0.5 rounded-sm text-xs">&lt;code&gt;</code> para código embutido.
      </p>
      <pre className="bg-slate-800 text-white p-4 rounded-md overflow-x-auto w-full">
        <code className="font-mono">
{`function greet() {
  console.log("Olá, mundo!");
}`}
        </code>
      </pre>
    </div>
);
// END: "Tipografia & Elementos de Texto" Components

// START: "Elementos de Mídia" Components
const ImageExample: React.FC = () => (
    <figure className="w-full max-w-xs">
      <img className="rounded-lg shadow-md aspect-[16/10] object-cover" src="https://placehold.co/400x250/14b8a6/ffffff?text=Imagem" alt="Imagem de exemplo com um gradiente teal" />
      <figcaption className="mt-2 text-xs text-center text-slate-500 dark:text-slate-400">Uma legenda opcional para a imagem.</figcaption>
    </figure>
);

const MediaPlayerExample: React.FC = () => (
    <div className="w-full max-w-sm space-y-4">
      <video className="w-full rounded-lg shadow-md" controls poster="https://placehold.co/400x225/334155/ffffff?text=Video+Poster">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <audio className="w-full" controls>
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
        Seu navegador não suporta a tag de áudio.
      </audio>
    </div>
);

const IframeExample: React.FC = () => (
    <div className="w-full aspect-video max-w-md">
       <iframe
        className="w-full h-full rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625996841!2d2.292292615674345!3d48.85837007928751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1652097745778!5m2!1sen!2sfr"
        title="Google Maps Embed da Torre Eiffel"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
);

const IconExample: React.FC = () => (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-slate-700 dark:text-slate-300">
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-xs mt-1">Home</span>
      </div>
       <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
         <span className="text-xs mt-1">Config</span>
      </div>
       <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
         <span className="text-xs mt-1">Notificação</span>
      </div>
    </div>
);

const AvatarExample: React.FC = () => (
    <div className="flex items-center space-x-4">
      <img className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-slate-200 dark:ring-offset-slate-900 dark:ring-slate-600" src="https://placehold.co/100x100/e2e8f0/475569?text=A" alt="Avatar pequeno" />
      <img className="h-14 w-14 rounded-full ring-2 ring-offset-2 ring-teal-400 dark:ring-offset-slate-900" src="https://placehold.co/100x100/14b8a6/ffffff?text=B" alt="Avatar médio" />
      <div className="relative">
        <img className="h-16 w-16 rounded-full ring-2 ring-offset-2 ring-blue-400 dark:ring-offset-slate-900" src="https://placehold.co/100x100/3b82f6/ffffff?text=C" alt="Avatar grande com indicador de status" />
        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white dark:ring-slate-900" title="Online"></span>
      </div>
    </div>
);
// END: "Elementos de Mídia" Components

// START: "Extras & Avançados" Components
const TableExample: React.FC = () => (
    <div className="w-full overflow-x-auto rounded-lg shadow-md border dark:border-slate-700">
        <table className="min-w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800">
                <tr>
                    <th scope="col" className="px-4 py-3">Produto</th>
                    <th scope="col" className="px-4 py-3">Cor</th>
                    <th scope="col" className="px-4 py-3">Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900 dark:text-white whitespace-nowrap">Laptop</th>
                    <td className="px-4 py-3">Prata</td>
                    <td className="px-4 py-3">R$ 5.999</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900 dark:text-white whitespace-nowrap">Mouse</th>
                    <td className="px-4 py-3">Preto</td>
                    <td className="px-4 py-3">R$ 199</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const dataGridData = [
    { id: 1, name: 'Ana', age: 28, role: 'Admin' },
    { id: 2, name: 'Bruno', age: 34, role: 'Editor' },
    { id: 3, name: 'Carla', age: 22, role: 'Viewer' },
];
const DataGridExample: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof typeof dataGridData[0], dir: 'asc' | 'desc' } | null>({ key: 'name', dir: 'asc' });

    const sortedData = useMemo(() => {
        let sortableItems = [...dataGridData].filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.dir === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.dir === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [filter, sortConfig]);

    const requestSort = (key: keyof typeof dataGridData[0]) => {
        let dir: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.dir === 'asc') {
            dir = 'desc';
        }
        setSortConfig({ key, dir });
    };
    
    const getSortIndicator = (key: keyof typeof dataGridData[0]) => {
      if (sortConfig?.key === key) return sortConfig.dir === 'asc' ? ' ▲' : ' ▼';
      return '';
    }

    return (
        <div className="w-full">
            <input type="text" placeholder="Filtrar por nome..." value={filter} onChange={e => setFilter(e.target.value)} className="w-full mb-2 p-2 border dark:bg-slate-800 dark:border-slate-600 dark:text-white rounded text-sm" />
             <div className="w-full overflow-x-auto rounded-lg border dark:border-slate-700">
                <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-xs uppercase text-slate-700 dark:text-slate-300">
                        <tr>
                            <th onClick={() => requestSort('name')} className="cursor-pointer px-3 py-2">{`Nome${getSortIndicator('name')}`}</th>
                            <th onClick={() => requestSort('age')} className="cursor-pointer px-3 py-2">{`Idade${getSortIndicator('age')}`}</th>
                            <th onClick={() => requestSort('role')} className="cursor-pointer px-3 py-2">{`Função${getSortIndicator('role')}`}</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-slate-300">
                        {sortedData.map(item => (
                            <tr key={item.id} className="border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="px-3 py-2">{item.name}</td>
                                <td className="px-3 py-2">{item.age}</td>
                                <td className="px-3 py-2">{item.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const chartData = [
  { label: 'A', value: 45, color: 'fill-teal-500' },
  { label: 'B', value: 80, color: 'fill-blue-500' },
  { label: 'C', value: 60, color: 'fill-green-500' },
  { label: 'D', value: 25, color: 'fill-red-500' },
];
const ChartExample: React.FC = () => {
  const chartHeight = 150;
  const barWidth = 30;
  const barMargin = 20;
  const svgWidth = chartData.length * (barWidth + barMargin);
  const maxValue = 100;

  return (
    <div className="w-full max-w-sm p-4 flex justify-center items-center">
      <svg viewBox={`0 0 ${svgWidth} ${chartHeight + 20}`} aria-label="Gráfico de barras" role="img" className="w-full h-auto">
        <title>Exemplo de Gráfico de Barras</title>
        {chartData.map((item, index) => {
          const barHeight = (item.value / maxValue) * chartHeight;
          const x = index * (barWidth + barMargin);
          const y = chartHeight - barHeight;
          return (
            <g key={item.label} className="group cursor-pointer">
              <title>{`${item.label}: ${item.value}`}</title>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                className={`${item.color} transition-opacity duration-200 group-hover:opacity-75`}
                rx="2"
              />
              <text
                x={x + barWidth / 2}
                y={chartHeight + 15}
                textAnchor="middle"
                className="text-xs font-semibold fill-slate-600 dark:fill-slate-400"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};


const MapExample: React.FC = () => (
    <div className="w-full aspect-square max-w-md">
       <iframe
        className="w-full h-full rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-46.639,-23.553,-46.63,-23.548&layer=mapnik"
        title="Exemplo de Mapa OpenStreetMap"
        loading="lazy"
        >
      </iframe>
    </div>
);

const ChatWidgetExample: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-56 relative bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden">
            <div className="absolute bottom-4 right-4 z-20">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-teal-600 transition-transform hover:scale-110">
                    {isOpen ? '✕' : '💬'}
                </button>
            </div>
            {isOpen && (
                <div className="absolute bottom-20 right-4 w-64 h-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col z-10 animate-fade-in-up">
                    <header className="bg-teal-500 text-white p-3 rounded-t-lg">Chat de Suporte</header>
                    <main className="flex-1 p-2 text-xs text-slate-500 dark:text-slate-300">Converse conosco!</main>
                    <footer className="p-2 border-t dark:border-slate-700"><input className="w-full text-xs p-1 border dark:bg-slate-700 dark:border-slate-600 rounded" placeholder="Digite sua mensagem..."/></footer>
                </div>
            )}
        </div>
    );
};

const NotificationCenterExample: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 rounded-full hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-md shadow-lg border dark:border-slate-700 origin-top-right z-10">
                    <div className="p-2 font-bold border-b dark:border-slate-700 dark:text-slate-200">Notificações</div>
                    <ul className="text-sm dark:text-slate-300">
                        <li className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 truncate">Nova mensagem de Ana.</li>
                        <li className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 truncate">Sua tarefa foi concluída.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const TagExample: React.FC = () => (
    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full">Tecnologia</span>
      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 rounded-full">Produtividade</span>
      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full">Design</span>
    </div>
);

const BreadcrumbFilterComboExample: React.FC = () => (
    <div className="w-full p-4 bg-white dark:bg-slate-800 rounded-lg border dark:border-slate-700">
        <nav aria-label="breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="#" className="hover:text-teal-500">Home</a></li>
                <li><span className="select-none">&gt;</span></li>
                <li className="font-semibold text-slate-700 dark:text-slate-200" aria-current="page">Produtos</li>
            </ol>
        </nav>
        <div className="mt-4 pt-4 border-t dark:border-slate-700 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4 text-sm">
            <span className="font-semibold dark:text-slate-300">Filtrar por:</span>
            <select className="border-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-white rounded-md text-sm py-1">
                <option>Categoria</option>
            </select>
            <select className="border-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-white rounded-md text-sm py-1">
                <option>Preço</option>
            </select>
        </div>
    </div>
);
// END: "Extras & Avançados" Components

// START: New components requested by user
const DividerExample: React.FC = () => (
    <div className="w-full max-w-sm flex flex-col items-center space-y-4">
        <div className="w-full flex items-center">
            <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            <span className="flex-shrink mx-4 text-slate-500 dark:text-slate-400 text-sm">Conteúdo</span>
            <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
        </div>
        <div className="w-full border-t border-slate-300 dark:border-slate-700 border-dashed"></div>
        <p className="text-sm text-slate-600 dark:text-slate-400">Texto acima</p>
        <div className="w-full border-t border-teal-500"></div>
        <p className="text-sm text-slate-600 dark:text-slate-400">Texto abaixo</p>
    </div>
);

const ListGroupExample: React.FC = () => (
    <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
            <li className="p-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 dark:text-slate-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span className="flex-1 font-medium text-slate-800 dark:text-slate-200">Perfil</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Ver</span>
            </li>
            <li className="p-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="flex-1">
                    <p className="font-medium text-teal-800 dark:text-teal-300">Mensagens</p>
                    <p className="text-xs text-teal-600 dark:text-teal-400">Nova mensagem de Alex</p>
                </div>
                <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
            </li>
            <li className="p-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer">
                <img className="h-10 w-10 rounded-full mr-3" src="https://placehold.co/100x100/e2e8f0/475569?text=DA" alt="Avatar"/>
                <div className="flex-1">
                    <p className="font-medium text-slate-800 dark:text-slate-200">Danilo Arruda</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Online</p>
                </div>
                <button className="text-xs bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold py-1 px-3 rounded-md">Adicionar</button>
            </li>
        </ul>
    </div>
);

const TreeViewNode: React.FC<{ node: any, level: number }> = ({ node, level }) => {
    const [isOpen, setIsOpen] = useState(node.isOpen ?? false);

    return (
        <li style={{ paddingLeft: `${level * 16}px` }}>
            <div className="flex items-center py-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded" onClick={() => setIsOpen(!isOpen)}>
                {node.children && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-1 transition-transform flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                )}
                <span className={`text-sm ${!node.children ? 'ml-5' : ''}`}>{node.name}</span>
            </div>
            {isOpen && node.children && (
                <ul className="text-slate-600 dark:text-slate-400">
                    {node.children.map((child: any, index: number) => <TreeViewNode key={`${child.name}-${index}`} node={child} level={level + 1} />)}
                </ul>
            )}
        </li>
    );
};

const treeViewData = {
    name: 'Projeto',
    isOpen: true,
    children: [
        { name: 'index.html' },
        { 
            name: 'src', 
            isOpen: true,
            children: [
                { name: 'App.tsx' },
                { name: 'index.tsx' },
            ]
        },
        { name: 'package.json' },
    ]
};
const TreeViewExample: React.FC = () => {
    return (
        <div className="w-full max-w-xs bg-white dark:bg-slate-800 p-2 rounded-lg border dark:border-slate-700">
            <ul className="text-slate-800 dark:text-slate-200">
                <TreeViewNode node={treeViewData} level={0} />
            </ul>
        </div>
    );
};

const DrawerExample: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
            <button onClick={() => setIsOpen(true)} className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors">Abrir Drawer</button>
            {/* Overlay */}
            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black transition-opacity ${isOpen ? 'bg-opacity-50 z-30' : 'bg-opacity-0 pointer-events-none'}`}></div>
            {/* Drawer Panel */}
            <aside className={`fixed top-0 right-0 h-full bg-white dark:bg-slate-800 w-64 shadow-xl transform transition-transform z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b dark:border-slate-700 flex justify-between items-center">
                    <h3 className="font-bold dark:text-slate-200">Menu</h3>
                    <button onClick={() => setIsOpen(false)} className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-2xl">&times;</button>
                </div>
                <nav className="p-4 space-y-2 text-slate-800 dark:text-slate-300">
                    <a href="#" className="block p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700">Início</a>
                    <a href="#" className="block p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700">Perfil</a>
                    <a href="#" className="block p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700">Configurações</a>
                </nav>
            </aside>
        </div>
    );
};

const scrollableTabsData = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
const ScrollableTabsExample: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Item 5');

    return (
        <div className="w-full max-w-md">
            <div className="relative border-b border-slate-200 dark:border-slate-700">
                <div className="flex overflow-x-auto space-x-4 pb-px no-scrollbar">
                    {scrollableTabsData.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap py-2 px-3 font-medium text-sm rounded-t-md transition-colors ${
                                activeTab === tab
                                ? 'bg-teal-50 dark:bg-slate-800 text-teal-600 border-b-2 border-teal-500'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="pt-4 text-slate-600 dark:text-slate-400 text-sm">
                <p>Conteúdo para <span className="font-bold dark:text-slate-200">{activeTab}</span>.</p>
            </div>
        </div>
    );
};

const calendarDaysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const calendarMonthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const CalendarViewExample: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(year, month + offset, 1));
    };

    return (
        <div className="w-full max-w-xs bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md border dark:border-slate-700">
            <div className="flex justify-between items-center mb-2 dark:text-slate-200">
                <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">&lt;</button>
                <h3 className="font-semibold text-sm">{calendarMonthNames[month]} {year}</h3>
                <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">&gt;</button>
            </div>
            <div className="grid grid-cols-7 text-center text-xs text-slate-500 dark:text-slate-400">
                {calendarDaysOfWeek.map((day, i) => <div key={`${day}-${i}`} className="font-medium">{day}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm mt-1 dark:text-slate-300">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const dayNumber = day + 1;
                    const isToday = new Date().toDateString() === new Date(year, month, dayNumber).toDateString();
                    return (
                        <div key={dayNumber} className={`p-1 rounded-full w-7 h-7 flex items-center justify-center mx-auto ${isToday ? 'bg-teal-500 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer'}`}>
                            {dayNumber}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const autoCompleteOptions = ['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Next.js'];
const AutoCompleteExample: React.FC = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filtered = autoCompleteOptions.filter(opt => opt.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };
    
    return (
        <div className="relative w-full max-w-xs">
            <label htmlFor="autocomplete" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Buscar Framework</label>
            <input 
                id="autocomplete"
                type="text"
                value={query}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-md focus:ring-teal-500 focus:border-teal-500"
                autoComplete="off"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md mt-1 shadow-lg max-h-40 overflow-y-auto">
                    {suggestions.map(s => (
                        <li key={s} onClick={() => { setQuery(s); setSuggestions([]); }} className="p-2 text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer">{s}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const DateRangePickerExample: React.FC = () => {
    const [startDate, setStartDate] = useState('2024-08-01');
    const [endDate, setEndDate] = useState('2024-08-07');

    return (
        <div className="w-full max-w-sm flex flex-col space-y-2">
            <div>
                <label htmlFor="start-date" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Data de Início</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white py-2 px-3 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="end-date" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Data Final</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white py-2 px-3 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

const RatingExample: React.FC = () => {
    const [rating, setRating] = useState(3);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-2xl"
                    aria-label={`Avaliar ${star} de 5 estrelas`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transition-colors ${(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </button>
            ))}
        </div>
    );
};
// END: New components requested by user


export const componentCategories: ComponentCategory[] = [
  {
    title: "Estrutura & Layout",
    icon: "📌",
    description: "Os blocos de construção que definem a arquitetura visual e o esqueleto de qualquer página web, garantindo uma base sólida e responsiva.",
    components: [
       {
        name: "Container / Wrapper",
        description: "Delimita e centraliza o conteúdo principal, garantindo margens consistentes e legibilidade em diferentes tamanhos de tela.",
        usage: "Use um container para estabelecer a largura máxima do seu conteúdo principal, garantindo que ele não se estenda por toda a tela em monitores grandes. É fundamental para criar layouts consistentes e legíveis em qualquer site ou aplicação.",
        component: <ContainerExample />,
        code: `
<div className="w-full bg-slate-200 dark:bg-slate-700/50 p-4 rounded-lg">
  {/* O container centraliza o conteúdo dentro dele */}
  <div className="container mx-auto bg-white dark:bg-slate-800 shadow-md p-4 rounded">
    <p className="dark:text-slate-300">Conteúdo centralizado.</p>
  </div>
</div>`
      },
      {
        name: "Section",
        description: "Divide a página em áreas temáticas ou blocos de conteúdo distintos, melhorando a organização visual e a semântica do HTML.",
        usage: "Utilize seções para agrupar conteúdo relacionado semanticamente. Por exemplo, uma seção 'Sobre Nós', uma seção 'Nossos Serviços' e uma seção 'Contato'. Isso melhora a estrutura do HTML e a acessibilidade para leitores de tela.",
        component: <SectionExample />,
        code: `
<section className="w-full bg-white dark:bg-slate-800 shadow-md p-4 sm:p-6 rounded-lg border-l-4 border-teal-500">
  <h3 className="font-bold text-lg mb-2 dark:text-slate-200">Título da Seção</h3>
  <p className="text-slate-600 dark:text-slate-400 text-sm">Este é um bloco de conteúdo temático.</p>
</section>`
      },
      {
        name: "Header",
        description: "A área superior da página ou de uma seção, contendo branding, título ou navegação principal. Define a identidade visual.",
        usage: "O cabeçalho é ideal para a parte superior de cada página, contendo o logotipo do site, o menu de navegação principal e, opcionalmente, botões de ação como 'Login' ou 'Cadastre-se'.",
        component: <HeaderExample />,
        code: `
<header className="w-full bg-white dark:bg-slate-800 shadow-md p-4 rounded-lg flex justify-between items-center">
  <div className="font-bold text-teal-500">Logo</div>
  <nav className="flex space-x-4 text-sm text-slate-800 dark:text-slate-300">
    <a href="#" className="hover:text-teal-500 transition-colors">Link 1</a>
    <a href="#" className="hover:text-teal-500 transition-colors">Link 2</a>
  </nav>
</header>`
      },
      {
        name: "Navbar / Navigation",
        description: "Um conjunto de links que permite aos usuários navegar pelas principais seções de um site. Essencial para a usabilidade.",
        usage: "Empregue uma barra de navegação para fornecer os links principais do seu site. Ela deve ser consistente em todas as páginas para que os usuários possam se orientar e acessar facilmente as áreas mais importantes.",
        component: <NavbarExample />,
        code: `
<nav className="w-full bg-teal-500 p-3 rounded-lg flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
  <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md">Início</a>
  <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md">Sobre</a>
  <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md">Contato</a>
</nav>`
      },
      {
        name: "Sidebar",
        description: "Uma coluna vertical, geralmente à esquerda ou direita, contendo navegação secundária, filtros ou informações contextuais.",
        usage: "Uma barra lateral é perfeita para navegação secundária, menus de painel de controle (dashboard), listas de filtros em uma página de e-commerce ou para exibir informações contextuais que não são o foco principal da página.",
        component: <SidebarExample />,
        code: `
<div className="w-full h-auto md:h-56 flex flex-col md:flex-row rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md">
  {/* Em telas móveis, a sidebar fica no topo */}
  <aside className="w-full md:w-1/3 bg-slate-800 p-4 flex flex-col">
    {/* ... */}
    <nav className="flex flex-col space-y-2">
      <a href="#">Painel</a>
      <a href="#">Perfil</a>
      <a href="#">Ajustes</a>
    </nav>
  </aside>
  {/* Conteúdo principal abaixo em telas móveis, ao lado em telas maiores */}
  <main className="w-full md:w-2/3 p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-900">
    <p className="text-sm text-slate-600 dark:text-slate-400">Conteúdo principal.</p>
  </main>
</div>`
      },
      {
        name: "Footer",
        description: "O rodapé da página, contendo informações como links úteis, contatos, direitos autorais e links para redes sociais.",
        usage: "O rodapé é o local para informações que não precisam estar em destaque, mas devem ser facilmente acessíveis, como links de política de privacidade, termos de uso, mapa do site, informações de contato e direitos autorais.",
        component: <FooterExample />,
        code: `
<footer className="w-full bg-slate-800 text-white p-4 rounded-lg text-center">
  <p className="text-sm">&copy; 2024 Meu Site. Todos os direitos reservados.</p>
</footer>`
      },
      {
        name: "Grid / Flexbox Layout",
        description: "Sistemas de layout poderosos para criar arranjos responsivos e complexos. Grid é para layout 2D, Flexbox para 1D.",
        usage: "Use Flexbox para alinhar itens em uma única dimensão (linha ou coluna), como centralizar itens em um card. Use Grid para layouts bidimensionais complexos, como galerias de imagens ou qualquer design que precise de alinhamento em linhas e colunas.",
        component: <GridFlexboxExample />,
        code: `
<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
  <div className="bg-teal-100 dark:bg-teal-900/50 ... text-teal-800 dark:text-teal-200">1</div>
  <div className="bg-teal-100 dark:bg-teal-900/50 ... text-teal-800 dark:text-teal-200">2</div>
  <div className="bg-teal-100 dark:bg-teal-900/50 ... text-teal-800 dark:text-teal-200">3</div>
  <div className="bg-teal-100 dark:bg-teal-900/50 col-span-2 sm:col-span-1 ...">4</div>
  <div className="bg-teal-100 dark:bg-teal-900/50 ... text-teal-800 dark:text-teal-200">5</div>
  <div className="bg-teal-100 dark:bg-teal-900/50 ... text-teal-800 dark:text-teal-200">6</div>
</div>`
      },
      {
        name: "Hero Section",
        description: "Área de destaque no topo da página para capturar a atenção do usuário com uma imagem impactante e um call-to-action.",
        usage: "A seção 'Hero' é a primeira coisa que um visitante vê. Use-a na sua página inicial para causar uma forte primeira impressão, comunicar sua proposta de valor principal e guiar o usuário para a ação mais importante (Call to Action).",
        component: <HeroExample />,
        code: `
<div className="w-full text-center bg-slate-200 dark:bg-slate-800 p-6 sm:p-8 rounded-lg">
  <h2 className="text-2xl sm:text-3xl font-bold dark:text-slate-200">Hero Title</h2>
  <p className="mt-2 text-slate-600 dark:text-slate-400">Descrição atrativa aqui.</p>
  <button className="mt-4 bg-teal-500 ...">
    Call to Action
  </button>
</div>
`
      },
       {
        name: "Card",
        description: "Um bloco de conteúdo autocontido, geralmente com uma imagem, título e ações, usado para exibir itens em uma coleção.",
        usage: "Cards são ideais para exibir uma coleção de itens de conteúdo de forma organizada e repetível, como postagens de blog, produtos em uma loja, ou perfis de usuário. Cada card funciona como uma unidade de informação independente.",
        component: <CardExample />,
        code: `
<div className="w-full max-w-xs bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
  <h4 className="font-bold text-lg dark:text-slate-200">Título do Card</h4>
  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
    Este é um bloco de conteúdo encapsulado.
  </p>
</div>
`
      },
      {
        name: "Divider / Separator",
        description: "Linhas ou espaços visuais para separar ou agrupar conteúdo, melhorando a clareza e a organização do layout.",
        usage: "Use divisores para criar uma separação visual clara entre diferentes seções ou grupos de elementos. Eles ajudam a reduzir a carga cognitiva do usuário, tornando o layout mais escaneável e organizado.",
        component: <DividerExample />,
        code: `
<div className="w-full max-w-sm space-y-4">
    {/* Divisor com texto */}
    <div className="flex items-center">
        <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
        <span className="mx-4 text-slate-500 dark:text-slate-400">Conteúdo</span>
        <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
    </div>
    {/* Divisor simples */}
    <div className="w-full border-t border-teal-500"></div>
</div>
`
      },
    ]
  },
  {
    title: "Navegação & Organização",
    icon: "🧭",
    description: "Componentes que guiam os usuários pelo seu site, ajudando-os a encontrar informações de forma rápida, intuitiva e sem esforço.",
    components: [
      {
        name: "Breadcrumb",
        description: "Mostra o caminho de navegação do usuário, permitindo que ele retorne facilmente às páginas anteriores.",
        usage: "Ideal para sites com hierarquia de páginas profunda, como e-commerce (Home > Calçados > Tênis) ou documentações. Ajuda o usuário a entender onde está e a navegar de volta para níveis superiores facilmente.",
        component: <BreadcrumbExample />,
        code: `
<nav aria-label="breadcrumb">
  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
    <li><a href="#" className="hover:text-teal-500">Início</a></li>
    <li><span>&gt;</span></li>
    <li><a href="#" className="hover:text-teal-500">Categoria</a></li>
    <li><span>&gt;</span></li>
    <li className="font-semibold text-slate-700 dark:text-slate-200" aria-current="page">Página Atual</li>
  </ol>
</nav>
`
      },
      {
        name: "Pagination",
        description: "Divide grandes conjuntos de conteúdo em várias páginas para facilitar a navegação.",
        usage: "Use paginação quando você tiver uma longa lista de itens (mais de 20-30), como resultados de busca ou artigos de blog. Isso melhora o desempenho e a usabilidade, evitando sobrecarregar o usuário com muitas informações.",
        component: <PaginationExample />,
        code: `
const [currentPage, setCurrentPage] = useState(2);
// ...
<nav className="flex flex-wrap justify-center items-center gap-2">
  <button className="px-3 py-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300">Previous</button>
  {pages.map(p => (
      <button key={p} 
        onClick={() => setCurrentPage(p)} 
        className={\`w-8 h-8 rounded-md dark:text-slate-300 \${currentPage === p ? 'bg-teal-500 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}\`}
      >
        {p}
      </button>
  ))}
  <button className="px-3 py-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300">Next</button>
</nav>
`
      },
      {
        name: "Tabs",
        description: "Permite alternar entre diferentes seções de conteúdo no mesmo espaço, economizando espaço na tela.",
        usage: "Abas são perfeitas para organizar conteúdo relacionado em um espaço compacto. Use quando você tem diferentes visualizações de um mesmo item, como 'Descrição do Produto', 'Especificações Técnicas' e 'Avaliações'.",
        component: <TabsExample />,
        code: `
const [activeTab, setActiveTab] = useState(2);
// ...
<div className="border-b border-slate-200 dark:border-slate-700">
  <nav className="flex flex-wrap space-x-4">
    <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active-class' : 'inactive-class dark:inactive-dark-class'}>Aba 1</button>
    {/* ... mais abas */}
  </nav>
</div>
<div className="pt-4 text-slate-600 dark:text-slate-400">
  {activeTab === 1 && <p>Conteúdo 1.</p>}
  {/* ... mais conteúdos */}
</div>
`
      },
      {
        name: "Accordion",
        description: "Permite que os usuários expandam e recolham seções de conteúdo. Ideal para FAQs e para economizar espaço vertical.",
        usage: "Utilize um acordeão para seções de perguntas frequentes (FAQ), menus complexos ou qualquer conteúdo que possa ser condensado para economizar espaço vertical. Permite que o usuário foque apenas no conteúdo que lhe interessa.",
        component: <AccordionExample />,
        code: `
const Accordion = () => {
  const [open, setOpen] = useState(0);
  const toggle = (id) => setOpen(open === id ? 0 : id);

  return (
    <div className="border-b dark:border-slate-700">
      <button onClick={() => toggle(1)} className="dark:text-slate-200">Seção 1</button>
      {open === 1 && <div className="text-slate-600 dark:text-slate-400">Conteúdo 1</div>}
      {/* ... */}
    </div>
  );
}`
      },
      {
        name: "Dropdown Menu",
        description: "Um menu que aparece quando o usuário clica em um botão ou item, revelando uma lista de opções ou ações.",
        usage: "Ótimo para listas de ações ou links que não precisam estar sempre visíveis. Comum em cabeçalhos para menus de perfil de usuário ('Minha Conta', 'Sair') ou para agrupar ações secundárias em um botão.",
        component: <DropdownExample />,
        code: `
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">Opções</button>
      {isOpen && (
        <ul className="bg-white dark:bg-slate-800 ring-black dark:ring-white">
          <li className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"><a href="#">Item 1</a></li>
          <li className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"><a href="#">Item 2</a></li>
        </ul>
      )}
    </div>
  );
}`
      },
      {
        name: "Submenu / Mega Menu",
        description: "Navegação em camadas onde itens de menu revelam subcategorias. Mega menus são versões expandidas para muitos links.",
        usage: "Use um submenu para menus de navegação com categorias e subcategorias. Um Mega Menu é a escolha ideal para sites grandes, como e-commerces, onde você precisa exibir muitos links e até mesmo imagens dentro do menu principal.",
        component: <SubmenuExample />,
        code: `
<nav className="bg-slate-800">
  <a href="#">Início</a>
  <div className="relative group">
    <button>Serviços</button>
    {/* Aparece no hover do 'group' */}
    <div className="absolute opacity-0 group-hover:opacity-100 bg-white dark:bg-slate-700">
      <a href="#" className="dark:text-slate-200 dark:hover:bg-slate-600">Web Design</a>
      <a href="#" className="dark:text-slate-200 dark:hover:bg-slate-600">Marketing</a>
    </div>
  </div>
</nav>`
      },
      {
        name: "Sidebar Expandível",
        description: "Um painel de navegação lateral que pode ser expandido ou recolhido para otimizar o espaço da tela.",
        usage: "Perfeito para painéis de administração (dashboards) e aplicações web complexas, onde o espaço na tela é valioso. Permite que o usuário maximize a área de conteúdo quando a navegação não está em uso.",
        component: <ExpandableSidebarExample />,
        code: `
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="flex h-full bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
      <aside className={\`bg-slate-800 text-white flex flex-col transition-all duration-300 \${isExpanded ? 'w-48' : 'w-20'}\`}>
        <div className={\`p-4 flex items-center border-b border-slate-700 \${isExpanded ? 'justify-between' : 'justify-center'}\`}>
            {isExpanded && <span className="font-bold">Menu</span>}
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="p-1 rounded hover:bg-slate-700"
              aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
            >
                {/* Ícone SVG que muda */}
            </button>
        </div>
        <nav className="flex-1 p-2 space-y-1">
            {/* ... Itens do menu ... */}
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400">Conteúdo principal.</main>
    </div>
  );
}`
      },
      {
        name: "Search Bar",
        description: "Um campo de entrada que permite aos usuários pesquisar conteúdo dentro do site ou aplicação.",
        usage: "Essencial para qualquer site com muito conteúdo. Posicione-a de forma proeminente, geralmente no cabeçalho, para permitir que os usuários encontrem rapidamente o que procuram.",
        component: <SearchBarExample />,
        code: `
<div className="relative">
  <input type="search" placeholder="Buscar..." className="pl-10 dark:bg-slate-800 dark:border-slate-600 dark:text-white ..." />
  <div className="absolute left-3 top-1/2 -translate-y-1/2">
    {/* SVG Icon */}
  </div>
</div>`
      },
      {
        name: "Filter / Sort Controls",
        description: "Controles, como menus suspensos ou caixas de seleção, que permitem aos usuários filtrar e ordenar listas de conteúdo.",
        usage: "Indispensável em páginas de listagem, como e-commerce ou galerias. Permite que os usuários refinem os resultados de acordo com seus critérios (preço, categoria, data, etc.), melhorando a experiência de busca.",
        component: <FilterSortExample />,
        code: `
<div className="flex flex-col sm:flex-row gap-4">
  <div className="flex-1">
    <label htmlFor="sort" className="dark:text-slate-300">Ordenar por</label>
    <select id="sort" className="dark:bg-slate-800 dark:border-slate-600 dark:text-white">
      <option>Relevância</option>
      <option>Preço</option>
    </select>
  </div>
  {/* ... mais filtros */}
</div>`
      },
      {
        name: "List Group",
        description: "Exibe uma lista de itens com conteúdo variado, incluindo ícones, avatares e ações, para uma apresentação rica.",
        usage: "Use grupos de listas para apresentar informações de forma estruturada e visualmente rica. É mais flexível que uma lista padrão (<ul>), sendo ótimo para menus de configurações, listas de contatos ou feeds de atividades.",
        component: <ListGroupExample />,
        code: `
<div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-md border dark:border-slate-700">
    <ul className="divide-y divide-slate-200 dark:divide-slate-700">
        <li className="p-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50">
            {/* Ícone */}
            <span className="flex-1 dark:text-slate-200">Perfil</span>
            <span className="text-xs dark:text-slate-400">Ver</span>
        </li>
        <li className="p-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 bg-teal-50 dark:bg-teal-900/20">
            {/* Ícone Ativo + Badge */}
        </li>
        <li className="p-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50">
            <img ... />
            <div className="flex-1">...</div>
            <button className="dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200">Adicionar</button>
        </li>
    </ul>
</div>`
      },
      {
        name: "Tree View / Nested List",
        description: "Exibe informações em uma estrutura hierárquica, permitindo que os usuários expandam e recolham ramos.",
        usage: "Ideal para exibir estruturas hierárquicas, como sistemas de arquivos, organogramas ou estruturas de navegação aninhadas. Permite ao usuário explorar a hierarquia de forma interativa.",
        component: <TreeViewExample />,
        code: `
const TreeNode = ({ node, level }) => {
  const [isOpen, setIsOpen] = useState(node.isOpen);

  return (
    <li style={{ paddingLeft: \`\${level * 16}px\` }}>
      <div onClick={() => setIsOpen(!isOpen)} className="hover:bg-slate-100 dark:hover:bg-slate-700/50">
        {/* ... */}
        <span>{node.name}</span>
      </div>
      {isOpen && node.children && (
        <ul className="dark:text-slate-400">
          {node.children.map(child => <TreeNode ... />)}
        </ul>
      )}
    </li>
  );
};`
      },
      {
        name: "Drawer / Off-canvas",
        description: "Um painel lateral que desliza para fora da tela, usado para navegação, filtros ou conteúdo secundário.",
        usage: "Use um Drawer para conteúdo que não é essencial para a visualização principal, mas precisa estar acessível, como menus de navegação em dispositivos móveis, carrinhos de compras ou painéis de notificação.",
        component: <DrawerExample />,
        code: `
const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Drawer</button>
      {/* Overlay */}
      <div className={isOpen ? 'fixed inset-0 bg-black/50' : 'hidden'} onClick={() => setIsOpen(false)}></div>
      {/* Painel */}
      <aside className={\`fixed ... bg-white dark:bg-slate-800 \${isOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
        {/* Conteúdo do Drawer */}
      </aside>
    </div>
  );
}`
      },
      {
        name: "Scrollable Tabs",
        description: "Uma variação de abas que permite rolagem horizontal quando o número de abas excede o espaço disponível.",
        usage: "A solução perfeita quando você tem mais abas do que o espaço da tela permite, como em visualizações de painéis com muitas opções ou em interfaces móveis. Evita que o layout quebre e mantém a usabilidade.",
        component: <ScrollableTabsExample />,
        code: `
<div className="relative border-b dark:border-slate-700">
    <div className="flex overflow-x-auto space-x-4 no-scrollbar">
        {tabs.map(tab => (
            <button key={tab} className={activeTab === tab ? 'active dark:bg-slate-800' : 'inactive dark:text-slate-400 dark:hover:bg-slate-700/50'} ... >{tab}</button>
        ))}
    </div>
</div>`
      },
    ]
  },
  {
    title: "Conteúdo & Interatividade",
    icon: "🖼️",
    description: "Elementos que apresentam informações de forma dinâmica e envolvente, transformando visitantes passivos em usuários ativos.",
    components: [
       {
        name: "Modal / Dialog",
        description: "Janela sobreposta para exibir informações importantes ou solicitar uma ação sem sair da página atual.",
        usage: "Use um modal para interromper o fluxo do usuário e solicitar uma ação crítica, como uma confirmação de exclusão ('Você tem certeza?'), um formulário de login ou para exibir informações importantes sem perder o contexto da página.",
        component: <ModalExample />,
        code: `
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl">
            <h3 className="dark:text-slate-200">Título do Modal</h3>
            <p className="dark:text-slate-400">Conteúdo do modal...</p>
            <button onClick={() => setIsOpen(false)} className="dark:bg-slate-700 dark:text-slate-200">Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}`
      },
      {
        name: "Tooltip",
        description: "Pequena caixa de texto que aparece ao passar o mouse sobre um elemento, fornecendo informações contextuais.",
        usage: "Perfeito para fornecer informações adicionais e concisas sobre um ícone, botão ou um termo técnico, sem poluir a interface. O usuário descobre a informação ao passar o mouse, de forma não intrusiva.",
        component: <TooltipExample />,
        code: `
<div className="relative group">
  <button className="bg-slate-200 dark:bg-slate-700 dark:text-slate-200">Passe o mouse</button>
  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-slate-800 text-white">
    Esta é uma dica!
  </div>
</div>`
      },
      {
        name: "Popover",
        description: "Similar a um tooltip, mas pode conter conteúdo mais rico e é geralmente acionado por um clique.",
        usage: "Use um popover quando precisar exibir mais informações do que caberia em um tooltip, como um mini-formulário, um seletor de data ou um conjunto de ações. É acionado por clique e oferece mais interatividade.",
        component: <PopoverExample />,
        code: `
const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>Abrir Popover</button>
      {isOpen && (
        <div className="absolute bottom-full mb-2 bg-white dark:bg-slate-700 dark:border-slate-600 p-4 rounded shadow-lg">
          <h4 className="dark:text-slate-200">Título do Popover</h4>
          <p className="dark:text-slate-300">Conteúdo mais rico aqui.</p>
        </div>
      )}
    </div>
  );
}`
      },
      {
        name: "Slider / Carousel",
        description: "Componente que permite navegar por uma série de itens (imagens ou cards) de forma horizontal.",
        usage: "Ideal para exibir uma seleção de imagens ou destaques na página inicial, galerias de produtos ou depoimentos de clientes. Economiza espaço e cria um ponto focal visualmente atraente.",
        component: <SliderExample />,
        code: `
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  
  return (
    <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800">
      <div style={{ transform: \`translateX(-\${current * 100}%)\` }} className="text-slate-700 dark:text-slate-300">
        {slides.map(s => <div>{s}</div>)}
      </div>
      <button onClick={() => setCurrent(c => c - 1)} className="bg-white/50 dark:bg-slate-900/50">Prev</button>
      <button onClick={() => setCurrent(c => c + 1)} className="bg-white/50 dark:bg-slate-900/50">Next</button>
    </div>
  );
}`
      },
      {
        name: "Gallery / Lightbox",
        description: "Exibe uma grade de imagens que, ao serem clicadas, abrem em uma visualização ampliada (lightbox).",
        usage: "Utilize em portfólios, páginas de produtos ou em qualquer lugar onde você precise exibir uma coleção de imagens. A funcionalidade de lightbox permite que os usuários vejam os detalhes de cada imagem em tela cheia.",
        component: <GalleryExample />,
        code: `
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState('');

  const openLightbox = (src) => {
    setImage(src);
    setIsOpen(true);
  };
  
  return (
    <>
      {/* ... grid de imagens com onClick={openLightbox} ... */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80" onClick={() => setIsOpen(false)}>
          <img src={image} />
        </div>
      )}
    </>
  );
}`
      },
      {
        name: "Timeline",
        description: "Exibe uma lista de eventos em ordem cronológica, ideal para históricos, processos ou trajetórias.",
        usage: "Perfeito para contar uma história ou exibir eventos em ordem cronológica, como o histórico de uma empresa, o andamento de um projeto ou as atualizações de um pedido.",
        component: <TimelineExample />,
        code: `
<div className="relative">
  {/* Linha vertical */}
  <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700"></div>
  {/* Itens da timeline */}
  <div className="relative mb-8 ...">
    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 dark:border-slate-900"></div>
    <div className="bg-white dark:bg-slate-800 dark:text-slate-200">Evento 1</div>
  </div>
</div>`
      },
      {
        name: "Steps / Wizard",
        description: "Guia o usuário através de um processo com múltiplas etapas, como um cadastro ou um checkout.",
        usage: "Use para dividir processos longos e complexos em etapas gerenciáveis. É ideal para formulários de cadastro, processos de checkout ou qualquer tarefa que exija múltiplos passos, guiando o usuário do início ao fim.",
        component: <StepsExample />,
        code: `
const Steps = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <nav>
        <div className={step >= 1 ? 'active' : 'bg-slate-200 dark:bg-slate-700'}>Etapa 1</div>
        <div className={step > 1 ? 'line-active' : 'line-inactive dark:bg-slate-700'}></div>
        <div className={step >= 2 ? 'active' : 'bg-slate-200 dark:bg-slate-700'}>Etapa 2</div>
      </nav>
      {/* ... */}
    </div>
  );
}`
      },
      {
        name: "FAQ (Perguntas Frequentes)",
        description: "Uma lista de perguntas e respostas comuns, apresentada em formato de acordeão para economizar espaço e facilitar a leitura.",
        usage: "Indispensável para páginas de suporte ou de produtos. Organiza as dúvidas mais comuns de forma limpa e concisa, permitindo que os usuários encontrem respostas rapidamente sem precisar contatar o suporte.",
        component: <FAQExample />,
        code: `
const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  //...
  return (
    <div className="w-full max-w-md space-y-2">
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b dark:border-slate-700">
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full ... text-slate-800 dark:text-slate-200"
            aria-expanded={openId === faq.id}
          >
            {/* ... */}
          </button>
          <div className={\`...\`}>
            <p className="dark:text-slate-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};`
      },
      {
        name: "Calendar / Agenda View",
        description: "Exibe datas em uma visualização de calendário mensal, útil para agendamentos, eventos ou logs de atividades.",
        usage: "Utilize para aplicações de agendamento, reserva de eventos, ou para exibir logs de atividades por data. Fornece uma visão clara e familiar para interagir com datas.",
        component: <CalendarViewExample />,
        code: `
const Calendar = () => {
  // ...
  return (
    <div className="w-full max-w-xs bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md border dark:border-slate-700">
      <div className="flex justify-between items-center mb-2 dark:text-slate-200">
        {/* ... */}
      </div>
      <div className="grid grid-cols-7 text-center text-xs dark:text-slate-400">
        {/* ... */}
      </div>
      <div className="grid grid-cols-7 text-center text-sm mt-1 dark:text-slate-300">
        {/* ... */}
      </div>
    </div>
  );
};`
      },
    ]
  },
  {
    title: "Formulários & Inputs",
    icon: "📝",
    description: "A coleção de campos e controles que permitem aos usuários inserir e enviar dados. O coração da interatividade e da coleta de informações.",
    components: [
      {
        name: "Form",
        description: "A estrutura que agrupa campos de entrada, botões e outros elementos para coletar e enviar dados do usuário.",
        usage: "Sempre que precisar coletar dados do usuário, seja para um simples formulário de contato, um cadastro complexo ou um processo de checkout. O formulário é a base da interação do usuário com a aplicação.",
        component: <FormExample />,
        code: `
const LoginForm = () => {
  // ...
  return (
    <form className="w-full max-w-sm bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border dark:border-slate-700 space-y-6">
      <div className="text-center">
        <h2 className="dark:text-slate-100">Acesse sua conta</h2>
        <p className="dark:text-slate-400">Bem-vindo de volta!</p>
      </div>
      
      <div>
        <label htmlFor="email" className="dark:text-slate-300">Email</label>
        <input 
          type="email" 
          id="email" 
          className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50"
          placeholder="voce@exemplo.com"
        />
      </div>
      
       {/* ... Mais campos com estilos para dark mode */}
    </form>
  );
};`
      },
      {
        name: "Input",
        description: "Campo para entrada de texto, números, e-mails, senhas, etc. O elemento de formulário mais fundamental.",
        usage: "O bloco de construção mais básico de qualquer formulário. Use para coletar informações curtas como nome, e-mail ou senha. Adapte o `type` (text, email, password, number) para melhorar a usabilidade e validação.",
        component: <InputExample />,
        code: `
<div className="w-full max-w-xs">
  <label htmlFor="email" className="dark:text-slate-300">Email</label>
  <div className="relative mt-1">
    {/* Ícone de Email (SVG) */}
    <input 
      type="email" 
      name="email" 
      id="email" 
      className="dark:bg-slate-800 dark:border-slate-600 dark:text-white" 
      placeholder="voce@exemplo.com" 
    />
  </div>
</div>`
      },
       {
        name: "Textarea",
        description: "Permite a entrada de múltiplas linhas de texto, ideal para comentários, mensagens ou descrições longas.",
        usage: "Ideal para quando você precisa que o usuário insira um texto mais longo e de múltiplas linhas, como um campo de comentários, uma descrição detalhada ou o corpo de uma mensagem.",
        component: <TextareaExample />,
        code: `
const TextareaWithCounter = () => {
  // ...
  return (
    <div className="w-full max-w-sm">
      <label className="dark:text-slate-300">Sua Mensagem</label>
      <div className="relative">
        <textarea
          className="dark:bg-slate-800 dark:border-slate-600 dark:text-white"
          placeholder="Deixe um comentário..."
        />
        <div className="text-slate-500 dark:text-slate-400">
          <span>{message.length}</span> / <span>{maxLength}</span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        name: "Checkbox",
        description: "Permite que o usuário selecione uma ou mais opções de um conjunto. Ideal para listas de preferências ou consentimento.",
        usage: "Use quando o usuário pode selecionar zero, uma ou várias opções de uma lista. Perfeito para aceitar termos de serviço, escolher interesses ou selecionar vários itens para uma ação.",
        component: <CheckboxExample />,
        code: `
// ...
<div className="flex items-center">
  <input id="accept" type="checkbox" className="dark:border-slate-600" />
  <label htmlFor="accept" className="ml-2 dark:text-slate-300">Aceito os termos</label>
</div>`
      },
      {
        name: "Radio Button",
        description: "Permite ao usuário escolher apenas uma opção de uma lista mutuamente exclusiva. Usado para seleções únicas.",
        usage: "Utilize quando o usuário deve escolher *apenas uma* opção de uma lista. Exemplos comuns incluem selecionar um método de envio, um tipo de plano ou responder a uma pergunta com resposta única.",
        component: <RadioButtonExample />,
        code: `
//...
<fieldset>
  <legend className="dark:text-slate-200">Opções</legend>
  <input type="radio" id="opt1" name="options" className="dark:border-slate-600"/>
  <label htmlFor="opt1" className="ml-3 dark:text-slate-300">Opção 1</label>
</fieldset>`
      },
      {
        name: "Select / Combobox",
        description: "Um menu suspenso que oferece uma lista de opções para o usuário escolher. Economiza espaço na tela.",
        usage: "Ideal para listas de opções longas, onde mostrar todos os itens como Radio Buttons ocuparia muito espaço. Comum para selecionar um país, estado ou uma categoria de uma lista predefinida.",
        component: <SelectExample />,
        code: `
<div>
  <label htmlFor="country" className="dark:text-slate-300">País</label>
  <select id="country" className="dark:bg-slate-800 dark:border-slate-600 dark:text-white">
    <option>Brasil</option>
    <option>Portugal</option>
  </select>
</div>`
      },
      {
        name: "Switch / Toggle",
        description: "Um controle visual para ligar ou desligar uma opção. Oferece uma alternativa moderna ao checkbox.",
        usage: "Use para representar estados binários (ligado/desligado), como ativar notificações ou alternar entre tema claro/escuro. É uma alternativa mais visual e moderna ao checkbox para essa finalidade.",
        component: <SwitchToggleExample />,
        code: `
const [enabled, setEnabled] = useState(false);
// ...
<button onClick={() => setEnabled(!enabled)} className={enabled ? 'bg-active' : 'bg-slate-300 dark:bg-slate-700'}>
  <span className={enabled ? 'translate-x-full' : ''} />
</button>`
      },
      {
        name: "Range Slider",
        description: "Permite ao usuário selecionar um valor dentro de um intervalo definido, arrastando um controle deslizante.",
        usage: "Perfeito para selecionar um valor aproximado dentro de um intervalo, onde a precisão exata não é crucial. Ótimo para filtros de preço, configurações de volume ou brilho.",
        component: <RangeSliderExample />,
        code: `
const [value, setValue] = useState(50);
// ...
<div>
  <label className="dark:text-slate-300">Volume: {value}</label>
  <input type="range" className="dark:bg-slate-700" ... />
</div>`
      },
      {
        name: "Date / Time Picker",
        description: "Um seletor que permite ao usuário escolher uma data a partir de um calendário e um horário com campos dedicados, incluindo um seletor AM/PM.",
        usage: "Indispensável para qualquer campo que exija a entrada de uma data ou hora. Evita erros de formatação e oferece uma experiência de usuário muito superior a um campo de texto simples.",
        component: <DateTimePickerExample />,
        code: `
const DateTimePicker = () => {
  // ...
  return (
    <div className="dark:text-slate-300">
      <div className="dark:bg-slate-700">
        <button className={pickerType === 'date' ? 'dark:bg-slate-800 dark:text-teal-400' : 'dark:text-slate-300 dark:hover:bg-slate-600/70'}>Data</button>
        {/* ... */}
      </div>
      <input type="date" className="dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
      {/* ... mais inputs para hora com estilos dark */}
    </div>
  );
};`
      },
      {
        name: "File Upload / Drag & Drop",
        description: "Permite que os usuários selecionem e enviem arquivos do seu dispositivo, com uma área para arrastar e soltar.",
        usage: "Utilize sempre que o usuário precisar enviar um arquivo, como uma foto de perfil ou um documento. A área de 'arrastar e soltar' melhora a usabilidade em desktops.",
        component: <FileUploadExample />,
        code: `
<div className="dark:text-slate-300">
  <div className="dark:border-slate-600">
    <div className="dark:text-slate-400">
      <label htmlFor="file-upload" className="dark:bg-transparent">
        <span>Carregar um arquivo</span>
      </label>
      <p>ou arraste e solte</p>
    </div>
  </div>
</div>`
      },
      {
        name: "Captcha / reCAPTCHA",
        description: "Um teste para verificar se o usuário é humano, protegendo formulários contra spam e bots.",
        usage: "Use em formulários públicos e importantes, como login, cadastro e contato, para proteger sua aplicação contra spam e ataques automatizados de bots.",
        component: <CaptchaExample />,
        code: `
<div className="dark:bg-slate-700">
  <input type="checkbox" className="dark:border-slate-500"/>
  <span className="ml-3 dark:text-slate-200">Não sou um robô</span>
  <div className="dark:text-slate-400">
    {/* ... */}
  </div>
</div>`
      },
      {
          name: "Submit / Reset Button",
          description: "Botões para enviar (submit) os dados do formulário ou para limpar (reset) todos os campos para seus valores iniciais.",
          usage: "Botões essenciais em qualquer formulário. O botão 'Submit' finaliza a entrada de dados, enquanto o 'Reset' (usado com menos frequência) oferece uma maneira rápida de limpar todos os campos.",
          component: <SubmitResetButtonExample />,
          code: `
<div className="flex space-x-4">
    <button type="submit" className="bg-teal-500 ...">
      Enviar
    </button>
    <button type="reset" className="bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200 ...">
      Limpar
    </button>
</div>`
      },
      {
        name: "Autocomplete / Typeahead",
        description: "Um campo de texto que sugere opções em tempo real com base no que o usuário digita, facilitando a entrada de dados.",
        usage: "Melhora muito a experiência de preenchimento de formulários, especialmente em campos com muitas opções possíveis, como busca de cidades ou produtos. Reduz o esforço do usuário e evita erros de digitação.",
        component: <AutoCompleteExample />,
        // FIX: Added missing 'code' property to match ComponentInfo interface.
        code: `
const AutoComplete = () => {
    const options = ['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Next.js'];
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filtered = options.filter(opt => opt.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };
    
    return (
        <div className="relative w-full max-w-xs">
            <label htmlFor="autocomplete" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Buscar Framework
            </label>
            <input 
                id="autocomplete"
                type="text"
                value={query}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-md focus:ring-teal-500 focus:border-teal-500"
                autoComplete="off"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md mt-1 shadow-lg max-h-40 overflow-y-auto">
                    {suggestions.map(s => (
                        <li 
                            key={s} 
                            onClick={() => { setQuery(s); setSuggestions([]); }} 
                            className="p-2 text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer"
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};`
      },
      {
        name: "Date Range Picker",
        description: "Dois seletores de data para definir um período de início e fim. Essencial para filtros, reservas e relatórios.",
        usage: "Essencial para qualquer funcionalidade que precise de um intervalo de datas, como sistemas de reserva de hotéis, filtros de relatórios financeiros ou agendamento de eventos.",
        component: <DateRangePickerExample />,
        code: `
const DateRangePicker = () => {
    const [startDate, setStartDate] = useState('2024-08-01');
    const [endDate, setEndDate] = useState('2024-08-07');

    return (
        <div className="w-full max-w-sm flex flex-col space-y-2">
            <div>
                <label className="dark:text-slate-300">Data de Início</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
            </div>
            <div>
                <label className="dark:text-slate-300">Data Final</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
            </div>
        </div>
    );
};`
      },
      {
        name: "Rating",
        description: "Permite que os usuários avaliem um item, geralmente usando uma escala de estrelas. Fornece feedback visual imediato.",
        usage: "Indispensável para sites de e-commerce, resenhas de filmes ou qualquer plataforma onde a avaliação do usuário seja importante. Fornece prova social e ajuda outros usuários a tomar decisões.",
        component: <RatingExample />,
        code: `
const Rating = () => {
    const [rating, setRating] = useState(3);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={\`Avaliar \${star} de 5 estrelas\`}
                >
                    <svg className={\`h-6 w-6 transition-colors \${(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}\`} ...>
                        {/* SVG da estrela */}
                    </svg>
                </button>
            ))}
        </div>
    );
};`
      },
    ]
  },
   {
    title: "Feedback & Estado",
    icon: "💬",
    description: "Componentes cruciais para comunicar o estado do sistema ao usuário, como sucesso, erro, carregamento ou ausência de dados.",
    components: [
      {
        name: "Alert",
        description: "Exibe uma mensagem contextual para o usuário (sucesso, erro, aviso, informação) que não desaparece automaticamente.",
        usage: "Use alertas para mensagens importantes que o usuário precisa reconhecer, como a confirmação de que um formulário foi enviado com sucesso ou um aviso de que uma operação falhou. Eles permanecem na tela até serem dispensados.",
        component: <AlertExample />,
        code: `
<div className="w-full max-w-md bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-500/50 text-green-700 dark:text-green-300 px-4 py-3 rounded-md" role="alert">
  <strong className="font-bold">Sucesso!</strong>
  <span className="block sm:inline ml-2">Sua ação foi completada com êxito.</span>
</div>`
      },
      {
        name: "Toast / Snackbar",
        description: "Uma notificação sutil e temporária que aparece na tela para informar sobre o resultado de uma ação.",
        usage: "Ideal para feedback não-intrusivo. Use um toast para confirmar uma ação de baixo impacto, como 'Item adicionado ao carrinho' ou 'Configurações salvas'. Ele aparece por alguns segundos e depois desaparece, sem interromper o fluxo do usuário.",
        component: <ToastExample />,
        code: `
const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <button onClick={triggerToast} className="bg-teal-500 ...">Exibir Toast</button>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white ...">
          Notificação temporária!
        </div>
      )}
    </>
  );
}`
      },
      {
        name: "Badge / Pill",
        description: "Pequenos contadores ou rótulos para indicar status, contagem de notificações ou destacar informações.",
        usage: "Utilize badges para chamar atenção para informações curtas e importantes, como o número de e-mails não lidos em uma caixa de entrada, o status de um pedido ('Novo', 'Enviado') ou para categorizar itens com tags.",
        component: <BadgeExample />,
        code: `
<div className="flex items-center space-x-4 dark:text-slate-200">
  <span className="text-lg">Caixa de Entrada</span>
  <span className="inline-flex items-center ... text-red-100 bg-red-600 rounded-full">99+</span>
  <span className="inline-flex items-center ... bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
    Novo
  </span>
</div>`
      },
      {
        name: "Skeleton Loader",
        description: "Uma versão de placeholder da interface que é exibida enquanto o conteúdo real está sendo carregado.",
        usage: "Use loaders de esqueleto para melhorar a experiência de carregamento percebida. Em vez de uma tela em branco ou um spinner, o usuário vê uma prévia da estrutura do layout, o que faz o carregamento parecer mais rápido e suave.",
        component: <SkeletonLoaderExample />,
        code: `
<div className="border dark:border-slate-700 shadow rounded-md p-4 w-full">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
      <div className="space-y-3">
        {/* ... mais placeholders ... */}
      </div>
    </div>
  </div>
</div>`
      },
      {
        name: "Progress Bar / Spinner",
        description: "Indica visualmente o progresso de uma operação ou que o sistema está ocupado. Gerencia a expectativa do usuário.",
        usage: "Use uma barra de progresso para operações com duração definida, como um upload de arquivo. Use um spinner (ou loading) para operações de duração indeterminada, como buscar dados de uma API, para informar ao usuário que o sistema está trabalhando.",
        component: <ProgressBarExample />,
        code: `
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => { /* Lógica para atualizar o progresso */ }, []);

  return (
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
      <div
        className="bg-teal-500 h-4 rounded-full transition-all"
        style={{ width: \`\${progress}%\` }}
      ></div>
    </div>
  );
}`
      },
      {
        name: "Empty State",
        description: "Uma tela exibida quando não há conteúdo para mostrar, guiando o usuário sobre como proceder.",
        usage: "Fundamental para uma boa UX. Exiba um estado vazio quando uma lista de tarefas está vazia, uma busca não retorna resultados ou um usuário ainda não criou nenhum projeto. Aproveite para guiar o usuário sobre qual é a próxima ação.",
        component: <EmptyStateExample />,
        code: `
<div className="text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
  <svg className="mx-auto h-12 w-12 text-slate-400"> {/* Ícone */} </svg>
  <h3 className="dark:text-slate-200">Nenhum projeto</h3>
  <p className="dark:text-slate-400">Comece criando um novo projeto.</p>
  <button className="bg-teal-500 text-white">Criar Projeto</button>
</div>`
      },
    ]
  },
  {
    title: "Tipografia & Texto",
    icon: "🔡",
    description: "Os elementos fundamentais para a comunicação escrita, garantindo clareza, legibilidade e uma hierarquia visual bem definida.",
    components: [
      {
        name: "Headings (h1-h6)",
        description: "Títulos e subtítulos que estruturam o conteúdo e estabelecem a hierarquia visual e semântica da informação.",
        usage: "Use <h1> para o título principal da página (apenas um por página), <h2> para seções principais, <h3> para subseções, e assim por diante. Isso é crucial para SEO e acessibilidade, ajudando os leitores de tela a navegar pelo conteúdo.",
        component: <HeadingsExample />,
        code: `
<div className="space-y-2">
  <h1 className="text-4xl font-bold dark:text-slate-100">Heading 1</h1>
  <h2 className="text-3xl font-bold dark:text-slate-200">Heading 2</h2>
  <h3 className="text-2xl font-bold dark:text-slate-300">Heading 3</h3>
  {/* ... e assim por diante */}
</div>`
      },
      {
        name: "Paragraph",
        description: "O principal componente para exibir blocos de texto. A base da legibilidade e do conteúdo escrito.",
        usage: "Use a tag <p> para qualquer bloco de texto corrido. Garanta que a fonte, o tamanho e a altura da linha sejam confortáveis para leitura em telas de diferentes tamanhos.",
        component: <ParagraphExample />,
        code: `
<p className="text-slate-600 dark:text-slate-400 max-w-prose leading-relaxed">
  Este é um parágrafo de exemplo para demonstrar o texto corrido. A tipografia é a base da comunicação em qualquer interface web, e um bom estilo de parágrafo é fundamental.
</p>`
      },
      {
        name: "Lists (ul, ol, dl)",
        description: "Para apresentar informações em formato de lista não ordenada (ul), ordenada (ol) ou de definição (dl).",
        usage: "Use listas sempre que tiver uma série de itens relacionados. 'ul' para itens sem ordem específica, 'ol' para itens sequenciais (como um passo a passo), e 'dl' para pares de termo e definição (como em um glossário).",
        component: <ListsExample />,
        code: `
<div className="text-slate-600 dark:text-slate-400">
  <h4 className="dark:text-slate-200">Lista Não Ordenada</h4>
  <ul className="list-disc list-inside">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  
  <h4 className="dark:text-slate-200">Lista Ordenada</h4>
  <ol className="list-decimal list-inside">
    <li>Primeiro item</li>
    <li>Segundo item</li>
  </ol>
</div>`
      },
      {
        name: "Blockquote",
        description: "Usado para destacar citações ou trechos de texto de outras fontes, separando-os visualmente do conteúdo principal.",
        usage: "Perfeito para destacar citações de pessoas, depoimentos de clientes ou trechos de outros artigos. O estilo visual diferenciado ajuda a chamar a atenção para essa informação específica.",
        component: <BlockquoteExample />,
        code: `
<blockquote className="border-l-4 border-teal-500 pl-4 py-2 bg-slate-100 dark:bg-slate-800">
  <p className="italic dark:text-slate-300">"O design é como funciona."</p>
  <footer className="text-right dark:text-slate-400">— Steve Jobs</footer>
</blockquote>`
      },
      {
        name: "Code / Pre",
        description: "Para exibir trechos de código. `<code>` para código embutido e `<pre>` para blocos de código formatado.",
        usage: "Use `<code>` para referenciar nomes de variáveis ou trechos curtos de código no meio de um parágrafo. Use `<pre>` (geralmente com `<code>` dentro) para exibir blocos maiores de código, preservando os espaços em branco e a formatação.",
        component: <CodeExample />,
        code: `
<div>
  <p className="dark:text-slate-400">
    Use o elemento <code className="bg-slate-200 dark:bg-slate-700 text-teal-700 dark:text-teal-400 ...">&lt;code&gt;</code> para código embutido.
  </p>
  <pre className="bg-slate-800 text-white p-4 rounded-md overflow-x-auto">
    <code className="font-mono">
{\`function greet() {
  console.log("Olá, mundo!");
}\`}
    </code>
  </pre>
</div>`
      },
    ]
  },
  {
    title: "Elementos de Mídia",
    icon: "📷",
    description: "Componentes para incorporar conteúdo visual e auditivo, como imagens, vídeos, ícones e avatares, enriquecendo a experiência do usuário.",
    components: [
       {
        name: "Image",
        description: "Exibe imagens estáticas. Essencial para o apelo visual e para complementar o conteúdo textual.",
        usage: "Use para exibir qualquer tipo de imagem estática. Sempre inclua o atributo `alt` para acessibilidade. Utilize técnicas de otimização (como lazy loading e formatos modernos) para melhorar o desempenho.",
        component: <ImageExample />,
        code: `
<figure>
  <img 
    className="rounded-lg shadow-md aspect-[16/10] object-cover" 
    src="caminho/para/imagem.jpg" 
    alt="Descrição da imagem para acessibilidade" 
  />
  <figcaption className="text-xs text-center text-slate-500 dark:text-slate-400">
    Uma legenda opcional para a imagem.
  </figcaption>
</figure>`
      },
      {
        name: "Media Player (Video/Audio)",
        description: "Permite a reprodução de conteúdo de vídeo e áudio diretamente na página, com controles de reprodução.",
        usage: "Utilize para incorporar tutoriais em vídeo, demonstrações de produtos, podcasts ou qualquer conteúdo de mídia. O atributo `controls` fornece a interface padrão do navegador para o usuário interagir.",
        component: <MediaPlayerExample />,
        code: `
<div className="space-y-4">
  <video className="w-full rounded-lg shadow-md" controls poster="caminho/para/poster.jpg">
    <source src="caminho/para/video.mp4" type="video/mp4" />
    Seu navegador não suporta a tag de vídeo.
  </video>
  <audio className="w-full" controls>
    <source src="caminho/para/audio.mp3" type="audio/mpeg" />
    Seu navegador não suporta a tag de áudio.
  </audio>
</div>`
      },
      {
        name: "Iframe / Embed",
        description: "Incorpora conteúdo de uma fonte externa, como mapas, vídeos do YouTube ou posts de redes sociais.",
        usage: "Perfeito para incorporar conteúdo de terceiros sem precisar hospedá-lo. Comum para exibir mapas interativos (Google Maps, OpenStreetMap) ou vídeos de plataformas como YouTube e Vimeo.",
        component: <IframeExample />,
        code: `
<div className="w-full aspect-video max-w-md">
   <iframe
    className="w-full h-full rounded-lg shadow-md border dark:border-slate-700"
    src="https://www.google.com/maps/embed?..."
    title="Google Maps Embed da Torre Eiffel"
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>`
      },
      {
        name: "Icon",
        description: "Símbolos gráficos vetoriais que representam ações ou conceitos, melhorando a usabilidade e a comunicação visual.",
        usage: "Ícones são ótimos para economizar espaço e comunicar ações ou ideias universalmente reconhecidas (como um ícone de lixeira para 'excluir' ou uma lupa para 'buscar'). Use-os em botões, menus e para ilustrar itens de uma lista.",
        component: <IconExample />,
        code: `
<div className="flex flex-col items-center text-slate-700 dark:text-slate-300">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-teal-500" ...>
    {/* ... path do ícone ... */}
  </svg>
  <span className="text-xs mt-1">Home</span>
</div>`
      },
      {
        name: "Avatar",
        description: "Uma representação visual de um usuário, geralmente uma imagem de perfil ou iniciais, usada em comentários e perfis.",
        usage: "Use avatares para representar usuários em qualquer interface social, como seções de comentários, listas de membros ou cabeçalhos de perfil. Eles ajudam a humanizar a interação.",
        component: <AvatarExample />,
        code: `
<div className="flex items-center space-x-4">
  {/* Avatar simples */}
  <img className="h-10 w-10 rounded-full" src="caminho/para/avatar.jpg" alt="Avatar" />
  
  {/* Avatar com indicador de status */}
  <div className="relative">
    <img className="h-16 w-16 rounded-full" src="caminho/para/avatar.jpg" alt="Avatar" />
    <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white dark:ring-slate-900" title="Online"></span>
  </div>
</div>`
      },
    ]
  },
  {
    title: "Extras & Avançados",
    icon: "✨",
    description: "Componentes mais complexos para visualização de dados e interações ricas, como tabelas, gráficos e widgets de chat.",
    components: [
      {
        name: "Table",
        description: "Estrutura para exibir dados tabulares em linhas e colunas. Ideal para comparações e organização de informações.",
        usage: "Use tabelas para exibir conjuntos de dados estruturados onde a relação entre linhas e colunas é importante, como relatórios financeiros, listas de preços ou especificações de produtos. Não use tabelas para layout.",
        component: <TableExample />,
        code: `
<div className="w-full overflow-x-auto rounded-lg shadow-md border dark:border-slate-700">
    <table className="min-w-full text-sm text-left text-slate-500 dark:text-slate-400">
        <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800">
            <tr>
                <th scope="col" className="px-4 py-3">Produto</th>
                <th scope="col" className="px-4 py-3">Preço</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <th scope="row" className="px-4 py-3 font-medium text-slate-900 dark:text-white">Laptop</th>
                <td className="px-4 py-3">R$ 5.999</td>
            </tr>
        </tbody>
    </table>
</div>`
      },
       {
        name: "Data Grid",
        description: "Uma tabela avançada com funcionalidades interativas como ordenação, filtragem e paginação.",
        usage: "Ideal para exibir grandes conjuntos de dados de forma interativa. Se você precisa que os usuários possam ordenar, filtrar e pesquisar dentro de uma tabela, um Data Grid é a escolha certa, comum em painéis de administração.",
        component: <DataGridExample />,
        code: `
const DataGrid = () => {
  const [data, setData] = useState([...]);
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', dir: 'asc' });

  // ... lógica de ordenação e filtro ...

  return (
    <div className="w-full">
      <input type="text" placeholder="Filtrar..." value={filter} onChange={...} />
      <table className="w-full">
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Nome</th>
            {/* ... */}
          </tr>
        </thead>
        <tbody>
          {/* ... renderiza os dados ordenados/filtrados ... */}
        </tbody>
      </table>
    </div>
  );
}`
      },
      {
        name: "Chart / Graph",
        description: "Representação visual de dados para facilitar a compreensão de tendências, padrões e comparações.",
        usage: "Use gráficos para transformar dados complexos em insights visuais fáceis de entender. Gráficos de barra para comparações, de linha para tendências ao longo do tempo, e de pizza para proporções.",
        component: <ChartExample />,
        code: `
const BarChart = () => {
  const data = [ { label: 'A', value: 45 }, ... ];
  const chartHeight = 150;
  const maxValue = 100;

  return (
    <svg viewBox="..." aria-label="Gráfico de barras">
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * chartHeight;
        return (
          <g key={item.label}>
            <rect height={barHeight} className="fill-teal-500" />
            <text className="dark:fill-slate-400">{item.label}</text>
          </g>
        );
      })}
    </svg>
  );
};`
      },
      {
        name: "Map",
        description: "Exibe um mapa interativo, geralmente para mostrar localizações, rotas ou dados geográficos.",
        usage: "Indispensável para exibir a localização de uma loja, visualizar dados em um mapa geográfico ou planejar rotas. Use serviços como Google Maps ou alternativas de código aberto como OpenStreetMap.",
        component: <MapExample />,
        code: `
<div className="w-full aspect-square max-w-md">
   <iframe
    className="w-full h-full rounded-lg shadow-md border dark:border-slate-700"
    src="https://www.openstreetmap.org/export/embed.html?..."
    title="Exemplo de Mapa OpenStreetMap"
    loading="lazy"
    >
  </iframe>
</div>`
      },
      {
        name: "Chat Widget",
        description: "Um widget flutuante que permite aos usuários iniciar uma conversa de suporte ou vendas em tempo real.",
        usage: "Uma ferramenta poderosa para engajamento e suporte ao cliente. Posicione-o de forma não obstrutiva, geralmente no canto inferior direito, para que os usuários possam facilmente pedir ajuda quando precisarem.",
        component: <ChatWidgetExample />,
        code: `
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="w-64 h-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl">
          {/* Conteúdo do Chat */}
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-500 ...">
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}`
      },
      {
        name: "Notification Center",
        description: "Uma área centralizada, geralmente em um popover, para exibir uma lista de notificações e atualizações.",
        usage: "Use em aplicações onde os usuários recebem atualizações frequentes, como redes sociais ou ferramentas de gerenciamento de projetos. Agrupa todas as notificações em um local de fácil acesso, geralmente em um ícone de sino no cabeçalho.",
        component: <NotificationCenterExample />,
        code: `
const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <svg>{/* Ícone de sino */}</svg>
        <span className="absolute top-1 right-1 ... bg-red-500"></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 ... bg-white dark:bg-slate-800">
          {/* Lista de notificações */}
        </div>
      )}
    </div>
  );
}`
      },
      {
        name: "Tag",
        description: "Rótulos para categorizar ou organizar conteúdo, como postagens de blog ou produtos.",
        usage: "Use tags para permitir que os usuários filtrem e descubram conteúdo relacionado. São comuns em blogs, fóruns e e-commerces para categorizar itens com palavras-chave.",
        component: <TagExample />,
        code: `
<div className="flex flex-wrap gap-2">
  <span className="px-2 py-1 text-xs ... bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full">
    Tecnologia
  </span>
  <span className="px-2 py-1 text-xs ... bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 rounded-full">
    Produtividade
  </span>
</div>`
      },
      {
        name: "Breadcrumb + Filter Combo",
        description: "Combina a navegação por breadcrumb com controles de filtro, comum em páginas de listagem de e-commerce.",
        usage: "Uma combinação poderosa para páginas de categoria em e-commerce ou listagens complexas. O breadcrumb informa ao usuário onde ele está, enquanto os filtros permitem que ele refine os resultados na página atual.",
        component: <BreadcrumbFilterComboExample />,
        code: `
<div className="p-4 bg-white dark:bg-slate-800 ...">
    <nav aria-label="breadcrumb">
        {/* ... código do breadcrumb ... */}
    </nav>
    <div className="mt-4 pt-4 border-t dark:border-slate-700 flex ...">
        <span className="font-semibold dark:text-slate-300">Filtrar por:</span>
        <select className="dark:bg-slate-700 dark:border-slate-600 dark:text-white">
            <option>Categoria</option>
        </select>
        {/* ... mais filtros ... */}
    </div>
</div>`
      },
    ]
  }
];
