// The main code file of your application

// The setup of the basic Akshell library
require('ak').setup();


// The index page handler
var IndexHandler = Handler.subclass(
  {
    get: function (request) {
      return render(
        'index.html',
        {
          header: 'Hello World!'
        });
    }
  });


// The URL -> handler mapping
exports.root = new URLMap(
  IndexHandler, 'index');
