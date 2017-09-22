var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have have multiple working number buttons', function() {
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1156')
  })

  it('should be able to do calculations', function() {
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('15')
    });

    it('should be able to chain multiple calculations', function() {
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-10')
    });

    it('should not be able to divide by 0', function() {
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('Cannot Divide By Zero');
    });

});