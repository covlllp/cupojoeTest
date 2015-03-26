var chai = require('chai');
var expect = chai.expect;
var Calculator = require('./calculator');

describe("Calculator", function() {

  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("initially has 0", function() {
    expect(calculator.value()).to.equal(0);
  });

	it("can add a number", function() {
		calculator.add(2);
    expect(calculator.value()).to.equal(2);
	});

	it("can add two numbers", function() {
		calculator.add(2);
		calculator.add(3);
    expect(calculator.value()).to.equal(5);
	});

	it("can add many numbers", function() {
		calculator.add(2);
		calculator.add(3);
		calculator.add(4);
    expect(calculator.value()).to.equal(9);
	});

	it("can subtract a number", function() {
		calculator.subtract(2);
    expect(calculator.value()).to.equal(-2);
	});

	it("can add and subtract", function() {
		calculator.add(3);
		calculator.subtract(2);
    expect(calculator.value()).to.equal(1);
	});
});
