var path = require('path');

var fs = require('fs');

var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');

var simple = require(lib + '/simpleMath.js');

var advanced = require(lib + '/advancedMath.js');

module.exports = {
	simple: simple,
	advanced: advanced
};