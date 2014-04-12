#! /usr/bin/env node

var JSONcompare = require("./lib/JSONcompare.js"),
    path = require("path");

if (process.argv.length >= 4) {
    JSONcompare.showOutput = true;

    var args = [];
    for(var i = 2; i < process.argv.length; i++) {
        // todo need replative to cwd
        args.push(path.normalize(process.argv[i]));
    }

    console.log(args);

    JSONcompare.compare.apply(null, args);
}