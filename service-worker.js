const CACHE_NAME = 'prefetch-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/service-worker.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/css/app.css',
  '/js/app.js',
  '/js/app.js.map',
  '/js/chunk-vendors.js',
  '/js/chunk-vendors.js.map'
];

self.addEventListener('install', async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(FILES_TO_CACHE);
  return self.skipWaiting();
});

self.addEventListener('activate', async () => {
  self.clients.claim();
});

self.addEventListener('fetch', async event => {
  const url = event.request;
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(url);

  event.respondWith(cached);
});
