var HttpClient = require('httpclient').HttpClient;

exports.generate = function(base, endpoints, suffix) {
  function camelCase(string) {
		return string.charAt(0).toUpperCase() + string.substring(1);
	}
	function isArgument(component) {
		return component.indexOf("{") == 0 && 
						(component.indexOf("}") == component.length - 1);
	}
	var proxy = {};
	for(var key in endpoints) {
		var methods = endpoints[key];
		var eps = key.split('/');
		for(var i = 0, l = methods.length; i < l; i ++) {
			var meth = methods[i];
			var name = [], locs = [];
			for(var j = 0, m = eps.length; j < m; j ++) {
				var component = eps[j];
				if(isArgument(component)) {
					locs.push(j);
				} else {
					name.push(camelCase(component));
				}
			}
			proxy[meth.toLowerCase() + name.join('')] = function() {
				var method = meth, endpoint = key, components = eps, locations = locs;				
				return function() {
					var args = Array.prototype.slice.call(arguments);
					var url = [base];
					for(var k = 0, n = components.length; k < n; k ++) {
						if(isArgument(components[k])) {
							url.push(args.shift());
						} else {
							url.push(components[k]);
						}
						if(k != n - 1) {
							url.push('/');
						}
					}
          if(suffix) url.push(suffix);
					var headers = args.shift(), params = args.shift(), body = args.shift();
					if(params) {
						url.push("?");
						for(var param in params) {
							//TODO urlencode
							url.push(param, "=", params[param], "&");
						}
						url.pop();
					}
					// method + " " + url.join('') + " " + (body ? JSON.stringify(body) : '');
          var options = {method: method, url: url.join(''), body: body ? JSON.stringify(body) : []};
          var response = new HttpClient(options).finish();
          if(response.status == 200) {
            //TODO work with non JSON content types
            return response.body.toJSON();
          }
          //TODO figure out how to sensibly include the message in the Error
          throw new Error(response.body);
				}
			}();
		}
	}
	return proxy;
}

