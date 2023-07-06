install:
	npm ci
prettier:
	npx prettier --write .

lint:
	npx eslint . 

publish:
	npm publish --dry-run . 

test:
	npm test