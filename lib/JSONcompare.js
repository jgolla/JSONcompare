#! /usr/bin/env node

/*
 * JSONcompare
 * https://github.com/jgolla/JSONcompare
 *
 * Copyright (c) 2014 jgolla
 * Licensed under the MIT license.
 */

'use strict';

var compare = {},
    colors = require("colors");

var showDirections = function() {
    console.log("directions");
};

var compareJSON = function(master, child) {

    var result = true;

    if (typeof master !== "object" && typeof child !== "object") {
        return true;
    }

    for(var prop in master) {
        if(child[prop]) {
            result = result && compareJSON(master[prop], child[prop]);
        } else {
            return false;
        }
    }

    return result;
};

compare.compare = function() {

    if(arguments.length < 2) {
        showDirections();
        return false;
    }

    var master = require(arguments[0]);
    var i;
    var result = true;

    for(i = 1; i < arguments.length; i++) {
        var child = require(arguments[i]);
        var currentResult = compareJSON(master, child);
        var output = "Comparing " + arguments[0] + " to " + arguments[i] + " are equal " + currentResult;
        if(currentResult)
            output = output.green;
        else
            output = output.red;

        console.log(output);
        result = result && currentResult;
    }

    console.log("Overall result is " + result);

    return result;
};

module.exports = compare;

if (process.argv.length >= 4) {
    compare.compare.apply(null, process.argv.slice(2));
}