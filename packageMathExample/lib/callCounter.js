var app = app || {};

app.internalCallCounter = 0;

app.countCall = function(){
	++this.internalCallCounter;
	console.log("You have made " + this.internalCallCounter + " calls!!");
};

module.exports = app;