import Component from '@ember/component';
import layout from '../templates/components/circle-swatch';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  layout,
  color: null,
  isActive: false,
  onClick: null,
  onHover: null,
  circleSize: 30,
  'data-test-ember-color-circle-swatch': true,

  boxShadow: computed('circleSize', 'color', 'isActive', function() {
    let { circleSize, color, isActive } = this;
    if (isActive) {
      return htmlSafe(`${color} inset 0 0 0 3px, ${color} 0 0 5px`);
    }
    return htmlSafe(`inset 0 0 0 ${circleSize/2}px ${color}`);
  })
});
