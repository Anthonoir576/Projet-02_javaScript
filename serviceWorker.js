// constante et variable
const myCache = "monCache";
const source = ['/', '/index.html', '/source/css/style.css'];

// Listener de mise en cache
self.addEventListener('install', event => {

    event.waitUntil(

        caches.open(myCache).then((caches) => {

            caches.addAll(source)

        })

    )

});

// recuperer le cache lorsque l'utilisateur est hors ligne
self.addEventListener('fetch', (event) => {

    // console.log(event.request);   Pour testé que c'est ok

    event.respondWith(

        caches.match(event.request).then((cache) => {
            return cache || fetch(event.request);
        })

    );

});