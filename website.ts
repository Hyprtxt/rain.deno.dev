addEventListener("fetch", (event) => {
  const response = new Response(
    "<!Doctype HTML><html><head><title>I'm a teapot</title><meta charset='UTF-8'/></head><body>🫖</body></html>",
    {
      headers: { "content-type": "text/html" },
      status: 418,
    }
  );
  event.respondWith(response);
});
