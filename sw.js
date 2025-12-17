const CACHE_NAME = "bombo-news-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/profile.jpg",
  "/manifest.json",
  // Note: We do NOT cache the API calls, as those need fresh data.
];

// Install Event: Caches all necessary static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Event: Intercepts network requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Cache miss - try to fetch from network
      return fetch(event.request).catch((error) => {
        // This is crucial for offline support:
        // If the network request fails (user is offline),
        // and the resource isn't in the cache, you could
        // return a generic offline page here.
        console.error("Fetch failed for:", event.request.url, error);
      });
    })
  );
});

// Activate Event: Cleans up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
