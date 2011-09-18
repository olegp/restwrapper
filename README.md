# REST Wrapper

This package implements methods creating JavaScript proxy objects to JSON REST APIs from definition files in a simple JSON format. A number of reference definitions are also included.

### Usage

First install the package via npm:

    npm install restwrapper
    
To use the package in your module:

    var generate = require('restwrapper').generate;

The following environments are supported:

  * server side synchronous usage on Node.js (via Common Node), RingoJS and other CommonJS compatible implementations
  * server side asynchronous usage on Node.js with results and error passed into a callback (work in progress)
  * command line usage via a REPL (work in progress)
  * client side usage via a proxy running on the server (work in progress) 

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