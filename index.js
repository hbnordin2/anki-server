'use strict';

let fs = require('fs');
let path = require('path');

exports.get = function(event, context, callback) {
    let contents = fs.readFileSync(`public${path.sep}index.html`);
    let result = {
        statusCode: 200,
        body: contents.toString(),
        headers: {'content-type': 'text/html'}
    };

    callback(null, result);
};

exports.returnOk = function(event, context, callback) {
  return callback(null, {statusCode: 200})
};