var assert = require('assert');
var dice = require('../index')
var chai = require('chai');
var expect = chai.expect;

describe('test function extract', function() {
    it('test successful case', function() {
        expect(dice.extract()).to.be.a('number');
        assert.equal(typeof dice.extract(), 'number');
        
        expect(dice.extract(3)).to.be.a('array');
        assert.equal(typeof dice.extract(3), 'object');
        
        assert.equal(dice.extract(3).length, 3);
        expect(dice.extract(3)).to.have.lengthOf(3);
    });

    it('test insuccessful case', function() {
        assert.equal(dice.extract(-10), 'times must be a positive number');
        assert.equal(dice.extract('pippo'), 'times must be a positive number');
        assert.equal(dice.extract(false), 'times must be a positive number');
        assert.equal(dice.extract(true), 'times must be a positive number');
    });
});
