function Calculator() {
	this.vals = [];
}

Calculator.prototype._getAB = function() {
	var obj = {};
	obj.A = this.vals.pop();
	obj.B = this.vals.pop();
	return obj;
}

Calculator.prototype._err_message = function(len) {
	if (this.vals < len) {
		throw 'calculator is empty';
		return false;
	} else return true;
}

Calculator.prototype.value = function() {
	this._err_message(1);
	return this.vals[this.vals.length - 1];
}

Calculator.prototype.push = function (val) {
	this.vals.push(val);
}

Calculator.prototype._doWork = function(func) {
	if (this._err_message(2)) {
		var obj = this._getAB();
		this.vals.push(func(obj))
	}
}

Calculator.prototype.plus = function() {
	this._doWork(function(obj) {
		return obj.A - obj.B;
	});
}

Calculator.prototype.minus = function() {
	this._doWork(function(obj) {
		return obj.B - obj.A;
	});
}

Calculator.prototype.times = function() {
	this._doWork(function(obj) {
		return obj.B * obj.A;
	});
}

Calculator.prototype.divide = function() {
	this._doWork(function(obj) {
		return obj.B / obj.A;
	});
}

// Calculator.prototype.plus = function() {
// 	this._err_message(2);
// 	var obj = this._getAB();
// 	this.vals.push(obj.A + obj.B);
// }

// Calculator.prototype.minus = function() {
// 	this._err_message(2);
// 	var obj = this._getAB();
// 	this.vals.push(obj.B - obj.A);
// }

// Calculator.prototype.times = function() {
// 	this._err_message(2);
// 	var obj = this._getAB();
// 	this.vals.push(obj.B * obj.A);
// }

// Calculator.prototype.divide = function() {
// 	this._err_message(2);
// 	var obj = this._getAB();
// 	this.vals.push(obj.B / obj.A);
// }

module.exports = Calculator;
