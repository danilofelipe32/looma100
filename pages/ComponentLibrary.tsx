import React, { useState, useRef, useEffect, useMemo } from 'react';
import { componentCategories } from '../data/componentData';
import ComponentCard from '../components/ui/ComponentCard';
import { ComponentInfo } from '../types';
import CodeBlock from '../components/ui/CodeBlock';

const AnimateOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  componentData: ComponentInfo | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, componentData }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen || !componentData) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden transform animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <h2 id="modal-title" className="text-xl font-bold text-slate-900 dark:text-slate-50">
            {componentData.name}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Fechar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <main className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Demonstração</h3>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-6 min-h-[150px] flex justify-center items-center">
              {componentData.component}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Descrição</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{componentData.description}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Quando Utilizar</h3>
             <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-2 bg-slate-50 dark:bg-slate-900/50">
                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">{componentData.usage}</p>
             </blockquote>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Código de Exemplo</h3>
            <CodeBlock code={componentData.code} />
          </div>
        </main>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

const ComponentLibrary: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todas as Categorias');
  const [modalComponent, setModalComponent] = useState<ComponentInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleViewDetails = (component: ComponentInfo) => {
    setModalComponent(component);
  };

  const handleCloseModal = () => {
    setModalComponent(null);
  };
  
  const allCategoryTitles = ['Todas as Categorias', ...componentCategories.map(cat => cat.title)];
  
  const finalCategories = useMemo(() => {
    const categoriesToShow = activeFilter === 'Todas as Categorias'
        ? componentCategories
        : componentCategories.filter(cat => cat.title === activeFilter);

    if (!searchQuery) {
        return categoriesToShow;
    }

    return categoriesToShow.map(category => {
        const filteredComponents = category.components.filter(component =>
            component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            component.usage.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...category, components: filteredComponents };
    }).filter(category => category.components.length > 0);

  }, [activeFilter, searchQuery]);

  return (
    <>
      <main className="container mx-auto px-4 py-12 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
              Componentes Essenciais da Web
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              Uma exploração dos blocos fundamentais de UI/UX que compõem as interfaces web modernas.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <label htmlFor="search-components" className="sr-only">Buscar componentes</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" aria-hidden="true">
                <svg className="h-5 w-5 text-gray-400 dark:text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="search"
                id="search-components"
                placeholder="Buscar componentes por nome, descrição ou uso..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-lg shadow-cyan-500/10 dark:shadow-none transition"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {allCategoryTitles.map((categoryTitle) => (
              <button
                key={categoryTitle}
                onClick={() => setActiveFilter(categoryTitle)}
                className={`px-4 py-2 text-sm font-semibold rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                  activeFilter === categoryTitle
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
                aria-pressed={activeFilter === categoryTitle}
              >
                {categoryTitle}
              </button>
            ))}
          </div>
        </div>

        {finalCategories.map((category) => (
          <section key={category.title} className="mb-16" id={category.title.replace(/\s+/g, '-')}>
            <AnimateOnScroll>
              <div className="mb-8">
                 <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 border-b-2 border-teal-500 pb-2 inline-flex items-center gap-3">
                  <span>{category.icon}</span>
                  {category.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-4xl">{category.description}</p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.components.map((component) => (
                <ComponentCard
                  key={component.name}
                  name={component.name}
                  description={component.description}
                  code={component.code}
                  onViewDetails={() => handleViewDetails(component)}
                >
                  {component.component}
                </ComponentCard>
              ))}
            </div>
          </section>
        ))}

        {finalCategories.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <div className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">Nenhum componente encontrado</h3>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
                Sua busca por <span className="font-semibold text-slate-800 dark:text-slate-200">"{searchQuery}"</span> não retornou resultados. Tente outros termos.
            </p>
          </div>
        )}
      </main>
      <Modal 
        isOpen={!!modalComponent}
        onClose={handleCloseModal}
        componentData={modalComponent}
      />
    </>
  );
};

export default ComponentLibrary;