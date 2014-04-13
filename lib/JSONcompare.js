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

var log = function(message) {
    if(compare.showOutput) {
        console.log(message);
    }
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
            log("Missing proptery " + prop);
            return false;
        }
    }

    return result;
};

compare.compare = function() {

    if(arguments.length < 2) {
        throw "compares at least 2 files";
    }

    var master = require(arguments[0]),
        result = true;

    for(var i = 1; i < arguments.length; i++) {
        var output = "Comparing " + arguments[0] + " to " + arguments[i];
        log(output);

        var currentResult = compareJSON(master, require(arguments[i]));

        if(currentResult) {
            log("Files have the same keys".pass);
        } else {
            log("Files do not have the same keys".fail);
        }

        result = result && currentResult;
    }

    return result;
};

compare.showOutput = false;

module.exports = compare;