
import React, { useState, useEffect, useMemo } from 'react';
import { ComponentCategory } from '../types';

// Example Components

// START: "Estrutura & Layout" Components
const ContainerExample: React.FC = () => (
  <div className="w-full bg-slate-200 p-4 rounded-lg">
    <div className="container mx-auto bg-white shadow-md p-4 rounded text-center">
      <p className="text-sm">Este conteúdo está centralizado.</p>
    </div>
  </div>
);

const SectionExample: React.FC = () => (
  <section className="w-full bg-white shadow-md p-4 sm:p-6 rounded-lg border-l-4 border-teal-500 transition-shadow hover:shadow-lg">
    <h3 className="font-bold text-lg mb-2">Título da Seção</h3>
    <p className="text-slate-600 text-sm">Este é um bloco de conteúdo temático.</p>
  </section>
);

const HeaderExample: React.FC = () => (
  <header className="w-full bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
    <div className="font-bold text-teal-500">Logo</div>
    <nav className="flex space-x-4 text-sm">
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
  <div className="w-full h-auto md:h-56 flex flex-col md:flex-row rounded-lg overflow-hidden bg-white shadow-md">
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
    <main className="w-full md:w-2/3 p-4 flex items-center justify-center bg-slate-50 min-h-[120px]">
      <p className="text-sm text-slate-600">Conteúdo principal.</p>
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
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">1</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">2</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">3</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer col-span-2 sm:col-span-1">4</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">5</div>
     <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">6</div>
  </div>
);

const HeroExample: React.FC = () => (
    <div className="w-full text-center bg-slate-200 p-6 sm:p-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold">Hero Title</h2>
      <p className="mt-2 text-slate-600">Descrição atrativa aqui.</p>
      <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition-transform hover:scale-105 shadow-md hover:shadow-lg">Call to Action</button>
    </div>
);

const CardExample: React.FC = () => (
  <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
    <h4 className="font-bold text-lg">Título do Card</h4>
    <p className="text-slate-600 text-sm mt-1">Este é um bloco de conteúdo encapsulado.</p>
  </div>
);
// END: "Estrutura & Layout" Components


// START: "Navegação & Organização" Components
const BreadcrumbExample: React.FC = () => (
  <nav aria-label="breadcrumb">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
      <li><a href="#" className="hover:text-teal-500">Início</a></li>
      <li><span className="select-none">&gt;</span></li>
      <li><a href="#" className="hover:text-teal-500">Categoria</a></li>
      <li><span className="select-none">&gt;</span></li>
      <li className="font-semibold text-slate-700" aria-current="page">Página Atual</li>
    </ol>
  </nav>
);

const PaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const pages = [1, 2, 3];
  return(
    <nav className="flex flex-wrap justify-center items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-md hover:bg-slate-200">Previous</button>
        {pages.map(p => (
            <button key={p} onClick={() => setCurrentPage(p)} className={`w-8 h-8 rounded-md ${currentPage === p ? 'bg-teal-500 text-white' : 'hover:bg-slate-200'}`}>{p}</button>
        ))}
        <span className="px-2">...</span>
        <button className="px-3 py-1 rounded-md hover:bg-slate-200">Next</button>
    </nav>
  );
};


const TabsExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className="w-full max-w-sm">
      <div className="border-b border-slate-200">
        <nav className="-mb-px flex flex-wrap space-x-4" aria-label="Tabs">
          <button onClick={() => setActiveTab(1)} className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 1 ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>Aba 1</button>
          <button onClick={() => setActiveTab(2)} className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 2 ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>Aba 2</button>
          <button onClick={() => setActiveTab(3)} className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 3 ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>Aba 3</button>
        </nav>
      </div>
      <div className="pt-4 text-slate-600 text-sm">
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
        <div key={id} className="border-b">
          <button onClick={() => toggle(id)} className="w-full flex justify-between items-center py-3 text-left font-semibold">
            <span>Seção {id}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${open === id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <p className="pb-3 text-sm text-slate-600">Conteúdo detalhado da seção {id}.</p>
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
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md border border-slate-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
        Opções
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Item 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Item 2</a>
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
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Web Design</a>
        <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Marketing</a>
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
    <div className="w-full h-48 flex rounded-lg overflow-hidden bg-white shadow-md">
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
      <main className="flex-1 p-4 flex items-center justify-center bg-slate-50"><p className="text-sm text-slate-600">Conteúdo principal.</p></main>
    </div>
  );
};


const SearchBarExample: React.FC = () => (
    <div className="relative w-full max-w-sm">
        <input type="search" placeholder="Buscar..." className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-teal-500 focus:border-teal-500" />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
        </div>
    </div>
);

const FilterSortExample: React.FC = () => (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex-1">
            <label htmlFor="sort" className="block text-sm font-medium text-slate-700">Ordenar por</label>
            <select id="sort" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                <option>Relevância</option>
                <option>Preço</option>
            </select>
        </div>
        <div className="flex-1">
            <label htmlFor="filter" className="block text-sm font-medium text-slate-700">Filtrar</label>
            <select id="filter" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
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
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Título do Modal</h3>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800 text-2xl">&times;</button>
            </div>
            <p className="mt-2 text-sm text-slate-600">Este é o conteúdo dentro do modal. Você pode colocar qualquer coisa aqui.</p>
            <div className="text-right mt-4">
                <button onClick={() => setIsOpen(false)} className="bg-slate-200 text-slate-800 py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TooltipExample: React.FC = () => (
  <div className="relative group inline-block">
    <button className="bg-slate-200 py-2 px-4 rounded-lg">Passe o mouse</button>
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
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-10">
          <h4 className="font-bold">Título do Popover</h4>
          <p className="text-sm text-slate-600 mt-1">Este popover tem conteúdo mais rico e é ativado por clique.</p>
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
    <div className="relative w-full max-w-sm h-32 rounded-lg bg-slate-200 overflow-hidden shadow-inner">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {sliderSlides.map((s) => (
          <div key={s} className="w-full h-32 flex-shrink-0 flex items-center justify-center text-xl font-bold text-slate-700">{s}</div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white text-lg leading-none">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white text-lg leading-none">›</button>
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
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>
    {[1, 2, 3].map(item => (
      <div key={item} className={`relative mb-8 flex items-center w-full ${item % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 md:px-4">
          <div className="bg-white p-3 rounded-lg shadow-md ml-8 md:ml-0">
            <h4 className="font-bold">Evento {item}</h4>
            <p className="text-xs text-slate-500 mt-1">Breve descrição do evento que ocorreu nesta data.</p>
          </div>
        </div>
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-2 border-white z-10"></div>
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
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= s ? 'bg-teal-500 text-white' : 'bg-slate-200 text-slate-500'}`}>{s}</div>
              <p className={`text-xs mt-1 transition-colors ${step >= s ? 'text-teal-600 font-semibold' : 'text-slate-500'}`}>Etapa {s}</p>
            </div>
            {i < stepsData.length - 1 && <div className={`flex-1 h-0.5 mx-2 transition-colors ${step > s ? 'bg-teal-500' : 'bg-slate-200'}`}></div>}
          </React.Fragment>
        ))}
      </nav>
      <div className="mt-6 flex justify-between">
        <button onClick={() => setStep(s => Math.max(1, s - 1))} className="bg-slate-200 text-slate-800 py-1 px-3 rounded text-sm hover:bg-slate-300 disabled:opacity-50" disabled={step === 1}>Anterior</button>
        <button onClick={() => setStep(s => Math.min(stepsData.length, s + 1))} className="bg-slate-200 text-slate-800 py-1 px-3 rounded text-sm hover:bg-slate-300 disabled:opacity-50" disabled={step === stepsData.length}>Próximo</button>
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
        <div key={faq.id} className="border-b border-slate-200">
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full flex justify-between items-center py-3 text-left font-semibold text-slate-800 hover:text-teal-600 transition-colors"
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
              <p className="pb-3 text-sm text-slate-600">{faq.answer}</p>
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
    <form className="w-full max-w-sm bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">Acesse sua conta</h2>
        <p className="text-sm text-slate-500 mt-1">Bem-vindo de volta!</p>
      </div>
      
      <div>
        <label htmlFor="form-example-email" className="block text-sm font-medium text-slate-700 mb-1">
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
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="voce@exemplo.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-example-password" className="block text-sm font-medium text-slate-700 mb-1">
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
            className="block w-full pl-10 pr-10 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="Sua senha"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600" aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>
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
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded" />
          <label htmlFor="remember-me" className="ml-2 block text-slate-700">
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

       <div className="text-center text-sm text-slate-500">
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
        <label htmlFor="input-component-email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
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
                className="block w-full rounded-md border border-slate-300 pl-10 pr-3 py-2 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm" 
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
            <label htmlFor="message-textarea-example" className="block text-sm font-medium text-slate-700 mb-1">
                Sua Mensagem
            </label>
            <div className="relative">
                <textarea
                    id="message-textarea-example"
                    name="message"
                    rows={4}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border border-slate-300 rounded-md p-2 resize-y transition-colors"
                    placeholder="Deixe um comentário..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={maxLength}
                    aria-describedby="char-count-example"
                />
                <div id="char-count-example" className={`text-right text-xs mt-1 pr-1 transition-colors ${message.length > maxLength ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
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
                <input id="accept" name="accept" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="h-4 w-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500" />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="accept" className="font-medium text-slate-700 cursor-pointer">Aceito os termos</label>
            </div>
        </div>
    );
};

const RadioButtonExample: React.FC = () => {
    const [selection, setSelection] = useState('option1');
    return (
        <fieldset>
            <legend className="text-sm font-medium text-slate-900">Opções</legend>
            <div className="mt-2 space-y-2">
                <div className="flex items-center">
                    <input id="option1" name="notification-method" type="radio" checked={selection === 'option1'} onChange={() => setSelection('option1')} className="h-4 w-4 text-teal-600 border-slate-300 focus:ring-teal-500"/>
                    <label htmlFor="option1" className="ml-3 block text-sm font-medium text-slate-700">Opção 1</label>
                </div>
                <div className="flex items-center">
                    <input id="option2" name="notification-method" type="radio" checked={selection === 'option2'} onChange={() => setSelection('option2')} className="h-4 w-4 text-teal-600 border-slate-300 focus:ring-teal-500"/>
                    <label htmlFor="option2" className="ml-3 block text-sm font-medium text-slate-700">Opção 2</label>
                </div>
            </div>
        </fieldset>
    );
};

const SelectExample: React.FC = () => (
    <div className="w-full max-w-xs">
        <label htmlFor="country" className="block text-sm font-medium text-slate-700">País</label>
        <select id="country" name="country" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
            <option>Brasil</option>
            <option>Portugal</option>
            <option>Angola</option>
        </select>
    </div>
);

const SwitchToggleExample: React.FC = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <button onClick={() => setEnabled(!enabled)} className={`${enabled ? 'bg-teal-600' : 'bg-slate-300'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
        </button>
    );
};

const RangeSliderExample: React.FC = () => {
    const [value, setValue] = useState(50);
    return (
        <div className="w-full max-w-xs">
            <label htmlFor="volume" className="block text-sm font-medium text-slate-700">Volume: {value}</label>
            <input type="range" id="volume" name="volume" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"/>
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
      <label className="block text-sm font-medium text-slate-700 mb-2">Data e Hora do Evento</label>
      
      <div className="flex w-full p-1 bg-slate-200 rounded-lg mb-3">
        <button 
          onClick={() => setPickerType('date')}
          className={`w-1/2 rounded-md py-1 text-sm font-semibold transition-all duration-200 ${
            pickerType === 'date' ? 'bg-white shadow-sm text-teal-600 ring-1 ring-black/5' : 'text-slate-600 hover:bg-slate-300/70'
          }`}
          aria-pressed={pickerType === 'date'}
        >
          Data
        </button>
        <button 
          onClick={() => setPickerType('time')}
          className={`w-1/2 rounded-md py-1 text-sm font-semibold transition-all duration-200 ${
            pickerType === 'time' ? 'bg-white shadow-sm text-teal-600 ring-1 ring-black/5' : 'text-slate-600 hover:bg-slate-300/70'
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
            className="block w-full rounded-md border border-slate-300 pr-10 py-2 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
            <input 
                type="text" 
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="w-1/3 text-center rounded-md border border-slate-300 py-2 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-lg font-mono"
                placeholder="HH"
                maxLength={2}
                aria-label="Hora"
            />
            <span className="font-bold text-slate-400 pb-1">:</span>
            <input 
                type="text" 
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="w-1/3 text-center rounded-md border border-slate-300 py-2 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-lg font-mono"
                placeholder="MM"
                maxLength={2}
                aria-label="Minuto"
            />
            <div className="flex-1 flex flex-col items-stretch bg-slate-200 rounded-md overflow-hidden">
                <button 
                    onClick={() => setPeriod('AM')}
                    className={`p-1 text-xs font-semibold transition-colors ${
                        period === 'AM' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-slate-300'
                    }`}
                    aria-pressed={period === 'AM'}
                >AM</button>
                <button 
                    onClick={() => setPeriod('PM')}
                    className={`p-1 text-xs font-semibold transition-colors ${
                        period === 'PM' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-slate-300'
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
        <label className="block text-sm font-medium text-slate-700">Upload de Arquivo</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-slate-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none">
                        <span>Carregar um arquivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs text-slate-500">PNG, JPG, GIF até 10MB</p>
            </div>
        </div>
    </div>
);

const CaptchaExample: React.FC = () => (
    <div className="bg-slate-200 p-3 rounded-md flex items-center justify-between w-full max-w-xs">
        <div className="flex items-center">
            <input type="checkbox" className="h-6 w-6 rounded border-slate-400"/>
            <span className="ml-3 text-sm text-slate-800">Não sou um robô</span>
        </div>
        <div className="text-xs text-center text-slate-500">
            <p>reCAPTCHA</p>
            <a href="#" className="underline">Privacidade</a> - <a href="#" className="underline">Termos</a>
        </div>
    </div>
);

const SubmitResetButtonExample: React.FC = () => (
    <div className="flex space-x-4">
        <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg">Enviar</button>
        <button type="reset" className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded-lg">Limpar</button>
    </div>
);
// END: "Formulários & Inputs" Components


// START: "Feedback & Estado" Components
const AlertExample: React.FC = () => (
  <div className="w-full max-w-md bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative" role="alert">
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
    <div className="flex items-center space-x-4">
        <span className="text-lg">Caixa de Entrada</span>
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">99+</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Novo
        </span>
    </div>
);

const SkeletonLoaderExample: React.FC = () => (
    <div className="border border-slate-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
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
            <div className="w-full bg-slate-200 rounded-full h-4">
                <div
                    className="bg-teal-500 h-4 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
             <p className="text-center text-sm mt-2 text-slate-600">{progress}% completo</p>
        </div>
    );
};

const EmptyStateExample: React.FC = () => (
    <div className="text-center p-6 bg-slate-100 rounded-lg w-full max-w-sm">
        <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-slate-900">Nenhum projeto</h3>
        <p className="mt-1 text-sm text-slate-500">Comece criando um novo projeto.</p>
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
      <h1 className="text-4xl font-bold text-slate-900">Heading 1</h1>
      <h2 className="text-3xl font-bold text-slate-800">Heading 2</h2>
      <h3 className="text-2xl font-bold text-slate-700">Heading 3</h3>
      <h4 className="text-xl font-semibold text-slate-700">Heading 4</h4>
      <h5 className="text-lg font-semibold text-slate-600">Heading 5</h5>
      <h6 className="font-semibold text-slate-600">Heading 6</h6>
    </div>
);

const ParagraphExample: React.FC = () => (
    <p className="text-slate-600 max-w-prose leading-relaxed text-sm text-left">
      Este é um parágrafo de exemplo para demonstrar o texto corrido. Ele deve ter um espaçamento e altura de linha adequados para garantir uma boa legibilidade. A tipografia é a base da comunicação em qualquer interface web, e um bom estilo de parágrafo é fundamental.
    </p>
);

const ListsExample: React.FC = () => (
    <div className="w-full text-left text-sm text-slate-600 space-y-4">
      <div>
        <h4 className="font-semibold mb-1 text-slate-800">Lista Não Ordenada (ul)</h4>
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
        <h4 className="font-semibold mb-1 text-slate-800">Lista Ordenada (ol)</h4>
        <ol className="list-decimal list-inside space-y-1">
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
        </ol>
      </div>
       <div>
        <h4 className="font-semibold mb-1 text-slate-800">Lista de Definição (dl)</h4>
        <dl>
          <dt className="font-semibold text-slate-800">HTML</dt>
          <dd className="ml-4">HyperText Markup Language</dd>
          <dt className="font-semibold text-slate-800 mt-1">CSS</dt>
          <dd className="ml-4">Cascading Style Sheets</dd>
        </dl>
      </div>
    </div>
);

const BlockquoteExample: React.FC = () => (
     <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-4 bg-slate-100 w-full">
      <p className="text-slate-700 italic">"O design não é apenas o que parece e o que se sente. O design é como funciona."</p>
      <footer className="text-sm text-slate-500 mt-2 text-right">— Steve Jobs</footer>
    </blockquote>
);

const CodeExample: React.FC = () => (
    <div className="w-full text-left text-sm space-y-4">
      <p className="text-slate-600">
        Use o elemento <code className="bg-slate-200 text-teal-700 font-mono px-1 py-0.5 rounded-sm text-xs">&lt;code&gt;</code> para código embutido.
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
      <figcaption className="mt-2 text-xs text-center text-slate-500">Uma legenda opcional para a imagem.</figcaption>
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
        className="w-full h-full rounded-lg shadow-md border border-slate-200"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625996841!2d2.292292615674345!3d48.85837007928751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1652097745778!5m2!1sen!2sfr"
        title="Google Maps Embed da Torre Eiffel"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
);

const IconExample: React.FC = () => (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-slate-700">
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
      <img className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-slate-200" src="https://placehold.co/100x100/e2e8f0/475569?text=A" alt="Avatar pequeno" />
      <img className="h-14 w-14 rounded-full ring-2 ring-offset-2 ring-teal-400" src="https://placehold.co/100x100/14b8a6/ffffff?text=B" alt="Avatar médio" />
      <div className="relative">
        <img className="h-16 w-16 rounded-full ring-2 ring-offset-2 ring-blue-400" src="https://placehold.co/100x100/3b82f6/ffffff?text=C" alt="Avatar grande com indicador de status" />
        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" title="Online"></span>
      </div>
    </div>
);
// END: "Elementos de Mídia" Components

// START: "Extras & Avançados" Components
const TableExample: React.FC = () => (
    <div className="w-full overflow-x-auto rounded-lg shadow-md border">
        <table className="min-w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                    <th scope="col" className="px-4 py-3">Produto</th>
                    <th scope="col" className="px-4 py-3">Cor</th>
                    <th scope="col" className="px-4 py-3">Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-slate-50">
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">Laptop</th>
                    <td className="px-4 py-3">Prata</td>
                    <td className="px-4 py-3">R$ 5.999</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">Mouse</th>
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
            <input type="text" placeholder="Filtrar por nome..." value={filter} onChange={e => setFilter(e.target.value)} className="w-full mb-2 p-2 border rounded text-sm" />
             <div className="w-full overflow-x-auto rounded-lg border">
                <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="bg-slate-100 text-xs uppercase">
                        <tr>
                            <th onClick={() => requestSort('name')} className="cursor-pointer px-3 py-2">{`Nome${getSortIndicator('name')}`}</th>
                            <th onClick={() => requestSort('age')} className="cursor-pointer px-3 py-2">{`Idade${getSortIndicator('age')}`}</th>
                            <th onClick={() => requestSort('role')} className="cursor-pointer px-3 py-2">{`Função${getSortIndicator('role')}`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map(item => (
                            <tr key={item.id} className="border-b hover:bg-slate-50">
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
                className="text-xs font-semibold fill-slate-600"
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
        className="w-full h-full rounded-lg shadow-md border border-slate-200"
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
        <div className="w-full h-56 relative bg-slate-200 rounded-lg overflow-hidden">
            <div className="absolute bottom-4 right-4 z-20">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-teal-600 transition-transform hover:scale-110">
                    {isOpen ? '✕' : '💬'}
                </button>
            </div>
            {isOpen && (
                <div className="absolute bottom-20 right-4 w-64 h-80 bg-white rounded-lg shadow-2xl flex flex-col z-10 animate-fade-in-up">
                    <header className="bg-teal-500 text-white p-3 rounded-t-lg">Chat de Suporte</header>
                    <main className="flex-1 p-2 text-xs text-slate-500">Converse conosco!</main>
                    <footer className="p-2 border-t"><input className="w-full text-xs p-1 border rounded" placeholder="Digite sua mensagem..."/></footer>
                </div>
            )}
        </div>
    );
};

const NotificationCenterExample: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 rounded-full hover:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg border origin-top-right z-10">
                    <div className="p-2 font-bold border-b">Notificações</div>
                    <ul className="text-sm">
                        <li className="p-2 hover:bg-slate-100 truncate">Nova mensagem de Ana.</li>
                        <li className="p-2 hover:bg-slate-100 truncate">Sua tarefa foi concluída.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const TagExample: React.FC = () => (
    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Tecnologia</span>
      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Produtividade</span>
      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Design</span>
    </div>
);

const BreadcrumbFilterComboExample: React.FC = () => (
    <div className="w-full p-4 bg-white rounded-lg border">
        <nav aria-label="breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-500">Home</a></li>
                <li><span className="select-none">&gt;</span></li>
                <li className="font-semibold text-slate-700" aria-current="page">Produtos</li>
            </ol>
        </nav>
        <div className="mt-4 pt-4 border-t flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4 text-sm">
            <span className="font-semibold">Filtrar por:</span>
            <select className="border-slate-300 rounded-md text-sm py-1">
                <option>Categoria</option>
            </select>
            <select className="border-slate-300 rounded-md text-sm py-1">
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
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-sm">Conteúdo</span>
            <div className="flex-grow border-t border-slate-300"></div>
        </div>
        <div className="w-full border-t border-slate-300 border-dashed"></div>
        <p className="text-sm text-slate-600">Texto acima</p>
        <div className="w-full border-t border-teal-500"></div>
        <p className="text-sm text-slate-600">Texto abaixo</p>
    </div>
);

const ListGroupExample: React.FC = () => (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md border border-slate-200">
        <ul className="divide-y divide-slate-200">
            <li className="p-3 flex items-center hover:bg-slate-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span className="flex-1 font-medium text-slate-800">Perfil</span>
                <span className="text-xs text-slate-500">Ver</span>
            </li>
            <li className="p-3 flex items-center hover:bg-slate-50 cursor-pointer bg-teal-50 border-l-4 border-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="flex-1">
                    <p className="font-medium text-teal-800">Mensagens</p>
                    <p className="text-xs text-teal-600">Nova mensagem de Alex</p>
                </div>
                <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
            </li>
            <li className="p-3 flex items-center hover:bg-slate-50 cursor-pointer">
                <img className="h-10 w-10 rounded-full mr-3" src="https://placehold.co/100x100/e2e8f0/475569?text=DA" alt="Avatar"/>
                <div className="flex-1">
                    <p className="font-medium text-slate-800">Danilo Arruda</p>
                    <p className="text-xs text-slate-500">Online</p>
                </div>
                <button className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-1 px-3 rounded-md">Adicionar</button>
            </li>
        </ul>
    </div>
);

const TreeViewNode: React.FC<{ node: any, level: number }> = ({ node, level }) => {
    const [isOpen, setIsOpen] = useState(node.isOpen ?? false);

    return (
        <li style={{ paddingLeft: `${level * 16}px` }}>
            <div className="flex items-center py-1 cursor-pointer hover:bg-slate-100 rounded" onClick={() => setIsOpen(!isOpen)}>
                {node.children && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-1 transition-transform flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                )}
                <span className={`text-sm ${!node.children ? 'ml-5' : ''}`}>{node.name}</span>
            </div>
            {isOpen && node.children && (
                <ul className="text-slate-600">
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
        <div className="w-full max-w-xs bg-white p-2 rounded-lg border">
            <ul className="text-slate-800">
                <TreeViewNode node={treeViewData} level={0} />
            </ul>
        </div>
    );
};

const DrawerExample: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <button onClick={() => setIsOpen(true)} className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors">Abrir Drawer</button>
            {/* Overlay */}
            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black transition-opacity ${isOpen ? 'bg-opacity-50 z-30' : 'bg-opacity-0 pointer-events-none'}`}></div>
            {/* Drawer Panel */}
            <aside className={`fixed top-0 right-0 h-full bg-white w-64 shadow-xl transform transition-transform z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="font-bold">Menu</h3>
                    <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800 text-2xl">&times;</button>
                </div>
                <nav className="p-4 space-y-2">
                    <a href="#" className="block p-2 rounded hover:bg-slate-100">Início</a>
                    <a href="#" className="block p-2 rounded hover:bg-slate-100">Perfil</a>
                    <a href="#" className="block p-2 rounded hover:bg-slate-100">Configurações</a>
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
            <div className="relative border-b border-slate-200">
                <div className="flex overflow-x-auto space-x-4 pb-px no-scrollbar">
                    {scrollableTabsData.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap py-2 px-3 font-medium text-sm rounded-t-md transition-colors ${
                                activeTab === tab
                                ? 'bg-teal-50 text-teal-600 border-b-2 border-teal-500'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="pt-4 text-slate-600 text-sm">
                <p>Conteúdo para <span className="font-bold">{activeTab}</span>.</p>
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
        <div className="w-full max-w-xs bg-white p-3 rounded-lg shadow-md border">
            <div className="flex justify-between items-center mb-2">
                <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-slate-100">&lt;</button>
                <h3 className="font-semibold text-sm">{calendarMonthNames[month]} {year}</h3>
                <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-slate-100">&gt;</button>
            </div>
            <div className="grid grid-cols-7 text-center text-xs text-slate-500">
                {calendarDaysOfWeek.map((day, i) => <div key={`${day}-${i}`} className="font-medium">{day}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm mt-1">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const dayNumber = day + 1;
                    const isToday = new Date().toDateString() === new Date(year, month, dayNumber).toDateString();
                    return (
                        <div key={dayNumber} className={`p-1 rounded-full w-7 h-7 flex items-center justify-center mx-auto ${isToday ? 'bg-teal-500 text-white' : 'hover:bg-slate-100 cursor-pointer'}`}>
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
            <label htmlFor="autocomplete" className="block text-sm font-medium text-slate-700 mb-1">Buscar Framework</label>
            <input 
                id="autocomplete"
                type="text"
                value={query}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                autoComplete="off"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-slate-200 rounded-md mt-1 shadow-lg max-h-40 overflow-y-auto">
                    {suggestions.map(s => (
                        <li key={s} onClick={() => { setQuery(s); setSuggestions([]); }} className="p-2 text-sm hover:bg-slate-100 cursor-pointer">{s}</li>
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
                <label htmlFor="start-date" className="block text-sm font-medium text-slate-700">Data de Início</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-slate-300 py-2 px-3 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="end-date" className="block text-sm font-medium text-slate-700">Data Final</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-slate-300 py-2 px-3 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
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
                        className={`h-6 w-6 transition-colors ${(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-slate-300'}`}
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
<div className="w-full bg-slate-200 p-4 rounded-lg">
  {/* O container centraliza o conteúdo dentro dele */}
  <div className="container mx-auto bg-white shadow-md p-4 rounded">
    <p>Conteúdo centralizado.</p>
  </div>
</div>`
      },
      {
        name: "Section",
        description: "Divide a página em áreas temáticas ou blocos de conteúdo distintos, melhorando a organização visual e a semântica do HTML.",
        usage: "Utilize seções para agrupar conteúdo relacionado semanticamente. Por exemplo, uma seção 'Sobre Nós', uma seção 'Nossos Serviços' e uma seção 'Contato'. Isso melhora a estrutura do HTML e a acessibilidade para leitores de tela.",
        component: <SectionExample />,
        code: `
<section className="w-full bg-white shadow-md p-4 sm:p-6 rounded-lg border-l-4 border-teal-500">
  <h3 className="font-bold text-lg mb-2">Título da Seção</h3>
  <p className="text-slate-600 text-sm">Este é um bloco de conteúdo temático.</p>
</section>`
      },
      {
        name: "Header",
        description: "A área superior da página ou de uma seção, contendo branding, título ou navegação principal. Define a identidade visual.",
        usage: "O cabeçalho é ideal para a parte superior de cada página, contendo o logotipo do site, o menu de navegação principal e, opcionalmente, botões de ação como 'Login' ou 'Cadastre-se'.",
        component: <HeaderExample />,
        code: `
<header className="w-full bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
  <div className="font-bold text-teal-500">Logo</div>
  <nav className="flex space-x-4 text-sm">
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
<div className="w-full h-auto md:h-56 flex flex-col md:flex-row rounded-lg overflow-hidden bg-white shadow-md">
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
  <main className="w-full md:w-2/3 p-4 flex items-center justify-center bg-slate-50">
    <p>Conteúdo principal.</p>
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
  <div className="...">1</div>
  <div className="...">2</div>
  <div className="...">3</div>
  <div className="col-span-2 sm:col-span-1 ...">4</div>
  <div className="...">5</div>
  <div className="...">6</div>
</div>`
      },
      {
        name: "Hero Section",
        description: "Área de destaque no topo da página para capturar a atenção do usuário com uma imagem impactante e um call-to-action.",
        usage: "A seção 'Hero' é a primeira coisa que um visitante vê. Use-a na sua página inicial para causar uma forte primeira impressão, comunicar sua proposta de valor principal e guiar o usuário para a ação mais importante (Call to Action).",
        component: <HeroExample />,
        code: `
<div className="w-full text-center bg-slate-200 p-6 sm:p-8 rounded-lg">
  <h2 className="text-2xl sm:text-3xl font-bold">Hero Title</h2>
  <p className="mt-2 text-slate-600">Descrição atrativa aqui.</p>
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
<div className="w-full max-w-xs bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-xl">
  <h4 className="font-bold text-lg">Título do Card</h4>
  <p className="text-slate-600 text-sm mt-1">
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
        <div className="flex-grow border-t border-slate-300"></div>
        <span className="mx-4 text-slate-500">Conteúdo</span>
        <div className="flex-grow border-t border-slate-300"></div>
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
  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
    <li><a href="#" className="hover:text-teal-500">Início</a></li>
    <li><span>&gt;</span></li>
    <li><a href="#" className="hover:text-teal-500">Categoria</a></li>
    <li><span>&gt;</span></li>
    <li aria-current="page">Página Atual</li>
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
  <button>Previous</button>
  {pages.map(p => (
      <button key={p} 
        onClick={() => setCurrentPage(p)} 
        className={currentPage === p ? 'active' : ''}
      >
        {p}
      </button>
  ))}
  <button>Next</button>
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
<div>
  <nav className="flex flex-wrap space-x-4">
    <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>Aba 1</button>
    {/* ... mais abas */}
  </nav>
  <div>
    {activeTab === 1 && <p>Conteúdo 1.</p>}
    {/* ... mais conteúdos */}
  </div>
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
    <div>
      <button onClick={() => toggle(1)}>Seção 1</button>
      {open === 1 && <div>Conteúdo 1</div>}
      <button onClick={() => toggle(2)}>Seção 2</button>
      {open === 2 && <div>Conteúdo 2</div>}
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
      <button onClick={() => setIsOpen(!isOpen)}>Opções</button>
      {isOpen && (
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
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
<nav>
  <a href="#">Início</a>
  <div className="relative group">
    <button>Serviços</button>
    {/* Aparece no hover do 'group' */}
    <div className="absolute opacity-0 group-hover:opacity-100">
      <a href="#">Web Design</a>
      <a href="#">Marketing</a>
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
    <div className="flex h-full bg-white shadow-md rounded-lg overflow-hidden">
      <aside className={\`bg-slate-800 text-white flex flex-col transition-all duration-300 \${isExpanded ? 'w-48' : 'w-20'}\`}>
        <div className={\`p-4 flex items-center border-b border-slate-700 \${isExpanded ? 'justify-between' : 'justify-center'}\`}>
            {isExpanded && <span className="font-bold">Menu</span>}
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="p-1 rounded hover:bg-slate-700"
              aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
            >
                {/* Ícone SVG que muda entre setas e menu hamburger */}
            </button>
        </div>
        <nav className="flex-1 p-2 space-y-1">
            <a href="#" title="Painel" className="flex items-center p-2 rounded hover:bg-slate-700">
                {/* Ícone SVG de Painel */}
                {isExpanded && <span className="ml-3 text-sm">Painel</span>}
            </a>
            <a href="#" title="Ajustes" className="flex items-center p-2 rounded hover:bg-slate-700">
                {/* Ícone SVG de Ajustes */}
                {isExpanded && <span className="ml-3 text-sm">Ajustes</span>}
            </a>
        </nav>
      </aside>
      <main className="flex-1 p-4">Conteúdo principal.</main>
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
  <input type="search" placeholder="Buscar..." className="pl-10 ..." />
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
    <label htmlFor="sort">Ordenar por</label>
    <select id="sort">
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
<div className="w-full max-w-sm bg-white rounded-lg shadow-md border">
    <ul className="divide-y divide-slate-200">
        <li className="p-3 flex items-center hover:bg-slate-50">
            {/* Ícone */}
            <span className="flex-1">Perfil</span>
            <span className="text-xs">Ver</span>
        </li>
        <li className="p-3 flex items-center hover:bg-slate-50 bg-teal-50">
            {/* Ícone Ativo + Badge */}
            <div className="flex-1">...</div>
            <span className="bg-teal-500 ...">3</span>
        </li>
        <li className="p-3 flex items-center hover:bg-slate-50">
            <img className="h-10 w-10 rounded-full mr-3" src="..." alt="Avatar"/>
            <div className="flex-1">...</div>
            <button>Adicionar</button>
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
      <div onClick={() => setIsOpen(!isOpen)}>
        {node.children && <span>{isOpen ? '▼' : '►'}</span>}
        <span>{node.name}</span>
      </div>
      {isOpen && node.children && (
        <ul>
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
      <aside className={\`fixed top-0 right-0 h-full ... \${isOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
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
<div className="relative border-b">
    <div className="flex overflow-x-auto space-x-4 no-scrollbar">
        {tabs.map(tab => (
            <button key={tab} ... >{tab}</button>
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
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3>Título do Modal</h3>
            <p>Conteúdo do modal...</p>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
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
  <button>Passe o mouse</button>
  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100">
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
        <div className="absolute bottom-full mb-2 bg-white p-4 rounded shadow-lg">
          <h4>Título do Popover</h4>
          <p>Conteúdo mais rico aqui.</p>
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
    <div className="relative overflow-hidden">
      <div style={{ transform: \`translateX(-\${current * 100}%)\` }}>
        {slides.map(s => <div>{s}</div>)}
      </div>
      <button onClick={() => setCurrent(c => c - 1)}>Prev</button>
      <button onClick={() => setCurrent(c => c + 1)}>Next</button>
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
  <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-300"></div>
  {/* Itens da timeline */}
  <div className="relative mb-8 ...">
    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-500"></div>
    <div className="ml-8 md:ml-0">Evento 1</div>
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
        <div className={step >= 1 ? 'active' : ''}>Etapa 1</div>
        <div className={step >= 2 ? 'active' : ''}>Etapa 2</div>
      </nav>
      <button onClick={() => setStep(s => s - 1)}>Anterior</button>
      <button onClick={() => setStep(s => s + 1)}>Próximo</button>
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
  const faqs = [
    { id: 1, q: "Pergunta 1?", a: "Resposta 1." },
    { id: 2, q: "Pergunta 2?", a: "Resposta 2." },
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b">
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full flex justify-between items-center ..."
            aria-expanded={openId === faq.id}
          >
            <span>{faq.q}</span>
            <span className={\`transition-transform \${openId === faq.id ? 'rotate-45' : ''}\`}>+</span>
          </button>
          <div
            className={\`grid transition-all \${openId === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}
          >
            <div className="overflow-hidden">
              <p>{faq.a}</p>
            </div>
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
  const [currentDate, setCurrentDate] = useState(new Date());

  // Lógica para gerar os dias do mês
  
  return (
    <div className="w-full max-w-xs bg-white p-3 rounded-lg shadow-md border">
      <div className="flex justify-between items-center mb-2">
        <button> &lt; </button>
        <h3>{/* Mês e Ano */}</h3>
        <button> &gt; </button>
      </div>
      <div className="grid grid-cols-7 text-center text-xs">
        {/* Dias da semana */}
      </div>
      <div className="grid grid-cols-7 text-center text-sm mt-1">
        {/* Dias do mês */}
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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg border space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Acesse sua conta</h2>
        <p className="text-sm text-slate-500 mt-1">Bem-vindo de volta!</p>
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* SVG do ícone de email */}
          </div>
          <input 
            type="email" 
            id="email" 
            className="block w-full pl-10 ..."
            placeholder="voce@exemplo.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             {/* SVG do ícone de cadeado */}
          </div>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            className="block w-full pl-10 pr-10 ..."
            placeholder="Sua senha"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {/* SVG do ícone de olho (aberto/fechado) */}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" type="checkbox" />
          <label htmlFor="remember-me" className="ml-2">Lembrar-me</label>
        </div>
        <a href="#" className="text-sm text-teal-600 hover:text-teal-500">
          Esqueceu a senha?
        </a>
      </div>

      <button type="submit" className="w-full ... bg-teal-500 hover:bg-teal-600">
        Entrar
      </button>

       <div className="text-center text-sm">
          Não tem uma conta?{' '}
          <a href="#" className="text-teal-600 hover:text-teal-500">
             Cadastre-se
          </a>
       </div>
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
  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
    Email
  </label>
  <div className="relative mt-1 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      {/* Ícone de Email (SVG) */}
      <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </div>
    <input 
      type="email" 
      name="email" 
      id="email" 
      className="block w-full rounded-md border border-slate-300 pl-10 pr-3 py-2 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm" 
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
  const [message, setMessage] = useState('');
  const maxLength = 200;

  return (
    <div className="w-full max-w-sm">
      <label htmlFor="message-textarea" className="block text-sm font-medium text-slate-700 mb-1">
        Sua Mensagem
      </label>
      <div className="relative">
        <textarea
          id="message-textarea"
          rows={4}
          className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border border-slate-300 rounded-md p-2 resize-y"
          placeholder="Deixe um comentário..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={maxLength}
          aria-describedby="char-count"
        />
        <div id="char-count" className="text-right text-xs text-slate-500 mt-1 pr-1">
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
const [checked, setChecked] = useState(true);
//...
<div className="flex items-center">
  <input id="accept" type="checkbox" checked={checked} onChange={...} />
  <label htmlFor="accept" className="ml-2">Aceito os termos</label>
</div>`
      },
      {
        name: "Radio Button",
        description: "Permite ao usuário escolher apenas uma opção de uma lista mutuamente exclusiva. Usado para seleções únicas.",
        usage: "Utilize quando o usuário deve escolher *apenas uma* opção de uma lista. Exemplos comuns incluem selecionar um método de envio, um tipo de plano ou responder a uma pergunta com resposta única.",
        component: <RadioButtonExample />,
        code: `
const [selection, setSelection] = useState('option1');
//...
<fieldset>
  <input type="radio" id="opt1" name="options" checked={selection === 'opt1'} onChange={...} />
  <label htmlFor="opt1">Opção 1</label>
</fieldset>`
      },
      {
        name: "Select / Combobox",
        description: "Um menu suspenso que oferece uma lista de opções para o usuário escolher. Economiza espaço na tela.",
        usage: "Ideal para listas de opções longas, onde mostrar todos os itens como Radio Buttons ocuparia muito espaço. Comum para selecionar um país, estado ou uma categoria de uma lista predefinida.",
        component: <SelectExample />,
        code: `
<div>
  <label htmlFor="country">País</label>
  <select id="country">
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
<button onClick={() => setEnabled(!enabled)} className={enabled ? 'bg-active' : 'bg-inactive'}>
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
  <label>Volume: {value}</label>
  <input type="range" min="0" max="100" value={value} onChange={...} />
</div>`
      },
      {
        name: "Date / Time Picker",
        description: "Um seletor que permite ao usuário escolher uma data a partir de um calendário e um horário com campos dedicados, incluindo um seletor AM/PM.",
        usage: "Indispensável para qualquer campo que exija a entrada de uma data ou hora. Evita erros de formatação e oferece uma experiência de usuário muito superior a um campo de texto simples.",
        component: <DateTimePickerExample />,
        code: `
const DateTimePicker = () => {
  const [pickerType, setPickerType] = useState('date');
  const [date, setDate] = useState('2024-07-26');
  const [hour, setHour] = useState('09');
  const [minute, setMinute] = useState('45');
  const [period, setPeriod] = useState('PM');

  return (
    <div className="w-full max-w-xs space-y-3">
      <label>Data e Hora do Evento</label>
      
      {/* Toggle para alternar entre Data e Hora */}
      <div className="flex bg-slate-200 rounded-lg">
        <button onClick={() => setPickerType('date')} className={pickerType === 'date' ? 'active' : ''}>Data</button>
        <button onClick={() => setPickerType('time')} className={pickerType === 'time' ? 'active' : ''}>Hora</button>
      </div>
      
      {pickerType === 'date' ? (
        <div className="relative">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          {/* Ícone de calendário */}
        </div>
      ) : (
        <div className="flex items-center gap-2">
            <input type="text" value={hour} onChange={(e) => setHour(e.target.value)} placeholder="HH" />
            <span>:</span>
            <input type="text" value={minute} onChange={(e) => setMinute(e.target.value)} placeholder="MM" />
            <div>
                <button onClick={() => setPeriod('AM')} className={period === 'AM' ? 'active' : ''}>AM</button>
                <button onClick={() => setPeriod('PM')} className={period === 'PM' ? 'active' : ''}>PM</button>
            </div>
        </div>
      )}
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
<div>
  <label htmlFor="file-upload">
    <span>Carregar um arquivo</span>
    <input id="file-upload" type="file" className="sr-only" />
  </label>
  <p>ou arraste e solte</p>
</div>`
      },
      {
        name: "Captcha / reCAPTCHA",
        description: "Um teste para verificar se o usuário é humano, protegendo formulários contra spam e bots.",
        usage: "Use em formulários públicos e importantes, como login, cadastro e contato, para proteger sua aplicação contra spam e ataques automatizados de bots.",
        component: <CaptchaExample />,
        code: `
<div>
  {/* Placeholder for a reCAPTCHA component */}
  <input type="checkbox" />
  <label>Não sou um robô</label>
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
    <button type="reset" className="bg-slate-200 ...">
      Limpar
    </button>
</div>`
      },
      {
        name: "Autocomplete / Typeahead",
        description: "Um campo de texto que sugere opções em tempo real com base no que o usuário digita, facilitando a entrada de dados.",
        usage: "Melhora muito a experiência de preenchimento de formulários, especialmente em campos com muitas opções possíveis, como busca de cidades ou produtos. Reduz o esforço do usuário e evita erros de digitação.",
        component: <AutoCompleteExample />,
        code: `
const AutoComplete = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const allOptions = ['React', 'Angular', 'Vue'];

    const handleChange = (value) => {
        setQuery(value);
        // Lógica de filtro...
        setSuggestions(filteredOptions);
    };
    
    return (
        <div className="relative">
            <input type="text" value={query} onChange={...} />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map(s => <li onClick={...}>{s}</li>)}
                </ul>
            )}
        </div>
    );
}`
      },
      {
        name: "Date Range Picker",
        description: "Permite que os usuários selecionem um intervalo de datas (início e fim) de forma visual e intuitiva.",
        usage: "Ideal para sistemas de reserva, painéis de análise de dados ou qualquer interface onde o usuário precise definir um período de tempo com data de início e fim.",
        component: <DateRangePickerExample />,
        code: `
const DateRange = () => {
    const [startDate, setStartDate] = useState('2024-08-01');
    const [endDate, setEndDate] = useState('2024-08-07');

    return (
        <div className="flex flex-col space-y-2">
            <div>
                <label>Data de Início</label>
                <input type="date" value={startDate} onChange={...} />
            </div>
            <div>
                <label>Data Final</label>
                <input type="date" value={endDate} onChange={...} />
            </div>
        </div>
    );
}`
      },
      {
        name: "Rating / Stars",
        description: "Componente para avaliações visuais, geralmente com estrelas, permitindo que os usuários deem uma nota.",
        usage: "Use em sistemas de avaliação de produtos, serviços, artigos ou qualquer item que possa receber uma nota do usuário. Fornece um feedback visual imediato e é universalmente compreendido.",
        component: <RatingExample />,
        code: `
const Rating = () => {
    const [rating, setRating] = useState(3);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                >
                    <StarIcon className={(hover || rating) >= star ? 'active' : 'inactive'}/>
                </button>
            ))}
        </div>
    );
}`
      },
    ]
  },
  {
    title: "Feedback & Estado",
    icon: "💬",
    description: "Comunique o que está acontecendo. Estes componentes informam os usuários sobre o status do sistema, ações e resultados de forma clara.",
    components: [
      {
        name: "Alert",
        description: "Mensagem contextual que fornece feedback sobre uma ação, como sucesso, erro, aviso ou informação.",
        usage: "Use alertas para comunicar informações importantes que requerem a atenção do usuário. Sucesso (verde) após uma ação, Erro (vermelho) quando algo falha, e Aviso (amarelo) para informações importantes.",
        component: <AlertExample />,
        code: `
<div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
  <strong className="font-bold">Sucesso!</strong>
  <span>Sua ação foi completada.</span>
</div>
`
      },
      {
        name: "Toast / Snackbar",
        description: "Notificação temporária e discreta que aparece na tela para informar o usuário sobre um processo.",
        usage: "Perfeito para feedback não-intrusivo. Use para confirmar ações secundárias como 'Item salvo' ou 'E-mail enviado', sem interromper o que o usuário está fazendo.",
        component: <ToastExample />,
        code: `
const [show, setShow] = useState(false);

const triggerToast = () => {
  setShow(true);
  setTimeout(() => setShow(false), 3000);
}

return (
  <>
    <button onClick={triggerToast}>Exibir</button>
    {show && <div>Notificação!</div>}
  </>
);`
      },
      {
        name: "Badge",
        description: "Pequenos contadores ou indicadores visuais usados para destacar informações, como o número de notificações.",
        usage: "Utilize badges para chamar a atenção para um item de forma discreta, como o número de e-mails não lidos, notificações pendentes ou para rotular um item como 'Novo' ou 'Em Promoção'.",
        component: <BadgeExample />,
        code: `
<div className="flex items-center">
  <span>Caixa de Entrada</span>
  <span className="ml-2 px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full">
    99+
  </span>
</div>`
      },
      {
        name: "Loading Spinner",
        description: "Animação que indica que um processo está em andamento, mantendo o usuário informado.",
        usage: "Use quando uma ação leva um tempo perceptível para ser concluída (mais de 300ms), como carregar dados da rede. Informa ao usuário que o sistema está trabalhando e não travou.",
        component: (
          <div className="w-8 h-8 border-4 border-slate-200 border-t-teal-500 rounded-full animate-spin"></div>
        ),
        code: `<div className="w-8 h-8 border-4 border-slate-200 border-t-teal-500 rounded-full animate-spin"></div>`
      },
      {
        name: "Skeleton Loader",
        description: "Um placeholder visual que imita a estrutura da interface enquanto o conteúdo real está sendo carregado.",
        usage: "Ideal para carregar conteúdo em cards ou listas. Ele melhora a percepção de performance, mostrando uma pré-visualização da estrutura do layout antes que os dados cheguem, tornando a espera menos frustrante.",
        component: <SkeletonLoaderExample />,
        code: `
<div className="animate-pulse flex space-x-4">
  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
  <div className="flex-1 space-y-6 py-1">
    <div className="h-2 bg-slate-200 rounded"></div>
    <div className="h-2 bg-slate-200 rounded"></div>
  </div>
</div>`
      },
      {
        name: "Progress Bar",
        description: "Indica o progresso de uma tarefa que leva tempo para ser concluída, como um upload ou um processo de várias etapas.",
        usage: "Use para tarefas de longa duração onde o progresso pode ser medido, como upload de um arquivo grande ou um processo de várias etapas. Gerencia a expectativa do usuário sobre o tempo de espera.",
        component: <ProgressBarExample />,
        code: `
const [progress, setProgress] = useState(0);
// ... Lógica para atualizar o progresso

<div className="w-full bg-slate-200 rounded-full h-4">
  <div className="bg-teal-500 h-4 rounded-full" style={{ width: \`\${progress}%\` }}></div>
</div>`
      },
      {
        name: "Empty State",
        description: "Uma tela exibida quando não há conteúdo para mostrar, orientando o usuário sobre como proceder.",
        usage: "Crucial para uma boa experiência do usuário. Use quando uma lista ou busca não tem conteúdo. Em vez de uma tela em branco, guie o usuário com uma mensagem clara e uma ação para ele começar (ex: 'Crie seu primeiro projeto').",
        component: <EmptyStateExample />,
        code: `
<div className="text-center p-6 bg-slate-100 rounded-lg">
  {/* SVG Icon */}
  <h3 className="mt-2 font-semibold">Nenhum item encontrado</h3>
  <p className="mt-1 text-sm text-slate-500">Crie um novo item para começar.</p>
  <button className="mt-6 bg-teal-500 text-white ...">
    Criar Item
  </button>
</div>`
      }
    ]
  },
  {
    title: "Tipografia & Elementos de Texto",
    icon: "✍️",
    description: "A base da comunicação visual. Estilos e elementos para apresentar texto de forma clara, hierárquica, acessível e legível.",
    components: [
        {
            name: "Heading (h1-h6)",
            description: "Títulos hierárquicos para estruturar o conteúdo. A tag <h1> é a mais importante e a <h6>, a menos.",
            usage: "Use títulos para criar uma hierarquia visual e semântica clara. H1 para o título principal da página (apenas um), H2 para seções, H3 para subseções, etc. Isso é crucial para SEO e acessibilidade.",
            component: <HeadingsExample />,
            code: `
<div>
  <h1 className="text-4xl font-bold">Heading 1</h1>
  <h2 className="text-3xl font-bold">Heading 2</h2>
  <h3 className="text-2xl font-bold">Heading 3</h3>
  <h4 className="text-xl font-semibold">Heading 4</h4>
  <h5 className="text-lg font-semibold">Heading 5</h6>
  <h6 className="font-semibold">Heading 6</h6>
</div>
`
        },
        {
            name: "Paragraph (p)",
            description: "O elemento fundamental para exibir blocos de texto. Essencial para a legibilidade e o corpo do conteúdo.",
            usage: "O elemento principal para todo o texto de corpo. Use-o para blocos de texto, descrições e qualquer conteúdo escrito que não seja um título. Garanta que a altura da linha e o espaçamento sejam adequados.",
            component: <ParagraphExample />,
            code: `
<p className="text-slate-600 leading-relaxed">
  Este é um parágrafo de exemplo para demonstrar o texto corrido. A tipografia é a base da comunicação em qualquer interface web.
</p>
`
        },
        {
            name: "Lists (ul, ol, dl)",
            description: "Usadas para agrupar itens relacionados: 'ul' para listas não ordenadas, 'ol' para ordenadas e 'dl' para definições.",
            usage: "Use `<ul>` para listas onde a ordem não importa (ex: recursos). Use `<ol>` para listas onde a ordem é crucial (ex: um passo a passo). Use `<dl>` para glossários ou para associar termos a suas definições.",
            component: <ListsExample />,
            code: `
<div>
  <h4>Não Ordenada</h4>
  <ul className="list-disc list-inside">
    <li>Item</li>
  </ul>
  
  <h4>Ordenada</h4>
  <ol className="list-decimal list-inside">
    <li>Primeiro item</li>
  </ol>
  
  <h4>Definição</h4>
  <dl>
    <dt>Termo</dt>
    <dd>Definição</dd>
  </dl>
</div>
`
        },
        {
            name: "Blockquote",
            description: "Para destacar citações ou trechos de texto de outras fontes, geralmente com uma estilização distinta.",
            usage: "Ideal para destacar citações de pessoas, trechos de outros artigos ou depoimentos de clientes. O recuo e a estilização visual separam claramente a citação do resto do conteúdo.",
            component: <BlockquoteExample />,
            code: `
<blockquote className="border-l-4 border-teal-500 pl-4 italic">
  <p>"O design é como funciona."</p>
  <footer>— Steve Jobs</footer>
</blockquote>
`
        },
        {
            name: "Code Block / Inline Code",
            description: "Para exibir trechos de código. Use <code> para trechos curtos em linha e <pre><code> para blocos maiores.",
            usage: "Use `<code>` em linha para referenciar nomes de variáveis ou arquivos dentro de um parágrafo. Use `<pre>` para exibir blocos de código maiores, preservando a formatação, espaços e quebras de linha.",
            component: <CodeExample />,
            code: `
<div>
  <p>
    Código embutido: <code>&lt;span&gt;</code>
  </p>
  <pre>
    <code>
{\`function greet() {
  console.log("Olá");
}\`}
    </code>
  </pre>
</div>
`
        }
    ]
  },
  {
    title: "Elementos de Mídia",
    icon: "📸",
    description: "Incorpore conteúdo rico como imagens, vídeos e ícones para criar uma experiência visualmente atraente e informativa.",
    components: [
        {
            name: "Image",
            description: "Utilizado para exibir imagens estáticas. Essencial para o apelo visual e para ilustrar conteúdo.",
            usage: "Essencial para quebrar blocos de texto, ilustrar conceitos e tornar a interface mais atraente. Sempre forneça um atributo `alt` descritivo para acessibilidade e SEO.",
            component: <ImageExample />,
            code: `
<figure>
  <img 
    className="rounded-lg shadow-md"
    src="url_da_sua_imagem.jpg" 
    alt="Descrição da imagem" 
  />
  <figcaption>Legenda da imagem.</figcaption>
</figure>
`
        },
        {
            name: "Video / Audio Player",
            description: "Incorpora players de mídia para reprodução de vídeo e áudio diretamente na página, usando as tags nativas do HTML.",
            usage: "Use para incorporar conteúdo multimídia diretamente. Vídeos são ótimos para tutoriais e demonstrações de produtos. Áudio é ideal para podcasts ou amostras de música.",
            component: <MediaPlayerExample />,
            code: `
<div>
  <video className="w-full" controls>
    <source src="seu_video.mp4" type="video/mp4" />
    Seu navegador não suporta a tag de vídeo.
  </video>
  <audio className="w-full" controls>
    <source src="seu_audio.mp3" type="audio/mpeg" />
    Seu navegador não suporta a tag de áudio.
  </audio>
</div>
`
        },
        {
            name: "Iframe / Embed",
            description: "Permite incorporar conteúdo de outras fontes, como mapas, vídeos do YouTube ou posts de redes sociais.",
            usage: "A maneira mais fácil de incluir conteúdo de terceiros, como vídeos do YouTube, mapas ou posts de redes sociais. Use com moderação, pois pode impactar o desempenho da página.",
            component: <IframeExample />,
            code: `
<div className="aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?..."
    title="Exemplo de Mapa"
    loading="lazy">
  </iframe>
</div>
`
        },
        {
            name: "Icon",
            description: "Ícones vetoriais (SVG) para ações e informações. São escaláveis, personalizáveis e de carregamento rápido.",
            usage: "Use ícones para reforçar o significado de ações e informações, economizando espaço. Eles são universalmente compreendidos e melhoram a escaneabilidade da interface. Prefira SVGs por sua escalabilidade.",
            component: <IconExample />,
            code: `
<div>
  {/* Use SVGs inline ou de uma biblioteca */}
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="..." />
  </svg>
</div>
`
        },
        {
            name: "Avatar",
            description: "Uma imagem circular para representar usuários ou perfis, frequentemente com indicadores de status.",
            usage: "Ideal para representar usuários em listas, comentários e perfis. Um avatar torna a interface mais humana e pessoal. O indicador de status é útil para aplicações de comunicação.",
            component: <AvatarExample />,
            code: `
<div className="relative">
  <img 
    className="h-16 w-16 rounded-full" 
    src="url_avatar.jpg" 
    alt="Avatar do usuário" 
  />
  {/* Indicador de Status Opcional */}
  <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span>
</div>
`
        }
    ]
  },
  {
    title: "Extras & Avançados",
    icon: "✨",
    description: "Componentes mais complexos para visualização de dados e funcionalidades ricas que levam sua aplicação para o próximo nível.",
    components: [
        {
            name: "Table",
            description: "Para organizar e exibir dados em linhas e colunas. Ideal para informações estruturadas de forma clara e concisa.",
            usage: "A melhor escolha para exibir dados tabulares densos, como planilhas, relatórios financeiros ou listas de especificações. Priorize a clareza e a legibilidade.",
            component: <TableExample />,
            code: `
<div className="w-full overflow-x-auto rounded-lg border">
  <table className="min-w-full text-sm">
    <thead className="bg-slate-100">
      <tr>
        <th>Produto</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td>Laptop</td>
        <td>R$ 5.999</td>
      </tr>
    </tbody>
  </table>
</div>
`
        },
        {
            name: "Data Grid",
            description: "Uma tabela avançada com funcionalidades interativas, como ordenação de colunas e filtragem de dados em tempo real.",
            usage: "Use quando sua tabela precisa de funcionalidades de uma aplicação, como ordenação, filtragem e paginação. É um componente essencial para painéis de administração e aplicações de gerenciamento de dados.",
            component: <DataGridExample />,
            code: `
// Requer estado para filtro e ordenação
const [filter, setFilter] = useState('');
const [sortConfig, setSortConfig] = useState({ key: 'name', dir: 'asc' });

// Lógica para filtrar e ordenar os dados...

return (
  <div className="w-full">
    <input placeholder="Filtrar..." onChange={...} />
    <div className="mt-2 w-full overflow-x-auto rounded-lg border">
        <table className="w-full text-sm whitespace-nowrap">
            <thead>
                <th onClick={() => requestSort('name')}>Nome</th>
                {/* ... */}
            </thead>
            <tbody>{/* ... dados mapeados ... */}</tbody>
        </table>
    </div>
  </div>
);`
        },
        {
            name: "Charts / Graphs",
            description: "Visualização de dados através de gráficos (barras, linhas, pizza) para facilitar a compreensão de informações complexas.",
            usage: "Indispensável para dashboards e relatórios. Transforme números e dados brutos em insights visuais fáceis de entender. Escolha o tipo de gráfico (barras, linha, pizza) que melhor representa seus dados.",
            component: <ChartExample />,
            code: `
const data = [
  { label: 'A', value: 45, color: 'fill-teal-500' },
  { label: 'B', value: 80, color: 'fill-blue-500' },
  { label: 'C', value: 60, color: 'fill-green-500' },
];
const chartHeight = 150;
const barWidth = 30;
const maxValue = 100;

return (
  <svg viewBox={'...'} aria-label="Gráfico de barras">
    {data.map((item, index) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = index * (barWidth + 20); // 20 é a margem
      const y = chartHeight - barHeight;
      return (
        <g key={item.label}>
          <title>{\`\${item.label}: \${item.value}\`}</title>
          <rect
            x={x} y={y}
            width={barWidth} height={barHeight}
            className={item.color}
            rx="2"
          />
          <text x={x + barWidth / 2} y={chartHeight + 15} textAnchor="middle">
            {item.label}
          </text>
        </g>
      );
    })}
  </svg>
);`
        },
        {
            name: "Map (Google Maps / Leaflet)",
            description: "Incorpora mapas interativos para exibir localizações geográficas, rotas ou pontos de interesse.",
            usage: "Use sempre que precisar mostrar uma localização física, como o endereço de uma loja, a área de cobertura de um serviço ou para rastrear uma entrega. A interatividade do mapa melhora muito a experiência.",
            component: <MapExample />,
            code: `
<div className="w-full aspect-square">
  <iframe
    className="w-full h-full"
    src="https://www.openstreetmap.org/export/embed.html?..."
    title="Exemplo de Mapa">
  </iframe>
</div>
`
        },
        {
            name: "Chat Widget",
            description: "Um widget flutuante, geralmente para suporte ao cliente ou chatbot, que abre uma janela de conversação.",
            usage: "Ideal para sites de e-commerce e SaaS para oferecer suporte ao cliente em tempo real. Permite que os usuários tirem dúvidas sem sair da página, o que pode aumentar as conversões.",
            component: <ChatWidgetExample />,
            code: `
const [isOpen, setIsOpen] = useState(false);

<div className="fixed bottom-4 right-4">
  <button onClick={() => setIsOpen(!isOpen)}>💬</button>
  {isOpen && (
    <div className="absolute bottom-16 right-0 w-64 h-80 bg-white">
      {/* Conteúdo do Chat */}
    </div>
  )}
</div>`
        },
        {
            name: "Notification Center",
            description: "Um painel, geralmente acionado por um ícone de sino, que agrega e exibe notificações e alertas para o usuário.",
            usage: "Use em aplicações onde os usuários recebem atualizações frequentes, como redes sociais ou ferramentas de gerenciamento de projetos. Agrega todas as novidades em um único local de fácil acesso.",
            component: <NotificationCenterExample />,
            code: `
const [isOpen, setIsOpen] = useState(false);

<div className="relative">
  <button onClick={() => setIsOpen(!isOpen)}>🔔</button>
  {isOpen && (
    <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg border z-10">
      <div className="p-2 font-bold border-b">Notificações</div>
      <ul className="text-sm">
        <li className="p-2 hover:bg-slate-100">Notificação 1</li>
        <li className="p-2 hover:bg-slate-100">Notificação 2</li>
      </ul>
    </div>
  )}
</div>`
        },
        {
            name: "Tag / Chip / Pill",
            description: "Marcadores compactos para categorizar ou rotular itens, como posts de blog, produtos ou filtros de pesquisa.",
            usage: "Perfeito para adicionar metadados a itens. Use para categorizar artigos de blog, mostrar tecnologias em um projeto, ou como filtros selecionados em uma busca.",
            component: <TagExample />,
            code: `
<div className="flex gap-2">
  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
    Tecnologia
  </span>
  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
    Produtividade
  </span>
</div>`
        },
        {
            name: "Breadcrumb + Filter Combo",
            description: "Combina a navegação hierárquica do breadcrumb com controles de filtro, criando um contexto claro para o usuário.",
            usage: "Uma combinação poderosa para páginas de listagem complexas em e-commerce. O breadcrumb mostra a categoria, enquanto os filtros permitem ao usuário refinar os resultados dentro daquela categoria.",
            component: <BreadcrumbFilterComboExample />,
            code: `
<div className="bg-white p-4 rounded-lg border">
  <nav aria-label="breadcrumb">
    <ol>...</ol>
  </nav>
  <div className="mt-4 pt-4 border-t flex flex-col items-start sm:flex-row sm:items-center gap-4">
    <span>Filtrar por:</span>
    <select>...</select>
    <select>...</select>
  </div>
</div>`
        }
    ]
  }
];
