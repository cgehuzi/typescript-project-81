install:
	npm ci

build:
	rm -rf ./dist && npx tsc

test:
	npx vitest

lint:
	npx eslint .