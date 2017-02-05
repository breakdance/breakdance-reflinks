'use strict';

require('mocha');
var Breakdance = require('breakdance');
var assert = require('assert');
var reflinks = require('..');
var breakdance;

describe('breakdance-reflinks', function() {
  beforeEach(function() {
    breakdance = new Breakdance({reflinks: true});
  });

  it('should export a function', function() {
    assert.equal(typeof reflinks, 'function');
  });

  it('should generate reference links', function() {
    breakdance.before('eos', reflinks());

    assert.equal(breakdance.render('<a href="/some-link"></a>', {domain: 'https://github.com'}), '[][href-0]\n\n[href-0]: https://github.com/some-link\n');
  });
});

