//We inject a dependency
var callCounter = require("./callCounter.js");

var advancedMath = advancedMath || {};

advancedMath.multiply = function(x, y){
	callCounter.countCall();
	return x*y;
};

advancedMath.divide = function(x, y){
	callCounter.countCall();
	return x/y;
};

advancedMath.fibo = function(count){
	callCounter.countCall();
	return this.private_fibo(count);
};

advancedMath.private_fibo = function(count, counter, first, second) {
	if (count == 0) return 0;
	if (counter == undefined) {
		counter = 1
		first = 1;
		second = 2;
	}
	result = first + second;
	if (counter == count) return result;
	this.private_fibo(count, ++counter, second, result)
	return result;
}

module.exports = advancedMath;