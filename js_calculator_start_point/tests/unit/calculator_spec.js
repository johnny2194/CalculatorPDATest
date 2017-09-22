var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("Should add 1 to a zero sum previous balance", function() {
    calculator.add(1)
    assert.equal(1, calculator.runningTotal);
  });

  it("Should add 3 to a previousTotal of 5", function() {
    calculator.previousTotal = 5                
    calculator.add(3)
    assert.equal(8, calculator.runningTotal);
  });

  it("Should subtract 3 from a previousTotal of 5", function() {
    calculator.previousTotal = 5                
    calculator.subtract(3)
    assert.equal(2, calculator.runningTotal);
  });

  it("Should subtract 3 from a previousTotal of 0", function() {            
    calculator.subtract(3)
    assert.equal(-3, calculator.runningTotal);
  });

  it("Should multiply a previousTotal of 5, by 3", function() {
    calculator.previousTotal = 5                
    calculator.multiply(3)
    assert.equal(15, calculator.runningTotal);
  });

  it("Should divide a previousTotal of 12, by 4", function() {
    calculator.previousTotal = 12               
    calculator.divide(4)
    assert.equal(3, calculator.runningTotal);
  });

  it("New input number should replace runningTotal if no operator has been immediately used before hand", function() {
    calculator.runningTotal = 12               
    calculator.numberClick(4)
    assert.equal(4, calculator.runningTotal);
  });


  it("New input number should replace runningTotal if no operator has been immediately used before hand and balance is 0", function() {             
    calculator.numberClick(4)
    assert.equal(4, calculator.runningTotal);
  });

  it("Previous operator should be +", function() {             
    calculator.operatorClick('+')
    assert.equal('+', calculator.previousOperator);
  });


  it("Previous operator should be -", function() {             
    calculator.operatorClick('-')
    assert.equal('-', calculator.previousOperator);
  });

  it("Previous operator should be /", function() {             
    calculator.operatorClick('/')
    assert.equal('/', calculator.previousOperator);
  });

  it("Previous operator should be *", function() {             
    calculator.operatorClick('*')
    assert.equal('*', calculator.previousOperator);
  });

  it("If running total is 2, the previous operator is +, previous number is 3 and operator + has been clicked, should sum 2 with 3 as new running total", function() { 
    calculator.runningTotal = 2           
    calculator.previousOperator = '+'
    calculator.previousTotal = 3
    calculator.operatorClick('+')
    assert.equal(5, calculator.runningTotal);
  });

   it('Can clear screen', function() {
     calculator.numberClick(10);
     calculator.clearClick();
     assert.equal(0, calculator.runningTotal);
   });

  it('Can do a calculation and then clear', function() {
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(calculator.previousTotal, 8);
    calculator.clearClick();
    assert.equal(calculator.previousTotal, null);
  });

  it('can clear halfway through operation', function() {
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(20);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 120);
  });
  
});
