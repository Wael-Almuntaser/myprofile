const cacheName = "app-cache-v1";
const filesToCache = [
    "./",
    "./index.html",
    "./css/styles.css",
    "./js/script.js",
    "./manifest.json",
    "./icon-512x512.png",
    "./images/about.png",
    "./images/home.png",
    "./images/icon-512x512.PNG",
    "./images/icons8-c-sharp-logo-50.png",
    "./images/lastproject1.jpg",
    "./images/lastproject10.jpg",
    "./images/lastproject11.jpg",
    "./images/lastproject12.jpg",
    "./images/lastproject2.jpg",
    "./images/lastproject3.jpg",
    "./images/lastproject4.jpg",
    "./images/lastproject5.jpg",
    "./images/lastproject6.jpg",
    "./images/lastproject7.jpg",
    "./images/lastproject8.jpg",
    "./images/lastproject9.jpg"
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
