.PHONY: run
run:
	docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
	node index.js

.PHONY: generate-sdk
generate-sdk:
	docker run--rm -v "/Users/inoue_h/ghq/github.com/hirokihello/hhms:/local" openapitools/openapi-generator-cli generate -i /local/openapi.yml -g javascript -o /local/dist

.PHONY: publish-sdk
publish-sdk:
	cd ./dist
	npm version patch
	npm publish --registry http://localhost:4873
	cd -

.PHONY: install
install:
	npm install
