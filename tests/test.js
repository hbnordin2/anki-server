'use strict';

let test = require('unit.js');
let index = require('../build/index.js');

describe('Tests index', function() {
  it('verifies successful response', function(done) {
    index.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('Congratulations');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });

  it('holder test', function(done) {
      index.returnOk({ /* event */ }, { /* context */ }, (err, result) => {
          try {
              test.number(result.statusCode).is(200);
              test.number(result.body).is(10);
              done();
          } catch(error) {
              done(error);
          }
      });
  });
});
