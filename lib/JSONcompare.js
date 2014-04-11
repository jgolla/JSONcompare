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

colors.setTheme ({
    pass: "green",
    fail: "red"
});

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

var log = function(message) {
    if(compare.showOutput) {
        console.log(message);
    }
};

compare.compare = function() {

    if(arguments.length < 2) {
        throw "compares at least 2 files";
    }

    var master = require(arguments[0]);
    var i;
    var result = true;

    for(i = 1; i < arguments.length; i++) {
        var child = require(arguments[i]);
        var currentResult = compareJSON(master, child);
        var output = "Comparing " + arguments[0] + " to " + arguments[i] + " are equal " + currentResult;
        if(currentResult) {
            output = output.pass;
        } else {
            output = output.fail;
        }

        log(output);
        result = result && currentResult;
    }

    log("Overall result is " + result);

    return result;
};

compare.showOutput = false;

module.exports = compare;