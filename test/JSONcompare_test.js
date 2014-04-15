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
    done();
  },
  'same file': function(test) {
    test.expect(4);
    test.equal(JSONcompare.compare("../test/a.json", "../test/a.json"), true, "should be true.");
    test.equal(JSONcompare.outputLog.length, 2, "should be two messages in the log");
    test.equal(JSONcompare.outputLog[0].type, JSONcompare.types.message, "first log should be the message");
    test.equal(JSONcompare.outputLog[1].type, JSONcompare.types.pass, "second log should be the pass");
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
    test.expect(5);
    test.equal(JSONcompare.compare("../test/a.json", "../test/b.json"), false, "should be false.");
    test.equal(JSONcompare.outputLog.length, 3, "should be two messages in the log");
    test.equal(JSONcompare.outputLog[0].type, JSONcompare.types.message, "first log should be the message");
    test.equal(JSONcompare.outputLog[1].type, JSONcompare.types.fail, "second log should be the failure");
    test.equal(JSONcompare.outputLog[2].type, JSONcompare.types.fail, "third log should be the failure");
    test.done();
  },
  'differnt keys, different objects': function(test) {
    test.expect(1);
    test.equal(JSONcompare.compare("../test/a.json", "../test/c.json"), false, "should be false.");
    test.done();
  },
  'should throw on less than two args': function(test) {
    test.expect(1);
    test.throws(function() { JSONcompare.compare("../test/a.json"); });
    test.done();
  }
};
