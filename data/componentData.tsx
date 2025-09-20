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
  <section className="w-full bg-white shadow-md p-6 rounded-lg border-l-4 border-teal-500 transition-shadow hover:shadow-lg">
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
  <nav className="w-full bg-teal-500 p-3 rounded-lg flex justify-center items-center space-x-6">
    <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Início</a>
    <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Sobre</a>
    <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Contato</a>
  </nav>
);

const SidebarExample: React.FC = () => (
  <div className="w-full h-56 flex rounded-lg overflow-hidden bg-white shadow-md">
    <aside className="w-1/3 bg-slate-800 p-4 flex flex-col">
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
    <main className="w-2/3 p-4 flex items-center justify-center bg-slate-50">
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
  <div className="w-full grid grid-cols-3 gap-3">
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">1</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">2</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">3</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer col-span-2">4</div>
    <div className="bg-teal-100 h-16 rounded-lg flex items-center justify-center font-bold text-teal-800 transition-transform hover:scale-105 cursor-pointer">5</div>
  </div>
);

const HeroExample: React.FC = () => (
    <div className="w-full text-center bg-slate-200 p-8 rounded-lg">
      <h2 className="text-3xl font-bold">Hero Title</h2>
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
    <ol className="flex items-center space-x-2 text-sm text-slate-500">
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
    <nav className="flex items-center space-x-2 text-sm">
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
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
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
  <nav className="w-full bg-slate-800 p-3 rounded-lg flex justify-center items-center space-x-6">
    <a href="#" className="text-white font-semibold px-3 py-1">Início</a>
    <div className="relative group">
       <button className="text-white font-semibold px-3 py-1 flex items-center">
        Serviços
        <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    <div className="flex space-x-4 items-center w-full">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Título do Modal</h3>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">&times;</button>
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

const SliderExample: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  return (
    <div className="relative w-full max-w-sm h-32 rounded-lg bg-slate-200 overflow-hidden shadow-inner">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((s) => (
          <div key={s} className="w-full h-32 flex-shrink-0 flex items-center justify-center text-xl font-bold text-slate-700">{s}</div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white text-lg leading-none">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white text-lg leading-none">›</button>
    </div>
  );
};

const GalleryExample: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [image, setImage] = useState(0);
  const images = [
    'https://placehold.co/150x150/14b8a6/ffffff?text=Img+1',
    'https://placehold.co/150x150/3b82f6/ffffff?text=Img+2',
    'https://placehold.co/150x150/16a34a/ffffff?text=Img+3',
  ];
  const openLightbox = (index: number) => { setImage(index); setLightboxOpen(true); };
  return (
    <>
      <div className="flex space-x-2">
        {images.map((src, i) => (
          <img key={src} src={src} alt={`Thumbnail ${i+1}`} className="w-16 h-16 rounded-md cursor-pointer hover:opacity-75 transition-opacity" onClick={() => openLightbox(i)} />
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setLightboxOpen(false)}>
          <img src={images[image].replace('150x150', '600x600')} alt="Enlarged view" className="max-w-[90vw] max-h-[90vh] rounded-lg" onClick={e => e.stopPropagation()} />
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

const StepsExample: React.FC = () => {
  const [step, setStep] = useState(2);
  const steps = [1, 2, 3];
  return (
    <div className="w-full max-w-sm">
      <nav className="flex items-center justify-between">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= s ? 'bg-teal-500 text-white' : 'bg-slate-200 text-slate-500'}`}>{s}</div>
              <p className={`text-xs mt-1 transition-colors ${step >= s ? 'text-teal-600 font-semibold' : 'text-slate-500'}`}>Etapa {s}</p>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 transition-colors ${step > s ? 'bg-teal-500' : 'bg-slate-200'}`}></div>}
          </React.Fragment>
        ))}
      </nav>
      <div className="mt-6 flex justify-between">
        <button onClick={() => setStep(s => Math.max(1, s - 1))} className="bg-slate-200 text-slate-800 py-1 px-3 rounded text-sm hover:bg-slate-300 disabled:opacity-50" disabled={step === 1}>Anterior</button>
        <button onClick={() => setStep(s => Math.min(steps.length, s + 1))} className="bg-slate-200 text-slate-800 py-1 px-3 rounded text-sm hover:bg-slate-300 disabled:opacity-50" disabled={step === steps.length}>Próximo</button>
      </div>
    </div>
  );
};

const FAQExample: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const faqs = [
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

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {faqs.map((faq) => (
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
    <div className="flex items-center justify-center space-x-6 text-slate-700">
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-xs mt-1">Home</span>
      </div>
       <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
    <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm text-left text-slate-500 rounded-lg shadow-md">
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

const DataGridExample: React.FC = () => {
    const data = [
        { id: 1, name: 'Ana', age: 28, role: 'Admin' },
        { id: 2, name: 'Bruno', age: 34, role: 'Editor' },
        { id: 3, name: 'Carla', age: 22, role: 'Viewer' },
    ];
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof typeof data[0], dir: 'asc' | 'desc' } | null>({ key: 'name', dir: 'asc' });

    const sortedData = useMemo(() => {
        let sortableItems = [...data].filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.dir === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.dir === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [data, filter, sortConfig]);

    const requestSort = (key: keyof typeof data[0]) => {
        let dir: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.dir === 'asc') {
            dir = 'desc';
        }
        setSortConfig({ key, dir });
    };
    
    const getSortIndicator = (key: keyof typeof data[0]) => {
      if (sortConfig?.key === key) return sortConfig.dir === 'asc' ? ' ▲' : ' ▼';
      return '';
    }

    return (
        <div className="w-full">
            <input type="text" placeholder="Filtrar por nome..." value={filter} onChange={e => setFilter(e.target.value)} className="w-full mb-2 p-1 border rounded" />
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-100">
                    <tr>
                        <th onClick={() => requestSort('name')} className="cursor-pointer px-2 py-2">Nome{getSortIndicator('name')}</th>
                        <th onClick={() => requestSort('age')} className="cursor-pointer px-2 py-2">Idade{getSortIndicator('age')}</th>
                        <th onClick={() => requestSort('role')} className="cursor-pointer px-2 py-2">Função{getSortIndicator('role')}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(item => (
                        <tr key={item.id} className="border-b hover:bg-slate-50">
                            <td className="px-2 py-2">{item.name}</td>
                            <td className="px-2 py-2">{item.age}</td>
                            <td className="px-2 py-2">{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ChartExample: React.FC = () => {
  const data = [
    { label: 'A', value: 45, color: 'fill-teal-500' },
    { label: 'B', value: 80, color: 'fill-blue-500' },
    { label: 'C', value: 60, color: 'fill-green-500' },
    { label: 'D', value: 25, color: 'fill-red-500' },
  ];
  const chartHeight = 150;
  const barWidth = 30;
  const barMargin = 20;
  const svgWidth = data.length * (barWidth + barMargin);
  const maxValue = 100;

  return (
    <div className="w-full max-w-sm p-4 flex justify-center items-center">
      <svg viewBox={`0 0 ${svgWidth} ${chartHeight + 20}`} aria-label="Gráfico de barras" role="img" className="w-full h-auto">
        <title>Exemplo de Gráfico de Barras</title>
        {data.map((item, index) => {
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
        <div className="mt-4 pt-4 border-t flex items-center gap-4 text-sm">
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

export const componentCategories: ComponentCategory[] = [
  {
    title: "Estrutura & Layout",
    icon: "📌",
    description: "Os blocos de construção que definem a arquitetura visual e o esqueleto de qualquer página web, garantindo uma base sólida e responsiva.",
    components: [
       {
        name: "Container / Wrapper",
        description: "Delimita e centraliza o conteúdo principal, garantindo margens consistentes e legibilidade em diferentes tamanhos de tela.",
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
        component: <SectionExample />,
        code: `
<section className="w-full bg-white shadow-md p-6 rounded-lg border-l-4 border-teal-500">
  <h3 className="font-bold text-lg mb-2">Título da Seção</h3>
  <p className="text-slate-600 text-sm">Este é um bloco de conteúdo temático.</p>
</section>`
      },
      {
        name: "Header",
        description: "A área superior da página ou de uma seção, contendo branding, título ou navegação principal. Define a identidade visual.",
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
        component: <NavbarExample />,
        code: `
<nav className="w-full bg-teal-500 p-3 rounded-lg flex justify-center items-center space-x-6">
  <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Início</a>
  <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Sobre</a>
  <a href="#" className="text-white font-semibold hover:bg-teal-600 px-3 py-1 rounded-md transition-all">Contato</a>
</nav>`
      },
      {
        name: "Sidebar",
        description: "Uma coluna vertical, geralmente à esquerda ou direita, contendo navegação secundária, filtros ou informações contextuais.",
        component: <SidebarExample />,
        code: `
<div className="w-full h-56 flex rounded-lg overflow-hidden bg-white shadow-md">
  {/* A sidebar ocupa 1/3 do container */}
  <aside className="w-1/3 bg-slate-800 p-4 flex flex-col">
    {/* Cabeçalho opcional da sidebar */}
    <div className="flex items-center mb-6 shrink-0">
      <div className="w-8 h-8 bg-teal-500 rounded-md mr-3 ...">L</div>
      <span className="text-white font-semibold">Looma</span>
    </div>
    {/* Navegação principal */}
    <nav className="flex flex-col space-y-2">
      <a href="#" className="flex items-center p-2 text-slate-300 hover:bg-slate-700 ...">
        <svg>...</svg> {/* Ícone de Painel */}
        Painel
      </a>
      <a href="#" className="flex items-center p-2 text-slate-300 hover:bg-slate-700 ...">
        <svg>...</svg> {/* Ícone de Perfil */}
        Perfil
      </a>
      {/* Item ativo */}
      <a href="#" className="flex items-center p-2 bg-slate-900 text-white ...">
        <svg>...</svg> {/* Ícone de Ajustes */}
        Ajustes
      </a>
    </nav>
  </aside>
  {/* Conteúdo principal */}
  <main className="w-2/3 p-4 flex items-center justify-center bg-slate-50">
    <p>Conteúdo principal.</p>
  </main>
</div>`
      },
      {
        name: "Footer",
        description: "O rodapé da página, contendo informações como links úteis, contatos, direitos autorais e links para redes sociais.",
        component: <FooterExample />,
        code: `
<footer className="w-full bg-slate-800 text-white p-4 rounded-lg text-center">
  <p className="text-sm">&copy; 2024 Meu Site. Todos os direitos reservados.</p>
</footer>`
      },
      {
        name: "Grid / Flexbox Layout",
        description: "Sistemas de layout poderosos para criar arranjos responsivos e complexos. Grid é para layout 2D, Flexbox para 1D.",
        component: <GridFlexboxExample />,
        code: `
<div className="w-full grid grid-cols-3 gap-3">
  <div className="bg-teal-100 h-16 rounded-lg flex ...">1</div>
  <div className="bg-teal-100 h-16 rounded-lg flex ...">2</div>
  <div className="bg-teal-100 h-16 rounded-lg flex ...">3</div>
  {/* col-span-2 faz este item ocupar 2 colunas */}
  <div className="bg-teal-100 h-16 rounded-lg flex col-span-2 ...">4</div>
  <div className="bg-teal-100 h-16 rounded-lg flex ...">5</div>
</div>`
      },
      {
        name: "Hero Section",
        description: "Área de destaque no topo da página para capturar a atenção do usuário com uma imagem impactante e um call-to-action.",
        component: <HeroExample />,
        code: `
<div className="w-full text-center bg-slate-200 p-8 rounded-lg">
  <h2 className="text-3xl font-bold">Hero Title</h2>
  <p className="mt-2 text-slate-600">Descrição atrativa aqui.</p>
  <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition-transform hover:scale-105 shadow-md hover:shadow-lg">
    Call to Action
  </button>
</div>
`
      },
       {
        name: "Card",
        description: "Um bloco de conteúdo autocontido, geralmente com uma imagem, título e ações, usado para exibir itens em uma coleção.",
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
        component: <BreadcrumbExample />,
        code: `
<nav aria-label="breadcrumb">
  <ol className="flex items-center space-x-2 text-sm text-slate-500">
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
        component: <PaginationExample />,
        code: `
const [currentPage, setCurrentPage] = useState(2);
// ...
<nav>
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
        component: <TabsExample />,
        code: `
const [activeTab, setActiveTab] = useState(2);
// ...
<div>
  <nav>
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
        component: <FilterSortExample />,
        code: `
<div className="flex space-x-4">
  <div>
    <label htmlFor="sort">Ordenar por</label>
    <select id="sort">
      <option>Relevância</option>
      <option>Preço</option>
    </select>
  </div>
  {/* ... mais filtros */}
</div>`
      }
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
        component: <TimelineExample />,
        code: `
<div className="relative">
  {/* Linha vertical */}
  <div className="absolute left-1/2 w-0.5 h-full bg-slate-300"></div>
  {/* Itens da timeline */}
  <div className="relative mb-8 ...">
    <div className="absolute left-1/2 w-4 h-4 rounded-full bg-teal-500"></div>
    <div>Evento 1</div>
  </div>
</div>`
      },
      {
        name: "Steps / Wizard",
        description: "Guia o usuário através de um processo com múltiplas etapas, como um cadastro ou um checkout.",
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
      }
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
      }
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
        component: (
          <div className="w-8 h-8 border-4 border-slate-200 border-t-teal-500 rounded-full animate-spin"></div>
        ),
        code: `<div className="w-8 h-8 border-4 border-slate-200 border-t-teal-500 rounded-full animate-spin"></div>`
      },
      {
        name: "Skeleton Loader",
        description: "Um placeholder visual que imita a estrutura da interface enquanto o conteúdo real está sendo carregado.",
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
            component: <TableExample />,
            code: `
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
`
        },
        {
            name: "Data Grid",
            description: "Uma tabela avançada com funcionalidades interativas, como ordenação de colunas e filtragem de dados em tempo real.",
            component: <DataGridExample />,
            code: `
// Requer estado para filtro e ordenação
const [filter, setFilter] = useState('');
const [sortConfig, setSortConfig] = useState({ key: 'name', dir: 'asc' });

// Lógica para filtrar e ordenar os dados...

return (
  <div>
    <input placeholder="Filtrar..." onChange={...} />
    <table>
      <thead>
        <th onClick={() => requestSort('name')}>Nome</th>
        {/* ... */}
      </thead>
      <tbody>{/* ... dados mapeados ... */}</tbody>
    </table>
  </div>
);`
        },
        {
            name: "Charts / Graphs",
            description: "Visualização de dados através de gráficos (barras, linhas, pizza) para facilitar a compreensão de informações complexas.",
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
            component: <BreadcrumbFilterComboExample />,
            code: `
<div>
  <nav aria-label="breadcrumb">
    <ol>...</ol>
  </nav>
  <div className="mt-4 border-t">
    <span>Filtrar por:</span>
    <select>...</select>
  </div>
</div>`
        }
    ]
  }
];