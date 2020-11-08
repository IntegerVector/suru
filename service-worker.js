const CACHE_NAME = 'prefetch-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/suru',
  '/suru/index.html',
  '/suru/manifest.webmanifest',
  '/suru/service-worker.js',
  '/suru/icons/icon-192x192.png',
  '/suru/icons/icon-512x512.png',
  '/suru/icons/checked.svg',
  '/suru/icons/delete.svg',
  '/suru/icons/plus.svg',
  '/suru/icons/src-icon.svg',
  '/suru/css/app.css',
  '/suru/js/app.js',
  '/suru/js/app.js.map',
  '/suru/js/chunk-vendors.js',
  '/suru/js/chunk-vendors.js.map'
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
