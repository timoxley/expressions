docs:
	cat index.js | dox --api > tmp.md
	node docs.js tmp.md > body.md
	cat head.md > README.md
	cat body.md >> README.md
	cat tail.md >> README.md
	rm body.md
	rm tmp.md

.PHONY: docs
