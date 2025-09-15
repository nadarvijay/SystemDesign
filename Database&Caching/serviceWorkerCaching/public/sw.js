const CACHE_NAME = 'my-cache-v5';

const urls = [
    '/',
    '/index.html',
    '/styles.css',
    'app.js',
    'downArrow.gif'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urls))
    )
});

// returning directly from cache
// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(response => {
//                 return response || fetch(event.request)
//             })
//     );
// });

// activate event triggered whenever a new version is introduced
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key != CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        })
    )
})

// network first strategy
self.addEventListener('fetch', e => {
    // fetch from the network first
    e.respondWith(
        fetch(e.request)
            .then(res => {
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, res.clone());
                })
                return res;
            })
            .catch(err => {
                return caches.match(e.request).then(file => file);  // serve from cache if offline
            })
    )
})
