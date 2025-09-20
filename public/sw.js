
const CACHE_NAME = 'web-components-cache-v1';
// Adiciona todos os arquivos locais da aplicação ao cache do app shell
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/vite.svg',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/index.tsx',
  '/App.tsx',
  '/data/componentData.tsx',
  '/components/layout/Header.tsx',
  '/components/layout/Footer.tsx',
  '/components/ui/ComponentCard.tsx',
  '/components/ui/CodeBlock.tsx',
  '/types.ts'
];

// Evento de instalação: armazena o app shell em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching App Shell');
        return cache.addAll(APP_SHELL_URLS);
      })
      .catch(error => {
        console.error('Service Worker: Falha ao armazenar o app shell em cache', error);
      })
  );
});

// Evento de ativação: limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  return self.clients.claim();
});

// Evento de fetch: estratégia Cache-first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se tivermos uma resposta em cache, a retornamos.
        // Caso contrário, buscamos na rede.
        return response || fetch(event.request).then((fetchResponse) => {
          // Validação básica da resposta da rede
          if (!fetchResponse || fetchResponse.status !== 200 || (fetchResponse.type !== 'basic' && fetchResponse.type !== 'cors')) {
            return fetchResponse;
          }

          // Clona a resposta porque é um stream e só pode ser consumida uma vez.
          const responseToCache = fetchResponse.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              // Armazena em cache apenas requisições GET.
              if (event.request.method === 'GET') {
                cache.put(event.request, responseToCache);
              }
            });

          return fetchResponse;
        });
      })
  );
});
