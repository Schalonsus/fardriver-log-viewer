// Service Worker: nimmt geteilte Logdateien entgegen (Web Share Target) und hält die Seite offline verfügbar.
const SHELL = "viewer-shell-v1";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", event => {
  const req = event.request, url = new URL(req.url);
  if (req.method === "POST" && url.pathname.endsWith("/share-target")) {
    event.respondWith((async () => {
      try {
        const fd = await req.formData();
        const cache = await caches.open("shared-logs");
        for (const k of await cache.keys()) await cache.delete(k);
        let i = 0;
        for (const f of fd.getAll("logs")) {
          if (!(f instanceof File)) continue;
          await cache.put(new Request("shared/" + (i++) + "-" + encodeURIComponent(f.name || "log.csv")), new Response(f, { headers: { "Content-Type": "text/csv" } }));
        }
      } catch (e) {}
      return Response.redirect(new URL("./?shared=1", self.registration.scope).href, 303);
    })());
    return;
  }
  if (req.method !== "GET" || url.origin !== location.origin) return;
  event.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(r => r || caches.match("./"))));
});
