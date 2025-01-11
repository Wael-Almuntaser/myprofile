const cacheName = "app-cache-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/script.js",
  "./manifest.json",
  "./icon-192x192.png",
  "./icon-512x512.png"
];

// تثبيت Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// استخدام الكاش عند عدم توفر الاتصال
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
