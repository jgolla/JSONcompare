# JSONcompare [![Build Status](https://secure.travis-ci.org/jgolla/JSONcompare.png?branch=master)](http://travis-ci.org/jgolla/JSONcompare)

JSON key comparison tool.

## Getting Started
Install the module with: `npm install JSONcompare`

```javascript
var JSONcompare = require('JSONcompare');
var haveSameKeys = JSONcompare.compare(FULL_PATH_TO_JSON_FILE, ANOTHER_FULL_PATH);
```

## Documentation
### Settings
_Properties_
showOutput - boolean value used to determine if output should be logged to the console.

_Functions_
compare(master, compare1, ..., compareN) - compares the master file with each of the input compare files. Returns true if each compare has all of the same keys as the master.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 jgolla
Licensed under the MIT license.
