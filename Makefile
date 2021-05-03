welcome:
	cat Makefile
run:
	deployctl run website.ts
develop:
	deployctl run --watch website.ts