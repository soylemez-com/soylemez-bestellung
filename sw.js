self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Offline/Cache yönetimi gerekirse burada yapılır
});
