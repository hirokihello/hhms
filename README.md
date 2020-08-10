#### sdkとしてpublishして使うテスト

name: test
password: test

```
# 事前に行う
npm adduser --registry http://localhost:4873
```

```
# 起動
make run

# generate
make generate-sdk

# publish
make publish-sdk

# install
make install
```
