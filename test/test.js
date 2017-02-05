'use strict';

require('mocha');
var Breakdance = require('breakdance');
var assert = require('assert');
var reflinks = require('..');
var breakdance;

describe('breakdance-reflinks', function() {
  beforeEach(function() {
    breakdance = new Breakdance();
  });

  it('should export a function', function() {
    assert.equal(typeof reflinks, 'function');
  });

  it('should generate reference links', function() {
    breakdance.before('eos', reflinks());

    isEqual.inline('<a href="/some-link"></a>', '[][href-0]\n\n[href-0]: https://github.com/some-link', {domain: 'https://github.com', reflinks: true});
  });
});

