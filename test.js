'use strict';

exports.googlecdnify = {
  loads: function (test) {
    var googlecdnify = require('./tasks/googlecdnify');
    test.ok(googlecdnify !== undefined);

    test.done();
  }
};

