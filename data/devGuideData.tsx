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
    content: (
      <div className="space-y-6">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Catálogo de Erros Comuns: Identifique e Destrua
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                Cada tipo de erro é uma pista. Aprender a reconhecê-los é como um detetive que conhece as assinaturas de cada criminoso. Abaixo estão os "suspeitos" mais comuns.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Erro de Sintaxe</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-orange-500">&gt;_</span>
                    <span>Onde aparece: <strong>Terminal</strong></span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                    É um erro de "gramática". O código viola as regras da linguagem, como esquecer um parêntese. O computador não entende e impede a "construção" do programa.
                </p>
                <pre className="bg-slate-200 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                  <code>{`const App = () => { return <div>Hello World`}</code>
                </pre>
                <div className="mt-auto pt-4 text-center">
                    <div className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-not-allowed opacity-75">
                        Ver Detalhes e Soluções
                    </div>
                </div>
            </div>

            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-orange-600 dark:text-orange-400">T</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Erro de Tipo (TS)</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-orange-500">&gt;_</span>
                    <span>Onde aparece: <strong>Terminal</strong></span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                    É o erro da "peça errada". Ocorre quando o código espera um número mas recebe um texto. A ferramenta avisa no terminal que as peças não são compatíveis.
                </p>
                <pre className="bg-slate-200 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                  <code>{`let idade: number = "vinte";`}</code>
                </pre>
                <div className="mt-auto pt-4 text-center">
                     <div className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-not-allowed opacity-75">
                        Ver Detalhes e Soluções
                    </div>
                </div>
            </div>

            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col">
                <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.816H7.923a3.375 3.375 0 00-3.285 2.816l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Erro de Servidor</h3>
                </div>
                 <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-orange-500">&gt;_</span>
                    <span>Onde aparece: <strong>Terminal</strong></span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                    Erro do "depósito central". O app precisa de algo do computador principal (servidor), mas ele está ocupado ou com problemas, impedindo o app de iniciar.
                </p>
                <pre className="bg-slate-200 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                  <code>{`Error: listen EADDRINUSE`}</code>
                </pre>
                <div className="mt-auto pt-4 text-center">
                    <div className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-not-allowed opacity-75">
                        Ver Detalhes e Soluções
                    </div>
                </div>
            </div>

            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col">
                <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38zM12 5.394L8.23 11H12v2.606L15.77 8H12V5.394z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Erro de Runtime</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Onde aparece: <strong>DevTools</strong></span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                    O erro do "imprevisto no palco". O aplicativo está rodando, mas tenta fazer algo impossível, como tentar ler o nome de um usuário que não existe.
                </p>
                <pre className="bg-slate-200 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                  <code>{`const user = null;\nconsole.log(user.name);`}</code>
                </pre>
                <div className="mt-auto pt-4 text-center">
                    <div className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-not-allowed opacity-75">
                        Ver Detalhes e Soluções
                    </div>
                </div>
            </div>
            
            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col">
                <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Erro de Rede</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Onde aparece: <strong>DevTools</strong></span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                    O erro do "sinal fraco". O app tenta buscar dados na internet (uma API), mas a conexão falha ou o endereço não é encontrado, quebrando a comunicação.
                </p>
                 <pre className="bg-slate-200 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                  <code>{`GET /api/data 404 Not Found`}</code>
                </pre>
                <div className="mt-auto pt-4 text-center">
                    <div className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-not-allowed opacity-75">
                        Ver Detalhes e Soluções
                    </div>
                </div>
            </div>

            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col">
                <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                       <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304zm12.02-12.02l.625 .625a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-.625 6.25a3.75 3.75 0 01-6.25-.625l-6.402-6.401a3.75 3.75 0 010-5.304l.625-.625a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 006.25.625a3.75 3.75 0 00.625 6.25l-6.402 6.401" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Erro de UI/CSS</h3>
                </div>
                 <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Onde aparece: <strong>DevTools</strong></span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                    O erro de "decoração". O layout está quebrado ou um estilo não foi aplicado, resultando em botões no lugar errado ou textos com a cor errada.
                </p>
                <pre className="bg-slate-200 dark:bg-slate-900/70 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto select-all">
                  <code>{`<div class="bg-primari"></div>`}</code>
                </pre>
                <div className="mt-auto pt-4 text-center">
                    <div className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-not-allowed opacity-75">
                        Ver Detalhes e Soluções
                    </div>
                </div>
            </div>
        </div>
      </div>
    ),
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