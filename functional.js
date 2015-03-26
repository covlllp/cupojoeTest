function countWords(str) {
	return str.split(" ").length;
}

function makeAdder(A) {
	return function(x) {
		return x + A;
	}
}

function forEach(arr, func) {
	if (arr.constructor === Array) {
		for (var i = 0; i < arr.length; i++) {
			func(arr[i]);
		}
	} else {
		for (var i in arr) {
			func(arr[i]);
		}
	}
}

function map(arr, func) {
	var rtn = [];
	forEach(arr, function(item) {
		rtn.push(func(item));
	});
	return rtn;
}

function filter(arr, func) {
	var rtn = [];
	forEach(arr, function(item) {
		if (func(item)) rtn.push(item);
	});
	return rtn;
}

function contains(arr, val) {
	var bool = false;
	forEach(arr, function(item) {
		if (val == item) bool = true;
	})
	return bool;
}

function reduce(arr, ind, func) {
	var A = arr[ind];
	for (var i = ind + 1; i < arr.length; i++) {
		A = func(A, arr[i]);
	}
	return A;
}

function countWordsInReduce(a, b) {
	num_b = countWords(b);
	if (typeof a == 'string') return countWords(a) + num_b;
	else return a + num_b;
}

function sum(arr) {
	function add(a, b) {
		return a + b;
	}
	return reduce(arr, 0, add);
}

function every(arr, func) {
	var rtn = true;
	forEach(arr, function(item) {
		if (!func(item)) rtn = false;
	});
	return rtn;
}

function any(arr, func) {
	var rtn = false;
	var arg_length = arguments.length;

	forEach(arr, function(item) {
		if (arg_length == 1) {
			if (item) rtn = true;
		} else {
			if (func(item)) rtn = true;
		}
	});
	return rtn;
}

function once(func) {
	var bool = true;
	function wrapper() {
		if (bool) {
			bool = false;
			return func.apply(this, arguments);
		}
	}
	return wrapper;
}