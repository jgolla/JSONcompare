'use strict';

var JSONcompare = require('../lib/JSONcompare.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['compare'] = {
  setUp: function(done) {
    JSONcompare.showOutput = false;
    done();
  },
  'same file': function(test) {
    test.expect(1);
    test.equal(JSONcompare.compare("../test/a.json", "../test/a.json"), true, "should be true.");
    test.done();
  },
  'same file, multiple time': function(test) {
    test.expect(1);
    test.equal(JSONcompare.compare("../test/a.json", "../test/a.json", "../test/a.json", "../test/a.json"), true, "should be true.");
    test.done();
  },
  'differnt files, same keys': function(test) {
    test.expect(1);
    test.equal(JSONcompare.compare("../test/a.json", "../test/a2.json"), true, "should be true.");
    test.done();
  },
  'differnt keys': function(test) {
    test.expect(1);
    test.equal(JSONcompare.compare("../test/a.json", "../test/b.json"), false, "should be false.");
    test.done();
  },
  'differnt keys, different objects': function(test) {
    test.expect(1);
    test.equal(JSONcompare.compare("../test/a.json", "../test/c.json"), false, "should be false.");
    test.done();
  },
  'should throw on less than two args': function(test) {
    //test.expect(1);
    test.throws(function() { JSONcompare.compare("../test/a.json"); });
    test.done();
  }
};
