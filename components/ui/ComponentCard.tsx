
import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

interface ComponentCardProps {
  name: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ name, description, code, children }) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copiar');

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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="bg-slate-100 rounded-lg p-6 min-h-[100px] flex justify-center items-center">
          {children}
        </div>
      </div>
      <div className="mt-auto bg-slate-50 border-t border-slate-200 px-6 py-2 flex justify-between items-center">
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
      {isCodeVisible && <CodeBlock code={code} />}
    </div>
  );
};

export default ComponentCard;
