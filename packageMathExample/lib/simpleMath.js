//We inject a dependency
var callCounter = require("./callCounter.js");

var simpleMath = simpleMath || {};

simpleMath.add = function(x,y){
	callCounter.countCall();
	return x+y;
};
simpleMath.subtract = function(x,y){
	callCounter.countCall();
	return x+y;
};

//export modules

module.exports = simpleMath;