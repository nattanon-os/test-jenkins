


var feeBank = require('../index');
var assert = require('assert');
describe('bank', function() {
  describe('Kbank to SCB', function() {
    it('amount = 1', function() {
      var form = 'a'
      var to = 'b'
      var amount = 1
      assert.equal(feeBank(form, to, amount),0);
    });
    it('amount = 500', function() {
      var form = 'a'
      var to = 'b'
      var amount = 500
      assert.equal(feeBank(form, to, amount),0);
    });
    it('amount = 4999', function() {
      var form = 'a'
      var to = 'b'
      var amount = 4999
      assert.equal(feeBank(form, to, amount),0);
    });
    it('amount = 5000', function() {
      var form = 'a'
      var to = 'b'
      var amount = 5000
      assert.equal(feeBank(form, to, amount),0);
    });
    it('amount = 5001', function() {
      var form = 'a'
      var to = 'b'
      var amount = 5001
      assert.equal(feeBank(form, to, amount),1);
    });
    
    it('amount = 10001', function() {
      var form = 'a'
      var to = 'b'
      var amount = 10001
      assert.equal(feeBank(form, to, amount),2);
    });
    
    it('amount = 10001', function() {
      var form = 'a'
      var to = 'b'
      var amount = 15001
      assert.equal(feeBank(form, to, amount),3);
    });
  });
  describe('Kbank to Kbank', function() {
    it('amount = 1', function() {
      var form = 'a'
      var to = 'a'
      var amount = 1
      assert.equal(feeBank(form, to, amount),0);
    });
    it('amount = 5001', function() {
      var form = 'a'
      var to = 'a'
      var amount = 5001
      assert.equal(feeBank(form, to, amount),0);
    });
    
    it('amount = 10001', function() {
      var form = 'a'
      var to = 'a'
      var amount = 10001
      assert.equal(feeBank(form, to, amount),0);
    });
  });
  describe('NULL', function() {
    it('amount = -1', function() {
      var form = 'a'
      var to = 'a'
      var amount = -1
      assert.equal(feeBank(form, to, amount),null);
    });
    it('amount = 0', function() {
      var form = 'a'
      var to = 'a'
      var amount = 0
      assert.equal(feeBank(form, to, amount),null);
    });
    
    it('amount = 20001', function() {
      var form = 'a'
      var to = 'a'
      var amount = 20001
      assert.equal(feeBank(form, to, amount),null);
    });
    
    it('amount = 20.4', function() {
      var form = 'a'
      var to = 'a'
      var amount = 20.4
      assert.equal(feeBank(form, to, amount),null);
    });
  });
});