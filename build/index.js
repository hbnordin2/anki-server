'use strict';

var _Math = require("./Math");

var fs = require('fs');

var path = require('path');

exports.get = function (event, context, callback) {
  var contents = fs.readFileSync("public".concat(path.sep, "index.html"));
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {
      'content-type': 'text/html'
    }
  };
  callback(null, result);
};

exports.returnOk = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: new _Math.Math().timesByTwo(5)
  });
};