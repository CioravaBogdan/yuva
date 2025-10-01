// Service Worker pentru Infant.ro Shopify Theme
// Advanced caching strategy pentru performanță maximă

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `infant-theme-${CACHE_VERSION}`;
const OFFLINE_PAGE = '/offline.html';

// Assets de cache-uit imediat la instalare
const PRECACHE_ASSETS = [
  '/',
  '/collections',
  '/pages/about',
  '/pages/contact',
];

// Patterns pentru cache strategies
const CACHE_STRATEGIES = {
  // Network First - pentru pagini dinamice
  networkFirst: [
    /\/cart/,
    /\/account/,
    /\/checkouts/,
  ],
  
  // Cache First - pentru assets statice
  cacheFirst: [
    /\.css$/,
    /\.js$/,
    /\.woff2?$/,
    /\.ttf$/,
    /\.eot$/,
    /\.svg$/,
    /\.png$/,
    /\.jpg$/,
    /\.jpeg$/,
    /\.gif$/,
    /\.webp$/,
  ],
  
  // Stale While Revalidate - pentru produse și colecții
  staleWhileRevalidate: [
    /\/products\//,
    /\/collections\//,
  ],
};

// Install event - precache assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[Service Worker] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - handle caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests (except CDN)
  if (url.origin !== location.origin && !url.origin.includes('cdn.shopify.com')) {
    return;
  }
  
  // Determine strategy
  const strategy = determineStrategy(request.url);
  
  event.respondWith(
    executeStrategy(strategy, request)
      .catch(() => {
        // Fallback to offline page for navigation
        if (request.mode === 'navigate') {
          return caches.match(OFFLINE_PAGE);
        }
        return new Response('Offline', { status: 503 });
      })
  );
});

// Determine caching strategy based on URL
function determineStrategy(url) {
  // Network First
  if (CACHE_STRATEGIES.networkFirst.some(pattern => pattern.test(url))) {
    return 'networkFirst';
  }
  
  // Cache First
  if (CACHE_STRATEGIES.cacheFirst.some(pattern => pattern.test(url))) {
    return 'cacheFirst';
  }
  
  // Stale While Revalidate
  if (CACHE_STRATEGIES.staleWhileRevalidate.some(pattern => pattern.test(url))) {
    return 'staleWhileRevalidate';
  }
  
  // Default: Network First
  return 'networkFirst';
}

// Execute caching strategy
async function executeStrategy(strategy, request) {
  switch (strategy) {
    case 'cacheFirst':
      return cacheFirst(request);
    
    case 'networkFirst':
      return networkFirst(request);
    
    case 'staleWhileRevalidate':
      return staleWhileRevalidate(request);
    
    default:
      return fetch(request);
  }
}

// Cache First strategy
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  const response = await fetch(request);
  
  if (response.ok) {
    cache.put(request, response.clone());
  }
  
  return response;
}

// Network First strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    
    if (cached) {
      return cached;
    }
    
    throw error;
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  // Return cached immediately, but fetch in background
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    });
  
  return cached || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-cart') {
    event.waitUntil(syncCart());
  }
});

// Sync cart when back online
async function syncCart() {
  console.log('[Service Worker] Syncing cart...');
  // Implementation pentru sincronizare cart
}

// Push notifications (optional)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const title = data.title || 'Infant.ro';
  const options = {
    body: data.body || 'Nou mesaj de la Infant.ro',
    icon: data.icon || '/icon-192x192.png',
    badge: '/badge-72x72.png',
    data: data.url || '/',
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data)
  );
});

console.log('[Service Worker] Loaded');
