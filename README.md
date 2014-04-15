# JSONcompare [![Build Status](https://secure.travis-ci.org/jgolla/JSONcompare.png?branch=master)](http://travis-ci.org/jgolla/JSONcompare)

JSON key comparison tool.

## Getting Started
```javascript
var JSONcompare = require('JSONcompare');
var haveSameKeys = JSONcompare.compare(FULL_PATH_TO_JSON_FILE, ANOTHER_FULL_PATH);
```

## Documentation
### Settings
#### Properties
outputLog = Array of the output of each comparison. The objects in the array are in the form { message: "message", type: "type" }. The possible types are:
```javascript
compare.types = {
    "message": "message",
    "fail": "fail",
    "pass": "pass"
};
```

#### Functions
compare(master, compare1, ..., compareN) - compares the master file with each of the input compare files. Returns true if each compare has all of the same keys as the master.

## Examples
Running JSONcompare as an app.js
```javascript
var JSONcompare = require("./JSONcompare.js");

if (process.argv.length >= 4) {
    JSONcompare.compare.apply(null, process.argv.slice(2));
    JSONcompare.outputLog.forEach(function(item) {
        console.log(item.message);
    });
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 jgolla
Licensed under the MIT license.
