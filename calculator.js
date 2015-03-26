function Calculator() {
	this.vals = 0;
}

Calculator.prototype.add = function(val) {
	this.vals += val;
}

Calculator.prototype.subtract = function(val) {
	this.vals -= val;
}

Calculator.prototype.value = function() {
	return this.vals;
}

module.exports = Calculator;