'use strict';

var _Math = require("./Math");

var fs = _interopRequireWildcard(require("fs"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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