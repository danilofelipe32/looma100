import React, { useState, useRef, useEffect } from 'react';
import { componentCategories } from './data/componentData';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ComponentCard from './components/ui/ComponentCard';

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


const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todas as Categorias');
  
  const allCategoryTitles = ['Todas as Categorias', ...componentCategories.map(cat => cat.title)];

  const filteredCategories = activeFilter === 'Todas as Categorias'
    ? componentCategories
    : componentCategories.filter(cat => cat.title === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-100 text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-12 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Componentes Essenciais da Web
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
              Uma exploração dos blocos fundamentais de UI/UX que compõem as interfaces web modernas.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Filter Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {allCategoryTitles.map((categoryTitle) => (
            <button
              key={categoryTitle}
              onClick={() => setActiveFilter(categoryTitle)}
              className={`px-4 py-2 text-sm font-semibold rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                activeFilter === categoryTitle
                  ? 'bg-teal-500 text-white hover:bg-teal-600'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
              aria-pressed={activeFilter === categoryTitle}
            >
              {categoryTitle}
            </button>
          ))}
        </div>

        {filteredCategories.map((category) => (
          <section key={category.title} className="mb-16" id={category.title.replace(/\s+/g, '-')}>
            <AnimateOnScroll>
              <div className="mb-8">
                 <h2 className="text-3xl font-bold text-slate-900 mb-3 border-b-2 border-teal-500 pb-2 inline-flex items-center gap-3">
                  <span>{category.icon}</span>
                  {category.title}
                </h2>
                <p className="text-slate-600 max-w-4xl">{category.description}</p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.components.map((component) => (
                <ComponentCard
                  key={component.name}
                  name={component.name}
                  description={component.description}
                  code={component.code}
                >
                  {component.component}
                </ComponentCard>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
