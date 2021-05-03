addEventListener("fetch", (event) => {
  const response = new Response("🫖", {
    headers: { "content-type": "text/plain" },
    status: 418,
  });
  event.respondWith(response);
});
