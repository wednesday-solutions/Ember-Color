'use strict';
var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,
  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  },
  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  }
};
