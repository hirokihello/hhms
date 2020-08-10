const express = require('express');
const exegesisExpress = require('exegesis-express');
const http = require('http');
const path = require('path');

async function createServer() {
  const options = {
    controllers: path.resolve(__dirname, './controllers'),
    allowMissingControllers: false,
  };

  const exegesisMiddleware = await exegesisExpress.middleware(
    path.resolve(__dirname, './openapi.yml'),
    options
  );

  const app = express();

  // If you have any body parsers, this should go before them.
  app.use(exegesisMiddleware);

  // Return a 404
  app.use((req, res) => {
    res.status(404).json({ message: `Not found` });
  });

  // Handle any unexpected errors
  app.use((err, req, res, next) => {
    res.status(500).json({ message: `Internal error: ${err.message}` });
  });

  const server = http.createServer(app);

  return server;
}

const mongoose = require('mongoose');

// 一般的には, `mongodb://localhost/test` の指定になります
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo 接続エラー ctrl + c:'));
db.once('open', () =>  {
  console.log('DB接続中... You can cancel from ctrl + c')
});

// modelの型の定義作成
const userSchema = mongoose.Schema({
  name: String
});

// migration的なsomething
const User = mongoose.model('User', userSchema);

User.find({name: "Silence"}, function(err, result) {
  if (err) throw err;
  if (result) return

  const silence = new User({ name: 'Silence' });
  silence.save(function (err) {
    if (err) return handleError(err);
  });
});

createServer()
  .then(server => {
    server.listen(3000);
    console.log('Listening on port 3000');
    console.log('Try visiting http://localhost:3000/greet?name=Jason');
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

exports.Models = {
  User
}
