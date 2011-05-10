var generate = require('index').generate;

test = function() {
  var api = {
    "feed/{feed}": ['GET']
  };
  var ff = generate("http://friendfeed-api.com/v2/", api);
  return ff.getFeed("oleg");
};