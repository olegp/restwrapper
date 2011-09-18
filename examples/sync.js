var generate = require('../lib/restwrapper').generate;
var api = {
	"feed/{feed}": ["GET"]
};
var ff = generate("http://friendfeed-api.com/v2/", api);
console.log(ff.getFeed("oleg"));