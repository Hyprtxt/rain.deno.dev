welcome:
	cat Makefile
run: 
	deno run --allow-net --allow-write --allow-read --unstable bigscrape.js
	