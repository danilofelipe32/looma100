import React from 'react';

interface DevGuideTopic {
  title: string;
  slug: string;
  content: React.ReactNode;
}

export const devGuideTopics: DevGuideTopic[] = [
  {
    title: 'Introdução',
    slug: 'introducao',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Introdução ao Guia</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Bem-vindo ao Guia do Desenvolvedor. Esta seção é dedicada a fornecer as melhores práticas,
          tutoriais e insights para construir aplicações web robustas e eficientes.
        </p>
      </div>
    ),
  },
  {
    title: 'Terminal vs. DevTools',
    slug: 'terminal-vs-devtools',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Terminal vs. DevTools</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Tanto o terminal quanto as ferramentas de desenvolvedor do navegador (DevTools) são essenciais no dia a dia.
          O terminal é poderoso para automação, scripts e gerenciamento de projetos, enquanto o DevTools é imbatível para
          inspecionar o DOM, depurar JavaScript no navegador e analisar o desempenho da rede.
        </p>
      </div>
    ),
  },
  {
    title: 'Tipos de Erros',
    slug: 'tipos-de-erros',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Tipos de Erros Comuns</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Entender os tipos de erros é o primeiro passo para resolvê-los. Os mais comuns incluem:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>SyntaxError:</strong> Erros na sintaxe do código.</li>
            <li><strong>ReferenceError:</strong> Tentativa de usar uma variável que não foi declarada.</li>
            <li><strong>TypeError:</strong> Uma operação é realizada em um valor do tipo errado.</li>
            <li><strong>NetworkError:</strong> Erros relacionados a requisições de rede.</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: 'Debugging',
    slug: 'debugging',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Estratégias de Debugging</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Depurar é uma arte. Utilize `console.log` para saídas rápidas, mas domine o uso de `breakpoints` no DevTools
          para inspecionar o estado da aplicação em pontos específicos, analisar a pilha de chamadas e executar código passo a passo.
        </p>
      </div>
    ),
  },
  {
    title: 'Anatomia de um Erro',
    slug: 'anatomia-de-um-erro',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Anatomia de um Erro</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Uma mensagem de erro geralmente contém três partes cruciais: o tipo do erro (ex: `TypeError`), a mensagem
          descritiva (ex: 'Cannot read properties of undefined') e o 'stack trace', que aponta o arquivo e a linha
          onde o erro ocorreu.
        </p>
      </div>
    ),
  },
  {
    title: 'Boas Práticas',
    slug: 'boas-praticas',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Boas Práticas</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Adote práticas que previnem erros, como usar linters (ESLint), formatadores (Prettier),
          escrever código modular e testável, e utilizar sistemas de tipos como TypeScript para
          pegar erros em tempo de desenvolvimento.
        </p>
      </div>
    ),
  },
  {
    title: 'Conclusão',
    slug: 'conclusao',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Conclusão</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Encarar erros como oportunidades de aprendizado transforma a experiência de desenvolvimento.
          Com as ferramentas e estratégias certas, você pode depurar de forma eficiente e construir
          software de alta qualidade.
        </p>
      </div>
    ),
  },
];
