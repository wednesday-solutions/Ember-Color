import Component from '@ember/component';
import layout from '../templates/components/swatches-group';

export default Component.extend({
  layout,
  hexColorGroup: null,
  activeColor: null,
  onClick: null
});
