#! /usr/bin/env node

var JSONcompare = require("./lib/JSONcompare.js"),
    path = require("path");

if (process.argv.length >= 4) {
    JSONcompare.showOutput = true;

    var args = [],
        cwd = process.cwd();

    for(var i = 2; i < process.argv.length; i++) {
        args.push(path.resolve(cwd, process.argv[i]));
    }

    JSONcompare.compare.apply(null, args);
}