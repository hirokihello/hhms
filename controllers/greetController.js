exports.getGreeting = function getGreeting(context) {

  var MyApi = require('my_api');

  var api = new MyApi.DefaultApi()
  const client = MyApi.ApiClient
  const instance = client.instance
  const instance2 = client.instance

  instance.basePath = "http://localhost:3000"
  console.log(instance2.basePath, "インスタンスが書き換わっているか調査")
  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  };
  api.getTest(callback);

  const name = context.params.query.name;
  return { message: `Hello ${name}` };
};
