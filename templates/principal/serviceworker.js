console.log("Hola Alumnos");
const url=["manifest.json","/"];

globalThis.addEventListener("install", event => {
     caches.open("pwa").then(cache => {
         cache.addAll(["manifest.json", "/static/1.jpg", "/static/2.jpg", "/static/3.jpg", "/static/4.jpg", "/static/5.jpg",]);
     })
})
globalThis.addEventListener("fetch", (event) => {
    console.log(´HTTP: ${event.request.url}´);
    event.respondWith(
        caches.match(event.request)
        .then (response){
            if(response) {
                return response
        }else{
            return fetch (event.request)
        
        }
    }
    );
});