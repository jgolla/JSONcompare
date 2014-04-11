#! /usr/bin/env node

var JSONcompare = require("./JSONcompare.js");

if (process.argv.length >= 4) {
    JSONcompare.compare.apply(null, process.argv.slice(2));
}