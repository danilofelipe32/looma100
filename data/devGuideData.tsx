
import React, { useState, useEffect } from 'react';

interface DevGuideTopic {
  title: string;
  slug: string;
  content: React.ReactNode;
}

// Define a more specific type for the error data to ensure type safety
interface ErrorData {
  title: string;
  icon: React.ReactNode;
  location: string;
  locationIcon: React.ReactNode;
  explanation: string;
  codeExample: string;
  causes: string[];
  impact: string;
  troubleshootingSteps: string[];
  aiPrompt: string;
}

// New Modal Component
const ErrorDetailsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  errorData: ErrorData | null;
}> = ({ isOpen, onClose, errorData }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copiar Prompt');

  useEffect(() => {
    if (!isOpen) {
      // Reset button text when modal closes
      setTimeout(() => setCopyButtonText('Copiar Prompt'), 300);
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleCopy = () => {
    if (navigator.clipboard && errorData) {
      navigator.clipboard.writeText(errorData.aiPrompt.trim()).then(() => {
        setCopyButtonText('Copiado!');
        setTimeout(() => setCopyButtonText('Copiar Prompt'), 2000);
      }).catch(err => {
        console.error('Falha ao copiar: ', err);
      });
    }
  };

  if (!isOpen || !errorData) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <h2 id="modal-title" className="text-lg font-bold text-slate-900 dark:text-slate-50">
            Detalhes do Erro: {errorData.title}
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
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{errorData.explanation}</p>

          <div>
            <h3 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              Como Solucionar (Troubleshooting)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
              {errorData.troubleshootingSteps.map((step, index) => <li key={index}>{step}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Exemplos Práticos</h3>
            <pre className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                <code>{errorData.codeExample}</code>
            </pre>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border-l-4 border-teal-500 space-y-3">
            <h3 className="font-semibold text-teal-800 dark:text-teal-300">Dica para o Google AI Studio</h3>
            <p className="text-sm text-teal-700 dark:text-teal-400">
                Tire um print da sua tela mostrando o erro (no terminal ou navegador) e cole-o junto com o prompt abaixo no Google AI Studio para obter uma correção automática.
            </p>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-3 relative">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-mono text-xs select-all">
                    {errorData.aiPrompt}
                </p>
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2 py-1 rounded-md transition-colors"
                >
                    {copyButtonText}
                </button>
            </div>
          </div>
        </main>

        <footer className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 text-right flex-shrink-0">
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Fechar
          </button>
        </footer>
      </div>
       <style>{`
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.2s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};


const ErrorInfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  location: string;
  locationIcon: React.ReactNode;
  explanation: string;
  causes: string[];
  impact: string;
  codeExample: string;
  onViewDetails: () => void;
}> = ({ icon, title, location, locationIcon, explanation, causes, impact, codeExample, onViewDetails }) => (
  <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="p-6 space-y-4 flex-grow">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        {locationIcon}
        <span>Onde aparece: <strong>{location}</strong></span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">{explanation}</p>
      
      <div>
          <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">Exemplo Típico:</h4>
          <pre className="bg-slate-100 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
              <code>{codeExample}</code>
          </pre>
      </div>
  
      <div>
          <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">Causas Comuns:</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
              {causes.map((cause, index) => <li key={index}>{cause}</li>)}
          </ul>
      </div>
      
       <div>
          <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">Impacto:</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{impact}</p>
      </div>
    </div>
    <div className="p-4 mt-auto bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700/50 rounded-b-xl">
        <button
            onClick={onViewDetails}
            className="w-full text-center bg-slate-200/70 dark:bg-slate-700/50 hover:bg-slate-300/70 dark:hover:bg-slate-600/50 text-slate-700 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
            Ver Detalhes e Soluções
        </button>
    </div>
  </div>
);


const TiposDeErrosComponent: React.FC = () => {
    const [selectedError, setSelectedError] = useState<ErrorData | null>(null);
    const errorData: ErrorData[] = [
    {
        title: 'Erros de Sintaxe (Build)',
        icon: (
            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
        ),
        location: 'Terminal',
        locationIcon: <span className="font-mono text-orange-500">&gt;_</span>,
        explanation: 'Ocorrem quando o código não segue a "gramática" do JavaScript ou TypeScript. O processo de build (compilação) do Vite falha e o erro é exibido diretamente no seu terminal, antes mesmo de chegar ao navegador.',
        codeExample: `> frontend@0.0.8 dev\n> vite\n\n[vite] Internal server error: Failed to parse source for import analysis bec...\n  File: /path/to/your/project/src/App.tsx:10:0\n\n   8 |   return (\n   9 |     <div\n  10 |   )\n     |   ^\n  11 | }\n  12 |`,
        causes: ['Falta de `{}`, `()`, `[]`', 'Palavras-chave da linguagem escritas incorretamente.', 'Erros de digitação em geral.'],
        impact: 'O programa nem chega a ser construído ou executado. O desenvolvedor é bloqueado imediatamente, pois o código não pode ser compilado.',
        troubleshootingSteps: [
            'Leia a mensagem de erro no terminal. Vite geralmente indica o arquivo e a linha exata do problema.',
            'Use um linter como o ESLint no seu editor de código para pegar esses erros em tempo real.',
            'Verifique se todos os parênteses `()`, chaves `{}` e colchetes `[]` estão corretamente fechados.',
            'Confira se não faltam vírgulas em objetos ou ponto-e-vírgulas onde são necessários.'
        ],
        aiPrompt: 'Analise a imagem anexada que mostra um erro de sintaxe no meu terminal. Identifique o erro no código e corrija-o diretamente no editor. Após a correção, explique brevemente qual foi o erro de sintaxe e como você o solucionou.'
    },
    {
        title: 'Erros de Tipo (TypeScript)',
        icon: (
            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">T</span>
            </div>
        ),
        location: 'Terminal',
        locationIcon: <span className="font-mono text-orange-500">&gt;_</span>,
        explanation: 'Ocorrem quando o código espera um valor de um tipo (ex: número) mas recebe outro (ex: texto). O TypeScript avisa sobre essa incompatibilidade antes da execução.',
        codeExample: `src/App.tsx:5:3 - error TS2322: Type 'string' is not assignable to type 'number'.\n\n5   let idade: number = "vinte";\n    ~~~~~`,
        causes: ['Passar um `string` para uma função que espera um `number`.', 'Atribuir um valor de tipo incorreto a uma variável.', 'Retornar um tipo diferente do que uma função prometeu.'],
        impact: 'Impede a compilação do código, prevenindo proativamente bugs que ocorreriam apenas quando o programa estivesse em execução.',
        troubleshootingSteps: [
            'Leia atentamente a mensagem de erro do TypeScript. Ela dirá qual tipo era esperado e qual foi recebido.',
            'Verifique as definições de tipo (interfaces, types) dos dados com os quais está trabalhando.',
            'Se a mudança de tipo for intencional, você pode precisar converter o valor (ex: `parseInt("10")`).',
            'Use a funcionalidade "Go to Definition" do seu editor para rastrear a origem dos tipos.'
        ],
        aiPrompt: 'A imagem anexada mostra um erro de tipo do TypeScript no meu terminal. Analise o erro, identifique a incompatibilidade de tipos no código e corrija-o diretamente no editor. Depois, explique qual era o tipo esperado e qual foi o tipo fornecido que causou o problema.'
    },
    {
        title: 'Erros de Servidor (EADDRINUSE)',
        icon: (
             <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.816H7.923a3.375 3.375 0 00-3.285 2.816l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                </svg>
            </div>
        ),
        location: 'Terminal',
        locationIcon: <span className="font-mono text-orange-500">&gt;_</span>,
        explanation: 'Significa "Endereço já em uso". Ocorre quando o servidor de desenvolvimento tenta iniciar em uma "porta" (um canal de comunicação) que já está ocupada por outro programa.',
        codeExample: `Error: listen EADDRINUSE: address already in use :::3000\nat Server.setupListenHandle [as _listen2] (node:net:1330:16)`,
        causes: ['Outro servidor de desenvolvimento rodando na mesma porta.', 'Um processo anterior que não foi encerrado corretamente.', 'Outro programa no computador usando a mesma porta.'],
        impact: 'O servidor de desenvolvimento não consegue iniciar, impedindo o acesso à aplicação no navegador durante o desenvolvimento.',
        troubleshootingSteps: [
            'Verifique se você não tem outra janela do terminal rodando o mesmo projeto.',
            'Feche o processo que está usando a porta. No terminal, você pode usar comandos como `kill` (Mac/Linux) ou `taskkill` (Windows).',
            'Altere a porta padrão no seu arquivo de configuração (ex: `vite.config.js`).',
            'Reinicie seu computador como último recurso para limpar todos os processos.'
        ],
        aiPrompt: 'Recebi um erro "EADDRINUSE" no terminal, como mostra a imagem anexada. Preciso que você me ajude a liberar a porta ocupada. Forneça o comando de terminal apropriado para o meu sistema operacional (identifique-o se possível) para encontrar e encerrar o processo que está usando a porta. Depois, explique como executar o comando.'
    },
    {
        title: 'Erros de Runtime',
        icon: (
            <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38zM12 5.394L8.23 11H12v2.606L15.77 8H12V5.394z" clipRule="evenodd" />
                </svg>
            </div>
        ),
        location: 'DevTools',
        locationIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        explanation: 'Ocorrem com o aplicativo rodando. Geralmente, acontecem ao tentar fazer algo impossível, como ler uma propriedade de um valor que é `null` ou `undefined` (vazio).',
        codeExample: `Uncaught TypeError: Cannot read properties of null (reading 'name')\n    at App.tsx:15:20`,
        causes: ['Tentar acessar dados que ainda não foram carregados de uma API.', 'Uma variável que não foi inicializada corretamente.', 'Um elemento do DOM que não foi encontrado no HTML.'],
        impact: 'Causa uma quebra na execução do JavaScript, o que pode "congelar" a aplicação ou impedir que certas funcionalidades funcionem como esperado.',
        troubleshootingSteps: [
            'Use a aba "Console" do DevTools para ver a mensagem de erro completa e a "pilha de chamadas" (stack trace) que mostra onde o erro ocorreu.',
            'Adicione `console.log()` antes da linha do erro para inspecionar o valor da variável que está causando o problema.',
            'Use a aba "Sources" do DevTools para adicionar "breakpoints" e pausar a execução do código, permitindo inspecionar tudo em detalhes.',
            'Adicione verificações no código, como `if (variavel)` ou `if (variavel !== null)`, antes de tentar usá-la.'
        ],
        aiPrompt: 'A imagem em anexo mostra um erro de runtime no console do meu navegador. Analise a mensagem de erro e o stack trace. Corrija o código diretamente no editor, adicionando as verificações necessárias (como checagens de `null` ou `undefined`) para prevenir a quebra. Depois, explique por que o erro estava acontecendo.'
    },
    {
        title: 'Erros de Rede',
        icon: (
             <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </div>
        ),
        location: 'DevTools',
        locationIcon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        explanation: 'Ocorrem quando o app tenta buscar dados na internet (uma API), mas a comunicação falha, o endereço não é encontrado, ou há um problema de permissão (CORS).',
        codeExample: `GET https://api.example.com/data 404 (Not Found)\nAccess to fetch at '...' from origin '...' has been blocked by CORS policy.`,
        causes: ['URL da API incorreta (erro 404).', 'Problemas no servidor da API (erro 500).', 'Falta de conexão com a internet.', 'Restrições de segurança do navegador (CORS).'],
        impact: 'A aplicação não consegue carregar dados, resultando em loaders infinitos, mensagens de erro ou conteúdo ausente na tela.',
        troubleshootingSteps: [
            'Verifique a aba "Network" no DevTools. Clique na requisição com erro para ver detalhes sobre o status e a resposta.',
            'Confirme se a URL da API está correta e se o servidor está no ar.',
            'Se for um erro de CORS, a correção geralmente precisa ser feita no lado do servidor (backend).',
            'Verifique sua conexão com a internet.'
        ],
        aiPrompt: 'Estou enfrentando um erro de rede, como visto na imagem anexada do DevTools. Analise a mensagem de erro (seja CORS, 404, etc.) e o código que faz a requisição. Corrija o código do frontend se houver um erro óbvio (como uma URL digitada errada). Se for um problema de CORS, explique o que é e qual configuração o backend precisa ter para permitir minha requisição.'
    },
    {
        title: 'Erros de UI/CSS',
        icon: (
             <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
               <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304zm12.02-12.02l.625 .625a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-.625 6.25a3.75 3.75 0 01-6.25-.625l-6.402-6.401a3.75 3.75 0 010-5.304l.625-.625a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 006.25.625a3.75 3.75 0 00.625 6.25l-6.402 6.401" />
                </svg>
            </div>
        ),
        location: 'DevTools',
        locationIcon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        explanation: 'Ocorrem quando o layout está quebrado, um estilo não foi aplicado, ou elementos estão sobrepostos, resultando em uma aparência visual incorreta.',
        codeExample: `.my-class {\n  background-color: primari;\n  /* 'primari' não é uma cor válida */\n}`,
        causes: ['Erro de digitação no nome de uma classe CSS.', 'Conflitos de especificidade entre seletores CSS.', 'Propriedades de layout (Flexbox/Grid) mal configuradas.', 'Estilos de um componente vazando e afetando outros.'],
        impact: 'A experiência do usuário é degradada. A página pode se tornar difícil de usar, ilegível ou simplesmente parecer "quebrada", mesmo que a lógica esteja funcionando.',
        troubleshootingSteps: [
            'Use a aba "Elements" do DevTools. Selecione o elemento com problema e inspecione os estilos aplicados na aba "Styles".',
            'O DevTools permite que você altere, adicione ou remova estilos em tempo real para testar correções.',
            'Verifique se os nomes das classes no seu HTML/JSX correspondem exatamente aos nomes no seu CSS.',
            'Analise a especificidade dos seletores. Estilos mais específicos (como IDs) sobrescrevem os menos específicos (como classes).'
        ],
        aiPrompt: 'Meu layout está quebrado, como mostra a imagem anexada. Analise a imagem e o código CSS/HTML relacionado. Identifique o problema de estilo (pode ser de layout, cor, espaçamento, etc.) e corrija o código diretamente no editor. Explique qual propriedade CSS estava causando o problema e como sua correção resolveu a questão visual.'
    }
    ];

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Catálogo de Erros Comuns
                </h2>
                <p className="mt-2 max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                    Aprender a reconhecer os tipos de erro mais comuns é o primeiro passo para se tornar um depurador eficaz. Cada categoria de erro tem suas próprias causas e soluções típicas.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {errorData.map(error => <ErrorInfoCard key={error.title} {...error} onViewDetails={() => setSelectedError(error)} />)}
            </div>
            
            <ErrorDetailsModal 
                isOpen={!!selectedError}
                onClose={() => setSelectedError(null)}
                errorData={selectedError}
            />
        </div>
    );
};


export const devGuideTopics: DevGuideTopic[] = [
  {
    title: 'Introdução',
    slug: 'introducao',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Uma Espiada nos Bastidores</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Bem-vindo ao nosso guia! Pense nele como um manual de instruções amigável sobre como os sites e aplicativos são construídos e, mais importante, como os "probleminhas" (que chamamos de 'bugs') são resolvidos.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Vamos desvendar juntos os bastidores da tecnologia de uma forma simples e clara, sem a necessidade de conhecimento técnico.
        </p>
      </div>
    ),
  },
  {
    title: 'Terminal vs. DevTools',
    slug: 'terminal-vs-devtools',
    content: (
     <div className="space-y-6">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Onde os Problemas Acontecem?
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                Entender onde um erro aparece é o primeiro passo para resolvê-lo. Alguns acontecem na "fábrica" (o Terminal), antes mesmo do programa ser entregue. Outros acontecem no "palco" (o DevTools), quando você já está usando o aplicativo.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-slate-100">
                    <span className="text-orange-500 font-mono text-2xl">&gt;_</span>
                    A Fábrica (Terminal)
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Onde o aplicativo é construído.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                    Aqui, o computador lê as instruções e monta o programa. Se houver um erro nesta fase, é como um problema na linha de montagem de um carro.
                </p>
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Causas Comuns:</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                        <li><strong>Instruções mal escritas:</strong> Um simples erro de digitação no código.</li>
                        <li><strong>Peças incompatíveis:</strong> Tentar usar uma ferramenta que não se encaixa com as outras.</li>
                        <li><strong>Problema na "planta":</strong> O arquivo de configuração principal tem alguma informação errada.</li>
                        <li><strong>Ferramenta faltando:</strong> Uma peça necessária para a construção não foi encontrada.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Impacto:</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                        O aplicativo <strong>nem chega a ligar</strong>. É como tentar dar partida em um carro sem motor. Nada acontece para o usuário final.
                    </p>
                </div>
            </div>

            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-slate-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    O Palco (DevTools)
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Onde o aplicativo está rodando para você.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                    Aqui, o programa já está montado e funcionando no seu navegador. Os erros que aparecem são como imprevistos durante uma peça de teatro.
                </p>
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Causas Comuns:</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                        <li><strong>Lógica impossível:</strong> O programa tenta fazer algo que não faz sentido, como dividir por zero.</li>
                        <li><strong>Falha de comunicação:</strong> A conexão com a internet cai bem na hora de buscar uma informação.</li>
                        <li><strong>Elemento "fantasma":</strong> O código tenta interagir com um botão ou imagem que não está (ainda) na tela.</li>
                        <li><strong>Conflito de estilos:</strong> A "decoração" visual do site não carrega direito ou uma "tinta" cobre a outra.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Impacto:</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                        Uma parte do site <strong>para de funcionar</strong>. Um botão pode não responder, uma imagem pode não aparecer, ou a página pode "congelar".
                    </p>
                </div>
            </div>
        </div>
    </div>
    ),
  },
  {
    title: 'Tipos de Erros',
    slug: 'tipos-de-erros',
    content: <TiposDeErrosComponent />,
  },
  {
    title: 'Debugging',
    slug: 'debugging',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">O Que é "Debugar"?</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Imagine que você é um detetive e um crime (o "bug") aconteceu. <strong>"Debugar"</strong> (ou depurar) é o processo de investigar a cena, procurar pistas e encontrar o culpado para resolver o problema.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Em vez de uma lupa, os desenvolvedores usam ferramentas especiais para olhar "dentro" do código enquanto ele está funcionando. Eles podem pausar tudo em um momento exato para ver o que cada peça está fazendo e encontrar a pista que leva à solução.
        </p>
      </div>
    ),
  },
  {
    title: 'Anatomia de um Erro',
    slug: 'anatomia-de-um-erro',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Desvendando a Mensagem de Erro</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Uma mensagem de erro pode parecer assustadora, mas é na verdade um bilhete com pistas valiosas deixadas pelo "criminoso". Geralmente, ela nos diz três coisas:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>O Tipo do Problema:</strong> Uma etiqueta que diz que tipo de erro aconteceu (ex: "Erro de Gramática", "Objeto Perdido").</li>
            <li><strong>A Mensagem:</strong> Uma frase curta explicando o que deu errado (ex: "Não consegui encontrar a informação que você pediu").</li>
            <li><strong>O "GPS" do Erro:</strong> Um mapa que mostra o caminho exato dentro dos arquivos de código, apontando a linha exata onde o problema ocorreu. Isso ajuda o desenvolvedor a ir direto ao ponto.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Boas Práticas',
    slug: 'boas-praticas',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Como Evitar Erros</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          O melhor jeito de corrigir um erro é evitar que ele aconteça. Algumas práticas ajudam nisso:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Revisão Automática:</strong> Usar programas que funcionam como corretores ortográficos e de estilo para o código, garantindo que tudo esteja limpo, padronizado e sem erros comuns.</li>
            <li><strong>Construir com "LEGOs":</strong> Escrever o código em pequenas peças independentes (módulos). Assim, se uma peça der problema, é mais fácil consertá-la sem quebrar o resto do "brinquedo".</li>
            <li><strong>Usar um "Idioma" Mais Seguro:</strong> Programar com ferramentas que impõem regras mais rígidas. É como ter um assistente que verifica se todas as peças se encaixam corretamente antes mesmo de ligar o programa.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Conclusão',
    slug: 'conclusao',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Erros São Amigos</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Erros não são vilões; são professores disfarçados. Cada problema resolvido é uma lição aprendida que torna o aplicativo melhor e o desenvolvedor mais experiente.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Entender como eles funcionam é o primeiro passo para construir tecnologias incríveis e confiáveis para todos nós usarmos.
        </p>
      </div>
    ),
  },
];
