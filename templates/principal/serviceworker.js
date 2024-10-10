{% comment %} console.log("hola SW") {% endcomment %}
{% comment %} globalThis.addEventListener("fetch", event => {
    console.log(`http: ${event.request.url}`);

    event.respondWhith(new Response("Ya nos queremos ir UnU"));
}) {% endcomment %}
globalThis.addEventListener("install", event => {
    caches.open("pwa").then(cache => {
        cache.addAll(["manifest.json"]);
    })
})