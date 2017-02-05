'use strict';

/**
 * Adds a `.reflinks` method to a [breakdance][] `Compiler` instance.
 *
 * ```js
 * var Breakdance = require('breakdance');
 * var breakdance = new Breakdance();
 *
 * var reflinks = require('breakdance-reflinks');
 * var options = {};
 * breakdance.before('eos' reflinks(options));
 * ```
 * @param {String} `options` Plugin options
 * @return {Function} Returns a function that takes an instance of `Breakdance`.
 * @api public
 */

module.exports = function() {
  return function(/*node*/) {
    var keys = Object.keys(this.state.links);
    var len = keys.length;
    var idx = -1;

    while (++idx < len) {
      let key = keys[idx];
      let links = this.state.links[key];

      for (let i = 0; i < links.length; i++) {

        // add padding, now that we know that links exist
        if (idx === 0 && i === 0) {
          this.output += '\n\n';
        }

        this.output += '[' + key + '-' + i + ']: ' + links[i] + '\n';
      }
    }
  };
};
