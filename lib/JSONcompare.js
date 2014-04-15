/*
 * JSONcompare
 * https://github.com/jgolla/JSONcompare
 *
 * Copyright (c) 2014 jgolla
 * Licensed under the MIT license.
 */

'use strict';

var compare = {};

compare.outputLog = [];
compare.types = {
    "message": "message",
    "fail": "fail",
    "pass": "pass"
};

var log = function(message, type) {
    compare.outputLog.push({ "message": message, "type": type });
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
            log("Missing proptery " + prop, compare.types.fail);
            return false;
        }
    }

    return result;
};

compare.compare = function() {

    if(arguments.length < 2) {
        throw "compares at least 2 files";
    }

    // todo if the args are strings, convert all to obj

    compare.outputLog.length = 0;

    var master = require(arguments[0]),
        result = true;

    for(var i = 1; i < arguments.length; i++) {
        var output = "Comparing " + arguments[0] + " to " + arguments[i];
        log(output, compare.types.message);

        var currentResult = compareJSON(master, require(arguments[i]));

        if(currentResult) {
            log("Files have the same keys", compare.types.pass);
        } else {
            log("Files do not have the same keys", compare.types.fail);
        }

        result = result && currentResult;
    }

    return result;
};

module.exports = compare;