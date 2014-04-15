#! /usr/bin/env node

var JSONcompare = require("./lib/JSONcompare.js"),
    path = require("path");


require("colors");

if (process.argv.length >= 4) {
    JSONcompare.showOutput = false;

    var args = [],
        cwd = process.cwd();

    for(var i = 2; i < process.argv.length; i++) {
        args.push(path.resolve(cwd, process.argv[i]));
    }

    JSONcompare.compare.apply(null, args);

    JSONcompare.outputLog.forEach(function(item) {
        if(item.type == "fail") {
            console.log(item.message.red);
        } else if(item.type == "pass") {
            console.log(item.message.green);
        } else {
            console.log(item.message);
        }
    });
}