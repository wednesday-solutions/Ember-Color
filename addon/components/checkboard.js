import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '../utils/checboard';
import layout from '../templates/components/checkboard';

export default Component.extend({
  layout,
  size: 8,
  white: 'transparent',
  grey: 'rgba(0, 0, 0, 0.08)',
  attributeBindings: ['style'],

  style: computed('white', 'size', 'grey', function() {
    let { white, size, grey } = this;
    return `background: url(${ get(white, grey, size) }) center left`;
  })
});
