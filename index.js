'use strict';

module.exports = function(options) {
  return function(node) {
    var str = '';

    for (var key in this.state.links) {
      if (this.state.links.hasOwnProperty(key)) {
        let links = this.state.links[key];

        for (let i = 0; i < links.length; i++) {
          str += '[' + key + '-' + i + ']: ' + links[i] + '\n';
        }
      }
    }
    if (str) {
      this.output += '\n\n' + str;
    }
  };
};
