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
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Os "Sabores" Mais Comuns de Erros</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Assim como existem diferentes problemas no dia a dia, existem diferentes tipos de erros na programação. Os mais comuns são:
        </p>
        <ul className="space-y-3">
          <li><strong>O Erro de "Gramática":</strong> Acontece quando as instruções para o computador são escritas de forma incorreta, como uma frase em português com a ordem das palavras toda errada. O computador simplesmente não consegue entender.</li>
          <li><strong>O Erro do "Objeto Perdido":</strong> É como pedir a alguém para pegar um livro que não está na estante. O programa procura por uma informação ou ferramenta que não foi encontrada onde deveria estar.</li>
          <li><strong>O Erro da "Ferramenta Errada":</strong> Ocorre quando se tenta fazer uma operação com tipos de dados incompatíveis, como tentar somar um número com uma palavra. A conta não fecha!</li>
          <li><strong>O Erro de "Sinal Fraco":</strong> Acontece quando o aplicativo precisa buscar dados na internet (como carregar novas fotos), mas a conexão falha no meio do caminho.</li>
        </ul>
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