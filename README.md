# REST Wrapper

This package implements methods creating JavaScript proxy objects to JSON REST APIs from definition files in a simple JSON format. A number of reference definitions are also included.

### Usage

First install the package via npm:

    npm install git+https://github.com/olegp/restwrapper.git
    
To use the package in your project:

    var generate = require('restwrapper').generate;
    var api = {
      "feed/{feed}": ["GET"]
    };
    var ff = generate("http://friendfeed-api.com/v2/", api);
    console.log(ff.getFeed("oleg"));
    
The generate method performs a one way mapping from the API definition to a proxy object. The methods on the proxy objects are defined as follows:

  * the first component of the name is the HTTP method used in lower case, e.g. `get`, `post`, `put`, `delete`
  * subsequent components are the fixed components extracted from the API endpoint URL  with the first character in caps, e.g. `Feed`
  * the method accepts the API endpoint URL variable components as parameters in the same order that they appear in the URL, e.g. in the example above "oleg" maps to "{feed}"
  * two additional optional parameters can be passed after the URL parameters, the request parameters object and the request headers object, e.g. `ff.getFeed("oleg", {start: 10}, {"User-Agent": "restwrapper"})`  

If you use the same request parameters or HTTP headers for all API calls, you can pass them in as additional optional parameters to the `generate` call. These will be used by default when calling any of the proxy methods, but could still be explicitly overridden. 

The following environments are supported:

  * server side synchronous usage on Node.js (via [Common Node](http://olegp.github.com/common-node/)), RingoJS and other CommonJS compatible implementations
  * server side asynchronous usage on Node.js with results and error passed into a callback (work in progress)
  * command line usage via a REPL (work in progress)
  * client side usage via a proxy running on the server (work in progress)
  
A number of ready made API definitions are included in the [apis directory](http://github.com/olegp/restwrapper/master/apis/). To use them directly, you can do the following:

    var ff = require('restwrapper').api('friendfeed');

### Contributing

Contributions to this project in the form of new API definitions are very welcome. Please fork the project, add your definition file to the `apis` directory and send a pull request.

### License 

(The MIT License)

Copyright (c) 2011 Oleg Podsechin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.