const CACHE_NAME = 'mycache2';
const CACHE_URLS = ['/home', '/cart'];

// installing service worker and opening cache
console.log('service worker registerd')
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(openedCache => {
      console.log('cache opened');
      return openedCache.addAll(CACHE_URLS);
    })
  );
});

// listening for the requests
self.addEventListener('fetch', event => {

})


// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('Cleaning Old Cache')
            return caches.delete(name);
          }
        })
      );
    })
  )
})