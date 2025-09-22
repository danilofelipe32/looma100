
import React, { useState, useRef, useEffect } from 'react';
import CodeBlock from './CodeBlock';

interface ComponentCardProps {
  name: string;
  description: string;
  code: string;
  children: React.ReactNode;
  onViewDetails: () => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ name, description, code, children, onViewDetails }) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copiar');
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code.trim()).then(() => {
        setCopyButtonText('Copiado!');
        setTimeout(() => setCopyButtonText('Copiar'), 2000);
      }).catch(err => {
        console.error('Falha ao copiar: ', err);
        setCopyButtonText('Erro');
        setTimeout(() => setCopyButtonText('Copiar'), 2000);
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="bg-slate-100 rounded-lg p-6 min-h-[150px] flex justify-center items-center">
          {children}
        </div>
      </div>
      <div className="mt-auto bg-slate-50 border-t border-slate-200 px-6 py-3 flex justify-between items-center">
        <button
          onClick={onViewDetails}
          title="Ver detalhes"
          className="p-2 rounded-full text-slate-600 hover:bg-slate-200 hover:text-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-teal-500"
          aria-label={`Ver detalhes de ${name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C3.732 4.943 7.523 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-7.03 7-9.542 7S3.732 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 text-sm font-semibold text-slate-700 hover:text-teal-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{copyButtonText}</span>
          </button>
          <button
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            className="flex items-center space-x-2 text-sm font-semibold text-slate-700 hover:text-teal-500 transition-colors"
          >
            <span>Ver Código</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${isCodeVisible ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {isCodeVisible && <CodeBlock code={code} />}
    </div>
  );
};

export default ComponentCard;