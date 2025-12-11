/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'rm-explorer-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline-ru.html',
  '/offline-en.html',
  '/offline-kz.html',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/favicon.ico'
];

// Install - cache app shell & offline pages
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error('Cache install failed:', err))
  );
  self.skipWaiting();
});

// Activate - delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

// Fetch - offline page / network first / cache first
self.addEventListener('fetch', event => {
  const { request } = event;

  // HTML navigation → choose offline page by browser language
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(async () => {
        let lang = 'en'; // fallback

        try {
          const url = new URL(request.url);
          const langParam = url.searchParams.get('lang');
          if (langParam === 'ru') lang = 'ru';
          else if (langParam === 'kk') lang = 'kz';
        } catch (e) {
          // если URL не парсится, оставляем en
        }

        const offlinePage = `/offline-${lang}.html`;
        const cache = await caches.match(offlinePage);
        return cache || caches.match('/offline-en.html');
      })
    );
    return;
  }

  // Network First for API requests
  const url = new URL(request.url);
  if (url.origin === 'https://rickandmortyapi.com') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          return caches.match(request).then(cached => {
            if (cached) return cached;
            return new Response(
              JSON.stringify({ error: 'Offline', message: 'Unable to fetch API while offline' }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          });
        })
    );
    return;
  }

  // Cache First for static assets (CSS, JS, images)
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request)
        .then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          // fallback for images
          if (request.destination === 'image') {
            return new Response(
              `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                 <rect width="300" height="300" fill="#2a2a2a"/>
                 <text x="50%" y="50%" text-anchor="middle" fill="#68ed29" font-size="20">Offline</text>
               </svg>`,
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
        });
    })
  );
});
