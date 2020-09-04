#### hirokihello micro service sample (hhms)

openapiを使ってマイクロサービスを構築するためのサンプルapp

openapi + openapi generator + express

expressのサーバー構築と、そこへのアクセス用のsdkをサクッとローカルで試せる

#### 構築

```
brew tap mongodb/brew
brew services start mongodb-community
brew services start mongodb-community
```

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
